import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import Image from "next/image";

const enterpriseLinks = [
  { href: "#about", label: "About Team VidyutAshwa" },
  { href: "#vision", label: "Vision & Mission" },
  { href: "#baja", label: "About SAE BAJA" },
  { href: "#achievements", label: "Achievements" },
  { href: "#join", label: "Join the Team" },
];

const productLinks = [
  { href: "#vehicle", label: "BAJA Vehicle" },
  { href: "#design", label: "Design & Engineering" },
  { href: "#manufacturing", label: "Manufacturing Process" },
  { href: "#testing", label: "Testing & Validation" },
  { href: "#innovation", label: "Innovation & Technology" },
];

const docsLinks = [
  { href: "#overview", label: "Team Overview" },
  { href: "#rulebook", label: "BAJA Rulebook" },
  { href: "#systems", label: "Vehicle Systems" },
  { href: "#autonomous", label: "Autonomous BAJA" },
  { href: "#safety", label: "Safety Standards" },
  { href: "#sponsorship", label: "Sponsorship Proposal" },
  { href: "#budget", label: "Budget & Planning" },
  { href: "#timeline", label: "Project Timeline" },
];

const communityLinks = [
  { href: "#instagram", label: "Instagram" },
  { href: "#linkedin", label: "LinkedIn" },
  { href: "#youtube", label: "YouTube" },
  { href: "#email", label: "Contact Us" },
];

const footerLinks = [
  {
    name: "VidyutAshwa",
    links: enterpriseLinks,
  },
  {
    name: "Baja Vehicle",
    links: productLinks,
  },
  {
    name: "Guidelines",
    links: docsLinks,
  },
];

export default function Footer() {
  return (
    <footer className="m-1 rounded-3xl border">
      <div className="mx-auto max-w-5xl space-y-16 px-5 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
          <Link
            href="/"
            aria-label="go home"
            className="flex items-center space-x-2"
          >
            <Image
              src="/images/logo-final.png"
              alt="VidyutAshwa Logo"
              width={25}
              height={25}
            />
            <h3>VidyutAshwa</h3>
          </Link>
          <div className="flex gap-3">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
                  color="currentColor"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23.498 6.186a3.01 3.01 0 0 0-2.12-2.13C19.506 3.5 12 3.5 12 3.5s-7.506 0-9.378.556a3.01 3.01 0 0 0-2.12 2.13A31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .502 5.814a3.01 3.01 0 0 0 2.12 2.13C4.494 20.5 12 20.5 12 20.5s7.506 0 9.378-.556a3.01 3.01 0 0 0 2.12-2.13A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.502-5.814ZM9.75 15.5v-7l6 3.5l-6 3.5Z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {footerLinks.map((linksGroup, index) => (
            <div key={index}>
              <span className="font-medium">{linksGroup.name}</span>
              <ul className="mt-4 list-inside space-y-4">
                {linksGroup.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary text-muted-foreground text-sm duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <span className="text-sm font-medium">Community</span>
            <ul className="mt-4 list-inside space-y-4">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-muted-foreground text-sm duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <form className="mt-12 w-full max-w-xs">
              <div className="space-y-2.5">
                <Label className="block text-sm font-medium" htmlFor="email">
                  Subscribe to our newsletter
                </Label>
                <Input
                  className="input variant-mixed sz-md"
                  placeholder="Your email"
                  type="email"
                  id="email"
                  required
                  name="email"
                />
              </div>
              <Button type="submit" className="mt-3">
                <span>Subscribe</span>
              </Button>
            </form>
          </div>
        </div>
        <div className="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3">
          <span>&copy; Created By - Chiranjeev Singh Sandhu</span>
          <Link
            href="https://www.linkedin.com/in/chiranjeev-singh-sandhu/"
            target="_blank"
            className="text-muted-foreground hover:text-primary text-sm"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
