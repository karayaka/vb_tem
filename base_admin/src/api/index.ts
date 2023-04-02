import axios,{AxiosInstance } from'axios'

 const api:AxiosInstance =axios.create({
    baseURL:'https://reqres.in/api/',
    headers: {        
        "Content-type": "application/json",
    },
 });
//sevice dışarı açıldı

 export default api;