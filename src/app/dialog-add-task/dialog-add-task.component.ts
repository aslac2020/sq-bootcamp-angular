import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.services';
import { Task } from '../services/models/task.model';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {

titulo: string = '';
notas: string = '';
meLembrarEm: Date = new Date();

  constructor(private taskService: TaskService) { }


  ngOnInit(): void {}

  addTask(){
    const tarefa = new Task(this.titulo, this.notas, this.meLembrarEm );
    this.taskService.createTask(tarefa).subscribe();
  }

}
