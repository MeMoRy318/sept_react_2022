import {Simson} from "../Simson/Simson";

const Simpsons = () => {

    const simpsons = [

        {name:'Гомер Сімпсон',img:'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'},
        {name:'Мардж Сімпсон',img:'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'},
        {name:'Барт Сімпсон',img:'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'},
        {name:'Ліса Сімпсон',img:'https://i.pinimg.com/originals/03/05/1e/03051e7071e4d8a8929dcee946244e7d.png'},
        {name:'Мэгги Симпсон',img:'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'},
    ]

    return (
        <div className={'simpsons'}>
            <h1 style={{textAlign:'center'}} className={'simpsons__title'}>simpsons</h1>
            {simpsons.map((simpson,index) => <Simson key={index} simson={simpson}/>)}
            <hr/>
        </div>
    );
};

export {Simpsons};