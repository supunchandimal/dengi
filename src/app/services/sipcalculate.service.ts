import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SipcalculateService {

  constructor() { }
  incrementlevel:number;
  public calculate (sip:number){

    if(sip<=0.5){
      this.incrementlevel = 15;
    }else{
      this.incrementlevel = 5;
    }
    return this.incrementlevel;
  }
}
