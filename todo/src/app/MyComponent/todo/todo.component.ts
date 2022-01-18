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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('clicked!');
    const todo = {
      id: 'id-' + new Date().getTime(), // unqiue id
      item: this.item,
      isCompleted: false,
    };
    const headers = { 'content-type': 'application/json' };

    this.http
      .post<Todos>('http://localhost:5000/todos', todo, { headers })
      .subscribe((data) => {
        console.log('posted');
      });
  }
}
