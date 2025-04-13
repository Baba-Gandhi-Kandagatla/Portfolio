"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  title: string;
  bgColor: string;
  width?: number;
  height?: number;
  className?: string;
  children?: ReactNode;
}

export default function ImagePlaceholder({
  title,
  bgColor,
  width = 600,
  height = 400,
  className = "",
  children
}: ImagePlaceholderProps) {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-lg overflow-hidden ${bgColor} ${className}`}
      style={{ width, height }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children || (
        <span className="text-white text-xl font-bold text-center px-4">
          {title}
        </span>
      )}
    </motion.div>
  );
}