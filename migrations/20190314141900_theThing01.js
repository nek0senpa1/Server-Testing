
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable('widgets', tbl => {
    
        tbl.increments();
  
        tbl.string('whosits', 255).notNullable();
    
    });
  
};
  
exports.down = function(knex, Promise) {
    
    return knex.schema.dropTableIfExists('widgets');
};