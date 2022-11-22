import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent
  ],
  providers: [
    TarefaService
  ],
    
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
   
  ]
})
export class TarefasModule { }
