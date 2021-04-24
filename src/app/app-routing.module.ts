import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agenda'
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'listatarefas',
    component: ListaTarefasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
