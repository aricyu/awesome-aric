# django+celery+redis简单用法

## Celery是什么

- Celery 是一款非常简单、灵活、可靠的分布式系统，可用于处理大量消息，并且提供了一整套操作此系统的一系列工具。
- Celery 是一款消息队列工具，可用于处理实时数据以及任务调度。
- Celery 是根据 BSD License 进行开源的。

[官方文档](https://docs.celeryq.dev/en/latest/)

[中文翻译](https://www.celerycn.io/)

## 安装 celery

```
pip install celery
```
**window下需要额外安装 eventlet**

```
pip install eventlet
```

## 选择中间人（Broker）
Celery 需要一个中间件来进行接收和发送消息，通常以独立的服务形式出现，成为 消息中间人（Broker）
以下有几种选择：

- RabbitMQ
```
待补充
```
- Redis
```
pip install redis
```

## Django 配置 Celery

> 注：笔者的项目中，将settings.py文件移到了同级目录下的config文件夹下，并将父级目录改名为config。目录结构如下

```
- proj
	- config
		- settings
			- __init__.py
			- development.py
			- production.py
		- __init__.py
		- celery.py
		- urls.py
	- app1
	- app2
```

### Django中使用Celery的异步任务
[官方文档](https://docs.celeryq.dev/en/latest/django/first-steps-with-django.html)

[中文翻译](https://www.celerycn.io/fu-lu/django)

### Django中使用Celery的定时任务
在异步任务中，我们只用到了worker，而在定时任务中，还要用到celery的beat调度器。

#### 配置定时任务

1. 和写异步任务一样写一个任务，如在app1的tasks.py定义一个方法`do_something`：

```
# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from celery import shared_task

@shared_task
def do_something():
    print('定个时，每x秒大吼一声，吼~~~')

```

2. 在celery.py中配置定时任务调用上面的`do_something`

```
# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.development')
app = Celery('ape')
app.config_from_object('django.conf:settings', namespace='CELERY')


# -------------  定时任务 begin -------------
app.conf.beat_schedule = {
    'do_something': {
        'task': 'app1.tasks.do_something',
        'schedule': 10, # 秒
        'args': (),
    }
}

# -------------  定时任务 end  -------------


app.autodiscover_tasks()
```

## 启动Celery

### 启动worker （异步任务）

#### windows下：
```
celery -A config worker -l info -P eventlet
```

#### linux下：
```
celery -A config worker -l info
```

### 启动beat（定时任务），需同时启动上面的Worker
```
celery -A config beat -l info
```
