import personnelData from '../../helpers/data/personnelData';
import card from '../cards/personnelCards';
import forms from '../forms';

const personnelView = () => {
  $('#add-button').html(
    '<button id="add-personnel" type="button" class="btn btn-dark">Add Personnel +</button>'
  );
  $('#add-personnel').on('click', forms.personnelForm);

  $('#app').html('');
  personnelData.getPersonnel().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.personnelCard(item));
      });
    } else {
      $('#app').append('<h2> NO CARDS!</h2>');
    }
  });
};

export default { personnelView };
