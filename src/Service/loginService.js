  import axios from "axios";


const apiClient = axios.create({
  baseURL: 'https://localhost:7286',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

});

export const loginService = async(data) => {
  console.log('hola', data);
 let response= await apiClient.post("/User/Login", data);
 let dataResponse= await response.data
 console.log("desde el servicio", dataResponse)
 return dataResponse;
};


/* 
axios.post('/User/Login', {
    UserName: UserNameValue,
    UserPassword: UserPasswordValue
  })
   */
/* 
 export const loginService = {

async credentials => { 
const{ data } = await axios.post(baseURL, credentials)
return data 

}
 */
  /* async getLogin() {
    let response = await apiClient.get("/GetAll");
    console.log(response.data);
    return response.data;

  },
  async submitLogin(newProduct) {
    console.log("new product de servicio", newProduct);
    await apiClient.post("/Product /Post", newProduct);
  }, */