FROM node:alpine
WORKDIR "/app/frontend"
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run" ,"start"]