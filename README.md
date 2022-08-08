```
FROM kubelilin/nginx_container:v1.23.1

COPY dist/ /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/default.conf
```


# VUE Nginx Docker 镜像
## 淘宝源
```
npm conf set registry https://registry.npm.taobao.org

```
## 创建VUE项目
```
npm install -g @vue/cli

vue create vuedemo

```

## 开发环境运行
```
npm run serve
```

## 编译生成
```
npm run build
```

经过NodeJS编译后，会在./dist目录生成静态文件。

## Docker
### 构建镜像
```
docker build -t vue-container .

```

### 启动容器
```
docker run -p 8092:8092 -d --name vueApp vue-container
```
