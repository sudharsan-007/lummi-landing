import React from "react";
import { StickyScrollReveal } from "./sticky-scroll-reveal";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  MessageCircle, 
  Rocket, 
  TrendingUp,
  Clock,
  CheckCircle,
  Target,
  BarChart3,
  Sparkles,
  Zap
} from "lucide-react";

const workContent = [
  {
    title: "Strategy Sprint",
    description: "We lock in goals, ICP, and blind spots. No months of discovery. In one intensive week, we audit your current state, define your ideal customer, and identify the biggest growth levers. You'll leave with a clear roadmap.",
    badge: "Week 1",
    timeframe: "7 Days",
    subtitle: "Foundation Phase",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-yellow-50 to-orange-50 p-6 flex flex-col justify-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Strategy Sprint</h3>
              <p className="text-sm text-gray-600">Week 1</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Current State Audit</p>
                <p className="text-xs text-gray-600">Deep dive into existing systems</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">ICP Definition</p>
                <p className="text-xs text-gray-600">Identify your ideal customer</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Growth Levers</p>
                <p className="text-xs text-gray-600">Discover biggest opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-800">Deliverable</span>
            </div>
            <p className="text-xs text-yellow-700">Clear roadmap with prioritized actions</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Message Lock-In",
    description: "Voice, value, and hook — all sharpened. We craft your core messaging framework. The words that will power every campaign, every page, every post. This becomes your north star for all marketing.",
    badge: "Week 2",
    timeframe: "7 Days",
    subtitle: "Messaging Phase",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex flex-col justify-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Message Lock-In</h3>
              <p className="text-sm text-gray-600">Week 2</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Brand Voice</p>
                <p className="text-xs text-gray-600">Define your unique tone</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Value Propositions</p>
                <p className="text-xs text-gray-600">Craft compelling reasons to buy</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Hook Framework</p>
                <p className="text-xs text-gray-600">Create attention-grabbing openings</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-100 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Deliverable</span>
            </div>
            <p className="text-xs text-blue-700">Complete messaging framework & guidelines</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Build + Deploy",
    description: "Funnels, ads, content — everything moves with intention. Strategy becomes reality. We build the assets, launch the campaigns, and create the systems. Everything connected. Everything purposeful.",
    badge: "Weeks 3-4",
    timeframe: "14 Days",
    subtitle: "Execution Phase",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-50 to-pink-50 p-6 flex flex-col justify-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Build + Deploy</h3>
              <p className="text-sm text-gray-600">Weeks 3-4</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Funnel Development</p>
                <p className="text-xs text-gray-600">Build conversion-optimized flows</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Campaign Launch</p>
                <p className="text-xs text-gray-600">Deploy paid media campaigns</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Content Systems</p>
                <p className="text-xs text-gray-600">Create scalable content workflows</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Deliverable</span>
            </div>
            <p className="text-xs text-purple-700">Live campaigns & systems in market</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Feedback Loop",
    description: "Learn, iterate, scale — fast. Weekly data reviews. Rapid optimization. What's working gets more fuel. What's not gets fixed or killed. No ego, just results.",
    badge: "Ongoing",
    timeframe: "Continuous",
    subtitle: "Optimization Phase",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-50 to-teal-50 p-6 flex flex-col justify-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Feedback Loop</h3>
              <p className="text-sm text-gray-600">Ongoing</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Weekly Reviews</p>
                <p className="text-xs text-gray-600">Data-driven performance analysis</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Rapid Optimization</p>
                <p className="text-xs text-gray-600">Quick iterations based on results</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Scale Winners</p>
                <p className="text-xs text-gray-600">Double down on what works</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-100 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Deliverable</span>
            </div>
            <p className="text-xs text-green-700">Continuous growth & optimization</p>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowWeWorkSection() {
  return (
    <section className="py-24 bg-white">
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

        <div className="relative">
          <StickyScrollReveal content={workContent} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
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