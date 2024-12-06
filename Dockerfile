FROM node:20-alpine
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

COPY . .

ARG VITE_AUTH0_AUDIENCE
ARG VITE_AUTH0_DOMAIN
ARG VITE_AUTH0_CLIENT_ID

ENV NODE_ENV=production
RUN npm run build --if-present
RUN npm prune --omit=dev