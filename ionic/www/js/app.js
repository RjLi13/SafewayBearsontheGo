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
    var registerEmailView = document.getElementById('register-email-view');
    var registerHomeView = document.getElementById('register-home-view');
    var mainMenuView = document.getElementById('main-menu-view');
    var walkDestinationView = document.getElementById('walk-destination-view');
    views = {
        'welcome': welcomeView,
        'registerEmail': registerEmailView,
        'registerHome': registerHomeView,
        'mainMenu': mainMenuView,
        'walkDestination': walkDestinationView
    };


    /* ========== element ids ========== */
    var welcomeLogin = document.getElementById('welcome-login');
    var welcomeRegister = document.getElementById('welcome-register');
    var loginForm = document.getElementById('login-form');
    var wrongUser = document.getElementById('wrong-user');
    var menuWalk = document.getElementById('walk-button');              // main menu
    var menuProfile = document.getElementById('profile-button');        // main menu
    var menuGreeting = document.getElementById('main-menu-greeting');   // main menu
    var cancelRequest = document.getElementById('cancel-request');      // first walk request view
    var registerEmail = document.getElementById('submit-email-button');   // first registration view
    var registerHome = document.getElementById('submit-home-button');   // second registration view
    var registerSkipHome = document.getElementById('skip-home-button');   // second registration view


    /* ========== event listeners ========== */

    welcomeRegister.addEventListener('click', register);
    loginForm.addEventListener('submit', login);
    wrongUser.addEventListener('click', logout);
    menuWalk.addEventListener('click', startWalkRequest);
    cancelRequest.addEventListener('click', goToMainMenu);
    registerEmail.addEventListener('click', submitEmail);
    registerHome.addEventListener('click', submitHome);
    registerSkipHome.addEventListener('click', skipHome);



    /* ========== view transition utils ========== */

    // *** in backend make this actually login...
    // views is a list of all views - so the function can change their visibility
    function login() {
        console.log("login");
        var username = document.getElementById('welcome-username').value;
        var password = document.getElementById('welcome-password').value;
        console.log(username + " " + password)
        localStorageSet('username', username);
        localStorageSet('password', password);
        if (username !== '') {
            menuGreeting.innerHTML = "Hello, " + username + "!";
        }

        // change pages by toggling the visibility of the welcome page
        views['welcome'].classList.add('hidden');
        views['mainMenu'].classList.remove('hidden');
    }

    function register() {
        console.log("register");
        views['welcome'].classList.add('hidden');
        views['registerEmail'].classList.remove('hidden');
    }

    function logout() {
        console.log("logout");

        // change pages by toggling the visibility of the welcome page
        views['welcome'].classList.remove('hidden');
        views['mainMenu'].classList.add('hidden');
    }

    function submitEmail() {
        console.log("submit email");
        var email = document.getElementById('register-email').value;
        console.log("saved: " + email);
        localStorageSet('email', email);
        views['registerEmail'].classList.add('hidden');
        views['registerHome'].classList.remove('hidden');
    }

    function submitHome() {
        console.log("submit home");
        // somepoint down the road, consider two line street addresses?
        var homeStreetAddress = document.getElementById('home-line-one').value;
        var homeCity = document.getElementById('home-city').value;
        var homePostalCode = document.getElementById('home-postal-code').value;
        console.log(homeStreetAddress + " " + homeCity + " " + homePostalCode)
        localStorageSet('homeStreetAddress', homeStreetAddress);
        localStorageSet('homeCity', homeCity);
        localStorageSet('homePostalCode', homePostalCode);
        views['registerHome'].classList.add('hidden');
        // views['registerHome'].classList.remove('hidden');
    }

    function skipHome() {
        console.log("skip home");
        views['registerHome'].classList.add('hidden');
        // views['registerHome'].classList.remove('hidden');
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
            views[view].classList.add('hidden');
        }
        views['mainMenu'].classList.remove('hidden');
    }


    /* ========== generic utils ========== */

    function localToSession() {
        sessionStorage.setItem("address", localStorage.getItem("address"));
        sessionStorage.setItem("user", localStorage.getItem("user"));
    }

    function localStorageSet(key, value) {
        localStorage.setItem(key, value);
    }

    function localStorageGet(key) {
        localStorage.getItem(key);
    }

  });
})
