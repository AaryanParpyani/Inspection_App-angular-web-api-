import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { InspectionComponent } from "./inspection/inspection.component";

const routes: Routes = [
    {
        path:'', redirectTo:'login', pathMatch:'full'
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:'signup', component:SignupComponent
    },
    {
        path:'inspection', component:InspectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }