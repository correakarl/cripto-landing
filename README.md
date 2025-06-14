# CryptoVerse - Landing Page Cripto

**CryptoVerse** es una landing page inspirada en [eldorado.io](https://eldorado.io/es/) desarrollada como parte de la prueba técnica frontend para **Banking Technologies Consulting, C.A.**

Este proyecto muestra datos en tiempo real de criptomonedas obtenidos desde la API pública de CoinGecko, usando:
- **Next.js 15 (con Turbopack)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** para animaciones
- **Lucide React Icons**
- **Axios** para consumo de API

---

## 🧩 Características Principales

- ✅ Interfaz moderna y responsiva.
- 🚀 Animaciones suaves con `framer-motion`.
- 💡 Integración con [CoinGecko API](https://api.coingecko.com/api/v3/coins/markets).
- 🔍 Búsqueda y filtrado en tiempo real por nombre o símbolo.
- 🔁 Ordenamiento por capitalización, precio, cambio 24h y volumen.
- 📱 Diseño totalmente adaptable a dispositivos móviles y escritorio.
- 🖼️ Modal informativo al hacer clic en cada activo.
- ⏱️ Actualización automática de datos cada minuto.
- 🎨 Paleta de colores personalizada y estilos coherentes.

---

## 🛠 Tecnologías Usadas

| Tecnología | Descripción |
|-----------|-------------|
| **Next.js 15** | Framework principal con soporte para Turbopack |
| **React 19** | Motor del lado del cliente |
| **TypeScript** | Tipado estático y mejor experiencia de desarrollo |
| **Tailwind CSS** | Estilizado rápido y responsivo |
| **Framer Motion** | Animaciones suaves y efectos interactivos |
| **Lucide React Icons** | Iconografía profesional reutilizable |
| **Axios** | Para consultas HTTP claras y escalables |

---

## 📥 Requisitos Técnicos

Asegúrate de tener instalado:

- Node.js v18.x o superior
- npm o yarn
- Git (para clonar el repositorio)

---

## 📦 Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/correakarl/cripto-landing.git
   cd cripto-landing
   ```

2. **Instala dependencias:**

   ```bash
   npm install
   # o si usas yarn
   yarn install
   ```

3. **Ejecuta el servidor de desarrollo:**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador en:**  
   [http://localhost:3000](http://localhost:3000)

---

## 🌐 Despliegue

El proyecto está listo para desplegarse en plataformas como:

- **[Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)** (recomendado para Next.js)
- **Netlify / GitHub Pages** (opcional, con `next export`)

---

## 📈 Funcionalidades Implementadas

- ✅ Carga de datos desde CoinGecko API.
- 🔍 Barra de búsqueda dinámica.
- 🔁 Botón de ordenamiento por campo (`market_cap`, `current_price`, etc.).
- 📄 Paginador para manejo eficiente de datos.
- 📱 Vista móvil y desktop completamente diferente pero coherente.
- 🖼️ Modal con detalles completos de cada activo seleccionado.
- ⏱️ Refresco automático de datos cada 60 segundos.
- 🎯 Botones interactivos con hover y tap animations.
- 🌙 Modo oscuro integrado con gradientes y transparencias.

---

## 📁 Estructura del Proyecto

```
src/
├── app/              # Páginas principales
├── components/       # Componentes reutilizables
├── styles/           # Estilos globales + Tailwind setup
├── public/           # Assets estáticos (logos, imágenes)
└── types/            # Interfaces y tipos TypeScript
```

---

## 🧪 Archivos Clave

| Archivo | Descripción |
|--------|-------------|
| `app/page.tsx` | Página principal que incluye todos los componentes |
| `components/CryptoExplorer.tsx` | Tabla dinámica de criptomonedas |
| `globals.css` | Estilos base, animaciones y clases personalizadas |
| `tailwind.config.ts` | Configuración de paleta y tipografía |
| `postcss.config.js` | Configuración de PostCSS para Tailwind |

---

## 📎 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para fines educativos o profesionales.

---

## 📬 Contacto

Si tienes dudas sobre el proyecto o deseas ver más funcionalidades implementadas:

📧 karl.correa.88@gmail.com  
🐱 [GitHub](https://github.com/correakarl/cripto-landing)

---

> Este proyecto fue realizado como parte de la Prueba Técnica Frontend para **Banking Technologies Consulting, C.A.**
