import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';
import { GetTodoComponent } from '../get-todo/get-todo.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  item!: string;

  todos: Todos[] | undefined;
  private getTodo: GetTodoComponent = new GetTodoComponent(this.http);

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  async onSubmit() {
    console.log('sub clicked!');
    const todo = {
      id: 'id-' + new Date().getTime(), // unqiue id
      item: this.item,
      isCompleted: false,
    };

    const headers = { 'content-type': 'application/json' };

    await this.http
      .post<Todos>('http://localhost:5000/todos', todo, { headers })
      .subscribe(() => {
        console.log('posted');
        this.getTodo.ngOnInit();
        window.location.reload();
      });
  }
}
