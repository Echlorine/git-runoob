#!/bin/bash

# 更新 intr
cat README.md > docs/intr.md

# 更新 footer
commit_id=$(git log --pretty=oneline | awk '{print $1}' | head -n 1)

echo -e "
::: slot footer
Lasted Updated : [${commit_id:0:7}](https://github.com/Echlorine/git-runoob/commit/${commit_id}) | Copyright © $(date "+%Y")
:::" >> docs/README.md

# 生成静态文件
npm install && npm run docs:build

# 发布到自定义域名
cd docs/.vuepress/dist
echo 'git-runoob.echocolate.xyz' > CNAME