import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { MatInputModule } from '@angular/material/input';
import { DirectivesComponent } from './pages/directives/directives.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { ServicesComponent } from './pages/services/services.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { NgModelExampleComponent } from './components/ng-model-example/ng-model-example.component';
import { NgClassExampleComponent } from './components/ng-class-example/ng-class-example.component';
import { StructureDirExampleComponent } from './components/structure-dir-example/structure-dir-example.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { CustomDirExampleComponent } from './components/custom-dir-example/custom-dir-example.component';
import { CustomPipesExampleComponent } from './components/custom-pipes-example/custom-pipes-example.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { PipeSubjectsPipe } from './pipes/pipeSubjects.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DirectivesComponent,
    DataBindingComponent,
    PipesComponent,
    ServicesComponent,
    ChildComponent,
    ParentComponent,
    NgModelExampleComponent,
    NgClassExampleComponent,
    StructureDirExampleComponent,
    NumbersOnlyDirective,
    CustomDirExampleComponent,
    CustomPipesExampleComponent,
    PipesExampleComponent,
    StudentsTableComponent,
    AddStudentDialogComponent,
    PipeSubjectsPipe,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MainPageModule { }
