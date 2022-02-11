class CalcController {

 constructor (){

   this._displayCalc = "0";
   this._currentDate;
   this.initialize();

}

initialize(){

let displayCalcEl = document.querySelector("#display");
let dateEl = document.querySelector("#data");
let timeEl = document.querySelector("#hora");

displayCalcEl.innerHTML = "5678";
dateEl.innerHTML = "11/02/2022";
timeEl.innerHTML = "09:24";



}
get displayCalc(){

    return this._displayCalc;

}

set displayCalc(valor){
this._displayCalc = valor;

}
get dcurrentDate(){

    return this._currentDate;

}

set currentDate(valor){
this._currentDate = valor;
}

}