import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const deletePersonnel = (firebaseKey) => axios.delete(`${baseUrl}/personnel/${firebaseKey}.json`);

const getPersonnel = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/personnel.json`)
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


const getSinglePersonnel = (personnelFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/personnel/${personnelFirebaseKey}.json`
    )
    .then((response) => {
      const thisPersonnel = response.data;
      resolve(thisPersonnel);
    }).catch((error) => reject(error));
});

const updatePersonnel = (firebaseKey, personnelObject) => axios.patch(`${baseUrl}/personnel/${firebaseKey}.json`, personnelObject);

export default { getPersonnel, updatePersonnel, getSinglePersonnel, deletePersonnel };

