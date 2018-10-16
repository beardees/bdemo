#!/bin/bash
docker run \
    -it \
    -v `pwd`:/app \
    --workdir /app \
     -u $(id -u):$(id -g) \
     -p 1234:1234 \
     -p 1235:1235 \
     --name bdemo-client \
     bdemo-client \
     parcel serve --hmr-port 1235 ./src/index.html