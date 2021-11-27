import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyDNFc85wrrlmFnaxQXnc0j2IPYEheYgNMo",
    authDomain: "ethicalmakeup-1c068.firebaseapp.com",
    databaseURL: "https://ethicalmakeup-1c068-default-rtdb.firebaseio.com", 
    projectId: "ethicalmakeup-1c068", 
    storageBucket: "ethicalmakeup-1c068.appspot.com",
    messagingSenderId: "663592223133", 
    appId: "1:663592223133:web:ee61aba08a928e3a302f74" 
};

firebase.initializeApp(firebaseConfig)
export default firebase;