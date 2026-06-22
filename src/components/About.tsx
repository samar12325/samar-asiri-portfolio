import { motion } from "framer-motion";
import { MapPin, Palette, Globe, Zap } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "الموقع", value:  "مكة المملكة العربية السعودية " },
  { icon: Palette, label: "التخصص", value: "softwer engineering" },
  { icon: Globe, label: "المجال", value: "تطوير الويب" },
  { icon: Zap, label: "التركيز", value: "الأداء والسرعة" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            تعرّف عليّ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            عني
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              مرحباً! أنا سمر عامر عسيري، مطورة ويب Full-Stack أعمل على بناء حلول ويب متكاملة تبدأ من فهم المشكلة وتنتهي بتجربة استخدام فعّالة ومستقرة.

لدي خبرة عملية في التعامل مع دورة تطوير الويب بشكل كامل، حيث أبدأ بـ تحليل المتطلبات وفهم أهداف المشروع والمستخدم، ثم تصميم بنية واضحة للتطبيق، وتنفيذ واجهات أمامية سلسة، وأنظمة خلفية منظمة وقابلة للتوسع.

أمتلك معرفة جيدة بآلية نشر المشاريع على السيرفر، وإعداد بيئة التشغيل، وربط قواعد البيانات، والتأكد من استقرار وأداء التطبيق بعد الإطلاق. أحرص على كتابة كود نظيف، منظم، وسهل الصيانة، مع الاهتمام بالأداء، الأمان، وتجربة المستخدم.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              أؤمن بأن التصميم الجيد يبدأ من فهم احتياجات المستخدم، ولذلك أحرص
              على بناء مواقع سريعة وسهلة الاستخدام تُحقق الأهداف المرجوة. أعمل
              بشكل مستمر على تطوير مهاراتي ومواكبة أحدث التقنيات في عالم الويب.
            </p>
           
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-sm text-muted-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-foreground font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
