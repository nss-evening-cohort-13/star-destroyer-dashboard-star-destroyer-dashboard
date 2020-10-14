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

const addPersonnel = (data) => axios.post(`${baseUrl}/personnel.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/personnel/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default { deletePersonnel, 
                getPersonnel, 
                addPersonnel,
                updatePersonnel,
                getSinglePersonnel
               };
