import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Assuming Satoshi is loaded in your global CSS or next.config.js
// Font-family: 'Satoshi', sans-serif;

interface FeatureItem {
  id: number;
  imageSrc: string;
  badgeText: string;
  heading: string;
  paragraph: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    imageSrc: "/placeholder-image-1.png",
    badgeText: "Feature 1",
    heading: "Raw Power for Windows",
    paragraph: "Optimized performance for your specific workloads.",
  },
  {
    id: 2,
    imageSrc: "/placeholder-image-2.png",
    badgeText: "Feature 2",
    heading: "Scalable Architecture",
    paragraph: "Grow your infrastructure without downtime.",
  },
  {
    id: 3,
    imageSrc: "/placeholder-image-3.png",
    badgeText: "Feature 3",
    heading: "Secure by Default",
    paragraph: "Enterprise-grade security for all your data.",
  },
];

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Heading Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-[#262626] font-satoshi leading-[126%]">
            Raw Power for Your Windows Workloads
          </h2>
          {/* Optional subtext if needed, based on the "Paragraph" hint */}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg border-none"
            >
              <CardContent className="p-0 flex flex-col h-full">
                {/* Image Container - Responsive Aspect Ratio */}
                <div className="relative w-full h-[200px] md:h-[240px] bg-gray-100 overflow-hidden">
                  <img 
                    src={feature.imageSrc} 
                    alt={feature.heading}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Badge Overlay or Top Position */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-[#262626]">
                      {feature.badgeText}
                    </Badge>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#262626] font-satoshi mb-2">
                    {feature.heading}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {feature.paragraph}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;