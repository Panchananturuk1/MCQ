import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChoicesComponent } from './add-choices/add-choices.component';

import { ItemsComponent } from './items/items.component';
import { ViewChoicesComponent } from './view-choices/view-choices.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
   {
  path: '',
    component: ItemsComponent
  },
  {
    path: 'home',
      component: ItemsComponent
    },
  {
  path: 'choices',
  component: ViewChoicesComponent
  },
  {
  path: 'view2',
  component: View2Component
  },
  {
  path: 'Addchoices',
  component: AddChoicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
