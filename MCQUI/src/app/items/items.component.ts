import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  adcChoice(){
    this.router.navigate(['Addchoices'])
  }

 

  // deleteChoices(id: string){
  //   this.choicesService.deleteChoices(id)
  //   .subscribe({
  //     next: (response) => {
  //       this.router.navigate(['employees']);
  //     }
  //   });
  // }

}
