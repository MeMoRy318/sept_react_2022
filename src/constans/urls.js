const baseURL = 'http://owu.linkpc.net/carsAPI/v2';


const cars = '/cars';
const auth ='/auth'
const users = '/users'


const urls ={
auth: {
    auth,
    refresh:`${auth}/refresh`,
    me:`${auth}/me`

},
    cars:{cars},
    users:{users}
}

export {baseURL,urls};