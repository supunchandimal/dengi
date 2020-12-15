import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PafcalculateService {

  
  constructor() { }
  increment:number;
  public calculate ( paflevel:number){
    
    if(paflevel  <= 10){
      
      this.increment=1;
    }else if(paflevel>10 && paflevel<100){
      this.increment=(100-paflevel)/90;
    }else{
      this.increment=0
    }
    
    return this.increment;
  }

}
