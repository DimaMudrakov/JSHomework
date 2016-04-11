

    var user = {name:'', email: '', age: 0, isAdmin: false};

    user.age = Math.round(Math.random() * 100 );



    if(user.age >= 5 && user.age <= 20){
        console.log(user.age + ' ' + 'років');
    }
    else if (user.age % 10 == 2 || user.age % 10 == 3 || user.age % 10 == 4){
        console.log(user.age + ' ' + 'роки');
    }
    else if(user.age % 10 == 1){
        console.log(user.age + ' ' + 'рік');
    }
    else{
        console.log(user.age + ' ' + 'років');
    }

    switch (user.age != 0){

        case (user.age >= 5 && user.age <= 20):
            console.log(user.age + ' ' + 'років');
            break;

        case (user.age % 10 == 2 || user.age % 10 == 3 || user.age % 10 == 4):
            console.log(user.age + ' ' + 'роки');
            break;

        case (user.age % 10 == 1):
        console.log(user.age + ' ' + 'рік');
            break;

        default :
        console.log(user.age + ' ' + 'років');
    }



