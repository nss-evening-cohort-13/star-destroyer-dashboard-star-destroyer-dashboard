import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const deleteWeapons = (firebaseKey) => axios.delete(`${baseUrl}/weapons/${firebaseKey}.json`);

const getAllWeapons = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/weapons.json`)
    .then((response) => {
      const personnel = response.data;
      const array = [];
      if (personnel) {
        Object.keys(personnel).forEach((personnelId) => {
          array.push(personnel[personnelId]);
        });
      }
      resolve(array);
    })
    .catch((error) => reject(error));
});

const getSingleWeapon = (personnelFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/weapons/${personnelFirebaseKey}.json`
    )
    .then((response) => {
      const thisWeapon = response.data;
      resolve(thisWeapon);
    }).catch((error) => reject(error));
});

export default { deleteWeapons, getAllWeapons, getSingleWeapon };
