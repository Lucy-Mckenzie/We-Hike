
FROM node:20-alpine AS build

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci
COPY . .
RUN npm run build --if-present


FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json

ENV NODE_ENV=production
RUN npm prune --omit=dev

CMD ["npm", "start"]
