import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PafcalculateService {

  constructor() { }
  increment:number;
  public calculate ( paflevel:number){
    
    if(paflevel>100||paflevel==100){
      console.log("greter than 100");
      this.increment=20;
    }else if(paflevel<=10){
      this.increment=0;
    }else{
      this.increment= (paflevel/90)*20;
    }
    
    return this.increment;
  }

}
