import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const deleteEnemies = (firebaseKey) => axios.delete(`${baseUrl}/enemies/${firebaseKey}.json`);

const getEnemies = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/enemies.json`)
    .then((response) => {
      const enemies = response.data;
      const array = [];
      if (enemies) {
        Object.keys(enemies).forEach((enemyId) => {
          array.push(enemies[enemyId]);
        });
      }
      resolve(array);
    })
    .catch((error) => reject(error));
});

const getSingleEnemy = (enemiesFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/enemies/${enemiesFirebaseKey}.json`
    )
    .then((response) => {
      const thisEnemy = response.data;
      resolve(thisEnemy);
    }).catch((error) => reject(error));
});

const addEnemy = (data) => axios.post(`${baseUrl}/enemies.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/enemies/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default {
  deleteEnemies,
  getEnemies,
  addEnemy,
  getSingleEnemy
};
