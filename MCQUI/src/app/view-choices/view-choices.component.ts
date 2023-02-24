import { Component, OnInit } from '@angular/core';
import { ChoicesService } from '../services/choices.service';
import { Choice } from '../models/choice.model';
import { ActivatedRoute, Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { AddChoicesComponent } from '../add-choices/add-choices.component';

@Component({
  selector: 'app-view-choices',
  templateUrl: './view-choices.component.html',
  styleUrls: ['./view-choices.component.css']
})
export class ViewChoicesComponent implements OnInit {
  // baseApiUrl: string = environment.baseApiUrl;

  // choiceId: string;

  choices: Choice[] = [];

  viewChoices: Choice ={
    id: '',
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: ''
  }

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


    // this.choiceId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.choicesService.getChoices(id)
          .subscribe({
            next: (response) => {
              this.viewChoices = response;
            }
          });
        }
      }
     
    })

  }

  // deleteChoices(id: string){
  //   this.choicesService.deleteChoices(id)
  //   .subscribe({
  //     next: (response) => {
  //       this.router.navigate(['home']);
  //     }
  //   });
  // }

  deleteChoices(id: string){
    this.choicesService.deleteChoices(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
        // Display an error message to the user or handle the error in some other way.
      }
    });
  }



}
