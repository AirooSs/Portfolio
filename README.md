# Portfolio — Francisco José Soria

Portfolio personal desarrollado con Angular. Single page con scroll suave entre secciones,
diseño inspirado en la estética de Apple y despliegue en producción con HTTPS.


## Stack

- Angular 21 (standalone components)
- TypeScript
- CSS con variables y JavaScript de Bootstrap
- Bootstrap Icons + Devicon

## Características

- Diseño en modo oscuro con paleta inspirada en macOS/Apple
- Navegación por scroll suave (sin cambio de rutas)
- Galerías de proyectos con arrastre mediante ratón y touch
- Visor de imágenes en modal
- Totalmente responsive (móvil, tablet, escritorio)
- Descarga directa de CV en PDF

## Estructura

```
src/app/
├── components/
│   ├── header/
│   └── footer/
├── pages/
│   ├── quien-soy/
│   ├── proyectos/
│   └── contacto/
└── app.ts
```

## Desarrollo local

Instalar dependencias:

```bash
npm install
```

Levantar servidor de desarrollo:

```bash
ng serve
```

Abrir `http://localhost:4200`.

## Build de producción

```bash
ng build
```

Los archivos compilados se generan en `dist/landing/browser`.

## Despliegue

El proyecto genera una aplicación estática en `dist/landing/browser` para su despliegue.

## Contacto

- Email: franciscosorianavarrete@gmail.com
- LinkedIn: [fran-soria-nav](https://www.linkedin.com/in/fran-soria-nav/)
- GitHub: [AirooSs](https://github.com/AirooSs)
