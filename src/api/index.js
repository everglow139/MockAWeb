import request from './requests'
import mockRequsets from './mockAjax';
export const  getUsers = () => {
  request.get('/users')
}
export const getMock = () => {
  mockRequsets.get('/slider')
}

