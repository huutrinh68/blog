---
title: Giới thiệu CNN đơn giản
date: 2018-10-11
categories:
 - ai
tags:
 - ai
---
Bài này sẽ giới thiệu về LeNet5. Một mạng CNN được YanLecun đưa ra.

![cnn_1](https://user-images.githubusercontent.com/8240899/134882498-3c80286b-3150-4cac-b154-b4a9866b3d86.png)

## LeNet5
Mạng gồm 5 lớp, trong đó có:
- 2 lớp convolutions là conv1 và conv2
- 2 lớp fully connected fc3 và fc4
- Một lớp softmax
Ở đây ta định nghĩa một lớp là phải chứa parameter. Vậy nên những lớp pooling không chứa parameter nên không được tính là một lớp riêng.
Pooling chỉ chứa các hyper-parameters như filter kernel, stride, pooling type (max/everage).

Lớp cuối gồm 10 class, dành cho bài toán image classification cho tập dữ liệu mnist. Thống kê về số parameter trong mạng, ta có được như thống kê sau.

![cnn_2](https://user-images.githubusercontent.com/8240899/134882592-71855c63-967d-4cdd-9d9f-6486061c6d87.png)

## Có bao nhiêu parameters?
Số parameters của conv1 là 208, được tính như sau:
- Do một lần filter quét trong ảnh thì nó cần 25 parameter để thực hiện convolution
- sau khi convolution xong thì dùng thêm một parameter ở đây là bias nữa để tính tính toán trước khi đưa kết quả tính được đó vào hàm hoạt tính. Vậy tổng cộng dùng 26 parameter.
  Thêm vào đó, ta có 8 filter `5*5` như thế (Chiều sâu của khối filter `5*5` là 8). Vậy tổng cộng lại có `8*26 = 208` parameters.
- Tương tự với cách tính đó ta tính được số parameter của các lớp tiếp theo.

Ta thấy được rằng, ở LeNet-5 này thì số lượng parameter còn khá nhỏ. Những bài toán lớn, sẽ cần mạng sâu hơn, lượng parameter sẽ nhiều hơn, có mạng sẽ lên đến hàng chục triệu parameters.
Những mạng sau như thế có khả nắng chiết xuất được nhiều đặc trưng của input, giúp nâng cao tính chính xác của phỏng đoán.
