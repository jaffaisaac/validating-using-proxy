/**
 * Proxies can be extremely useful when it comes to validation. We can 
easily validate the passed value for an object using set handler. For example, let’s suppose 
that we are creating a voting application and only people above 18 years of age and 
having residency of the country are allowed to vote
 */
const voter_validator ={
    set :function(obj ,prop, value){
        if(prop==="age"){
            if(!Number.isInteger(value)){
                throw new TypeError(`input age is not interger`)
            }
            if(value <18){
                throw new TypeError(`input age seems invalid`)
            }
        }
        else if(prop ==='residency'){
            if(value===false){
                throw new TypeError(`residency is mandatory to vote`)
            }
        }
        // The defaut behavour to store a value 
        obj[prop]=value;

        //indicates success
        return true;
    }
}

const person =new Proxy({},voter_validator);
console.log(person.age=23)
console.log(person.residency =false) //errror
// person.age=23; error