import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M1.5 3.5h12M1.5 7.5h12M1.5 11.5h12"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="m3.2 3.2 8.6 8.6m0-8.6-8.6 8.6"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.2.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.5 1.2a12 12 0 0 1 6.3 0c2.4-1.6 3.5-1.2 3.5-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.7-2.9 5.8-5.6 6.1.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M3 7.5h8.5m-3-3 3 3-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="m9 2.5-4 5 4 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="m6 2.5 4 5-4 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M8 2.5h4.5V7M12.2 2.8 7 8m4.5.5v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <circle cx="6.5" cy="6.5" r="4" stroke="currentColor" />
      <path d="m9.5 9.5 3 3" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <rect
        x="1.5"
        y="3"
        width="12"
        height="9"
        rx="1.5"
        stroke="currentColor"
      />
      <path
        d="m2.5 4 5 4 5-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M4 1.8 5.5 5 4.2 6.2c.9 2 2.5 3.6 4.6 4.6L10 9.5l3.2 1.5-.4 2.2c-.1.5-.6.8-1.1.8C5.8 13.5 1.5 9.2 1 3.3c0-.5.3-1 .8-1.1L4 1.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M12 6.3c0 3.2-4.5 6.5-4.5 6.5S3 9.5 3 6.3a4.5 4.5 0 1 1 9 0Z"
        stroke="currentColor"
      />
      <circle cx="7.5" cy="6.2" r="1.5" stroke="currentColor" />
    </svg>
  );
}
export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <rect
        x="2"
        y="3.5"
        width="11"
        height="9.5"
        rx="1.5"
        stroke="currentColor"
      />
      <path
        d="M4.5 2v3M10.5 2v3M2 6.5h11"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.3 3.5A2.3 2.3 0 1 1 .7 3.5a2.3 2.3 0 0 1 4.6 0ZM1.1 8h4.3v13.8H1.1V8Zm6.8 0H12v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6v7.6h-4.3V15c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6v6.9H7.9V8Z" />
    </svg>
  );
}
export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}
