import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-8"
    >
      <div className="flex-shrink-0">
        <img 
          src="/schmidt1.png" 
          alt="Schmidt Distribuidora de Alumínio" 
          className="h-16 w-auto object-contain"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">
          Automação Fiscal
        </h1>
        <p className="text-sm text-muted-foreground">
          XML → Excel • NF-e / CT-e
        </p>
      </div>
    </motion.header>
  );
}
