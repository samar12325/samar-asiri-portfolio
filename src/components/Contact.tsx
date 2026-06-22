import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "samaramer125@outlook.sa",
    href: "mailto:samaramer125@outlook.sa",
  },
  {
    icon: Linkedin,
    label: "Linkedin",
    value: "www.linkedin.com/in/samaramerasiri",
    href: "https://www.linkedin.com/in/samaramerasiri",
  },
  {
    icon: Github,
    label: " Github",
    value: "github.com/samar12325",
    href: "https://github.com/samar12325",
  },
  {
    icon: Phone,
    label: "رقم التواصل",
    value: "0559735137",
    href: "tel:0559735137",
  },
];

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/samaramer125@outlook.sa";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }

    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch(FORMSUBMIT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "رسالة جديدة من نموذج التواصل",
            _template: "table",
          }),
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        const result = await response.json();

        if (result.success !== "true") {
          throw new Error(
            result.message || "تعذر إرسال الرسالة من خدمة البريد."
          );
        }

        toast({
          title: "تم إرسال رسالتك بنجاح!",
          description:
            "إذا كانت هذه أول رسالة، افتحي رسالة التفعيل في بريدك لتفعيل الاستقبال المباشر.",
        });
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "حاولي مرة أخرى بعد قليل.";

        toast({
          title: "تعذر إرسال الرسالة",
          description: message,
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast({
        title: "تحقق من الحقول المطلوبة",
        description: "أكملي الاسم والبريد والرسالة بشكل صحيح.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            تواصل معي
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            لنعمل معًا
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    الاسم الكامل
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    رسالتك
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  <Send className="w-4 h-4 mr-2" />
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-6">
                معلومات التواصل
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">الموقع</p>
                  <p className="text-sm text-muted-foreground">المملكة العربية السعودية</p>
                  <p className="text-foreground font-medium">مكة المكرمة</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground/70 italic">
               
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
