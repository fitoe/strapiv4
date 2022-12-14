# 🚀 Getting started with Strapi & sqlite

## you need to create (or not) a .env file in the workdir like:

```env
HOST = <0.0.0.0>
PORT=<1337>
APP_KEYS=<yourkey>
API_TOKEN_SALT=<your salt>
ADMIN_JWT_SECRET=<your admin jwt secret>
JWT_SECRET=<your jwt secret>
DATABASE_CLIENT='sqlite'
DATABASE_FILENAME='.tmp/data.db'
NODE_ENV=develop
```

## run

```bash
docker-compose up -d
```

🎉 enjoy!!

http://localhost:1337/admin/


## Build your docker image (optional)
```bash
# build docker image
docker build . -t <dockername>
# tag the image :docker tag nginx bill/nginx:4
docker tag <dockername> <hubuser>/<repo-name>[:<tag>]
# push to dockerhub
docker push <hubuser>/<repo-name>[:<tag>]
```