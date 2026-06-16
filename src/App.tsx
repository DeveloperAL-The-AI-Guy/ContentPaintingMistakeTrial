/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, Database, Cpu, ChevronRight, Activity, Map, MapPin } from 'lucide-react';

export default function App() {
  const [synthesisLevel, setSynthesisLevel] = useState(0);

  return (
    <div className="min-h-screen bg-archival text-ink selection:bg-amii-cyan selection:text-ink relative overflow-hidden">
      {/* Global Grain/Noise */}
      <div className="fixed inset-0 min-h-screen w-full noise-bg mix-blend-overlay z-0"></div>

      {/* Grid Pattern that becomes cyan as synthesis level increases */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
        style={{
          opacity: 0.1 + (synthesisLevel / 100) * 0.2,
          backgroundImage: `
            linear-gradient(${synthesisLevel > 50 ? 'var(--color-amii-cyan)' : 'var(--color-ink)'} 1px, transparent 1px), 
            linear-gradient(90deg, ${synthesisLevel > 50 ? 'var(--color-amii-cyan)' : 'var(--color-ink)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-2 border-ink flex justify-between items-end">
        <div className="font-serif">
          <div className="text-3xl font-bold tracking-tight">ALBERTA 1905</div>
          <div className="text-sm italic">to AI Future Bridge</div>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-ink-faded text-right">
          <div>Edmonton, AB</div>
          <div className="text-amii-cyan flex items-center justify-end gap-2 mt-1">
            <Activity size={12} /> Amii // Active
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex flex-col justify-center items-center py-20 border-b-[8px] border-double border-ink overflow-hidden border-glow">
          {/* Cyan Glow Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-amii-cyan/5 blur-[120px] pointer-events-none mix-blend-multiply"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <div className="font-mono text-amii-teal mb-4 tracking-[0.2em] uppercase text-sm border border-amii-teal/30 inline-block px-4 py-1 bg-ink/5">
              Experimental UI // Epoch Transposition
            </div>
            <h1 className="font-serif text-7xl sm:text-9xl mb-6 tracking-tighter mix-blend-darken">
              <span className="opacity-90">1905</span>
              <span className="inline-block mx-8 text-amii-cyan font-mono animate-pulse">={'>'}</span>
              <span className="italic text-ink-light">20XX</span>
            </h1>
            <p className="max-w-2xl mx-auto font-sans text-xl font-light text-ink-faded px-6 border-t border-ink/20 pt-6">
              Bridging the civic foundation of Edmonton's Jasper Avenue with the predictive, luminous geometries of artificial intelligence.
            </p>
          </motion.div>
        </section>

        {/* 3 CONTENT SECTIONS */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: The Civic Foundation */}
          <article className="border-t-4 border-ink pt-6 group">
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-serif text-3xl font-bold">I. The Civic<br/>Foundation</h2>
              <span className="font-mono pt-2 text-ink-faded text-sm">Vol. 1</span>
            </div>
            <div className="columns-1 gap-6 font-sans text-base leading-relaxed text-ink-light text-justify">
              <p className="mb-4">
                In 1905, Alberta entered Confederation, and Edmonton’s Jasper Avenue solidified its place as the commercial spine of a new province. The visual language of this era was one of severe grids, heavy industrial ink, and archival endurance. 
              </p>
              <p>
                We look to the bold typographic weight of early century broadsheets and the sepia-toned permanence of land surveys to establish our grounding layer—a firm, historic texture upon which the future will be inscribed.
              </p>
            </div>
          </article>

          {/* Section 2: Conceptual Blend */}
          <article className="border-t-4 border-ink pt-6 group relative">
            <div className="absolute -inset-4 bg-amii-cyan/5 blur-xl group-hover:bg-amii-cyan/10 transition-colors opacity-0 group-hover:opacity-100 -z-10"></div>
            <div className="flex justify-between items-start mb-6 border-b border-ink/20 pb-4">
              <h2 className="font-serif text-3xl font-bold">II. Convergence<br/>Point</h2>
              <Network className="text-amii-cyan mt-1 group-hover:animate-spin-slow" />
            </div>
            <div className="font-sans text-base leading-relaxed text-ink-light bg-archival-light p-6 border border-ink/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-amii-cyan to-transparent"></div>
              <p className="mb-4">
                How does a historic city interface with a cognitive future? The intersection of historical mass and machine intelligence creates a "benevolent alien" aesthetic. 
              </p>
              <p>
                We merge the tactile limitations of paper with the infinite depth of glassmorphic surfaces, mapping the physical layout of Jasper Avenue directly onto the topological structure of artificial neural networks.
              </p>
            </div>
          </article>

          {/* Section 3: Future Intelligence (Amii) */}
          <article className="border-t-4 border-amii-cyan pt-6 group bg-ink text-archival px-6 pb-6 relative overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amii-teal/20 to-transparent opacity-50"></div>
            <div className="relative z-10 flex justify-between items-start mb-6">
              <h2 className="font-serif text-3xl font-bold text-archival-light">III. Future<br/>Intelligence</h2>
              <Database className="text-amii-teal mt-1" />
            </div>
            <div className="font-mono text-sm leading-relaxed text-archival-dark">
              <div className="mb-4 border-l-2 border-amii-cyan pl-4 text-amii-cyan">
                {">"} INIT SEQUENCE: AMII_CORE<br/>
                {">"} STATUS: PREDICTIVE
              </div>
              <p className="mb-4 font-sans text-base font-light text-archival/80">
                Spearheaded by the Alberta Machine Intelligence Institute (Amii), Edmonton transforms into an epicenter of AI research.
              </p>
              <p className="font-sans text-base font-light text-archival/80">
                The visual motif shifts to luminous cyan glows, precision monospaced glyphs, and glassmorphic clarity—signifying advanced, invisible systems quietly optimizing the city's future trajectory.
              </p>
            </div>
          </article>
        </section>

        {/* INTERACTIVE SYNTHESIS SCRUBBER SECTION */}
        <section className="border-t border-ink/20 py-24 bg-gradient-to-b from-archival to-archival-dark relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 relative">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Synthesis Scrubber</h2>
              <p className="font-mono text-ink-faded uppercase tracking-widest text-sm">Interactive Epoch Transposition Module</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Graphic Area */}
              <div className="relative aspect-square sm:aspect-video lg:aspect-square bg-ink border-2 border-ink overflow-hidden shadow-2xl group">
                
                {/* Layer 0: Deep background space */}
                <div className="absolute inset-0 bg-ink-light"></div>

                {/* Layer 1: 1905 Archival Grid SVG */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-archival sepia-[0.3]"
                  style={{ opacity: 1 - (synthesisLevel / 100) }}
                >
                  <div className="absolute inset-4 border-[4px] border-[#8B4513]/30 pointer-events-none"></div>
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-[#8B4513]">
                    <div className="absolute top-8 left-8 flex items-center gap-2 font-mono text-xs opacity-60">
                      <MapPin size={14} /> N 53° 32' W 113° 29'
                    </div>
                    <Map size={100} className="opacity-40 mb-6" strokeWidth={1} />
                    <div className="font-serif text-3xl font-bold tracking-widest text-center border-b-2 border-[#8B4513]/40 pb-4 mb-4">
                      TOWN OF<br/>EDMONTON
                    </div>
                    <div className="font-sans text-sm tracking-widest uppercase opacity-60">
                      1905 Survey Map
                    </div>
                  </div>
                </motion.div>

                {/* Layer 2: Glowing Neural Network SVG */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center mix-blend-screen bg-ink"
                  style={{ opacity: synthesisLevel / 100 }}
                >
                  <div className="absolute inset-4 border border-amii-cyan/30 bg-amii-cyan/5 pointer-events-none backdrop-blur-sm"></div>
                  <div className="relative w-full h-full p-8 flex items-center justify-center overflow-hidden">
                    {/* Glowing Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amii-cyan rounded-full blur-[100px] opacity-20 animate-pulse"></div>
                    
                    <Cpu size={64} className="text-amii-cyan absolute z-20" strokeWidth={1} />
                    
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#00F0B5" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <g stroke="url(#cyanGrad)" strokeWidth="1" opacity="0.6">
                        {/* Abstract neural links drawn dynamically */}
                        <line x1="50%" y1="50%" x2="20%" y2="20%" />
                        <line x1="50%" y1="50%" x2="80%" y2="20%" />
                        <line x1="50%" y1="50%" x2="20%" y2="80%" />
                        <line x1="50%" y1="50%" x2="80%" y2="80%" />
                        <line x1="50%" y1="50%" x2="10%" y2="50%" />
                        <line x1="50%" y1="50%" x2="90%" y2="50%" />
                        <line x1="50%" y1="50%" x2="50%" y2="10%" />
                        <line x1="50%" y1="50%" x2="50%" y2="90%" />
                        
                        {/* Nodes */}
                        <circle cx="20%" cy="20%" r="4" fill="#00E5FF" />
                        <circle cx="80%" cy="20%" r="4" fill="#00E5FF" />
                        <circle cx="20%" cy="80%" r="4" fill="#00E5FF" />
                        <circle cx="80%" cy="80%" r="4" fill="#00E5FF" />
                      </g>
                    </svg>
                    
                    <div className="absolute bottom-8 left-8 font-mono text-xs text-amii-teal uppercase tracking-widest">
                      {">"} Amii_Node_Active<br/>
                      {">"} Pattern Integration: {synthesisLevel}%
                    </div>
                  </div>
                </motion.div>
                
                {/* Glitch Overlay Effect during mid-transition */}
                {synthesisLevel > 30 && synthesisLevel < 70 && (
                  <div className="absolute inset-0 pointer-events-none mix-blend-difference opacity-20">
                    <div className="w-full h-2 bg-white animate-bounce"></div>
                    <div className="w-full h-px bg-amii-cyan mt-12 animate-pulse"></div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="bg-archival p-8 border border-ink/20 shadow-lg">
                <div className="mb-8">
                  <div className="flex justify-between font-mono text-sm mb-4 uppercase tracking-wider font-bold">
                    <span className={synthesisLevel < 50 ? "text-ink" : "text-ink-faded"}>Historical Map</span>
                    <span className={synthesisLevel >= 50 ? "text-amii-cyan" : "text-ink-faded"}>Neural Network</span>
                  </div>
                  
                  {/* Custom Styled Range Slider */}
                  <div className="relative h-12 flex items-center">
                    <div className="absolute inset-0 h-2 top-1/2 -translate-y-1/2 w-full bg-gradient-to-r from-ink via-ink-faded to-amii-cyan rounded-full opacity-20"></div>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={synthesisLevel}
                      onChange={(e) => setSynthesisLevel(parseInt(e.target.value))}
                      className="w-full h-full relative z-10 opacity-0 cursor-pointer"
                    />
                    {/* Visual Thumb */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-6 h-12 bg-ink border border-archival shadow-md flex items-center justify-center transition-all duration-75 pointer-events-none"
                      style={{ left: `calc(${synthesisLevel}% - 12px)` }}
                    >
                      <div className="w-px h-6 bg-archival-light mix-blend-difference"></div>
                    </div>
                  </div>
                </div>

                {/* State Readout */}
                <div className="bg-ink p-6 font-mono text-xs overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amii-cyan"></div>
                  
                  <div className="text-amii-teal mb-2">SYSTEM READOUT:</div>
                  
                  {synthesisLevel < 33 && (
                    <div className="text-archival/80 space-y-1">
                      <p>Epoch: 1905</p>
                      <p>Mode: Archival Registration</p>
                      <p>Material: Paper, Ink, Civic Survey</p>
                    </div>
                  )}
                  {synthesisLevel >= 33 && synthesisLevel < 66 && (
                    <div className="text-[#00E5FF] space-y-1 animate-pulse">
                      <p>Epoch: Transitory</p>
                      <p>Mode: Spatial Mapping Overwrite...</p>
                      <p>Material: Glassmorphic Injection</p>
                    </div>
                  )}
                  {synthesisLevel >= 66 && (
                    <div className="text-[#00F0B5] space-y-1">
                      <p>Epoch: 20XX</p>
                      <p>Mode: Artificial Intelligence Grid</p>
                      <p>Material: Luminous Data, Amii Syntax</p>
                      <p className="mt-2 text-amii-cyan font-bold">{">"} EXPERIMENT COMPLETE</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full p-8 border-t-4 border-ink flex flex-col md:flex-row justify-between items-center gap-4 bg-archival">
        <div className="font-serif text-2xl font-bold tracking-tight">ALBERTA 1905</div>
        <div className="font-mono text-xs text-ink-faded uppercase tracking-widest text-center">
          UI/UX Specimen // End of Render
        </div>
      </footer>
    </div>
  );
}


