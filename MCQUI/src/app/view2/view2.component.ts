import { Component, OnInit } from '@angular/core';
import { ChoicesService } from '../services/choices.service';
import { Choice } from '../models/choice.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  choices: Choice[] = [];

  value:number =50;
  constructor(private route: ActivatedRoute,private choicesService: ChoicesService,
    private router: Router) { }

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


  // deleteChoices(id: string){
  //   this.choicesService.deleteChoices(id)
  //   .subscribe({
  //     next: (response) => {
  //       this.router.navigate(['home']);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       // Display an error message to the user or handle the error in some other way.
  //     }
  //   });
  // }

  deleteChoices(id: string){
    this.choicesService.deleteChoices(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['home']);
      }
    });
  }

}