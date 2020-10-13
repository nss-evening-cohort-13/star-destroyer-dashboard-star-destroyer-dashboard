import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import personnelData from './helpers/data/personnelData';
import card from './components/cards/personnelCards';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  card.personnelCard(personnelData.getPersonnel());
};

init();
