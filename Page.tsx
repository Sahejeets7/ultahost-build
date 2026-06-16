import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main
                className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        To get started, edit the page.tsx file.
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Looking for a starting point or more instructions? Head over to{" "}
                        <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            className="font-medium text-zinc-950 dark:text-zinc-50">
                            Templates
                        </a>{" "}
                        or the{" "}
                        <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            className="font-medium text-zinc-950 dark:text-zinc-50">
                            Learning
                        </a>{" "}
                        center.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                    <a className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank" rel="noopener noreferrer">
                        <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={16} height={16} />
                        Deploy Now
                    </a>
                    <a className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank" rel="noopener noreferrer">
                        Documentation
                    </a>
                </div>
            </main>
            <div
                className="min-h-screen bg-[#f8f9fa] p-4 md:p-8 lg:p-24 font-sans text-slate-900 flex flex-col items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <Card
                        className="flex flex-col items-center overflow-hidden border-0 shadow-xl shadow-slate-200/50 rounded-[32px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="p-8 md:p-12 text-center max-w-lg flex flex-col items-center">
                            <Badge
                                className="bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1">
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
                        <div className="w-full relative mt-auto px-6 pb-6 pt-12">
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 via-green-50/50 to-white -z-10 rounded-b-[32px]">
                            </div>

                            <div
                                className="relative bg-white/80 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-lg p-6 max-w-sm mx-auto w-full font-mono text-xs overflow-hidden">
                                {/* AMD Logo floating badge */}
                                <div
                                    className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md border border-slate-100 p-2 z-10 flex items-center justify-center">
                                    <div className="font-bold text-lg tracking-tighter">AMD</div>
                                    <div className="font-light text-lg tracking-tighter ml-1">EPYC</div>
                                </div>
                                <div className="text-slate-400 mb-2">1 // Type some code -&gt;</div>
                                <div className="text-slate-300 mb-2">2</div>
                                <div className="mb-1"><span className="text-amber-500">console</span><span
                                    className="text-slate-500">.</span><span className="text-blue-500">log</span> <span
                                        className="text-cyan-500">"o008 iLll g9qCGQ ~-+=&gt;"</span>;</div>
                                <div className="text-slate-400 mb-2">4 // â é ù ï ø ç Ã Ê Æ œ</div>
                                <div className="text-slate-300 mb-2">5</div>
                                <div className="mb-1"><span className="text-pink-500">function</span> <span
                                    className="text-blue-500">updateGutters</span>(cm) {'{'}</div>
                                <div className="ml-4 mb-1"><span className="text-pink-500">var</span> gutters <span
                                    className="text-slate-500">=</span> cm.<span className="text-emerald-500">display</span>.<span
                                        className="text-emerald-500">gutters</span>,</div>
                                <div className="ml-8 mb-1">__specs <span className="text-slate-500">=</span> cm.<span
                                    className="text-emerald-500">options</span>.<span className="text-emerald-500">gutters</span>;</div>

                                {/* Floating Speed Widget */}
                                <div
                                    className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-40 z-20 flex flex-col items-center">
                                    <div className="flex items-center gap-2 text-slate-500 font-sans text-xs font-medium mb-3">
                                        <Zap className="w-3 h-3" /> Site Speed
                                    </div>
                                    <div className="relative w-24 h-12 overflow-hidden flex items-end justify-center mb-1">
                                        <div
                                            className="w-24 h-24 border-[12px] border-emerald-500 border-b-slate-100 border-r-slate-100 rounded-full absolute -top-0 rotate-45">
                                        </div>
                                        <div className="font-sans font-bold text-2xl text-slate-800 z-10">99.84</div>
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-sans">Loads in 1.27s</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    {/* Card 2 */}
                    <Card
                        className="flex flex-col items-center overflow-hidden border-0 shadow-xl shadow-slate-200/50 rounded-[32px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="p-8 md:p-12 text-center max-w-lg flex flex-col items-center">
                            <Badge
                                className="bg-[#8cc63f] hover:bg-[#7ab033] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 text-xs flex items-center gap-1">
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
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-green-100/50 via-cyan-50/50 to-white -z-10 rounded-b-[32px] opacity-70">
                            </div>

                            {/* Abstract blobs */}
                            <div className="absolute -left-10 bottom-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -right-10 top-20 w-48 h-48 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>
                            <div className="relative flex flex-row items-start max-w-md mx-auto h-[350px]">

                                {/* Floating Plesk badge */}
                                <div
                                    className="absolute -top-6 right-8 bg-white rounded-xl shadow-md border border-slate-100 px-6 py-3 z-30 font-sans font-bold text-2xl tracking-tight text-slate-700">
                                    plesk
                                </div>
                                {/* Sidebar */}
                                <div
                                    className="w-1/3 bg-[#334155] rounded-l-2xl text-slate-300 text-[10px] p-4 flex flex-col gap-3 shadow-lg z-20 h-full overflow-hidden">
                                    <div className="text-white font-bold text-base mb-2">plesk</div>
                                    <div className="flex items-center gap-2 bg-[#475569] text-white p-1.5 rounded-md"><span
                                        className="w-3 h-3 bg-white/20 rounded-sm"></span> Websites & Domains</div>
                                    <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span>
                                        Mail</div>
                                    <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span>
                                        Applications</div>
                                    <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span>
                                        Files</div>
                                    <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span>
                                        Databases</div>
                                    <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span>
                                        Statistics</div>
                                    <div className="flex items-center gap-2 p-1.5"><span className="w-3 h-3 bg-white/20 rounded-sm"></span>
                                        Users</div>
                                </div>
                                {/* Main Content Area */}
                                <div
                                    className="w-2/3 bg-white rounded-r-2xl border-y border-r border-slate-200 shadow-lg z-10 h-full p-4 flex flex-col overflow-hidden">

                                    {/* Tabs */}
                                    <div className="flex gap-4 border-b border-slate-100 pb-2 mb-4">
                                        <div className="text-xs font-bold text-slate-800 border-b-2 border-slate-800 pb-2 -mb-[9px]">Dashboard
                                        </div>
                                        <div className="text-xs font-medium text-slate-500">Hosting & DNS</div>
                                        <div className="text-xs font-medium text-slate-500">Mail</div>
                                    </div>
                                    <div className="text-xs font-bold text-slate-700 mb-3">Files & Databases</div>

                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex items-start gap-2">
                                            <div
                                                className="w-6 h-6 bg-green-100 rounded-md shrink-0 flex items-center justify-center text-green-600 font-bold">
                                                C</div>
                                            <div>
                                                <div className="text-[10px] font-medium text-slate-700">Connection Info</div>
                                                <div className="text-[8px] text-slate-400">for FTP, Database</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div
                                                className="w-6 h-6 bg-blue-100 rounded-md shrink-0 flex items-center justify-center text-blue-600 font-bold">
                                                F</div>
                                            <div>
                                                <div className="text-[10px] font-medium text-slate-700">Files</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold text-slate-700 mb-3">Dev Tools</div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-start gap-2">
                                            <div
                                                className="w-6 h-6 bg-indigo-100 rounded-md shrink-0 flex items-center justify-center text-indigo-600 font-bold text-[8px]">
                                                PHP</div>
                                            <div>
                                                <div className="text-[10px] font-medium text-slate-700">PHP</div>
                                                <div className="text-[8px] text-slate-400">Version 8.2.14</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div
                                                className="w-6 h-6 bg-slate-100 rounded-md shrink-0 flex items-center justify-center text-slate-600 font-bold text-[8px]">
                                                L</div>
                                            <div>
                                                <div className="text-[10px] font-medium text-slate-700">Logs</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div
                                                className="w-6 h-6 bg-orange-100 rounded-md shrink-0 flex items-center justify-center text-orange-600 font-bold text-[8px]">
                                                M</div>
                                            <div>
                                                <div className="text-[10px] font-medium text-slate-700">Monitoring</div>
                                                <div className="text-[8px] text-orange-500 bg-orange-50 px-1 rounded inline-block mt-0.5">Not
                                                    connected</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}