import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './card';
import { 
  MessageCircle, 
  TrendingUp, 
  Zap, 
  PenTool, 
  Target,
  ArrowRight,
  Sparkles,
  BarChart3,
  Users,
  CheckCircle,
  Globe,
  Shield
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="relative"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-orange-600 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              WHAT WE DO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Every Service. One North Star:<br/>
              <span className="text-yellow-500">Growth That Lasts.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we build starts with a message — not just a media plan.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-6 gap-4">
            {/* Main Featured Service - Messaging Strategy */}
            <motion.div variants={itemVariants} className="col-span-full lg:col-span-3">
              <Card className="h-full bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                      <MessageCircle className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                      Core Service
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Messaging Strategy</h3>
                    <p className="text-gray-700 mb-4 text-lg">
                      Positioning that makes people stop, scroll, and say "this is for me."
                    </p>
                    <p className="text-gray-600 mb-6">
                      We dig deep into what makes your brand different — then translate it into messages that cut through noise. No corporate speak. No jargon. Just clear, compelling language that converts.
                    </p>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">3x Higher Engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">Brand Clarity</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-yellow-200">
                    <span className="text-sm text-gray-500">Most Popular</span>
                    <div className="flex items-center gap-2 text-sm text-yellow-700 group-hover:text-yellow-800 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Two Column Stack */}
            <div className="col-span-full lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Paid Growth */}
              <motion.div variants={itemVariants} className="col-span-1">
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 group border-gray-200">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Paid Growth</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-1">
                      Data-backed campaigns that speak to the right buyer, at the right moment.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>400% ROAS Average</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Funnel Architecture */}
              <motion.div variants={itemVariants} className="col-span-1">
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 group border-gray-200">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Funnel Systems</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-1">
                      End-to-end flows — no duct-taped pages or disjointed logic.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>65% Conversion Uplift</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Content Systems - Full Width */}
            <motion.div variants={itemVariants} className="col-span-full lg:col-span-4">
              <Card className="bg-white hover:shadow-lg transition-all duration-300 group border-gray-200">
                <CardContent className="p-8 sm:grid sm:grid-cols-2 sm:gap-8">
                  <div className="flex flex-col justify-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                      <PenTool className="w-7 h-7 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Systems</h3>
                    <p className="text-gray-600 mb-4">
                      Static, carousel, video & copy — crafted to convert, not just exist.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>10x Organic Reach</span>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-0 relative">
                    <div className="absolute top-2 right-2 flex gap-1">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <PenTool className="w-4 h-4 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2 bg-purple-200 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2 bg-blue-200 rounded w-2/3 mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Fractional CMO */}
            <motion.div variants={itemVariants} className="col-span-full lg:col-span-2">
              <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 group border-gray-200">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Fractional CMO</h3>
                  <p className="text-gray-600 mb-4 text-sm flex-1">
                    Strategy, leadership, execution — plugged into your team, minus the overhead.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-xs text-gray-600">C-Suite Leadership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-xs text-gray-600">Strategic Oversight</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>90% Client Retention</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div variants={itemVariants} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-yellow-500" />
                <span className="text-3xl font-bold text-gray-900">50+</span>
              </div>
              <p className="text-sm text-gray-600">Brands Scaled</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="text-3xl font-bold text-gray-900">300%</span>
              </div>
              <p className="text-sm text-gray-600">Average Growth</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <span className="text-3xl font-bold text-gray-900">95%</span>
              </div>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-3xl font-bold text-gray-900">$100M+</span>
              </div>
              <p className="text-sm text-gray-600">Revenue Generated</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}