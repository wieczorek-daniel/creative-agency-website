  // Initialize WOW.js
  new WOW().init();

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyCVNKDvvfwn5ictQSZj3GNoH-r0n9ZV1tI",
    authDomain: "creative-agency-website-en.firebaseapp.com",
    databaseURL: "https://creative-agency-website-en.firebaseio.com",
    projectId: "creative-agency-website-en",
    storageBucket: "creative-agency-website-en.appspot.com",
    messagingSenderId: "348821542944",
    appId: "1:348821542944:web:4443a08fc58b2af8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  let messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e) {
    e.preventDefault();

    // Get values
    let firstName = getInputValue('first-name');
    let lastName = getInputValue('last-name');
    let email = getInputValue('email');
    let message = getInputValue('message');

    // Save message
    saveMessage(firstName, lastName, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide modal after 5 seconds
    setTimeout(function () {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);

    // Clear form
    document.getElementById('contact-form').reset();
  }

  // Function to get form values
  function getInputValue(id) {
    return document.getElementById(id).value;
  }

  // Save mesage to Firebase
  function saveMessage(firstName, lastName, email, message) {
    let newMessagesRef = messagesRef.push();
    newMessagesRef.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    });
  }