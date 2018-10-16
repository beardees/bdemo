#!/bin/bash

docker run \
    -it \
    --rm \
    -v `pwd`:/app \
    --workdir /app \
     -u $(id -u):$(id -g) \
     bdemo-client \
     bash