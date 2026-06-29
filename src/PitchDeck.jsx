import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ArrowRight,
  PhoneMissed,
  Bot,
  CreditCard,
  Star,
  Search,
  Handshake,
  Smartphone,
  Factory
} from 'lucide-react';

const SlideShell = ({ children, bgClass }) => (
  <div className={`slide-shell w-full h-[56.25vw] min-h-[480px] max-h-[100vh] rounded-2xl overflow-hidden relative flex items-center justify-center ${bgClass}`}>
    {children}
  </div>
);

const ProfileCard = () => (
  <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md border border-gray-100">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center text-emerald font-heading font-bold text-2xl">
        ⚓
      </div>
      <div>
        <h3 className="font-heading font-bold text-xl text-navy">Dave's Plumbing & Heating</h3>
        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <Star className="w-4 h-4 text-amber fill-amber" />
          <span className="font-semibold text-gray-900">4.9</span>
          <span>(128 Google Reviews)</span>
        </div>
      </div>
    </div>
    
    <div className="space-y-3 mb-6">
      <div className="flex justify-between items-center py-2 border-b border-gray-100">
        <span className="text-gray-500 text-sm">License</span>
        <span className="font-semibold text-navy text-sm">#PL-849201 (Active)</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-gray-100">
        <span className="text-gray-500 text-sm">Insurance</span>
        <span className="font-semibold text-navy text-sm">Hiscox $2M General Liability</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-gray-100">
        <span className="text-gray-500 text-sm">In Business</span>
        <span className="font-semibold text-navy text-sm">12 Years</span>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2 mb-4">
      <div className="bg-gray-200 h-24 rounded-lg"></div>
      <div className="bg-gray-200 h-24 rounded-lg"></div>
      <div className="bg-gray-200 h-24 rounded-lg"></div>
    </div>

    <div className="text-[11px] text-gray-400 text-center italic">
      * As stated by the business owner
    </div>
  </div>
);

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mode, setMode] = useState('investor');

  const slidesCount = 14;

  const goNext = () => setCurrentSlide(s => Math.min(s + 1, slidesCount - 1));
  const goPrev = () => setCurrentSlide(s => Math.max(s - 1, 0));

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const slideTitles = [
    "The Hook", "LeadAnchor", "The Problem", "Cost of Inaction",
    "How It Works", "The Product", "Messaging Rails", "Trust Profile",
    "Unit Economics", "Market Size", "Go-to-Market", "Proof",
    "The Ask / Pitch", "Thank You"
  ];

  const slides = [
    // Slide 1 - Hook
    <SlideShell bgClass="bg-gradient-to-br from-navy to-[#0F315E]">
      <div className="text-center px-12">
        <div className="font-heading font-black text-[120px] text-emerald leading-none mb-4">62%</div>
        <div className="font-heading font-bold text-[28px] text-white leading-[1.4] mb-8">
          <p>of callers who reach voicemail</p>
          <p>don't leave a message.</p>
          <p>They call your competitor.</p>
        </div>
        <p className="text-slate text-lg mb-8">And you never even know they called.</p>
        <p className="text-slate/60 text-sm mt-12">
          {mode === 'investor' ? "Source: RingCentral, 2024" : "How many did YOU miss this week?"}
        </p>
      </div>
    </SlideShell>,

    // Slide 2 - Title
    <SlideShell bgClass="bg-gradient-to-br from-navy to-[#0F315E]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald/20 via-navy/0 to-transparent"></div>
      <div className="text-center z-10">
        <div className="w-24 h-24 rounded-full border-4 border-emerald mx-auto flex items-center justify-center text-4xl mb-8 shadow-[0_0_30px_rgba(0,208,132,0.3)]">
          <span className="text-emerald">⚓</span>
        </div>
        <h1 className="font-heading font-black text-[52px] mb-4 tracking-tight">
          <span className="text-white">Lead</span><span className="text-slate">Anchor</span>
        </h1>
        <p className="font-body text-xl text-white/70 mb-12">
          Revenue Automation OS for Small Service Businesses
        </p>
        <div className="inline-block border border-slate/30 bg-slate/10 backdrop-blur rounded-full px-6 py-2 text-white/90">
          {mode === 'investor' 
            ? "Seed round · $45/mo SaaS · 79% gross margin" 
            : "Catch every missed call. Collect every dollar."}
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center text-slate text-xs">
          Confidential — October 2024
        </div>
      </div>
    </SlideShell>,

    // Slide 3 - The Problem
    <SlideShell bgClass="bg-white">
      <div className="grid grid-cols-2 gap-16 px-20 items-center w-full max-w-6xl">
        <div>
          <div className="text-red uppercase text-xs font-bold tracking-wider mb-4">The problem</div>
          <h2 className="font-heading font-extrabold text-[36px] text-navy leading-tight mb-6">
            You're losing jobs while you're doing jobs.
          </h2>
          <p className="font-body text-gray-500 text-lg leading-[1.7]">
            Every missed call is a customer who just dialed your competitor. Most small service businesses lose 3–5 calls per week — and they don't even know it.
          </p>
        </div>
        <div className="space-y-6">
          {[
            { stat: "62%", desc: "Callers who won't leave voicemail", val: mode === 'investor' ? 'Industry Avg' : 'Missed leads' },
            { stat: "$1,425", desc: "Potential weekly revenue lost", val: mode === 'investor' ? 'TAM indicator' : 'Your money' },
            { stat: "21×", desc: "Less likely to convert after 30 min", val: mode === 'investor' ? 'Conversion drop' : 'Speed matters' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg border-l-4 border-l-red p-6 flex items-center gap-6">
              <div className="font-heading font-black text-4xl text-navy w-24">{item.stat}</div>
              <div>
                <div className="font-body font-semibold text-gray-900">{item.desc}</div>
                <div className="text-sm text-gray-400 mt-1">{item.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>,

    // Slide 4 - Cost of Inaction
    <SlideShell bgClass="bg-gray-100">
      <div className="text-center w-full max-w-4xl px-8">
        <h2 className="font-heading font-extrabold text-[32px] text-navy mb-16">
          {mode === 'investor' ? "The Total Addressable Pain" : "One missed call. One week. The math."}
        </h2>

        {mode === 'investor' ? (
          <div className="bg-white rounded-2xl p-12 shadow-xl mb-12">
            <div className="grid grid-cols-3 gap-8 text-center divide-x divide-gray-200">
              <div>
                <div className="font-heading font-bold text-4xl text-navy mb-2">74M</div>
                <div className="text-gray-500">SMBs in US</div>
              </div>
              <div>
                <div className="font-heading font-bold text-4xl text-navy mb-2">15M</div>
                <div className="text-gray-500">Service businesses</div>
              </div>
              <div>
                <div className="font-heading font-bold text-4xl text-emerald mb-2">$8.1B</div>
                <div className="text-gray-500">Addressable revenue</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 shadow-xl inline-block text-left mb-12 min-w-[500px]">
            <div className="font-heading text-2xl text-navy flex justify-between mb-4">
              <span>4 missed calls/week</span>
              <span className="text-gray-400">× $285 avg job</span>
            </div>
            <div className="h-px bg-gray-200 my-6"></div>
            <div className="font-heading text-2xl text-navy flex justify-between mb-4">
              <span>= $1,140</span>
              <span className="text-gray-400">missed revenue / week</span>
            </div>
            <div className="h-px bg-gray-200 my-6"></div>
            <div className="font-heading text-3xl text-navy flex justify-between mb-8">
              <span>= $59,280</span>
              <span className="text-gray-400">left on the table / year</span>
            </div>
            <div className="font-heading font-black text-[64px] text-emerald text-center leading-none">
              $59,280
            </div>
          </div>
        )}

        <div className="font-heading font-bold text-xl text-navy mb-2">
          LeadAnchor costs $45/month. That's $540/year.
        </div>
        <div className="text-gray-500 text-lg">
          The ROI isn't a question.
        </div>
      </div>
    </SlideShell>,

    // Slide 5 - How it works
    <SlideShell bgClass="bg-white">
      <div className="w-full max-w-6xl px-12">
        <h2 className="font-heading font-extrabold text-[28px] text-navy text-center mb-16">
          From missed call to paid invoice — automatically.
        </h2>
        <div className="flex justify-between items-start relative">
          <div className="absolute top-6 left-12 right-12 h-0.5 bg-emerald/30 -z-10 hidden md:block"></div>
          {[
            { num: 1, title: "Call comes in", desc: "AI Dispatcher", tag: "Phone" },
            { num: 2, title: "AI replies 30s", desc: "Books the job", tag: "RCS / SMS" },
            { num: 3, title: "Lead in CRM", desc: "Auto-created", tag: "Kanban" },
            { num: 4, title: "Quote + invoice", desc: "1-click pay", tag: "Email + Stripe" },
            { num: 5, title: "Review request", desc: "Auto-sent", tag: "RCS + Google" }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center w-48 relative bg-white">
              <div className="w-12 h-12 rounded-full bg-navy text-white font-heading font-bold flex items-center justify-center text-xl mb-6 shadow-lg z-10 border-4 border-white">
                {step.num}
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{step.desc}</p>
              <span className="text-[10px] uppercase tracking-wider bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>,

    // Slide 6 - The Product
    <SlideShell bgClass="bg-gradient-to-br from-navy to-[#0F315E]">
      <div className="w-full max-w-5xl px-12 grid grid-cols-2 gap-16 items-center">
        <div className="relative mx-auto w-72 h-[500px] bg-white rounded-[3rem] border-8 border-slate shadow-2xl overflow-hidden flex flex-col">
          <div className="bg-gray-50 p-4 border-b border-gray-100">
            <div className="font-heading font-bold text-navy text-lg text-center">LeadAnchor</div>
          </div>
          <div className="p-4 space-y-3 bg-gray-100 flex-1 overflow-hidden">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-navy text-sm">New Missed Call</div>
                  <div className="text-emerald text-xs font-bold">Responded</div>
                </div>
                <div className="text-gray-500 text-xs">(555) 019-{i}842</div>
              </div>
            ))}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              {mode === 'investor' 
                ? <div className="inline-block bg-emerald text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">Metric: 18k MAU</div>
                : <div className="inline-block bg-emerald text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">+14 leads this week</div>
              }
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading font-extrabold text-[28px] text-white mb-10 leading-tight">
            One dashboard. Every customer. Fully automatic.
          </h2>
          <div className="space-y-6">
            {[
              { icon: PhoneMissed, text: "Missed call capture — no app changes" },
              { icon: Bot, text: "AI Dispatcher — replies before you even see it" },
              { icon: CreditCard, text: "Stripe invoices — customers pay in seconds" },
              { icon: Star, text: "Review automation — after every job" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-emerald/20 p-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-emerald" />
                </div>
                <div className="text-white text-lg">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>,

    // Slide 7 - Messaging Rails
    <SlideShell bgClass="bg-white">
      <div className="w-full max-w-6xl px-12">
        <h2 className="font-heading font-extrabold text-[28px] text-navy mb-12 text-center">
          The right message, on the right channel, every time.
        </h2>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* RCS */}
          <div className="bg-white border-2 border-slate rounded-2xl p-6 shadow-lg">
            <div className="inline-block bg-slate text-white text-xs font-bold px-3 py-1 rounded mb-4">[RCS / SMS]</div>
            <h3 className="font-heading font-bold text-xl text-navy mb-4">Push Notifications</h3>
            <ul className="text-gray-600 text-sm space-y-3 mb-6">
              <li className="flex items-start gap-2"><span>•</span> Webform link</li>
              <li className="flex items-start gap-2"><span>•</span> Quote & deposit alerts</li>
              <li className="flex items-start gap-2"><span>•</span> Review + final pay combo</li>
            </ul>
            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 italic">
              Rule: All push messaging with actionable links
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white border-2 border-[#25D366] rounded-2xl p-6 shadow-lg">
            <div className="inline-block bg-[#25D366] text-white text-xs font-bold px-3 py-1 rounded mb-4">[WhatsApp]</div>
            <h3 className="font-heading font-bold text-xl text-navy mb-4">Conversational</h3>
            <ul className="text-gray-600 text-sm space-y-3 mb-6">
              <li className="flex items-start gap-2"><span>•</span> Booking bot chats</li>
              <li className="flex items-start gap-2"><span>•</span> Customer-initiated queries</li>
              <li className="flex items-start gap-2"><span>•</span> Utility templates (24h)</li>
            </ul>
            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 italic">
              Rule: Pull-only — customer starts it
            </div>
          </div>

          {/* Email */}
          <div className="bg-white border-2 border-amber rounded-2xl p-6 shadow-lg">
            <div className="inline-block bg-amber text-white text-xs font-bold px-3 py-1 rounded mb-4">[Email + Nudge]</div>
            <h3 className="font-heading font-bold text-xl text-navy mb-4">Durable Records</h3>
            <ul className="text-gray-600 text-sm space-y-3 mb-6">
              <li className="flex items-start gap-2"><span>•</span> Primary invoice delivery</li>
              <li className="flex items-start gap-2"><span>•</span> Payment links</li>
              <li className="flex items-start gap-2"><span>•</span> Final receipts</li>
            </ul>
            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 italic">
              Rule: Email-primary for trust + durable record
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto">
          Payment is email-primary to provide a durable record and avoid SMS hesitation. Review + final pay are clubbed in one RCS send to save messaging costs and reduce friction.
        </p>
      </div>
    </SlideShell>,

    // Slide 8 - Trust Profile
    <SlideShell bgClass="bg-gray-100">
      <div className="grid grid-cols-2 gap-16 px-16 items-center w-full max-w-6xl">
        <div>
          <div className="text-emerald uppercase text-xs font-bold tracking-wider mb-4">Built-in trust</div>
          <h2 className="font-heading font-extrabold text-[28px] text-navy leading-tight mb-6">
            Every first message includes your credentials.
          </h2>
          <p className="font-body text-gray-600 mb-8 leading-relaxed">
            The moment LeadAnchor contacts a new lead, it sends your profile card automatically — license, insurance, Google rating, proof-of-work photos. Customers trust you before they speak to you.
          </p>
          <ul className="space-y-3 text-navy font-medium mb-8">
            <li className="flex items-center gap-3"><span className="text-emerald text-xl">✓</span> License number</li>
            <li className="flex items-center gap-3"><span className="text-emerald text-xl">✓</span> Insurance carrier</li>
            <li className="flex items-center gap-3"><span className="text-emerald text-xl">✓</span> Google rating (live)</li>
            <li className="flex items-center gap-3"><span className="text-emerald text-xl">✓</span> Years in business</li>
            <li className="flex items-center gap-3"><span className="text-emerald text-xl">✓</span> Proof-of-work gallery</li>
          </ul>
          <p className="text-xs text-gray-400 italic">
            Self-attested fields are labeled 'As stated by the business owner' — never 'Verified' until third-party checked.
          </p>
        </div>
        <div className="flex justify-center">
          <ProfileCard />
        </div>
      </div>
    </SlideShell>,

    // Slide 9 - Unit Economics (or hidden for SMB)
    mode === 'investor' ? (
      <SlideShell bgClass="bg-gradient-to-br from-navy to-[#0F315E]">
        <div className="w-full max-w-6xl px-12">
          <div className="text-emerald uppercase text-xs font-bold tracking-wider mb-2">Unit economics</div>
          <h2 className="font-heading font-extrabold text-[28px] text-white mb-12">
            Strong margins. Strong retention. Simple model.
          </h2>

          <div className="grid grid-cols-2 gap-16">
            <div className="grid grid-cols-2 gap-4">
              {[
                { top: "$45 / $105", bot: "Starter / Pro ARPU" },
                { top: "79%", bot: "Gross margin" },
                { top: "6.1×", bot: "LTV to CAC" },
                { top: "$14.50", bot: "COGS per subscriber" }
              ].map((m, i) => (
                <div key={i} className="bg-white/5 border border-emerald/30 rounded-xl p-6 text-center backdrop-blur flex flex-col justify-center">
                  <div className="font-heading font-bold text-3xl text-white mb-2">{m.top}</div>
                  <div className="text-slate text-sm font-medium">{m.bot}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-white font-heading font-bold text-lg mb-6">What $14.50 buys per sub/mo:</h3>
              <div className="space-y-3 text-sm font-mono text-white/80">
                <div className="flex justify-between"><span>Telnyx (calls + SMS)</span><span>$8.50</span></div>
                <div className="flex justify-between"><span>RCS messaging</span><span>$2.20</span></div>
                <div className="flex justify-between"><span>Email infra</span><span>$0.80</span></div>
                <div className="flex justify-between"><span>AI Dispatcher (voice)</span><span>$2.00</span></div>
                <div className="flex justify-between"><span>Payment + hosting</span><span>$1.00</span></div>
                <div className="h-px bg-white/20 my-4"></div>
                <div className="flex justify-between font-bold text-white"><span>Total COGS</span><span>$14.50</span></div>
                <div className="flex justify-between font-bold text-white"><span>Monthly revenue</span><span>$45.00</span></div>
                <div className="flex justify-between font-bold text-emerald text-lg mt-2"><span>Gross profit</span><span>$30.50</span></div>
                <div className="flex justify-between font-bold text-emerald"><span>Gross margin</span><span>67.8%</span></div>
              </div>
              <div className="mt-6 text-xs text-slate">Pro tier at $105: ~$17 COGS → $88 gross → 84% GM</div>
            </div>
          </div>
        </div>
      </SlideShell>
    ) : (
      // Replacement for SMB mode slide 9 - Pricing Comparison
      <SlideShell bgClass="bg-white">
        <div className="w-full max-w-4xl px-12 text-center">
          <h2 className="font-heading font-extrabold text-[32px] text-navy mb-6">
            Cheaper than a receptionist. Faster than you.
          </h2>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-gray-500 mb-4">Human Receptionist</h3>
              <div className="font-heading font-black text-4xl text-gray-400 mb-8">$2,500<span className="text-lg">/mo</span></div>
              <ul className="text-left space-y-3 text-gray-500">
                <li>• Sleeps at night</li>
                <li>• Takes sick days</li>
                <li>• Can't text instantly</li>
                <li>• Makes mistakes</li>
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-8 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald text-white px-4 py-1 rounded-full text-sm font-bold">
                LeadAnchor
              </div>
              <h3 className="font-heading font-bold text-xl text-emerald mb-4">Starter Plan</h3>
              <div className="font-heading font-black text-4xl text-white mb-8">$45<span className="text-lg text-slate">/mo</span></div>
              <ul className="text-left space-y-3 text-white">
                <li><span className="text-emerald">✓</span> 24/7/365 coverage</li>
                <li><span className="text-emerald">✓</span> Replies in 30 seconds</li>
                <li><span className="text-emerald">✓</span> Auto-books jobs</li>
                <li><span className="text-emerald">✓</span> Collects payments</li>
              </ul>
            </div>
          </div>
        </div>
      </SlideShell>
    ),

    // Slide 10 - Market Size
    <SlideShell bgClass="bg-white">
      <div className="w-full max-w-5xl px-12 text-center">
        <h2 className="font-heading font-extrabold text-[28px] text-navy mb-16">
          A large, underserved market with low digital adoption.
        </h2>
        
        <div className="flex justify-center items-center gap-16">
          <div className="relative w-80 h-80">
            {/* SVG Circles */}
            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
              <circle cx="50" cy="50" r="48" fill="rgba(11,36,71,0.06)" />
              <circle cx="50" cy="50" r="34" fill="rgba(87,108,188,0.12)" />
              <circle cx="50" cy="50" r="20" fill="rgba(0,208,132,0.15)" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="absolute top-[8%] text-xs font-semibold text-navy">74M SMBs (US)</div>
              <div className="absolute top-[28%] text-xs font-semibold text-slate">15M Service</div>
              <div className="absolute top-[45%] text-[10px] font-bold text-emerald text-center">3M<br/>Trade<br/>+ Salon</div>
            </div>
          </div>

          <div className="space-y-8 text-left">
            <div>
              <div className="font-heading font-bold text-2xl text-navy">TAM: $8.1B</div>
              <div className="text-gray-500">74M SMBs × $9/mo avg digital tools ARPU</div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl text-navy">SAM: $2.7B</div>
              <div className="text-gray-500">15M service businesses</div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl text-emerald">SOM: $108M</div>
              <div className="text-gray-500">3M target × $45/mo × 8% penetration, Yr3</div>
            </div>
          </div>
        </div>
        
        <p className="mt-16 text-gray-500 text-sm max-w-2xl mx-auto">
          Less than 5% of US service businesses have any form of automated lead management. This is a greenfield opportunity.
        </p>
      </div>
    </SlideShell>,

    // Slide 11 - GTM
    <SlideShell bgClass="bg-gray-100">
      <div className="w-full max-w-5xl px-12">
        <h2 className="font-heading font-extrabold text-[28px] text-navy mb-12 text-center">
          We reach SMBs where they already trust information.
        </h2>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Search, title: "Organic search", body: "Owners search 'missed call software' or 'HVAC CRM' when they feel the pain. We answer their question and offer a free trial. CAC: $0." },
            { icon: Handshake, title: "Owner-to-owner referral", body: "Every happy owner tells their trade network. Our referral programme gives one free month per referral. Referral multiplier: 3.2×." },
            { icon: Smartphone, title: "Show, don't tell", body: "We approach SMBs with a demo that shows their actual missed call volume from last week. The demo is the sales call. Close rate: 40%+." },
            { icon: Factory, title: "Supplier + association channels", body: "Plumbing distributors and beauty associations reach tens of thousands of operators. One partnership outperforms months of cold outreach." }
          ].map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex gap-4">
              <div className="bg-navy/5 p-3 rounded-lg h-fit text-navy">
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-navy mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>,

    // Slide 12 - Proof
    <SlideShell bgClass="bg-white">
      <div className="w-full max-w-6xl px-12 text-center flex flex-col h-full justify-center pb-12">
        <h2 className="font-heading font-extrabold text-[28px] text-navy mb-12">
          Early results from pilot businesses.
        </h2>
        
        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { name: "Apex HVAC", stat: "$4,200", label: "Extra revenue / week", quote: "I didn't realize how much business I was losing to voicemail." },
            { name: "Sarah's Salon", stat: "14", label: "Auto-bookings / week", quote: "My phone stopped ringing, but my schedule filled up." },
            { name: "Elite Roofing", stat: "30%", label: "Faster invoice payments", quote: "Customers pay from the link before we even leave the driveway." }
          ].map((card, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald/10 rounded-bl-full"></div>
              <h3 className="font-bold text-navy mb-1">{card.name}</h3>
              <div className="font-heading font-black text-3xl text-emerald mb-1">{card.stat}</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">{card.label}</div>
              <p className="text-gray-600 text-sm italic">"{card.quote}"</p>
            </div>
          ))}
        </div>

        <div className="bg-navy text-emerald py-3 px-8 rounded-full inline-flex font-mono text-sm mx-auto shadow-lg shadow-navy/20">
          <span className="mx-2">⚡ $840 captured</span>
          <span className="mx-2 opacity-30">·</span>
          <span className="mx-2">⚡ 14 bookings in 2 weeks</span>
          <span className="mx-2 opacity-30">·</span>
          <span className="mx-2">⚡ 30% faster closes</span>
        </div>
      </div>
    </SlideShell>,

    // Slide 13 - The Ask
    <SlideShell bgClass={mode === 'investor' ? "bg-gradient-to-br from-navy to-[#0F315E]" : "bg-gradient-to-br from-emerald to-[#00A368]"}>
      <div className="text-center w-full max-w-3xl px-12">
        {mode === 'investor' ? (
          <>
            <div className="text-emerald uppercase font-bold tracking-wider mb-6">The ask</div>
            <h2 className="font-heading font-black text-[48px] text-white mb-10">Seed round — $1.5M</h2>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur border border-white/20 text-left mb-8">
              <ul className="space-y-4 text-white text-lg">
                <li className="flex gap-4"><span className="text-emerald">🛠️</span> Engineering — real-time Telnyx + Stripe</li>
                <li className="flex gap-4"><span className="text-emerald">📈</span> Growth — first 500 paying SMBs</li>
                <li className="flex gap-4"><span className="text-emerald">🤝</span> Partnerships — 3 trade association deals</li>
                <li className="flex gap-4"><span className="text-emerald">⚖️</span> Legal — credential verification framework</li>
              </ul>
            </div>
            
            <div className="text-slate font-medium text-lg">
              Timeline: MVP1 → pilot → 500 customers → Series A
            </div>
          </>
        ) : (
          <>
            <h2 className="font-heading font-black text-[42px] text-white mb-10 leading-tight">
              Here's what changes on Monday.
            </h2>
            <div className="bg-white rounded-2xl p-8 text-left mb-8 shadow-2xl text-navy">
              <ul className="space-y-4 text-lg font-medium">
                <li className="flex gap-4"><span className="text-emerald text-xl">📞</span> Every missed call gets an instant reply</li>
                <li className="flex gap-4"><span className="text-emerald text-xl">📋</span> Every caller is a lead card — no manual entry</li>
                <li className="flex gap-4"><span className="text-emerald text-xl">💳</span> Every invoice has a Stripe link</li>
                <li className="flex gap-4"><span className="text-emerald text-xl">⭐</span> Every job asks for a review automatically</li>
              </ul>
            </div>
            <p className="text-white font-medium mb-6">
              14-day free trial. $45/mo after. Cancel any time.
            </p>
            <button className="bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto shadow-xl">
              Start your free trial <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </SlideShell>,

    // Slide 14 - Thank You
    <SlideShell bgClass="bg-gradient-to-br from-emerald to-[#00A368]">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full border-4 border-white mx-auto flex items-center justify-center text-3xl mb-6 bg-navy text-white shadow-xl">
          ⚓
        </div>
        <h1 className="font-heading font-black text-[48px] text-white mb-12">
          Every missed call, captured.
        </h1>
        
        <div className="bg-white/20 backdrop-blur border border-white/30 rounded-2xl p-8 text-white mb-12 inline-block shadow-lg">
          <div className="text-xl font-bold mb-2">hello@leadanchor.com</div>
          <div className="text-xl font-bold mb-2">leadanchor.com</div>
          <div className="text-lg opacity-80">@leadanchor</div>
        </div>

        <div>
          <button className="bg-white text-[#00A368] font-extrabold px-8 py-3 rounded-full hover:shadow-lg transition-shadow flex items-center gap-2 mx-auto">
            See a live demo <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center text-white/70 text-sm font-medium">
          {mode === 'investor' 
            ? "Confidential — not for distribution. October 2024."
            : "Join 500+ service businesses catching every call."}
        </div>
      </div>
    </SlideShell>
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4 print:p-0 print:bg-white print:block">
      
      {/* Top Bar - Not printed */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-navy text-white flex items-center justify-between px-4 sm:px-6 z-50 deck-nav shadow-lg">
        <div className="font-heading font-bold flex items-center gap-2 text-lg sm:text-xl truncate pr-2">
          <span className="text-emerald">⚓</span> <span className="hidden lg:inline">LeadAnchor</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="flex bg-slate/20 rounded-lg p-1 mode-toggle">
            <button 
              onClick={() => setMode('investor')}
              className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-colors ${mode === 'investor' ? 'bg-navy text-white shadow' : 'text-white/60 hover:text-white'}`}
            >
              Investor
            </button>
            <button 
              onClick={() => setMode('smb')}
              className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-colors ${mode === 'smb' ? 'bg-navy text-white shadow' : 'text-white/60 hover:text-white'}`}
            >
              <span className="hidden sm:inline">SMB Owner</span>
              <span className="inline sm:hidden">SMB</span>
            </button>
          </div>
          
          <button 
            onClick={() => window.print()}
            title="Opens print dialog — Save as PDF in your browser."
            className="download-btn flex items-center gap-2 text-xs sm:text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors font-medium whitespace-nowrap flex-shrink-0"
          >
            <Download className="w-4 h-4" /> <span className="hidden lg:inline">Download PDF</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-[3px] bg-navy z-40 deck-nav">
        <div 
          className="h-full bg-emerald transition-all duration-300 ease-out"
          style={{ width: `${(currentSlide / (slidesCount - 1)) * 100}%` }}
        />
      </div>

      {/* Slide Container */}
      <div className="w-full max-w-[1200px] mt-20 mb-24 print:m-0 print:max-w-none transition-all">
        {slides[currentSlide]}
      </div>

      {/* Hidden print-only all slides rendering */}
      <div className="hidden print:block w-full">
        {slides.map((slide, idx) => (
          <div key={idx} className={idx === 0 ? "" : "break-before-page"}>
            {slide}
          </div>
        ))}
      </div>

      {/* Bottom Nav Bar - Not printed */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-full shadow-2xl border border-gray-200 px-2 py-2 flex items-center gap-3 sm:gap-6 z-50 deck-nav w-[92%] max-w-[420px] justify-between">
        <button 
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-navy text-white disabled:opacity-30 disabled:bg-gray-400 transition-colors flex-shrink-0 hover:bg-[#0F315E]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="text-xs sm:text-sm font-semibold text-gray-500 text-center truncate flex-1">
          <span className="hidden sm:inline">Slide </span>{currentSlide + 1} of {slidesCount} <span className="mx-1 sm:mx-2 opacity-50">·</span> <span className="text-gray-900 truncate">{slideTitles[currentSlide]}</span>
        </div>

        <button 
          onClick={goNext}
          disabled={currentSlide === slidesCount - 1}
          className="p-2 rounded-full bg-emerald text-white disabled:opacity-30 disabled:bg-gray-400 transition-colors flex-shrink-0 hover:bg-[#00A368]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
