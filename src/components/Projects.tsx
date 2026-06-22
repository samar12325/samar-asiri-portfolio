import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";
import project1Homepage from "@/assets/project1Homepage.png";
import project1NewComplaint from "@/assets/project1NEwCpmplanint.png";
import projectDashboard from "@/assets/projectDashbord.png";
import projectPermissions from "@/assets/projectPermissions.png";
import project2Homepage from "@/assets/projec2page.png";
import project2Servicepage from "@/assets/project2Servicepage.png";
import project2ControlDashbord from "@/assets/project2ControlDashbord.png";
import project3Homepage from "@/assets/project3Homepage.png";
import project3OverView from "@/assets/project3OverViwe.png";
import project3Dashboard from "@/assets/project3Dashbord.png";
import complaintSystemCertificate from "@/assets/شهادة خبرة مهنية نظام البلاغات .pdf";
import cmsSystemCertificate from "@/assets/شهادة_خبرة_مهنية_نظام_ادارة_محتوى_.pdf";

const projects = [
  {
    title: "نظام إدارة بلاغات 937 – مستشفى الملك عبدالعزيز",
    description:
      "منصة داخلية لإدارة بلاغات المرضى مع تصنيف البلاغات (عاجل/غير عاجل)، متابعة الحالة، ولوحات تحكم ومؤشرات أداء.",
    summary:
      "منصة داخلية لإدارة بلاغات المرضى مع تصنيف البلاغات (عاجل/غير عاجل)، متابعة الحالة، ولوحات تحكم ومؤشرات أداء.",
    features: [
      "تسجيل البلاغات وتصنيفها حسب الأولوية",
      "متابعة الحالة وسجل الإجراءات",
      "لوحات تحكم وتحليلات (KPIs)",
      "دعم تعدد الأقسام/الصلاحيات",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "JavaScript",
      "Chart.js",
      "Tailwind CSS",
    ],
    privacyNote:
      "هذا النظام تم تطويره للاستخدام الداخلي داخل مستشفى الملك عبدالعزيز، لذلك يقتصر العرض هنا على صور للواجهات فقط.",
    proofTitle: "إثبات تنفيذ المشروع",
    proofDescription:
      "📄 شهادة خبرة مهنية صادرة من مستشفى الملك عبدالعزيز توثق مشاركتي في تحليل وتصميم وتطوير نظام إدارة البلاغات الداخلي.",
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
    title: "نظام إدارة محتوى موقع المستشفى (CMS) – مستشفى الملك عبدالعزيز",
    description:
      "نظام داخلي لإدارة محتوى موقع المستشفى، يتيح التحكم الكامل في الصفحات والمعلومات دون الحاجة للتعديل البرمجي، مع التركيز على سهولة الاستخدام وتنظيم المحتوى.",
    summary:
      "نظام داخلي لإدارة محتوى موقع المستشفى يتيح التحكم بالصفحات، الخدمات، الأطباء، والأخبار من خلال لوحة تحكم سهلة الاستخدام دون الحاجة للتعديل البرمجي.",
    features: [
      "إدارة صفحات الموقع (الرئيسية، الخدمات، الأقسام)",
      "إدارة بيانات الأطباء والعيادات",
      "إضافة وتحديث الأخبار والإعلانات",
      "إدارة الوسائط (صور، ملفات)",
      "تحديث المحتوى بشكل فوري من لوحة تحكم مخصصة",
      "دعم تعدد المستخدمين والصلاحيات",
    ],
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "MySQL",
    ],
    privacyNote:
      "تم تطوير هذا النظام للاستخدام الداخلي داخل مستشفى الملك عبدالعزيز، لذلك يقتصر العرض هنا على صور لواجهات النظام فقط.",
    proofTitle: "إثبات تنفيذ المشروع",
    proofDescription:
      "📄 شهادة خبرة مهنية صادرة من مستشفى الملك عبدالعزيز توثق مشاركتي في تحليل وتصميم وتطوير نظام إدارة محتوى موقع المستشفى الداخلي.",
    proofDocumentUrl: cmsSystemCertificate,
    screenshots: [
      { src: project2Homepage, label: "الصفحة الرئيسية" },
      { src: project2Servicepage, label: "صفحة الخدمات" },
      { src: project2ControlDashbord, label: "لوحة التحكم" },
    ],
    image: project2,
  },
  {
    title: "نظام إدارة بلاغات 937 – على مستوى عدة مستشفيات",
    description:
      "منصة مركزية متقدمة لإدارة بلاغات المرضى على مستوى عدة مستشفيات، تم تصميمها لدعم بيئة متعددة الجهات (Multi-Tenant). يتيح النظام توجيه البلاغات تلقائيًا حسب المستشفى، مع فصل البيانات لكل مستشفى وإمكانية عرض الأداء بشكل مستقل أو مجمّع.",
    summary:
      "منصة مركزية متعددة الجهات لإدارة البلاغات على مستوى عدة مستشفيات مع فصل البيانات ولوحات أداء مقارنة.",
    features: [
      "بنية Multi-Database Architecture مع قاعدة بيانات مستقلة لكل مستشفى",
      "عرض وتحليل البيانات بشكل موحّد عبر لوحة مركزية",
      "دعم المقارنات وتحليل الأداء بين المستشفيات",
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
    title: "HealthFirst – لوحة تحكم لإدارة العيادات (Frontend Prototype)",
    description:
      "واجهة لوحة تحكم احترافية لإدارة عيادات متعددة الفروع، تركّز على تجربة المستخدم وعرض البيانات التشغيلية بشكل واضح.",
    summary:
      "واجهة لوحة تحكم احترافية لإدارة عيادات متعددة الفروع، تركّز على تجربة المستخدم وعرض البيانات التشغيلية بشكل واضح. المشروع يمثّل نموذج واجهات (Frontend فقط) مبني باستخدام Next.js وTypeScript، مع بيانات وهمية (Mock Data)، وجاهز للربط مع أي Backend أو API مستقبلي.",
    features: [
      "لوحة مؤشرات أداء (KPIs) لعرض حالة العيادات بشكل لحظي",
      "إدارة واجهات المواعيد، الأطباء، المرضى، والسجلات الطبية (UI)",
      "دعم تعدد العيادات والفروع",
      "تصميم Responsive وداعم للغة العربية (RTL)",
      "تنظيم الواجهات باستخدام مكونات قابلة لإعادة الاستخدام",
      "واجهات مهيأة لدعم الأدوار والصلاحيات (Front-end)",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Components"],
    liveDemoUrl: "https://healthfirst-next-dashboard.vercel.app/",
    githubUrl: "",
    image: project6,
  },
  {
    title: "منصة رحّال",
    description:
      "رحّال منصة ذكية للرحلات والفعاليات، صُممت لمساعدة المستخدمين على اكتشاف والانضمام إلى الرحلات المدرسية والرحلات الجماعية والفعاليات المحلية من خلال تجربة رقمية موحدة.",
    summary:
      "تسهّل المنصة استكشاف الرحلات واكتشاف الفعاليات وتعزيز تفاعل المستخدمين، مع الاستفادة من ميزات مدعومة بالذكاء الاصطناعي لتقديم توصيات مخصصة ومساعدات ذكية. تم تطوير رحّال باستخدام React وNext.js وTypeScript، مع التركيز على القابلية للتوسع والأداء العالي وتوفير تجربة استخدام سلسة وبديهية.",
    features: [
      "اكتشاف الرحلات المدرسية والرحلات الجماعية بسهولة",
      "استعراض الفعاليات المحلية والانضمام إليها عبر تجربة موحدة",
      "توصيات مخصصة ومساعدات ذكية مدعومة بالذكاء الاصطناعي",
      "أداء عالٍ وبنية قابلة للتوسع مع تجربة استخدام سلسة",
    ],
    technologies: ["React", "TypeScript", "Next.js", "OpenAI"],
    liveDemoUrl: "https://www.rahhal.it.com/home",
    image: project4,
  },
  {
    title: "تصميم واجهات تطبيق التطوع الصحي",
    description:
      "تصميم واجهات تطبيق مخصص لخدمة المتطوعين في مجال التطوع الصحي، يهدف إلى تسهيل تسجيل المتطوعين، استعراض الفرص التطوعية، ومتابعة المشاركة بطريقة سلسة وواضحة.",
    summary:
      "تصميم UI/UX لتطبيق التطوع الصحي مع تركيز على وضوح المعلومات وسهولة الاستخدام وتدفقات المستخدم.",
    features: [
      "تصميم واجهات المستخدم (UI)",
      "تخطيط تجربة المستخدم (UX)",
      "تصميم تدفقات الاستخدام (User Flows)",
      "مراعاة سهولة الوصول والتنقل",
    ],
    technologies: ["Figma"],
    figmaLink:
      "https://www.figma.com/design/LtXqy1IGgJQuXGbVL7fjlj/Untitled?node-id=0-1&t=2ERT63XeeMXtkxEd-1",
    image: project5,
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            المشاريع
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            المشاريع
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
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
                    التفاصيل
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
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden">
            {activeProject && (
              <div className="max-h-[85vh] overflow-y-auto pr-2 space-y-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-right">
                    {activeProject.title}
                  </DialogTitle>
                </DialogHeader>

                <p className="text-sm text-muted-foreground">
                  {activeProject.summary ?? activeProject.description}
                </p>

                {activeProject.privacyNote && (
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                    <span className="font-semibold">تنبيه الخصوصية: </span>
                    {activeProject.privacyNote}
                  </div>
                )}

                {activeProject.proofDocumentUrl && (
                  <div>
                    <h4 className="mb-3 text-base font-semibold">
                      {activeProject.proofTitle ?? "إثبات تنفيذ المشروع"}
                    </h4>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <p className="mb-4 text-sm text-foreground">
                        {activeProject.proofDescription}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/5"
                      >
                        <a
                          href={activeProject.proofDocumentUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          عرض الوثيقة
                        </a>
                      </Button>
                    </div>
                  </div>
                )}

                {activeProject.features && (
                  <div>
                    <h4 className="text-base font-semibold mb-3">أبرز الميزات</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {activeProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-base font-semibold mb-3">التقنيات</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {(activeProject.liveDemoUrl || activeProject.githubUrl) && (
                  <div>
                    <h4 className="text-base font-semibold mb-3">روابط المشروع</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeProject.liveDemoUrl && (
                        <Button asChild className="gradient-primary text-primary-foreground">
                          <a
                            href={activeProject.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            عرض المشروع (Live Demo)
                          </a>
                        </Button>
                      )}
                      {activeProject.githubUrl && (
                        <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/5">
                          <a
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            مستودع GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
                {activeProject.figmaLink && (
                  <div>
                    <h4 className="text-base font-semibold mb-3">عرض الواجهات</h4>
                    <a
                      href={activeProject.figmaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary underline"
                    >
                      عرض التصميم على Figma
                    </a>
                  </div>
                )}

                {activeProject.screenshots && (
                  <div>
                    <h4 className="text-base font-semibold mb-3">صور للواجهات</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {activeProject.screenshots.map((shot) => (
                        <div
                          key={shot.label}
                          className="rounded-lg overflow-hidden border border-border/60 bg-muted/40"
                        >
                          <img
                            src={shot.src}
                            alt={shot.label}
                            className="h-72 w-full object-contain bg-white"
                          />
                          <div className="px-3 py-2 text-xs text-muted-foreground">
                            {shot.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        <p className="text-center text-sm text-muted-foreground/70 mt-8 italic">
          ملاحظة: بعض المشاريع المعروضة تم تنفيذها ضمن بيئات عمل داخلية، لذلك يقتصر العرض على الشرح وصور الواجهات دون روابط تشغيل عامة.
        </p>
      </div>
    </section>
  );
};

export default Projects;
