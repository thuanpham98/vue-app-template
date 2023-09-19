### R&D Design template Vue

- **components**: components dùng chung, không import bên ngoài, hạn chế import lẫn nhau giữa các components.
- **ultils**: các chức năng xử lý chạy độc lập, không import bên ngoài, không import lẫn nhau, định nghĩa parameter và reponse rõ ràng.
- **services**: cung cấp tính năng cho mức độ app, có thể import bên ngoài và import lẫn nhau, không chứa UI.
- **api**: cung cấp models và interface tương tác với server, không imort bên ngoài, có thể import lẫn nhau.
- **models**: cung cấp các interface, class dùng cho mức độ app, có thể import lẫn nhau, không import bên ngoài.