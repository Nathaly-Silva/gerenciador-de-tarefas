import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();

    //testar se as tarefas está funcionando
    //this.tarefas = [
    // new Tarefa(1, "Tarefa 1", false),
    // new Tarefa(2, "Tarefa 2", true) ]
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa | any): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?'))
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
  }

  alterarStatus(tarefa: Tarefa | any): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?'))
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
  }
} 
  


