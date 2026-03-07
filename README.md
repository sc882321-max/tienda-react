
🛒 Tienda React - Proyecto Final Módulo IEste proyecto es una aplicación de comercio electrónico moderna desarrollada con React y Vite. La aplicación consume la API de DummyJSON para gestionar un catálogo de productos con funcionalidades avanzadas de búsqueda, paginación y un carrito de compras persistente.





🚀 Requisitos ImplementadosSiguiendo las instrucciones del proyecto, se han integrado las siguientes características obligatorias:

  -Navegación Dinámica: Uso de react-router-dom para la gestión de rutas entre Home, Detalle de Producto y Carrito.

  -Gestión de Estado Global: Implementación de Context API para manejar el carrito de compras, permitiendo agregar y eliminar productos desde cualquier componente.

  -Persistencia de Datos: Los productos del carrito se guardan automáticamente en localStorage.

  -Consumo de API Real: Integración con https://dummyjson.com/products utilizando endpoints para listado, búsqueda y detalles por ID.

  -Interfaz Profesional: Diseño 100% responsivo y moderno utilizando Tailwind CSS v3, incluyendo efectos hover y estados interactivos.

  
  
  
  -Funcionalidades de Usuario:

      -Búsqueda de productos en tiempo real.
    
      -Paginación real (usando parámetros limit y skip).
    
      -Contador dinámico de productos en el Navbar.



      
🛠️ Tecnologías Utilizadas

    |React 18 (Vite) 
    
    |Tailwind CSS v3 
    
    |React Router Dom 
    
    |Context API 



    
📂 Estructura del Proyecto El código sigue la estructura sugerida para mantener la escalabilidad y orden:Plaintextsrc/

├── components/     # Navbar, ProductCard, SearchBar, Pagination

├── context/        # CartContext (Context API)

├── pages/          # Home, ProductDetail, Cart

├── services/       # Lógica de consumo de API (api.js)

└── App.jsx         # Configuración de rutas y Providers




🔧 Instalación

  |Clona este repositorio.

  |Instala las dependencias: Bashnpm install

  |Inicia el proyecto en modo desarrollo: Bashnpm run dev
