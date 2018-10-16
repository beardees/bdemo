```
git clone <url-github...> <nom-dossier-local>
cd <nom-dossier-local>
```

lancer mongo (db)

```sh
docker run -e MONGO_INITDB_DATABASE=strapi \
           -v `pwd`/db/:/data/db \
           --name bdemo-mongo \
           -d mongo
```

lancer strapi

```sh
docker run -e APP_NAME=strapi-app \
           -e DATABASE_CLIENT=mongo \
           -e DATABASE_HOST=bdemo-mongo \
           -e DATABASE_PORT=27017 \
           -e DATABASE_NAME=strapi \
           -v `pwd`/strapi-app:/usr/src/api/strapi-app \
           --link bdemo-mongo:mongo \
           -p 1337:1337 \
           --name bdemo-strapi -d strapi/strapi
```

aller dans le sous-dossier du client web

```
cd client
```

creer son env pour l'appli web

```sh
docker build -t bdemo-client .
```

lancer

```sh
./run.sh
```
