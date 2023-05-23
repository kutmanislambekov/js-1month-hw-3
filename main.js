
 let number = prompt('Введите число')
 function isNegative(num) {
    let result = ''
    if(num === null){
        result = 'вы нажали на отмену'
    }else if(num === ""){
        result = 'вы нажали на ok'
    }else if(isNaN(num)){
       result="введите число!"
   }else if(num > 0){
    result = `число ${num} положительное`
   }else{
    result = `число ${num} отрицательное`
   }
   return result
 }

 
 alert(isNegative(number))

// доп дз


 let count = prompt('Введите число')
 let g = 0
 for(let i = 0; i < count; i++){
    switch(g){
        case 0:{
            document.write("<div class='block red'></div>")
            g++
            break
        }
        case 1:{
            document.write("<div class='block yellow'></div>")
            g++
            break
        }
        default:{
            document.write("<div class='block green'></div>")
            g = 0
          
        }
    }

 }

//  for(let i = 0; i < 5; i++){
//     console.log(i);
//  }



//i++
//  let i = 0
//  i = i + 1


//i--
//  let i = 0
//  i = i - 1