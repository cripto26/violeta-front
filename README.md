# VIOLETA 🌸 (PWA Offline-First)

**VIOLETA** es un sistema **POS / Ventas e Inventario** desarrollado como **PWA con Next.js**, pensado para negocios que necesitan **registrar ventas incluso sin internet**, y sincronizar cuando la conexión vuelve.

El proyecto sigue una arquitectura **mobile-first** y una organización de componentes basada en **Atomic Design** (Atoms → Molecules → Organisms → Templates).

---

## ✨ Características (MVP)

- **PWA instalable** (“Agregar a pantalla de inicio”)
- **Offline-first**
  - Funciona sin conexión
  - Guarda acciones pendientes localmente (IndexedDB)
  - Sincroniza automáticamente al recuperar conexión
- **Módulo de Ventas (POS)**
  - Registro de ventas
  - Cola offline con reintentos
- **Mi cuenta / navegación básica**
- **Estructura Atomic Design** para UI

---

## 🧱 Stack Tecnológico

- **Next.js (App Router) + TypeScript**
- **TailwindCSS**
- **next-pwa** (Service Worker + caché)
- **Dexie.js / IndexedDB** (cola offline)
- **ESLint** (config moderna)

---


## 🚀 Requisitos

- **Node.js 18+** (recomendado 20+)
- **Yarn** (o npm/pnpm)

---

## ▶️ Ejecutar en Desarrollo

Instalar dependencias:

yarn

Levantar servidor:

yarn dev

Abrir:

- http://localhost:3000

---

## 🏗️ Build de Producción

yarn build
yarn start

---

## 📲 PWA (Instalación y Offline)

### Instalación
En móvil (Chrome/Edge):
- Menú del navegador → **“Agregar a pantalla de inicio”**

En escritorio (Chrome):
- Ícono de instalación en la barra de direcciones → **Instalar**

### Modo offline
- La app se cachea mediante **Service Worker** (next-pwa).
- Las operaciones críticas (como ventas) se almacenan en **IndexedDB** y quedan en cola para sincronización.

---

## 🔁 Sincronización Offline (Cola)

La app usa una cola local para acciones pendientes:
- Guarda cada acción con un `idempotencyKey`
- Intenta enviarla a la API cuando:
  - Vuelve la conexión
  - Se ejecuta un “sync” manual/automático

> Nota: asegúrate de tener implementada la ruta API correspondiente (por ejemplo `/api/ventas`) para recibir las ventas.

---

## ✅ Scripts Útiles

yarn dev       # desarrollo
yarn build     # build producción
yarn start     # correr producción
yarn lint      # lint

---

## 🧪 Recomendaciones de Calidad

- Mantener imports consistentes con el **case** del archivo (Linux es sensible a mayúsculas/minúsculas).
- Validar que existan los archivos PWA:
  - public/manifest.json
  - public/icons/*
- Evitar duplicar componentes (ej. revisar que `Logo` sea `Logo` y no copie otro componente).

---

## 🗺️ Roadmap (Fases)

### Fase 1 — MVP
- POS (ventas)
- Inventario básico
- Caja básica
- Offline queue + sync
- Reportes esenciales

### Fase 2 — Escalamiento
- Multi-tienda / multi-usuarios
- Roles (ADMIN / OWNER / EMPLOYEE)
- Reportes avanzados
- Exportación/backup
- Mejoras de UX para operación en tienda

---

## 🤝 Contribución

1. Crea una rama: feature/nombre-feature
2. Commits claros y pequeños
3. Pull Request con descripción (qué / por qué / cómo probar)

---

## 📄 Licencia

Por definir (MIT / Propietaria / etc.).

---

## 📬 Contacto

Proyecto desarrollado por el equipo de **VIOLETA**.
