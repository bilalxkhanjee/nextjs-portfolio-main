import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from '../../../public/images/1112.png'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Image src={Pic} alt="..." height={100} width={100} />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
