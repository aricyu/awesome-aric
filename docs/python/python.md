# python

## pip 源

单个：
`pip install xxxx -i https://pypi.tuna.tsinghua.edu.cn/simple`

全局：
`pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple`

> pypi 清华大学源：https://pypi.tuna.tsinghua.edu.cn/simple  
> 
> pypi 豆瓣源 ：http://pypi.douban.com/simple/  
> 
> pypi 腾讯源：http://mirrors.cloud.tencent.com/pypi/simple  
> 
> pypi 阿里源：https://mirrors.aliyun.com/pypi/simple/  



## 虚拟环境

### 在当前目录创建一个名为 xxx 的虚拟环境
```
cd xxxx
python -m venv venv
--without-pip  #不需要安装 pip，默认为安装
--clear   #如果创建虚拟环境的目录已经有了其他虚拟环境，清楚重建
```

## 生成requirements.txt
```
pip freeze > requirements.txt
```
