'use client';
import React from 'react';
import Link from 'next/link';
import { FaUser, FaHeart, FaCartShopping } from "react-icons/fa6";
import MuiDropdown from '@/components/common/MuiDropdown';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useTranslation } from 'next-i18next';

const HeaderTranslate = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <LanguageSwitcher />
      <MuiDropdown
        label="USD"
        items={[
          { label: "VNĐ" },
          { label: "Won" },
          { label: "Man" },
        ]}
      />
      <span>
        <Link href="/login" style={{ color: "white", textDecoration: 'none' }}>
          <FaUser /> {t('login')}
        </Link>
      </span>
      <span><FaHeart /> {t('wishlist')}</span>
      <span><FaCartShopping /></span>
    </>
  );
};

export default HeaderTranslate;