import { Component, OnInit } from '@angular/core';
import { ChoicesService } from '../services/choices.service';
import { Choice } from '../models/choice.model';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  choices: Choice[] = [];

  value:number =50;
  constructor(private choicesService: ChoicesService) { }

  ngOnInit(): void {
    this.choicesService.getAllChoices()
    .subscribe({
      next: (choices)=> {
        console.log(choices);
        this.choices = choices;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}