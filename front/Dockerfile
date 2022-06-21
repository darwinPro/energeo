FROM node:16
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
ARG NEXT_PUBLIC_BACKEND_URL
RUN yarn build
CMD [ "yarn", "start" ]
