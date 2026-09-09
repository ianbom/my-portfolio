import { Reveal } from "@/components/ui/reveal";
import { getProfileContent } from "@/data/profile";
import { type Locale } from "@/lib/i18n";

export function MetricsSection({ locale }: { locale: Locale }) {
  const { metrics } = getProfileContent(locale);
  return (
    <section className="px-4 py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric) => (
            <div className="text-center" key={metric.label}>
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {metric.value}
              </p>
              <p className="mx-auto mt-2 max-w-40 text-xs leading-relaxed text-[#a8a8a8] sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
