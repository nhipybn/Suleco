"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // This useEffect block will safely add the tracking script
  useEffect(() => {
    // Check if the script has already been added to prevent duplicates
    if (!document.getElementById('_bownow_ts')) {
      const _bownow_ts = document.createElement('script');
      _bownow_ts.id = '_bownow_ts';
      _bownow_ts.charset = 'utf-8';
      _bownow_ts.src = 'https://contents.bownow.jp/js/UTC_b02e8385e21bf0bf7fa4/trace.js';
      document.getElementsByTagName('head')[0].appendChild(_bownow_ts);
    }
  }, []); // The empty dependency array ensures this runs only once after the initial render

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: "会社紹介", sectionId: "about" },
    { label: "実績", sectionId: "achievements" },
    { label: "サービス", sectionId: "services" },
    { label: "プロセス", sectionId: "process" },
    { label: "研修", sectionId: "training" },
    { label: "受講者の声", sectionId: "partner-video" },
    { label: "サポート", sectionId: "support" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 py-2 pl-2">
            <img src="/logo-suleco.png" alt="Suleco Logo" className="h-8 w-40 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNavLinkClick(item.sectionId)}
                className="text-sm font-medium text-navy transition-colors hover:text-red"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-4 lg:flex">
            <button
              onClick={() => handleNavLinkClick("contact")}
              className="transform rounded-full bg-navy px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red"
            >
              日本語で相談
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-navy rounded-full transition-colors hover:text-red"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 border-t bg-white shadow-lg lg:hidden">
            <nav className="space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavLinkClick(item.sectionId)}
                  className="block w-full text-left font-medium text-navy transition-colors hover:text-red"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t pt-4">
                <button
                  onClick={() => handleNavLinkClick("contact")}
                  className="w-full rounded-lg bg-red px-6 py-2 font-medium text-white transition-colors hover:bg-red-dark"
                >
                  Liên hệ ngay
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
