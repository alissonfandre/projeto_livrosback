exports.seed = function (knex){
  return knex("editoras").del()
  .then(function() {
      return knex("editoras").insert([
          {
              nome:"amalia", cidade: "criciuma", estado: "santa catarina", telefone: "(48)99746-1170", rua: "Rua são joão das quebradas",cep: "8817456"
          }
          

      ]);
  });
}
