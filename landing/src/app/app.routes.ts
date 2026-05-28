import { Routes } from '@angular/router';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy';
import { ProyectosComponent } from './pages/proyectos/proyectos';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: QuienSoyComponent
    },
    {
        path: 'proyectos',
        component: ProyectosComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    }

];