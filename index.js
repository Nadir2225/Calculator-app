const input = document.getElementById('input')
const output = document.getElementById('output')
const result = document.getElementById('result')
const equal = document.getElementById('equal')


//get the value and put it in the screen

var i = ""
var start = false

const keyboard = (value) =>{
let lastc = i.slice(-1)
resulting('')
    if(value == 'delete' && lastc == ')'){
        i = i.slice(0, -1)
        i = i.slice(2, i.length)
        inputing(i)
        if( i.indexOf('+') == -1 && i.indexOf('×') == -1 && i.indexOf('-') == -1 && i.indexOf('÷') == -1 && i.indexOf('%') == -1){
            start = false
            outputing("")
            calculate()
        }else{
           calculate() 
        }
    }else if(value == 'delete'){
        i = i.slice(0, -1)
        inputing(i)
        if( i.indexOf('+') == -1 && i.indexOf('×') == -1 && i.indexOf('-') == -1 && i.indexOf('÷') == -1 && i.indexOf('%') == -1 && i.indexOf(')') == -1){
            start = false
            outputing("")
            calculate()
        }else{
           calculate() 
        }
    }else if(value == 'c'){
        i = ""
        start = false
        inputing('')
        outputing('')
        resulting('')
    }else if(
 (value == '.' && lastc == '+')
 ||
 (value == '.' && lastc == '-')
 ||
 (value == '.' && lastc == '×')
 ||
 (value == '.' && lastc == '÷')
 ||
 (value == '.' && i == '')
 ){
       i += '0.'
       inputing(i)
       calculate()
    }else if (
    (value == '.' && lastc == '.')
    ||
    (value == '+' && lastc == '+')
    ||
    (value == '-' && lastc == '-')
    ||
    (value == '÷' && lastc == '÷')
    ||
    (value == '×' && lastc == '×')
    ||
    (value == '%' && lastc == '%')
    ||
    (value == '+' && i == '')
    ||
    (value == '-' && i == '')
    ||
    (value == '×' && i == '')
    ||
    (value == '÷' && i == '')
    ||
    (value == '%' && i == '')
    ||
    (value == 'pn' && i == '')
    ||
    (value == '=' && i == '')
    ||
    (value == '=' && i == '.')
    ||
    (value == '%' && lastc == '+')
    ||
    (value == '%' && lastc == '×')
    ||
    (value == '%' && lastc == '÷')
    ||
    (value == '%' && lastc == '-')
    ){
        return
    }else if(
    (value == '+' && lastc == '-') 
    ||
    (value == '+' && lastc == '×')
    ||
    (value == '+' && lastc == '÷')
    ||
    (value == '×' && lastc == '+')
    ||
    (value == '×' && lastc == '-')
    ||
    (value == '×' && lastc == '÷')
    ||
    (value == '-' && lastc == '+')
    ||
    (value == '-' && lastc == '×')
    ||
    (value == '-' && lastc == '÷')
    ||
    (value == '÷' && lastc == '+')
    ||
    (value == '÷' && lastc == '×')
    ||
    (value == '÷' && lastc == '-')
    ){
      i = i.slice(0, -1) 
      i += value
      inputing(i) 
      calculate()
    }else if(
      value == '+' || value == '-' || value == '×' || value == '÷' || value == '%'
    ){
        i += value
        inputing(i)
        start = true
        calculate()
        
    }else if(value == '.' && (lastc == ')' || lastc == '%')){
       i += '×0.'
       inputing(i)
       calculate() 
    }else if (
      (value == '0' && (lastc == ')' || lastc == '%'))
      ||
      (value == '1' && (lastc == ')' || lastc == '%'))
      ||
      (value == '2' && (lastc == ')' || lastc == '%'))
      ||
      (value == '3' && (lastc == ')' || lastc == '%'))
      ||
      (value == '4' && (lastc == ')' || lastc == '%'))
      ||
      (value == '5' && (lastc == ')' || lastc == '%'))
      ||
      (value == '6' && (lastc == ')' || lastc == '%'))
      ||
      (value == '7' && (lastc == ')' || lastc == '%'))
      ||
      (value == '8' && (lastc == ')' || lastc == '%'))
      ||
      (value == '9' && (lastc == ')' || lastc == '%'))
    ){
       i += '×' + value
       inputing(i)
       calculate()
    }else if(value == 'pn'){
       i = `-(${i})`
       inputing(i)
       start = true
       calculate()
    }else if(value == '='){
       finall()
    }else if(value == '.'){
        dotcheck(i) 
        if(ok == true){
           return
        }else{
          i += value
        inputing(i) 
        calculate()  
        }
    }else{
        i += value
        inputing(i) 
        calculate()
    }
}













const inputing = (vari) =>{
    input.innerHTML = `
    <div class="entrain">${vari}</div>
    `
}
const resulting = (vari) =>{
    result.innerHTML = `
    <div class="input">${vari}</div>
    `
}
const outputing = (vari) =>{
    output.innerHTML = `
    <div class="output">${vari}</div>
    `
}

const calculate = () =>{
let lastca = i.slice(-1)
    if(start == true){
    if(lastca == '+' || lastca == '-' || lastca == '÷' || lastca == '×'){
        slice = i.slice(0, -1)
        devision = slice.replace(/÷/g, '/')
        multi = devision.replace(/×/g, '*')
        percent = multi.replace(/%/g, '/100')
        fin = eval(percent)
        sfin = fin.toString()
        if(sfin.indexOf('.') == -1){
         outputing(fin)
        }else{
         check = sfin.split('.')[1].length
         if(check > 4){
             fin = fin.toFixed(4)
             outputing(fin)
         }else{
             outputing(fin)
         }   
        }
    }else{
        devision = i.replace(/÷/g, '/')
        multi = devision.replace(/×/g, '*')
        percent = multi.replace(/%/g, '/100')
        fin = eval(percent)
        sfin = fin.toString()
        if(sfin.indexOf('.') == -1){
         outputing(fin)
        }else{
         check = sfin.split('.')[1].length
         if(check > 4){
             fin = fin.toFixed(4)
             outputing(fin)
         }else{
             outputing(fin)
         }   
        }
    }
    }
}



const finall = () =>{ 
   let lastca = i.slice(-1)
    if(start == true){
    if(lastca == '+' || lastca == '-' || lastca == '÷' || lastca == '×'){
        slice = i.slice(0, -1)
        devision = slice.replace(/÷/g, '/')
        multi = devision.replace(/×/g, '*')
        percent = multi.replace(/%/g, '/100')
        fin = eval(percent)
        sfin = fin.toString()
        if(sfin.indexOf('.') == -1){
         resulting(fin)
        }else{
         check = sfin.split('.')[1].length
         if(check > 4){
             fin = fin.toFixed(4)
             resulting(fin)
         }else{
             resulting(fin)
         }   
        }
    }else{
        devision = i.replace(/÷/g, '/')
        multi = devision.replace(/×/g, '*')
        percent = multi.replace(/%/g, '/100')
        fin = eval(percent)
        sfin = fin.toString()
        if(sfin.indexOf('.') == -1){
         resulting(fin)
        }else{
         check = sfin.split('.')[1].length
         if(check > 4){
             fin = fin.toFixed(4)
             resulting(fin)
         }else{
             resulting(fin)
         }   
        }
    }
    }
    outputing('')
    inputing('')
    i = ""
    start = false
}

//equal.addEventListener("click", finall)


/*nadir = 'nadir'
nassim = nadir.length
console.log(nassim)
console.log(nadir.slice(2,nadir.length))

nadr = 'najsjdk.nadir'
console.log(nadr.split('.')[1].length*/
    
    
const dotcheck = (valeur) =>{
    step1 = valeur.split('+')
    step1l = step1.length - 1
    step2 = step1[step1l].split("-")
    step2l = step2.length - 1
    step3 = step2[step2l].split("÷")
    step3l = step3.length - 1
    step4 = step3[step3l].split("×")
    step4l = step4.length - 1
    if(step4[step4l].indexOf('.') == -1){
     return ok = false    
    }else{
     return ok = true   
    }
    return ok
}
