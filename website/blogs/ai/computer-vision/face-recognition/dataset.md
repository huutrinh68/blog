---
title: Dataset cho face recognition
date: 2021-09-08
categories:
 - ai
tags:
 - dataset
 - face recogntion
 - computer vison
 - deep learning
 - ai
---
Gần đây gặp nhiều project làm về phát hiện và nhận diện khuôn mặt (face recognition). Về tác vụ này thì người ta đã nghiên cứu và thực hiện từ khá lâu rồi. Như ở Nhật thì có một số công ty như Panasonic hay NEC đều có những solution đứng top thế giới về độ chính xác và tốc độ (Có thể tham khảo [tại đây](https://www.nec.com/en/press/201910/global_20191003_01.html?fbclid=IwAR23EDLci97GBPfehMgEnaKyqDpLWlELCehEJy_cz99hQTR7PPckuhziao8)). 

Ở bài viết này mình thống kê một số datasets được public

## **Dataset cho training**

1. [CelebA](http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html?fbclid=IwAR1VeZyPhkTzsoD_Fq8ItPwvyA0W1MD7fHO0v7MVaps1oX1fSt95q5i8Wfo)

Dành cho mục đích phi thương mại, nghiên cứu. Data này gồm 200k ảnh những người nổi tiếng(10k ids), được thu thập và cung cấp từ MMLAB, một lab nghiên cứu của một trường đại học ở HongKong.

2. [Face Image with Marked Landmark Point](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.kaggle.com%2Fdrgilermo%2Fface-images-with-marked-landmark-points%3Ffbclid%3DIwAR274bw0NLJ7q-To2fFaAHF6qXvnFZ4N9ODRzJm46dJSenJhk8fr0YqfQ7A&h=AT3d7m3AbSHvK_n3BW6OkXS4WQ2o7OvEXQoBYxUZU-_orAx7HSwPlUN1dA2ingVZOQCofG0QibZC2RPxDwQF1Y-0pKXNNRCNq3hNaBGNvStvCwFri_4SSqF4r9kw9hqNLNOLdkuBrUGjP3SuqaTd6C_F)

Data này gồm 7k ảnh với mỗi ảnh đã được đánh nhãn cho keypoints (các điểm đặc trưng trên khuôn mặt). Trên mỗi ảnh tối đa có 15 keypoints, và thông tin này được lưu riêng trong file CSV.

3. [Casia WebFace](https://drive.google.com/u/0/uc?id=1Of_EVz-yHV7QVWQGihYfvtny9Ne8qXVz&export=download&fbclid=IwAR3X63NyYmSMKBCNWREgExvvSHxxU-FK4CUMLBqqiC60zwZsOiwVXtzYHKE)

Gồm 453453 ảnh cho 10575 ids (Các bạn Tàu cung cấp).

4. [UMDFaces](https://www.dropbox.com/s/fv0y30mawsejweu/faces_umd.zip?dl=0&fbclid=IwAR2fV-J0jWTBBIbrAMhSX2gv-rTYAmFcKMsHjzbuwFqsIkOMhcWLFZNoNyU)

Dataset gồm 367888 ảnh cho 8277 ids.

5. [VGGFace2](http://www.robots.ox.ac.uk/~vgg/data/vgg_face2/?fbclid=IwAR0hTUjT-GtpF3aKUEUkey3Sq_p8AYageV-GJi7MmIh_GayQtqc7m5IzaMQ)

Link tải từ [dropbox](https://www.dropbox.com/s/m9pm1it7vsw3gj0/faces_vgg2_112x112.zip?dl=0&fbclid=IwAR0MUy5bc68AAsFcVqAXt6Mzgq59SwsPtxpkqtgugneHZZhZ7r9xzlckRb4). Dataset gồm 3.31M ảnh cho 9131 ids. 

6. [MS1M-IBUG](https://megapixels.cc/msceleb/?fbclid=IwAR3HKZihGvCMRDHV5EXFu94AE9ITSfOcSk-8_Mtep0GCt82pkEs9TH9z3Ec)

Link download [tại đây](https://www.dropbox.com/s/4de5ogqj4vargsw/faces_ms1m-refine-v1_112x112.zip?dl=0&fbclid=IwAR0wGytbPRvGBb8uUYl_KW8bZhkSUdqqqlYeDED1cgX3lpVzjul1mBwQi7s). Dataset gồm 3.8M ảnh cho 85k ids. 

7. [MS1M-ArcFace](https://www.dropbox.com/s/wpx6tqjf0y5mf6r/faces_ms1m-refine-v2_112x112.zip?dl=0&fbclid=IwAR2p057V0C_VZZpe1o0yGLZMxqX-OMu3D5GuZ_sckuVW-cgjU_aa1MRODQE)

Dataset gồm 5.8M ảnh cho 85k ids. Dataset này là một version mở rộng của tập MS1M-IBUG trên.

8. [Asian-Celeb](https://www.dropbox.com/s/5cd1ppfqprjluaq/faces_glintasia.zip?dl=0&fbclid=IwAR1pa2-Q4-9c2ejSfp46tSKnCLvImEKemUOz2qZSKb3f-vSsTYGLV0An708)

Dataset gồm 2.8M ảnh cho 94k ids.

9. [DeepGlint](https://www.dropbox.com/s/4x39o2x40rewl5l/faces_glint.zip?dl=0&fbclid=IwAR1u4PO3IWUHK96n9capUAZVI1-DYrDL0EF-M4DnXzgCRR5s_j7d7SkDiOo)

Dataset gồm 6.75M ảnh cho 181k ids.

10. [IMDB-Face](https://drive.google.com/open?id=134kOnRcJgHZ2eREu8QRi99qj996Ap_ML&fbclid=IwAR3J6SOg8T_ql-3eSipk2htERFMQMDDgr-ewJOs2prauRht4hgnrt-CUiAI)

Dataset gồm 1.7M ảnh cho 59k ids.

11. Celeb500k

Hiện tại chưa tìm thấy link download. Data này rất lớn, gồm 50M ảnh cho 500k ids.

12. MegaFace

Download [tại đây](http://megaface.cs.washington.edu/dataset/download.html?fbclid=IwAR3UW3I6grilk-JFxpE62HIL3-mzpl0c85Pys3tsqOIBsYRRCndIUVKQdVc). Dataset gồm 4.7M ảnh cho 672k ids. 

## **Dataset cho validation**

1. [CFP-FP](http://www.cfpw.io/?fbclid=IwAR3SZHaYYWIPH1pNI_5GOPLXEgenptCZCMYGJuf2cylc8CKQEleX4V9t8s8)

Dataset gồm 7k ảnh với 500 ids.

2. [AgeDB](https://ibug.doc.ic.ac.uk/resources/agedb/?fbclid=IwAR0FeJtXMelD7CWP5ORakjmXQ7kv5vMTnoOrXbgVVban4VgH7WPmxGjDj9k)

Dataset gồm 12240 ảnh cho 570 ids.

3. [LFW](http://vis-www.cs.umass.edu/lfw/?fbclid=IwAR2egSCS-c2kjJKY-fWlhJrNDwDeD-2ycYg_WZ6TirHO7yDNe2m4XecpCZw)

Dataset gồm 13233 ảnh cho 5749 ids. 

4. [CALFW](http://www.whdeng.cn/CALFW/index.html?reload=true&fbclid=IwAR1buoHEsUjR4FmCOnZ2TNqPyUi3KFZW4TUZ-6o3um7oM56QFxZZaAWAHM8)

Một phiên bản nâng cấp của tập LFW. Cũng bao gồm 13233 ảnh cho 5749 ids.
