import personnelData from '../../helpers/data/personnelData';

const updatePersonnelForm = (personnelObj) => {
  $('#update-personnel-form').html(`
    <h2>Update Star Destroyer Personnel</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="p-name" value="${personnelObj.name}" placeholder="Example: Kylo Ren">
      </div>
      <div class="form-group"
        <label for="image">Image Url</label>
        <input type="text" class="form-control" value="${personnelObj.image}" id="p-image" placeholder="Enter image Url">
      </div>
      <button id="update-personnel-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Personnel</button>
    </form>`);

  personnelData.getPersonnel().then((response) => {
    response.forEach((item) => {
      $('select').append(
        `<option value="${item.firebaseKey}" ${
          personnelObj.firebaseKey === item.firebaseKey
            ? "selected ='selected'"
            : ''
        }>${item.name}</option>`
      );
    });
  });
  $('#update-personnel-btn').on('click', (e) => {
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
      personnelData
        .updatePersonnel(personnelObj.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Personnel has been ubdated!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));
    }
  });
};

export default { updatePersonnelForm };
