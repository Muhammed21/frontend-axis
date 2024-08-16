import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slide, opacity, perspective } from "./anim";
import { Typographie } from "@/design-system/typographie/Typographie";

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function Inner({ children }: any) {
  return (
    <div className="inner m-0">
      <motion.div className="slider" {...anim(slide)} />
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
}
