import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  CarFront,
  Check,
  ChevronRight,
  Clock3,
  Crosshair,
  Gauge,
  Hammer,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

const PHONE_DISPLAY = "(53) 99146-4596";
const PHONE_TEL = "+5553991464596";
const WHATSAPP_URL =
  "https://wa.me/5553991464596?text=Ol%C3%A1%2C%20acessei%20o%20site%20da%20Mec%C3%A2nica%20Cesar%20e%20quero%20agendar%20um%20atendimento.";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Duque%20de%20Caxias%2C%20955%20-%20Fragata%2C%20Pelotas%20-%20RS%2C%2096030-003";

const services = [
  {
    number: "01",
    icon: Gauge,
    title: "Diagnóstico & motor",
    description:
      "A gente identifica a causa do problema antes de indicar qualquer reparo — do motor à injeção.",
    accent: "Precisão desde o primeiro passo",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Freios & suspensão",
    description:
      "Mais segurança e controle com revisão de freios, amortecedores, suspensão e direção.",
    accent: "Segurança para cada quilômetro",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Câmbio & transmissão",
    description:
      "Manutenção e reparo para devolver suavidade, resposta e confiança ao dirigir.",
    accent: "Condução mais suave",
  },
  {
    number: "04",
    icon: CalendarClock,
    title: "Revisão geral",
    description:
      "Óleo, filtros, velas, palhetas e itens essenciais para manter o carro em dia.",
    accent: "Prevenção que evita surpresas",
  },
  {
    number: "05",
    icon: CarFront,
    title: "Carroceria & escapamento",
    description:
      "Também cuidamos de reparos de carroceria, escapamentos e vazamentos.",
    accent: "Tudo resolvido no mesmo lugar",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Carros clássicos",
    description:
      "Atenção especial para veículos que pedem conhecimento, calma e cuidado nos detalhes.",
    accent: "Respeito pela história do seu carro",
  },
];

const differences = [
  {
    number: "01",
    title: "Diagnóstico antes do reparo",
    text: "Antes de trocar uma peça, investigamos o que realmente está acontecendo. Menos tentativa. Mais assertividade.",
    icon: Crosshair,
  },
  {
    number: "02",
    title: "Orçamento transparente",
    text: "Você entende o que precisa ser feito, por que precisa e qual é o investimento antes da execução.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Comunicação clara",
    text: "Você acompanha o que encontramos, o que recomendamos e o que será feito, sem jargão desnecessário.",
    icon: Star,
  },
  {
    number: "04",
    title: "Cuidado técnico",
    text: "Da chegada à entrega, seu carro é tratado com atenção aos detalhes e respeito pelo seu tempo.",
    icon: Wrench,
  },
];

const steps = [
  {
    number: "01",
    title: "Você chama",
    text: "Conte pelo WhatsApp o que o carro está apresentando ou agende sua revisão.",
  },
  {
    number: "02",
    title: "A gente avalia",
    text: "Fazemos uma avaliação direcionada para entender a origem do problema.",
  },
  {
    number: "03",
    title: "Você aprova",
    text: "Explicamos o diagnóstico e o orçamento. O serviço só avança com sua aprovação.",
  },
  {
    number: "04",
    title: "Você segue tranquilo",
    text: "Executamos o combinado e devolvemos seu carro pronto para a próxima estrada.",
  },
];

const gallery = [
  {
    src: "/manus-storage/oficina-008_281a4b43.png",
    alt: "Fachada da Mecânica Cesar dos Santos",
    className: "gallery-feature",
    label: "Nossa fachada",
  },
  {
    src: "/manus-storage/oficina-036_c6ccb706.png",
    alt: "Veículos em atendimento dentro da oficina",
    className: "gallery-wide",
    label: "Área de atendimento",
  },
  {
    src: "/manus-storage/oficina-027_f476e364.png",
    alt: "Bancada técnica da oficina",
    className: "gallery-small",
    label: "Precisão técnica",
  },
  {
    src: "/manus-storage/oficina-030_db1e3b8c.png",
    alt: "Prateleiras com produtos automotivos",
    className: "gallery-small",
    label: "Tudo à mão",
  },
  {
    src: "/manus-storage/oficina-033_9f028b12.png",
    alt: "Estoque de produtos e peças",
    className: "gallery-small",
    label: "Organização",
  },
  {
    src: "/manus-storage/oficina-039_0b548150.png",
    alt: "Interior da oficina Mecânica Cesar",
    className: "gallery-small",
    label: "Nosso espaço",
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand-compact" : ""}`} href="#top" aria-label="Mecânica Cesar dos Santos — início">
      <span className="brand-mark">C<span>+</span></span>
      <span className="brand-copy">
        <strong>MECÂNICA CESAR</strong>
        <small>DOS SANTOS <i /></small>
      </span>
    </a>
  );
}

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return <div className={`section-label ${light ? "section-label-light" : ""}`}><span />{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className={`site-nav ${menuOpen ? "site-nav-open" : ""}`} aria-label="Navegação principal">
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#oficina" onClick={closeMenu}>A oficina</a>
            <a href="#processo" onClick={closeMenu}>Como funciona</a>
            <a href="#fotos" onClick={closeMenu}>Fotos</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a className="nav-mobile-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <MessageCircle size={16} /> Falar no WhatsApp
            </a>
          </nav>
          <div className="header-actions">
            <div className="open-status"><span /> Aberto hoje</div>
            <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> <span>Falar no WhatsApp</span>
            </a>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="hero-content content-wrap">
            <div className="hero-copy">
              <SectionLabel light>Oficina mecânica em Pelotas</SectionLabel>
              <h1>Seu carro pede<br /><em>cuidado de verdade.</em></h1>
              <p className="hero-lead">Diagnóstico preciso, reparo bem feito e conversa clara em todas as etapas. Para carros de todas as marcas — inclusive os clássicos.</p>
              <div className="hero-buttons">
                <a className="button button-red" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} /> Agendar pelo WhatsApp <ArrowRight size={17} />
                </a>
                <a className="button button-ghost" href={MAPS_URL} target="_blank" rel="noreferrer">
                  <Navigation size={17} /> Como chegar
                </a>
                <a className="button button-ghost" href={`tel:${PHONE_TEL}`}>
                  <Phone size={17} /> Ligar agora
                </a>
              </div>
              <div className="hero-reassurance">
                <span><Check size={14} /> Todas as marcas</span>
                <span><Check size={14} /> Carros clássicos</span>
                <span><Check size={14} /> Orçamento claro</span>
              </div>
            </div>
            <div className="hero-aside">
              <div className="hero-aside-line" />
              <p className="eyebrow">Nosso jeito de trabalhar</p>
              <h2>Antes de trocar,<br /><strong>a gente investiga.</strong></h2>
              <p>O diagnóstico vem primeiro. Assim, você não gasta com tentativa e sabe exatamente o que está sendo feito no seu carro.</p>
              <a href="#diferenciais" className="text-link">Entenda por que escolher a gente <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <a className="hero-scroll" href="#servicos"><span /> Role para conhecer</a>
        </section>

        <section className="proof-strip">
          <div className="content-wrap proof-grid">
            <div className="proof-intro"><span className="proof-kicker">Cuidado técnico local</span><strong>Manutenção para seguir em frente.</strong></div>
            <div className="proof-item"><b>01</b><span>Diagnóstico<br />direcionado</span></div>
            <div className="proof-item"><b>02</b><span>Serviço completo<br />em um só lugar</span></div>
            <div className="proof-item"><b>03</b><span>Atendimento claro<br />do início ao fim</span></div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="content-wrap services-layout">
            <div className="section-intro services-intro">
              <SectionLabel>O que fazemos</SectionLabel>
              <h2>Um olhar técnico para <span>cada detalhe.</span></h2>
              <p>Do item mais simples à manutenção que exige experiência, cuidamos do seu carro com método, transparência e atenção.</p>
              <a className="text-link text-link-dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar com a oficina <ArrowRight size={17} /></a>
            </div>
            <div className="services-list">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <a className="service-row" href={WHATSAPP_URL} target="_blank" rel="noreferrer" key={service.number}>
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><Icon size={20} /></span>
                    <span className="service-text"><strong>{service.title}</strong><span>{service.description}</span><small>{service.accent}</small></span>
                    <ChevronRight className="service-arrow" size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-section" id="oficina">
          <div className="content-wrap about-grid">
            <div className="about-media">
              <img src="/manus-storage/oficina-036_c6ccb706.png" alt="Interior da oficina com veículos em atendimento" />
              <div className="about-stamp"><span>CESAR</span><strong>Desde o<br />primeiro diagnóstico</strong><i /></div>
              <div className="about-caption"><span>01</span> Atenção em cada etapa</div>
            </div>
            <div className="about-copy">
              <SectionLabel light>Sobre a oficina</SectionLabel>
              <h2>Seu carro não é<br /><em>só mais um.</em></h2>
              <p className="about-highlight">Na Mecânica Cesar dos Santos, cada atendimento começa com escuta e termina com a sensação de que o carro está em boas mãos.</p>
              <p>Cuidamos da manutenção de rotina e dos reparos mais complexos com um objetivo simples: encontrar a causa, explicar o caminho e fazer o serviço direito.</p>
              <p>Estamos em Pelotas para atender você com proximidade, conhecimento e respeito pelo seu tempo — seja qual for a marca ou a história do seu veículo.</p>
              <a className="button button-outline-light" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={17} /> Visitar a oficina</a>
            </div>
          </div>
        </section>

        <section className="section differences-section" id="diferenciais">
          <div className="content-wrap">
            <div className="section-heading-row">
              <div><SectionLabel>Por que a Mecânica Cesar</SectionLabel><h2>Confiança se constrói<br /><span>no jeito de fazer.</span></h2></div>
              <p>Você não precisa entender de mecânica para ser bem atendido. Precisa encontrar quem explique com clareza e cumpra o combinado.</p>
            </div>
            <div className="difference-grid">
              {differences.map((difference) => {
                const Icon = difference.icon;
                return <article className="difference-card" key={difference.number}><div className="difference-top"><span>{difference.number}</span><Icon size={22} /></div><h3>{difference.title}</h3><p>{difference.text}</p><span className="card-line" /></article>;
              })}
            </div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="content-wrap">
            <div className="section-heading-row process-heading">
              <div><SectionLabel>Como funciona</SectionLabel><h2>Do primeiro contato<br />à <span>entrega.</span></h2></div>
              <p>Sem mistério, sem pressão e sem serviço que você não aprovou. Um processo simples para você dirigir tranquilo.</p>
            </div>
            <div className="steps-grid">
              {steps.map((step, index) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span>{index < steps.length - 1 && <span className="step-connector" />}<h3>{step.title}</h3><p>{step.text}</p></article>)}
            </div>
            <div className="process-cta"><span><Wrench size={19} /> Seu carro em boas mãos começa com uma conversa.</span><a className="button button-dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar atendimento <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="gallery-section" id="fotos">
          <div className="content-wrap">
            <div className="section-heading-row gallery-heading"><div><SectionLabel>Conheça nosso espaço</SectionLabel><h2>Trabalho sério<br /><span>por dentro e por fora.</span></h2></div><p>Um espaço organizado para receber seu carro com segurança e executar cada etapa com cuidado.</p></div>
            <div className="gallery-grid">
              {gallery.map((image) => <a href={image.src} target="_blank" rel="noreferrer" className={`gallery-item ${image.className}`} key={image.src}><img src={image.src} alt={image.alt} /><span>{image.label} <ArrowUpRight /></span></a>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
          <div className="content-wrap contact-grid">
            <div className="contact-copy"><SectionLabel light>Onde e quando</SectionLabel><h2>Quando seu carro<br />pedir, <em>chame a gente.</em></h2><p>Estamos prontos para ouvir, avaliar e orientar o melhor caminho para o seu veículo.</p><div className="contact-buttons"><a className="button button-red" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Chamar no WhatsApp</a><a className="button button-ghost" href={`tel:${PHONE_TEL}`}><Phone size={17} /> {PHONE_DISPLAY}</a></div></div>
            <div className="contact-details"><div className="contact-detail"><span className="detail-icon"><MapPin size={19} /></span><div><small>Onde estamos</small><strong>Av. Duque de Caxias, 955</strong><p>Fragata, Pelotas — RS<br />96030-003</p><a href={MAPS_URL} target="_blank" rel="noreferrer">Abrir no mapa <ArrowRight size={15} /></a></div></div><div className="contact-detail"><span className="detail-icon"><Clock3 size={19} /></span><div><small>Horário de atendimento</small><strong>Segunda a sexta</strong><p>8:15 às 18:30</p><strong>Sábado</strong><p>9:00 às 12:00</p></div></div></div>
          </div>
        </section>

        <section className="final-cta"><div className="content-wrap final-cta-inner"><div className="final-mark"><Hammer size={22} /></div><div><SectionLabel>Seu carro merece</SectionLabel><h2>O cuidado certo,<br /><span>no lugar certo.</span></h2></div><a className="button button-red" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar com a Mecânica Cesar <ArrowRight size={17} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="content-wrap footer-grid"><div className="footer-brand"><BrandMark compact /><p>Diagnóstico certo. Reparo seguro. Seu carro em boas mãos.</p></div><div className="footer-links"><strong>Navegue</strong><a href="#servicos">Serviços</a><a href="#oficina">A oficina</a><a href="#processo">Como funciona</a><a href="#contato">Contato</a></div><div className="footer-contact"><strong>Fale com a gente</strong><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href={`tel:${PHONE_TEL}`}><Phone size={15} /> {PHONE_DISPLAY}</a><span><MapPin size={15} /> Pelotas — RS</span></div></div><div className="content-wrap footer-bottom"><span>© {new Date().getFullYear()} Mecânica Cesar dos Santos</span><span>Feito para cuidar melhor do seu carro.</span></div></footer>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><MessageCircle size={22} /><span>WhatsApp</span></a>
    </div>
  );
}
