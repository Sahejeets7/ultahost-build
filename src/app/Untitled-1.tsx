
// - unnecessary classes: remove
   // -
   {/* Gauge Arc (just the Vector.png image, styled for UI match) */}
   <div className="relative w-24 h-24 flex items-center justify-center">
   <img
      src="/Vector.png"
      alt="vector"
      draggable={false}
      className="absolute left-0 top-0 w-[92px] h-[92px] object-contain opacity-95 mix-blend-multiply pointer-events-none"
      style={{
         zIndex: 1,
      }}
   />
</div>

{/* Abstract blobs */}
<div className="absolute left-1/2 top-5 w-[92px] -translate-x-1/2
bg-white rounded-2xl shadow-xl border 
   border-slate-100 p-4 w-60 z-10 flex 
   flex-col items-center">
   <img src="/logo.png" alt="logo" className="w-full h-full object-contain" draggable={false} />
</div>


// h-48 md:h-60
// h - [350px]

{/*
                        Why is this div tag needed?
                        - It serves as a *positioning context* (`relative`): Absolutely-positioned children (background blobs, overlays, art images) are visually anchored to this container, not the page, maintaining correct layout and z-index stacking for the card's art and overlays.
                        - Provides layout padding (`px-6`, `pt-12`, etc.) and vertical spacing which controls the inner spacing above/below images and content, crucial for visual balance and aesthetic.
                        - `overflow-hidden` clips child elements (blobs, background decorations) that intentionally extend beyond the card, ensuring the visuals are neatly contained within the curved edge, preventing layout overflow issues and keeping the design polished.
                        - Ensures the bottom section visuals (like gradients, art, and eccentric blobs) appear correctly layered and clipped to the card's rounded/curved shape.

                        Does it have any role in mobile responsiveness?
                        - Yes, it contributes to mobile responsiveness:
                            * The classes `w-full` and the padding utilities (`px-6`, `pt-12`) allow the section to adapt to different screen widths and provide horizontal breathing room at any size.
                            * Child elements within (e.g., images, gradients, blobs) also rely on this wrapper's layout for scaling and placement: its width and padding affect how these children shrink, grow, and stay visually centered/apposite on small screens.
                            * Without this tag's positioning and sizing, absolutely-positioned children might escape their intended area or overlap/break on mobile devices, causing visual bugs.
                     */}


{/* Card 1 */ }
<Card className={cardClass}>
<div className="p-8 md:p-12 text-center max-w-lg flex flex-col items-center">
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

<div className="w-full relative mt-auto px-6 pb-6 pt-12 overflow-hidden">
   {/* <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 via-green-50/50 to-white -z-10 rounded-b-[32px] opacity-70"> */}
   <Image
      src="/card1.png"
      alt="AMD EPYC Server"
      width={400}
      height={200}
      className={serverImageClass}
      priority
   />
   {/* </div> */}
   {/* Abstract blobs */}
   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[350px] h-[310px] rounded-3xl shadow-xl bg-white/90 border border-slate-100 overflow-hidden flex items-center justify-center" style={{boxShadow:'0 10px 48px 8px rgba(52, 211, 153, 0.12), 0 2px 12px 2px rgba(14, 165, 233, 0.12)'}}>
      {/* Subtle backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-50/90 via-blue-50/80 to-white pointer-events-none -z-10" />
      {/* Fake code block */}
      <div className="relative w-full h-full flex flex-col items-center justify-between px-0 pt-5 pb-4">
         {/* AMD EPYC chip "badge" */}
         <div className="relative z-10">
            <div className="mx-auto px-4 py-1.5 rounded-2xl bg-white shadow flex items-center gap-2 font-semibold text-xs text-slate-700 border border-slate-200" style={{minWidth:100}}>
               <img src="/epyc-logo.png" alt="AMD EPYC" className="w-10 h-5 object-contain" />
            </div>
         </div>
         {/* Code - use a stylized image or "code" lines */}
         <div className="flex-1 flex flex-col justify-center px-6 items-stretch w-full">
         </div>
         {/* Site speed box */}
         <div className="absolute bottom-4 right-4 px-0 py-0 flex items-center">
            <div className="rounded-2xl bg-white/95 shadow-lg border border-slate-100 p-3 pr-6 flex flex-row items-center gap-3 min-w-[110px]">
               {/* Arc meter or fake gauge */}
               <svg width="32" height="32" className="shrink-0" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="13" fill="none" stroke="#e5e7eb" strokeWidth="4"/>
                  <path d="M6.7,21.3 A11,11 0 1,1 25.3,21.3" fill="none" stroke="#8cc63f" strokeWidth="4" strokeLinecap="round"/>
               </svg>
               <div className="flex flex-col gap-0 items-start text-slate-700">
                  <span className="text-[12px] font-medium">Site Speed</span>
                  <span className="text-2xl font-bold leading-none text-[#8cc63f]">99.84</span>
                  <span className="text-[11px] text-slate-400 font-normal">Loads in 1.2s</span>
               </div>
            </div>
         </div>
      </div>
   </div>


   <div className="absolute -right-10 top-20 w-48 h-48 bg-green-200/30 rounded-full blur-3xl -z-10">
      <img src="/Vector.png" alt="vector" className="w-full h-full object-top" />
   </div>
</div>
</Card>

























<Card>

   <div className="text-center max-w-lg flex flex-col items-center">
      <Badge className="bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1">
         <Zap className="w-3.5 h-3.5 fill-current" /> Performance
      </Badge>
   </div>
   <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
      <CardAction>Card Action</CardAction>
   </CardHeader>
   <CardContent>
      <p>Card Content</p>
   </CardContent>
   <CardFooter>
      <img
         src={"../"}
         alt={"asset"}
         className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
         loading="lazy"
      />
   </CardFooter>
</Card>

{/* Card 1 */ }
{/* <Card className="flex flex-col items-center overflow-hidden border-0 shadow-xl shadow-slate-200/50 rounded-[32px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
               <div className="p-8 md:p-12 text-center max-w-lg flex flex-col items-center">
                  <Badge className="bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1">
                     <Zap className="w-3.5 h-3.5 fill-current" /> Performance
                  </Badge>
                  <h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-slate-800 leading-tight">
                     <strong className="">Raw Power</strong> for Your Windows Workloads
                  </h2>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                 Don't let legacy hardware bottle-neck your applications. We pair
                 the latest AMD EPYC™ processors with enterprise-grade NVMe storage
                 to deliver sub-second response times for even the most complex
                 MSSQL queries and .NET processes.
               </p>
                  {/* semantic html tags */}
{/* asset */ }


{/* </div> */ }

<div className="w-full relative mt-auto px-6 pb-6 pt-12">
   <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 via-green-50/50 to-white -z-10 rounded-b-[32px]"></div>
</div>
{/* </Card> */ }


<div className="relative bg-white/80 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-lg p-6 max-w-sm mx-auto w-full font-mono text-xs overflow-hidden">
   {/* AMD Logo floating badge */}
   <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md border border-slate-100 p-2 z-10 flex items-center justify-center">
      <div className="font-bold text-lg tracking-tighter">AMD</div>
      <div className="font-light text-lg tracking-tighter ml-1">EPYC</div>
   </div>

   <div className="text-slate-400 mb-2">1 // Type some code -&gt;</div>
   <div className="text-slate-300 mb-2">2</div>
   <div className="mb-1"><span className="text-amber-500">console</span><span className="text-slate-500">.</span><span className="text-blue-500">log</span> <span className="text-cyan-500">"o008 iLll g9qCGQ ~-+=&gt;"</span>;</div>
   <div className="text-slate-400 mb-2">4 // â é ù ï ø ç Ã Ê Æ œ</div>
   <div className="text-slate-300 mb-2">5</div>
   <div className="mb-1"><span className="text-pink-500">function</span> <span className="text-blue-500">updateGutters</span>(cm) {'{'}</div>
   <div className="ml-4 mb-1"><span className="text-pink-500">var</span> gutters <span className="text-slate-500">=</span> cm.<span className="text-emerald-500">display</span>.<span className="text-emerald-500">gutters</span>,</div>
   <div className="ml-8 mb-1">__specs <span className="text-slate-500">=</span> cm.<span className="text-emerald-500">options</span>.<span className="text-emerald-500">gutters</span>;</div>

   {/* Floating Speed Widget */}
   <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-40 z-20 flex flex-col items-center">
      <div className="flex items-center gap-2 text-slate-500 font-sans text-xs font-medium mb-3">
         <Zap className="w-3 h-3" /> Site Speed
      </div>
      <div className="relative w-24 h-12 overflow-hidden flex items-end justify-center mb-1">
         <div className="w-24 h-24 border-[12px] border-emerald-500 border-b-slate-100 border-r-slate-100 rounded-full absolute -top-0 rotate-45"></div>
         <div className="font-sans font-bold text-2xl text-slate-800 z-10">99.84</div>
      </div>
      <div className="text-[10px] text-slate-400 font-sans">Loads in 1.27s</div>
   </div>
</div>



{/* Card 2 */ }
<Card className="flex flex-col items-center overflow-hidden border-0 shadow-xl shadow-slate-200/50 rounded-[32px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
   <div className="p-8 md:p-12 text-center max-w-lg flex flex-col items-center">
      <Badge className="bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1">
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

   <div className="w-full relative mt-auto px-6 pb-6 pt-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-green-100/50 via-cyan-50/50 to-white -z-10 rounded-b-[32px] opacity-70"></div>

      {/* Abstract blobs */}
      <div className="absolute -left-10 bottom-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -right-10 top-20 w-48 h-48 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="relative flex flex-row items-start max-w-md mx-auto h-[350px]">
         {/* Floating Plesk badge */}
         <div className="absolute -top-6 right-8 bg-white rounded-xl shadow-md border border-slate-100 px-6 py-3 z-30 font-sans font-bold text-2xl tracking-tight text-slate-700">
            plesk
         </div>

         {/* Sidebar */}
         <div className="w-1/3 bg-[#334155] rounded-l-2xl text-slate-300 text-[10px] p-4 flex flex-col gap-3 shadow-lg z-20 h-full overflow-hidden">
            <div className="text-white font-bold text-base mb-2">plesk</div>
            <div className="flex items-center gap-2 bg-[#475569] text-white p-1.5 rounded-md"><span className="w-3 h-3 bg-white/20 rounded-sm"></span> Websites & Domains</div>
            <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span> Mail</div>
            <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span> Applications</div>
            <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span> Files</div>
            <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span> Databases</div>
            <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span> Statistics</div>
            <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span> Users</div>
         </div>

         {/* Main Content Area */}
         <div className="w-2/3 bg-white rounded-r-2xl border-y border-r border-slate-200 shadow-lg z-10 h-full p-4 flex flex-col overflow-hidden">
            <div className="flex gap-4 border-b border-slate-100 pb-2 mb-4">
               <div className="text-xs font-bold text-slate-800 border-b-2 border-slate-800 pb-2 -mb-[9px]">Dashboard</div>
               <div className="text-xs font-medium text-slate-500">Hosting & DNS</div>
               <div className="text-xs font-medium text-slate-500">Mail</div>
            </div>

            <div className="text-xs font-bold text-slate-700 mb-3">Files & Databases</div>

            <div className="grid grid-cols-2 gap-3 mb-4">
               <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded-md shrink-0 flex items-center justify-center text-green-600 font-bold">C</div>
                  <div>
                     <div className="text-[10px] font-medium text-slate-700">Connection Info</div>
                     <div className="text-[8px] text-slate-400">for FTP, Database</div>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-md shrink-0 flex items-center justify-center text-blue-600 font-bold">F</div>
                  <div>
                     <div className="text-[10px] font-medium text-slate-700">Files</div>
                  </div>
               </div>
            </div>

            <div className="text-xs font-bold text-slate-700 mb-3">Dev Tools</div>

            <div className="grid grid-cols-2 gap-3">
               <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-indigo-100 rounded-md shrink-0 flex items-center justify-center text-indigo-600 font-bold text-[8px]">PHP</div>
                  <div>
                     <div className="text-[10px] font-medium text-slate-700">PHP</div>
                     <div className="text-[8px] text-slate-400">Version 8.2.14</div>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-slate-100 rounded-md shrink-0 flex items-center justify-center text-slate-600 font-bold text-[8px]">L</div>
                  <div>
                     <div className="text-[10px] font-medium text-slate-700">Logs</div>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded-md shrink-0 flex items-center justify-center text-orange-600 font-bold text-[8px]">M</div>
                  <div>
                     <div className="text-[10px] font-medium text-slate-700">Monitoring</div>
                     <div className="text-[8px] text-orange-500 bg-orange-50 px-1 rounded inline-block mt-0.5">Not connected</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</Card>

{/* Card 3 */ }
<Card className="flex flex-col items-center overflow-hidden border-0 shadow-xl shadow-slate-200/50 rounded-[32px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
   <div className="p-8 md:p-12 text-center max-w-lg flex flex-col items-center">
      <Badge className="bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1">
         <Sparkles className="w-3.5 h-3.5 fill-current" /> AI Assistant
      </Badge>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-800 leading-tight">
         Effortless Windows<br />Management with AI Support
      </h2>
      <p className="text-slate-500 text-sm md:text-base leading-relaxed">
         Managing your Windows server has never been this intuitive. Our AI-driven
         assistant helps you monitor system resources, execute rapid speed tests, and
         deploy essential applications like WordPress with simple commands.
      </p>
   </div>

   <div className="w-full relative mt-auto px-6 pb-6 pt-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-green-100/40 via-cyan-50/40 to-white -z-10 rounded-b-[32px]"></div>

      <div className="relative bg-white/90 backdrop-blur-md border border-slate-100 shadow-xl rounded-t-3xl rounded-b-2xl max-w-md mx-auto w-full p-6 pb-8 min-h-[350px] flex flex-col justify-between">

         {/* Floating Top Pill */}
         <div className="absolute -top-4 right-6 bg-slate-800 text-white rounded-full text-xs px-4 py-1.5 flex items-center gap-2 shadow-md z-10">
            <Sparkles className="w-3 h-3 text-emerald-400" /> Manage with HoneyAI™
         </div>

         <div>
            {/* Tabs */}
            <div className="flex gap-2 mb-8">
               <div className="bg-white border border-slate-200 shadow-sm rounded-lg px-4 py-2 text-xs font-semibold text-slate-700 flex items-center gap-2">
                  James' Windows <span className="text-slate-400 text-[10px]">⋮</span>
               </div>
               <button className="bg-white border border-slate-200 shadow-sm rounded-lg w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                  <Plus className="w-4 h-4" />
               </button>
            </div>

            {/* AI Greeting */}
            <div className="mb-6">
               <Sparkles className="w-6 h-6 text-[#8cc63f] mb-3" />
               <h3 className="text-[#8cc63f] text-2xl font-medium tracking-tight">
                  Hi James, how can I help?
               </h3>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-3 gap-3 mb-8">
               <div className="bg-yellow-50/50 border border-yellow-100 rounded-xl p-3 flex flex-col gap-2 hover:bg-yellow-50 transition-colors cursor-pointer">
                  <div className="bg-amber-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
                     <HardDrive className="w-3.5 h-3.5" />
                  </div>
                  <div>
                     <div className="text-[11px] font-bold text-slate-800 leading-tight mb-1">Check disk space</div>
                     <div className="text-[9px] text-slate-500 leading-tight">Show me the remaining disk space</div>
                  </div>
               </div>

               <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-3 flex flex-col gap-2 hover:bg-orange-50 transition-colors cursor-pointer">
                  <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
                     <Download className="w-3.5 h-3.5" />
                  </div>
                  <div>
                     <div className="text-[11px] font-bold text-slate-800 leading-tight mb-1">Install WordPress</div>
                     <div className="text-[9px] text-slate-500 leading-tight">Install WordPress on my server</div>
                  </div>
               </div>

               <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 flex flex-col gap-2 hover:bg-emerald-50 transition-colors cursor-pointer">
                  <div className="bg-emerald-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
                     <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div>
                     <div className="text-[11px] font-bold text-slate-800 leading-tight mb-1">Run speed test</div>
                     <div className="text-[9px] text-slate-500 leading-tight">Run a speed test from my server</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Input Area */}
         <div className="bg-slate-800 rounded-full p-1.5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3 px-3">
               <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
               </div>
               <span className="text-white text-xs">Install n8n|</span>
            </div>
            <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition-colors">
               <Play className="w-4 h-4 ml-0.5" />
            </button>
         </div>
      </div>
   </div>
</Card>

{/* Card 4 */ }
<Card className="flex flex-col items-center overflow-hidden border-0 shadow-xl shadow-slate-200/50 rounded-[32px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
   <div className="p-8 md:p-12 text-center max-w-lg flex flex-col items-center">
      <Badge className="bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1">
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
      <div className="absolute inset-0 bg-gradient-to-tr from-green-100 via-cyan-50 to-transparent -z-20"></div>

      {/* Abstract Geometric Shapes Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 -z-10">
         <div className="w-64 h-64 bg-white rotate-45 transform translate-y-12 shadow-2xl"></div>
      </div>

      {/* Generated Person Image */}
      <img src="/support_person.png" alt="Support Engineer" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-cover object-bottom" />

      {/* Chat Bubble 1 (User) */}
      <div className="absolute bottom-28 left-6 md:left-12 bg-white rounded-2xl shadow-xl p-3 flex items-start gap-3 max-w-[240px] z-20 animate-fade-in">
         <div className="w-8 h-8 rounded-full bg-blue-500 overflow-hidden shrink-0 border-2 border-white shadow-sm">
            <img src="/support_person.png" alt="User" className="w-full h-full object-cover scale-150 object-top" />
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
            <img src="/support_person.png" alt="Agent" className="w-full h-full object-cover scale-150 object-top" />
         </div>
      </div>
   </div>
</Card>




