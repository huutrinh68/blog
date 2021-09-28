---
title: Loading test
date: 2020-12-12
categories:
 - others
tags:
 - test
---
## Bài toán
Giả sử muốn test xem API của hệ thống có thể đạt được 200 request/giây?

## Cách giải quyết
Có rất nhiều tools để giúp cho việc test này được dễ dàng như Gatling, Hey, Apache Bench, Jmeter...

Trong bài này sẽ dùng Jmeter
### Install Jmeter
#### On Mac 
```
$ brew install jmeter
```

#### On Ubuntu
```
$ sudo apt update
$ sudo apt install jmeter
```

### Start jmeter
```
$ jmeter
```

### Setting test 
#### Setting Thread Group
<img width="1153" alt="Screen Shot 2021-01-04 at 23 04 06" src="https://user-images.githubusercontent.com/8240899/103543058-3c3a6480-4ee1-11eb-9862-1543b1cb95c4.png">

#### Setting HTTPRequest
<img width="1150" alt="Screen Shot 2021-01-04 at 23 05 05" src="https://user-images.githubusercontent.com/8240899/103543119-583e0600-4ee1-11eb-8321-9ef1bf54ef77.png">

#### Setting Summary
<img width="1151" alt="Screen Shot 2021-01-04 at 23 06 11" src="https://user-images.githubusercontent.com/8240899/103543199-799ef200-4ee1-11eb-87a9-743894396c5e.png">
