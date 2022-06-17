/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: 'AIzaSyDyankp6OxFVUuzrSEW6D01JUFpxWE3TR8',
  authDomain: 'friendlychat-5f448.firebaseapp.com',
  projectId: 'friendlychat-5f448',
  storageBucket: 'friendlychat-5f448.appspot.com',
  messagingSenderId: '624973073365',
  appId: '1:624973073365:web:c5970883a447f9e2b34b5c'
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
