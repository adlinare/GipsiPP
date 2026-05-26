# Contexto Del Proyecto

## Qué Es

Esta aplicación es una presentación web de 20 diapositivas sobre Gipsi, una plataforma de reservas de servicios con backend Spring Boot y frontend móvil Flutter.

La presentación no es la aplicación Gipsi real. Es un recurso visual para exponer el proyecto: visión, arquitectura, dominio, seguridad, reservas, notificaciones, almacenamiento, producción y próximos pasos.

## Objetivo De La Presentación

- Explicar el problema de gestión de reservas en negocios pequeños.
- Presentar la solución como app móvil conectada a API REST.
- Mostrar decisiones técnicas sin caer en detalle excesivo.
- Servir para demo académica o defensa de proyecto.

## Restricciones De Contenido

- No inventar métricas reales.
- No afirmar usuarios, ingresos o adopción real.
- Usar ejemplos ficticios solo cuando ayuden a explicar la interfaz.
- Mantener el contenido en español.
- Usar términos técnicos reconocibles: Spring Boot, Flutter, PostgreSQL, Flyway, JWT, Firebase, OpenAPI.

## Estructura Actual

- `src/App.jsx`: datos de diapositivas, componentes visuales, navegación y sincronización de slide activa.
- `src/App.css`: layout, sistema visual, mockups, diagramas, responsive y transiciones.
- `src/index.css`: reset global mínimo.
- `docs/presentation/slide-map.md`: inventario de las 20 diapositivas.
- `docs/presentation/design-system.md`: reglas visuales para mantener coherencia.

## Navegación

La deck renderiza todas las diapositivas en vertical. El contenedor principal usa:

- `scroll-snap-type: y mandatory`
- `scroll-behavior: smooth`
- `IntersectionObserver` para detectar la diapositiva activa

Los botones y teclas no cambian una diapositiva en memoria: hacen scroll a la sección correspondiente.

## Riesgos De Cambios

- `src/App.jsx` es grande. Cambios extensos pueden romper JSX fácilmente.
- Las diapositivas densas dependen de grids CSS específicos.
- Los mockups de teléfono tienen tamaños fijos con adaptaciones responsive.
- La presentación usa texto real visible; revisar acentos y ortografía antes de cerrar.
