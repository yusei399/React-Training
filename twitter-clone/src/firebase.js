import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyCrp-Gv7sjbRril4g2MwdOXimn5NZWQogE",
	authDomain: "twitterclone-2bd11.firebaseapp.com",
	projectId: "twitterclone-2bd11",
	storageBucket: "twitterclone-2bd11.appspot.com",
	messagingSenderId: "593421141192",
	appId: "1:593421141192:web:f14aacbc9a96807bda51fd"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;