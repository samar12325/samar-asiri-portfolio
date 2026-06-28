import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

const footerContent = {
  ar: {
    copyright: "© 2026 سمر عامر عسيري. جميع الحقوق محفوظة.",
    location: "مكة المكرمة، المملكة العربية السعودية",
  },
  en: {
    copyright: "© 2026 Samar Amer Asiri. All rights reserved.",
    location: "Makkah, Saudi Arabia",
  },
} as const;

const Footer = () => {
  const { language } = useLanguage();
  const t = footerContent[language];

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-3 text-center md:flex-row"
        >
          <p className="text-sm text-muted-foreground">{t.copyright}</p>
          <p className="text-sm text-muted-foreground">{t.location}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
