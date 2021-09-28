---
title: Các vấn đề liên quan đến bias, variance với tập dữ liệu
date: 2018-10-06
categories:
 - ai
tags:
 - ai
---
## Bài toán
Giả sử human error là xấp xỉ 0%. Và sau khi train và test model, ta thu được kết quả như sau:
- training error: 1%
- dev/test error: 10%

## Nguyên nhân và cách giải
Ở đây ta kết luận được điều gì?
- Nguyên nhân 1
  - Thuật toán cho model chưa tốt, hoặc high variance => dẫn đến overfiting.
- Nguyên nhân 2
  - Tập train và tập dev có phân bố khác nhau (Khác nguồn data etc.) nên dẫn đến kết quả trên tập dev không tốt.

Nguyên nhân có thể là 1, hoặc 2, hoặc cả cái trên. Để xác định được nguyên nhân dẫn đến kết quả tệ như trên, ta làm như sau
- Chia lại dữ liệu train, dev, test thành train, train/dev, dev, test. 
- Trong đó tập train/dev sẽ là tập con được lấy ra từ tạp train, có cùng phân bố data với tập train.
- Nhưng tập train/dev này sẽ không được xử dụng trong khi train, mà sẽ dùng để test thay cho tập dev ở trên.

Làm như thế này, ta sẽ xác định được nguyên nhân performance không tốt của model có phải là do tập train không cùng phân bố với tập dev hay không. 
## Giả thuyết 1
Ở đây giả sử sau khi chia lại dữ liệu, test lại model ta thu được kết quả như dưới:
- training error: 1%
- train/dev error: 9%
- dev/test error: 10%

OK, vậy là có thể kết luận nguyên nhân không phải do tập train và test không cùng phân bố dữ liệu. 
Bời vì khi ta test trên tập train/dev là tập được tạo ra bằng phân bố của tập train thì kết quả cũng không khác so với ban đầu là mấy. 
Chỉ giảm từ 10% xuống còn 9%. Bằng cách này, ta có thể loại trừ được nguyên nhân 2, 
và có thể kết luận performance kém của model là do nguyên nhân 1, do thuật toán chưa tốt, hoặc do bị overfitting.

## Giả thuyết 2
Ngược lại, có kịch bản là sau khi train và test lại bằng cách chia data mới, ta thu được kết quả sau:
- training error: 1%
- train/dev error: 1.5%
- dev/test error: 10%

So sánh 1.5% với 10%. Ta thấy được rằng nguyên nhân là do có sự không khớp nhau về phân bố datta ở đây. 
Nếu test trên tập dev thì kết quả là 10% error. Trong khi nếu test trên tập train/dev, có cùng phân bố data thì thu được kết quả rất ok, chỉ có 1.5% error.

## Giả thuyết 3
Xét thêm trường hợp nữa, nếu kết quả test như sau:
- humman error: xấp xỉ 0% (Con người hầu như chắc chắn dự đoán đúng).
- training error: 10%
- train/dev error: 11%
- dev/test error: 12%

Nhìn vào kết quả này, ta có thể thây được mô hình đang bị high bias, tức là đã bị underfiting, không học được nhiều từ train data.

## Giả thuyết 4
Nếu kết quả test như sau:
- humman error: xấp xỉ 0% (Con người hầu như chắc chắn dự đoán đúng).
- training error: 10%
- train/dev error: 11%
- dev/test error: 20%

Kết quả trên nói cho ta biết rằng mô hình đang bị under fitting (so sánh 0% với 10%), 
hơn nữa còn gặp phải vấn đề về không khớp phân bố data của tập train và tập test (So sánh 11% với 20%). 

## Kết luận
Nói một cách tổng quát thì:
- Khoảng cách của (human error, training error): cho ta biết được độ bias của model, model có thể tiến thêm bao nhiêu nữa để training error đạt mức gần với human error hơn.
- Khoảng cách của (training error, training/dev error): cho ta biết được mức độ variance của model.
- Khoảng cách của (training/dev error, dev/test error): cho ta biết được mức độ không đồng bộ của phân bố dữ liệu lúc train và test của model.
- Bằng cách tính toán các thông số trên, ta sẽ biết được model của ta đang gặp phải vấn đề gì. 
  - Đang bị overfiting hoặc underfiting hay phân bố data trên không tập không giống nhau.

Ở bài tiếp theo mình sẽ nói về cách giải quyết khi gặp phải vấn đề phân bố data trên tập train và test là không giống nhau.
