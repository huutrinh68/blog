FROM node:lts

ARG http_proxy $http_proxy
ARG https_proxy $https_proxy
ENV http_proxy=$http_proxy
ENV https_proxy=$https_proxy

COPY ./app /app
WORKDIR /app
EXPOSE 3000

RUN yarn config set registry https://registry.npmjs.org && \
    apt-get update && \
    npm config set proxy $http_proxy && \
    npm config set https_proxy $http_proxy && \
    yarn install && \
    npm install

# CMD ["yarn", "start", "--host=0.0.0.0"]
CMD ["tail", "-f", "/dev/null"]
