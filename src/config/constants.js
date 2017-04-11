import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCepZJ3zHHsNzeYbWabYfobRR_hK-2WdIA',
    authDomain: 'vita-4e302.firebaseapp.com',
    databaseURL: 'https://vita-4e302.firebaseio.com/',
    storageBucket: 'gs://vita-4e302.appspot.com',
};

firebase.initializeApp(config);

export const db = firebase.database();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth();
