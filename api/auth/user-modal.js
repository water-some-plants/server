const db = require("../data/db-config");

module.exports = {
  add,
  update,
  findBy
};


  function findBy(filter) {
    return db("users").where(filter).orderBy("id");
  }

async function add(user) {
    try {
      const [id] = await db("users").insert(user, "id");
  
      return findById(id);
    } catch (error) {
      throw error;
    }
  }
//asgrsag
async function update(id, changes){
    const count =  await db("users").where({id}).update(changes)
    if (count) {
        return db("users").where({id}).first()
    } else{
        return Promise.resolve(null)
    }
}