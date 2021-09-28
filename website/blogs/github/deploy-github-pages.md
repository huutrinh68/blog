---
title: Customize domain for github pages
date: 2021-09-16
categories:
 - github
tags: 
 - github
 - deploy
 - domain
 - github-pages
---
Khi deploy với web tĩnh lên github page, ta sẽ nhận được domain mặc định là ```<user>.github.io```.  
Giờ chúng ta muốn dùng một domain khác thay cho domain mặc định này thì sẽ làm theo các bước sau:
- Đăng nhập vào phần quản lý DNS (có thể dùng các dịch vụ setting DNS như cloudflare)
- Thêm vào CNAME record, trỏ tới domain mà bạn muốn chuyển hướng
- Trong repository source code, tạo một file CNAME với nội dung là tên domain bạn muốn đặt, nó phải được trùng khớp với nội dung đã đăng ký CNAME record
- Sau cùng vào phần cài đặt ```repository setting``` > ```github pages setting``` > điền tên domain vừa đặt ở trên > save lại
- Enable phần https lên. Nếu option này không cho enable thì remove domain name đi rồi add lại để load lại config từ cloudlare
- Nếu mọi thứ OK thì kiểm tra lần cuối bằng cách access vào domain đã đăng ký xem đã load trang thành công chưa
