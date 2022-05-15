import axios from './';

 // eslint-disable-next-line import/no-anonymous-default-export
 export default (token = null) => token ? axios.defaults.headers.common.authorization = token : axios.defaults.headers.common.authorization;