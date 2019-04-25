import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-my-burger-ac389.firebaseio.com/'
});

export default instance;