# Docker 部署项目（简易版）


## 编写Dockerfile文件
Dockerfile文件是用来生成镜像的。
```
# 镜像
FROM node:15.2.1    

# 设置环境变量，定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。
ENV HOST 0.0.0.0 

# 指定工作目录
WORKDIR /app

# 复制指令，从上下文目录中复制文件或者目录到容器里指定路径。
COPY . .

# 声明端口
EXPOSE 3000

# 国内环境使用，非国内环境使用会报错
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
RUN yarn install
CMD  ["yarn","run","start"]

```

## 生成并运行Docker镜像
```
cd /www/项目/api-server  #cd到Dockerfile文件所在目录
docker build -t image-xxx .
docker run -d --name xxx -p 8066:80 -v /www/项目/api-server:/app image-xxx
```
## 访问
`http://linux服务器IP:8066`

## 使用docker-compose（推荐）


### 编写docker-compose.yml文件

```
version: '3'

services:
    api-server:
        build: ./api-server
        environment:
            - ASPNETCORE_ENVIRONMENT=Production
        ports:
            - "8066:80"
        volumes:
            - "/etc/localtime:/etc/localtime"
            - "./api-server:/app"
        restart: always
        logging: 
            driver: "json-file"
            options: 
              max-size: "300m" 
    web-site:
        build: ./web-site
        environment:
            - NODE_ENV=production
        ports:
            - "8067:3000"
        volumes:
            - "/etc/localtime:/etc/localtime"
            - "./web-site/.web:/app/.web"
            - "./web-site/api:/app/api"
            - "./web-site/static:/app/static"
            - "./web-site/web.config.js:/app/web.config.js"
            - "./web-site/package.json:/app/package.json"
            - "./web-site/yarn.lock:/app/yarn.lock"
        restart: always
        logging: 
            driver: "json-file"
            options: 
              max-size: "300m" 
               
```


### 部署项目
1. 使用打包教程将项目打包
2. 将outputs下的所有文件及文件夹移动到`/www/项目`(也可以是其他目录，只需要保证所有的配置都一样就行)下
3. cd /www/项目
4. docker compose up -d
5. 等待几秒钟...
6. 访问项目地址，让项目运行起来预热

### 重启项目
1. cd /www/项目
2. docker compose down
3. 等待几秒钟...
4. docker compose up -d
5. 等待几秒钟...
6. 访问项目地址，让项目运行起来预热

