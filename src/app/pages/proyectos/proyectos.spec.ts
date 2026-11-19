import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosComponent } from './proyectos';

describe('ProyectosComponent', () => {
  let component: ProyectosComponent;
  let fixture: ComponentFixture<ProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('muestra la demo y las capturas del proyecto Full Stack', () => {
    fixture.detectChanges();
    const project = fixture.nativeElement.querySelector('article') as HTMLElement;
    expect(project.querySelector('h3')?.textContent).toContain('Gestor de tareas Full Stack');
    expect(project.querySelector<HTMLAnchorElement>('.demo-button')?.href).toBe('https://gestion-tareas-fullstack.vercel.app/');
    expect(project.querySelector<HTMLAnchorElement>('.repo')?.href).toBe('https://github.com/AirooSs/gestion-tareas-fullstack');
    expect(project.querySelectorAll('.shot img').length).toBe(3);
  });
});
