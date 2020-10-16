import weaponsData from '../../helpers/data/weaponsData';

const updateWeaponsForm = (weaponsObj) => {
  $('#update-weapons-form').html(`
    <h2>Update Star Destroyer Weapons</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="p-name" value="${weaponsObj.name}" placeholder="Example: Kylo Ren">
      </div>
      <div class="form-group"
        <label for="image">Image Url</label>
        <input type="text" class="form-control" value="${weaponsObj.image}" id="p-image" placeholder="Enter image Url">
      </div>
      <button id="update-weapons-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Weapons</button>
    </form>`);

  $('#update-weapons-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#p-name').val() || false,
      image: $('#p-image').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert"> Please complete all fields.</div>'
      );
    } else {
      $('#error-message').html('');
      weaponsData
        .updateWeapons(weaponsObj.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Weapon has been updated!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));
    }
  });
};

export default { updateWeaponsForm };
