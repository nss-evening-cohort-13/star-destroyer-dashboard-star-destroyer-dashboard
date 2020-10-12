import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `
  <div id="auth">
    <span style="font-size: 9em; color: Red;"><i class="fab fa-empire"></i>
    <h4>Empire Dasboard</h4>
    <button id="google-auth" class="btn btn-danger"><i class="fab fa-google"></i></i>oogle Login
    </button>
  </div>`;

  $('#auth').html(domString);
  $('#google-auth').on('click', signMeIn);
};

export default { loginButton };
