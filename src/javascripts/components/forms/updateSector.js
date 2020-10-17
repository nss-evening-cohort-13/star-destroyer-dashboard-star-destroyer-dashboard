import systemsData from '../../helpers/data/systemsData';
import sectorData from '../../helpers/data/sectorData';

const updateSectorForm = (sectorObject) => {
  $('#update-sector-form').html(`
      <h2>Update sector</h2>
      <div id="success-message"></div>
      <form>
        <div id="error-message"></div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" value="${sectorObject.name}">
        </div>
        <div class="form-group">
          <label for="systems">System</label>
            <select class="form-control" id="systems">
              <option value="">Select a systems</option>
            </select>
        </div>
        <button id="update-sector-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update sector</button>
      </form>
  `);

  systemsData.getAllSystems().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.firebaseKey}" ${sectorObject.firebaseKey === item.firebaseKey ? "selected='selected'" : ''}>${item.name}</option>`);
    });
  });

  $('#update-sector-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      system_id: $('#systems').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      sectorData.updateSector(sectorObject.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your sector Was updated!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).catch((error) => console.warn(error));
    }
  });
};

export default { updateSectorForm };
