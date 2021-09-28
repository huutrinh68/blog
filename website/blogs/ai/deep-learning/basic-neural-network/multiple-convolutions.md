---
title: Multiple convolutions
date: 2018-10-05
categories:
 - ai
tags:
 - ai
---
Ở bài này làm quen với khái niệm multiple convolutions
![multiple_convolutions](https://user-images.githubusercontent.com/8240899/134874214-532b5230-482c-46ec-8e5d-66012fd76ec4.png)

## Quan sát
Ta thấy thường thấy trong computer vision, khi thực hiện convolution (tích chập/phép cuốn chiếu) một bức ảnh có 3 channel `R,G,B` 
có kích thước hình khối `n*n*nc (nc= number of channel)` với một filter, 
thì filter cũng phải có kích thước chiều thứ 3 bằng đúng số channel của ảnh đầu vào. 

## Nghĩa là?
Nghĩa là filter sẽ có dạng hình khối, với kích thước `f*f*nc`.
Với `padding = 0` và `stride = 1`, và chú ý thêm là phép convolutions này không thực hiện trên từng channel của ảnh đầu vào, mà thực hiện đồng thời trên cả 3 channel, 
vì filter có dạng khối. 

## Ứng dụng
Khi đó đầu ra sẽ có kích thước là `(n-f+1)*(n-f+1)*1`. Do ta chỉ thực hiện với một filter nên chiều ra chỉ là một ma trận 2 chiều, với kích thước bị giảm đi. 
Dựa vào đặc tính này, ta có thể thực hiện nhiều filter lên ảnh đầu vào, giả sử filter đầu tiên là một filter để chiết xuất edge theo chiều ngang, 
filter thứ 2 là filter dùng để chiết xuất edge the chiều dọc. Sau khi thực hiện cả 2 filter, ta kết hợp chúng lại với nhau.

## Multi convolutions
Nếu thêm một filter nữa được áp dụng để convolution, thì sau khi kết hợp 2 đầu ra của 2 convolution lại với nhau, 
ta được một đầu ra mới có kích thước là `(n-f+1)*(n-f+1)*filter_number`.

Với cách làm thế này, ta có thể áp dụng rất nhiều filter vào đầu ra để chiết xuất đặc trưng, 
tất nhiên tất cả các convolutions đó đều có thể được tính toán song song mà không ảnh hưởng đến kết quả cuối cùng.
