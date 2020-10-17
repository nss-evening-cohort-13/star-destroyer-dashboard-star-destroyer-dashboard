import views from '../components/views/personnelView';
import updatePersonnelView from '../components/views/updatePersonnelView';
import updateWeaponsView from '../components/views/updateWeaponsView';
import weaponsView from '../components/views/weaponsView';
import sectorView from '../components/views/sectorView';
import updateSectorView from '../components/views/updateSectorsView';
import enemyView from '../components/views/enemyView';

/* Logged On Resources */
const viewHelper = (id, object, arg) => {
  $('#app').html('');

  switch (id) {
    case 'personnel-link':
      return views.personnelView(object);
    case 'update-personnel-link':
      return updatePersonnelView.updatePersonnelView(arg);
    case 'update-weapons-link':
      return updateWeaponsView.updateWeaponsView(arg);
    case 'weapons-link':
      return weaponsView.weaponsView(object);
    case 'sectors-link':
      return sectorView.sectorView(object);
    case 'update-sector-link':
      return updateSectorView.updateSectorView(arg);
    case 'enemies-link':
      return enemyView.enemyView(object);
    default:
      return console.warn(id, 'page');
  }
};

const viewListener = (view, user) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.edit-personnel', (e) => {
    const personnelFirebaseKey = e.currentTarget.id;
    viewHelper('update-personnel-link', user, personnelFirebaseKey);
  });
  $('body').on('click', '.edit-weapons', (e) => {
    const weaponsFirebaseKey = e.currentTarget.id;
    viewHelper('update-weapons-link', user, weaponsFirebaseKey);
  });
  $('body').on('click', '.edit-sectors', (e) => {
    const sectorFirebaseKey = e.currentTarget.id;
    viewHelper('update-sector-link', user, sectorFirebaseKey);
  });
};

export default {
  viewHelper,
  viewListener
};
