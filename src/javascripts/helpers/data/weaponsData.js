import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const deleteWeapons = (firebaseKey) => axios.delete(`${baseUrl}/weapons/${firebaseKey}.json`);
const getAllWeapons = () => new Promise((resolve, reject) => {
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

const getSingleWeapon = (weaponsFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/weapons/${weaponsFirebaseKey}.json`
    )
    .then((response) => {
      const thisWeapon = response.data;
      resolve(thisWeapon);
    }).catch((error) => reject(error));
});

const updateWeapons = (firebaseKey, weaponsObject) => axios.patch(`${baseUrl}/weapons/${firebaseKey}.json`, weaponsObject);

export default {
  deleteWeapons,
  getAllWeapons,
  getSingleWeapon,
  updateWeapons
};
