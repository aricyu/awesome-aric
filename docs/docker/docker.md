# Docker常用命令

## docker 使用 redis
```
docker pull redis:latest
docker run -d --name local-redis -p 6379:6379 --restart=always redis:latest
docker run -d --name local-redis -p 6379:6379 --restart=always redis:latest --requirepass "123456"
```

## docker 使用 rabbitmq
```
docker pull rabbitmq:latest
docker run -d --name local-rabbitmq --hostname=rabbitmqhostone -p 15672:15672 -p 5672:5672 --restart=always -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin rabbitmq:latest
rabbitmq-plugins enable rabbitmq_management
```

## docker 使用 mysql
```
docker pull mysql:latest
docker run -itd --name local-mysql -p 3306:3306 --restart=always -e MYSQL_ROOT_PASSWORD=123456 mysql
mysql -h localhost -u root -p
create database apetest default charset utf8;
```


## docker 使用 Postgresql
```
docker pull postgres:12
docker run -itd --name local-postgres -p 5432:5432 --restart=always -e POSTGRES_USER=odoo -e POSTGRES_PASSWORD=odoo -e POSTGRES_DB=postgres postgres:12
docker run -d --name pgadmin4 -p 15050:80 -e PGADMIN_DEFAULT_EMAIL=aric_yu@foxmail.com -e PGADMIN_DEFAULT_PASSWORD=odoo -e PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION=True   -e PGADMIN_CONFIG_CONSOLE_LOG_LEVEL=10 dpage/pgadmin4
```

## docker 进入容器
```
docker start xxxxxxxxxx
docker start self-service-car_tcp-server  
```

## docker 进入容器
```
docker exec -it xxxxxxxxxx /bin/bash  
docker exec -it 3cf324ca4f3f /bin/bash  
```

## docker 容器开机启动
```
docker update --restart=always xxxxxxxxxx
docker update --restart=always 81f80e89905a
```