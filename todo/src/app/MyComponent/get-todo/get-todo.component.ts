import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Todos } from 'src/app/Todos';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-get-todo',
  templateUrl: './get-todo.component.html',
  styleUrls: ['./get-todo.component.css'],
})
export class GetTodoComponent implements OnInit {
  @Input()
  todo!: Todos;

  todos: Todos[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/todos').subscribe((data) => {
      this.todos = data;
      console.log('fjhvj: ', data);
    });
  }

  onClick(todo: Todos) {
    console.log('del cl');
    this.http
      .delete('http://localhost:5000/todos/' + todo.id)
      .subscribe(() => this.ngOnInit());
  }
}
