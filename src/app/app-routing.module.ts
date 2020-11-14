import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './componente/lista/lista.component';
import { LoginComponent } from './componente/login/login.component';
import { NewComponent} from './componente/new/new.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent },
  {path: "signup", component: NewComponent},
  {path: "list", component: ListaComponent},
  {path: 'create', component: NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
