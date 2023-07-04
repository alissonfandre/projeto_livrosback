/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    
    return knex.schema.createTable('editoras', (table)=> {
        table.increments();
        table.string("nome",80).notNullable();
        table.string("cidade",60).notNullable();
        table.string("estado",100).notNullable();
        table.string("telefone",40).notNullable();
        table.string("rua",40).notNullable();
        table.string("cep",100).notNullable();
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
