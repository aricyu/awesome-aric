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
