import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = `./data/`

let http = axios.create({
    baseURL: baseURL
});

http.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    let _token = JSON.parse(localStorage.getItem("token"))
    let token = _token ? _token.token : false;
    if(token){
        config.headers.authorization = 'Bearer ' + token;
    }
    // console.dir(config);
    return config;
}, (error) => {

});

http.interceptors.response.use((response) => {
    toast(response.data.message);
    return response
}, (error) => {
    console.dir(error)
    toast(error);
    let status = error.response.status;
    let data = error.response.data;
    data.status = status;
    throw data
});

export default http