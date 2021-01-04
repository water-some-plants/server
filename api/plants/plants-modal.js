const db = require("../../data/dbConfig");

module.exports = {
  add, 
  find,
  update,
  burn//this is the delete function since it wouldnt let me name it delete
};


function find(id){
    return db("plants as p")
}

function add(plant){
    const [id] = await db("plants").insert(task)
    return db('plants').where({ id }).first()
}

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
  await db("plant").where({ id }).del()
  return Promise.resolve(task)
}