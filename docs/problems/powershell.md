# PowerShell

## 无法加载文件xxx.ps1，因为在此系统中禁止执行脚本。

运行 `get-executionpolicy`

显示 `Restricted`  即不允许执行任何脚本。

- `Restricted`: 不载入配置文件, 不执行脚本. "Restricted"是默认值.
- `AllSigned`: 所有的配置文件和脚本必须通过信任的出版商签名(trusted publisher), 这里所指的脚本页包括你在本地计算机上创建的脚本.
- `RemoteSigned`: 所有从互联网上下载的脚本必须通过信任的出版商签名(trusted publisher).
- `Unrestricted`: 载入所有的配置文件和脚本. 如果你运行了一个从互联网上下载且没有数字签名的脚本, 在执行前你都会被提示是否执行.

运行 `set-executionpolicy RemoteSigned`即可执行脚本

---