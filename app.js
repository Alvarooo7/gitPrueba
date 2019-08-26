
//Write  documents with js 
//document.write('<h2>Saluda Prrroo</h2>');

//tipos de datos
//string 
//diferencia entre  var,let,const https://cybmeta.com/var-let-y-const-en-javascript
var nombre = 'Pedro'
let apellido = 'Ramirez'
console.log(nombre+' '+apellido); console.log("Hola Prro");
//numericos 1*1.6*-1.99
let numero1 = 1 , numero2='2'; 
//Mas info de operadores sobre comparaciones https://es.stackoverflow.com/questions/331/diferencias-entre-y-comparaciones-en-javascript
let result = numero1 == numero2;
console.log(result);
//Arrays
console.log(['GG',55,true,['user','points']]);
//Objetos
var Objeto = {
    "username":'Prro123',
    "Puntos": 500,
    "Friends":{
        'Nom':'Robert'
    },
    "contraseña" :'tutio'
};
console.log(Objeto);
let  Usuario =prompt('Ingrese Usuario: ','Prro123'),
contra=prompt('Ingrese Contraseña: ','tutio');
//Condicionales
if (Objeto.username==Usuario && Objeto.contraseña==contra){
    alert('Usuario Correcto');
    document.write('<center><h2 id="respuesta2">Su puntuación es de :'+Objeto.Puntos+
    '</h2></center>');
    let elementoHtml = document.getElementById('respuesta');
    elementoHtml.innerHTML='Bienvenido '+Objeto.username;
    document.body.style.backgroundColor='#000';
    document.getElementById("respuesta").style.color='#FFF';
    document.getElementById("respuesta2").style.color='#FFF';
    if (Objeto.Puntos<600){
        document.write('<form name="formSelected"><p><select id="optionsGame" name="optionsGame" >');
        for(var i=0 ; i<(Objeto.Puntos/100);i++){
            if(i==0) document.write('<option selected="selected">Premio ' +i+'</option>');
            else  document.write('<option >Premio ' +i+'</option>');

        }
        document.write('<p><input id="btn" name="btn" type="button" value="Escoja Premio"></input></p>');
        document.write('</select></p></form>');
        
    }
}
else  if (Objeto.username==Usuario || Objeto.contraseña==contra){
    alert('Usuario y/o Contraseña Incorrecta');
}else{alert('Ingrese Correctamente los datos');}

//Info Funciones Nomrales y  Tradicionales https://es.stackoverflow.com/questions/1799/cuando-usar-una-funci%C3%B3n-flechaarrow-function-en-vez-de-una-funci%C3%B3n-com%C3%BAn