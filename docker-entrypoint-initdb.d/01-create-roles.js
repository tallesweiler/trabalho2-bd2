db = db.getSiblingDB('pokeAPI');

// Role que permite apenas ler dados
db.createRole({
  role: "pokedexReader",
  privileges: [
    { resource: { db: "pokeAPI", collection: "pokemons" }, actions: ["find"] }
  ],
  roles: []
});

// Role que permite administrar a coleção (inserir/deletar)
db.createRole({
  role: "pokedexManager",
  privileges: [
    { resource: { db: "pokeAPI", collection: "pokemons" }, actions: ["find", "insert", "update", "remove"] }
  ],
  roles: []
});