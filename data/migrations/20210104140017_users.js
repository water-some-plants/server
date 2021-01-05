exports.up = function(knex) {
    return knex.schema
    .createTable('users', users =>{
      users.increments();
  
      users.string('username', 25)
        .notNullable()
        .unique();
  
      users.string('password', 25)
          .notNullable();
  
      users.integer('phone_number')
    })
  
    .createTable('plants', plants =>{
      plants.increments();
  
      plants.string('nickname', 25)
          .notNullable();
      
      plants.string('species', 100)
          .notNullable();
  
      plants.string('h2o_frequency', 25)
          .notNullable();
  
      plants.string('picture', 250)
          
      plants.integer('user_id')
          .notNullable()
          .references('id')
          .inTable('users')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('plants');
  };
