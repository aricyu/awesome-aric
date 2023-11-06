# Docker安装


[Docker官网](https://www.docker.com/ "Docker官网")  
[Docker官网文档](https://docs.docker.com/ "Docker官网文档")  
[w3cschool](https://www.w3cschool.cn/docker/ "w3cschool")  
[阮一峰 Docker 教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html "阮一峰 Docker 教程")  

> 官方安装教程 
> - [Get Docker](https://docs.docker.com/get-docker/ "Get Docker")  
> - [Install Docker Engine](https://docs.docker.com/engine/install/ "Install Docker Engine") 


## 先决条件 Prerequisites
- linux (可选)，本篇以centos为例。
- nginx (可选)
- k8s(可选，微服务项目推荐使用)

### 卸载旧版本

```
yum remove  docker \
            docker-client \
            docker-client-latest \
            docker-common \
            docker-latest \
            docker-latest-logrotate \
            docker-logrotate \
            docker-engine

```

卸载Docker时，不会自动删除存储的Images, Containers, Volumes, Networks，以上文件存储在`/var/lib/docker/`

## 安装Docker

### 安装`yum-utils`软件包（提供`yum-config-manager`程序）并设置repository。
```
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

### 安装 Docker 引擎：
```
yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
### 启动Docker 
```
systemctl start docker
```
### 配置开机启动Docker 
```
systemctl enable docker.service
```
### Docker常用命令
```
docker --version  #查看版本
docker pull xxx  #拉取镜像
docker build -t image-xxx .   #使用 Dockerfile 创建镜像
docker images  #列出本地镜像
docker rmi image-xxx  #删除镜像

docker run -d --name xxx -p 8066:80  image-xxx  #运行镜像生成一个容器
docker ps -a   #列出所有容器
docker rm yun #删除容器
```


# Docker Compose 安装

## docker compose 简介
> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。

## 安装docker compose
```
yum update
yum install docker-compose-plugin
```

### 查看docker compose版本
```
docker compose version
```


