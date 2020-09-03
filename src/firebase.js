import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD4b09D6fTzvpVsK-E2TY2Z5YMCW0wGKAw',
  authDomain: 'insta-reels-a34f8.firebaseapp.com',
  databaseURL: 'https://insta-reels-a34f8.firebaseio.com',
  projectId: 'insta-reels-a34f8',
  storageBucket: 'insta-reels-a34f8.appspot.com',
  messagingSenderId: '915433665311',
  appId: '1:915433665311:web:e929bd3db5460e00c8f62a',
  measurementId: 'G-7YXSKCMHBK',
};
//initializies the app by using our credentials
const firebaseApp = firebase.initializeApp(firebaseConfig);

//this accesses the db and puts it in the variable
const db = firebaseApp.firestore();

export default db;
