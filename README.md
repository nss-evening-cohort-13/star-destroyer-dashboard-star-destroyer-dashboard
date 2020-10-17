# Star Detroyer Dashboard - Group4


## Motivation
The motivation behind this project is to mock up a dashboard that has crud capabilities and uses an api (in this case, firebase)

## Build status
MVP

## Code Style
Javascript ES6, Jquery, HTML5, CSS3
Bootstrap, Firebase, axios

## ERD

[https://app.lucidchart.com/invitations/accept/8fcc899b-b72a-4cbb-8c25-2b613f560ca4](https://app.lucidchart.com/invitations/accept/8fcc899b-b72a-4cbb-8c25-2b613f560ca4)

## Figma

[https://www.figma.com/file/M02Fm31UO1mWNuRN4hfL7r/Star-Destroyer-Dashboard?node-id=0%3A1](https://www.figma.com/file/M02Fm31UO1mWNuRN4hfL7r/Star-Destroyer-Dashboard?node-id=0%3A1)
## URL

[https://star-destroyer-a0766.web.app](https://star-destroyer-a0766.web.app)

## Screenshots:
![](https://github.com/nss-evening-cohort-13/star-destroyer-dashboard-star-destroyer-dashboard/blob/development/Weapons%20Dashboard%20Screenshot.png)

![](https://github.com/nss-evening-cohort-13/star-destroyer-dashboard-star-destroyer-dashboard/blob/development/Personnel%20Dashboard%20Screenshot.png)

## Features
This site has a way to do crud functionality on Weapons, Personel, Sectors, and Enemies

## Code Example

```
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
```

## Team

Wendell, Will, Hunter, Jordan


