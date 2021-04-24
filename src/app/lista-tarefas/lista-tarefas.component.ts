import { Component, OnInit } from '@angular/core';
import { Task } from '../services/models/task.model';
import { TaskService } from '../services/task.services';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss']
})
export class ListaTarefasComponent implements OnInit {

  listarTodasTarefas: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.onUpdateTasks().subscribe(() =>{
    this.listAllTask();
    });

    this.listAllTask();
  }

  listAllTask(){
    this.taskService.listAllTask()
    .subscribe((response) => (this.listarTodasTarefas = response));
  }


}
