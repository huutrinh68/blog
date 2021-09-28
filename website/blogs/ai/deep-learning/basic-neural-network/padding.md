---
title: Tìm hiểu về padding
date: 2018-10-10
categories:
 - ai
tags:
 - ai
---

## Padding
Trong mạng CNN, khi thực hiện phép convolution đối với một ma trận, ta chỉ chỉ định giá trị cho padding. Giá trị của padding sẽ quyết định kích thước của output.

![padding](https://user-images.githubusercontent.com/8240899/134883751-a4a070d1-6d81-4f9e-9fe5-db2cbe6a1fb7.png)

## Ví dụ cụ thể
- Ta có một ma trận vuông kích thước `6*6 (n=6)`, khi thực hiện convolution với một kernel có kích thước `3*3 (f=3)`
- Khi đó output ra sẽ có kích thước là `4*4 (n-f+1)*(n-f+1)`.

## Quan sát
Nhìn vào vị dụ trên, ta thấy kích thước của đầu ra bị giảm từ 6 xuống 4. Và ở đây ta được hiểu ngầm rằng padding `p=0`. 
Tức là không có padding, nói cách khác, ta không tạo thêm viền cho ma trận input.

Nếu ta chọn padding `p=1` cho ma trận đầu vào, thì đầu vào mới sau khi được thiết lập padding sẽ có kích thước là `8*8 (n=8)`. 
Khi đó đầu ra là ma trận có kích thước: `6 (n-f+1=8-3+1)`.

## Kết luận
Vậy nhắc lại, padding chính là option để khi biến đổi convolution cho ma trận, ta quyết định được kích đầu ra của ma trận sau biến đổi.
- Khi không chỉ định padding bằng con số cụ thể nào, người ta có 2 cách để setting cho padding mà ta thường gặp, đó là valid và same:
  - Valid: tương đương với việc không có padding
  - Same: khi đó đầu ra sẽ có kích thước giống đầu vào. Tức là `n+2p-f+1=n`. Tương đương với `2p+1=f => p=(f-1)/2`.

Thông thường convolution thường được xử dụng trong các bài toán xử lý ảnh, 
và ở các bài toán này, kernel size thường là các số lẻ như 3, 5, 7. Khi đó nếu `padding=same` thì tức là `p=1, 2, 3`.
