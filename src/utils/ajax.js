import axios from 'axios'

export const ajax = ({
    url,
    method,
    data={}

}) => { 
    return axios({
        method,
        url,
        data : method === 'get' ? "" : data
    })
    .then((result) => { 
        return result
    })
    .catch((err) => { 
        return err.message
    })
}