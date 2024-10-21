
// import axios from 'axios'
// import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'

// const mockRequsets = axios.create({
//   baseURL: '/mock',
//   timeout: 10000
// })

// mockRequsets.interceptors.request.use(config => {
//   nprogress.start()
//   return config;
// }, error => {
//   nprogress.done()
//   return Promise.reject(error)
// })

// mockRequsets.interceptors.response.use(response => {
//   nprogress.done()
//   return response
// }, error => {
//   nprogress.done()
//   return Promise.reject(error)
// })

// export default mockRequsets

import axios from 'axios';
 
export default {
		getData() {
          axios.get("/data/list").then(res => {
            console.log(res);
          }).catch(error => {
            console.log(error);
          })
		
	},
};