### R&D Design template Vue

- **components**: components dùng chung, không import bên ngoài, hạn chế import lẫn nhau giữa các components.
- **ultils**: các chức năng xử lý chạy độc lập, không import bên ngoài, không import lẫn nhau, định nghĩa parameter và reponse rõ ràng.
- **services**: cung cấp tính năng cho mức độ app, có thể import bên ngoài và import lẫn nhau, không chứa UI.
- **api**: cung cấp models và interface tương tác với server, không imort bên ngoài, có thể import lẫn nhau.
- **models**: cung cấp các interface, class dùng cho mức độ app, có thể import lẫn nhau, không import bên ngoài.
- **Các component đặt tên theo PascalCase**.

### routuing:

- document: <https://router.vuejs.org/guide/essentials/named-views.html>

- appRouter: cung cấp tính năng routing bằng function.
- routerIntercepterBefore: cung cấp tính năng Intercepter cho router.
- router-link: component cung cấp tính năng navagation.
- router-view: component cung cấp tính năng bơm UI tương ứng router.

### quản lý state: 
- Bản thân vue là reactive nên có thể dễ dùng tạo các binding data bằng ref là có thể sử dụng ngay.

### API : 
- Do API chưa có nên dùng bộ API của kienlongbank pay, login qua tài khoản kienlongbank pay, data bên trong fake.

### Các module tính năng: 
- Giống với session, repository, storage trong base react, nhưng cách bơm để sử dụng đơn giản hơn ( xem ví dụ về AppStorage trong main.ts)
- Trong component( file vue), dùng appProps để ge module ra dùng.
- Trong file logic ( .ts), dùng mappingType đề lấy tính năng ra dùng.