import { ArrowRight, Check } from "lucide-react";

import { Button } from "./button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Message-Led Growth Systems",
  "High-Converting Campaigns",
  "Strategic Consultation",
  "Premium Brand Positioning",
  "Proven Results Framework",
];

export const Cta4 = ({
  title = "Ready to Transform Your Growth?",
  description = "Join premium brands who've scaled their message-led growth systems with our proven framework.",
  buttonText = "Start Your Growth Journey",
  buttonUrl = "#contact",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(29,78,216,0.2),transparent_50%)]" />
              
              {/* Content */}
              <div className="relative flex flex-col items-start justify-between gap-8 px-6 py-10 md:flex-row lg:px-20 lg:py-16">
                <div className="md:w-1/2">
                  <h4 className="mb-4 text-2xl font-bold text-white md:text-3xl">{title}</h4>
                  <p className="text-blue-100 text-lg leading-relaxed mb-6">{description}</p>
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white border-0 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" asChild>
                    <a href={buttonUrl} target="_blank">
                      {buttonText} <ArrowRight className="size-5 ml-2" />
                    </a>
                  </Button>
                </div>
                <div className="md:w-1/3">
                  <ul className="flex flex-col space-y-3 text-sm font-medium">
                    {items.map((item, idx) => (
                      <li className="flex items-center text-blue-100" key={idx}>
                        <div className="mr-4 flex-shrink-0 rounded-full bg-blue-500 p-1">
                          <Check className="size-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-3xl border border-blue-400/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};