# Sistema Visual

## Personalidad Visual

La presentación debe sentirse como una app SaaS/móvil moderna:

- Limpia y técnica.
- Clara para exposición oral.
- Visual, pero no decorativa en exceso.
- Con tarjetas, diagramas y mockups de app.

## Layout

- Cada diapositiva vive dentro de `.slide`.
- Cada pantalla de scroll usa `.slide-frame`.
- El cambio de diapositiva se hace por scroll vertical con snap.
- Las diapositivas usan proporción tipo presentación en escritorio y layout fluido en móvil.

## Color

Paleta base:

- Texto principal: `#0f172a`
- Texto secundario: `#475569` y `#64748b`
- Fondo: `#eef3f7`
- Verde técnico: `#0f766e`
- Azul producto: `#2563eb`
- Cian integración: `#0891b2`
- Ámbar estado/aviso: `#f59e0b`
- Rosa cancelación/error: `#be123c`

Evita convertir la presentación en una interfaz de un solo color. El sistema actual reparte azul, verde, cian, ámbar y rosa para diferenciar estados y conceptos.

## Componentes Visuales

Componentes definidos en `src/App.jsx`:

- `Icon`: iconos SVG internos.
- `Pill`: etiquetas breves.
- `InfoTile`: tarjetas explicativas.
- `Flow`: flujos visuales.
- `PhoneMockup`: mockups de pantallas móviles.
- Diagramas específicos: arquitectura, dominio, disponibilidad, eventos, almacenamiento, migraciones y API.

## Transiciones

La diapositiva activa usa:

- Opacidad completa.
- Escala normal.
- Entrada suave del bloque de título y cuerpo.

Las transiciones deben ayudar a percibir cambio de sección, no competir con el contenido. Si se añaden animaciones nuevas, deben ser breves y previsibles.

## Responsive

Revisar estos puntos en móvil:

- Títulos largos.
- Diapositivas con diagramas de dominio o radar de permisos.
- Mockups de teléfono.
- Grids de tarjetas con muchas columnas.
- Botones flotantes superpuestos al contenido.
