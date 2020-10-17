import sectorData from '../../helpers/data/sectorData';
import card from '../cards/sectorCards';
import forms from '../forms/sectorsForm';

const sectorView = () => {
  $('#add-button').html(
    '<button id="add-sector" type="button" class="btn btn-dark add-button"><i class="fas fa-plus">Sector</i></button>'
  );
  $('#add-sector').on('click', forms.sectorForm);

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
      sectorData.deleteSector(e.currentTarget.id.split('__')[1]);
    });
  });
};

export default { sectorView };
