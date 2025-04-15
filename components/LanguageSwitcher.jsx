'use client'

import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
    const pathname = usePathname()

    const changeLanguage = (lang) => {
        const newPath = pathname.replace(/^\/(en|zh)/, `/${lang}`)
        window.location.href = newPath.startsWith('/') ? newPath : `/${lang}${newPath}`
    }

    return (
        <div className="flex gap-2">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <span>|</span>
            <button onClick={() => changeLanguage('zh')}>中文</button>
        </div>
    )
}