---
title: Làm gì khi phân bố data khác nhau
date: 2018-10-12
categories:
 - ai
tags:
 - ai
---
## Vấn đề
Phân bố data trên tập train và tập test khác nhau là nguyên nhân làm cho performance của model thấp. 
Để giải quyết vấn đề này thì ta làm thế nào?


## Hướng giải quyết 1
Nếu chỉ đơn giản là làm sao để phân bố 2 tập train và test giống nhau, thì có thể thay đổi tập test sao cho giống tập train???

Nghe có vẻ make sense. Nhưng cách này không ổn tí nào.

Vì tập ta thực sự quan tâm ở đây là dữ liệu test. Dữ liệu này là dữ liệu dùng để đánh độ tốt xấu của model.

### Ví dụ cụ thể
Trong bài toán phân loại mèo
- Tập train ta dùng dữ liệu lấy trên internet về, tất cả các ảnh hầu như có độ phân rải cao, sắc nét vì được chụp bởi các nhiếp ảnh chuyên nghiệp. 
- Ngược lại tập test, là tập ảnh được upload trực tiếp từ các mobile app, được chụp bởi người nghiệp dư, ảnh bị nhoè, bị bé etc. 
Và thực tế, model phải làm sao để phân loại được những ảnh mờ và nhoè như thế. 

Đây là lý do ta không thay thay đổi tập test, mặc dù nếu thay đổi thì sẽ dễ dàng tạo được ảnh có phân bố giống ảnh ở tập train.


## Hướng giải quyết 2
Thay đổi tập train???

Ở đây để thay đổi tập train sao cho có phân bố giống với tập test, thì ta có thể có những phương pháp như tạo nhiễu, làm mờ ảnh bằng nhiều cách khác nhau.

Chú ý một điều là nếu phương pháp làm nhiễu, mờ ảnh không có tính ngẫu nhiên, thì tập train sẽ mất đi tính tổng quát.

Ví dụ nếu ta làm mờ theo một cách, và áp dụng cách đó cho tất cả các ảnh trong tập train, thì model của ta chỉ có thể phân biệt được những ảnh bị làm mờ theo cách đó. 
Khi gặp loại ảnh khác thì hệ thống không hoạt động tốt. Điều này chính là overfiting.

### Ví dụ cụ thể
Thêm một ví dụ khác về cách tạo ảnh train. Ví dụ khi train model để nhận diện ôtô
- Bạn có thể nghĩ mình sẽ lấy ảnh oto trong video game, vì trong đó ảnh có vẻ rất thực, lấy ảnh oto trong video game rồi thêm noise các kiểu vào để tạo data train
- Nhưng thực tế cách này không hiệu quả, vì mặc dù ảnh trong video game rất đẹp nhưng chỉ có khoảng 20 loại oto
- Dù có thêm noise hay làm mờ gì đi nữa thì tập ảnh của bạn cũng không có tính tổng quát đủ để cover cho thực tế.
- Thực tế có nhiều hơn 20 loại oto, nhiều màu sắc, góc chụp etc.

### Kết luận
Khi vấn đề là train data và test data có phân bố không giống nhau, nói cách khác, chúng đến từ 2 nguồn khác nhau,
và cái ta quan tâm thực sự là hệ thống có hoạt động tốt trên tập test hay không.

Để giải quyết, ta thay đổi, biến đổi tập train bằng cách thêm nhiễu, làm mờ, xoay ảnh. Nhớ là thay đổi tập train chứ không phải tập test trong trường hợp này.
