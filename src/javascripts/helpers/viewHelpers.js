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

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });

  $('body').on('click', '.edit-personnel', (e) => {
    console.warn('Button Clicked');
    const personnelFirebaseKey = e.currentTarget.id;
    viewHelper('update-personnel-link', personnelFirebaseKey);
  });
};

export default { viewHelper, viewListener };
