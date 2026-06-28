import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/lib/language";

import certificateImage from "@/assets/certificate_image.png";
import samarCertificate from "@/assets/Samar.png";
import digitalHealthCertificate from "@/assets/certificate_image.jpg";
import recommendationLetter from "@/assets/tr.png";
import recommendationPdf from "@/assets/Doc1.pdf";

const testimonialContent = {
  ar: {
    badge: "شهادات الشكر",
    title: "شهادات الشكر والتقدير",
    description: "شهادات تقدير حصلت عليها تقديرًا لمشاركتي ومساهمتي في مشاريع تقنية وصحية وتطوعية.",
    viewCertificate: "عرض الشهادة",
    lettersBadge: "خطابات التوصية",
    lettersTitle: "خطابات التوصية المهنية",
    lettersDescription:
      "خطابات توصية رسمية توضح تقييمي المهني خلال فترات التدريب والعمل على مشاريع تقنية داخل بيئات مؤسسية.",
    viewLetter: "عرض خطاب التوصية",
    certificates: [
      { title: "شهادة شكر - مستشفى الملك عبدالعزيز", image: certificateImage },
      { title: "شهادة شكر - وزارة الصحة (التطوع الصحي)", image: samarCertificate },
      {
        title: "شهادة شكر - الإدارة التنفيذية للصحة الرقمية (تجمع مكة الصحي)",
        image: digitalHealthCertificate,
      },
    ],
    letters: [
      {
        title: "خطاب توصية - مساعد المدير التنفيذي للصحة الرقمية",
        image: recommendationLetter,
        pdfLink: recommendationPdf,
      },
    ],
  },
  en: {
    badge: "Appreciation Certificates",
    title: "Certificates of Appreciation",
    description:
      "Recognition certificates I received for my contributions to technical, healthcare, and volunteer-driven projects.",
    viewCertificate: "View Certificate",
    lettersBadge: "Recommendation Letters",
    lettersTitle: "Professional Recommendation Letters",
    lettersDescription:
      "Official recommendation letters reflecting my professional evaluation during training and project work in institutional environments.",
    viewLetter: "View Recommendation Letter",
    certificates: [
      { title: "Certificate of Appreciation - King Abdulaziz Hospital", image: certificateImage },
      { title: "Certificate of Appreciation - Ministry of Health", image: samarCertificate },
      {
        title: "Certificate of Appreciation - Digital Health Executive Administration",
        image: digitalHealthCertificate,
      },
    ],
    letters: [
      {
        title: "Recommendation Letter - Assistant Executive Director of Digital Health",
        image: recommendationLetter,
        pdfLink: recommendationPdf,
      },
    ],
  },
} as const;

const Testimonials = () => {
  const { language } = useLanguage();
  const t = testimonialContent[language];

  return (
    <section id="testimonials" className="py-20 md:py-32">
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
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t.description}</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {t.certificates.map((certificate, index) => {
            const card = (
              <motion.div
                key={`${certificate.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-xl bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{certificate.title}</h4>
                </div>
                <Button variant="outline" className="w-full">
                  {t.viewCertificate}
                </Button>
              </motion.div>
            );

            return (
              <Dialog key={certificate.title}>
                <DialogTrigger asChild>{card}</DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img src={certificate.image} alt={certificate.title} className="h-auto w-full rounded-lg" />
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              {t.lettersBadge}
            </span>
            <h3 className="text-2xl font-bold text-foreground md:text-3xl">{t.lettersTitle}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t.lettersDescription}</p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {t.letters.map((letter, index) => (
              <motion.div
                key={`${letter.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{letter.title}</h4>
                </div>
                <div className="mb-4 overflow-hidden rounded-lg border border-border/60 bg-muted/40">
                  <img src={letter.image} alt={letter.title} className="h-56 w-full object-cover" />
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={letter.pdfLink} target="_blank" rel="noreferrer">
                    {t.viewLetter}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
