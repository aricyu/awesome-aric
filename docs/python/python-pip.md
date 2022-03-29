# pip

## pip换源

#### 临时
`pip install xxxx -i https://pypi.tuna.tsinghua.edu.cn/simple`

#### 全局
```
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 清华源: pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  
# 豆瓣源: pip config set global.index-url http://pypi.douban.com/simple/  
# 腾讯源: pip config set global.index-url http://mirrors.cloud.tencent.com/pypi/simple  
# 阿里源: pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/  
```

## pip的常用命令

#### 查看pip版本
``` 
pip --version 
```

#### 升级pip
``` 
python -m pip install --upgrade pip
``` 

#### 查看已安装的库
``` 
pip list
``` 

#### 安装库
```
pip install arrow
pip install arrow=1.2.2
pip install arrow,requests
```

#### 卸载库
```
pip uninstall arrow
```

#### 生成requirements.txt
```
pip freeze > requirements.txt
```

#### 还原requirements.txt
```
pip install -r requirements.txt
```