import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { MessageComponent } from './components/message/message.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'cadrage', component:CategorieComponent},
  {path:'message', component:MessageComponent},
  {path:'produit', component:PhotoComponent},
  {path:'user', component:UserComponent},
  {path:'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
