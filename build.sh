#!/bin/bash

docker build -t nextjs-docker .
docker run -d -p 3000:3000 --name nextjs-docker nextjs-docker
docker network connect proxy nextjs-docker