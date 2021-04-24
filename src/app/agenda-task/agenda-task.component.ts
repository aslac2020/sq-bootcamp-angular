import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { Task } from '../services/models/task.model';
import { TaskService } from '../services/task.services';

@Component({
  selector: 'app-agenda-task',
  templateUrl: './agenda-task.component.html',
  styleUrls: ['./agenda-task.component.scss']
})
export class AgendaTaskComponent implements OnInit {

  date =  false;

@Input() tasks: Task[] = [];
@Input() exibirData = false;

  constructor(private taskServe: TaskService) { }

  ngOnInit(): void {
  }


  done(task: Task, event: MatCheckboxChange){
   task.done = event.checked;
    this.taskServe.alterTask(task.id, task).subscribe();
  }

  deleteTask(taskId: number | undefined){
    this.taskServe.deleteTask(taskId).subscribe();

  }

}
