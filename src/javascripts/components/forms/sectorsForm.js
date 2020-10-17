import sectorData from '../../helpers/data/sectorData';
import systemsData from '../../helpers/data/systemsData';

const getNewSector = () => ({
  name: $('#sector-name').val() || false,
  system_id: $('#system_id').val() || false
});

const submitSector = () => {
  $('#sector-form').on('submit', (e) => {
    e.preventDefault();
    const newSector = getNewSector();

    if (Object.values(newSector).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      sectorData.addSector(newSector)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Sector Was Added!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));

      $('#sector-name').val('');
      $('#system_id').val('');
    }
  });
};

const sectorForm = () => {
  $('#app').html(`
  <div id="sector-form">
    <h1>Planetary Sectors Form<h1>
    <div id="error-message"></div>
    <div id="success-message"></div>
    <form>
      <div class="form-group">
        <label for="sector-name">Name:</label>
        <input type="text" class="form-control" id="sector-name">
      </div>
      <div class="form-group">
          <label for="systems">System</label>
            <select class="form-control" id="system_id">
              <option value="">Select system</option>
            </select>
        </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
    `);
  systemsData.getAllSystems().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value='${item.firebaseKey}'}>${item.name}</option>`);
    });
  });
  submitSector();
};

export default { sectorForm };
