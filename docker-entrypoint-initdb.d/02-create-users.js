db = db.getSiblingDB('pokeAPI');

// Usuário comum (só leitura)
db.createUser({
  user: "ash_ketchum",
  pwd: "123",
  roles: [{ role: "pokedexReader", db: "pokeAPI" }]
});

// Usuário gerente (pode editar)
db.createUser({
  user: "prof_oak",
  pwd: "456",
  roles: [{ role: "pokedexManager", db: "pokeAPI" }]
});