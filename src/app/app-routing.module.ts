import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RicknmortyComponent } from './pages/ricknmorty/ricknmorty.component';

const routes: Routes = [
  { path: '', redirectTo: 'ricknmorty', pathMatch: 'full' },
  { path: 'ricknmorty', component: RicknmortyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
