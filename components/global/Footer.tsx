import Link from "next/link";
import Image from "next/image";
import React from "react";
import { footer } from "@/data/global";

function Footer() {
  const pages = footer.columns.find(col => col.title.toLowerCase() === "pages");
  const social = footer.columns.find(col => col.title.toLowerCase() === "social");
  const others = footer.columns.find(col => col.title.toLowerCase() === "others");

  return (
    <footer className="w-screen bg-bg text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Main Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-1 text-center sm:text-left">
          {/* Others */}
          {others && (
            <div>
              <h4 className="text-sm font-semibold text-fun-gray mb-2 uppercase">
                {others.title}
              </h4>
              <ul className="space-y-1 text-sm">
                {others.links.map((link, i) => (
                  <li key={i}>
                    {link.leavesWebsite ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.link} className="hover:underline">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pages */}
          {pages && (
            <div>
              <h4 className="text-sm font-semibold text-fun-gray mb-2 uppercase">
                {pages.title}
              </h4>
              <ul className="space-y-1 text-sm">
                {pages.links.map((link, i) => (
                  <li key={i}>
                    {link.leavesWebsite ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.link} className="hover:underline">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social */}
          {social && (
            <div>
              <h4 className="text-sm font-semibold text-fun-gray mb-2 uppercase">
                {social.title}
              </h4>
              <ul className="space-y-1 text-sm">
                {social.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start hover:underline gap-1"
                    >
                      {link.icon && (
                        <Image
                          src={link.icon}
                          alt={link.name}
                          width={18}
                          height={18}
                          className="mr-2"
                        />
                      )}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-fun-gray gap-3">
          {/* Tech Stack */}
          <div className="flex items-center gap-3">
            <span className="uppercase font-semibold tracking-wide">Built with</span>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="TailwindCSS">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                width={20}
                height={20}
                alt="TailwindCSS"
                className="hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" title="React">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={20}
                height={20}
                alt="React"
                className="hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                width={36}
                height={36}
                alt="Next.js"
                className="invert hover:scale-110 transition-transform"
              />
            </a>
          </div>

          {/* Credits */}
          <div>
            © {new Date().getFullYear()}{" "}
            <a href="mailto:jheusreyes213@gmail.com" className="text-fun-gray-light hover:underline">
              Jheus Reyes
            </a>{" "}
            — All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
