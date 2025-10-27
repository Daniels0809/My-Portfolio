# 🚀 Portafolio Personal con Next.js (App Router)

Este proyecto es un **portafolio personal** desarrollado con **Next.js (App Router)** que incluye navegación dinámica, presentación de proyectos, y un formulario de contacto con persistencia en base de datos MongoDB.

---

## 🧠 Descripción General

El objetivo del proyecto es mostrar mis trabajos, habilidades y permitir que los visitantes me contacten mediante un formulario funcional que guarda los mensajes en una base de datos.  
Se desarrolló siguiendo una metodología basada en **Historias de Usuario (HU)** y **criterios de aceptación claros**.

---

## 🗂️ Estructura del Proyecto

```
/app
 ├── layout.tsx            # Layout principal (estructura base y navegación)
 ├── page.tsx              # Página principal (Home)
 ├── projects/             # Sección de proyectos
 │   ├── page.tsx          # Lista de proyectos
 │   └── [slug]/page.tsx   # Ruta dinámica de detalle del proyecto
 ├── contact/page.tsx      # Página de contacto (formulario)
/components
 ├── TrayectCard.tsx       # Componente de tarjeta para proyectos
 ├── Navbar.tsx            # Barra de navegación
/models
 ├── contactModel.ts       # Modelo Mongoose para mensajes
/utils
 ├── dbConnection.ts       # Conexión con MongoDB
```

---

## 💡 Historias de Usuario y Tareas

### **HU: Portafolio personal con Next.js (App Router)**  
> *Como coder que construye su marca personal, quiero crear un portafolio en Next.js (App Router) con rutas/páginas organizadas y un formulario de “Contáctame” que guarde los mensajes en una base de datos para presentar mi trabajo y captar oportunidades de forma profesional.*

---

### 🧩 **TASK 1: Estructura del proyecto y layout base**

**Objetivo:** Crear el proyecto Next.js, configurar `app/layout.tsx` y el Header/Nav común.

**Criterios de Aceptación:**
- ✅ Proyecto Next creado y corriendo con `npm run dev`
- ✅ `layout.tsx` define estructura base (html, body, menú)
- ✅ Estilos modulares o globales organizados

**Story Points:** 1

---

### 📁 **TASK 2: Rutas y navegación (incluye ruta dinámica)**

**Objetivo:** Implementar Home, Projects (lista), Contact (formulario) y la ruta dinámica `/projects/[slug]`.

**Criterios de Aceptación:**
- ✅ `/home`, `/projects`, `/contact` creadas
- ✅ Navegación funcional entre páginas
- ✅ `/projects/[slug]` muestra detalles de un proyecto

**Story Points:** 2

---

### 📨 **TASK 3: Formulario de “Contáctame” + validaciones**

**Objetivo:** Construir formulario con validaciones tanto del lado cliente como servidor.

**Criterios de Aceptación:**
- ✅ Campos obligatorios: fullName, email, message
- ✅ Validación con mensajes de error
- ✅ Estado de envío y feedback visual (éxito o error)

**Story Points:** 2

---

### 🗄️ **TASK 4: Persistencia en base de datos (MongoDB)**

**Objetivo:** Guardar los mensajes del formulario en la base de datos mediante una API Route.

**Criterios de Aceptación:**
- ✅ Modelo `ContactMessage` con los campos: id, fullName, email, message, createdAt
- ✅ Inserción exitosa crea registro en la DB
- ✅ Manejo correcto de errores y respuestas HTTP

**Story Points:** 2

---

## ⚙️ Tecnologías Utilizadas

- **Next.js (App Router)**
- **TypeScript**
- **React**
- **TailwindCSS**
- **MongoDB + Mongoose**
- **Node.js**
- **CSS Modules**

---

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/portafolio-next.git
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear archivo `.env.local` con tu conexión MongoDB:
   ```env
   MONGODB_URI="tu_conexion_mongodb"
   ```
4. Iniciar el servidor:
   ```bash
   npm run dev
   ```
5. Abrir en el navegador:
   ```bash
   http://localhost:3000
   ```

---

## 🧱 Estructura de Datos (MongoDB)

**Colección:** `contact_me`  
**Esquema:**

| Campo       | Tipo      | Descripción                    |
|--------------|-----------|--------------------------------|
| `fullName`   | String    | Nombre completo del remitente  |
| `email`      | String    | Correo electrónico             |
| `message`    | String    | Mensaje enviado                |
| `createdAt`  | Date      | Fecha del envío                |

---

## 🌐 Rutas Principales

| Ruta | Descripción |
|------|--------------|
| `/` | Página principal (Home) |
| `/projects` | Lista de proyectos |
| `/projects/[slug]` | Detalle dinámico de un proyecto |
| `/contact` | Formulario de contacto |

---

## 🧩 Ejemplo de Ruta Dinámica

Cada proyecto tiene un **slug único** (por ejemplo, `v-mind-project`, `counter`, `library`) y se accede mediante:  
```
/projects/[slug]
```

Ejemplo:  
```
/projects/counter
```

---

## 🧾 Cierre de Actividad

✅ Portafolio completo con App Router, 3+ páginas y navegación funcional.  
✅ Formulario persistente conectado a MongoDB.  
✅ Proyecto documentado según requerimientos de la Historia de Usuario.  

---

**Autor:** Daniel Ospina  
**Tecnologías:** Next.js, React, TypeScript, MongoDB  
**Fecha:** Octubre 2025  
