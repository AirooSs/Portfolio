import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class ProyectosComponent {

  proyectos = [
    {
      nombre: 'Reto Transversal UNIR',
      descripcion: 'Aplicación fullstack de reservas para conciertos desarrollada como proyecto grupal para UNIR. Gestión de eventos, reservas y usuarios con Angular en frontend y Spring Boot + MySQL en backend.',
      tipo: 'Fullstack',
      tags: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'TypeScript'],
      icono: 'bi-music-note-beamed',
      color: 'acento',
      github: 'https://github.com/AirooSs/Reto_Transversal_UNIR',
      destacado: false
    },
    {
      nombre: 'API Gestión de Productos',
      descripcion: 'Aplicación fullstack para la gestión de un catálogo de productos. Frontend en Angular con Bootstrap consumiendo una API REST con operaciones CRUD completas y componentes reutilizables.',
      tipo: 'Fullstack',
      tags: ['Angular', 'Bootstrap', 'TypeScript', 'Node.js'],
      icono: 'bi-box-seam',
      color: 'verde',
      github: 'https://github.com/AirooSs/API-PRODUCTOS',
      destacado: false
    },
    {
  nombre: 'Mimesis Lab',
  descripcion: 'Plataforma clínica de investigación psicológica. Durante las prácticas trabajé en la integración de módulos Python con NestJS, CI/CD con GitHub Actions y la integración de Azure OpenAI (GPT y Whisper), a su vez integrado con el HPC de Castilla y León.',
  tipo: 'Prácticas fullstack',
  tags: ['Angular', 'NestJS', 'Node.js', 'PostgreSQL', 'Azure'],
  icono: 'bi-building',
  color: 'morado',
  github: null,
  destacado: false
}
  ];
}