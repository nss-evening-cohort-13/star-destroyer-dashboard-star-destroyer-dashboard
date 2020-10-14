const personnelCard = (object) => {
  const domString = $('#app').append(`
      <div class="card personnel" style="width: 18rem;" id="${object.firebaseKey}">
  <img src="${object.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" id="name">${object.name}</h5>
    <a href="#" id="${object.firebaseKey}" class="btn btn-primary edit-personnel">Edit</a>
    <a href="#" class="btn btn-danger">Delete</a>
  </div>
</div>
    `);

  return domString;
};

export default { personnelCard };
