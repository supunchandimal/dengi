import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TnfAlphacalculateService {

  incrementlevel:number;
  constructor() { }

  public calculate(tnfalpha:number){

      if(tnfalpha>=30 ){
        this.incrementlevel = 18;
        console.log("tnf level >=30")
      }else if(tnfalpha<=15){
        this.incrementlevel=0;
      }else{
        this.incrementlevel =(tnfalpha/15)*18;
      }
      return this.incrementlevel;

  }
}
