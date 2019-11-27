'use strict';

//Функция котоаря добавляет ежлементы char  - удваивает в строке str
function doubling(str, char){
    // из строки делаем массив элементов str_arr
    let str_arr=[]
    str_arr=str.split('')
      
  //console.log(str_arr)
    let Index=[]; //индекс всех элементов списка, которые совпадаеют с char
    for (let i=0; i<str_arr.length; i++){
        if (str_arr[i]===char){
            Index.push(i);
        }
    }
    let char_doubble = char.repeat(2);
    //Удалем элемент и добввляем двойной
    for (let i=0; i<Index.length; i++){
        let y=Index[i];
        str_arr.splice(y, 0, char_doubble);
        str_arr.splice(y+1, 1, );
        
    }
    //console.log(str_arr)

    let str_new=str_arr.join("");
   
   return str_new;
}

let str=prompt("Введите любое слово или строку: ")
let char=prompt("Введите любой символ: ")
let str_new=doubling(str, char);
alert("Выводится строка, где все симовлы продублированы: " + str_new);



