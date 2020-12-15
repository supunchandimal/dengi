import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IlOnebetacalculateService {

  constructor() { }
  incrementlevel:number;

  public calculate(ilonebeta:number){

    if(ilonebeta<=30.5){
      this.incrementlevel=1;
    }else if(ilonebeta>30.5 && ilonebeta <33.5){
      this.incrementlevel=(33.5-ilonebeta)/3;
    }else this.incrementlevel =0;

    return this.incrementlevel;
  }

}
