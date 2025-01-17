FROM node:22-alpine AS base
LABEL org.opencontainers.image.source https://github.com/shift-intensive/web-tester

FROM base AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]