import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-2 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Current Sponsors
          </h2>
          <p className="mt-4">
            We are proud to be supported by industry leaders and organizations who believe in innovation, engineering excellence, and student-led motorsport development. Their continued trust and support empower Team VidyutAshwa to design, build, and compete at the highest level in BAJA competitions.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="/images/grind-master.png"
                  alt="Customizable"
                  width={32}
                  height={24}
                />
              </CardDecorator>

              <h3 className="mt-6 text-2xl">Grind Master</h3>
            </CardHeader>
          </Card>

          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="/images/parason.svg"
                  alt="Customizable"
                  width={50}
                  height={24}
                />
              </CardDecorator>

              <h3 className="mt-6 text-2xl">Parason</h3>
            </CardHeader>
          </Card>

          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="/images/urban-eats.png"
                  alt="Customizable"
                  width={50}
                  height={24}
                />
              </CardDecorator>

              <h3 className="mt-6 text-2xl">Urban-Eats</h3>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
