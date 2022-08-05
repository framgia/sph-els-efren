import axios from 'axios';
//this is only temporary need to refactor into 1 component but function is working
export default  axios.create({
    baseURL: 'https://api.github.com/repos/vuejs/vue/labels',
   
  })
