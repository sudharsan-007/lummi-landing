import React from "react";
import { FeatureSteps } from "./feature-steps";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const workFeatures = [
  {
    step: "Step 1",
    title: "Strategy Sprint",
    content: "We lock in goals, ICP, and blind spots. No months of discovery. In one intensive week, we audit your current state, define your ideal customer, and identify the biggest growth levers. You'll leave with a clear roadmap.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    step: "Step 2", 
    title: "Message Lock-In",
    content: "Voice, value, and hook — all sharpened. We craft your core messaging framework. The words that will power every campaign, every page, every post. This becomes your north star for all marketing.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    step: "Step 3",
    title: "Build + Deploy", 
    content: "Funnels, ads, content — everything moves with intention. Strategy becomes reality. We build the assets, launch the campaigns, and create the systems. Everything connected. Everything purposeful.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    step: "Step 4",
    title: "Feedback Loop",
    content: "Learn, iterate, scale — fast. Weekly data reviews. Rapid optimization. What's working gets more fuel. What's not gets fixed or killed. No ego, just results.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

export function HowWeWorkEnhanced() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            HOW WE WORK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Clarity First. Then Execution.<br/>
            <span className="text-yellow-500">Then Growth.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've stripped the bloat and streamlined the build. Here's how we transform your marketing from scattered to systematic.
          </p>
        </motion.div>

        <FeatureSteps
          features={workFeatures}
          title=""
          autoPlayInterval={4000}
          imageHeight="h-[400px]"
          className="bg-white rounded-2xl shadow-sm"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              You'll always know what we're doing — and why it works.
            </p>
            <p className="text-gray-600">
              No black boxes. No surprises. Just clear progress toward clear goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}