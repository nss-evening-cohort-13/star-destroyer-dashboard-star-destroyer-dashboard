import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../../components/auth/auth';
import userData from './userData';
import myNavbar from '../../components/myNavbar/myNavbar';
import viewHelpers from '../viewHelpers';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      myNavbar.myNavbar(currentUser);
      viewHelpers.viewListener('personnel-link');
      $('#auth').html('');
      $('#personnel-link').addClass('selected');
    } else {
      auth.loginButton();
    }
  });
};

export default { checkLoginStatus };
