import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const deleteSector = (firebaseKey) => axios.delete(`${baseUrl}/planetarySectors/${firebaseKey}.json`);

const getSingleSector = (sectorFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/planetarySectors/${sectorFirebaseKey}.json`
    )
    .then((response) => {
      const thisSector = response.data;
      resolve(thisSector);
    }).catch((error) => reject(error));
});

const getAllSectors = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/planetarySectors.json`)
    .then((response) => {
      const sectors = response.data;
      const array = [];
      if (sectors) {
        Object.keys(sectors).forEach((sectorId) => {
          array.push(sectors[sectorId]);
        });
      }
      resolve(array);
    })
    .catch((error) => reject(error));
});

const updateSector = (firebaseKey, sectorObject) => axios.patch(`${baseUrl}/planetarySectors/${firebaseKey}.json`, sectorObject);

const addSector = (data) => axios.post(`${baseUrl}/planetarySectors.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/planetarySectors/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default {
  deleteSector,
  getSingleSector,
  getAllSectors,
  addSector,
  updateSector
};
