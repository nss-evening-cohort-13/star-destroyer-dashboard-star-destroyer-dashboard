import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../../components/auth/auth';
import userData from './userData';
import myNavbar from '../../components/myNavbar/myNavbar';
import viewHelper from '../viewHelpers';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      myNavbar.myNavbar(currentUser);
      viewHelper.viewHelper('personnel-link');
      $('#auth').html('');
    } else {
      auth.loginButton();
      $('#nav').append();
    }
  });
};

export default { checkLoginStatus };
