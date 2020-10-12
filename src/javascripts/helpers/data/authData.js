import firebase from 'firebase/app';
import 'firebase/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      $('#auth').addClass('hide');
      $('#p-dashboard').removeClass('hide');
      $('#navbar-logout-button').removeClass('hide');
    } else {
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#p-dashboard').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
