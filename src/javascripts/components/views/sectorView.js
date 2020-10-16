import sectorData from '../../helpers/data/sectorData';
import card from '../cards/sectorCards';

const sectorView = () => {
  $('#app').html('');
  sectorData.getAllSectors().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.sectorCard(item));
      });
    } else {
      $('#app').append('<h2> NO SECTOR CARDS!</h2>');
    }
    $('.delete').on('click', (e) => {
      e.stopImmediatePropagation();
      $(`#sectors-${e.currentTarget.id.split('__')[1]}`).remove();
      sectorData.deleteWeapons(e.currentTarget.id.split('__')[1]);
    });
  });
};

export default { sectorView };
