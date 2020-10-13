import views from '../components/views/personnelView';

const viewHelper = (id, object) => {
  $('#app').html('');

  switch (id) {
    case 'personnel-link':
      return views.personnelView(object);
    default:
      return console.warn('nothing clicked');
  }
};

export default { viewHelper };
