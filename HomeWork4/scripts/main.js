
function User(name, lastName, age, email){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}
function Admin( address, telephoneNumber){
    this.address = address;
    this.telephoneNumber = telephoneNumber;
}

var user = new User('Dima', 'Mudrakov', 24, 'test@test.ru');

Admin.prototype = user;

admin = new Admin("Semerenko", 327934);

for(var prop in admin) {

    if (admin.hasOwnProperty(prop)){

        console.log("Cвойство " + prop + "; " + "\n" + "Значение " +  admin[prop] + ";" );
    }

}








