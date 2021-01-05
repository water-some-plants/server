const db = require("../../data/dbConfig");

module.exports = {
  getAllPlants,
  add, 
  findBy,
  update,
  burn//this is the delete function since it wouldnt let me name it delete
};

function findBy(id) {
    return db('plants as p')
    .join('users as u', 'p.user_id', 'u.id')
    .select('u.username', 'p.nickname', 'p.species', 'p.h2ofrequency', 'p.picture')
    .where({'u.id': id})
}
  
function getAllPlants() {
  return db('plants')
}

async function add(plant){
    const [id] = await db("plants").insert(plant)//adds in the plant and collects the id that it is given
    return db('plants').where({ id }).first()//returns the plant that was added
}//this function requires that the plant being added be passed in as an object and the object needs to include the id of the user who is adding the plant

async function update(id, changes){
  const count =  await db("plants").where({id}).update(changes)
  if (count) {
      return db("plants").where({id}).first()
  } else{
      return Promise.resolve(null)
  }
}

async function burn(id) {
  const plant = await db('plants').where({ id }).first()
  if (!plant) return Promise.resolve(null)
  await db("plants").where({ id }).del()
  return Promise.resolve(plant)
}
