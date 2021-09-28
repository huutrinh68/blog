---
title: Stride convolution
date: 2018-10-08
categories:
 - ai
tags:
 - ai
---
Trong khi xây dựng các mạng CNN, khái niệm padding và stride là 2 trong nhiều khái niệm cơ bản. Bài này giới thiệu về stride.

![stride_convolutions](https://user-images.githubusercontent.com/8240899/134879804-aeb49290-34d8-451d-b995-4d5f9b75baf3.png)

## Stride là gì?
Stride đơn giản hiểu là bước trượt, số bước skip khi áp dụng phép biến đổi convolutions. 

Giả sử `stride = 2`, tức là khi tính áp dụng convolutions xong:
- Nhảy sang phải 2 pixel để tính áp dụng kernel vào đó tính tiép convolution cho những pixel ở vùng mới đó. 
- Cứ tính convolution xong lại dịch chuyển kernel đi 2 pixel tính covolutions cho đến khi hết.
- Bước dịch chuyển này được áp dụng cho cả chiều ngang lẫn chiều dọc.

## Kết luận
Tổng kết lại, ta có tóm tắt công thức sau

Output sẽ có kích thước là: phần nguyên cận dưới của `(n+2p-f)/s + 1 * [(n+2p-f)/s + 1]`
- Điều kiện `input size = n*n, padding = p`, `stride = s`, `kernel size = f`
- Trong đó [a] là phần nguyên cận dưới của a.
