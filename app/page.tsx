'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <HowItWorks />
      <CourseCards />
      <WhyITLearn />
      <Testimonials />
      <Community />
      <TeamSection />
      <LiveStats />
      <Faq />
      <BottomCta />
    </div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] crt-overlay" />

      <div className="absolute inset-0 pointer-events-none z-20 noise" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-15%] right-[10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[5%] w-[450px] h-[450px] rounded-full bg-accent/5 blur-[150px]" />
      </motion.div>

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40 z-10">
        <div className="text-center">
          <motion.div style={{ y: textY, opacity }} className="text-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.3] text-text-primary mb-6">
              Learn to code<br />
              <span className="gradient-text">like a game</span>
            </h1>

            <p className="font-mono text-text-secondary text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-4">
              Earn XP. Unlock badges. Climb the leaderboard.
              Built by students who remember what it is like to start from zero.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/signup" className="btn btn-primary">
                START PLAYING ▸
              </Link>
              <a href="/learn/?trial=start" className="btn btn-ghost">
                try --no-account
              </a>
            </div>

            <p className="mt-8 font-mono text-[0.65rem] text-text-muted uppercase tracking-widest">
              <span className="text-text-secondary font-bold">SPONSORED BY:</span>{' '}
              No sponsors yet — {' '}
              <a href="mailto:partners@itlearn.be" className="text-primary hover:text-warning transition-colors cursor-pointer">
                contact us
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  { step: '01', title: 'SIGN UP', desc: 'Sign up with your email in seconds, or use your Google, GitHub or Discord account.', icon: '▸' },
  { step: '02', title: 'PICK A TRACK', desc: 'Choose what language or skill you want to learn. From Python to Git, we have it all.', icon: '▸' },
  { step: '03', title: 'BUILD & EARN XP', desc: 'Every lesson pushes you forward, towards a new goal. No boring theory, just you and the code.', icon: '▸' },
  { step: '04', title: 'JOIN THE DISCORD', desc: 'Talk to other people learning to code and share your progress.', icon: '▸' },
]

function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} className="relative bg-background-surface">
      <div ref={stickyRef} className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-2">
              HOW IT <span className="gradient-text">WORKS</span>
            </h2>
            <p className="font-mono text-text-muted text-sm">Start learning in just 30 seconds.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group cursor-default"
              >
                <div className="font-heading text-4xl text-primary/10 group-hover:text-primary/20 transition-colors mb-4">{s.step}</div>
                <div className="font-heading text-xs text-primary mb-3 tracking-wider">{s.title}</div>
                <p className="font-mono text-text-secondary text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[50vh]" />
    </section>
  )
}

const courses = [
  { title: 'PYTHON', desc: 'Variables, loops, games. Easy and fun.', image: 'https://github.com/Broodje565/IT-Learn-Visuals/blob/main/icons/python.png?raw=true', color: 'border-border' },
  { title: 'HTML', desc: 'Build web page basics', image: 'https://github.com/Broodje565/IT-Learn-Visuals/blob/main/icons/html.png?raw=true', color: 'border-border' },
  { title: 'CSS', desc: 'Colors, layouts, animations. Style your sites', image: 'https://github.com/Broodje565/IT-Learn-Visuals/blob/main/icons/css.png?raw=true', color: 'border-border' },
]

function CourseCards() {
  return (
    <section className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-2">
            PICK YOUR <span className="gradient-text">TRACK</span>
          </h2>
          <p className="font-mono text-text-muted text-sm">No experience needed. Learn to code in your browser from lesson one.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Link
                href="/login"
                className={`block card cursor-pointer group transition-all duration-200 hover:-translate-y-1 ${course.color}`}
              >
                <div className="w-14 h-14 bg-background-elevated border border-border flex items-center justify-center mb-5 group-hover:shadow-neon-cyan transition-shadow">
                  <img src={course.image} alt={course.title} className="w-8 h-8 object-contain" />
                </div>
                <div className="font-heading text-xs text-text-primary mb-3 tracking-wider">{course.title}</div>
                <p className="font-mono text-text-secondary text-xs leading-relaxed mb-4">{course.desc}</p>
                <span className="inline-flex items-center gap-1 font-mono text-primary text-xs font-bold group-hover:text-warning transition-colors">
                  START ▸
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/login" className="font-mono text-text-secondary hover:text-primary transition-colors text-xs cursor-pointer">
            VIEW ALL COURSES ▸
          </Link>
        </div>
      </div>
    </section>
  )
}

const platforms = [
  { key: 'itlearn', label: 'IT LEARN' },
  { key: 'fcc', label: 'freeCodeCamp' },
  { key: 'codecademy', label: 'Codecademy' },
  { key: 'odin', label: 'Odin Project' },
  { key: 'mimo', label: 'Mimo' },
  { key: 'coddy', label: 'Coddy' },
] as const

type PlatformKey = (typeof platforms)[number]['key']

const comparisons: { label: string; results: Record<PlatformKey, boolean> }[] = [
  { label: 'Free forever', results: { itlearn: true, fcc: true, codecademy: false, odin: true, mimo: false, coddy: false } },
  { label: 'Built by students', results: { itlearn: true, fcc: false, codecademy: false, odin: true, mimo: false, coddy: false } },
  { label: 'Gamified (XP, badges)', results: { itlearn: true, fcc: false, codecademy: true, odin: false, mimo: true, coddy: true } },
  { label: 'No setup needed', results: { itlearn: true, fcc: true, codecademy: true, odin: false, mimo: true, coddy: true } },
  { label: 'Active Discord', results: { itlearn: true, fcc: true, codecademy: false, odin: true, mimo: false, coddy: false } },
  { label: 'Real projects', results: { itlearn: true, fcc: true, codecademy: true, odin: true, mimo: true, coddy: true } },
]

function WhyITLearn() {
  return (
    <section className="section-pad bg-background-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-2">
            WHY <span className="gradient-text">HERE</span>?
          </h2>
          <p className="font-mono text-text-muted text-sm">Most coding platforms feel like homework. This one does not.</p>
        </motion.div>

        <div className="border border-border overflow-x-auto">
          <div className="min-w-[1000px]">
            <div
              className="grid gap-2 py-3 px-6 border-b border-border bg-background-elevated"
              style={{ gridTemplateColumns: `1.4fr repeat(${platforms.length}, 1fr)` }}
            >
              <div className="font-heading text-[0.65rem] text-text-primary tracking-widest">FEATURE</div>
              {platforms.map(p => (
                <div
                  key={p.key}
                  className={`font-heading text-[0.6rem] tracking-widest text-center whitespace-nowrap ${p.key === 'itlearn' ? 'text-primary' : 'text-text-muted'}`}
                >
                  {p.label}
                </div>
              ))}
            </div>
            {comparisons.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid gap-2 py-4 px-6 border-b border-border/50 last:border-0 hover:bg-background-elevated/50 transition-colors"
                style={{ gridTemplateColumns: `1.4fr repeat(${platforms.length}, 1fr)` }}
              >
                <div className="font-mono text-text-secondary text-xs self-center">{row.label}</div>
                {platforms.map(p => (
                  <div key={p.key} className="text-center self-center">
                    {row.results[p.key] ? (
                      <span className={p.key === 'itlearn' ? 'text-success text-sm' : 'text-text-muted text-sm'}>{'\u2713'}</span>
                    ) : (
                      <span className="text-error/60 text-sm">{'\u2715'}</span>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  { quote: 'this is cool feedback', name: 'this is a username', role: 'this is what they do (e.g. Student)' },
  { quote: 'so here you put feedback', name: 'this is def not a username', role: 'frontend dev' },
  { quote: 'THIS PLATFORM IS AMAZING', name: 'supperman', role: 'co owner (so definetly not biased)' },
  { quote: 'i like whoppers more', name: 'Burger King Employee', role: 'baking burgers (and websites)' },
]

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="section-pad bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-2">
            REAL <span className="gradient-text">STUDENTS</span>
          </h2>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,240,255,0.2) transparent' }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card snap-start shrink-0 w-[320px] sm:w-[380px]"
          >
            <div className="font-mono text-primary/20 text-3xl mb-4">&ldquo;</div>
            <p className="font-mono text-text-secondary text-sm leading-relaxed mb-6">{t.quote}</p>
            <div className="border-t border-border pt-4">
              <div className="font-heading text-[0.6rem] text-text-primary tracking-widest">{t.name}</div>
              <div className="font-mono text-text-muted text-xs mt-1">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Community() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section ref={ref} className="section-pad bg-background-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: imgY }} className="order-2 lg:order-1 flex justify-center">
            <img
              src="https://files.itlearn.be/images/branding/icons/student_with_itlearn.png"
              alt="Student community illustration"
              className="w-full max-w-[380px] h-auto"
              style={{ imageRendering: 'pixelated' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-4">
              CODERS ON THE{' '}
              <span className="gradient-text">SAME QUEST</span>
            </h2>
            <p className="font-mono text-text-secondary text-sm leading-relaxed mb-8 max-w-md">
              Building together is more fun! Join our Discord to share projects, ask questions and talk about the beautiful world of code.
            </p>
            <a
              href="https://discord.itlearn.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              JOIN THE DISCORD SERVER
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const teamMembers = [
  { name: 'Broodje56', role: 'Founder', category: 'owner', image: 'https://files.itlearn.be/images/branding/pfp/Broodje56.png', bio: 'I am Broodje56, and together with Joren I co-founded IT Learn. From a young age, I have been fascinated by technology and computers. With IT Learn, my goal is to share that passion and help other young people discover the fun and creative side of programming through interactive learning.', link: 'https://github.com/Broodje565' },
  { name: 'Joren', role: 'Founder', category: 'owner', image: 'https://files.itlearn.be/images/branding/pfp/AIM_pfp.png', bio: 'I am Joren, and together with Broodje56 I co-founded IT Learn. I have been programming since I was 11 and have worked on different projects. I have also helped multiple people create websites and apps. With IT Learn, I want to help others learn programming in a fun and educational way. I hope you will enjoy our project!', link: 'https://github.com/JorenS15' },
  { name: 'super_man2775', role: 'Co-owner', category: 'owner', image: 'https://files.itlearn.be/images/branding/pfp/Superman.png', bio: 'Hello! I am super_man2775, the co-owner of IT Learn! I am very happy to be part of this project, and I still have lots of exciting and useful ideas on my to-do list. I hope to make IT Learn grow into something really big one day.', link: 'https://www.superman2775.eu/' },
  { name: 'Miltie', role: 'Manager', category: 'manager', image: 'https://files.itlearn.be/images/branding/pfp/Miltie.jpg', bio: 'My name is Miltie, and I am the Manager of the IT-Learn Discord. I am trying to learn a couple of different coding languages at the moment, with the help of this platform ofcourse. I would love to be able to help programming this website later. I am looking to help this community where necessary, and hope to meet you here too!', link: 'https://discord.itlearn.be/' },
  { name: 'Nunoke', role: 'Developer', category: 'developer', image: 'https://files.itlearn.be/images/branding/pfp/Nunoke.png', bio: 'I am Nuno, and I am a developer at IT Learn. I am a computer science student and I love making websites and I want to teach it myself. That is why I want to help create IT Learn to make learning it even easier and more fun.', link: 'https://github.com/Nunoke123' },
  { name: 'viviodezio', role: 'Moderator', category: 'moderator', image: 'https://files.itlearn.be/images/branding/pfp/Viviodezio.png', bio: 'Hi, I am Vivio and I am a moderator for IT Learn, so I mainly keep the Discord safe and engaging. I am currently learning how to code with IT Learn, and hope to see you in the Discord server too!', link: 'https://discord.itlearn.be' },
]

const categories = [
  { key: 'owner', label: 'OWNERS' },
  { key: 'manager', label: 'MANAGERS' },
  { key: 'developer', label: 'DEVELOPERS' },
  { key: 'moderator', label: 'MODERATORS' },
]

function TeamSection() {
  const [active, setActive] = useState('owner')
  const filtered = teamMembers.filter(m => m.category === active)

  return (
    <section id="team" className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-2">
            BUILT BY <span className="gradient-text">REAL PEOPLE</span>
          </h2>
          <p className="font-mono text-text-muted text-sm">Just a bunch of random people working on this thing! No corporate team page here.</p>
        </motion.div>

        <div className="sticky top-[5.5rem] z-40 flex flex-wrap justify-center gap-2 mb-12 py-3 bg-background/80 backdrop-blur-sm">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`font-heading text-[0.55rem] tracking-widest px-4 py-2 border transition-all cursor-pointer ${
                active === cat.key
                  ? 'border-primary text-primary bg-primary/[0.05] shadow-neon-cyan'
                  : 'border-border text-text-muted hover:text-text-secondary hover:border-text-muted'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((m, i) => (
            <motion.div
              key={m.name + m.role}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="card group"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={m.image} alt={m.name} className="w-12 h-12 object-cover border border-border" />
                <div>
                  <div className="font-heading text-[0.55rem] text-text-primary tracking-widest">{m.name}</div>
                  <div className="font-mono text-primary text-[0.6rem] tracking-wider">{m.role}</div>
                </div>
              </div>
              <p className="font-mono text-text-secondary text-xs leading-relaxed mb-4">{m.bio}</p>
              <a href={m.link} target="_blank" rel="noopener noreferrer" className="font-mono text-primary text-[0.6rem] hover:text-warning transition-colors cursor-pointer">
                VIEW PROFILE ▸
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: '0', label: 'LEARNERS' },
  { value: '0', label: 'COUNTRIES' },
  { value: '0', label: 'COURSES' },
  { value: '0', label: 'PROJECTS' },
]

function LiveStats() {
  return (
    <section className="section-pad bg-background-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="arcade-screen p-10 md:p-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-2xl sm:text-3xl gradient-text mb-2">{stat.value}</div>
                <div className="font-heading text-[0.5rem] text-text-muted tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'IS IT REALLY FREE?', a: 'Yes! No paywalls, credit cards and advertisements! Just you and the code. We don\'t even have a bank account!' },
  { q: 'DO I NEED EXPERIENCE?', a: 'No. Our courses start from zero, and guide you from start to finish. You only need a computer and some curiosity.' },
  { q: 'HOW IS THIS DIFFERENT?', a: 'Our platform is built by students. We learn you the skills you need in a fun, engaging way.' },
  { q: 'WHAT CAN I LEARN?', a: 'We currently offer mainly courses for web development. From DNS to Git, we have you covered.' },
  { q: 'HOW DO I GET HELP?', a: 'Join our Discord. The community is always ready to help you fixing bugs, asking questions, and sharing knowledge.' },
  { q: 'CAN I CONTRIBUTE?', a: 'Yes. The project is open source. Fix bugs, write courses or maybe even new features. Check GitHub or say hi in Discord.' },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-pad bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-2xl sm:text-3xl text-text-primary">
            <span className="gradient-text">FAQ</span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                id={`faq-q-${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-a-${i}`}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-background-surface/50 transition-colors"
              >
                <span className="font-heading text-[0.55rem] text-text-primary tracking-widest pr-4">{faq.q}</span>
                <span className="font-mono text-primary text-sm shrink-0">{open === i ? '\u25BE' : '\u25B8'}</span>
              </button>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                className={`overflow-hidden transition-all duration-200 ${open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="border-t border-border px-5 pb-5">
                  <p className="font-mono text-text-secondary text-xs leading-relaxed pt-4">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCta() {
  return (
    <section className="section-pad bg-background-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="arcade-screen"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center p-10 md:p-16">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-4">
                START <span className="gradient-text">FOR FREE</span>
              </h2>
              <p className="font-mono text-text-secondary text-sm mb-8 max-w-md">
                No credit card. No trial period. Open a project and go.
                Join over a thousand learners already leveling up.
              </p>
              <Link href="/signup" className="btn btn-primary">
                CREATE ACCOUNT ▸
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="https://github.com/Broodje565/IT-Learn-Visuals/blob/main/icons/programmer.png?raw=true"
                alt=""
                className="w-full max-w-[240px] h-auto"
                style={{ imageRendering: 'pixelated' }}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
