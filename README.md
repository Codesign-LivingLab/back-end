Pré-requisitos
===

- MongoDB > 3
- NodeJS 9
- NPM 4

Como rodar
===

```
./loadData.sh
npm install
node index.js
```

Se quiser mudar o endereço do mongo, basta setar a variavel de ambiente:
```
MONGO_URI="mongodb://user:senha@host:31941/codesign" node index.js
```

Pacotes usados para referência
===

```
mongoose@4
hapi
joi
```

Rotas
===

- POST /series
Cadastra uma nova série

Formato de entrada:
```
{
    "cartaz": "https://m.media-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY268_CR4,0,182,268_AL_.jpg",
    "titulo": "Breaking Bad",
    "dataEstreia": "2008-01-20",
    "elenco": ["Bryan Cranston", "Anna Gunn", "Aaron Paul"],
    "trailer": "https://www.youtube.com/watch?v=ab-XRTDE5Jc",
    "sinopse": "Walter White (Bryan Cranston) é um professor de química na casa dos 50 anos que trabalha em uma escola secundária no Novo México. Para atender às necessidades de Skyler (Anna Gunn), sua esposa grávida, e Walt Junior (RJ Mitte), seu filho deficiente físico, ele tem que trabalhar duplamente. Sua vida fica ainda mais complicada quando descobre que está sofrendo de um câncer de pulmão incurável",
    "temporadas": 4
}
```

Formato de saída:
```
{"id": "1489ht23h4t4023407234t24g434g", "mensagem": "Criado"}
```


- GET /series

Retorna uma lista de todas as séries cadastrada no banco

- GET /series/{id}

Retorna uma única série por ID
