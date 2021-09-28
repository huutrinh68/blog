---
title: Ví dụ về ConvNet
date: 2018-10-12
categories:
 - ai
tags:
 - ai
---
![cnn_1](https://user-images.githubusercontent.com/8240899/134886348-4df8f4dd-87bf-40ba-84fe-e8d54beb59f5.png)

## Câu hỏi
Giả sử có 10 filters `3*3*3`. Lúc này mạng một lớp sẽ có bao nhiêu parameter?

## Lời giải
Với một filter, ta có `3*3*3=27` trọng số của kernel.
Thêm vào đó là mọt bias được cộng vào trước khi được kết quả tính toán được vào hàm hoạt tính ReLU. 

Vậy một filter có tổng cộng 28 params. 10 filters sẽ có tổng cộng 280 params.

## Ví dụ về ConvNet.

![cnn_2](https://user-images.githubusercontent.com/8240899/134886368-7f40c814-8717-480a-94f3-cf1cf0472af8.png)

### Quan sát
Gồm 3 lớp với lần lượt 10 filters, 20 filters và 40 filters. Output cuối cùng là một vector 1960 chiều.
Ta có thể thấy rằng size ảnh của các lớp sau nhỏ dần (Từ `39 -> 37 -> 17 -> 7`), 
nhưng số filter được áp dùng vào trong mạng ở mỗi lớp thì lại tăng dần, từ `10 -> 20 -> 40`. 

Mục đích của việc làm size của ảnh nhỏ, và tăng lượng filter ở mỗi lớp lên để làm tính toán được nhanh hơn, 
và chiết xuất được nhiều kiểu đặc tính hơn , vì mỗi filter sẽ có tác dụng chiết xuất một đặc tính nào đó của ảnh.

### Một số quy ước ngầm
Trong mạng convolution, người ta cũng thường ký hiệu các loại layer trong mạng như sau:
- Convolution: CONV
- Pooling: POOL
- Fully Connected: FC

Bằng cách dùng kết hợp các layer cơ bản trên, người ta thiết kế ra rất nhiều mạng phức tạp, 
sâu để có thể giải quyết nhiều bài toán một cách hiệu quả.
