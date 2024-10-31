console.log("Task 1");

function Account({login, email}){
    this.login = login;
    this.email = email;


}

Account.prototype.getInfo = function(){
    return `Login: ${this.login}, Email: ${this.email}`;
}

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

console.log(mango.getInfo());

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
   });
   
console.log(poly.getInfo());