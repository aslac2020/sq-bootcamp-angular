import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.services';
import { Task } from '../services/models/task.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
    tarefasParaHoje: Task[] = [];
    tarefasParaAmanha: Task[] = [];
    tarefasParaOsProximoDias: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {

  this.taskService.onUpdateTasks()
  .subscribe(
    () => {
      this.init();
    }

  );

  this.init();

  }

  private init(){
    this.listTasksForToday();
    this.listTasksForTomorrow();
    this.listUpcomingTasks();
  }

  private listTasksForToday(){
    this.taskService.
    listTasksForToday()
    .subscribe(
  (tarefas: Task[]) =>
  {
    this.tarefasParaHoje = tarefas;
  }
  );
  }

   listTasksForTomorrow(){
    this.taskService.
    listTasksForTomorrow()
    .subscribe(
  (tarefas: Task[]) =>
  {
    this.tarefasParaAmanha = tarefas;
  }
  );
  }

   listUpcomingTasks(){
    this.taskService.
    listUpcomingTasks()
    .subscribe(
  (tarefas: Task[]) =>
  {
    this.tarefasParaOsProximoDias = tarefas;
  }
  );
  }

}
