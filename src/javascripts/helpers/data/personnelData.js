import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPersonnel = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/personnel.json`).then((response) => {
    const personnel = response.data;
    const array = [];
    if (personnel) {
      Object.keys(personnel).forEach((personnelId) => {
        array.push(personnel[personnelId]);
      });
    }
    resolve(array);
  }).catch((error) => reject(error));
});

export default { getPersonnel };
