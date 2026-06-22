import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-right"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 سمر عامر عسيري. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-muted-foreground">
            مكة المكرمة، المملكة العربية السعودية
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
