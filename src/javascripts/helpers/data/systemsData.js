import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSingleSystem = (sectorFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/planetarySystems/${sectorFirebaseKey}.json`
    )
    .then((response) => {
      const thisSector = response.data;
      resolve(thisSector);
    }).catch((error) => reject(error));
});

const getAllSystems = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/planetarySystems.json`)
    .then((response) => {
      const systems = response.data;
      const array = [];
      if (systems) {
        Object.keys(systems).forEach((systemsId) => {
          array.push(systems[systemsId]);
        });
      }
      resolve(array);
    })
    .catch((error) => reject(error));
});

export default { getSingleSystem, getAllSystems };
