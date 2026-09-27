# DỰ ÁN: WEBSITE NHIẾP ẢNH GIA CHUYÊN NGHIỆP & HỌC VIỆN ĐÀO TẠO TRỰC TUYẾN
**Y VÕ VISUAL & MASTERCLASS ACADEMY**

---

## 1. Tổng Quan Dự Án & Định Hướng Thiết Kế

Website được xây dựng với phong cách **Luxury Dark Editorial & Cinema** lấy cảm hứng từ các tạp chí nhiếp ảnh quốc tế danh tiếng (*Vogue*, *Harper's Bazaar*, triển lãm nghệ thuật *Leica* & *Hasselblad*):
- **Bảng màu cao cấp**: Nền tối huyền bí (`#07080a`, `#0e1117`, `#131720`), ánh kim hoàng gia Gold Accent (`#d4af37`, `#f59e0b`), viền kính mờ Glassmorphism và typography sang trọng kết hợp giữa **Cinzel**, **Playfair Display** và **Plus Jakarta Sans**.
- **Địa chỉ mã nguồn**: `/Users/linhvu/Desktop/APP Antigravity IDE/pro-photo-studio`
- **Địa chỉ máy chủ cục bộ**: [http://localhost:5173/](http://localhost:5173/)

---

## 2. Chi Tiết Các Tính Năng Đã Hiện Thực

### 2.1. Triển Lãm Tác Phẩm Nghệ Thuật (Portfolio & High-Res Lightbox)
- **Danh mục ảnh phong phú**:
  - *Cưới & Phóng sự cảm xúc (Wedding & Elopement)*
  - *Chân dung nghệ thuật (Fine-Art Portrait & Chiaroscuro)*
  - *Phong cảnh & Du ký (Landscape & Nature)*
  - *Thương mại & Thời trang (Haute Couture & Commercial)*
  - *Đường phố & Đời thường (Street Photography)*
- **Bộ lọc danh mục mượt mà & Tìm kiếm thời gian thực**: Tìm theo địa điểm (Sapa, Hội An, Huế, Tà Xùa...), loại máy ảnh hoặc ống kính.
- **Lightbox toàn màn hình đỉnh cao**:
  - Xem ảnh phóng to, hỗ trợ phóng to/thu nhỏ (Zoom in / Zoom out / 100%), chế độ Toàn màn hình (Fullscreen mode).
  - Điều hướng bằng phím mũi tên bàn phím (`←`, `→`) hoặc nút điều hướng trên màn hình.
  - **Bảng thông số chụp máy ảnh (EXIF Pro Panel)**: Body máy (Sony A7R V, Hasselblad X2D 100C, Leica M11), Ống kính (50mm f/1.2 GM, 85mm f/1.4 GM), Khẩu độ (f/1.4), Tốc độ màn trập (1/800s), Độ nhạy sáng (ISO), Tiêu cự, Địa điểm và **Câu chuyện hậu trường đắt giá**.
  - Tương tác thả tim (Like) thời gian thực và nút tải ảnh chất lượng gốc 4K.

---

### 2.2. Hệ Thống Khóa Học Trực Tuyến & Phòng Học LMS
- **4 Khóa học Masterclass thiết kế bài bản**:
  1. *Masterclass: Nghệ Thuật Ánh Sáng & Bố Cục Chân Dung Đỉnh Cao* (18 giờ • 24 bài 4K • Tặng 20 Presets).
  2. *Khoá Học: Phù Thuỷ Màu Sắc - Retouch Da & Tone Film Chuẩn Editorial* (15 giờ • 20 bài • Tone Kodak Portra 400).
  3. *Khoá Học: Nhiếp Ảnh Cưới & Phóng Sự Cảm Xúc (Wedding Documentary Pro)* (22 giờ • 28 bài thực chiến).
  4. *Nhập Môn Nhiếp Ảnh: Làm Chủ Máy Ảnh & Bố Cục Thị Giác Trong 7 Ngày* (8 giờ • 14 bài cốt lõi).
- **Trang Chi Tiết Khóa Học (Course Detail Modal)**:
  - Mục tiêu khóa học, đối tượng phù hợp, yêu cầu thiết bị.
  - Giáo trình chi tiết theo từng Chương (Modules) và từng Bài học (Lessons).
  - **Trình xem học thử miễn phí (Free Preview Video)**: Cho phép học viên chưa mua vẫn xem được video bài mở đầu.
- **Phòng Học Trực Tuyến Chuẩn LMS (Classroom Cinema View)**:
  - Video player chuyên nghiệp với tua nhanh/lùi bài, chỉnh tốc độ phát (0.75x, 1x, 1.25x, 1.5x).
  - Sidebar danh sách bài học kèm thanh tiến độ học tập tự động tính `%` hoàn thành.
  - Tích chọn "Đánh dấu hoàn thành bài này" lưu trữ trực tiếp vào `localStorage`.
  - **Tab Tài Nguyên**: Tải trọn bộ 20 Presets Lightroom (.XMP cho PC, .DNG cho Mobile), Ebook sơ đồ ánh sáng PDF, Thư viện file RAW 61MP thực hành.
  - **Tab Diễn Đàn Hỏi Đáp**: Học viên gửi câu hỏi và nhận giải đáp trực tiếp từ Nhiếp ảnh gia Y Võ.

---

### 2.3. Cổng Thanh Toán Chuẩn Việt Nam (VietQR / MoMo / VNPAY)
- **Tự động sinh mã VietQR chuẩn ngân hàng**:
  - Mã QR tự sinh theo chuẩn Napas 24/7 (Techcombank `1903 8888 6688` - Chủ TK `Y VO`).
  - Tự động đính kèm Số tiền đơn hàng và Mã đơn hàng duy nhất (`ORD-xxxxx`).
  - Hỗ trợ quét qua tất cả ứng dụng ngân hàng tại Việt Nam (MBBank, Vietcombank, Techcombank, VPBank...) và Ví điện tử.
- **Cổng Ví MoMo QR & VNPAY / Thẻ ATM Nội địa**.
- **Tính năng sao chép thông minh 1-click**: Sao chép Số tài khoản, Sao chép Số tiền chuẩn xác, Sao chép Nội dung chuyển khoản.
- **Đồng hồ đếm ngược 15:00** giữ chỗ học viên.
- **Nút kiểm thử tức thì (Mock Webhook Simulation)**: `⚡ [Demo Test] Xác Nhận Đã Thanh Toán Thành Công` giúp người dùng và nhà phát triển kiểm tra toàn bộ luồng mua hàng mà không cần chờ chuyển khoản thực tế.
- **Hiệu ứng pháo hoa Confetti** rực rỡ khi thanh toán thành công, tự động kích hoạt khóa học vào tài khoản và chuyển thẳng vào phòng học!

---

### 2.4. Quản Lý Người Dùng & Xác Thực Bằng Số Điện Thoại + OTP SMS
- **Đăng ký tài khoản cực nhanh**: Chỉ cần **Số điện thoại** + **Họ tên** (Hoàn toàn không bắt buộc email).
- **Mô phỏng xác thực OTP qua SMS**:
  - Hệ thống tự động tạo mã OTP 6 chữ số ngẫu nhiên (ví dụ `892410`).
  - Hiển thị thông báo Toast tin nhắn SMS mô phỏng.
  - Nút **"Tự Điền Nhanh" (Auto-fill OTP)** tiện lợi, 6 ô nhập mã OTP tự động chuyển trỏ chuột.
- **Trang Quản Lý Cá Nhân Học Viên (Student Dashboard)**:
  - Xem danh sách các khóa học đã sở hữu và tiến độ học tập.
  - Tải bộ sưu tập Presets, Ebook độc quyền.
  - **Lịch sử giao dịch & Hóa đơn điện tử (E-Invoice)**: Xem chi tiết hóa đơn, ngày giờ, số tiền, và nút in hóa đơn.
  - Form cập nhật họ tên, số điện thoại và tiểu sử cá nhân.

---

### 2.5. Trang Quản Trị Hệ Thống (Admin Management Portal)
- Có thể chuyển đổi tức thì sang vai trò Admin thông qua thanh công cụ **"Chế độ trải nghiệm nhanh"** ở đầu trang.
- **Tab 1: Tổng Quan & Doanh Thu**:
  - Thống kê Tổng doanh thu (VND), Số đơn hàng hoàn tất, Số học viên, Tổng tác phẩm trong Gallery.
  - Bảng danh sách đơn hàng mới nhất.
- **Tab 2: Quản Lý Khóa Học**:
  - Thêm khóa học mới, sửa tên, giá gốc, giá ưu đãi, badge huy hiệu, mô tả, ảnh thumbnail.
  - Xóa hoặc tạm ẩn khóa học.
- **Tab 3: Quản Lý Triển Lãm Ảnh**:
  - Thêm tác phẩm mới vào Gallery: nhập link ảnh, chọn danh mục, điền thông số EXIF (Body, Lens, Khẩu, Tốc, ISO, Tiêu cự, Địa điểm, Câu chuyện hậu trường).
  - Chỉnh sửa thông tin, xóa ảnh, bật/tắt đánh dấu ảnh Tiêu điểm (Featured).
- **Tab 4: Quản Lý Đơn Hàng & Doanh Thu**:
  - Lọc đơn hàng theo trạng thái (Tất cả, Đã thanh toán, Chờ thanh toán), tìm kiếm theo SĐT hoặc Mã đơn.
  - Nút **"Duyệt Tiền"** thủ công cho các đơn khách chuyển khoản ngân hàng -> Tự động kích hoạt khóa học cho học viên.
- **Tab 5: Quản Lý Học Viên**:
  - Danh sách toàn bộ học viên, tìm kiếm theo Tên hoặc Số điện thoại.
  - Xem các khóa học học viên đã sở hữu.
  - Menu **"Mở khóa trực tiếp"**: Admin có thể cấp quyền học miễn phí bất kỳ khóa học nào cho học viên chỉ với 1 click!

---

## 3. Kiến Trúc Mã Nguồn

```
pro-photo-studio/
├── public/
│   ├── photographer.jpg       # Chân dung nghệ sĩ Y Võ (AI Cinematic Studio)
│   └── hero-bg.jpg            # Ảnh bìa Leica & Hasselblad Luxury Noir
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutSection.jsx   # Tiểu sử tác giả, giải thưởng & form đặt lịch
│   │   ├── AdminDashboard.jsx # Bảng điều khiển quản trị toàn diện
│   │   ├── AuthModal.jsx      # Đăng ký / Đăng nhập SĐT + SMS OTP
│   │   ├── ClassroomView.jsx  # Phòng học trực tuyến LMS (Video, checklist, Q&A)
│   │   ├── CourseDetailModal.jsx # Xem giáo trình chi tiết & preview video
│   │   ├── CourseList.jsx     # Danh mục khóa học & bảng giá ưu đãi
│   │   ├── Footer.jsx         # Chân trang luxury & thông tin liên hệ
│   │   ├── LightboxModal.jsx  # Lightbox xem ảnh 4K kèm thông số EXIF Pro
│   │   ├── Navbar.jsx         # Thanh điều hướng & Role Switcher tiện lợi
│   │   ├── PaymentModal.jsx   # Thanh toán VietQR, MoMo, VNPAY đếm ngược
│   │   ├── PortfolioGallery.jsx # Triển lãm ảnh 4K lọc theo thể loại
│   │   └── Toast.jsx          # Thông báo nổi (Toast notifications)
│   ├── context/
│   │   └── AppContext.jsx     # Quản lý State toàn cục & đồng bộ LocalStorage
│   ├── data/
│   │   └── initialData.js     # Dữ liệu hạt giống (Nhiếp ảnh gia, 12 ảnh EXIF, 4 khóa học)
│   ├── App.jsx                # Component gốc điều phối các view
│   ├── index.css              # Hệ thống Design Tokens, Dark Luxury & Glassmorphism
│   └── main.jsx               # Điểm khởi chạy React 19
├── index.html                 # Cấu hình SEO, Typography Playfair & Plus Jakarta Sans
├── package.json               # dependencies: react, lucide-react, canvas-confetti
└── vite.config.js             # Cấu hình Vite 8 siêu tốc
```
