# Usa la imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación
COPY package.json package-lock.json ./
COPY app.js ./
COPY models/ ./models
COPY routes/ ./routes
COPY public/ ./public

# Instala las dependencias
RUN npm install

# Copia todos los archivos del proyecto, excluyendo node_modules y test
COPY . .

# Ejecuta los tests
#RUN npm test

# Ejecuta la aplicación al iniciar el contenedor
CMD ["node", "app.js"]
