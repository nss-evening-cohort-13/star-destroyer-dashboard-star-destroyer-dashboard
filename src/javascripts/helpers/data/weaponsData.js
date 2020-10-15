import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const deleteWeapons = (firebaseKey) => axios.delete(`${baseUrl}/weapons/${firebaseKey}.json`);

const getWeapons = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/weapons.json`)
    .then((response) => {
      const weapons = response.data;
      const array = [];
      if (weapons) {
        Object.keys(weapons).forEach((weaponsId) => {
          array.push(weapons[weaponsId]);
        });
      }
      resolve(array);
    })
    .catch((error) => reject(error));
});

const getSingleWeapons = (weaponsFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/weapons/${weaponsFirebaseKey}.json`
    )
    .then((response) => {
      const thisWeapons = response.data;
      resolve(thisWeapons);
    }).catch((error) => reject(error));
});

const updateWeapons = (firebaseKey, weaponsObject) => axios.patch(`${baseUrl}/weapons/${firebaseKey}.json`, weaponsObject);

const addWeapons = (data) => axios.post(`${baseUrl}/weapons.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/weapons/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default {
  deleteWeapons,
  getWeapons,
  addWeapons,
  updateWeapons,
  getSingleWeapons
};
