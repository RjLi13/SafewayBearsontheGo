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
    views = {'welcome': welcomeView, 'mainMenu': mainMenuView};


    /* ========== element ids ========== */
    var welcomeLogin = document.getElementById('welcome-login');
    var welcomeRegister = document.getElementById('welcome-register');
    var loginForm = document.getElementById('login-form')
    var wrongUser = document.getElementById('wrong-user')


    /* ========== event listeners ========== */

    welcomeRegister.addEventListener('click', register);
    loginForm.addEventListener('submit', login);
    wrongUser.addEventListener('click', logout);



    /* ========== login and logout utils ========== */

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

    /* ========== generic utils ========== */
  });
})
