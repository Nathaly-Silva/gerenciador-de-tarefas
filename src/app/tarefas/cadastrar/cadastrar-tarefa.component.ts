import { Component, ViewChild, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService } from '../shared/tarefa.service';

//aula 61

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

@ViewChild('formTarefa') formTarefa: NgForm;
tarefa: Tarefa;

constructor(
  private tarefaService: TarefaService,
  private router: Router
) {}

ngOnInit(){
  this.tarefa = new Tarefa();

}

//associação real tarefa: Tarefa com a interface

cadastrar(): void {
  if (this.formTarefa.form.valid) {
    this.tarefaService.cadastrar(this.tarefa);
    this.router.navigate(["/tarefas"])
  }
}
/*(this.formTarefa.form.valid)  retorna true or false 
 caso o furmulario possua erro ou não
 this.tarefaService.cadastrar(this.tarefa); feito cadastro
 passo para tela que quero proceguir*/

}


