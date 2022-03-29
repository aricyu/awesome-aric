# 使用axios传*集合型*参数


如：`a = [1,2,3]`

### POST，PUT 请求

在body中写：`a:[1,2,3]`
例：
```
{
	xxx:"",
	a:[1,2,3]
}
```

## GET，DELETE 请求


使用axios自带的qs，可以进行配置：


```

var query = { 
    a:[1,2,3] 
    };

export function getSomething(query) {
  return request({
    url: `xxx.com`,
    method: 'get',
    params: query,
    paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat:'***' })
    }
  })
}

```

其中***有以下值：

- `indices` : `a[0]=1&a[1]=2&a[2]=3`  // 默认，直接传就会是这种形式

- `brackets` : `a[]=1&a[]=2&a[]=3`

- `repeat` : `a=1&a=2&a=3`

- `comma` : `a=1,2,3`

根据后端要求，自行配置