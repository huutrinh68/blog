---
title: End to end deep learning
date: 2018-10-03
categories:
 - ai
tags:
 - ai
---
## Machine learning truyền thống
Khi làm một hệ thống AI ta cần rất nhiều bước như xử lý dữ liệu để chiết xuất ra các đặc trưng trong dữ liệu, 
rồi dùng những đặc trưng đó đem đưa vào học máy. 
Có nhiều bài toán yêu cầu có pipeline xử lý phức tạp, trong đó dùng nhiều đến bàn tay con người để chỉ ra cho máy đâu là những đặc trưng cần phải học. 
Đây chính là cách làm của machine learning truyền thống. Có nhiều bài toán mà mặc dù lượng dữ liệu để học ít, 
nhưng phương pháp truyền thống này cũng vẫn đưa ra kết quả cao.

## Deep learning hiện đại
Ngày nay, phương pháp truyền thống này dần được thay đổi bằng end-to-end deep learning.
Tức là tất cả những qui trình ở trên đều được gộp lại thành một khối rồi đưa vào trong mạng kiến trúc nào đó để học.
Con người không cần quan tâm đến đâu là những đặc trưng tốt nhất trong dữ liệu, việc chiết xuất ra những đặc trưng này mạng học máy sẽ tự động tìm ra cho ta.
Đơn giản là ta chỉ cần thu thập thật nhiều dữ liệu về, đánh nhãn cho dữ liệu rồi nhét hết vào mạng để học.
Phương pháp này tỏ ra rất hiệu quả và cho những kết quả vượt bậc trong những bài toán như nhận diện, hoặc các bài toán liên quan đến xử lý ngôn ngữ tự nhiên như dịch văn bản, 
chuyển từ giọng nói thành văn bản etc.

Tuy nhiên cái gì cũng có nhược điểm, nhược điểm của end-to-end deep learning là nếu lượng dữ liệu để train không thực 
sự đủ nhiều thì sẽ không cho kết quả cao. Lúc đó thì bài toán giải quyết bằng phương pháp machine learning truyền thống sẽ cho kết quả tốt hơn.
