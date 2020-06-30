import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Il10calculateService {

  constructor() { }
  incrementlevel:number;
    public calculate(in10:number){
      
      if(in10>=100){
        this.incrementlevel =16;
      }else if(in10<=20){
        this.incrementlevel=0;
      }else{
        this.incrementlevel = (in10/80)*16;
      }
      return this.incrementlevel;
    }

}
