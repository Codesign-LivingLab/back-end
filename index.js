const Hapi = require('hapi')
const Serie = require('./banco/mongodb').Serie
const Joi = require('joi')

const server = new Hapi.server({
    port: 3000,
    host: 'localhost'
})

server.route({
    method: 'GET',
    path: '/ola',
    handler: async (request, h) => {
        return 'Hello, world!';
    }
})

server.route({
    method: 'GET',
    path: '/series',
    config: {
        cors: {
            origin: ['*']
        }
    },
    handler: async (request) => {
        return Serie.find()
    }
})

server.route({
    method: 'GET',
    path: '/series/{id}',
    config: {
        cors: {
            origin: ['*']
        },
        validate: {
            params: {
                id: Joi.string().required()
            }
        }
    },
    handler: async (request) => {
        const minhaSerie = await Serie.findById(request.params.id)

        if(!minhaSerie){
            throw new Error('Série não encontrada')
        }

        return minhaSerie
    }
})

server.route({
    method: 'POST',
    path: '/series',
    config: {
        validate: {
            payload: Joi.object({
                titulo: Joi.string().required(),
                dataEstreia: Joi.date().required(),
                cartaz: Joi.string().uri().required(),
                trailer: Joi.string().uri().required(),
                elenco: Joi.array().items(Joi.string()).required(),
                sinopse: Joi.string().required(),
                temporadas: Joi.number().required()
            })
        }
    },
    handler: async (request) => {

        const novaSerie = new Serie(request.payload)

        await novaSerie.save()

        return {id: novaSerie._id, mensagem: 'Criado'}

    }
})

server.start()
console.log('Escutando...')
