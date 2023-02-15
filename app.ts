const test_string = (name:string):string|number =>{
return name;
};
const test_string_1 = (age:number):void =>{
    console.log(age)
};
const test_string_2 = (name:string):string[]|number =>{
    return [name]
};
type test_string = string[]|string[];

const test_string_3 = (name:string):test_string => {
  return [name]
}
test_string_3('asdas')



const arr:number[] = [1,2,3,4,5];
const arr_1:string[]=['asadsd'];
const arr_2:[number,string?] = [1,'2'];


interface IUser {
    name:string;
    surName:string;
    age:number;
    status:boolean;
}

const user:IUser = {
    name:'Vasya',
    surName:'pupkin',
    age:21,
    status:true
}

const getUser = (user:IUser):IUser=>{
    return user;
}

const testUser = (user:IUser):IUser[]=>{
    return [user]
}


interface IUsers<DATA> {
    name:string,
    age:number,
    status:boolean,
    data:DATA
}

const users:IUsers<IUser[]> ={
    name:'Vasya',
    age:31,
    status:true,
    data:[user,user]
}

const user_1:Partial<IUser> ={age:21};


const x = () => 5

type myType = ReturnType<typeof x>