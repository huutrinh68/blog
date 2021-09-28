---
title: Tại sao dùng convoltion network cho computer vision
date: 2018-10-01
categories:
 - ai
tags:
 - ai
 - convolution
---
## Câu hỏi
Tại sao lại dùng convolution network trong computer vision?

Để trả lời thì có mấy lý do sau.
## 1. Parameter sharing
![why_convolution_1](https://user-images.githubusercontent.com/8240899/134871770-b2ddc5f7-65dd-4f6b-9ffd-0f58c8df6ebf.png)

Giả sử một layer có `32*32*3 = 3072` node. Sang layer tiếp theo có `28*28*6 = 4704` node. 
Khi đó nếu nối tất cả các node lại với nhau thì số lượng parameter sẽ là: `3072*4704 ~ 14M` parameters. 
Số lượng parameter giữa 2 lớp thôi đã lên đến con số hàng chục triệu. 
Nếu ta tăng số kích thước ảnh đầu vào lên cao hơn nữa, giả sử là `1000*1000*3` thì sẽ rất không khả thi trong tính toán.

Người ta đưa vào khái niệm parameter sharing, tức là dùng một loại filter của phần này cho cả phần khác nữa. 
Trong convolutional network, khối filter `3*3` chẳng hạn, sẽ được quét toàn bộ ảnh, tức là dùng chung cho toàn trong một bức ảnh. Đấy chính là parameter sharing. 
Các parameter này, hay nói cách khác là các filter này chính là các feature detector, dễ hiểu hơn thì feature detector có thể dùng chung cho nhau giữa các phần khác nhau được. 
Bằng cách này lượng parameter kết nối giữa các layer sẽ ít đi, và tính toán sẽ khả thi hơn cho các mạng sâu hơn. 

Thêm vào đó, việc làm giảm số parameter đi còn có ý nghĩa là làm giảm overfiting của model đi.
![why_convolution_2](https://user-images.githubusercontent.com/8240899/134871870-652e26ab-e3a7-46f3-bd0d-b037f8273bf4.png)

## 2. Sparsity of connections
Đươc định nghĩa là ở mỗi phần của output, chỉ phụ thuộc vào một phần nào đó của input, chứ không phụ thuộc vào cả bức ảnh input. 
Filter sẽ có tác dụng lớn trong việc này, thay vì kết nối tất cả các node của 2 lớp lại với nhau,
ta chỉ dùng filter chung để kết nối các phần tử ở trong phạm vi mà filter đó quét.

## 3. Robust với translation invariance
Nói ngắn gọn thì đây là tính bất biến đối với sự dịch chuyển.

Khi ta dịch chuyển bức ảnh con mèo sang trái hay phải một chút thì con mèo vẫn cứ phải là con mèo.
Và convolutions network thì làm rất tốt việc này, dù ta có dịch chuyển hay quay bức ảnh con mèo đi một chút thì nó vẫn nhận ra được đó là ảnh con mèo.
Việc convolution network tự động làm được việc này chính là nhờ việc ta đã áp dụng cùng một filter vào tất cả các vị trí của bức ảnh.

Vì 3 lý do trên mà convolution network tỏ ra rất hiệu quả trong lĩnh vực computer vision.
