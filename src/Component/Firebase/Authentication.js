import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './firebase.config';
const Authentication = () => {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
};
export default Authentication;