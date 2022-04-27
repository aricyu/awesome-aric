# 常用命令

[Git官网](https://git-scm.com/)

## 查看版本
```
git --version
```

## 创建仓库

```
git init
```

## 克隆仓库

```
git clone <repo>

# git clone https://github.com/996icu/996.ICU.git
# git clone git@github.com:996icu/996.ICU.git
```

## commit 

```
git commit -m [message]
```

## push 

git push 命令用于从将本地的分支版本上传到远程并合并。
```
git push <远程主机名> <本地分支名>:<远程分支名>
```
如果本地分支名与远程分支名相同，则可以省略冒号：
```
git push <远程主机名> <本地分支名>
```

例子：
以下命令将本地的 master 分支推送到 origin 主机的 master 分支。
```
git push origin master
```

## pull
git pull 命令用于从远程获取代码并合并本地的版本。
```
git pull <远程主机名> <远程分支名>:<本地分支名>
```
例子：
```
$ git pull
$ git pull origin
```


## TortoiseGit (小乌龟)

[下载TortoiseGit](https://tortoisegit.org/download/)