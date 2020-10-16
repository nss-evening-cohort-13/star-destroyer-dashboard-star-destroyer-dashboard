import weaponsData from '../../helpers/data/weaponsData';
import form from '../forms/updateWeaponsForm';

const updateWeaponsView = (weaponsFirebaseKey) => {
  $('#app').html('<div id="update-weapons-form"></div>');
  weaponsData.getSingleWeapon(weaponsFirebaseKey).then((response) => {
    form.updateWeaponsForm(response);
  });
};

export default { updateWeaponsView };
