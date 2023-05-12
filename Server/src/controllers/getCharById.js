const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById=async(req,res)=>{
  try {
    const {id}=req.params;
    const {data}=await axios (`${URL}/${id}`)
    if(!data.name) throw new Error(`ID: ${id} Not found`);
    const character={
      id:data.id,
      name:data.name,
      species:data.species,
      origin: data.origin,
      image: data.image,
      gender :data.gender,
      status: data.status
    }
    return res.status(200).json(character)

  } catch (error) {
   return error.message.includes("ID")
   ? res.status(404).send(error.message)
   :  res.status(500).send(error.response.data.error)
  }
}


module.exports = { getCharById };









/* const getCharById = (req, res) => {
  const {id} = req.params;
  axios(`${URL}/${id}`)
  .then(response=> response.data)
  .then(({status,name,species,origin,image,gender})=>{
    if(name){
      
      const character={
        id,
        name,
        species,
        origin,
        image,
        gender,
        status
      }
      return res.status(200).json(character)
    }
    return res.status(404).send("Not Found");
  })
  .catch(error=>res.status(500).send(error.message))
}; */





































/* const axios = require('axios');

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      const { name, species, image, gender, origin, status } = response.data;
      const character = {
        id,
        name,
        species,
        image,
        gender,
        origin,
        status,
      };
      return res
        .writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify(character));
    })
    .catch(error => {
      return res
        .writeHead(500, { 'Content-Type': 'text/plain' })
        .end(error.message);
    });
};

module.exports = { getCharById }; */




