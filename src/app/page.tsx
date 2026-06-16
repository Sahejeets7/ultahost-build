import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const badgeClass =
   "bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-3.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1";
const serverImageClass =
   "w-full object-contain rounded-xl border border-slate-100 mx-auto pr-1.5";
const cardGridClass =
   "max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-26 gap-y-20";
const outerWrapClass =
   "flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black";
const innerWrapClass =
   "min-h-screen bg-[#f8f9fa] p-4 md:p-8 lg:p-24 font-sans text-slate-900 justify-center";

const speedWidgetClass =
   "absolute bottom-1/4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-30 z-20 flex flex-col items-center";


export default function Home() {
   return (
      <main className={outerWrapClass}>
         <div className={innerWrapClass}>
            <div className={cardGridClass}>
               {/* Card 1 */}
               <FeatureCard
                  badge={
                     <Badge className={badgeClass}>
                        <Zap className="w-3.5 h-3.5 fill-current" /> Performance
                     </Badge>
                  }
                  title={
                     <h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-slate-800 leading-tight">
                        <strong>Raw Power</strong> for Your Windows Workloads
                     </h2>
                  }
                  description={
                     <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Don't let legacy hardware bottle-neck your applications. We pair
                        the latest AMD EPYC™ processors with enterprise-grade NVMe storage
                        to deliver sub-second response times for even the most complex
                        MSSQL queries and .NET processes.
                     </p>
                  }
                  imageSection={
                     <div className="w-full relative mt-auto pb-1 m-1 overflow-hidden">
                        <Image
                           src="/Image.png"
                           alt="AMD EPYC Server"
                           width={400}
                           height={200}
                           className={serverImageClass}
                           priority
                        />
                        <div
                           className="absolute left-1/2 top-5 w-[92px] -translate-x-1/2
                     bg-white rounded-2xl shadow-xl border 
                        border-slate-100 p-3 z-10 flex 
                        flex-col items-center"
                        >
                           <Image width={100} height={100} src="/logo.png" alt="logo" className="w-full h-full object-contain" draggable={false} />
                        </div>
                        <div className={speedWidgetClass}>
                           <div className="flex items-center gap-2 text-slate-500 font-sans text-xs font-medium mb-2">
                              <Zap className="w-3 h-3" /> Site Speed
                           </div>
                           <div className="relative w-24 h-[48px] flex items-end justify-center ">
                              <Image
                                 src="/Vector.png"
                                 alt=""
                                 width={92}
                                 height={48}
                                 draggable={false}
                                 className="absolute top-0 left-1/2 -translate-x-1/2 w-[92px] h-auto object-contain pointer-events-none select-none"
                              />
                              <div className="relative z-10 flex flex-col items-center pt-6">
                                 <div className="font-sans  font-bold text-[15px] text-[#639b63] leading-none">99.84</div>
                                 <div className="text-[8px] text-slate-400 font-sans">Loads in 1.27s</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  }
               />

               {/* Card 2 */}
               <FeatureCard
                  badge={
                     <Badge className={badgeClass}>
                        <Zap className="w-3.5 h-3.5 fill-current" /> Management
                     </Badge>
                  }
                  title={
                     <h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-slate-800 leading-tight">
                        <strong>Security That Predicts.</strong> <br />Defense That Evolves.
                     </h2>
                  }
                  description={
                     <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Forget manual scans and reactive patching. We've built an intelligent
                        defense layer that anticipates threats before they strike. By combining
                        Monarx's behavioral analysis with Honcy's proactive patching, your store stays secure,
                        updated, and optimized.
                     </p>
                  }
                  imageSection={
                     <div className="w-full relative mt-auto pb-1  overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-tr from-green-100/50 via-cyan-50/50 to-white -z-10 rounded-b-[32px] opacity-70"></div>
                        {/* Abstract blobs */}
                        <div className="relative flex flex-row">
                           <img src="/card2.png" alt="Agent" className="w-full h-full object-top" />
                        </div>
                     </div>
                  }
               />

               {/* card 3 */}
               <FeatureCard
                  badge={
                     <Badge className={badgeClass}>
                        <Zap className="w-3.5 h-3.5 fill-current" /> AI Assistant
                     </Badge>
                  }
                  title={
                     <h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-slate-800 leading-tight">
                        <strong>Effortless Windows</strong> <br />Management With AI Support.
                     </h2>
                  }
                  description={
                     <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Managing your Windows server has never been this intuitive. Our AI-driven
                        assistant helps you monitor system resources, execute rapid speed tests, and
                        deploy essential applications like WordPress with simple commands.
                     </p>
                  }
                  imageSection={
                     <div className="w-full relative mt-auto pt-12 pb-1 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-tr from-green-100/50 via-cyan-50/50 to-white -z-10 rounded-b-[32px] opacity-70"></div>
                        {/* Abstract blobs */}
                        <div className="relative flex flex-row m-1">
                           <Image width={100} height={100} src="/card3.png" alt="Agent" className="w-full h-full object-top" />
                        </div>
                     </div>
                  }
               />

               {/* Card 4 */}
               <FeatureCard
                  badge={
                     <Badge className={badgeClass}>
                        <Zap className="w-3.5 h-3.5 fill-current" /> Support
                     </Badge>
                  }
                  title={
                     <h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-slate-800 leading-tight">
                        <strong>Expert Assistance</strong> <br />When Every Second Counts.
                     </h2>
                  }
                  description={
                     <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Focus on your business while our senior engineers handle the technical heavy lifting. From white-glove migrations to 24/7 proactive monitoring, we provide everything.
                     </p>
                  }
                  imageSection={
                     <div className="w-full relative mt-auto pt-12 pb-1 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-tr from-green-100/50 via-cyan-50/50 to-white -z-10 rounded-b-[32px] opacity-20"></div>
                        <div className="relative flex flex-row m-1">
                           <Image width={100} height={100} src="/card4.png" alt="Agent" className="w-full h-full object-top" />
                        </div>
                        {/* Chat Bubble 1 (User) */}
                        <div className="absolute flex items-center bottom-28 left-6 md:left-12 bg-white rounded-2xl shadow-xl p-3 mb-2 gap-3 max-w-[240px] z-20">
                           <div className="w-14 h-15 rounded-full bg-blue-500 overflow-hidden shrink-0 border-2 border-white shadow-sm">
                              <Image width={100} height={100} src="/person-1.png" alt="User" className="w-full h-full object-cover object-top" />
                           </div>
                           <span className="text-xs text-slate-700 font-medium leading-tight">
                              Hello, would you please help me migrate to HostOnce?
                           </span>

                        </div>

                        {/* Chat Bubble 2 (Agent) */}
                        <div className="absolute bottom-6 right-6 md:right-12 bg-[#2c2c2e]/95 backdrop-blur-md rounded-2xl shadow-xl p-3 flex items-center gap-3 max-w-[260px] z-20">
                           <div className="text-xs text-white/90 font-medium leading-tight text-right flex-1">
                              Sure thing Alex, let's start the migration process for your site.
                           </div>
                           <div className="w-14 h-15 rounded-full bg-green-500 overflow-hidden shrink-0 border-2 border-[#2c2c2e] shadow-sm">
                              <Image width={100} height={100} src="/person.png" alt="Agent" className="w-full h-full object-cover object-top" />
                           </div>
                        </div>
                     </div>

                  }
               />
            </div>
         </div>
      </main>
   );
}