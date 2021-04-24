import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AgendaComponent } from './agenda/agenda.component';

import { AppComponent } from './app.component';
import { AgendaTaskComponent } from './agenda-task/agenda-task.component';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import {FormsModule} from '@angular/forms';
import { TaskService } from './services/task.services';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';



@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    AgendaTaskComponent,
    DialogAddTaskComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CoreModule,
    MatCheckboxModule,
    MatMenuModule

  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-br'}, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
