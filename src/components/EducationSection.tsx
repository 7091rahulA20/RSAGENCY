import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Star, Trophy, Building2, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/mockData';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-neon-purple/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-neon-cyan mb-4"
          >
            <GraduationCap className="w-4 h-4 text-neon-cyan" />
            <span>ACADEMIC CREDENTIALS & DEGREES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight text-white mb-6"
          >
            Education & Academic Details —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-neon-cyan">
              BCA Degree
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Completed 6 semesters of Bachelor of Computer Application with strong fundamentals in Web Engineering, E-Commerce systems, Data Structures, and Software Projects.
          </motion.p>
        </div>

        {/* Major Degree Banner Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

          {/* Main Institution Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between text-left shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-neon-cyan/10 to-transparent pointer-events-none"></div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest block mb-1">GRADUATION DEGREE</span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-2">{EDUCATION_DATA.degree}</h3>
                  <p className="text-sm font-sans font-semibold text-zinc-300 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-neon-purple shrink-0" />
                    {EDUCATION_DATA.institution}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center shrink-0">
                  <span className="text-xs font-mono text-zinc-500 block">OVERALL</span>
                  <span className="text-2xl font-mono font-extrabold text-neon-cyan">{EDUCATION_DATA.cgpa}</span>
                  <span className="text-[10px] font-mono text-zinc-400 block">CGPA</span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 font-mono mb-6">
                Affiliated: <strong className="text-zinc-200">{EDUCATION_DATA.affiliation}</strong> <br />
                Seat No. 38797 | Reg. No. 2330444006 | Location: {EDUCATION_DATA.location}
              </p>

              {/* Subject Marks Highlights Grid */}
              <h4 className="text-xs font-mono uppercase font-bold text-neon-purple tracking-wider mb-3">
                KEY SUBJECT PERFORMANCE & GRADES
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {EDUCATION_DATA.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold font-sans text-white block mb-0.5">{h.subject}</span>
                      <span className="text-[11px] font-mono text-zinc-400 block">{h.marks}</span>
                    </div>
                    <span className="mt-2 text-xs font-mono font-extrabold text-neon-cyan">{h.grade}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Project & Viva Grade A (245/300 Marks, 12 Credits)</span>
            </div>
          </motion.div>

          {/* Semesters 1 to 6 Breakdown Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between text-left shadow-2xl"
          >
            <div>
              <h4 className="text-sm font-mono uppercase font-bold text-white tracking-wider mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-neon-cyan" />
                SEMESTER PERFORMANCE SCORECARDS
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Consistent SGPA progression across all 6 semesters of the BCA curriculum:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {EDUCATION_DATA.semesters.map((sem, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-neon-cyan/30 transition-all flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-300">{sem.sem}</span>
                    <span className="text-sm font-mono font-bold text-neon-cyan">{sem.sgpa}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs font-mono text-zinc-300">
              <span className="text-neon-cyan font-bold block mb-1">Previous Schooling:</span>
              Class 12 / Intermediate — Bihar School Examination Board (PASS) <br />
              Class 10 / Matriculation — BSEB (PASS)
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
