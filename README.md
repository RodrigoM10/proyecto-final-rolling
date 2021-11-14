Rolling Winery - Proyecto Final 
Se trata de una web e-commerce de bebidas buotique. Cuanta con una landing page, una tienda online donde puedes agregar productos al carrito. Tambien cuenta con inicio de sesion, registro de usuarios, seccion de contactos y nosotros.

Status: 
80 %


Metodo de trabajo. 
Se utulizo metodologia agil (KANBAN)
Programa utilizado: 
Trello: https://trello.com/b/8db2WS87/proyecto-final puedes ingresar para ver los sprints y el paso a paso del proyecto. 


Comenzando -  🚀
1- Para clonar el Frontend del proyecto puedes ingresar a git bash o la terminal del VS y colocar: git clone https://github.com/RodrigoM10/proyecto-final-rolling.git
2- Para clonar el Backend del proyecto colocar en la terminal o git bash y colocar : git clone https://github.com/RodrigoM10/proyecto-final-rolling-db.git
3- puedes acceder a la pagina para observarla en : https://proyecto-final-rolling.vercel.app/


Mira Deployment para conocer como desplegar el proyecto.

Pre-requisitos 📋
Tener el Visual Studio con previamnte instalado: npx create-react-app my-app 
se recomienda tener instaladas extensiones: ESlint y ES7
Tener creada una carpeta desde el escritorio o crear una nueva carpeta en el VS. 
Crear carpeta para Backend y Frontend.


Ejemplo de instalacion. 

Instalación 🔧 Backend
1- Abrir el Visual Studio y ubicarse en la carpeta que queiramos descargar el proyecto.
2 - Abrir la terminal y colocar :  git clone https://github.com/RodrigoM10/proyecto-final-rolling-db.git
3- Abrir en terminal intgegrado y asegurarse que este abierta en  "api"
4 - escribir el comando: npm i
5 - esperar descarga de dependencia y escribir : npm run dev. 


Instalación 🔧 Frontend 
1- Abrir el Visual Studio y ubicarse en la carpeta que queiramos descargar el proyecto.
2 - Abrir la terminal y colocar :  git clone https://github.com/RodrigoM10/proyecto-final-rolling.git
3- Abrir en terminal intgegrado y asegurarse que este abierta en  "FrontEnd"
4 - escribir el comando: npm i
5 - esperar descarga de dependencia y escribir : npm start. 



Despliegue 📦
Agrega notas adicionales sobre como hacer deploy

Backend Construido con 🛠️
Se utilizo las siguietnes dependencias.
   npm init y completamos los datos
   npm install express 
   npm install mongoose
   npm install corse
   npm install --save-dev nodemon
   npm install morgan

Rutas consultadas: 

Metodos POST,GET, DELETE
http://localhost:4000/api/auth/login
http://localhost:4000/api/auth/register
http://localhost:4000/api/productos/
http://localhost:4000/api/usuarios/
http://localhost:4000/api/mensajes/
http://localhost:4000/api/ventas/


Frontend Construido con 🛠️
Se utilizo las siguietnes dependencias.
    npm install aos: para efectos css de ingreso de divs con fade.
    npm install axios: para realizar consultar de la Api (backend).
    npm install react-bootstrap bootstrap@5.1.3: para utulizar clases de reactbootstrap para formatos mas faciles.
    npm install moment: para utilizar formatos de fecha.
    npm install react-router-dom: para utilizar rutas.
    npm install sweetalert --save: para utilizar alerts personalizados.
    npm install swiper: para utilizar estilos css y efectos de carrousel swipper.
    npm install web-vitals: conseguir datos de backend formato distitno. 


Contribuciones: 

Para generar peticiones ya sea del back o frot 
Pararse en la carpeta donde hayas instalado el proyecto moverse a: "proyecto-final-rolling" en el caso del front y a "proyecto-final-rolling-db" en el caso del back. 

Es importante asegurarse estar sobre esa carpeta en la terminal para poder hacer: 
a) git pull (traer los ultimos cambios) 
b) git push (hacer peticion y subir al github)

Se recomienda antes de hacer algun cambio crear una rama. 
git checkout -b "nombre de rama" para poder hacer cambios sin alterar la main

Wiki y enlaces ustilizados  📖
https://www.npmjs.com/package/web-vitals#installation
https://react-bootstrap.github.io/getting-started/introduction/
https://sweetalert.js.org/guides/
https://www.npmjs.com/package/aos
https://www.npmjs.com/package/swiper
https://www.npmjs.com/package/react-moment
https://www.npmjs.com/package/axios#installing


Autores ✒️
Scrum Master: Rodrigo Mendoza 
Contributors: Alvaro Jotar y Nicolas Mendoza 

Licencia 📄
Proyecto sin licencia ( trabajo final para escuala de programacion Rolling School)

Gracias a todos los contribuidores del equipo , a los mentores del curso y el apoyo de la gente que hizo posible este proyecto. 

