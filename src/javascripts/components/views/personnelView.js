import personnelData from '../../helpers/data/personnelData';
import card from '../cards/personnelCards';

const personnelView = (object) => {
  $('#app').html('');
  personnelData.getPersonnel(object).then((response) => {
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
