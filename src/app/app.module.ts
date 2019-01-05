import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';



import { ParentComponent } from './Component-Interraction/parent/parent.component';
import { ChildComponent } from './Component-Interraction/child/child.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { MaterialModule } from './shared/material.module';
import {Operator} from 'rxjs';

import { StyleComponent } from './style/style.component';
import { EventComponent } from './event/event.component';
import { CustomComponent } from './custom/custom.component';
import { Event2Component } from './event2/event2.component';

import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PipeComponentComponent } from './custom-pipe/pipe-component/pipe-component.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HomeComponent } from './CRUD/home/home.component';
import { ProductComponent } from './CRUD/product/product.component';
import { UpdateProductComponent } from './CRUD/update-product/update-product.component';

const rootes:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"update/:id",component:UpdateProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TdfComponent,
    MdfComponent,
    StyleComponent,
    EventComponent,
    CustomComponent,
    Event2Component,
    CustomPipeComponent,
    PipeComponentComponent,
    CustomDirectiveComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponent,
   
    
      
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(rootes),
    
    
   
    
  ],
  providers: [

              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
