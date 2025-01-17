FROM node:22-alpine AS base
LABEL org.opencontainers.image.source https://github.com/shift-intensive/web-tester

FROM base AS builder

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn --production --frozen-lockfile
RUN yarn add vite @vitejs/plugin-react

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]