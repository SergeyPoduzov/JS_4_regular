/*
1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
*/

//Функция подсчитывает сумму цифры в строке

function summing(str){
    
    let sum=0
    let str_len =str.length;
    for (let i=0; i<str_len; i++){
        let num=parseInt(str[i], 10);
        sum +=num
    }
    return sum;   
}



let check=true;
while (check){

    str = prompt("Введите строку состоящую из цифр: ");
    console.log(Number(str));
    //проверка - нет ли в строке - не числовых значений
    if (isNaN(str) == false){
        let sum=summing(str);
        alert("Сумма цифр этого числа равна: " + sum);
        break;
    }
    
    else{
        alert("В строке присутствууют лругие символы, введиет еще раз ");
        continue;

    }

}