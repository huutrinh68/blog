---
title: Những vấn đề trên tập train/test
date: 2018-10-09
categories:
 - ai
tags:
 - ai
---
## Câu hỏi
- Chuyện gì sẽ xảy ra khi training và test model ở 2 tập dữ liệu khác nhau?
- Giả sử có 2 nguồn dữ liệu ảnh
  - Nguồn 1: thu thập dữ liệu ảnh về mèo từ trên mạng về để train một model nhận diện mèo. Các ảnh thu được đều là ảnh rõ nét, 
    có không có nhiều nhiẽu, ko bị blur, bởi vì hầu hết chúng được chụp bằng những thợ ảnh chuyên nghiệp. 
  - Nguồn 2: sau khi training xong model, ta gặp vấn đề thực tế là ảnh dùng để test của ta lại là ảnh được chụp từ mobile app, ảnh bị nhiễu, bị blur, 
    vì ảnh được chụp từ thợ ảnh nghiệp dư.
- Thêm một giả định nữa, ảnh từ nguồn 1 dành tập training rất nhiều, khoảng 200.000 ảnh, còn ảnh từ tập test lại rất ít, chỉ 10.000 ảnh. Ta có thể làm gì?

## Các phương án có thể làm
Sắp xếp lại phân bố tập của tập train, dev/test.
### Option1
- Trộn 2 tập lại với nhau, để chia tập train, dev/test lại. Tập được trộn lại sẽ có 210.000 ảnh, ta lấy ra 205000 ảnh để train,
  tập dev và tập test sẽ có mỗi tập 2500 ảnh. Bằng cách này có điểm lợi mà cũng có điểm chưa tốt.
- Điểm tốt: Tập train, dev/test đã có cùng phân bố vì được trộn từ 2 nguồn ảnh lại với nhau.
- Điểm chưa tốt: Mặc dù trộn 2 nguồn ảnh lại với nhau, nhưng do số lượng ảnh đến từ nguồn web vẫn quá nhiều(200.000)
  so với ảnh đến từ nguồn mobile app(10.00). Điều này dẫn đến chuyện trong tập dev/test, tính trung bình thì có tới 2381 ảnh đến từ nguồn web, 
  trong khi chỉ có 119 ảnh đến từ nguồn mobile app. => Vì tính bất hợp lý này mà ta sẽ không chọn option1.

### Option2
- Dùng toàn bộ ảnh thu được ở nguồn 1, và 5000 ảnh thu được ở nguồn 2 làm tập train, tập dev/test sẽ chứa mỗi tập 2500 ảnh của nguồn 2.
- Điểm lợi: Đâu là dữ liệu thực sự quan tâm. Ở trường này, dữ liệu ta thực sự quan tâm chính là dữ liệu đưa vào để test từ nguồn mobile app.
  Biết được điều này thì ta tập trung phát triển system sao cho system đưa ra kết quả tốt trên tập dev/test, tập dữ liệu chứa các ảnh thu từ nguồn mobile app.
- Điểm bất lợi: Phân bố của tập train và tập dev/test khác nhau. Nhưng vấn đề này sẽ được giải quyết bằng những technical khác,
  và hệ thống sẽ có kết quả tốt được nên không đáng lo lắm.

Trên đây là cách để xây dựng tập train và dev/test từ 2 tập dữ liệu khác nhau. Bằng cách này thường thì performance của hệ thống sẽ được cải thiện hơn.
