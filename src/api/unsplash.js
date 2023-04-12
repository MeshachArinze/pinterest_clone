import axios from axios;

//create an instance

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  timeout: 1000,
  headers: {
    
    Authorization: "Client-ID UpJPc_NDebIGXHWun5WAKF7CJ81DpoQLE2leVPwKjLk"
  }
});