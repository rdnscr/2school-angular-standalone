import { importProvidersFrom } from '@angular/core';
import { TodoComponent } from './containers/todo.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const todoRoutes = [
    {
        path: '',
        providers: [
          importProvidersFrom(MatSnackBarModule)
        ],
        children: [
            { path: '', component: TodoComponent },
        ]
    },
];
