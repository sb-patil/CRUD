import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatCheckboxModule,MatInputModule,MatFormFieldModule} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    CommonModule
  ],
  exports:[
    MatCheckboxModule,
    MatButtonModule,MatInputModule,MatFormFieldModule
  ]
})
export class MaterialModule { }
