import sectorData from '../../helpers/data/sectorData';
import updateSector from '../forms/updateSector';

const updateSectorView = (sectorFirebaseKey) => {
  $('#app').html('<div id="update-sector-form"></div>');
  sectorData.getSingleSector(sectorFirebaseKey).then((response) => {
    updateSector.updateSectorForm(response);
  });
};

export default { updateSectorView };
