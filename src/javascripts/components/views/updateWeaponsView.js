import weaponsData from '../../helpers/data/WeaponsData';
import form from '../forms/updateWeaponsForm';

const updateWeaponsView = (weaponsFirebaseKey) => {
  $('#app').html('<div id="update-weapons-form"></div>');
  weaponsData.getSingleWeapons(weaponsFirebaseKey).then((response) => {
    form.updateWeaponsForm(response);
  });
};

export default { updateWeaponsView };
