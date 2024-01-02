//declara e atribui valor a uma variável
let boasVindas = "Fala, Dev!";
boasVindas = "Fala, Dev! Beleza?";

//constante não pode mudar valor
const serHumano = true;
serHumano = false; //Erro!

//usando uma função
alert(boasVindas);

//criando uma função
function sayHello(text) {
    alert(text);
}

//criando um objeto
const person = {
    age: 18,
    drive: function() {}
}

//usando um objeto
person.drive()