const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharDetail(req, res) {
  const { detailId } = req.params;
  axios(URL + detailId).then(
    (response) => {
      const character = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.image,
        status: response.data.status,
        gender: response.data.gender,
        species: response.data.species,
        origin: response.data.origin.name,
      };
      return res.status(200).json(character);
    })
    .catch((error) => {res.status(500).send(error.message)})
}

module.exports = getCharDetail;
