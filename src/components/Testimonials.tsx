import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import certificateImage from "@/assets/certificate_image.png";
import samarCertificate from "@/assets/Samar.png";
import digitalHealthCertificate from "@/assets/certificate_image.jpg";
import recommendationLetter from "@/assets/tr.png";
import recommendationPdf from "@/assets/Doc1.pdf";

const appreciationCertificates = [
  {
    title: "شهادة شكر – مستشفى الملك عبدالعزيز",
    image: certificateImage,
  },
  {
    title: "شهادة شكر – وزارة الصحة (التطوع الصحي)",
    image: samarCertificate,
  },
  {
    title: "شهادة شكر – الإدارة التنفيذية للصحة الرقمية (تجمع مكة الصحي)",
    image: digitalHealthCertificate,
  },
];

const recommendationLetters = [
  {
    title: "خطاب توصية – مساعد المدير التنفيذي للصحة الرقمية",
    image: recommendationLetter,
    pdfLink: recommendationPdf,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            شهادات الشكر
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            شهادات الشكر والتقدير
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            شهادات تقدير حصلت عليها تقديرًا لمشاركتي ومساهمتي في مشاريع تقنية وصحية وتطوعية.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {appreciationCertificates.map((certificate, index) => {
            const card = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {certificate.title}
                  </h4>
                </div>
                {certificate.image && (
                  <Button variant="outline" className="w-full">
                    عرض الشهادة
                  </Button>
                )}
              </motion.div>
            );

            if (!certificate.image) {
              return card;
            }

            return (
              <Dialog key={certificate.title}>
                <DialogTrigger asChild>{card}</DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-auto rounded-lg"
                  />
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
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              خطابات التوصية
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              خطابات التوصية المهنية
            </h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              خطابات توصية رسمية توضح تقييمي المهني خلال فترات التدريب والعمل على مشاريع تقنية داخل بيئات مؤسسية.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recommendationLetters.map((letter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {letter.title}
                  </h4>
                </div>
                {letter.pdfLink ? (
                  <Button variant="outline" className="w-full" asChild>
                    <a href={letter.pdfLink} target="_blank" rel="noreferrer">
                      عرض خطاب التوصية
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    عرض خطاب التوصية
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
