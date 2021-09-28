---
title: Transfer learning
date: 2018-10-02
categories:
 - ai
tags:
 - ai 
---
## Mở đầu
Ngày nay kỹ thuật transfer learning và multi-task learning được sử dụng nhiều trong deep learning. Ở bài viết này sẽ nói sơ lược giới thiệu vè 2 kỹ thuật này.

## 1. Transfer learning
Transfer learning là một kỹ thuật dùng kiến thức đã được học ở tập dữ liệu này, áp dụng sang tập dữ liệu khác.

Ví dụ ta đã train một mạng với tập dữ liệu rất lớn, cắt bỏ lớp cuối, rồi add vào một lớp mới phù hợp với task mới của ta. 
Như vậy chỉ lớp output cuối cùng được thay đổi, còn lại các lớp trước đó là các lớp extract feature thì vẫn được giữ nguyên. 
Dùng mạng mới này train lại với tập data mới ta để thu được mạng phù hợp. Cách làm như này chính là transfer learning.
Khi nào thì nên thực hiện transfer learning.
Khi mô hình mạng mới và mạng cũ đều cùng input, chỉ khác số lượng node trong output etc.
Khi lượng data để train trên tập mới nhỏ.

## 2. Multi-task learning
Multi-task learning là cách train nhiều task riêng biệt bằng một mạng lớn một cách đồng thời.

Giả sử ta có task T1: nhận diện oto, task T2: nhận diện người đi bộ, task T3: nhận diện biển báo etc. 
Mặc dù ta có thể train nhiều mạng riêng lẻ để thực hiện từng task nhỏ, nhưng cách này vừa tốn thời gian, 
mà hiệu quả của model lại không tốt bằng cách gộp nhiều task T1, T2, T3 vào một mạng to rồi train đồng thời cả 3 task đó.

Bằng cách làm như thế, các low level feature được chiết xuất từ các tập dữ liệu của task T1, T2 có thể hỗ trợ cho task T3. 
Mặc dù bề ngoài thì các task chẳng có liên quan gì đến nhau. Nhưng bằng thực nghiệm thì người ta thấy rằng đem train tổng hợp các task như thế thì performance sẽ tốt hơn là train từng task với từng mạng nhỏ riêng rẽ.

Về mặt bản chất việc này chính là việc transfer kiến thức từ task này sang task kia một cách đồng thời.

Khi nào ta dùng multi-task learning được:
Tập dữ liệu của các task phải xấp xỉ nhau.
Bằng cách train đồng thời như thế, share low level feature có thể giúp cho model hơn hơn.
Train bằng dữ liệu của nhiều task đồng thời, nên tập dữ liệu lớn hơn, nên có thể dùng mạng lớn hơn để làm tốt đồng thời nhiều task.

## Kết luận
Mặc dù cả 2 kỹ thuật đều quan trọng, nhưng trong thực tế thì người ta hay dùng transfer learning nhiều hơn là multi-task learning. 
Có nhiều bài toán thể hiện performance rất tốt khi được dùng transfer learning.
