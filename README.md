This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


- .env: Chứa các biến môi trường
- .env.prod: Chứa các biến môi trường ở môi trường sản phẩm
- app: Chứa định tuyến các trang
- components: Chứa các thành phần tái sử dụng lại nhiều lần
- config: Chứa các cấu hình như API url,...
- constants: Chứa các hằng số không đổi
- enums: Chứa các giá trị kiểu dữ liệu liệt kê (enumerations)
- hooks: Chứa các hooks custome
- locales: Chuyển đổi ngôn ngữ
- models: Chứa các khuôn mẫu hoặc các thực thể như User, Customer
- redux: Chứa cấu hình redux (nếu có)
- resources: Chứa các nội dung tĩnh của ứng dụng
- services: Chứa các dịch vụ lấy dữ liệu từ API
- styles: Chứa các style cho các file của dự án
- uploads: Chứa các config để upload file, ảnh
- utils: Chứa các hàm dùng chung cho toàn bộ dự án
