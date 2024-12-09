"use client";

import serverRedirect from "@/app/utils/serverRedirect";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", language: "English" },
    { code: "bn", language: "Bangla" },
  ];

  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = async (lang) => {
    setSelectedLanguage(languages.find((entry) => entry.code === lang));
    setShowMenu(false);

    let updatedPath = pathname.replace(selectedLanguage.code, lang);

    if (!pathname.includes(selectedLanguage.code)) {
      updatedPath = `/${lang}${pathname}`;
    }

    serverRedirect(updatedPath);
  };

  useEffect(() => {
    const handleClickOutside = () => setShowMenu(false);
    if (showMenu) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-4 py-2 text-color-purple font-semibold rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      >
        {selectedLanguage.language}
      </button>

      {showMenu && (
        <ul className="absolute right-0 mt-2 w-40 rounded-md text-color-purple font-semibold shadow-lg z-10">
          {languages.map((entry) => (
            <li
              key={entry.code}
              onClick={() => handleLanguageChange(entry.code)}
              className={`p-2 cursor-pointer hover:bg-color-bg ${
                selectedLanguage.code === entry.code ? "bg-color-bg" : ""
              }`}
            >
              {entry.language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
