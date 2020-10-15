import views from '../components/views/personnelView';
import loggedOutView from '../components/views/loggedOutPersonnelView';
import updatePersonnelView from '../components/views/updatePersonnelView';

/* Logged On Resources */
const viewHelper = (id, object, arg) => {
  $('#app').html('');

  switch (id) {
    case 'personnel-link':
      return views.personnelView(object);
    case 'update-personnel-link':
      return updatePersonnelView.updatePersonnelView(arg);
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
};

/* Logged Off Resources */
const loggedOffViewHelper = (id, object) => {
  $('#app').html('');
  switch (id) {
    case 'personnel-link':
      return loggedOutView.loggedOutPersonnelView(object);
    default:
      return console.warn(id, 'page');
  }
};
const loggedOffViewListener = (view) => {
  loggedOffViewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    loggedOffViewHelper(e.currentTarget.id);
  });
};

export default {
  viewHelper,
  viewListener,
  loggedOffViewListener,
  loggedOffViewHelper
};
