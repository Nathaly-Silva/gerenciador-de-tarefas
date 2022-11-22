import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes } from './tarefas/tarefas-routing.module';

export const routes: Routes = [
  {
    path:'', 
    redirectTo: 'tarefas/listar',
    pathMatch: 'full' // url completa
  },
  ...TarefaRoutes //concatena array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
