import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language";

const navLabels = {
  ar: [
    { href: "#hero", label: "الرئيسية" },
    { href: "#about", label: "عني" },
    { href: "#skills", label: "المهارات" },
    { href: "#experience", label: "الخبرات" },
    { href: "#projects", label: "المشاريع" },
    { href: "#testimonials", label: "الشهادات" },
    { href: "#contact", label: "تواصل" },
  ],
  en: [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

const Navbar = () => {
  const { isArabic, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return document.documentElement.classList.contains("dark");
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = navLabels[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="text-xl font-bold text-gradient md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isArabic ? "سمر عسيري" : "Samar Asiri"}
          </motion.a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {link.label}
                <span className="absolute -bottom-1 start-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleLanguage}
              className="rounded-full bg-muted px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
            >
              {isArabic ? "EN" : "AR"}
            </motion.button>

            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isArabic ? "تبديل الوضع" : "Toggle theme"}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 transition-colors hover:bg-muted md:hidden"
              aria-label={isArabic ? "القائمة" : "Menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-card/95 backdrop-blur-md md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
