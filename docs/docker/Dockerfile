FROM node:15.2.1

ENV HOST 0.0.0.0
WORKDIR /app
COPY . .
EXPOSE 3000

# 国内环境使用，非国内环境使用会报错
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
RUN yarn install
CMD  ["yarn","run","start"]
