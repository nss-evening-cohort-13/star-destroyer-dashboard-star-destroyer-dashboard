import personnelData from '../../helpers/data/personnelData';
import form from '../forms/updatePersonnelForm';

const updatePersonnelView = (personnelFirebaseKey) => {
  $('#app').html('<div id="update-personnel-form"></div>');
  personnelData.getSinglePersonnel(personnelFirebaseKey).then((response) => {
    form.updatePersonnelForm(response);
  });
};

export default { updatePersonnelView };
