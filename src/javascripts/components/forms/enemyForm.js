import enemyData from '../../helpers/data/enemyData';

const getNewEnemy = () => ({
  name: $('#enemy-name').val() || false,
  image: $('#enemy-img-url').val() || false,
  organization: $('#enemy-organization').val() || false
});

const submitEnemy = () => {
  $('#enemy-form').on('submit', (e) => {
    e.preventDefault();
    const newEnemy = getNewEnemy();

    if (Object.values(newEnemy).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      enemyData.addEnemy(newEnemy)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Enemy Was Added!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));

      $('#name').val('');
      $('#enemy-img-url').val('');
    }
  });
};

const enemyForm = () => {
  $('#app').html(`
  <div id="enemy-form">
    <h1>Enemy Form<h1>
    <div id="error-message"></div>
    <div id="success-message"></div>
    <form>
      <div class="form-group">
        <label for="enemy-name">Name:</label>
        <input type="text" class="form-control" id="enemy-name">
      </div>
      <div class="form-group">
      <label for="enemy-organization">Organization Name:</label>
      <input type="text" class="form-control" id="enemy-organization">
    </div>
      <div class="form-group">
        <label for="enemy-img-url">Image URL:</label>
        <input type="url" class="form-control" id="enemy-img-url">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
    `);

  submitEnemy();
};

export default { getNewEnemy, submitEnemy, enemyForm };
