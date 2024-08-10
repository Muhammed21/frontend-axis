// LoadingSpinner.tsx
import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full"
    />
  </div>
);

export default LoadingSpinner;
