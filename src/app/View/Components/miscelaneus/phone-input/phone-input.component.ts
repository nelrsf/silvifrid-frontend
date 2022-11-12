import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit {

  public defaultCountryCode = "+57";
  public phoneNumber = "";



  constructor() { }

  ngOnInit(): void {
  }


  formatNumber(event: any) {

    let input = event.target;
    let number = event.target.value;


    let arrayNumberFormated = ["(","_","_","_",")","-","_","_","_","-","_","_","-","_","_"];
    number = number.replace(/\D/g,'');
    arrayNumberFormated[1] = number.charAt(0)!==""?number.charAt(0):"_";
    arrayNumberFormated[2] = number.charAt(1)!==""?number.charAt(1):"_";
    arrayNumberFormated[3] = number.charAt(2)!==""?number.charAt(2):"_";
    arrayNumberFormated[6] = number.charAt(3)!==""?number.charAt(3):"_";
    arrayNumberFormated[7] = number.charAt(4)!==""?number.charAt(4):"_";
    arrayNumberFormated[8] = number.charAt(5)!==""?number.charAt(5):"_";
    arrayNumberFormated[10] = number.charAt(6)!==""?number.charAt(6):"_";
    arrayNumberFormated[11] = number.charAt(7)!==""?number.charAt(7):"_";
    arrayNumberFormated[13] = number.charAt(8)!==""?number.charAt(8):"_";
    arrayNumberFormated[14] = number.charAt(9)!==""?number.charAt(9):"_";
    let formatedNumber = arrayNumberFormated.join("");
    event.target.value = formatedNumber;

    let lastChart;


    if(event.key==="ArrowLeft" || event.key==="Backspace"){
      lastChart = formatedNumber.length - this.reverseNumber(formatedNumber).search(/[0-9]/);
      lastChart = lastChart>formatedNumber.length?2:lastChart;
      input.setSelectionRange(lastChart-1,lastChart);
    }else{
      lastChart = formatedNumber.search(/[_]/);
      lastChart = lastChart!==-1?lastChart:14;
      input.setSelectionRange(lastChart,lastChart+1);
    }

    this.phoneNumber = this.defaultCountryCode + number;

    input.focus();
  }

  reverseNumber(number: string){
    let numberArray = number.split("");
    let reversedArray = numberArray.reverse();
    return reversedArray.join("");
  }

}
