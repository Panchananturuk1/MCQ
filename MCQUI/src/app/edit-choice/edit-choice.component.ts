import { Component, OnInit } from '@angular/core';
import { ChoicesService } from '../services/choices.service';
import { Choice } from '../models/choice.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-choice',
  templateUrl: './edit-choice.component.html',
  styleUrls: ['./edit-choice.component.css']
})
export class EditChoiceComponent implements OnInit {

  viewChoices: Choice ={
    id: '',
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: ''
  }

  constructor(private route: ActivatedRoute,private choicesService: ChoicesService,
    private router: Router) { }

  ngOnInit(): void {

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

  updateEmployee = () => {
    this.choicesService.updateChoices(this.viewChoices.id, this.viewChoices)
      .subscribe(
        response => this.router.navigate(['choices']),
        error => console.error(error)
      );
  };


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
