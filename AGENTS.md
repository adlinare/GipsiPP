# Guía Para Agentes IA

Este proyecto es una presentación web profesional sobre Gipsi, construida con React y Vite. La prioridad para cualquier agente IA es conservar una experiencia de exposición fluida, visual y clara.

## Contexto Rápido

- Producto presentado: Gipsi, plataforma de reservas de servicios.
- Público: exposición académica o demo técnica.
- Idioma visible: español.
- Stack de la presentación: React, Vite, CSS propio.
- Navegación actual: scroll vertical con `scroll-snap`, botones flotantes y teclado.
- Archivos principales: `src/App.jsx`, `src/App.css`, `src/index.css`.

## Reglas de Trabajo

- Ejecuta `npm.cmd run check` antes de cerrar cambios cuando sea posible.
- Mantén las diapositivas concisas: una idea principal por diapositiva.
- No inventes métricas reales, usuarios reales ni resultados de negocio.
- Si hacen falta ejemplos, márcalos como ficticios o usa lenguaje neutro.
- Respeta el estilo SaaS/móvil: limpio, técnico, visual y profesional.
- Evita añadir dependencias si el efecto puede resolverse con React y CSS.
- No sustituyas el scroll vertical por un carrusel salvo petición explícita.

## Dónde Mirar

- Contexto del producto y decisiones: `docs/ai/project-context.md`.
- Flujo recomendado de edición: `docs/ai/workflow.md`.
- Mapa de diapositivas: `docs/presentation/slide-map.md`.
- Sistema visual: `docs/presentation/design-system.md`.

## Validación Mínima

```bash
npm.cmd run check
```

Si se cambia navegación, layout responsive o transiciones, prueba manualmente:

- Scroll con rueda o trackpad.
- Flechas, espacio, Home y End.
- Vista móvil estrecha.
- Diapositivas con mockups y diagramas densos.
