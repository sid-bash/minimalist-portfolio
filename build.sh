#!/bin/bash

CONTAINER_NAME=bevis-poc-frontend-container
IMAGE_NAME=bevis-poc-frontend

sudo docker build -t $IMAGE_NAME .
sudo docker run -d -p 8080:80 --name $CONTAINER_NAME $IMAGE_NAME

# Kill port in use and remove existing container
# sudo npx kill-port 8080
# sudo docker rm -f $CONTAINER_NAME

# Cleanup for Docker container and image
# sudo docker stop $CONTAINER_NAME
# sudo docker rm $CONTAINER_NAME
# sudo docker rmi $IMAGE_NAME    