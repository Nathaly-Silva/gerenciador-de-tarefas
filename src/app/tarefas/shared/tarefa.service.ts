import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }


    //metodo que retorna um arrei de tarefas
    listarTodos(): Tarefa[] { 
      const tarefas = localStorage['tarefas'];
      return tarefas ? JSON.parse(tarefas) : [];
      // se existe tarefas ? vai retornar a lista de tarefas caso contrario, retorna arrei vazio
    }
    // cadastrar uma Tarefa (tarefa: Tarefa)que contem os 3 atributos cadastrados id, nome, concluido ou não
    cadastrar (tarefa: Tarefa): void {
      const tarefas = this.listarTodos() //chama o metodo acima para listar todas as tarefas
      
      tarefa.id = new Date().getTime(); //new Date().getTime() segundos da data de 1970 ate a data atual, numero unico
      tarefas.push(tarefa); //pega a lista de tarefas retornadas do local Storage(const tarefas = this.listarTodos()) e insere a tarefa nela
      //push adiciona no final da lista
      localStorage['tarefas'] = JSON.stringify(tarefas); 
      // pegando no localstorage e convertendo as tarefas par string
      // e guardando no local storage
    }

    buscarPorId(id: number): Tarefa | undefined { // busca pela tarefa referente ao id
      const tarefas: Tarefa[] = this.listarTodos(); // chama todas as tarefas
      return tarefas.find(tarefa => tarefa.id === id); 
      //utilitario JS find itera sobre todas as tarefas e verifica
      // se o id da tarefa é igual ao id que estou buscando 
    }

    atualizar(tarefa: Tarefa): void { // atualizar recebe uma tarefa com id
      const tarefas: Tarefa[] = this.listarTodos();// verifica as tarefas do localstorage verificar se o id é o mesmo
      tarefas.forEach((obj, index, objs) => { //verifica 3 parametros obj a tarefa em sí. index posição
        // objs que é a lista mesmo da tarefas
        if (tarefa.id === obj.id) { // encontrei a tarefa que estou 
          objs[index] = tarefa; //atribuo minha nova tarefa na posição existente
        }
      });
      localStorage['tarefas'] = JSON.stringify(tarefas);   // gravo novamente no localstorage
    }

    remover(id: number): void {
      let tarefas: Tarefa[] = this.listarTodos();
      tarefas = tarefas.filter(tarefa => tarefa.id !== id); //filter variação do find, forEach
      //filtrar e mostrar todas as tarefas !== diferente do id que quero remover
      localStorage['tarefas'] = JSON.stringify(tarefas); // atribui a listagem atualizada, stringify converte o objeto em string
    }

    alterarStatus(id: number): void {
      const tarefas: Tarefa[] = this.listarTodos(); //obtem as tarefas
      tarefas.forEach((obj, index, objs) => { //encontra o objeto
        if (id === obj.id) { //encontra o objeto
          objs[index].concluida = !obj.concluida; // objs objeto na posição(index) que quer atualizar .concluido 
          // passou no construtor a propriedade concluida (public) booleano, ! diferente de obj concluido
        }
      });
      localStorage['tarefas'] = JSON.stringify(tarefas); //grava no localStorage
    }

}
