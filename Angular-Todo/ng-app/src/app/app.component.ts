
import { TodosComponent } from './todos/todos.component';
import { Component, Directive } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoService]

})
export class AppComponent {
  title = 'My first angular application....!';
}
