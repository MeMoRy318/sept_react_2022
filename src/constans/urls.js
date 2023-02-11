const baseURL = 'http://owu.linkpc.net/carsAPI/v2';


const cars = '/cars';
const auth = '/auth';
const users = '/users'

const urls = {
    cars:{
        cars,
        byId:(id)=>`${cars}/${id}`
    },
    auth:{
        login:auth,
        refresh:`${auth}/refresh`,
        me:`${auth}/me`
    },
    users:{
        users
    }
}

export {baseURL,urls};