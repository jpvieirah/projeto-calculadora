class CalcController {

 constructor (){

    this._operation = [];
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

    clearALL(){

        this._operation = [];

    } 

    clearEntry(){

        this._operation.pop();

    }

    addOperation(value){

        this._operation.push(value);

        console.log(this._operation);

    }
    
    settError(){

        this.displayCalc = "Error";

    }


    execBtn(value){

                switch (value) {

                case'ac':
                    this.clearALL();
                    break;
                case'ce':
                this.clearEntry();
                    break;
                case'soma':
            
                    break;
                case'subtracao':
            
                    break;
                case'divisao':
            
                    break;
                case'multiplicacao':
            
                    break;
                case'porcento':
            
                    break;
                case'igual':
            
                    break;

                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    this.addOperation(parseInt(value));
                        break;

                default:
                this.settError();        
                    break;
                
}

}

initButtonsEvents(){

let buttons = document.querySelectorAll("#buttons > g, #parts > g")

buttons.forEach((btn, index) => {

    this.addEventListenerALL(btn, "click drag", e => {

        let textBtn = btn.className.baseVal.replace("btn-", "");

        this.execBtn(textBtn);

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