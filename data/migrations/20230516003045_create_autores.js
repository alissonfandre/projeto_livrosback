/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('autores', (table)=> {
        table.increments();
        table.string("nome",80).notNullable();
        table.string("sobrenome",60).notNullable();
        table.string("telefone",40).notNullable();
        table.integer("idade",3).notNullable();
        table.string("data_nascimento",40).notNullable();
        table.string("sexo",100).notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
