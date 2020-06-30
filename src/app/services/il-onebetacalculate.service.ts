import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IlOnebetacalculateService {

  constructor() { }
  incrementlevel:number;

  public calculate(ilonebeta:number){

    if(ilonebeta>=33.5){
      this.incrementlevel=15;
    }else{
      this.incrementlevel=5;
    }

    return this.incrementlevel;
  }

}
