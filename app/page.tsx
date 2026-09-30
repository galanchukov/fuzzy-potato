"use client";

import { ArrowUpRight, Bot, Braces, Cpu, Github, Globe, Layers3, Mail, Network, Send, Sparkles, Workflow, Zap } from "lucide-react";

const skills = [
  { icon: Sparkles, title: "AI-автоматизация", text: "AI-сценарии, агенты, промпты и интеграция моделей в реальные процессы." },
  { icon: Workflow, title: "n8n", text: "Сложные workflow, вебхуки, обработка данных и связка сервисов без ручной рутины." },
  { icon: Network, title: "API-интеграции", text: "REST API, OAuth, webhooks и обмен данными между сервисами." },
  { icon: Bot, title: "Telegram-боты", text: "Боты, мини-приложения, команды, уведомления и автоматизированные сценарии." },
  { icon: Globe, title: "Web", text: "Лендинги, внутренние инструменты, панели и небольшие веб-приложения." },
  { icon: Braces, title: "Скрипты", text: "Python и JavaScript для автоматизации задач, обработки данных и интеграций." }
];

const projects = [
  { tag: "AI / Automation", title: "AI-ассистенты и автоматизация", text: "Сценарии, где модель не просто отвечает, а запускает действия, обрабатывает данные и связывает сервисы." },
  { tag: "Telegram", title: "Telegram-боты", text: "Боты для статистики, уведомлений, взаимодействия с пользователями и автоматизации процессов." },
  { tag: "n8n", title: "Workflow-системы", text: "Связка Telegram, Google-сервисов, API, баз данных и AI в единый процесс." },
  { tag: "Web", title: "Веб-инструменты", text: "Небольшие сервисы и интерфейсы под конкретную задачу вместо огромной корпоративной махины." },
  { tag: "API", title: "Интеграции", text: "Получение, преобразование и передача данных между системами через API и webhooks." },
  { tag: "IT", title: "Автоматизация рутины", text: "Скрипты и инструменты, которые убирают повторяющиеся действия и экономят время." }
];

const stack = ["Python", "TypeScript", "JavaScript", "Node.js", "Next.js", "n8n", "PostgreSQL", "REST API", "Telegram Bot API", "Docker", "Git", "Vercel", "OpenRouter", "AI APIs"];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav">
        <a className="brand" href="#top">B<span>.</span></a>
        <div className="nav-links">
          <a href="#services">Что делаю</a>
          <a href="#projects">Проекты</a>
          <a href="#stack">Стек</a>
          <a href="#about">Обо мне</a>
        </div>
        <a className="nav-cta" href="#contact">Связаться <ArrowUpRight size={16} /></a>
      </nav>

      <section id="top" className="hero container">
        <div className="eyebrow"><span className="pulse" /> AI & AUTOMATION</div>
        <h1>Автоматизирую<br /><span>то, что можно</span> автоматизировать.</h1>
        <p className="hero-text">AI • n8n • API • Python • JavaScript</p>
        <p className="hero-sub">Собираю рабочие системы из AI, интеграций, ботов и кода. От идеи и прототипа до запущенного инструмента.</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">Обсудить проект <ArrowUpRight size={18} /></a>
          <a className="button ghost" href="#projects">Смотреть проекты</a>
        </div>
        <div className="hero-grid">
          <div><strong>AI</strong><span>интеграции</span></div>
          <div><strong>n8n</strong><span>workflow</span></div>
          <div><strong>API</strong><span>связки</span></div>
          <div><strong>Code</strong><span>автоматизация</span></div>
        </div>
      </section>

      <section id="services" className="section container">
        <div className="section-head"><div><span className="kicker">01 / КОМПЕТЕНЦИИ</span><h2>Собираю системы,<br />а не набор модных слов.</h2></div><p>Когда задачу можно решить связкой API, workflow и небольшого количества кода, нет особого смысла строить космический корабль.</p></div>
        <div className="cards skills">{skills.map(({ icon: Icon, title, text }) => <article className="card" key={title}><div className="icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="projects" className="section container">
        <div className="section-head"><div><span className="kicker">02 / ПРОЕКТЫ</span><h2>Примеры задач</h2></div><p>Здесь только направления работ, которые реально можно показать в портфолио. Без придуманных клиентов и басен про «рост конверсии на 847%».</p></div>
        <div className="project-grid">{projects.map((project, i) => <article className="project" key={project.title}><div className="project-number">0{i + 1}</div><span className="tag">{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p><ArrowUpRight className="project-arrow" size={20} /></article>)}</div>
      </section>

      <section id="stack" className="section container">
        <div className="stack-panel"><div><span className="kicker">03 / STACK</span><h2>Инструменты</h2><p>Использую инструмент под задачу, а не задачу под любимый инструмент.</p></div><div className="stack-list">{stack.map(item => <span key={item}>{item}</span>)}</div></div>
      </section>

      <section id="about" className="section container about">
        <div><span className="kicker">04 / ОБО МНЕ</span><h2>Технический человек<br />с уклоном в автоматизацию.</h2></div>
        <div className="about-copy"><p>Работаю на стыке IT, разработки и AI. Настраиваю сети и инфраструктуру, пишу скрипты, делаю ботов и сайты, работаю с API и автоматизирую процессы через n8n.</p><p>Мне интересны задачи, где нужно разобраться в хаосе, собрать архитектуру и превратить ручную работу в понятный процесс.</p><div className="mini-stats"><span><Cpu /> AI + Code</span><span><Layers3 /> Automation</span><Zap /> API-first</div></div>
      </section>

      <section className="process container">
        <span className="kicker">05 / ПРОЦЕСС</span><h2>От задачи до работающего решения.</h2>
        <div className="steps">{["Разбираю задачу", "Проектирую решение", "Собираю прототип", "Интегрирую сервисы", "Запускаю и дорабатываю"].map((x, i) => <div className="step" key={x}><b>0{i + 1}</b><span>{x}</span></div>)}</div>
      </section>

      <section id="contact" className="contact container">
        <div className="contact-inner"><span className="kicker">06 / КОНТАКТ</span><h2>Есть задача?<br /><span>Давайте разберёмся.</span></h2><p>Опишите, что сейчас делается вручную, что бесит и что хочется автоматизировать. Дальше начинается самое интересное.</p><div className="contact-actions"><a className="button primary" href="mailto:hello@example.com"><Mail size={18} /> Email</a><a className="button ghost" href="https://github.com/galanchukov" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a className="button ghost" href="https://t.me/" target="_blank" rel="noreferrer"><Send size={18} /> Telegram</a></div></div>
      </section>

      <footer className="footer container"><span>© 2026 Боря</span><span>AI • Automation • Code</span></footer>
    </main>
  );
}