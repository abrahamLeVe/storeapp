# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install --only=production

# Copia el resto de los archivos de la aplicación
COPY . .

# Ejecuta el comando de construcción para generar el directorio dist
RUN npm run build

# Expone el puerto en el que se ejecuta Strapi (por defecto: 1337)
EXPOSE 1337

# Define el comando de inicio para ejecutar Strapi
CMD ["npm", "start"]
