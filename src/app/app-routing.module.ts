import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcardsComponent } from './allcards/allcards.component';


const routes: Routes = [
  {path : 'allcard', component : AllcardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
