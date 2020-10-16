import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

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

export default { getSingleSector, getAllSectors };
