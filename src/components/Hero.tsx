import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/samar-asiri-portrait.png";
import samarCv from "@/assets/samar-amer-asiri-resume.pdf";
import { useLanguage } from "@/lib/language";

const content = {
  ar: {
    badge: "مرحبًا بكم في موقعي الشخصي",
    name: "سمر عامر عسيري",
    role: "مهندسة برمجيات | مصممة مواقع | مطورة ويب",
    description:
      "سمر عامر عسيري مهندسة برمجيات ومصممة مواقع متخصصة في تطوير مواقع ويب احترافية سريعة ومتجاوبة، مع خبرة عملية في تحليل المتطلبات، التطوير، ونشر المشاريع على السيرفر.",
    contact: "تواصل معي",
    resume: "السيرة الذاتية",
    avatarAlt: "سمر عامر عسيري",
  },
  en: {
    badge: "Welcome to my personal website",
    name: "Samar Amer Asiri",
    role: "Software Engineer | Web Designer | Web Developer",
    description:
      "Samar Amer Asiri is a software engineer and web designer with hands-on experience building end-to-end web projects, from requirements analysis and development to deployment on production servers.",
    contact: "Contact Me",
    resume: "Resume",
    avatarAlt: "Samar Amer Asiri",
  },
} as const;

const Hero = () => {
  const { isArabic, language } = useLanguage();
  const t = content[language];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="gradient-hero flex min-h-screen items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-flow-dense lg:grid-cols-2">
          <motion.div
            className={`text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t.name}
            </motion.h1>

            <motion.p
              className="mb-6 text-xl font-semibold text-gradient md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t.role}
            </motion.p>

            <motion.p
              className={`mb-8 max-w-xl text-lg text-muted-foreground ${
                isArabic ? "mx-auto lg:mx-0" : "mx-auto lg:mx-0"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t.description}
            </motion.p>

            <motion.div
              className={`flex flex-col gap-4 sm:flex-row ${isArabic ? "justify-center lg:justify-start" : "justify-center lg:justify-start"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" variant="outline" className="shadow-soft">
                <a href={samarCv} target="_blank" rel="noreferrer">
                  {t.resume}
                  <FileText className={isArabic ? "mr-2 h-4 w-4" : "ml-2 h-4 w-4"} />
                </a>
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gradient-primary text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                {t.contact}
                <ArrowDown className={isArabic ? "mr-2 h-4 w-4" : "ml-2 h-4 w-4"} />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className={`order-first flex ${isArabic ? "justify-center lg:justify-end" : "justify-center lg:justify-start"} lg:order-last`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse rounded-full gradient-primary opacity-20 blur-2xl" />
              <div className="absolute -inset-8 rounded-full bg-secondary/20 blur-3xl" />

              <motion.div
                className="relative h-64 w-64 rounded-full gradient-primary p-1 shadow-elevated md:h-80 md:w-80"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-card">
                  <img
                    src={avatarImage}
                    alt={t.avatarAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className={`absolute -top-4 h-8 w-8 rounded-full bg-primary/30 ${isArabic ? "-left-4" : "-right-4"}`}
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className={`absolute -bottom-2 h-6 w-6 rounded-full bg-secondary/40 ${isArabic ? "-right-6" : "-left-6"}`}
                animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 pt-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
