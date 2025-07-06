'use client';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    // Xóa locale cũ khỏi path nếu có
    const pathWithoutLocale = pathname.replace(/^\/(en|vi)/, '');
    router.push(`/${locale}${pathWithoutLocale}`);
  };

  // Lấy locale hiện tại từ URL
  const currentLocale = typeof window !== 'undefined'
    ? window.location.pathname.split('/')[1]
    : 'en';

  return (
    <select value={currentLocale} onChange={handleChange} style={{ minWidth: 90 }}>
      <option value="en">English</option>
      <option value="vi">Tiếng Việt</option>
    </select>
  );
};

export default LanguageSwitcher;