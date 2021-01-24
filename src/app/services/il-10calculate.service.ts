import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Il10calculateService {

  constructor() { }
  incrementlevel:number;
    public calculate(in10:number){
      
      if(in10<=20){
        this.incrementlevel =1;
      }else if(in10>20 && in10 <110){
        this.incrementlevel=(110-in10)/90;
      }else{
        this.incrementlevel = 0;
      }
      return this.incrementlevel;
    }

}
