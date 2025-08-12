"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { IconCompass, IconBell, IconSun, IconFile, IconShield, IconInfoCircle } from '@tabler/icons-react';
import ChangeLanguageModal from '@/app/modals/ChangeLanguageModal';
import TermsAndConditionsModal from '@/app/modals/TermsAndConditionsModal';
import PrivacyPolicyModal from '@/app/modals/PrivacyPolicyModal';
import LogoutModal from '@/app/modals/LogoutModal';
import DeleteAccountModal from '@/app/modals/DeleteAccountModal';
import useDarkMode from '@/hooks/useDarkmode';
import { useTranslation } from 'react-i18next'; // ✅ Using react-i18next directly

export default function Settings() {
  const router = useRouter();
  const { t } = useTranslation('settings'); // ✅ 'settings' is the namespace

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      router.replace('/');
    }
  }, [router]);

  const { toggleTheme } = useDarkMode();
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [languageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [termsAndConditionsModalOpen, setIsTermsAndConditionsModalOpen] = useState(false);
  const [privacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false);
  const [logoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [deleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-[#000000] relative flex items-start justify-center h-screen w-screen">
      <div className="h-[calc(100vh-150px)] overflow-y-scroll bg-white dark:bg-black w-full z-[25] flex flex-col items-center justify-end">
        <div className="w-full lg:w-[70%] mx-auto h-[90%] text-black dark:text-white rounded-2xl px-[7px] lg:px-[30px]">
          <h1 className="font-extrabold text-4xl mb-[10px]">{t('title')}</h1>

          {/* Choose language */}
          <button
            onClick={() => setIsLanguageModalOpen(true)}
            className="cursor-pointer w-full flex items-center justify-between h-[80px] mb-[10px]"
          >
            <div className="lg:w-[8%] pb-[10px] flex items-center justify-center">
              <div className="lg:h-[60px] lg:w-[60px] h-[50px] w-[50px] rounded-full bg-[#E8E8E8] dark:bg-white/10 flex items-center justify-center">
                <IconCompass size={32} stroke={1} />
              </div>
            </div>
            <div className="text-left w-[90%] flex items-center border-b border-b-slate-400 dark:border-b-white/50 pb-[10px]">
              <div className="w-full">
                <h1 className="text-black dark:text-white font-bold text-[16px] lg:text-xl">
                  {t('choose_language')}
                </h1>
                <p className="text-slate-400 dark:text-white/60 text-[13px] lg:text-sm">
                  {t('choose_language_desc')}
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <Navbar />

      {languageModalOpen && <ChangeLanguageModal setIsLanguageModalOpen={setIsLanguageModalOpen} />}
      {termsAndConditionsModalOpen && <TermsAndConditionsModal setIsTermsAndConditionsModalOpen={setIsTermsAndConditionsModalOpen} />}
      {privacyPolicyModalOpen && <PrivacyPolicyModal setIsPrivacyPolicyModalOpen={setIsPrivacyPolicyModalOpen} />}
      {logoutModalOpen && <LogoutModal setIsLogoutModalOpen={setIsLogoutModalOpen} />}
      {deleteAccountModalOpen && <DeleteAccountModal setIsDeleteAccountModalOpen={setIsDeleteAccountModalOpen} />}
    </div>
  );
}
