# 1. Git的准备工作

## 1.1 关于Git

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

## 1.2 安装Git

安装Git：[官网](https://git-scm.com/)下载，一路安装就可以。

> 注意：在Linux环境下，不需要安装Git，Linux系统自带 Git。

![Git-install](assets/Git-install.png)

验证是否安装成功，出现版本信息即代表安装成功。

```powershell
PS C:\Users\13480> git version
git version 2.41.0.windows.1
```

## 1.3 配置Git

主要配置**邮箱和用户名**，Git 的配置都可以参考[官方文档](https://git-scm.com/book/zh/v2)。

配置 Git 主要配置用户信息，即设置用户名和邮件地址。

```
$ git config --global user.name "username"
$ git config --global user.email "user@example.com"
```

配置好后可以通过`git config --list`或者`git config --list --show-origin`命令查看。

```powershell
PS C:\Users\13480> git config --list
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/etc/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
core.editor="C:\\Program Files\\Microsoft VS Code\\bin\\code" --wait
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
user.name=cmitecho
user.email=echlorine@echocolate.xyz
```

## 1.4 设置key

key 的是为了保证克隆或者推送项目时，能够进行权限的验证。

生成 ssh-key：

```powershell
PS C:\Users\13480> ssh-keygen -t ed25519 -C "echlorine@echocolate.xyz"
Generating public/private ed25519 key pair.
Enter file in which to save the key (C:\Users\13480/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in C:\Users\13480/.ssh/id_ed25519
Your public key has been saved in C:\Users\13480/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:evZckbjj6XcjncSrezsiVkSKGPNmWI3iMNJiBoj8QDA echlorine@echocolate.xyz
The key's randomart image is:
+--[ED25519 256]--+
|Eo .     o       |
|o+= + + o . .    |
| ooo + O . o     |
|   .  + = ....   |
|       oS ..o.   |
|       .   ...o  |
|      . o o..o o |
|       o +o++ O  |
|         o*ooB.+ |
+----[SHA256]-----+
```

上述代码解释：

`Enter file in which to save the key (/home/echo/.ssh/id_ed25519): `key 在磁盘上面的位置，回车默认即可。

`Enter passphrase (empty for no passphrase): `留空即可。

在本地生成key之后，需要将 key 与 Github（或者类似的代码管理平台）账户**绑定**。

![Git-Key](assets/git-key.png)

> 注意事项：
>
> 部分Windows电脑在生成 ssh key 的时候，可能会报错，这时候可以使用Git 提供的终端来生成Key。
>
> ![Git-Bash](assets/Git-Bash.png)
