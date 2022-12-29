import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';


@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})

export class EditarTarefaComponent {

  @ViewChild('formTarefa') formTarefa: NgForm;
  
  tarefa: Tarefa;

  constructor (
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  /* route ActivatedRoute - tem acesso ao route.snapshot.params(
    contem todos os parametros contidos na url : tarefa.service)
    + operador type que faz a conversão para numerico
  )
   
   */
  ngOnInit() {

    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
        this.tarefaService.atualizar(this.tarefa);
        this.router.navigate(['/tarefas']);
    }
  }
}
