import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/lib/language";

import project1 from "@/assets/complaint-management-system-cover.png";
import project2 from "@/assets/hospital-cms-cover.png";
import project3 from "@/assets/multi-hospital-complaint-system-cover.png";
import project4 from "@/assets/rahhal-platform-cover.png";
import project5 from "@/assets/health-volunteering-app-figma-cover.png";
import project6 from "@/assets/healthfirst-dashboard-cover.png";
import project1Homepage from "@/assets/complaint-system-login-page.png";
import project1NewComplaint from "@/assets/complaint-system-complaints-page.png";
import projectDashboard from "@/assets/complaint-system-dashboard.png";
import projectPermissions from "@/assets/complaint-system-permissions-page.png";
import project2Homepage from "@/assets/hospital-cms-home-page.png";
import project2Servicepage from "@/assets/hospital-cms-services-page.png";
import project2ControlDashbord from "@/assets/hospital-cms-dashboard.png";
import project3Homepage from "@/assets/multi-hospital-complaint-home-page.png";
import project3OverView from "@/assets/multi-hospital-complaint-overview.png";
import project3Dashboard from "@/assets/multi-hospital-complaint-dashboard.png";
import complaintSystemCertificate from "@/assets/complaint-management-system-experience-certificate.pdf";
import cmsSystemCertificate from "@/assets/hospital-cms-experience-certificate.pdf";

const projectsContent = {
  ar: {
    badge: "المشاريع",
    title: "المشاريع",
    details: "التفاصيل",
    privacyTitle: "تنبيه الخصوصية:",
    proofDefault: "إثبات تنفيذ المشروع",
    viewDocument: "عرض الوثيقة",
    features: "أبرز الميزات",
    technologies: "التقنيات",
    links: "روابط المشروع",
    liveDemo: "عرض المشروع",
    github: "مستودع GitHub",
    interfaces: "عرض الواجهات",
    figma: "عرض التصميم على Figma",
    screenshots: "صور للواجهات",
    note:
      "ملاحظة: بعض المشاريع المعروضة تم تنفيذها ضمن بيئات عمل داخلية، لذلك يقتصر العرض على الشرح وصور الواجهات دون روابط تشغيل عامة.",
    projects: [
      {
        title: "نظام إدارة بلاغات 937 - مستشفى الملك عبدالعزيز",
        description:
          "منصة داخلية لإدارة بلاغات المرضى مع تصنيف البلاغات ومتابعة الحالة ولوحات تحكم ومؤشرات أداء.",
        summary:
          "منصة داخلية لإدارة بلاغات المرضى مع تصنيف البلاغات ومتابعة الحالة ولوحات تحكم ومؤشرات أداء.",
        features: [
          "تسجيل البلاغات وتصنيفها حسب الأولوية",
          "متابعة الحالة وسجل الإجراءات",
          "لوحات تحكم وتحليلات KPI",
          "دعم تعدد الأقسام والصلاحيات",
        ],
        technologies: ["Node.js", "Express", "MySQL", "JavaScript", "Chart.js", "Tailwind CSS"],
        privacyNote:
          "هذا النظام تم تطويره للاستخدام الداخلي داخل مستشفى الملك عبدالعزيز، لذلك يقتصر العرض هنا على صور للواجهات فقط.",
        proofTitle: "إثبات تنفيذ المشروع",
        proofDescription:
          "شهادة خبرة مهنية صادرة من مستشفى الملك عبدالعزيز توثق مشاركتي في تحليل وتصميم وتطوير نظام إدارة البلاغات الداخلي.",
        proofDocumentUrl: complaintSystemCertificate,
        screenshots: [
          { src: project1Homepage, label: "تسجيل الدخول" },
          { src: projectDashboard, label: "لوحة التحكم" },
          { src: project1NewComplaint, label: "صفحة البلاغات" },
          { src: projectPermissions, label: "الصلاحيات" },
        ],
        image: project1,
      },
      {
        title: "نظام إدارة محتوى موقع المستشفى - مستشفى الملك عبدالعزيز",
        description:
          "نظام داخلي لإدارة محتوى موقع المستشفى يتيح التحكم الكامل في الصفحات والمعلومات دون الحاجة للتعديل البرمجي.",
        summary:
          "نظام داخلي لإدارة محتوى موقع المستشفى يتيح التحكم بالصفحات والخدمات والأطباء والأخبار من خلال لوحة تحكم سهلة الاستخدام.",
        features: [
          "إدارة صفحات الموقع والخدمات والأقسام",
          "إدارة بيانات الأطباء والعيادات",
          "إضافة وتحديث الأخبار والإعلانات",
          "إدارة الوسائط والمستخدمين والصلاحيات",
        ],
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "MySQL"],
        privacyNote:
          "تم تطوير هذا النظام للاستخدام الداخلي داخل مستشفى الملك عبدالعزيز، لذلك يقتصر العرض هنا على صور لواجهات النظام فقط.",
        proofTitle: "إثبات تنفيذ المشروع",
        proofDescription:
          "شهادة خبرة مهنية صادرة من مستشفى الملك عبدالعزيز توثق مشاركتي في تحليل وتصميم وتطوير نظام إدارة محتوى موقع المستشفى الداخلي.",
        proofDocumentUrl: cmsSystemCertificate,
        screenshots: [
          { src: project2Homepage, label: "الصفحة الرئيسية" },
          { src: project2Servicepage, label: "صفحة الخدمات" },
          { src: project2ControlDashbord, label: "لوحة التحكم" },
        ],
        image: project2,
      },
      {
        title: "نظام إدارة بلاغات 937 - على مستوى عدة مستشفيات",
        description:
          "منصة مركزية متقدمة لإدارة بلاغات المرضى على مستوى عدة مستشفيات مع فصل البيانات لكل جهة ولوحات أداء مقارنة.",
        summary:
          "منصة مركزية متعددة الجهات لإدارة البلاغات على مستوى عدة مستشفيات مع فصل البيانات ولوحات أداء مقارنة.",
        features: [
          "بنية Multi-Database Architecture",
          "لوحة مركزية موحدة لعرض وتحليل البيانات",
          "تحليل الأداء والمقارنات بين المستشفيات",
        ],
        technologies: [
          "Node.js",
          "Express.js",
          "MySQL (Multi-Database Architecture)",
          "JavaScript",
          "Chart.js",
          "Tailwind CSS",
        ],
        screenshots: [
          { src: project3Homepage, label: "الصفحة الرئيسية" },
          { src: project3OverView, label: "نظرة عامة" },
          { src: project3Dashboard, label: "لوحة التحكم" },
        ],
        image: project3,
      },
      {
        title: "HealthFirst - لوحة تحكم لإدارة العيادات",
        description:
          "واجهة لوحة تحكم احترافية لإدارة عيادات متعددة الفروع تركّز على تجربة المستخدم وعرض البيانات التشغيلية بوضوح.",
        summary:
          "نموذج Frontend احترافي مبني باستخدام Next.js وTypeScript مع بيانات تجريبية وجاهز للربط مع أي Backend أو API مستقبلًا.",
        features: [
          "لوحة مؤشرات أداء لعرض حالة العيادات",
          "واجهات للمواعيد والأطباء والمرضى والسجلات الطبية",
          "دعم تعدد العيادات والفروع",
          "تصميم Responsive وداعم للغة العربية",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Components"],
        liveDemoUrl: "https://healthfirst-next-dashboard.vercel.app/",
        githubUrl: "",
        image: project6,
      },
      {
        title: "منصة رحّال",
        description:
          "منصة ذكية للرحلات والفعاليات تساعد المستخدمين على اكتشاف الرحلات المدرسية والجماعية والفعاليات المحلية.",
        summary:
          "تجمع بين تجربة استخدام موحدة وتوصيات ذكية مدعومة بالذكاء الاصطناعي مع تركيز على الأداء والقابلية للتوسع.",
        features: [
          "اكتشاف الرحلات المدرسية والجماعية بسهولة",
          "استعراض الفعاليات المحلية والانضمام إليها",
          "توصيات مخصصة ومساعدات ذكية",
          "أداء عال وبنية قابلة للتوسع",
        ],
        technologies: ["React", "TypeScript", "Next.js", "OpenAI"],
        liveDemoUrl: "https://www.rahhal.it.com/home",
        image: project4,
      },
      {
        title: "تصميم واجهات تطبيق التطوع الصحي",
        description:
          "تصميم واجهات تطبيق مخصص لخدمة المتطوعين في مجال التطوع الصحي مع تجربة استخدام سلسة وواضحة.",
        summary:
          "تصميم UI/UX لتطبيق التطوع الصحي مع تركيز على وضوح المعلومات وسهولة الاستخدام وتدفقات المستخدم.",
        features: [
          "تصميم واجهات المستخدم",
          "تخطيط تجربة المستخدم",
          "تصميم تدفقات الاستخدام",
          "مراعاة سهولة الوصول والتنقل",
        ],
        technologies: ["Figma"],
        figmaLink:
          "https://www.figma.com/design/LtXqy1IGgJQuXGbVL7fjlj/Untitled?node-id=0-1&t=2ERT63XeeMXtkxEd-1",
        image: project5,
      },
    ],
  },
  en: {
    badge: "Projects",
    title: "Projects",
    details: "Details",
    privacyTitle: "Privacy note:",
    proofDefault: "Project proof",
    viewDocument: "View document",
    features: "Key Features",
    technologies: "Technologies",
    links: "Project Links",
    liveDemo: "Live Demo",
    github: "GitHub Repository",
    interfaces: "Design Preview",
    figma: "View on Figma",
    screenshots: "Interface Screenshots",
    note:
      "Note: some showcased projects were built in internal work environments, so the public presentation is limited to descriptions and interface screenshots.",
    projects: [
      {
        title: "937 Complaint Management System - King Abdulaziz Hospital",
        description:
          "An internal platform for managing patient complaints with priority classification, status tracking, dashboards, and KPIs.",
        summary:
          "An internal platform for managing patient complaints with priority classification, status tracking, dashboards, and KPIs.",
        features: [
          "Complaint registration and priority classification",
          "Status tracking and action history",
          "Dashboards and KPI analytics",
          "Support for departments and role-based permissions",
        ],
        technologies: ["Node.js", "Express", "MySQL", "JavaScript", "Chart.js", "Tailwind CSS"],
        privacyNote:
          "This system was developed for internal hospital use, so only interface screenshots are presented here.",
        proofTitle: "Project proof",
        proofDescription:
          "A professional experience certificate issued by King Abdulaziz Hospital documenting my contribution to the analysis, design, and development of the internal complaint management system.",
        proofDocumentUrl: complaintSystemCertificate,
        screenshots: [
          { src: project1Homepage, label: "Login" },
          { src: projectDashboard, label: "Dashboard" },
          { src: project1NewComplaint, label: "Complaints Page" },
          { src: projectPermissions, label: "Permissions" },
        ],
        image: project1,
      },
      {
        title: "Hospital Website CMS - King Abdulaziz Hospital",
        description:
          "An internal content management system that allows full control over pages and information without direct code edits.",
        summary:
          "An internal CMS for managing pages, services, doctors, and news through an easy-to-use admin dashboard.",
        features: [
          "Manage site pages, services, and departments",
          "Manage doctor and clinic information",
          "Add and update news and announcements",
          "Manage media, users, and permissions",
        ],
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "MySQL"],
        privacyNote:
          "This system was developed for internal hospital use, so only interface screenshots are presented here.",
        proofTitle: "Project proof",
        proofDescription:
          "A professional experience certificate issued by King Abdulaziz Hospital documenting my contribution to the analysis, design, and development of the internal hospital CMS.",
        proofDocumentUrl: cmsSystemCertificate,
        screenshots: [
          { src: project2Homepage, label: "Home Page" },
          { src: project2Servicepage, label: "Services Page" },
          { src: project2ControlDashbord, label: "Dashboard" },
        ],
        image: project2,
      },
      {
        title: "937 Complaint Management System - Multi-Hospital Platform",
        description:
          "An advanced centralized complaint management platform for multiple hospitals with isolated data and comparative performance dashboards.",
        summary:
          "A multi-tenant complaint platform for multiple hospitals with isolated data and comparative dashboards.",
        features: [
          "Multi-database architecture",
          "Central dashboard for aggregated analytics",
          "Cross-hospital performance comparison",
        ],
        technologies: [
          "Node.js",
          "Express.js",
          "MySQL (Multi-Database Architecture)",
          "JavaScript",
          "Chart.js",
          "Tailwind CSS",
        ],
        screenshots: [
          { src: project3Homepage, label: "Home Page" },
          { src: project3OverView, label: "Overview" },
          { src: project3Dashboard, label: "Dashboard" },
        ],
        image: project3,
      },
      {
        title: "HealthFirst - Clinics Management Dashboard",
        description:
          "A professional dashboard interface for managing multi-branch clinics with clear operational data and strong UX.",
        summary:
          "A polished frontend prototype built with Next.js and TypeScript using mock data, ready to connect to a future backend or API.",
        features: [
          "KPI dashboard for clinic status",
          "UI flows for appointments, doctors, patients, and medical records",
          "Support for multiple clinics and branches",
          "Responsive design with Arabic support",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Components"],
        liveDemoUrl: "https://healthfirst-next-dashboard.vercel.app/",
        githubUrl: "",
        image: project6,
      },
      {
        title: "Rahhal Platform",
        description:
          "A smart trips and events platform that helps users discover school trips, group journeys, and local events.",
        summary:
          "Combines a unified user experience with AI-powered recommendations and strong scalability and performance.",
        features: [
          "Discover school and group trips easily",
          "Browse and join local events",
          "Personalized recommendations and smart assistance",
          "High performance and scalable architecture",
        ],
        technologies: ["React", "TypeScript", "Next.js", "OpenAI"],
        liveDemoUrl: "https://www.rahhal.it.com/home",
        image: project4,
      },
      {
        title: "Health Volunteering App UI Design",
        description:
          "UI design for a volunteering app focused on healthcare volunteers with a clear and smooth user journey.",
        summary:
          "A UI/UX project focused on clarity, ease of use, and well-structured user flows.",
        features: [
          "User interface design",
          "User experience planning",
          "User flow design",
          "Accessibility and navigation considerations",
        ],
        technologies: ["Figma"],
        figmaLink:
          "https://www.figma.com/design/LtXqy1IGgJQuXGbVL7fjlj/Untitled?node-id=0-1&t=2ERT63XeeMXtkxEd-1",
        image: project5,
      },
    ],
  },
} as const;

const Projects = () => {
  const { isArabic, language } = useLanguage();
  const t = projectsContent[language];
  const [activeProject, setActiveProject] = useState<(typeof t.projects)[number] | null>(null);

  return (
    <section id="projects" className="bg-muted/30 py-20 md:py-32">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-elevated"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:bg-primary/5"
                    onClick={() => setActiveProject(project)}
                  >
                    {t.details}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog
          open={Boolean(activeProject)}
          onOpenChange={(open) => {
            if (!open) {
              setActiveProject(null);
            }
          }}
        >
          <DialogContent className="max-h-[85vh] max-w-4xl overflow-hidden">
            {activeProject && (
              <div className="max-h-[85vh] space-y-6 overflow-y-auto pr-2">
                <DialogHeader>
                  <DialogTitle className={isArabic ? "text-right text-2xl" : "text-left text-2xl"}>
                    {activeProject.title}
                  </DialogTitle>
                </DialogHeader>

                <p className="text-sm text-muted-foreground">
                  {activeProject.summary ?? activeProject.description}
                </p>

                {activeProject.privacyNote && (
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                    <span className="font-semibold">{t.privacyTitle} </span>
                    {activeProject.privacyNote}
                  </div>
                )}

                {activeProject.proofDocumentUrl && (
                  <div>
                    <h4 className="mb-3 text-base font-semibold">
                      {activeProject.proofTitle ?? t.proofDefault}
                    </h4>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <p className="mb-4 text-sm text-foreground">{activeProject.proofDescription}</p>
                      <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/5">
                        <a href={activeProject.proofDocumentUrl} target="_blank" rel="noreferrer">
                          {t.viewDocument}
                        </a>
                      </Button>
                    </div>
                  </div>
                )}

                {activeProject.features && (
                  <div>
                    <h4 className="mb-3 text-base font-semibold">{t.features}</h4>
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      {activeProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="mb-3 text-base font-semibold">{t.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(activeProject.liveDemoUrl || activeProject.githubUrl) && (
                  <div>
                    <h4 className="mb-3 text-base font-semibold">{t.links}</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeProject.liveDemoUrl && (
                        <Button asChild className="gradient-primary text-primary-foreground">
                          <a href={activeProject.liveDemoUrl} target="_blank" rel="noreferrer">
                            {t.liveDemo}
                          </a>
                        </Button>
                      )}
                      {activeProject.githubUrl && (
                        <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/5">
                          <a href={activeProject.githubUrl} target="_blank" rel="noreferrer">
                            {t.github}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}

                {activeProject.figmaLink && (
                  <div>
                    <h4 className="mb-3 text-base font-semibold">{t.interfaces}</h4>
                    <a
                      href={activeProject.figmaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary underline"
                    >
                      {t.figma}
                    </a>
                  </div>
                )}

                {activeProject.screenshots && (
                  <div>
                    <h4 className="mb-3 text-base font-semibold">{t.screenshots}</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {activeProject.screenshots.map((shot) => (
                        <div
                          key={shot.label}
                          className="overflow-hidden rounded-lg border border-border/60 bg-muted/40"
                        >
                          <img
                            src={shot.src}
                            alt={shot.label}
                            className="h-72 w-full bg-white object-contain"
                          />
                          <div className="px-3 py-2 text-xs text-muted-foreground">{shot.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        <p className="mt-8 text-center text-sm italic text-muted-foreground/70">{t.note}</p>
      </div>
    </section>
  );
};

export default Projects;
