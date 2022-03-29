# 虚拟环境

> [官方文档 https://docs.python.org/zh-cn/3/library/venv.html](https://docs.python.org/zh-cn/3/library/venv.html "官方文档")  

## 创建虚拟环境
在当前目录创建一个名为 xxx(一般用venv) 的虚拟环境
```
cd xxxx
python3 -m venv xxx
--without-pip     #不需要安装 pip，默认为安装
--clear           #如果创建虚拟环境的目录已经有了其他虚拟环境，清楚重建
```

## 激活虚拟环境
不同平台调用的脚本是不同的（须将 `<venv>` 替换为包含虚拟环境的目录路径）：

|  平台   | Shell   | 用于激活虚拟环境的命令 |
|---------|---------|----------|
|  POSIX  | bash/zsh        | ` $ source <venv>/bin/ctivate ` |
|         | fish            | ` $ source <venv> /bin/activate.fish ` |
|         | csh/tcsh        | ` $ source <venv> /bin/activate.csh ` |
|         | PowerShell Core | ` $ <venv>/bin/Activate.ps1 ` |
| Windows | cmd.exe         | ` <venv>\Scripts\activate.bat ` |
|         | PowerShell      | ` <venv>\Scripts\Activate.ps1 ` |


## 退出虚拟环境
在 shell 中输入 "deactivate" 可以退出虚拟环境。具体机制取决于不同平台，并且是内部实现（通常使用脚本或 shell 函数）。