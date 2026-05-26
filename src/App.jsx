import { useEffect, useMemo, useState } from 'react'
import './App.css'

const iconPaths = {
  calendar: [
    'M8 2v4',
    'M16 2v4',
    'M3 10h18',
    'M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
  ],
  phone: [
    'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z',
    'M11 18h2',
  ],
  server: [
    'M4 4h16v6H4Z',
    'M4 14h16v6H4Z',
    'M8 7h.01',
    'M8 17h.01',
  ],
  database: [
    'M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4Z',
    'M4 6v6c0 2.2 3.6 4 8 4s8-1.8 8-4V6',
    'M4 12v6c0 2.2 3.6 4 8 4s8-1.8 8-4v-6',
  ],
  shield: [
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z',
    'M9 12l2 2 4-5',
  ],
  users: [
    'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
    'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
    'M22 21v-2a4 4 0 0 0-3-3.87',
    'M16 3.13a4 4 0 0 1 0 7.75',
  ],
  clock: [
    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z',
    'M12 6v6l4 2',
  ],
  bell: [
    'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9',
    'M10 21h4',
  ],
  star: [
    'm12 2 2.9 6 6.6.9-4.8 4.7 1.2 6.6L12 16.9 6.1 20l1.2-6.6L2.5 8.9 9.1 8Z',
  ],
  image: [
    'M4 5h16v14H4Z',
    'm4 15 4-4 3 3 4-5 5 6',
    'M8 8h.01',
  ],
  migration: [
    'M4 7h12',
    'M13 4l3 3-3 3',
    'M20 17H8',
    'M11 14l-3 3 3 3',
  ],
  code: [
    'm8 9-4 3 4 3',
    'm16 9 4 3-4 3',
    'm14 5-4 14',
  ],
  search: ['M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z', 'm16 16 5 5'],
  lock: [
    'M7 10V8a5 5 0 0 1 10 0v2',
    'M5 10h14v11H5Z',
    'M12 15v2',
  ],
  mail: ['M4 5h16v14H4Z', 'm4 7 8 6 8-6'],
  upload: ['M12 16V4', 'm7 9 5-5 5 5', 'M5 20h14'],
  check: ['M20 6 9 17l-5-5'],
  x: ['M18 6 6 18', 'M6 6l12 12'],
  chart: ['M4 19V5', 'M4 19h16', 'M8 16v-5', 'M12 16V8', 'M16 16v-9'],
  settings: [
    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    'M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3.5-.2-.1a1.7 1.7 0 0 0-1.9.3l-.4.3-3.8-2.2-.1-.5a1.7 1.7 0 0 0-1.6-1.1h-.5l-3.8 2.2-.4-.3a1.7 1.7 0 0 0-1.9-.3l-.2.1-2-3.5.1-.1a1.7 1.7 0 0 0 .3-1.9l-.2-.4V8.9l.2-.4a1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3.5.2.1a1.7 1.7 0 0 0 1.9-.3l.4-.3 3.8 2.2.1.5a1.7 1.7 0 0 0 1.6 1.1h.5l3.8-2.2.4.3a1.7 1.7 0 0 0 1.9.3l.2-.1 2 3.5-.1.1a1.7 1.7 0 0 0-.3 1.9l.2.4v4.1Z',
  ],
  layers: ['M12 2 3 7l9 5 9-5Z', 'M3 12l9 5 9-5', 'M3 17l9 5 9-5'],
  spark: ['M13 2 4 14h7l-1 8 9-12h-7Z'],
}

const roles = ['CUSTOMER', 'BUSINESS', 'WORKER', 'ADMIN']

const categoryExamples = [
  'Estética',
  'Barbería',
  'Fisioterapia',
  'Nutrición',
  'Fotografía',
  'Tatuaje',
  'Pilates',
  'Clases',
  'Coaching',
]

const backendStack = [
  'Spring Boot 3.4',
  'Java 21',
  'Spring Security',
  'JWT',
  'Spring Data JPA',
  'Hibernate',
  'PostgreSQL',
  'Flyway',
  'Firebase Admin SDK',
  'Bucket4j',
  'Swagger/OpenAPI',
]

const domainEntities = [
  'Actor',
  'Customer',
  'Business',
  'Worker',
  'Category',
  'ServiceOffered',
  'Booking',
  'Schedule',
  'TimeOff',
  'Absence',
  'Review',
  'DeviceToken',
  'RefreshToken',
]

const apiModules = [
  'Auth',
  'Me',
  'Businesses',
  'Services',
  'Availability',
  'Bookings',
  'Reviews',
  'Workers',
  'Absences',
  'TimeClock',
  'Categories',
  'Files',
]

const envVars = [
  'DB_URL',
  'DB_USER',
  'DB_PASSWORD',
  'JWT_SECRET',
  'CORS_ALLOWED_ORIGINS',
  'STORAGE_TYPE',
  'FIREBASE_CREDENTIALS',
  'EMAIL provider',
]

function Icon({ name, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {(iconPaths[name] || iconPaths.spark).map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  )
}

function Pill({ children, tone = 'blue' }) {
  return <span className={`pill pill-${tone}`}>{children}</span>
}

function BulletList({ items }) {
  return (
    <ul className="clean-list">
      {items.map((item) => (
        <li key={item}>
          <span className="dot"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function InfoTile({ icon, title, text, tone = 'blue' }) {
  return (
    <article className={`info-tile tone-${tone}`}>
      <Icon name={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function MiniStat({ label, value, tone = 'blue' }) {
  return (
    <div className={`mini-stat tone-${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function Flow({ items, compact = false }) {
  return (
    <div className={`flow ${compact ? 'flow-compact' : ''}`}>
      {items.map((item, index) => (
        <div className="flow-step" key={item.title}>
          <div className={`flow-node tone-${item.tone || 'blue'}`}>
            <Icon name={item.icon || 'spark'} />
          </div>
          <div>
            <h3>{item.title}</h3>
            {item.text && <p>{item.text}</p>}
          </div>
          {index < items.length - 1 && <span className="flow-line"></span>}
        </div>
      ))}
    </div>
  )
}

function PhoneMockup({ variant = 'explore' }) {
  if (variant === 'booking') {
    return (
      <div className="phone">
        <div className="phone-top"></div>
        <div className="phone-screen">
          <div className="mobile-bar">
            <span>Gipsi</span>
            <Icon name="calendar" />
          </div>
          <div className="service-hero">
            <span>Masaje deportivo</span>
            <strong>45 min</strong>
          </div>
          <div className="slot-grid" aria-hidden="true">
            {['09:00', '09:15', '09:30', '10:00', '10:15', '11:30'].map((slot, index) => (
              <span className={index === 4 ? 'selected' : ''} key={slot}>
                {slot}
              </span>
            ))}
          </div>
          <div className="worker-row">
            <span className="avatar-dot"></span>
            <div>
              <strong>Trabajador</strong>
              <p>Disponible para la cita</p>
            </div>
          </div>
          <button className="mock-button" type="button">
            Crear reserva
          </button>
        </div>
      </div>
    )
  }

  if (variant === 'dashboard') {
    return (
      <div className="phone">
        <div className="phone-top"></div>
        <div className="phone-screen">
          <div className="mobile-bar">
            <span>Panel</span>
            <Icon name="settings" />
          </div>
          <div className="dashboard-strip">
            <MiniStat label="Hoy" value="8 citas" tone="green" />
            <MiniStat label="Pend." value="3" tone="amber" />
          </div>
          {['Confirmar reserva', 'Actualizar horario', 'Revisar ausencia'].map((item, index) => (
            <div className="task-row" key={item}>
              <span className={`task-mark mark-${index}`}></span>
              <span>{item}</span>
            </div>
          ))}
          <div className="calendar-preview">
            <span></span>
            <span className="busy"></span>
            <span></span>
            <span className="busy"></span>
            <span className="off"></span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'notifications') {
    return (
      <div className="phone">
        <div className="phone-top"></div>
        <div className="phone-screen">
          <div className="mobile-bar">
            <span>Notificaciones</span>
            <Icon name="bell" />
          </div>
          {[
            ['Nueva reserva', 'Servicio de ejemplo a las 10:15'],
            ['Ausencia aprobada', 'Viernes por la tarde'],
            ['Nueva reseña', '5 estrellas recibidas'],
          ].map(([title, text]) => (
            <div className="notification-row" key={title}>
              <Icon name="bell" />
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="phone">
      <div className="phone-top"></div>
      <div className="phone-screen">
        <div className="mobile-bar">
          <span>Explorar</span>
          <Icon name="search" />
        </div>
        <div className="search-box">
          <Icon name="search" />
          <span>Buscar servicio o negocio</span>
        </div>
        <div className="category-row">
          {['Barberia', 'Pilates', 'Tatuaje'].map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        {['Studio Norte', 'Fisio Centro', 'Aula Creativa'].map((name, index) => (
          <div className="business-card" key={name}>
            <span className={`business-image image-${index}`}></span>
            <div>
              <strong>{name}</strong>
              <p>Servicios y disponibilidad</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArchitectureDiagram() {
  return (
    <div className="architecture-diagram">
      <div className="arch-node app-node">
        <Icon name="phone" />
        <strong>Flutter App</strong>
        <span>Cliente móvil</span>
      </div>
      <div className="arch-connector"></div>
      <div className="arch-node api-node">
        <Icon name="server" />
        <strong>API REST Spring Boot</strong>
        <span>Seguridad, negocio y dominio</span>
      </div>
      <div className="arch-branches">
        <div className="arch-node data-node">
          <Icon name="database" />
          <strong>PostgreSQL + Flyway</strong>
          <span>Persistencia y migraciones</span>
        </div>
        <div className="arch-node integration-node">
          <Icon name="layers" />
          <strong>Firebase / Storage / Email</strong>
          <span>Notificaciones, archivos y correo</span>
        </div>
      </div>
    </div>
  )
}

function DomainDiagram() {
  return (
    <div className="domain-diagram">
      <div className="entity entity-actor">Actor</div>
      <div className="entity entity-customer">Customer</div>
      <div className="entity entity-business">Business</div>
      <div className="entity entity-worker">Worker</div>
      <div className="entity entity-service">ServiceOffered</div>
      <div className="entity entity-booking">Booking</div>
      <div className="entity entity-schedule">Schedule</div>
      <div className="entity entity-review">Review</div>
      <div className="entity entity-token">RefreshToken</div>
      <div className="entity entity-device">DeviceToken</div>
      <span className="rel rel-a"></span>
      <span className="rel rel-b"></span>
      <span className="rel rel-c"></span>
      <span className="rel rel-d"></span>
      <span className="rel rel-e"></span>
      <span className="rel rel-f"></span>
    </div>
  )
}

function RoleMatrix() {
  const rows = [
    ['Cliente', 'Explorar, reservar, cancelar, reseñar y guardar favoritos'],
    ['Negocio', 'Servicios, trabajadores, horarios, reservas, imágenes, ausencias y reviews'],
    ['Trabajador', 'Disponibilidad, confirmaciones, fichajes y solicitudes de ausencia'],
    ['Admin', 'Gestión de categorías del catálogo'],
  ]

  return (
    <div className="role-matrix">
      {rows.map(([role, text], index) => (
        <div className="role-row" key={role}>
          <strong>{role}</strong>
          <p>{text}</p>
          <span className={`role-badge role-${index}`}>{roles[index]}</span>
        </div>
      ))}
    </div>
  )
}

function TokenFlow() {
  return (
    <Flow
      compact
      items={[
        { title: 'Login / Register', text: 'Credenciales o alta validada', icon: 'lock', tone: 'blue' },
        { title: 'Access + refresh', text: 'JWT corto y token rotatorio', icon: 'shield', tone: 'green' },
        { title: 'Requests autenticadas', text: 'Bearer token en la API', icon: 'server', tone: 'cyan' },
        { title: 'Refresh', text: 'Renovación controlada', icon: 'migration', tone: 'amber' },
        { title: 'Logout', text: 'Invalidación de sesión', icon: 'x', tone: 'rose' },
      ]}
    />
  )
}

function AvailabilityBoard() {
  const slots = [
    ['09:00', 'Libre', 'ok'],
    ['09:15', 'Libre', 'ok'],
    ['09:30', 'Reserva', 'busy'],
    ['09:45', 'Reserva', 'busy'],
    ['10:00', 'TimeOff', 'off'],
    ['10:15', 'TimeOff', 'off'],
    ['10:30', 'Libre', 'ok'],
    ['10:45', 'Ausencia', 'absence'],
    ['11:00', 'Ausencia', 'absence'],
  ]

  return (
    <div className="availability-board">
      {slots.map(([time, label, status]) => (
        <div className={`availability-slot slot-${status}`} key={`${time}-${label}`}>
          <strong>{time}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

function ScheduleFlow() {
  return (
    <Flow
      items={[
        { title: 'Solicitud', text: 'El trabajador pide ausencia', icon: 'users', tone: 'cyan' },
        { title: 'Decision', text: 'El negocio aprueba o rechaza', icon: 'check', tone: 'green' },
        { title: 'Conflictos', text: 'El sistema revisa citas afectadas', icon: 'calendar', tone: 'amber' },
        { title: 'Disponibilidad', text: 'Los slots se recalculan', icon: 'clock', tone: 'blue' },
      ]}
    />
  )
}

function EventPipeline() {
  return (
    <Flow
      compact
      items={[
        { title: 'Evento de dominio', text: 'Booking, Review, Absence', icon: 'spark', tone: 'blue' },
        { title: 'Listener async', text: 'Procesamiento Spring', icon: 'server', tone: 'green' },
        { title: 'Firebase', text: 'Cloud Messaging', icon: 'bell', tone: 'amber' },
        { title: 'App Flutter', text: 'Push en dispositivo', icon: 'phone', tone: 'cyan' },
      ]}
    />
  )
}

function StorageFlow() {
  return (
    <div className="storage-flow">
      {[
        ['Cliente Flutter', 'Sube imagen', 'phone'],
        ['API Files', 'Valida y publica endpoint', 'server'],
        ['FileStorage', 'Abstracción intercambiable', 'layers'],
        ['Local actual', 'S3/R2 opcional', 'database'],
      ].map(([title, text, icon]) => (
        <div className="storage-node" key={title}>
          <Icon name={icon} />
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      ))}
    </div>
  )
}

function MigrationTimeline() {
  const migrations = [
    'Esquema inicial',
    'Mejoras v2',
    'Avatares',
    'Ausencias',
    'Motivos cancelación',
    'Respuesta reviews',
    'Ubicación',
    'Overtime',
    'Email verificado',
    'Categorías',
  ]

  return (
    <div className="migration-timeline">
      {migrations.map((item, index) => (
        <div className="migration-item" key={item}>
          <span>V{index + 1}</span>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  )
}

function ApiMap() {
  return (
    <div className="api-map">
      {apiModules.map((module, index) => (
        <span className={`api-module api-${index % 5}`} key={module}>
          {module}
        </span>
      ))}
    </div>
  )
}

const slides = [
  {
    eyebrow: '01 / Visión general',
    title: 'Gipsi: Plataforma de reservas para servicios',
    subtitle: 'Backend Spring Boot + Frontend Flutter',
    body: (
      <div className="cover-layout">
        <div className="hero-copy">
          <div className="brand-mark">
            <Icon name="calendar" />
            <span>Gipsi</span>
          </div>
          <p className="lead">
            Gestión de negocios, trabajadores, servicios, horarios y citas desde una app móvil.
          </p>
          <div className="pill-row">
            <Pill tone="blue">Spring Boot</Pill>
            <Pill tone="green">Flutter</Pill>
            <Pill tone="cyan">API REST</Pill>
            <Pill tone="amber">Reservas</Pill>
          </div>
        </div>
        <div className="hero-visual">
          <PhoneMockup variant="explore" />
        </div>
      </div>
    ),
  },
  {
    eyebrow: '02 / Problema',
    title: 'El reto de organizar reservas en negocios pequeños',
    body: (
      <div className="two-column">
        <div>
          <p className="lead small">
            Muchos negocios de servicios combinan agendas manuales, mensajes sueltos y herramientas
            separadas para atender clientes y coordinar equipos.
          </p>
          <BulletList
            items={[
              'Reservas, cancelaciones y cambios dispersos en varios canales.',
              'Horarios, ausencias y disponibilidad difíciles de mantener sincronizados.',
              'Servicios, categorías, trabajadores, imágenes y clientes sin una vista central.',
              'Reseñas y reputación desconectadas del historial real de citas.',
            ]}
          />
        </div>
        <div className="problem-map">
          {[
            ['Clientes', 'Reservan y cancelan', 'users'],
            ['Agenda', 'Horarios y huecos', 'calendar'],
            ['Equipo', 'Trabajadores y ausencias', 'clock'],
            ['Reputación', 'Reviews y respuestas', 'star'],
            ['Catálogo', 'Servicios y categorías', 'layers'],
          ].map(([title, text, icon]) => (
            <InfoTile key={title} icon={icon} title={title} text={text} tone="neutral" />
          ))}
        </div>
      </div>
    ),
  },
  {
    eyebrow: '03 / Propuesta',
    title: 'Una app móvil conectada a una API REST',
    body: (
      <div className="solution-layout">
        <PhoneMockup variant="booking" />
        <div className="solution-copy">
          <p className="lead small">
            Gipsi centraliza la experiencia del cliente y la operativa interna del negocio con una
            API preparada para autenticación, disponibilidad y gestión de reservas.
          </p>
          <div className="feature-grid">
            <InfoTile icon="search" title="Explorar" text="Negocios, categorías, ciudad y servicios." tone="blue" />
            <InfoTile icon="calendar" title="Reservar" text="Disponibilidad por servicio, trabajador y horario." tone="green" />
            <InfoTile icon="settings" title="Administrar" text="Servicios, equipo, ausencias, imágenes y reviews." tone="amber" />
          </div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: '04 / Arquitectura',
    title: 'Arquitectura general del sistema',
    body: (
      <div className="architecture-layout">
        <ArchitectureDiagram />
        <div className="role-strip">
          {roles.map((role, index) => (
            <Pill key={role} tone={['blue', 'green', 'cyan', 'amber'][index]}>
              {role}
            </Pill>
          ))}
        </div>
      </div>
    ),
  },
  {
    eyebrow: '05 / Stack tecnológico',
    title: 'Tecnologías principales del backend y cliente móvil',
    body: (
      <div className="stack-layout">
        <div className="stack-panel">
          <div className="panel-title">
            <Icon name="server" />
            <h3>Backend</h3>
          </div>
          <div className="tech-cloud">
            {backendStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="flutter-panel">
          <Icon name="phone" />
          <h3>Frontend Flutter</h3>
          <p>
            Cliente móvil multiplataforma conectado a la API REST, pensado para cliente, negocio y
            trabajador.
          </p>
          <div className="mini-phone-row">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: '06 / Dominio',
    title: 'Modelo de dominio principal',
    body: (
      <div className="domain-layout">
        <DomainDiagram />
        <div>
          <p className="lead small">
            El modelo separa identidad, negocio, agenda, reservas, reputación, notificaciones y
            sesiones para mantener reglas claras.
          </p>
          <div className="entity-cloud">
            {domainEntities.map((entity) => (
              <span key={entity}>{entity}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: '07 / Roles',
    title: 'Roles y permisos',
    body: (
      <div className="roles-layout">
        <RoleMatrix />
        <div className="permission-radar">
          {['Explorar', 'Reservar', 'Gestionar', 'Confirmar', 'Fichar', 'Categorías'].map((item, index) => (
            <span className={`radar-item radar-${index}`} key={item}>
              {item}
            </span>
          ))}
          <div className="radar-center">
            <Icon name="shield" />
            <strong>Permisos por rol</strong>
          </div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: '08 / Seguridad',
    title: 'Autenticacion y seguridad',
    body: (
      <div className="security-layout">
        <TokenFlow />
        <div className="security-grid">
          <InfoTile icon="lock" title="BCrypt" text="Hash de contraseñas antes de persistir." tone="blue" />
          <InfoTile icon="shield" title="JWT" text="Access tokens para peticiones autenticadas." tone="green" />
          <InfoTile icon="migration" title="Refresh rotation" text="Rotación de refresh tokens por sesión." tone="cyan" />
          <InfoTile icon="settings" title="CORS configurable" text="Origenes permitidos por entorno." tone="amber" />
          <InfoTile icon="clock" title="Rate limiting" text="Protección en login y registro con Bucket4j." tone="rose" />
          <InfoTile icon="mail" title="Verificación email" text="Flujo de confirmación de cuenta." tone="neutral" />
        </div>
      </div>
    ),
  },
  {
    eyebrow: '09 / Catalogo',
    title: 'Negocios, servicios y categorías',
    body: (
      <div className="catalog-layout">
        <PhoneMockup variant="explore" />
        <div className="catalog-copy">
          <p className="lead small">
            La búsqueda combina texto, ciudad y categoría para descubrir negocios y servicios con
            imágenes de perfil, portada y catálogo dinámico.
          </p>
          <div className="category-cloud">
            {categoryExamples.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <BulletList
            items={[
              'Categorías dinámicas administrables.',
              'Imagenes de negocio, portada y servicios.',
              'Sectores variados: salud, belleza, clases y servicios creativos.',
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    eyebrow: '10 / Disponibilidad',
    title: 'Reservas y disponibilidad',
    body: (
      <div className="availability-layout">
        <div>
          <p className="lead small">
            El núcleo calcula slots de 15 minutos usando duración del servicio, horario laboral,
            trabajador asignado, negocio autónomo, TimeOff y ausencias aprobadas.
          </p>
          <BulletList
            items={[
              'Validación de solapes antes de crear o confirmar una cita.',
              'Estados de reserva: PENDING, CONFIRMED y CANCELED.',
              'Razón de indisponibilidad por slot para explicar bloqueos.',
            ]}
          />
          <Flow
            compact
            items={[
              { title: 'Servicio', icon: 'layers', tone: 'blue' },
              { title: 'Disponibilidad', icon: 'clock', tone: 'green' },
              { title: 'Hora / trabajador', icon: 'users', tone: 'cyan' },
              { title: 'Reserva', icon: 'calendar', tone: 'amber' },
            ]}
          />
        </div>
        <AvailabilityBoard />
      </div>
    ),
  },
  {
    eyebrow: '11 / Operaciones',
    title: 'Gestión de reservas',
    body: (
      <div className="booking-management-layout">
        <div className="operation-board">
          {[
            ['Crear reserva', 'Cliente, servicio, trabajador y hora'],
            ['Confirmar', 'Validacion final de disponibilidad'],
            ['Cancelar con motivo', 'Trazabilidad de la causa'],
            ['Consultar', 'Por cliente, trabajador o negocio'],
            ['Reasignar trabajador', 'Cambio controlado de agenda'],
            ['Buscar disponibles', 'Trabajadores aptos para una cita'],
          ].map(([title, text], index) => (
            <div className={`operation-card op-${index}`} key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="status-lane">
          <span className="status pending">PENDING</span>
          <span className="status confirmed">CONFIRMED</span>
          <span className="status canceled">CANCELED</span>
        </div>
      </div>
    ),
  },
  {
    eyebrow: '12 / Agenda interna',
    title: 'Ausencias, horarios y fichajes',
    body: (
      <div className="schedule-layout">
        <ScheduleFlow />
        <div className="schedule-concepts">
          {[
            ['Schedule', 'Horario laboral base'],
            ['TimeOff', 'Bloqueos planificados'],
            ['Absence', 'Solicitud aprobable'],
            ['TimeClock', 'Entrada, salida y turno'],
          ].map(([title, text]) => (
            <InfoTile key={title} icon="clock" title={title} text={text} tone="blue" />
          ))}
        </div>
        <p className="support-text">
          Los fichajes de entrada y salida permiten registrar presencia, y los recordatorios ayudan a
          anticipar el inicio de turno.
        </p>
      </div>
    ),
  },
  {
    eyebrow: '13 / Push',
    title: 'Notificaciones push',
    body: (
      <div className="notifications-layout">
        <div>
          <EventPipeline />
          <div className="event-cloud">
            {[
              'Nueva reserva',
              'Reserva confirmada',
              'Cancelacion',
              'Recordatorio cita',
              'Nueva reseña',
              'Solicitud ausencia',
              'Ausencia aprobada',
              'Ausencia rechazada',
              'Fichajes',
            ].map((event) => (
              <span key={event}>{event}</span>
            ))}
          </div>
        </div>
        <PhoneMockup variant="notifications" />
      </div>
    ),
  },
  {
    eyebrow: '14 / Reputacion',
    title: 'Reviews y reputación',
    body: (
      <div className="reviews-layout">
        <div className="review-panel">
          <div className="stars" aria-hidden="true">
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
          </div>
          <strong>Reserva finalizada</strong>
          <p>Ejemplo ficticio de reseña vinculada a una cita confirmada.</p>
          <div className="owner-reply">Respuesta del negocio visible junto a la review.</div>
        </div>
        <div>
          <BulletList
            items={[
              'Valoracion de 1 a 5 estrellas solo en reservas confirmadas y finalizadas.',
              'Una reseña por reserva para evitar duplicados.',
              'Solo el cliente dueño puede editar o borrar su reseña.',
              'El negocio puede responder y contextualizar el feedback.',
              'Agregados de media y cantidad en negocios y servicios.',
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    eyebrow: '15 / Archivos',
    title: 'Imagenes y almacenamiento',
    body: (
      <div className="storage-layout">
        <StorageFlow />
        <div className="image-use-grid">
          {['Perfil negocio', 'Portada', 'Servicios', 'Clientes', 'Trabajadores'].map((item, index) => (
            <div className={`image-use image-use-${index}`} key={item}>
              <Icon name="image" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="support-text">
          La abstraccion FileStorage permite usar almacenamiento local hoy y migrar a S3/R2 sin romper
          la API publica. Los archivos se sirven por endpoint publico con cache.
        </p>
      </div>
    ),
  },
  {
    eyebrow: '16 / Persistencia',
    title: 'Base de datos y migraciones',
    body: (
      <div className="migrations-layout">
        <div>
          <p className="lead small">
            PostgreSQL aporta consistencia relacional y Flyway documenta la evolucion incremental del
            esquema por migraciones versionadas.
          </p>
          <div className="safe-evolution">
            <Icon name="database" />
            <span>cambio pequeno</span>
            <span>revisión</span>
            <span>migración</span>
            <span>despliegue seguro</span>
          </div>
        </div>
        <MigrationTimeline />
      </div>
    ),
  },
  {
    eyebrow: '17 / Cliente móvil',
    title: 'Frontend Flutter',
    body: (
      <div className="flutter-layout">
        <div className="phone-cluster">
          <PhoneMockup variant="explore" />
          <PhoneMockup variant="dashboard" />
        </div>
        <div className="screen-grid">
          {[
            'Explorar negocios',
            'Filtros por categoria',
            'Detalle de negocio',
            'Detalle de servicio',
            'Selector de disponibilidad',
            'Reservas del usuario',
            'Panel negocio/trabajador',
            'Perfil',
            'Notificaciones',
            'Favoritos',
          ].map((screen) => (
            <span key={screen}>{screen}</span>
          ))}
        </div>
        <p className="support-text">
          Los tokens se guardan en almacenamiento seguro y el cliente puede ejecutar refresh automático
          cuando recibe una respuesta 401.
        </p>
      </div>
    ),
  },
  {
    eyebrow: '18 / API',
    title: 'API y documentacion',
    body: (
      <div className="api-layout">
        <ApiMap />
        <div className="swagger-panel">
          <div className="swagger-header">
            <Icon name="code" />
            <strong>Swagger / OpenAPI</strong>
          </div>
          <p>
            Documentación interactiva para probar endpoints, revisar contratos y facilitar la integración
            con Flutter.
          </p>
          <div className="endpoint-list">
            <span>GET /businesses</span>
            <span>POST /bookings</span>
            <span>GET /availability</span>
            <span>POST /auth/refresh</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: '19 / Producción',
    title: 'Preparación para producción',
    body: (
      <div className="production-layout">
        <div className="env-grid">
          {envVars.map((variable) => (
            <code key={variable}>{variable}</code>
          ))}
        </div>
        <div className="ops-grid">
          <InfoTile icon="check" title="Health checks" text="Estado de aplicacion y dependencias." tone="green" />
          <InfoTile icon="database" title="Hikari" text="Pool de conexiones configurado." tone="blue" />
          <InfoTile icon="server" title="Tomcat" text="Ajustes de servidor embebido." tone="cyan" />
          <InfoTile icon="settings" title="Perfiles" text="Separacion dev y prod." tone="amber" />
          <InfoTile icon="clock" title="Jobs programados" text="Tareas periódicas y recordatorios." tone="rose" />
        </div>
      </div>
    ),
  },
  {
    eyebrow: '20 / Cierre',
    title: 'Conclusión y próximos pasos',
    body: (
      <div className="conclusion-layout">
        <div>
          <p className="lead">
            Gipsi centraliza reservas, disponibilidad, trabajadores, clientes, reseñas y notificaciones
            en una app moderna.
          </p>
          <div className="next-steps">
            {[
              'Más tests unitarios e integración con Testcontainers',
              'Migracion opcional a S3/R2',
              'Dashboard admin de estadísticas',
              'Pulido de experiencia Flutter',
            ].map((step) => (
              <div className="next-step" key={step}>
                <Icon name="check" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="closing-card">
          <Icon name="spark" />
          <p>Una base sólida para digitalizar la gestión diaria de negocios de servicios</p>
        </div>
      </div>
    ),
  },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slide = useMemo(() => slides[currentSlide], [currentSlide])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault()
        setCurrentSlide((current) => Math.min(current + 1, slides.length - 1))
      }

      if (['ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault()
        setCurrentSlide((current) => Math.max(current - 1, 0))
      }

      if (event.key === 'Home') {
        setCurrentSlide(0)
      }

      if (event.key === 'End') {
        setCurrentSlide(slides.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main className="presentation-shell">
      <section className="slide" aria-labelledby="slide-title">
        <header className="slide-header">
          <span>{slide.eyebrow}</span>
          <span>Gipsi</span>
        </header>
        <div className="slide-content">
          <div className="title-block">
            <h1 id="slide-title">{slide.title}</h1>
            {slide.subtitle && <p>{slide.subtitle}</p>}
          </div>
          {slide.body}
        </div>
        <footer className="slide-footer">
          <div className="progress-track">
            <span style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></span>
          </div>
          <strong>
            {String(currentSlide + 1).padStart(2, '0')} / {slides.length}
          </strong>
        </footer>
      </section>

      <nav className="deck-controls" aria-label="Navegacion de diapositivas">
        <button
          type="button"
          onClick={() => setCurrentSlide((current) => Math.max(current - 1, 0))}
          disabled={currentSlide === 0}
          aria-label="Diapositiva anterior"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={() => setCurrentSlide((current) => Math.min(current + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
          aria-label="Diapositiva siguiente"
        >
          <span aria-hidden="true">›</span>
        </button>
      </nav>
    </main>
  )
}

export default App
