import globals from '../../helpers/data/globals';

const buttons = (object) => {
  console.warn(globals.getUser().uid);
  return `<a href="#" id="${object.firebaseKey}" class="btn btn-primary edit-personnel">Edit</a>
  <a id="delete__${object.firebaseKey}" href="#" class="delete btn btn-danger">Delete</a>`;
};

const personnelCard = (object) => {
  const isUser = globals.getUser();
  console.warn(isUser);
  const domString = $('#app').append(`
    <div class="personnel" id="personnel-${object.firebaseKey}">
  <div class="card" style="width: 18rem;">
  <img src="${object.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" id="name">${object.name}</h5>
    ${(isUser) ? buttons(object) : ''}
  </div>
</div>
    `);
  return domString;
};

export default { personnelCard };
