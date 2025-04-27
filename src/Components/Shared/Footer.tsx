import React from "react";
import logo from "../../assets/Logo/logo.jpg";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer sm:footer-horizontal max-w-7xl mx-auto text-neutral-content p-10">
        <aside>
          <img className="w-16 rounded-full" src={logo} alt="" />
          <p>
            M360ict Ltd.
            <br />
            Copyright © {new Date().getFullYear()} - All right reserved by
            M360ict Ltd.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-6 text-3xl">
            <a target="_blank" href="https://www.linkedin.com">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://x.com">
              <FaXTwitter />
            </a>
            <a target="_blank" href="https://www.facebook.com">
              <FaFacebook />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
