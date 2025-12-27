import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  BarChart, 
  Globe, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const modules = [
    { 
      name: 'Content Quality & Relevance', 
      icon: Brain,
      description: 'AI-powered content analysis for semantic relevance',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Trust & EEAT Signals', 
      icon: Shield,
      description: 'Authority and expertise validation',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Citability Score', 
      icon: Target,
      description: 'Optimize for AI model citations',
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Non-Branded Keyword Coverage', 
      icon: Globe,
      description: 'Expand your topical authority',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Entity Relationships', 
      icon: BarChart,
      description: 'Knowledge graph positioning',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Technical SEO Foundation', 
      icon: Zap,
      description: 'Core web vitals and crawlability',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Brand Sentiment Analysis', 
      icon: CheckCircle,
      description: 'Reputation monitoring and insights',
      color: 'from-teal-500 to-cyan-500'
    },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI Citations Matter',
      description: 'Being cited by ChatGPT and Perplexity is the new page-one ranking. We optimize for AI model citations, not just keyword positions.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Trust Signals First',
      description: 'AI models prioritize authoritative, verified sources. We help you build the trust signals that matter to language models.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Context Over Keywords',
      description: 'AI understands meaning and relationships. We analyze your brand\'s semantic footprint across the entire digital ecosystem.',
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 via-blue-50 to-white py-24 px-4">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="container mx-auto text-center relative">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Native SEO Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-Native SEO
            </span>
            <br />
            <span className="text-slate-900">for the AI Search Era</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Optimize your brand visibility across <span className="font-semibold text-slate-900">ChatGPT</span>, 
            <span className="font-semibold text-slate-900"> Gemini</span>, and 
            <span className="font-semibold text-slate-900"> Perplexity</span> with 
            Kasparro's intelligent audit platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/app/audit">
                Run AI-SEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-slate-50" asChild>
              <Link href="/platform">Learn More</Link>
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>7-day free trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-slate-900">87%</p>
              <p className="text-slate-600 mt-1">AI Citation Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">10K+</p>
              <p className="text-slate-600 mt-1">Brands Audited</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">5M+</p>
              <p className="text-slate-600 mt-1">Queries Analyzed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">92%</p>
              <p className="text-slate-600 mt-1">Trust Score Avg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI-SEO Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              The New Era
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why AI-SEO is Different
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The future of search is conversational, intelligent, and AI-powered. 
              Traditional SEO tactics won't cut it anymore.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 bg-white group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Comprehensive Analysis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              7 Core Audit Modules
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI-powered analysis across every dimension of your brand's online presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border hover:border-blue-300 bg-gradient-to-br from-white to-slate-50 group">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-slate-900">{module.name}</h3>
                      <p className="text-sm text-slate-600">{module.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2" asChild>
              <Link href="/platform">
                See How It Works
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Pipeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-slate-700 border-slate-200">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How Kasparro Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Input Assembly', desc: 'Collect and analyze your brand data' },
              { step: '2', title: 'Context Pack', desc: 'Build comprehensive brand context' },
              { step: '3', title: 'AI Audit', desc: 'Run 7 parallel audit modules' },
              { step: '4', title: 'Insights', desc: 'Receive prioritized recommendations' },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 to-purple-300" />
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg relative z-10">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate AI Search?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto">
            Start your free AI-SEO audit today and see how your brand performs across AI engines
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold shadow-2xl" asChild>
            <Link href="/app/dashboard">
              Get Started Free
              <TrendingUp className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          
          <p className="mt-6 text-sm opacity-90">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}