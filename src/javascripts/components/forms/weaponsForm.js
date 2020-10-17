import weaponsData from '../../helpers/data/weaponsData';

const getNewWeapon = () => ({
  name: $('#weapon-name').val() || false,
  image: $('#weapon-img-url').val() || false
});

const submitWeapon = () => {
  $('#weapon-form').on('submit', (e) => {
    e.preventDefault();
    const newWeapon = getNewWeapon();

    if (Object.values(newWeapon).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      weaponsData.addWeapon(newWeapon)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Weapon Was Added!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));

      $('#name').val('');
      $('#weapon-img-url').val('');
    }
  });
};

const weaponForm = () => {
  $('#app').html(`
  <div id="weapon-form">
    <h1>Weapon Form<h1>
    <div id="error-message"></div>
    <div id="success-message"></div>
    <form>
      <div class="form-group">
        <label for="weapon-name">Name:</label>
        <input type="text" class="form-control" id="weapon-name">
      </div>
      <div class="form-group">
        <label for="weapon-img-url">Image URL:</label>
        <input type="url" class="form-control" id="weapon-img-url">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
    `);

  submitWeapon();
};

export default { weaponForm };
