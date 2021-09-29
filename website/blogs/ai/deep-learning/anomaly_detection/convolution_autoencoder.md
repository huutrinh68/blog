---
title: Tìm hiểu về AutoEncoder sử dụng pytorch
date: 2020-01-10
categories:
 - ai
tags:
 - anomaly detection
---
Học từ cơ bản đi lên và một cách có hệ thống thì sẽ giúp cho chúng ta có được kiến thức chắc và nhớ lâu hơn.
Đây là bài viết đầu tiên trong chuỗi bài viết về Anomaly Detection, ở bài viết này mình sẽ sử dụng pytorch để thực hành về AutoEncoder.

## AutoEncoder là gì?
Trước tiên phải hiểu AutoEncoder nó là cái gì, và ứng dụng gì?

AutoEncoder là một kỹ thuật trong machine leanring, một kỹ thuật học máy không có nhãn dữ liệu. Nó có một ứng dụng phổ biến trong các bài toán về phát hiện lỗi, bất thường,
chính vì vậy mà mình lấy nó làm cái gốc để đi lên trong loạt bài về Anomaly Detection.

Bài viết này sẽ sử dụng CNN(convolution neural network) đối với tập dữ liệu nổi tiếng MNIST và áp dụng AutoEncoder vào nó, 
tất nhiên mình code bằng pytorch, framework xu thế của tương lại.

Để hình dung cho dễ, các bạn search thêm từ khóa autoencoder bằng hình ảnh trên google để thấy được mô hình đơn giản. Hình dưới đây là mình lấy từ wikipedia.
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Autoencoder_schema.png/220px-Autoencoder_schema.png">
</p>

Hiểu nôm na thì nó gồm 2 phần
- Encoder sẽ có nhiệm vụ mã hóa đầu vào thành một thông tin có chiều nhỏ hơn.
- Decoder sẽ có nhiệm vụ khôi phục lại thông tin đầu vào từ thông tin đã được mã hóa trên
Và để cho thông tin đầu vào và thông tin đầu ra được giống nhau thì 2 phần encoder và decoder đó phải học tập và điều chỉnh các thông tin bên trong chúng.
Nếu đưa một đầu vào khác nhiều so với thông tin đầu vào đã được học thì sẽ không thể khôi phục được đầu vào đó, khi đó ta nói thông tin đầu vào đó là bất thường, có lỗi.
Và đó là lý do vì sao nó được ứng dụng trong anomaly detection.


## Thực hành
Lý thuyết là vậy, còn thực hành thì làm sao?  
Mình sẽ áp dụng autoencoder cho tập dữ liệu MNIST(gồm các chữ số viết tay từ 0 đến 9)
