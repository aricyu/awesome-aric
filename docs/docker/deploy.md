# Deploy

## Linux + Docker 部署项目需要以下依赖
- linux
- nginx
- docker
- docker-compose(推荐)
- k8s(可选，微服务项目推荐使用)

## 什么是Docker

[Docker官网](https://www.docker.com/ "Docker官网")  
[w3cschool](https://www.w3cschool.cn/docker/ "w3cschool")  
[阮一峰 Docker 教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html "阮一峰 Docker 教程")  

## 安装Docker

### 移除旧版本：

```
yum remove docker \
           docker-client \
           docker-client-latest \
           docker-common \
           docker-latest \
           docker-latest-logrotate \
           docker-logrotate \
           docker-engine

```
### 安装一些必要的系统工具：
```
yum install -y yum-utils
```
### 添加软件源信息：
```
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
### 更新 yum 缓存：
```
yum makecache fast：
```
### 安装 Docker (ce版)：
```
yum install docker-ce docker-ce-cli containerd.io
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

## 将项目运行在Docker上
### Dockerfile文件
Dockerfile文件是用来生成镜像的。
```
FROM xxx

WORKDIR /app       # 指定工作目录
EXPOSE 80          # 声明端口
COPY . .           # 复制指令，从上下文目录中复制文件或者目录到容器里指定路径。

ENTRYPOINT ["启动命令"]    # 容器启动的时候执行的命令
```

### 生成并运行Docker镜像
```
cd /www/项目/api-server  #cd到Dockerfile文件所在目录
docker build -t image-xxx .
docker run -d --name xxx -p 8066:80 -v /www/xxx/api-server:/app image-xxx
```
### 访问
`http://linux服务器IP:8066`

## 使用docker-compose（推荐）

### docker-compose 简介
> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。

### 安装docker-compose
```
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

```

### 查看docker-compose版本
```
docker-compose --version
```
### 使用docker-compose部署项目
1. 使用打包教程将项目打包
2. 将outputs下的所有文件及文件夹移动到`/www/项目`(也可以是其他目录，只需要保证所有的配置都一样就行)下
3. cd /www/项目
4. docker-compose up -d
5. 等待几秒钟...
6. 访问项目地址，让项目运行起来预热

### 使用docker-compose重启项目
1. cd /www/项目
2. docker-compose down
3. 等待几秒钟...
4. docker-compose up -d
5. 等待几秒钟...
6. 访问项目地址，让项目运行起来预热