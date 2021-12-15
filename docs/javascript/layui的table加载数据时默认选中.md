# layui的table加载数据时默认选中

### 方式1（推荐方式1和方式3结合）：
在后端数据对应的dto中 ，添加一个字段叫  `LAY_CHECKED` ，并设置为true，那么在layui的table中该条数据会被默认选中。

### 方式2：
在前端，对返回的列表的每一条数据动态添加 `LAY_CHECKED` 字段，如
```
var data = res.Data
data &&  data.forEach(item => {
    item.LAY_CHECKED=true
});
```

### 方式3（我不想用 `LAY_CHECKED` 这个名，我想用 `IsChecked` 这个名字，可以）：
在前端，在os.table(****)执行前的任意地方写一句：
```
$.extend(table, {config: {checkName: 'IsChecked'}});
```