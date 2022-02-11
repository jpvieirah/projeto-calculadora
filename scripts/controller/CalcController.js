class CalcController {

 constructor (){

    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();


}

initialize(){ 

    this.setDisplayDateTime();
   
    setInterval(()=>{

        this.setDisplayDateTime(); 

    }, 1000);

   

}

addEventListenerALL(element, events, fn){

events.split(' ').forEach(event => {

 element.addEventListener(event, fn, false);

});

}

initButtonsEvents(){

let buttons = document.querySelectorAll("#buttons > g, #parts > g")

buttons.forEach((btn, index) => {

    this.addEventListenerALL(btn, "click drag mouseover", e => {

        console.log(btn.className.baseVal.replace("btn-", ""));

});

this.addEventListenerALL(btn, "mouseover mouseup mouse down", e => {

 btn.style.cursor = "pointer";
 

});

})

}

setDisplayDateTime(){

    this.displayDate = this.currentDate.toLocaleDateString(this._locale)
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale)


}

get displayTime(){

    return this._timeEl.innerHTML;

}

 set displayTime(value) {

    return this._timeEl.innerHTML = value;

}


get displayCalc(){

    return this._displayCalcEl.innerHTML;

}

set displayDate(value) {
   
    return this._dateEl.innerHTML = value;

}

set displayCalc(value){
this._displayCalcEl.innerHTML = value;

}
get currentDate(){

    return new Date();

}

set currentDate(value){
this._currentDate = value;
}

}