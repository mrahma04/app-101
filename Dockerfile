FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install -g serve

# Install app dependencies
RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["serve", "-s", "build"]