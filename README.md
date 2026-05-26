# Presentación Web De Gipsi

Presentación profesional en español sobre **Gipsi**, una plataforma de reservas de servicios con backend Spring Boot y frontend móvil Flutter.

La presentación está construida como una app React + Vite con navegación por scroll vertical, transiciones entre diapositivas, mockups móviles, diagramas técnicos y estética SaaS/móvil.

## Uso

Instalar dependencias:

```bash
npm install
```

Levantar servidor local:

```bash
npm.cmd run dev
```

Compilar:

```bash
npm.cmd run build
```

Validar todo:

```bash
npm.cmd run check
```

En Windows se recomienda usar `npm.cmd` si PowerShell bloquea `npm.ps1`.

## Navegación De La Presentación

- Scroll con rueda o trackpad.
- Botones flotantes anterior/siguiente.
- Teclado: flechas, espacio, PageUp, PageDown, Home y End.

## Estructura

```text
.
├─ AGENTS.md
├─ docs/
│  ├─ ai/
│  │  ├─ project-context.md
│  │  └─ workflow.md
│  └─ presentation/
│     ├─ design-system.md
│     └─ slide-map.md
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ index.html
└─ package.json
```

## Archivos Principales

- `src/App.jsx`: contenido de las 20 diapositivas, componentes visuales y navegación.
- `src/App.css`: layout, estilo visual, responsive, diagramas, mockups y transiciones.
- `docs/presentation/slide-map.md`: índice funcional de diapositivas.
- `docs/presentation/design-system.md`: reglas visuales para mantener coherencia.
- `AGENTS.md`: instrucciones rápidas para futuras sesiones con IA.

## Criterios De Calidad

Antes de cerrar un cambio:

- La presentación debe seguir en español.
- No se deben inventar métricas reales.
- Las diapositivas deben mantener una idea principal clara.
- El scroll con snap y las transiciones deben seguir funcionando.
- `npm.cmd run check` debe pasar.
