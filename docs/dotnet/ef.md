# EF

## 迁移
```
Update-Database -Script -SourceMigration 
Update-Database –TargetMigration 201611140334273_xxxxx
```

## 生成sql脚本
```
cd E:\xxx\aspnet-core\src\xxx.EntityFrameworkCore
dotnet ef migrations script xxx -o s sqls/xxx
dotnet ef migrations script 20180827112311_Add_LimitedTimeBuy -o sqls/20180911022838_Update_Conpou_DisplayOrder.sql
```

## 根据数据表生成实体
```
Install-Package Microsoft.EntityframeworkCore.SqlServer
Install-Package Microsoft.EntityframeworkCore.Tools
Install-Package Microsoft.VisualStudio.Web.CodeGeneration.Design
Scaffold-DbContext -Force "Data Source=localhost; Initial Catalog=xxx; Persist Security Info=True; User ID=user; Password=123456;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
```

## Mac生成迁移文件及更新数据库：
```
cd xxxx/xxx/xxx/CsprojBuilder.EntityFrameworkCore
dotnet ef migrations add 本次修改的内容起个名放在这，如Add_Weixin
dotnet ef database update
```
