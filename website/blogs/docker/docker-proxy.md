---
title: Cài đặt proxy cho docker
date: 2021-09-14
categories:
 - docker
tags:
 - docker
 - proxy
---
Cài đặt proxy cho docker
- Hệ điều hành Ubuntu

### Tạo file proxy config
```
$ sudo mkdir -p /etc/systemd/system/docker.service.d
$ sudo vi /etc/systemd/system/docker.service.d/proxy.conf
```
### Thêm những thông tin về proxy vào trong file proxy.conf
```
[Service]
Environment="HTTP_PROXY=http://myproxy.hostname:8080"
Environment="HTTPS_PROXY=https://myproxy.hostname:8080/"
Environment="NO_PROXY="localhost,127.0.0.1,::1"
```
### Lưu lại và sau đó load lại config
```
$ sudo systemctl daemon-reload
```

### Áp dụng config đó vào docker
```
$ sudo systemctl restart docker.service
```
