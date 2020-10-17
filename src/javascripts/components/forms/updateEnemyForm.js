import enemyData from '../../helpers/data/enemyData';

const updateEnemyForm = (object) => {
  $('#update-enemy-form').html(`
    <h2>Update Enemy</h2>
    <div id="success-message"></div>
    <form>
      <div class="form-group">
        <label for="enemy-name">Name:</label>
        <input type="text" value="${object.name}" class="form-control" id="enemy-name">
      </div>
      <div class="form-group">
      <label for="enemy-organization">Organization Name:</label>
      <input type="text" value="${object.organization}" class="form-control" id="enemy-organization">
    </div>
      <div class="form-group">
        <label for="enemy-img-url">Image URL:</label>
        <input type="url" value="${object.image}" class="form-control" id="enemy-img-url">
      </div>
      <button id="update-enemy-btn" type="submit" class="btn btn-primary">Submit</button>
    </form>`);

  $('#update-enemy-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#enemy-name').val() || false,
      image: $('#enemy-img-url').val() || false,
      organization: $('#enemy-organization').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert"> Please complete all fields.</div>'
      );
    } else {
      $('#error-message').html('');
      enemyData
        .updateEnemy(object.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Enemy has been updated!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));
    }
  });
};

export default { updateEnemyForm };
