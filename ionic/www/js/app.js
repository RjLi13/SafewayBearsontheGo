// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }


    /* ========== views ========== */
    // these are the IDs of the different pages
    var welcomeView = document.getElementById('welcome-view');
    var mainMenuView = document.getElementById('main-menu-view');
    var walkDestinationView = document.getElementById('walk-destination-view');
    views = {'welcome': welcomeView, 'mainMenu': mainMenuView, 'walkDestination': walkDestinationView};


    /* ========== element ids ========== */
    var welcomeLogin = document.getElementById('welcome-login');
    var welcomeRegister = document.getElementById('welcome-register');
    var loginForm = document.getElementById('login-form');
    var wrongUser = document.getElementById('wrong-user');
    var menuWalk = document.getElementById('walk-button');        // main menu
    var menuProfile = document.getElementById('profile-button');  // main menu
    var cancelRequest = document.getElementById('cancel-request');  // first walk request view


    /* ========== event listeners ========== */

    welcomeRegister.addEventListener('click', register);
    loginForm.addEventListener('submit', login);
    wrongUser.addEventListener('click', logout);
    menuWalk.addEventListener('click', startWalkRequest);
    cancelRequest.addEventListener('click', goToMainMenu);



    /* ========== view transition utils ========== */

    // *** in backend make this actually login...
    // views is a list of all views - so the function can change their visibility
    function login() {
        console.log("login");
        var username = document.getElementById('welcome-username').value
        var password = document.getElementById('welcome-password').value
        console.log(username + " " + password)

        // change pages by toggling the visibility of the welcome page
        views['welcome'].classList.add('hidden');
        views['mainMenu'].classList.remove('hidden');
    }

    function register() {
        console.log("register");
    }

    function logout() {
        console.log("logout");

        // change pages by toggling the visibility of the welcome page
        views['welcome'].classList.remove('hidden');
        views['mainMenu'].classList.add('hidden');
    }

    // this is the *first* walk request screen
    // start user walk request here
    function startWalkRequest() {
        console.log("start walk request");

        // change pages by toggling the visibility of the welcome page
        views['walkDestination'].classList.remove('hidden');
        views['mainMenu'].classList.add('hidden');
    }


    function goToMainMenu() {
        console.log("Go to Main Menu");
        for (var view in views) {
            debugger;
            views[view].classList.add('hidden');
        }
        views['mainMenu'].classList.remove('hidden');
    }


    /* ========== generic utils ========== */
  });
})
