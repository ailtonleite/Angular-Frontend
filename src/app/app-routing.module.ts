import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ContaCrudComponent } from "./views/conta-crud/conta-crud.component"

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },{
    path: "contas",
    component: ContaCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
