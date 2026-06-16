import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Download, HardDrive, Play, Plus, Sparkles, Zap } from "lucide-react";
import clsx from "clsx";

const cardClass =
   "overflow-hidden border-0 shadow-xl shadow-slate-200/50 rounded-[32px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";
const badgeClass =
   "bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1";
const serverImageClass =
   "w-full object-contain rounded-2xl shadow-lg border border-slate-100 mx-auto";
const cardGridClass =
   "max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8";
const outerWrapClass =
   "flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black";
const innerWrapClass =
   "min-h-screen bg-[#f8f9fa] p-4 md:p-8 lg:p-24 font-sans text-slate-900 justify-center";

const speedWidgetClass =
   "absolute bottom-1/4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-30 z-20 flex flex-col items-center";

export default function Home() {
   return (
      <div className={outerWrapClass}>
         <div className={innerWrapClass}>
            <div className={cardGridClass}>
               {/* Card 1 */}
               <Card className={cardClass}>
                  <div className="px-8 md:px-12 pt-10 text-center max-w-lg flex flex-col items-center">
                     <Badge className={badgeClass}>
                        <Zap className="w-3.5 h-3.5 fill-current" /> Performance
                     </Badge>
                     <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-800 leading-tight">
                        Raw Power for Your Windows Workloads
                     </h2>
                     <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Don't let legacy hardware bottle-neck your applications. We pair
                        the latest AMD EPYC™ processors with enterprise-grade NVMe storage
                        to deliver sub-second response times for even the most complex
                        MSSQL queries and .NET processes.
                     </p>
                  </div>

                  {/* <div className="w-full relative mt-auto px-6 pt-12 overflow-hidden"> */}
                  <div className="w-full relative mt-auto overflow-hidden">

                     {/* <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 via-green-50/50 to-white -z-10 rounded-b-[32px] opacity-70"></div> */}

                     <Image
                        src="/Image.png"
                        alt="AMD EPYC Server"
                        width={400}
                        height={200}
                        className={serverImageClass}
                        priority
                     />
                     {/* Abstract blobs */}
                     <div className="absolute left-1/2 top-5 w-[92px] -translate-x-1/2
                     bg-white rounded-2xl shadow-xl border 
                        border-slate-100 p-3 w-60 z-10 flex 
                        flex-col items-center">
                        <img src="/logo.png" alt="logo" className="w-full h-full object-contain" draggable={false} />
                     </div>


                     {/* Try increasing z-index: move from -z-10 to z-10 or z-0 to test visibility */}
                     {/* 
                       Adjusted vector position, sizing, and z-index to closely match screenshot art placement.
                       The vector arch should visually intersect the code block image on the right,
                       with a soft greenish blur, partial overlay atop the card but below the "code" art.
                     */}
                     {/* <div
                        className="absolute right-4 top-1/2 -translate-y-1/3 w-[120px] h-[120px] bg-green-200/40 rounded-full z-0 pointer-events-none"
                     // style={{
                     //    filter: "blur(2.5px)",
                     // }}
                     >
                        <img
                           src="/Vector.png"
                           alt="vector"
                           className="w-full h-full object-contain mix-blend-multiply opacity-85 select-none"
                           draggable={false}
                        />
                     </div> */}

                     {/* Floating Speed Widget */}
                     {/*
                        speedWidgetClass: Floating speed/statistic widget for card.
                     */}
                     <div className={speedWidgetClass}>

                        <div className="flex items-center gap-2 text-slate-500 font-sans text-xs font-medium mb-2">
                           <Zap className="w-3 h-3" /> Site Speed
                        </div>
                        <div className="relative w-24 h-[48px] flex items-end justify-center">
                           <img
                              src="/Vector.png"
                              alt=""
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

               </Card>
               {/* Card 2 */}
               <Card className={cardClass}>
                  <div className="px-8 md:px-12 pt-10 text-center max-w-lg flex flex-col items-center">
                     <Badge className={badgeClass}>
                        <Zap className="w-3.5 h-3.5 fill-current" /> Management
                     </Badge>
                     <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-800 leading-tight">
                        Security That Predicts.<br />Defense That Evolves.
                     </h2>
                     <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Forget manual scans and reactive patching. We've built an intelligent
                        defense layer that anticipates threats before they strike. By combining
                        Monarx's behavioral analysis with Honcy's proactive patching, your store stays secure,
                        updated, and optimized.
                     </p>
                  </div>

                  <div className="w-full relative mt-auto pt-12 overflow-hidden">

                     <div className="absolute inset-0 bg-linear-to-tr from-green-100/50 via-cyan-50/50 to-white -z-10 rounded-b-[32px] opacity-70"></div>

                     {/* Abstract blobs */}
                     <div className="relative flex flex-row">
                        <img src="/card2.png" alt="Agent" className="w-full h-full object-top" />
                     </div>
                  </div>
               </Card>
















               {/*  */}










               {/* Card 3 */}
             
               {/* Card 4 */}
               <Card className={cardClass}>
                  <div className="p-8 md:p-12 text-center max-w-lg flex flex-col items-center">
                     <Badge className={badgeClass}>
                        <Zap className="w-3.5 h-3.5 fill-current" /> Support
                     </Badge>
                     <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-800 leading-tight">
                        Expert Assistance When<br />Every Second Counts
                     </h2>
                     <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Focus on your business while our senior engineers handle the technical heavy
                        lifting. From white-glove migrations to 24/7 proactive monitoring, we provide
                        everything.
                     </p>
                  </div>
                  <div className="w-full relative mt-auto h-[400px] overflow-hidden rounded-b-[32px]">
                     <div className="absolute inset-0 bg-linear-to-tr from-green-100 via-cyan-50 to-transparent -z-20"></div>

                     {/* Abstract Geometric Shapes Background */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-30 -z-10">
                        <div className="w-64 h-64 bg-white rotate-45 transform translate-y-12 shadow-2xl"></div>
                     </div>

                     {/* Generated Person Image */}
                     <img src="/support_person.png" alt="Support Engineer" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-cover object-bottom" />

                     {/* Chat Bubble 1 (User) */}
                     <div className="absolute bottom-28 left-6 md:left-12 bg-white rounded-2xl shadow-xl p-3 flex items-start gap-3 max-w-[240px] z-20 animate-fade-in">
                        <div className="w-8 h-8 rounded-full bg-blue-500 overflow-hidden shrink-0 border-2 border-white shadow-sm">
                           <img src="/person-1.png" alt="User" className="w-full h-full object-cover scale-150 object-top" />
                        </div>
                        <div className="text-xs text-slate-700 font-medium leading-tight">
                           Hello, would you please help me migrate to HostOnce?
                        </div>
                     </div>

                     {/* Chat Bubble 2 (Agent) */}
                     <div className="absolute bottom-6 right-6 md:right-12 bg-[#2c2c2e]/95 backdrop-blur-md rounded-2xl shadow-xl p-3 flex items-center gap-3 max-w-[260px] z-20 animate-fade-in-up">
                        <div className="text-xs text-white/90 font-medium leading-tight text-right flex-1">
                           Sure thing Alex, let's start the migration process for your site.
                        </div>
                        <div className="w-8 h-8 rounded-full bg-green-500 overflow-hidden shrink-0 border-2 border-[#2c2c2e] shadow-sm">
                           <img src="/Person.png" alt="Agent" className="w-full h-full object-cover scale-150 object-top" />
                        </div>
                     </div>
                  </div>
               </Card>
            </div>
         </div>
      </div>
   );
}