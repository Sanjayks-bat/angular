import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { GreetComponent } from './greet/greet.component';
import { HttpUsersComponent } from './http-users/http-users.component';
import { IfComponent } from './if/if.component';
import { UseHttpComponent } from './use-http/use-http.component';
import { UsePipesComponent } from './use-pipes/use-pipes.component';
import { UseSvcComponent } from './use-svc/use-svc.component';

const routes: Routes = [
  {path:"greet", component:GreetComponent},
  {path:"bindings", component:BindingsComponent},
  {path:"toggle",component:IfComponent},
  {path:"pipes",component:UsePipesComponent},
  {path:"blacklist",component:FilterWordComponent},
  {path:"fbService",component:UseSvcComponent},
  {path:"http",component:UseHttpComponent},
  {path:"jsUsers",component:HttpUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
