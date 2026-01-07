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

## 📁 Estructura del Proyecto

> Estructura general (puede variar según evolucione el repo)

