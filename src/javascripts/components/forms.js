import personnelData from '../helpers/data/personnelData';

const getNewPersonnel = () => ({
  name: $('#personnel-name').val() || false,
  image: $('#personnel-img-url').val() || false,
});

const submitPersonnel = () => {
  $('#personnel-form').on('submit', (e) => {
    e.preventDefault();
    const newPersonnel = getNewPersonnel();

    if (Object.values(newPersonnel).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      personnelData.addPersonnel(newPersonnel)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Personnel Was Added!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));

      $('#personnel-name').val('');
      $('#personnel-img-url').val('');
    }
  });
};

const personnelForm = () => {
  $('#app').html(`
  <div id="personnel-form">
    <h1>Personnel Form<h1>
    <div id="error-message"></div>
    <div id="success-message"></div>
    <form>
      <div class="form-group">
        <label for="personnel-name">Name:</label>
        <input type="text" class="form-control" id="personnel-name">
      </div>
      <div class="form-group">
        <label for="personnel-img-url">Image URL:</label>
        <input type="url" class="form-control" id="personnel-img-url">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
    `);
  submitPersonnel();
};

export default { personnelForm };
