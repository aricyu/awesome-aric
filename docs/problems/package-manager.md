# 软件包管理器

## npm&yarn

### npm还原包失败
- 使用“科学上网”
- 使用yarn
- 使用pnpm
---

### `Module build failed: Error: Cannot find module 'node-sass'`
- 运行命令`yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g`
---

### `找不到node-sass/vendor`
1. 使用以下命令查看对应的版本`node -p "[process.platform, process.arch, process.versions.modules].join('-')"`。
2. 去[https://github.com/sass/node-sass/releases](https://github.com/sass/node-sass/releases) 下载相应版本的 `xxx_binding.node` 文件。
3. 将该文件重命名为 `binding.node` 后放入到 `node-sass\vendor\win32-x64-57` 目录下即可(`win32-x64-83`为步骤1查看到的版本)。
---
