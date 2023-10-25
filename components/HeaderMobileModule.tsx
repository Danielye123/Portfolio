"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" }
};

const HeaderMobileModule = ({ toggle, setToggle }) => {
  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed top-0 left-0 h-full w-4/5 bg-white dark:bg-[#192333] z-50 transition-transform"
        >
          <AiOutlineClose
            onClick={() => setToggle(false)}
            className="text-black dark:text-white p-4 z-100"
          />
          <nav className="flex flex-col items-start justify-start p-4 space-y-4 text-black">
            <Link href="/" onClick={() => setToggle(false)}>
              Home
            </Link>
            <Link href="/casestudies" onClick={() => setToggle(false)}>
              Case Studies
            </Link>
            <Link href="/contact" onClick={() => setToggle(false)}>
              Contact
            </Link>
            <Link href="/resume" onClick={() => setToggle(false)}>
              Resume
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobileModule;