FROM node:20-slim
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 4000
CMD [ "serve","-s",".","-l","4000"]