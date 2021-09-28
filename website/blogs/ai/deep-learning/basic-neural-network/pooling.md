---
title: Giới thiệu về pooling
date:  2018-10-10
categories:
 - ai
tags:
 - ai
---
Trong convolution network, pooling là một lớp rất hay được sử dụng.
Dùng Pooling layer ta có thể biểu diễn lại các feature được chiết xuất ra một cách thu gọn và robust hơn.

## Pooling
Có 2 loại pooling
### 1. Max pooling
Giả sử đầu vào là một ảnh có kích thước `n*n`. 
- Xét các phần tử nằm trong vùng filter có kích thước `f*f`. 
- Khi đó thì ta lấy ra phần tử có giá trị lớn nhất trong filter đang xét. 
- Dịnh chuyển filter theo stride s và thực hiện công việc lấy max pooling. 
- Cứ làm thế cho đến khi filter quét hết ảnh đầu vào.

![pooling1](https://user-images.githubusercontent.com/8240899/134881605-7b6eea1c-57e1-4d36-99c9-20f630f14cba.png)


### 2. Average pooling
- Thực hiện công việc quét filter như giống với max pooling
- Chỉ khác là trong trường hợp này thì đầu ra sau mỗi lần quét filter đó là trung bình của tất cả các phần tử năm trong khoảng ảnh được filter đó quét.

![pooling2](https://user-images.githubusercontent.com/8240899/134881758-a70be573-597d-4fdb-9942-355cf1eb8b54.png)


### Chú ý
Lưu ý là trong pooling layer này thì không có parameter nào ta phải đi tìm cả. 
Chỉ có những hyper-parameter ta truyển vào, và những giá trị này sẽ quyết định kích thước, chiều sâu của lớp pooling.
- Padding: luôn luôn = 0 (padding=‘valid’)
- Stride: hyper-parameter
- Kernel size: hyper-parameter
- Pooling type: Max hay là average

Và mặc dù lớp này không có parameter, nhưng không có nghĩa là nó không ảnh hưởng gì đến việc tính toán back propagation.
