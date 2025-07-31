"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Header({ isScrolled, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-navy font-noto">JapanWork</span>
              <div className="text-xs text-gray-600">Cầu nối đến Nhật Bản</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => handleNavClick("about")}
              className="text-navy hover:text-red transition-colors font-medium text-sm"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => handleNavClick("achievements")}
              className="text-navy hover:text-red transition-colors font-medium text-sm"
            >
              Thành tích
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="text-navy hover:text-red transition-colors font-medium text-sm"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => handleNavClick("process")}
              className="text-navy hover:text-red transition-colors font-medium text-sm"
            >
              Quy trình
            </button>
            <button
              onClick={() => handleNavClick("training")}
              className="text-navy hover:text-red transition-colors font-medium text-sm"
            >
              Đào tạo
            </button>
            <button
              onClick={() => handleNavClick("testimonials")}
              className="text-navy hover:text-red transition-colors font-medium text-sm"
            >
              Học viên
            </button>
            <button
              onClick={() => handleNavClick("support")}
              className="text-navy hover:text-red transition-colors font-medium text-sm"
            >
              Hỗ trợ
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-red text-white px-6 py-2 rounded-lg hover:bg-red-dark transition-all duration-300 transform hover:-translate-y-0.5 font-medium"
            >
              Liên hệ ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-navy hover:text-red transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => handleNavClick("about")}
                className="block w-full text-left text-navy hover:text-red transition-colors font-medium"
              >
                Giới thiệu
              </button>
              <button
                onClick={() => handleNavClick("achievements")}
                className="block w-full text-left text-navy hover:text-red transition-colors font-medium"
              >
                Thành tích
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="block w-full text-left text-navy hover:text-red transition-colors font-medium"
              >
                Dịch vụ
              </button>
              <button
                onClick={() => handleNavClick("process")}
                className="block w-full text-left text-navy hover:text-red transition-colors font-medium"
              >
                Quy trình
              </button>
              <button
                onClick={() => handleNavClick("training")}
                className="block w-full text-left text-navy hover:text-red transition-colors font-medium"
              >
                Đào tạo
              </button>
              <button
                onClick={() => handleNavClick("testimonials")}
                className="block w-full text-left text-navy hover:text-red transition-colors font-medium"
              >
                Học viên
              </button>
              <button
                onClick={() => handleNavClick("support")}
                className="block w-full text-left text-navy hover:text-red transition-colors font-medium"
              >
                Hỗ trợ
              </button>
              <div className="pt-4 border-t">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full bg-red text-white px-6 py-2 rounded-lg hover:bg-red-dark transition-colors font-medium"
                >
                  Liên hệ ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
