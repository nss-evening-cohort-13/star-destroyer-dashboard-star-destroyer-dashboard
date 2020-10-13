import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  $('#app').html('');
  const domString = `
  <nav class="navbar fixed top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Star Destroyer Dashboard</a>
      
  <button id="google-auth" class="btn btn-warning btn-lg">
        <i class="fab fa-google"></i></i>oogle Login
        </button>
  </nav>

  <div class="logoutCards">
  <div class="card" style="width: 18rem;">
    <img src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=1200" class="card-img-top" alt="...">
    </div>
  <div class="card" style="width: 18rem;">
    <img src="https://starwarsblog.starwars.com/wp-content/uploads/2015/07/EP1_IA_72118-copy-1536x864-433723767381.jpg" class="card-img-top" alt="...">
    </div>
  <div class="card" style="width: 18rem;">
    <img src="https://lumiere-a.akamaihd.net/v1/images/incinerator-trooper-main_498da9c7.jpeg?region=220%2C0%2C951%2C536" class="card-img-top" alt="...">
    </div>
  <div class="card" style="width: 18rem;">
    <img src="https://lumiere-a.akamaihd.net/v1/images/moff-gideon-main_f4a2ba45.jpeg?region=164%2C0%2C953%2C536" class="card-img-top" alt="...">
    </div>
  <div class="card" style="width: 18rem;">
    <img src="https://cdn.pixabay.com/photo/2016/12/28/14/59/stormtrooper-1936251_1280.jpg" class="card-img-top" alt="...">
    </div>
  <div class="card" style="width: 18rem;">
    <img src="https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg?region=0%2C0%2C1200%2C675" class="card-img-top" alt="...">
    </div>
    </div>
  `;

  $('#nav').html(domString);
  $('#google-auth').on('click', signMeIn);
};

export default { loginButton };
