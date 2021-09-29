---
title: Đôi điều lịch sử anomaly detection
date: 2020-12-01
categories:
 - ai
tags:
 - anomaly detection
 - ai
---
## AutoEncoder (tính đến năm 2017)
### AutoEncoder
Giai đoạn này người ta ưa chuộng sử dụng AutoEncoder. Về bản chất, AutoEncoder thực chất là đi tìm sự khác biệt giữa một bức ảnh gốc và một bức ảnh đã được xây dựng lại.
Khi tổng của sử khác biệt đó lớn thì nó được tính xem như là bất thường. Mọi người có thể search từ khóa AutoEncoder Anomaly Detection thì sẽ ra rất nhiều kết quả.

### Variation AutoEncoder (VAE)
Đây là kỹ thuật áp dụng xác xuất vào trong AutoEncoder. Bằng cách này người ta làm tăng được độ chính xác hơn so với AutoEncoder.

### Thay đổi hàm loss cho VAE
Khi làm những bài toán này cho ngành công nghiệp, một vấn đề gặp phải là có những loại dữ liệu rất ít ảnh bất thường. Tức là tùy tần suất xuát hiện của ảnh bình thường 
mà tần suất xuất hiện của ảnh bất thường khác tăng hoặc giảm.

Để giải quyết vấn đề này người ta thay đổi một chút hàm số loss. 
Kỹ thuật này làm nên thành công trong việc phát hiện bất thường mà không còn phụ thuộc vào số lượng nhãn bất thường nữa.
