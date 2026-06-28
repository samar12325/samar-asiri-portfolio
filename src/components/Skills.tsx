import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

const skillContent = {
  ar: {
    badge: "تطوير ويب متكامل",
    title: "المهارات",
    description:
      "أستخدم هذه التقنيات في بناء مشاريع ويب متكاملة، من الواجهات الأمامية والأنظمة الخلفية إلى قواعد البيانات والنشر.",
    groups: [
      { title: "الواجهات الأمامية", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
      { title: "الأطر والمكتبات", items: ["React", "Next.js"] },
      { title: "الواجهات الخلفية", items: ["Node.js", "NestJS", "REST APIs"] },
      { title: "قواعد البيانات", items: ["SQL", "MySQL", "Oracle Database"] },
      { title: "الأدوات", items: ["Git", "GitHub", "Figma"] },
      {
        title: "النشر والاستضافة",
        items: [
          "Web Application Deployment",
          "Production Deployment",
          "Server Environment Configuration",
          "Domain Configuration",
        ],
      },
    ],
  },
  en: {
    badge: "Full-Stack Web Development",
    title: "Skills",
    description:
      "I use these technologies to build complete web projects, from frontend interfaces and backend systems to databases and deployment.",
    groups: [
      { title: "Front-End", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
      { title: "Frameworks & Libraries", items: ["React", "Next.js"] },
      { title: "Back-End", items: ["Node.js", "NestJS", "REST APIs"] },
      { title: "Databases", items: ["SQL", "MySQL", "Oracle Database"] },
      { title: "Tools", items: ["Git", "GitHub", "Figma"] },
      {
        title: "Deployment & Hosting",
        items: [
          "Web Application Deployment",
          "Production Deployment",
          "Server Environment Configuration",
          "Domain Configuration",
        ],
      },
    ],
  },
} as const;

const Skills = () => {
  const { language } = useLanguage();
  const t = skillContent[language];

  return (
    <section id="skills" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:mb-16"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {t.badge}
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            {t.description}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex min-h-[220px] flex-col rounded-xl border border-border/40 bg-card/80 p-5 shadow-card backdrop-blur-sm sm:p-6"
            >
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
              </div>

              <div className="flex flex-1 flex-wrap content-start gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
