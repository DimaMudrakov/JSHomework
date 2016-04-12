var user = {name:'Dima', lastName: 'Mudrakov' , email: 'mudryi92@mail.ru', age: 24, isAdmin: true, isUkrainian: true};

function validateUser (user){

    var result = {status: '', message: ''};

    if(validateName(user.name) === true && validateLastName(user.lastName) === true &&  validateEmail(user.email) === true &&
      validateAge(user.age) === true &&  validateIsAdmin(user.isAdmin) === true && validateIsUkrainian(user.isUkrainian) === true ){

        result.status = 'Ok';
        result.message = 'Все вірно';

        return result.status + result.message;
    }
    else if(validateName(user.name) === false){

        result.status = 'Error';
        result.message = 'Имя не повинно мати цифри';

        return result;
    }
    else if(validateLastName(user.lastName) === false){

        result.status = 'Error';
        result.message = 'Прізвище не повинно мати цифри';

        return result.status + result.message;
    }
    else if(validateEmail(user.email) === false){

        result.status = 'Error';
        result.message = 'Email не валідний';

        return result.status + result.message;
    }
    else if(validateAge(user.age) === false){

        result.status = 'Error';
        result.message = 'Цей продукт не продается особам менше 18 років';

        return result.status + result.message;
    }
    else if(validateIsAdmin(user.isAdmin) === false){

        result.status = 'Error';
        result.message = 'Цей продукт тільки для адміністраторів';

        return result.status + result.message;
    }
    else if(validateIsUkrainian(user.isUkrainian) === false){

        result.status = 'Error';
        result.message = 'Для отримання цього продукту потрібно бути Українцем чи Українкою ';

        return result.status + result.message;
    }
}

    function validateName (name){

        var matches = name.match(/\d+/g);

        if (matches === null) {
            return true;
        }
        else{
            return false;
        }
    }

    function validateLastName (lastName){

        var matches = lastName.match(/\d+/g);

        if (matches === null) {
            return true;
        }
        else{
            return false;
        }
    }
    function validateEmail (email){


        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var result = re.test(email);

        if(result === true){
            return true;
        }
        else{
            return false;
        }
    }
        function validateAge (age){

            if(age >= 18){
                return true;
            }
            else{
                return false;
            }
        }
        function validateIsAdmin (isAdmin){

            if(isAdmin === true){
                return true;
            }
            else{
                return false;
            }

        }
        function validateIsUkrainian (isUkrainian){

            if(isUkrainian === true){
                return true;
            }
            else{
                return false;
            }
        }

    validateUser(user);


