import enemyData from '../../helpers/data/enemyData';
import card from '../cards/enemyCards';
import forms from '../forms/enemyForm';

const enemyView = () => {
  $('#add-button').html(
    '<button id="add-enemies" type="button" class="btn btn-dark">Add Enemy +</button>'
  );
  $('#add-enemies').on('click', forms.enemyForm);

  $('#app').html('');
  enemyData.getEnemies().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.enemyCard(item));
      });
    } else {
      $('#app').append('<h2> NO CARDS!</h2>');
    }
    $('.delete').on('click', (e) => {
      e.stopImmediatePropagation();
      $(`#enemy-${e.currentTarget.id.split('__')[1]}`).remove();
      enemyData.deleteEnemies(e.currentTarget.id.split('__')[1]);
    });
  });
};

export default { enemyView };
