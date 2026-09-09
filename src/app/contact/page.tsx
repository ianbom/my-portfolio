import type { Metadata } from "next";
import {
  ExternalLinkIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ian Ale Hansyah about full-stack, backend, AI engineering, freelance development, and technical collaboration.",
};

const methods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: PhoneIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Instagram",
    value: "Follow and message",
    href: profile.instagram,
    icon: InstagramIcon,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[420px] bg-[#0d5f9c]/20 blur-[120px]" />
        <div className="relative mx-auto grid min-h-[680px] w-full max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.16em] text-[#8db7dc]">
              Contact
            </p>
            <h1 className="mt-5 max-w-xl text-balance bg-linear-to-b from-[#dff2fe] to-white bg-clip-text text-4xl font-semibold tracking-[-.045em] text-transparent sm:text-5xl md:text-6xl">
              Let&apos;s build something together.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#a8a8a8] sm:text-lg">
              Open to software engineering opportunities, full-stack and backend
              roles, AI engineering, freelance development, and technical
              collaboration.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-[#a8a8a8]">
              <MapPinIcon className="size-4 text-[#8db7dc]" />
              {profile.location}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {methods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  className="group flex min-h-40 flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                  href={method.href}
                  key={method.label}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[.03]">
                      <Icon className="size-4" />
                    </span>
                    {method.external && (
                      <ExternalLinkIcon className="size-4 text-[#777] transition-colors group-hover:text-white" />
                    )}
                  </div>
                  <div className="mt-auto pt-6">
                    <p className="text-sm font-medium">{method.label}</p>
                    <p className="mt-1 break-all text-sm text-[#a8a8a8]">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
