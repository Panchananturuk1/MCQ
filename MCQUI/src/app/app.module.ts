import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemsComponent } from './items/items.component';
import { MatSliderModule } from '@angular/material/slider';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from "@angular-slider/ngx-slider";  
import { FormsModule } from '@angular/forms';
import { AddChoicesComponent } from './add-choices/add-choices.component'
import { ViewChoicesComponent } from './view-choices/view-choices.component';
import { View2Component } from './view2/view2.component';
import { EditChoiceComponent } from './edit-choice/edit-choice.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ItemsComponent,
    AddChoicesComponent,
    ViewChoicesComponent,
    View2Component,
    EditChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule,
    MatSliderModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
