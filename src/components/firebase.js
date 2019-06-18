import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBwrLuDI-hEhosgEITAyYidgd6G6GIlhis",
  authDomain: "gethired-b559f.firebaseapp.com",
  databaseURL: "https://gethired-b559f.firebaseio.com",
  projectId: "gethired-b559f",
  storageBucket: "gethired-b559f.appspot.com",
  messagingSenderId: "1018825677708",
  appId: "1:1018825677708:web:d2ba17abf95f087f"
};
firebase.initializeApp(firebaseConfig);

//export { storage, firebase as default };

// export default (!firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app());
