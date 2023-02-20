import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Choice } from '../models/choice.model';
import { ChoicesService } from '../services/choices.service';
// import { ChoicesService } from 'src/app/services/choices.service';


@Component({
  selector: 'app-add-choices',
  templateUrl: './add-choices.component.html',
  styleUrls: ['./add-choices.component.css']
})
export class AddChoicesComponent implements OnInit {

  addChoicesRequest: Choice ={
    id: '',
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: ''

  }

  //  constructor(private choicesService: ChoicesService,private router: Router) { }
  constructor(private choicesService: ChoicesService, private router: Router) { }


  ngOnInit(): void {
  }

  addChoicess(){
    this.choicesService.addChoicess(this.addChoicesRequest)
    .subscribe({
      next: (choice) => {
        console.log(choice);
        this.router.navigate(['/choices'])
      }

    });
  }

}
