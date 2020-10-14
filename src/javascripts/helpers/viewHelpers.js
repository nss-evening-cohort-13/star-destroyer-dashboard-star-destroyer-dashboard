import views from '../components/views/personnelView';

const viewHelper = (id) => {
  $('#app').html('');

  switch (id) {
    case 'personnel-link':
      return views.personnelView();
    default:
      return console.warn('nothing clicked');
  }
};

export default { viewHelper };
