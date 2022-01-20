import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  item!: string;

  todos: Todos[] | undefined;
  //private getTodo: GetTodoComponent = new GetTodoComponent(this.http);     can't use

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    console.log('sub clicked!');
    if (this.item) {
      const todo = {
        id: 'id-' + new Date().getTime(), // unqiue id
        item: this.item,
        isCompleted: false,
      };

      const headers = { 'content-type': 'application/json' };

      this.http
        .post<Todos>('http://localhost:5000/todos', todo, { headers })
        .subscribe(() => {
          console.log('posted');
          // this.getTodo.ngOnInit();    can't use
          window.location.reload();
        });
    } else {
      alert('Todo cannot be empty!');
    }
  }
}
