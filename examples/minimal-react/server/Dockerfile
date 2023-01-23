FROM node:18-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install


# Copy app source code
COPY . .
RUN npm run build:prisma
RUN npm run build

FROM node:18-alpine

COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/dist /usr/src/app/dist

# Expose port for TRPC
EXPOSE 2022

# Start the app
CMD ["node", "/usr/src/app/dist/index.js"]