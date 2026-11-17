import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements AfterViewInit {
  scrolled = false;
  menuAbierto = false;
  seccionActiva = 'inicio';
  readonly secciones = [
    { id: 'inicio', nombre: 'Sobre mí' },
    { id: 'proyectos', nombre: 'Proyectos' },
    { id: 'contacto', nombre: 'Contacto' }
  ];

  ngAfterViewInit() { this.onScroll(); }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
    const limite = 100;
    let activa = 'inicio';
    for (const seccion of this.secciones) {
      const el = document.getElementById(seccion.id);
      if (el && el.getBoundingClientRect().top <= limite) activa = seccion.id;
    }
    if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) activa = 'contacto';
    this.seccionActiva = activa;
  }

  @HostListener('window:resize')
  onResize() { if (window.innerWidth > 760) this.menuAbierto = false; }

  @HostListener('document:keydown.escape')
  cerrarMenu() { this.menuAbierto = false; }

  ir(id: string, event?: Event) {
    event?.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector('app-header header');
      const top = el.getBoundingClientRect().top + window.scrollY - (header?.getBoundingClientRect().height ?? 72);
      window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
    this.menuAbierto = false;
  }

  toggle() { this.menuAbierto = !this.menuAbierto; }
}