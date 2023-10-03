import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.routes').then(m => m.todoRoutes),
    data: { title: 'MVC+S Architecture' }
  }
];
