import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class ProyectosComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) { }

  proyectos = [
    {
      nombre: 'Gestor de tareas Full Stack',
      descripcion: 'Aplicación de gestión de proyectos y tareas desarrollada con Arquitectura Hexagonal y principios de Domain-Driven Design (DDD). Incluye seguridad, sesiones independientes, persistencia de datos, pruebas automatizadas y despliegue en la nube.',
      tipo: 'Fullstack',
      tags: ['Java 21', 'Spring Boot', 'Spring Security', 'React', 'Bootstrap', 'PostgreSQL', 'Docker', 'Flyway', 'JUnit y Mockito'],
      caracteristicas: ['Arquitectura Hexagonal y DDD', 'API REST', 'Aislamiento de sesiones y control de acceso', 'Pruebas unitarias y de integración', 'Documentación técnica', 'Despliegue en Render, Vercel y Neon'],
      demo: 'https://gestion-tareas-fullstack.vercel.app/',
      icono: 'bi-layout-split',
      color: 'blue',
      github: 'https://github.com/AirooSs/gestion-tareas-fullstack',
      imgs: [
        { src: '/gestion_tareas_fullstack/project-dashboard.png', alt: 'Panel de proyectos y tareas' },
        { src: '/gestion_tareas_fullstack/project-creation.png', alt: 'Creación de un proyecto' },
        { src: '/gestion_tareas_fullstack/project-delete-confirmation.png', alt: 'Confirmación de eliminación de un proyecto' }
      ]
    },
    {
      nombre: 'Training Microservices',
      descripcion: 'Arquitectura de microservicios con dos servicios independientes (usuarios y entrenamientos) que se comunican entre sí por HTTP con RestClient. Contenerizado con Docker.',
      tipo: 'Backend',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Microservicios'],
      icono: 'bi-diagram-2',
      color: 'blue',
      github: 'https://github.com/AirooSs/training-microservices',
      imgs: [
        { src: '/training-microservices/mermaid.PNG', alt: 'Diagrama de arquitectura' },
        { src: '/training-microservices/dockerps.PNG', alt: 'Contenedores Docker' },
        { src: '/training-microservices/post_usuarios.PNG', alt: 'Endpoint usuarios' },
        { src: '/training-microservices/post_entrenamientos.PNG', alt: 'Endpoint entrenamientos' }
      ]
    },
    {
      nombre: 'Gestión de Tareas — API Hexagonal',
      descripcion: 'API REST con Arquitectura Hexagonal y DDD. Tests con JUnit y Mockito, documentación con Swagger.',
      tipo: 'Backend',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JUnit', 'Mockito', 'Swagger'],
      icono: 'bi-diagram-3',
      color: 'blue',
      github: 'https://github.com/AirooSs/Gestion-tareas-hexagonal',
      imgs: [
        { src: '/Hexagonal/Arquitectura.PNG', alt: 'Arquitectura' },
        { src: '/Hexagonal/estructura.PNG', alt: 'Estructura' },
        { src: '/Hexagonal/repo.PNG', alt: 'Repositorio' },
        { src: '/Hexagonal/swagger.PNG', alt: 'Swagger' }
      ]
    },
    {
      nombre: 'Reto Transversal UNIR',
      descripcion: 'Plataforma fullstack de reservas para conciertos. Angular en frontend, Spring Boot + MySQL en backend.',
      tipo: 'Fullstack',
      tags: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'TypeScript'],
      icono: 'bi-music-note-beamed',
      color: 'green',
      github: 'https://github.com/AirooSs/Reto_Transversal_UNIR',
      imgs: [
        { src: '/RETO/portada.png', alt: 'Portada' },
        { src: '/RETO/artistas.png', alt: 'Artistas' },
        { src: '/RETO/destacados.png', alt: 'Destacados' },
        { src: '/RETO/venta_de_entradas.png', alt: 'Venta de entradas' },
        { src: '/RETO/inicio_de_sesion.png', alt: 'Inicio de sesión' }
      ]
    },
    {
      nombre: 'TFC — Tienda de Ropa Online',
      descripcion: 'E-commerce con Angular en frontend y Spring Boot + MySQL en backend. Carrito, favoritos y gestión con Swagger.',
      tipo: 'Fullstack',
      tags: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'Bootstrap'],
      icono: 'bi-bag',
      color: 'green',
      github: 'https://github.com/AirooSs/TFC-Tienda-de-ropa',
      imgs: [
        { src: '/TFC/Inicio.png', alt: 'Inicio' },
        { src: '/TFC/Catalogo.png', alt: 'Catálogo' },
        { src: '/TFC/favoritos_y_carrito.png', alt: 'Favoritos y carrito' },
        { src: '/TFC/Producto.png', alt: 'Producto' },
        { src: '/TFC/Carrito.png', alt: 'Carrito' }
      ]
    },
    {
      nombre: 'Mimesis Lab',
      descripcion: 'Plataforma clínica real. NestJS, Azure OpenAI (GPT y Whisper), CI/CD con GitHub Actions y conexión con el HPC de Castilla y León.',
      tipo: 'Prácticas',
      tags: ['Angular', 'NestJS', 'Node.js', 'PostgreSQL', 'Azure', 'Python'],
      icono: 'bi-building',
      color: 'purple',
      github: null,
      imgs: [] as { src: string, alt: string }[]
    }
  ];

  imagenSeleccionada: string | null = null;

  @ViewChildren('galeria') galeriaRefs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.cdr.detectChanges();
    setTimeout(() => {
      this.galeriaRefs.forEach(ref => this.activarDrag(ref.nativeElement));
    }, 100);
  }

  activarDrag(el: HTMLElement) {
    let down = false, startX = 0, scrollLeft = 0, moved = false;

    el.addEventListener('mousedown', e => {
      down = true;
      moved = false;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.classList.add('dragging');
    });

    ['mouseleave', 'mouseup'].forEach(ev =>
      el.addEventListener(ev, () => {
        down = false;
        el.classList.remove('dragging');
      })
    );

    el.addEventListener('mousemove', e => {
      if (!down) return;
      const dx = e.pageX - el.offsetLeft - startX;
      if (Math.abs(dx) > 5) moved = true;
      e.preventDefault();
      el.scrollLeft = scrollLeft - dx * 1.5;
    });

    el.addEventListener('click', e => {
      if (moved && e.detail !== 0) {
        e.stopImmediatePropagation();
        e.preventDefault();
        moved = false;
      }
    }, true);

    // El desplazamiento táctil se gestiona de forma nativa en el navegador.

  }

  @HostListener('document:keydown.escape')
  cerrarConEscape() { this.cerrar(); }

  abrir(src: string) { this.imagenSeleccionada = src; }
  cerrar() { this.imagenSeleccionada = null; }
}