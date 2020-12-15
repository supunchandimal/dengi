import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TnfAlphacalculateService {

  incrementlevel:number;
  constructor() { }

  public calculate(tnfalpha:number){

      if(tnfalpha <= 15 ){
        this.incrementlevel = 1;
     
      }else if(tnfalpha>15 && tnfalpha <30){
        this.incrementlevel=(30-tnfalpha)/15;
      }else{
        this.incrementlevel =0;
      }
      return this.incrementlevel;

  }
}
