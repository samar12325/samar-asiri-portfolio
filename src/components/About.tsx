import { motion } from "framer-motion";
import { MapPin, Palette, Globe, Zap } from "lucide-react";
import { useLanguage } from "@/lib/language";

const aboutContent = {
  ar: {
    badge: "تعرّف عليّ",
    title: "عني",
    paragraphs: [
      "مرحبًا، أنا سمر  عسيري، مطورة ويب Full-Stack أعمل على بناء حلول رقمية متكاملة تبدأ من فهم المشكلة وتنتهي بتجربة استخدام عملية ومستقرة.",
      "لدي خبرة عملية في تحليل المتطلبات، تصميم بنية التطبيقات، تطوير الواجهات الأمامية، وتنفيذ الأنظمة الخلفية وربط قواعد البيانات ونشر المشاريع على بيئات التشغيل.",
      "أهتم بكتابة كود منظم وسهل الصيانة، مع تركيز واضح على الأداء، الأمان، وتجربة المستخدم.",
    ],
    highlights: [
      { icon: MapPin, label: "الموقع", value: "مكة المكرمة، السعودية" },
      { icon: Palette, label: "التخصص", value: "هندسة برمجيات" },
      { icon: Globe, label: "المجال", value: "تطوير الويب" },
      { icon: Zap, label: "التركيز", value: "الأداء والسرعة" },
    ],
  },
  en: {
    badge: "Get to know me",
    title: "About Me",
    paragraphs: [
      "Hello, I'm Samar  Asiri, a full-stack web developer focused on building complete digital solutions from problem analysis to reliable user experience.",
      "I have hands-on experience in requirements analysis, application architecture, frontend development, backend implementation, database integration, and deployment.",
      "I care about maintainable code, strong performance, security, and thoughtful user experience.",
    ],
    highlights: [
      { icon: MapPin, label: "Location", value: "Makkah, Saudi Arabia" },
      { icon: Palette, label: "Specialization", value: "Software Engineering" },
      { icon: Globe, label: "Field", value: "Web Development" },
      { icon: Zap, label: "Focus", value: "Performance and Speed" },
    ],
  },
} as const;

const About = () => {
  const { isArabic, language } = useLanguage();
  const t = aboutContent[language];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {t.badge}
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.title}</h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`space-y-6 ${isArabic ? "text-right" : "text-left"}`}
          >
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {t.highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-1 text-sm text-muted-foreground">{item.label}</h3>
                <p className="font-semibold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
