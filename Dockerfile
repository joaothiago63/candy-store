FROM node:alpine
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]