import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SipcalculateService {

  constructor() { }
  incrementlevel:number;
  public calculate (sip:number){

    if(sip<=0.5){
      this.incrementlevel = 1;
    }else if(sip>0.5 && sip <1.5){
      this.incrementlevel = sip-0.5;
    }else this.incrementlevel = 1;
    return this.incrementlevel;
  }
}
