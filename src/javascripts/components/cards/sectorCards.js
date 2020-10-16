import firebase from 'firebase/app';
import 'firebase/auth';

const sectorCard = (object) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href='#' id='${object.firebaseKey}' class='btn btn-primary edit-sectors'>Edit</a>
      <a id='delete__${object.firebaseKey}' href='#' class='delete btn btn-danger'>Delete</a>
  `;
  }

  const domString = $('#app').append(`
    <div class="weapons" id="sectors-${object.firebaseKey}">
  <div class="card" style="width: 18rem;">
      <h5 class="card-title" id="name">${object.name}</h5>
    ${buttons}
  </div>
  
</div>
    `);
  return domString;
};

export default { sectorCard };
