import { PipesComponent } from './pages/pipes/pipes.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DirectivesComponent } from './pages/directives/directives.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Route[] = [
    {
        path: "data-binding",
        component: DataBindingComponent,
        pathMatch: "full"
    },
    {
        path: "directives",
        component: DirectivesComponent,
        pathMatch: "full"
    },
    {
        path: "pipes",
        component: PipesComponent,
        pathMatch: "full"
    },
    {
        path: "services",
        component: ServicesComponent,
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "data-binding"
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainPageRoutingModule {


}





