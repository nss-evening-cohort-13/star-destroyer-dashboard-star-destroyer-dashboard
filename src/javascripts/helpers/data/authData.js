import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../../components/auth/auth';
import userData from './userData';
import myNavbar from '../../components/myNavbar/myNavbar';
import viewHelpers from '../viewHelpers';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userData.setCurrentUser(user);
      myNavbar.myNavbar();
      viewHelpers.viewListener('personnel-link');
      $('#auth').html('');
      $('#personnel-link').addClass('selected');
    } else {
      myNavbar.myNavbar();
      viewHelpers.loggedOffViewListener('personnel-link');
      auth.loginButton();
    }
  });
};

export default { checkLoginStatus };
