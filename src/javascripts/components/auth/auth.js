import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  // $('#app').html('');
  const domString = `
  <nav class="navbar fixed top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Star Destroyer Dashboard</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item mx-3"  id="personnel-link">
      <a class="nav-link" href="#">Personnel Dashboard</a>
    </li>
    <li class="nav-item mx-3" id="weapons-link">
      <a class="nav-link" href="#">Weapons Dashboard</a>
    </li>
    <li class="nav-item mx-3" id="enemies-link">
      <a class="nav-link" href="#">Enemies Dashboard</a>
    </li>
    <li class="nav-item mx-3" id="sectors-link">
      <a class="nav-link" href="#">Planetary Sectors Dashboard</a>
    </li>
    <li class="nav-item mx-3" id="systems-link">
      <a class="nav-link" href="#">Planetary Systems Dashboard</a>
    </li>
  </ul>
      
  <button id="google-auth" class="btn btn-warning btn-lg">
        <i class="fab fa-google"></i></i>oogle Login
        </button>
  </nav>
`;

  $('#nav').html(domString);
  $('#google-auth').on('click', signMeIn);
};

export default { loginButton };
