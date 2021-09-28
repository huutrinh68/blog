---
title: Mention cho video
date: 2021-09-21
categories:
 - ai
tags: 
 - computer vision
 - opencv
 - python
---
## Mở đầu
Trong video, khi muốn mention cho một đối tượng nào thì ta sẽ vẽ lên các đối tượng đó những mũi tên hay những chú thích băng text.
Có nhiều cách để làm.

## Phương pháp 1
Dùng AI để detect rồi tracking đối tượng, sau khi tracking được thì với mỗi frame sẽ có tọa độ. Dựa vào tọa độ đó để thực hiện chú thích
- Cách này có điểm hay là tự động được, nhanh, chính xác với trong điều kiện khung hình và đối tượng không phức tạp. Tức là khi tracking và detection đạt kết quả cao thì dùng cách này là tuyệt nhất
- Điểm không hay là nó khá không chính xác với những điều kiện phức tạp, vì khi đó tracking sẽ không cho ra kết quả chính xác, ID của đối tượng nhảy lung tung
## Phương pháp 2
Dùng phần mềm chỉnh sửa ảnh bên thứ 3
- Nếu tìm được phần mềm phù hợp thì cách này cũng sẽ rất nhanh, chỉ cần cài đặt làm quen tool
- Tuy nhiên nhiều phần mềm chỉnh sửa video, ảnh lại chỉ có thể dùng cho windows, hoặc rất khó cài đặt và chạy ổn định trên Ubuntu (linux...)
## Phướng pháp 3
Cách tiếp theo là tự viết script để chú thích
- Điểm hay: Tùy chỉnh theo ý thích, dành cho ai thích code
- Điểm không hay: thủ công phát chán 😥

## Bài này hướng dẫn cách thứ 3 bên trên
Đầu tiên cần chuẩn bị python, opencv, numpy trong môi trường.
- Tham khác các nguồn khác để tự cài đặt python, numpy. Với opencv thì cài đặt như sau
  ```
  $ pip install opencv-python
  ```
- Tiếp theo chuẩn bị script như trong nội dung [file này](https://github.com/huutrinh68/blog/blob/master/code/opencv/mention.py)
  ```
  $ wget https://raw.githubusercontent.com/huutrinh68/blog/master/code/opencv/mention.py
  $ mkdir input output
  ```
- Trong folder input, đặt video muốn định dạng MP4 sau đó chỉ đường dẫn link đến script để thực hiện
  ```
  $ python mention.py --indir <input/mp4 file>
  ```
## Cách dùng
Sau khi video được show ra
 - click chuột phải vào đối tượng cần chú thích
 - nhấn phím [n] để chuyển sang frame tiếp theo
 - nhấn [q] để thoát chương trình
 - file kết quả sẽ được lưu dưới thư mục output

🍻 🍻 🍻 Check để hưởng thụ thành quả!

![mention](https://user-images.githubusercontent.com/8240899/134836705-898e729a-f7c8-469e-b814-9d77d4c6449a.png)

