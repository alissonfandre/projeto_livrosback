exports.seed = function (knex){
  return knex("autores").del()
  .then(function() {
      return knex("autores").insert([
          {
              nome:"alisson", sobrenome: "andre", idade: 18, data_nascimento: "27/05/2004", sexo:"Masculino", telefone: "(48)99752-3680"
          }
          

      ]);
  });
}