#!/bin/bash
PROJECT_NAME=k8s-todo-app
DOCKER_USERNAME=bhenriqsouza
SERVICE=${1}
REPOSITORY=${PROJECT_NAME}_${SERVICE}

error() {
    if [ $? != 0 ]; then
        echo "Error!"
        exit 122
    fi
}

build() {
    echo "=> Building ${SERVICE}"
    docker-compose build ${SERVICE}
    echo "=> Built ${SERVICE}"
}

tag() {
    echo "=> Tagging ${SERVICE}"
    docker tag ${REPOSITORY} ${DOCKER_USERNAME}/${REPOSITORY}
    echo "=> Tagged ${SERVICE}"
}

push() {
    echo "=> Pushing ${SERVICE}"
    docker push ${DOCKER_USERNAME}/${REPOSITORY}
    echo "=> Pushed ${DOCKER_USERNAME}/${REPOSITORY}"
}

build ${SERVICE}
error
tag ${SERVICE}
error
push ${SERVICE}
error
echo

exit 0