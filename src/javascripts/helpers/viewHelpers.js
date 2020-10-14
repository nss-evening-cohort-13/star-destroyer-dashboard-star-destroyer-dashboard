import views from '../components/views/personnelView';
import updatePersonnelView from '../components/views/updatePersonnelView';

const viewHelper = (id, object, arg) => {
  $('#app').html('');

  switch (id) {
    case 'personnel-link':
      return views.personnelView(object);
    case 'update-personnel-link':
      return updatePersonnelView.updatePersonnelView(arg);
    default:
      return console.warn('nothing clicked');
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
};

export default { viewHelper, viewListener };
