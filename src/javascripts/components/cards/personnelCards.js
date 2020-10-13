const personnelCard = (object) => {
  const domString = $('#app').append(`
    <div class="card" style="width: 18rem;">
  <img src="${object.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" id="name">${object.name}</h5>
    <a href="#" class="btn btn-primary">Edit</a>
    <a href="#" class="btn btn-danger">Delete</a>
  </div>
</div>
    `);
  return domString;
};

export default { personnelCard };
