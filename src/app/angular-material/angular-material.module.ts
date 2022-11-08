import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule { }
