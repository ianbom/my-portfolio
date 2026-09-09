import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLinkIcon, InstagramIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { getCopy, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const text = getCopy(locale);
  return { title: text.nav.contact, description: text.contact.description };
}

export default async function LocaleContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const text = getCopy(locale);
  const methods = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: MailIcon, external: false },
    { label: locale === "id" ? "Telepon" : "Phone", value: profile.phone, href: profile.phoneHref, icon: PhoneIcon, external: false },
    { label: "LinkedIn", value: text.contact.connect, href: profile.linkedin, icon: LinkedInIcon, external: true },
    { label: "Instagram", value: text.contact.follow, href: profile.instagram, icon: InstagramIcon, external: true },
  ] as const;
  return <main><section className="relative overflow-hidden"><div className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[420px] bg-[#0d5f9c]/20 blur-[120px]" /><div className="relative mx-auto grid min-h-[680px] w-full max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-medium uppercase tracking-[.16em] text-[#8db7dc]">{text.contact.eyebrow}</p><h1 className="mt-5 max-w-xl text-balance bg-linear-to-b from-[#dff2fe] to-white bg-clip-text text-4xl font-semibold tracking-[-.045em] text-transparent sm:text-5xl md:text-6xl">{text.contact.title}</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-[#a8a8a8] sm:text-lg">{text.contact.description}</p><div className="mt-8 flex items-center gap-2 text-sm text-[#a8a8a8]"><MapPinIcon className="size-4 text-[#8db7dc]" />{profile.location}</div></div><div className="grid gap-4 sm:grid-cols-2">{methods.map((method) => { const Icon = method.icon; return <a className="group flex min-h-40 flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20" href={method.href} key={method.label} target={method.external ? "_blank" : undefined} rel={method.external ? "noreferrer" : undefined}><div className="flex items-start justify-between"><span className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[.03]"><Icon className="size-4" /></span>{method.external && <ExternalLinkIcon className="size-4 text-[#777] transition-colors group-hover:text-white" />}</div><div className="mt-auto pt-6"><p className="text-sm font-medium">{method.label}</p><p className="mt-1 break-all text-sm text-[#a8a8a8]">{method.value}</p></div></a>; })}</div></div></section></main>;
}
