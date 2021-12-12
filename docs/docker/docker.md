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
docker run -itd --name local-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
mysql -h localhost -u root -p
create database apetest default charset utf8;
```

## docker 进入容器
```
docker start xxxxxxxxxx
docker start local-redis  
```

## docker 进入容器
```
docker exec -it xxxxxxxxxx /bin/bash  
docker exec -it 76c2bdaf512f /bin/bash  
```

## docker 容器开机启动
```
docker update --restart=always xxxxxxxxxx
docker update --restart=always 81f80e89905a
docker update --restart=always 084f6f764900
```