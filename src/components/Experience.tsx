import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "مصممة واجهات تطبيق",
    company: "مبادرة التطوع الصحي",
    period: "2024",
    description:
      "تصميم واجهات تطبيق مخصص لخدمة المتطوعين في مجال التطوع الصحي، مع التركيز على سهولة الاستخدام وتجربة المستخدم.",
    achievements: [
      "تحليل احتياجات المستخدمين وتحويلها إلى واجهات عملية وواضحة.",
      "الحصول على المركز الثاني على مستوى المبادرة تقديرًا لجودة التصميم والفكرة.",
    ],
  },
  {
    title: "متدربة تطوير ويب (Full-Stack)",
    company: "تدريب عملي",
    period: "يوليو 2025 – نوفمبر 2025",
    description: "العمل على 3 مشاريع ويب متكاملة من التحليل وحتى الإطلاق.",
    achievements: [
      "المساهمة في تطوير الواجهات الأمامية وربطها بالخلفية.",
      "نشر المشاريع على السيرفر وتجهيز بيئة التشغيل (Production).",
      "تطوير مواقع ساهمت في تسهيل أكثر من 75 إجراء من أعمال المستشفى وتحسين الوصول للخدمات الرقمية.",
      "العمل ضمن بيئة تطوير حقيقية والالتزام بجودة الكود وتنظيمه.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            الخبرات العملية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            الخبرات
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 right-6 md:right-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pr-16 md:pr-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute right-4 md:right-6 w-4 h-4 rounded-full gradient-primary shadow-soft" />

              {/* Content card */}
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
