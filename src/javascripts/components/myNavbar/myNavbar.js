import firebase from 'firebase/app';
import 'firebase/auth';
import globals from '../../helpers/data/globals';
import viewHelpers from '../../helpers/viewHelpers';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('ua');
    globals.clearUser();
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const myLoggedOffNavbar = () => {
  $('#nav').html(
    `<nav id="emireNav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div id="add-button"></div>
    <a class="navbar-brand" href="#">Star Destroyer Dashboard</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item-logged-out mx-3"  id="personnel-link">
      <a class="nav-link" href="#">Personnel Dashboard</a>
    </li>
    <li class="nav-item-logged-out mx-3" id="weapons-link">
      <a class="nav-link" href="#">Weapons Dashboard</a>
    </li>
    <li class="nav-item-logged-out mx-3" id="enemies-link">
      <a class="nav-link" href="#">Enemies Dashboard</a>
    </li>
    <li class="nav-item-logged-out mx-3" id="sectors-link">
      <a class="nav-link" href="#">Planetary Sectors Dashboard</a>
    </li>
    <li class="nav-item-logged-out mx-3" id="systems-link">
      <a class="nav-link" href="#">Planetary Systems Dashboard</a>
    </li>
  </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>
        </li>
      </ul>
    </div>
  </nav>`
  );
  logoutEvent();

  $('body').on('click', '.nav-item-logged-out', (e) => {
    e.stopImmediatePropagation();
    viewHelpers.loggedOffViewHelper(e.currentTarget.id);
    const navItems = document.querySelectorAll('.nav-item-logged-out');
    navItems.forEach((navItem) => {
      if (navItem.classList.contains('selected')) {
        $(navItem).removeClass('selected');
      }
    });
    $(`#${e.currentTarget.id}`).addClass('selected');
  });
};
const myNavbar = () => {
  $('#nav').html(
    `<nav id="emireNav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div id="add-button"></div>
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
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>
        </li>
      </ul>
    </div>
  </nav>`
  );
  logoutEvent();

  $('body').on('click', '.nav-item', (e) => {
    e.stopImmediatePropagation();
    viewHelpers.viewHelper(e.currentTarget.id);
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem) => {
      if (navItem.classList.contains('selected')) {
        $(navItem).removeClass('selected');
      }
    });
    $(`#${e.currentTarget.id}`).addClass('selected');
  });
};

export default { myNavbar, myLoggedOffNavbar };
