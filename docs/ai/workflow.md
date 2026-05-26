# Workflow Recomendado Para Cambios

## 1. Entender El Cambio

Antes de editar, identifica si la petición afecta a:

- Contenido de una o varias diapositivas.
- Navegación o transiciones.
- Diseño visual general.
- Responsive móvil.
- Documentación o comandos del proyecto.

## 2. Editar Con Alcance Claro

Para cambios pequeños:

- Edita `slides` o componentes concretos en `src/App.jsx`.
- Ajusta solo las clases relacionadas en `src/App.css`.

Para cambios grandes:

- Considera extraer componentes a `src/components`.
- Considera extraer datos a `src/data`.
- Actualiza `docs/presentation/slide-map.md` si cambia el contenido de las diapositivas.

## 3. Revisión Visual

Comprueba especialmente:

- Que no se corten títulos largos.
- Que las tarjetas no se solapen.
- Que los mockups de móvil no dominen demasiado la diapositiva.
- Que la diapositiva activa se vea completa tras hacer scroll.
- Que las transiciones no dificulten la lectura.

## 4. Validación Técnica

Ejecuta:

```bash
npm.cmd run check
```

Si `npm` falla en PowerShell por política de ejecución, usa siempre `npm.cmd`.

## 5. Servidor Local

Para desarrollo:

```bash
npm.cmd run dev
```

Para exponerlo en red local:

```bash
npm.cmd run dev:host
```

## Criterios De Cierre

- `npm.cmd run check` pasa.
- La presentación abre en Vite sin errores.
- El cambio pedido se ve en la diapositiva correcta.
- La navegación por scroll, botones y teclado sigue funcionando.
