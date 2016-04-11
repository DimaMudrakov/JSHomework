
var name, email, age, isAdmin;

name = 'Dima';
email = 'd.mudrakov@gmail.com';
age = 24;
isAdmin = true;


    var user = {name : name, email : email, age: age, isAdmin: isAdmin};

    user.isAdmin = false;

    user.age += 1;

    user.adrress = {city: 'Kiev' , street : 'Pavlenko', house: 33, room : 12};

    console.log(user);
