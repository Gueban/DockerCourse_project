# syntax=docker/dockerfile:1
FROM ubuntu:20.04 AS clone
WORKDIR project
RUN apt update && apt install -y git
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts
RUN --mount=type=ssh git clone git@github.com:Gueban/dc_web.git .
# DOCKER_BUILDKIT=1
# eval $(ssh-agent)
# ssh-add ~/.ssh/id_rsa
# sudo DOCKER_BUILDKIT=1 docker build -t front --ssh default=${SSH_AUTH_SOCK} .

FROM nginx:alpine
COPY --from=clone /project /usr/share/nginx/html