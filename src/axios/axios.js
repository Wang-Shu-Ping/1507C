import Vue from 'vue';
import axios from 'axios';
if (DEVELOPMENT){
    axios.defaults.baseURL=""
}
let query = {
    install:function (v) {
        v.prototype.$http = axios
        
    }
}
Vue.use(query)
export default axios;