import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/language";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/samaramer125@outlook.sa";

const contactContent = {
  ar: {
    badge: "تواصل معي",
    title: "لنعمل معًا",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك",
    email: "البريد الإلكتروني",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    message: "رسالتك",
    messagePlaceholder: "اكتب رسالتك هنا...",
    sending: "جاري الإرسال...",
    send: "إرسال الرسالة",
    contactInfo: "معلومات التواصل",
    locationLabel: "الموقع",
    country: "المملكة العربية السعودية",
    city: "مكة المكرمة",
    errors: {
      nameRequired: "الاسم مطلوب",
      emailRequired: "البريد الإلكتروني مطلوب",
      emailInvalid: "البريد الإلكتروني غير صالح",
      messageRequired: "الرسالة مطلوبة",
      submitFailed: "حاولي مرة أخرى بعد قليل.",
      submitServiceFailed: "تعذر إرسال الرسالة من خدمة البريد.",
    },
    toast: {
      successTitle: "تم إرسال رسالتك بنجاح",
      successDescription: "إذا كانت هذه أول رسالة، افتحي رسالة التفعيل في بريدك لتفعيل الاستقبال المباشر.",
      errorTitle: "تعذر إرسال الرسالة",
      validateTitle: "تحققي من الحقول المطلوبة",
      validateDescription: "أكملي الاسم والبريد والرسالة بشكل صحيح.",
      subject: "رسالة جديدة من نموذج التواصل",
    },
    info: [
      {
        icon: Mail,
        label: "البريد الإلكتروني",
        value: "samaramer125@outlook.sa",
        href: "mailto:samaramer125@outlook.sa",
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        value: "www.linkedin.com/in/samaramerasiri",
        href: "https://www.linkedin.com/in/samaramerasiri",
      },
      {
        icon: Github,
        label: "GitHub",
        value: "github.com/samar12325",
        href: "https://github.com/samar12325",
      },
      {
        icon: Phone,
        label: "رقم التواصل",
        value: "0559735137",
        href: "tel:0559735137",
      },
    ],
  },
  en: {
    badge: "Contact Me",
    title: "Let's Work Together",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your name",
    email: "Email",
    emailPlaceholder: "Enter your email",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    sending: "Sending...",
    send: "Send Message",
    contactInfo: "Contact Information",
    locationLabel: "Location",
    country: "Saudi Arabia",
    city: "Makkah",
    errors: {
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Email is invalid",
      messageRequired: "Message is required",
      submitFailed: "Please try again in a moment.",
      submitServiceFailed: "Failed to send the message from the mail service.",
    },
    toast: {
      successTitle: "Your message was sent successfully",
      successDescription: "If this is your first message, open the activation email to enable direct delivery.",
      errorTitle: "Failed to send message",
      validateTitle: "Check the required fields",
      validateDescription: "Complete name, email, and message correctly.",
      subject: "New message from the contact form",
    },
    info: [
      {
        icon: Mail,
        label: "Email",
        value: "samaramer125@outlook.sa",
        href: "mailto:samaramer125@outlook.sa",
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        value: "www.linkedin.com/in/samaramerasiri",
        href: "https://www.linkedin.com/in/samaramerasiri",
      },
      {
        icon: Github,
        label: "GitHub",
        value: "github.com/samar12325",
        href: "https://github.com/samar12325",
      },
      {
        icon: Phone,
        label: "Phone",
        value: "0559735137",
        href: "tel:0559735137",
      },
    ],
  },
} as const;

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = contactContent[language];
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.errors.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: t.toast.validateTitle,
        description: t.toast.validateDescription,
        variant: "destructive",
      });
      return;
    }

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
          _subject: t.toast.subject,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = await response.json();

      if (result.success !== "true") {
        throw new Error(result.message || t.errors.submitServiceFailed);
      }

      toast({
        title: t.toast.successTitle,
        description: t.toast.successDescription,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : t.errors.submitFailed;

      toast({
        title: t.toast.errorTitle,
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-32">
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

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="rounded-xl bg-card p-6 shadow-card md:p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    {t.fullName}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.fullNamePlaceholder}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    {t.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    {t.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {isSubmitting ? t.sending : t.send}
                  <Send className="h-4 w-4" />
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
            <div className="rounded-xl bg-card p-6 shadow-card">
              <h3 className="mb-6 text-xl font-bold text-foreground">{t.contactInfo}</h3>

              <div className="space-y-4">
                {t.info.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary transition-transform group-hover:scale-105">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.locationLabel}</p>
                  <p className="text-sm text-muted-foreground">{t.country}</p>
                  <p className="font-medium text-foreground">{t.city}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
