import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { pipe } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  precentage ;
  ngOnInit(): void {
  }

  onsubmit(form:NgForm){
    console.log(form.value.feild1);
    console.log(form.value.feild2);
    this.precentage=(form.value.feild1 + form.value.feild2+ form.value.feild3 + form.value.feild4 + form.value.feild5);

    console.log(this.precentage)

  }

}
