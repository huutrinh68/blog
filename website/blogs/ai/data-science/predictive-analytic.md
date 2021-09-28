---
title: Tìm hiểu về mô hình phân tích dự đoán
date: 2021-09-08
categories:
 - ai
tags:
 - ai
---
## Predictive Analytics là gì?
Đây là một thuật ngữ ám chỉ việc dùng dữ liệu trong khóa khứ, các thuật toán thống kê và học máy với mục tiêu là để dự đoán những gì có thể xuất hiện trong tương lại.
Bằng việc áp dụng kỹ thuật này người ta có thể dự đoán xu thế, giảm rủi do, tăng doanh số cho business. Nói một cách khác, khi có thật nhiều dữ liệu,
chúng ta có thể trả lời được câu hỏi liệu chuyện gì có khả năng cao sẽ diễn ra, và chúng ta có thể làm gì để đối ứng với việc đó.  
Với nhiều công ty, predictive analytics không còn là gì mới mẻ, nhưng gần đây, cùng với xu thế BigData thì công nghệ này càng trở lên hót hơn.
Dưới đây sẽ là một số ví dụ áp dụng predictive analytic trong trong cuộc sống của chúng ta.
- Các nhà nghiên cứu của các trường đại học dự đoán khả năng ly hôn của các cặp vợ chồng, dựa trên nhũng dứ liệu đã thu thập được từ nhiều năm trước.
- Facebook và Linkedln dự đoán các kết nối cá nhân, đưa ra cho bạn danh sách những người bạn có thể kết bạn.
- Các trang kết nối hẹn hò cố gắng đưa ra dự đoán các cặp có khả năng hẹn hò, phù hợp với nhau dẫn đến khả năng kết hôn cao.
- Amazon dự đoán nhu cầu mua sắm của khách hàng, kết quả là 35% lượng hàng bán của Amazon đến từ recommendation system.
- Telenor: dự đoán khách hàng nào sắp rời bỏ sẽ rời bỏ công ty của mình để có chiến lược giữ chân khách hàng.

## Để xây dựng một Predictive Analytics System gồm 7 bước chính
### Định nghĩa
Bước này gồm rất nhiều định nghĩa buộc ta phải nêu rõ ngay từ ban đầu, ví dụ như: Mục tiêu của hệ thống là gì,
độ chính xác bao nhiêu? Ảnh hưởng thế nào, bao nhiêu đến Business? Những dữ liệu nào sẽ được dùng? etc. 
### Thu thập dữ liệu
Thu thập càng nhiều và đa dạng thì càng tốt. Khi không có dữ liệu nhiều và đa dạng thì thuật toán có tốt đi nữa cũng khó cho kết quả dự đoán tốt.
### Phân tích dữ liệu
Ở bước này, ta cần phân tích và chiết lọc ra các giá trị cốt lõi nằm rải rác đâu đó trong dữ liệu.
Hay tìm ra các mối liên hệ giữa những thuộc tính của dữ liệu, từ đó lập ra các giả thiết.
### Thống kê
Ở bước này, dùng xác suất thống kê để kiểm chứng lại các giả thiết được lập ra ở bước trên. Đa phần mọi người thường bỏ qua bước này,
mà chỉ phân tích dữ liệu đưa ra các đồ thì rồi đưa kết luận. Thực sự sau khi phân tích thì thứ mình đưa ra chỉ có thể là giả thiết,
giả thiết đó thuyết phục được hay không thì rất cần có xác xuất thống kê kiểm định lại. Chính vì thế bước này là một bước khó trong khi xây dựng hệ thống.
### Xây dựng mô hình dự đoán
Đây là phần lõi của hệ thống. Để cho độ chính xác của hệ thống được cao, người ta không dùng một thuật toán cố định nào cả,
mà thường sẽ kết hợp nhiều thuật toán với nhau, kết quả dự đoán cuối cùng sẽ là kết quả dự đoán của nhiều thuật thoán, nhiều mô hình kết hợp lại với nhau.
Phương pháp này có tên là Ensemble method.
(ở đây nói qua về Ensemble một chút: Tại sao trong học máy, Ensemble method lại có tính hữu dụng cao?
Vì đơn giản nó giống như một phương pháp biểu quyết rồi quyết định theo số đông để đưa ra kết quả có độ tự tin cao hơn. Giả sử ta có 25 mô hình học máy,
mỗi một mô hình sẽ có xác suất đưa ra dự đoán sai là 0.35. Vậy nếu theo phương pháp biểu quyết theo số đông, khi ta kết hợp các mô hình này lại để dự đoán,
sẽ cần ít nhất 13 mô hình cho ra kết quả sai, ta mới đưa ra kết luận là kết quả dự đoán của mô hình là sai. Và tất nhiên khí đó,
xác xuất để 13 mô hình đều dự đoán sai sẽ dễ dàng tính được bằng 0.06.
So sánh xác suất dự đoán sai của mô hình đã áp dụng Ensemble method (0.06) và xác suất dự đoán sai của mô hình đơn lẻ ban đầu (0.35)
ta thấy rất rõ được sức mạnh của Ensemble method.)
### Deploy
Deploy mô hình lên cloud để sử dụng.
### Giám sát
Cuối cùng là giám sát xem mô hình chạy có ổn hay không? Chỗ nào cần sửa chữa bổ sung, hoặc mô hình dự đoán bị yếu phần nào,
mạnh phần nào? Bằng việc phân tích này, ta sẽ bổ sung dữ liệu phù hợp để học nhằm cải thiện độ chính xác.
