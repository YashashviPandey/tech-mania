import axios from 'axios'
// import { toast } from 'react-toastify'; 
// var qs = require('qs');
// var FormData = require('form-data');

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
const URL="http://3.17.207.43:9000"

export const imageSent = (data1,code,mail,name) => {   
  console.log("api call",data1,code,mail,name); 
  let formData = new FormData(); // instantiate it
  formData.append('image', data1);
  //formData.append('userid', 38);
  formData.append('section_id', code);
  formData.append('imagename', name);
  let user = JSON.parse(localStorage.getItem('user_info'));
var config = {
  method: 'post',
  url: URL+'/upload',
 data: formData,

  headers: { 
      'Content-Type': 'multipart/form-data',
      'Authorization': user.token

  },
  // files:formData,
};

return axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  return response.data
})
.catch(function (error) {
  console.log(error);
});
}
export const imageGet = (a) => {   
console.log(a);

 var userId = localStorage.getItem('user');
  //  var sectionId = '3.1.1*{AC.1.001}';
  let headers= { 
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  let user = JSON.parse(localStorage.getItem('user_info'));
  headers['Authorization'] = user.token;

   var config = {
     method: 'get',
     url: URL+`/getimages?userid=${userId}&section_id=${a}`,    
     headers
   };
  return axios(config)
   .then(function (response) {
    return response.data
   })
   .catch(function (error) {
     console.log(error);
     if(error){
      toast.error("Some error occured");
     }
   });
}


