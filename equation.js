const asign = document.getElementById('asign')
const bsign = document.getElementById('bsign')
const csign = document.getElementById('csign')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
const reset = document.getElementById('reset')
const bar = document.getElementById('bar')
const resetbtn = document.getElementById('resetbtn')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')

asign.value = '+'
bsign.value = '+'
csign.value = '+'
let submition = false



const change = (id) =>{
    if(id == asign){
       if(id.value == '+'){
       id.innerHTML = `
       <div class="sign" >(-)</div>
       `
       id.value = '-'
       }else{
       id.innerHTML = `
       <div class="sign" >(+)</div>
       `
       id.value = '+' 
       } 
    }else{
       if(id.value == '+'){
       id.innerHTML = `
       <div class="sign" >-</div>
       `
       id.value = '-'
       }else{
       id.innerHTML = `
       <div class="sign" >+</div>
       `
       id.value = '+' 
       }
    }
}

const validation = () =>{
    if(a.value !== "" && b.value !== "" && c.value !==""){
        submit.style.opacity = "1"
        submition = true
    }else{
        submit.style.opacity = ".5"
        submition = false
    }
}

const show_results = () =>{
    if(submition == true){
        calculate()
    }else{
        return
    }
}

const calculate = () =>{
    delta = eval(`(${b.value})**2 - 4 * (${asign.value} ${a.value})*(${csign.value} ${c.value})`)
    if(delta > 0){
        firstx = eval(`-(${bsign.value} ${b.value})/(2 * (${asign.value} ${a.value})) + (((delta)**(1/2))/(2 * (${asign.value} ${a.value})))`)
        secondx = eval(`-(${bsign.value} ${b.value})/(2 * (${asign.value} ${a.value})) - (((delta)**(1/2))/(2 * (${asign.value} ${a.value})))`)
        bar.innerHTML = `<div class="bar"></div>`
        result.innerHTML = `
        <div class="x1">
            <div class="rx1">X =
            <div class="the1">1</div>
            </div>
            <div>
                <div class="answer1">
                    ${firstx.toFixed(2)}
                </div>
            </div>
        </div>
        <div class="x1">
            <div class="rx1">X =
            <div class="the1">2</div>
            </div>
            <div>
                <div class="answer1">
                    ${secondx.toFixed(2)}
                </div>
            </div>
        </div>
        ` 
        reset.innerHTML = `
        <button id="resetbtn">reset</button>
        `
        submit.style.opacity = ".5"
        submition = false     
    }else if(delta == 0){
        onlyx = eval(`-(${bsign.value} ${b.value})/(2 * (${asign.value} ${a.value})) + (((delta)**(1/2))/(2 * (${asign.value} ${a.value})))`)
        bar.innerHTML = `<div class="bar"></div>`
        result.innerHTML = `
        <div class="x1">
            <div class="rx1">X =
            </div>
            <div>
                <div class="answer1">
                    ${onlyx.toFixed(2)}
                </div>
            </div>
        </div>
        ` 
        reset.innerHTML = `
        <button id="resetbtn">reset</button>
        `
        submit.style.opacity = ".5"
        submition = false
    }else if(delta < 0){
        comp1 = eval(`-(${bsign.value} ${b.value})/(2 * (${asign.value} ${a.value}))`)
        comp2 = eval(`(((- delta)**(1/2))/(2 * (${asign.value} ${a.value})))`)
        bar.innerHTML = `<div class="bar"></div>`
        result.innerHTML = `
        <div class="x1">
            <div class="rx1">X =
            <div class="the1">1</div>
            </div>
            <div>
                <div class="answer1">
                    ${comp1.toFixed(2)} + ${comp2.toFixed(2)}i
                </div>
            </div>
        </div>
        <div class="x1">
            <div class="rx1">X =
            <div class="the1">2</div>
            </div>
            <div>
                <div class="answer1">
                    ${comp1.toFixed(2)} - ${comp2.toFixed(2)}i
                </div>
            </div>
        </div>
        ` 
        reset.innerHTML = `
        <button id="resetbtn">reset</button>
        `
        submit.style.opacity = ".5"
        submition = false
    }
}

const resetting = () =>{
   a.value = "" 
   b.value = ""
   c.value = ""
   bar.innerHTML = ""
   result.innerHTML = ""
   reset.innerHTML = ""
   asign.value = '-'
   bsign.value = '-'
   csign.value = '-'
   change(asign)
   change(bsign)
   change(csign)
}



a.addEventListener('input', validation)
b.addEventListener('input', validation)
c.addEventListener('input', validation)
submit.addEventListener('click', show_results)
reset.addEventListener('click', resetting)
