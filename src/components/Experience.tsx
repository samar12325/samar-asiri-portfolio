import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/language";

const experienceContent = {
  ar: {
    badge: "الخبرات العملية",
    title: "الخبرات",
    items: [
      {
        title: "مصممة واجهات تطبيق",
        company: "مبادرة التطوع الصحي",
        period: "2024",
        description:
          "تصميم واجهات تطبيق مخصص لخدمة المتطوعين في مجال التطوع الصحي مع التركيز على سهولة الاستخدام وتجربة المستخدم.",
        achievements: [
          "تحليل احتياجات المستخدمين وتحويلها إلى واجهات عملية وواضحة.",
          "الحصول على المركز الثاني على مستوى المبادرة تقديرًا لجودة التصميم والفكرة.",
        ],
      },
      {
        title: "متدربة تطوير ويب (Full-Stack)",
        company: "تدريب عملي",
        period: "يوليو 2025 - نوفمبر 2025",
        description: "العمل على 3 مشاريع ويب متكاملة من التحليل وحتى الإطلاق.",
        achievements: [
          "المساهمة في تطوير الواجهات الأمامية وربطها بالخلفية.",
          "نشر المشاريع على السيرفر وتجهيز بيئة التشغيل.",
          "تطوير مواقع ساهمت في تسهيل أكثر من 75 إجراء وتحسين الوصول للخدمات الرقمية.",
          "العمل ضمن بيئة تطوير حقيقية مع الالتزام بجودة الكود وتنظيمه.",
        ],
      },
    ],
  },
  en: {
    badge: "Professional Experience",
    title: "Experience",
    items: [
      {
        title: "Application UI Designer",
        company: "Health Volunteering Initiative",
        period: "2024",
        description:
          "Designed interfaces for an app serving healthcare volunteers with a strong focus on usability and user experience.",
        achievements: [
          "Analyzed user needs and translated them into clear, practical interfaces.",
          "Won second place across the initiative in recognition of the design quality and concept.",
        ],
      },
      {
        title: "Full-Stack Web Development Trainee",
        company: "Practical Training",
        period: "July 2025 - November 2025",
        description: "Worked on 3 complete web projects from analysis through launch.",
        achievements: [
          "Contributed to frontend development and backend integration.",
          "Deployed projects to production servers and prepared runtime environments.",
          "Built websites that helped streamline more than 75 hospital procedures and improved access to digital services.",
          "Worked in a real delivery environment with strong attention to code quality and organization.",
        ],
      },
    ],
  },
} as const;

const Experience = () => {
  const { isArabic, language } = useLanguage();
  const t = experienceContent[language];

  return (
    <section id="experience" className="py-20 md:py-32">
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

        <div className="relative mx-auto max-w-3xl">
          <div
            className={`absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 ${
              isArabic ? "right-6 md:right-8" : "left-6 md:left-8"
            }`}
          />

          {t.items.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${index}`}
              initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative pb-12 last:pb-0 ${isArabic ? "pr-16 md:pr-20" : "pl-16 md:pl-20"}`}
            >
              <div
                className={`absolute h-4 w-4 rounded-full gradient-primary shadow-soft ${
                  isArabic ? "right-4 md:right-6" : "left-4 md:left-6"
                }`}
              />

              <div className="rounded-xl bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="mb-4 text-muted-foreground">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2 text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
