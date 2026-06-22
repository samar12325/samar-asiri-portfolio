import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/avatar.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-hero pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                مرحبًا بكم في موقعي الشخصي
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              سمر عامر عسيري
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gradient font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              مهندسة برمجيات | مصممة مواقع ويب
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              خبرة عملية في تنفيذ مشاريع ويب متكاملة تشمل جمع وتحليل
              المتطلبات، التطوير، ونشر المشاريع على السيرفر.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-soft"
              >
                تواصل معي
                <ArrowDown className="w-4 h-4 mr-2" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full gradient-primary opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-8 rounded-full bg-secondary/20 blur-3xl" />

              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full gradient-primary p-1 shadow-elevated"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img
                    src={avatarImage}
                    alt="سمر عامر عسيري"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/30"
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-6 w-6 h-6 rounded-full bg-secondary/40"
                animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
