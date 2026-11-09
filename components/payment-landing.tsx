"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownLeft, ArrowLeftRight, ArrowRight, ArrowUpRight, BadgeCheck,
  Banknote, Check, ChevronDown, ChevronRight, CircleHelp, CreditCard,
  Globe2, LockKeyhole, Menu, ShieldCheck, Sparkles, X, Zap
} from "lucide-react";

const translations: Record<string, string> = {
  "A simpler way to move money is here": "Uma forma mais simples de movimentar dinheiro chegou",
  "Discover FlowPay": "Conheça a FlowPay",
  "Features": "Funcionalidades",
  "How it works": "Como funciona",
  "Security": "Segurança",
  "FAQs": "Perguntas frequentes",
  "Log in": "Entrar",
  "Get started": "Começar",
  "YOUR MONEY, WITHOUT THE FRICTION": "O SEU DINHEIRO, SEM COMPLICAÇÕES",
  "Money moves": "O dinheiro movimenta-se",
  "better": "melhor",
  "Pay, get paid and send money around the world. One beautifully simple account for everything your money needs to do.": "Pague, receba e envie dinheiro para qualquer parte do mundo. Uma conta simples para tudo o que precisa de fazer com o seu dinheiro.",
  "Get started for free": "Comece gratuitamente",
  "See how it works": "Veja como funciona",
  "Loved by people who move money": "Adorada por quem movimenta dinheiro",
  "TOTAL BALANCE": "SALDO TOTAL",
  "Payment complete": "Pagamento concluído",
  "Your transfer was successful": "A sua transferência foi realizada com sucesso",
  "150+ countries": "Mais de 150 países",
  "MADE FOR YOUR EVERYDAY": "FEITA PARA O SEU DIA A DIA",
  "Secure by design": "Segurança desde a conceção",
  "Fast transfers": "Transferências rápidas",
  "Move globally": "Movimente dinheiro globalmente",
  "No hidden surprises": "Sem surpresas escondidas",
  "ONE ACCOUNT. MORE POSSIBILITIES.": "UMA CONTA. MAIS POSSIBILIDADES.",
  "Your money has": "O seu dinheiro tem",
  "places to": "lugares para",
  "Everything you need to stay in control, whether you're at home or somewhere new.": "Tudo o que precisa para manter o controlo, esteja em casa ou num novo destino.",
  "SEND & RECEIVE": "ENVIAR E RECEBER",
  "Money that": "Dinheiro que",
  "gets there.": "chega ao destino.",
  "Send money to friends, family or businesses with a few taps. No complicated steps.": "Envie dinheiro a amigos, familiares ou empresas com apenas alguns toques. Sem passos complicados.",
  "YOU SEND": "ENVIA",
  "THEY GET": "RECEBE",
  "YOUR FLOWPAY CARD": "O SEU CARTÃO FLOWPAY",
  "Ready when": "Pronto quando",
  "you are.": "precisar.",
  "A card experience designed for everyday purchases and travel alike.": "Um cartão pensado para as compras do dia a dia e para as viagens.",
  "MULTI-CURRENCY": "MULTIMOEDA",
  "Go beyond": "Vá mais",
  "borders.": "além-fronteiras.",
  "Keep an eye on different currencies and understand what you're spending.": "Acompanhe diferentes moedas e saiba quanto está a gastar.",
  "SIMPLE FROM THE START": "SIMPLES DESDE O INÍCIO",
  "Less steps.": "Menos passos.",
  "More living.": "Mais vida.",
  "Getting started shouldn't feel like work. Open your account and get on with your day.": "Começar não deve parecer uma tarefa. Abra a sua conta e aproveite o seu dia.",
  "Create your account": "Crie a sua conta",
  "Sign up in minutes": "Registe-se em minutos",
  "Tell us a little about yourself and set up your account.": "Diga-nos um pouco sobre si e configure a sua conta.",
  "Make it yours": "Personalize a sua conta",
  "Set your preferences and explore the tools you need.": "Defina as suas preferências e explore as ferramentas de que precisa.",
  "Move with confidence": "Movimente-se com confiança",
  "Pay, send and track your money from one place.": "Pague, envie e acompanhe o seu dinheiro num só lugar.",
  "YOUR PEACE OF MIND, BUILT IN": "A SUA TRANQUILIDADE, INCLUÍDA",
  "Security isn't": "A segurança não é",
  "an": "um",
  "extra.": "extra.",
  "Your money and personal information deserve serious protection. That's why safety is part of every FlowPay interaction.": "O seu dinheiro e as suas informações pessoais merecem proteção. Por isso, a segurança faz parte de cada interação com a FlowPay.",
  "Extra verification for sensitive actions": "Verificação adicional para ações sensíveis",
  "Instant card controls and freeze options": "Controlos instantâneos e opção para bloquear o cartão",
  "Activity you can review at a glance": "Atividade que pode consultar rapidamente",
  "Protected": "Protegido",
  "You're in control": "Está no controlo",
  "FlowPay is a fictional product concept. No real financial services are provided.": "A FlowPay é um conceito fictício. Não são prestados serviços financeiros reais.",
  "KNOW BEFORE YOU SEND": "SAIBA ANTES DE ENVIAR",
  "A little more": "Um pouco mais de",
  "currency.": "moeda.",
  "Try the simple currency preview. Change the amount and see an illustrative conversion.": "Experimente o conversor de moedas. Altere o valor e veja uma conversão ilustrativa.",
  "QUICK CONVERTER": "CONVERSOR RÁPIDO",
  "DEMO RATES": "TAXAS DE DEMONSTRAÇÃO",
  "You send": "Envia",
  "Illustrative converted value": "Valor convertido ilustrativo",
  "Indicative demo calculation only. Not a live exchange quote.": "Cálculo ilustrativo. Não representa uma cotação cambial em tempo real.",
  "GOOD QUESTIONS": "BOAS PERGUNTAS",
  "Things you might": "O que talvez queira",
  "wonder.": "saber.",
  "What is FlowPay?": "O que é a FlowPay?",
  "FlowPay is a digital payments concept that brings everyday spending, transfers and payment cards together in one simple experience.": "A FlowPay é um conceito de pagamentos digitais que reúne despesas do dia a dia, transferências e cartões numa experiência simples.",
  "Are there fees for sending money?": "Existem taxas para enviar dinheiro?",
  "Transfers between FlowPay users are free in this demo. International and bank transfers may have fees depending on the route and provider.": "As transferências entre utilizadores FlowPay são gratuitas nesta demonstração. Transferências internacionais ou bancárias podem ter custos, dependendo do destino e do prestador.",
  "Can I use FlowPay abroad?": "Posso utilizar a FlowPay no estrangeiro?",
  "The product concept is designed for international use. Availability, supported currencies and card acceptance would depend on your region.": "O conceito foi pensado para utilização internacional. A disponibilidade, as moedas suportadas e a aceitação do cartão dependem da região.",
  "How is my money protected?": "Como é protegido o meu dinheiro?",
  "Security is built into the experience with device verification, encrypted connections and controls for freezing a card. This demo does not hold or move real funds.": "A segurança está integrada na experiência, com verificação do dispositivo, ligações encriptadas e controlos para bloquear o cartão. Esta demonstração não guarda nem movimenta fundos reais.",
  "YOUR NEXT MOVE STARTS HERE": "O SEU PRÓXIMO PASSO COMEÇA AQUI",
  "Make room for": "Abra espaço para",
  "more life.": "mais vida.",
  "Get updates as FlowPay gets closer to launch.": "Receba novidades à medida que a FlowPay se aproxima do lançamento.",
  "Your email address": "O seu endereço de email",
  "Join the waitlist": "Entrar na lista de espera",
  "You're on the list": "Já está na lista",
  "No spam. Just the occasional good update.": "Sem spam. Apenas novidades ocasionais.",
  "Move money. Move forward.": "Movimente dinheiro. Avance.",
  "Fictional product concept.": "Conceito de produto fictício.",
  "Recent activity": "Atividade recente",
  "See all": "Ver tudo",
  "Send": "Enviar",
  "Add money": "Adicionar dinheiro",
  "Cards": "Cartões",
  "Enter a valid email address.": "Introduza um endereço de email válido.",
  "You're on the list. We'll be in touch soon.": "Já está na lista. Entraremos em contacto em breve.",
  "Transfer flow opened — connect an account to continue.": "Transferência iniciada — ligue uma conta para continuar.",
  "Add money is a demo action. No funds are moved.": "Adicionar dinheiro é uma ação de demonstração. Nenhum valor é movimentado.",
  "Your card controls are ready in the FlowPay app.": "Os controlos do cartão estão disponíveis na aplicação FlowPay.",
  "Studio North": "Studio North",
  "Design services · Today, 10:42": "Serviços de design · Hoje, 10:42",
  "Salary payment": "Pagamento de salário",
  "Acme Studio · Yesterday": "Acme Studio · Ontem",
  "Coffee District": "Coffee District",
  "Food & drink · Yesterday": "Comida e bebidas · Ontem"
};

const frenchTranslations: Record<string, string> = {
  "A simpler way to move money is here": "Une façon plus simple de transférer de l’argent est arrivée",
  "Discover FlowPay": "Découvrez FlowPay",
  "Features": "Fonctionnalités",
  "How it works": "Comment ça marche",
  "Security": "Sécurité",
  "FAQs": "FAQ",
  "Log in": "Se connecter",
  "Get started": "Commencer",
  "YOUR MONEY, WITHOUT THE FRICTION": "VOTRE ARGENT, EN TOUTE SIMPLICITÉ",
  "Money moves": "L’argent circule",
  "better": "mieux",
  "Pay, get paid and send money around the world. One beautifully simple account for everything your money needs to do.": "Payez, recevez et envoyez de l’argent partout dans le monde. Un compte simple et élégant pour tous vos besoins.",
  "Get started for free": "Commencez gratuitement",
  "See how it works": "Découvrez comment ça marche",
  "Loved by people who move money": "Approuvé par ceux qui font circuler leur argent",
  "TOTAL BALANCE": "SOLDE TOTAL",
  "Payment complete": "Paiement effectué",
  "Your transfer was successful": "Votre transfert a été effectué avec succès",
  "150+ countries": "Plus de 150 pays",
  "MADE FOR YOUR EVERYDAY": "PENSÉ POUR VOTRE QUOTIDIEN",
  "Secure by design": "La sécurité dès la conception",
  "Fast transfers": "Transferts rapides",
  "Move globally": "Envoyez de l’argent partout",
  "No hidden surprises": "Aucune mauvaise surprise",
  "ONE ACCOUNT. MORE POSSIBILITIES.": "UN COMPTE. PLUS DE POSSIBILITÉS.",
  "Your money has": "Votre argent a",
  "places to": "de nouvelles destinations",
  "Everything you need to stay in control, whether you're at home or somewhere new.": "Tout ce qu’il vous faut pour garder le contrôle, chez vous ou à l’autre bout du monde.",
  "SEND & RECEIVE": "ENVOYER ET RECEVOIR",
  "Money that": "De l’argent qui",
  "gets there.": "arrive à destination.",
  "Send money to friends, family or businesses with a few taps. No complicated steps.": "Envoyez de l’argent à vos proches ou à des entreprises en quelques gestes. Rien de compliqué.",
  "YOU SEND": "VOUS ENVOYEZ",
  "THEY GET": "ILS REÇOIVENT",
  "YOUR FLOWPAY CARD": "VOTRE CARTE FLOWPAY",
  "Ready when": "Prête quand",
  "you are.": "vous l’êtes.",
  "A card experience designed for everyday purchases and travel alike.": "Une carte pensée aussi bien pour vos achats quotidiens que pour vos voyages.",
  "MULTI-CURRENCY": "MULTIDEVISE",
  "Go beyond": "Allez au-delà",
  "borders.": "des frontières.",
  "Keep an eye on different currencies and understand what you're spending.": "Suivez plusieurs devises et gardez le contrôle de vos dépenses.",
  "SIMPLE FROM THE START": "SIMPLE DÈS LE DÉBUT",
  "Less steps.": "Moins d’étapes.",
  "More living.": "Plus de vie.",
  "Getting started shouldn't feel like work. Open your account and get on with your day.": "Ouvrir un compte ne devrait pas être compliqué. Créez le vôtre et profitez de votre journée.",
  "Create your account": "Créez votre compte",
  "Sign up in minutes": "Inscrivez-vous en quelques minutes",
  "Tell us a little about yourself and set up your account.": "Parlez-nous un peu de vous et configurez votre compte.",
  "Make it yours": "Personnalisez votre compte",
  "Set your preferences and explore the tools you need.": "Définissez vos préférences et découvrez les outils dont vous avez besoin.",
  "Move with confidence": "Avancez en toute confiance",
  "Pay, send and track your money from one place.": "Payez, envoyez et suivez votre argent depuis un seul endroit.",
  "YOUR PEACE OF MIND, BUILT IN": "VOTRE TRANQUILLITÉ, EN TOUTE SIMPLICITÉ",
  "Security isn't": "La sécurité n’est pas",
  "an": "un",
  "extra.": "supplément.",
  "Your money and personal information deserve serious protection. That's why safety is part of every FlowPay interaction.": "Votre argent et vos données personnelles méritent une protection sérieuse. La sécurité est donc au cœur de chaque interaction avec FlowPay.",
  "Extra verification for sensitive actions": "Vérification supplémentaire pour les actions sensibles",
  "Instant card controls and freeze options": "Contrôle instantané de la carte et possibilité de la bloquer",
  "Activity you can review at a glance": "Consultez votre activité en un coup d’œil",
  "Protected": "Protégé",
  "You're in control": "Vous gardez le contrôle",
  "FlowPay is a fictional product concept. No real financial services are provided.": "FlowPay est un concept fictif. Aucun service financier réel n’est proposé.",
  "KNOW BEFORE YOU SEND": "INFORMEZ-VOUS AVANT D’ENVOYER",
  "A little more": "Un peu plus",
  "currency.": "de devises.",
  "Try the simple currency preview. Change the amount and see an illustrative conversion.": "Essayez notre aperçu des devises. Modifiez le montant pour voir une conversion indicative.",
  "QUICK CONVERTER": "CONVERTISSEUR RAPIDE",
  "DEMO RATES": "TAUX INDICATIFS",
  "You send": "Vous envoyez",
  "Illustrative converted value": "Montant converti à titre indicatif",
  "Indicative demo calculation only. Not a live exchange quote.": "Calcul fourni à titre d’exemple. Il ne s’agit pas d’un taux de change en temps réel.",
  "GOOD QUESTIONS": "BONNES QUESTIONS",
  "Things you might": "Ce que vous aimeriez",
  "wonder.": "peut-être savoir.",
  "What is FlowPay?": "Qu’est-ce que FlowPay?",
  "FlowPay is a digital payments concept that brings everyday spending, transfers and payment cards together in one simple experience.": "FlowPay est un concept de paiement numérique qui réunit dépenses quotidiennes, transferts et cartes de paiement dans une expérience simple.",
  "Are there fees for sending money?": "Les transferts d’argent sont-ils payants?",
  "Transfers between FlowPay users are free in this demo. International and bank transfers may have fees depending on the route and provider.": "Les transferts entre utilisateurs FlowPay sont gratuits dans cette démo. Des frais peuvent s’appliquer aux transferts internationaux ou bancaires selon le prestataire et la destination.",
  "Can I use FlowPay abroad?": "Puis-je utiliser FlowPay à l’étranger?",
  "The product concept is designed for international use. Availability, supported currencies and card acceptance would depend on your region.": "Ce concept est conçu pour une utilisation internationale. La disponibilité, les devises prises en charge et l’acceptation de la carte dépendent de votre région.",
  "How is my money protected?": "Comment mon argent est-il protégé?",
  "Security is built into the experience with device verification, encrypted connections and controls for freezing a card. This demo does not hold or move real funds.": "La sécurité repose sur la vérification de l’appareil, les connexions chiffrées et la possibilité de bloquer une carte. Cette démo ne détient ni ne transfère de fonds réels.",
  "YOUR NEXT MOVE STARTS HERE": "VOTRE PROCHAINE ÉTAPE COMMENCE ICI",
  "Make room for": "Faites plus de place",
  "more life.": "à la vie.",
  "Get updates as FlowPay gets closer to launch.": "Recevez des nouvelles à l’approche du lancement de FlowPay.",
  "Your email address": "Votre adresse e-mail",
  "Join the waitlist": "Rejoindre la liste d’attente",
  "You're on the list": "Vous êtes sur la liste",
  "No spam. Just the occasional good update.": "Pas de spam. Juste quelques nouvelles de temps en temps.",
  "Move money. Move forward.": "Faites circuler votre argent. Allez de l’avant.",
  "Fictional product concept.": "Concept de produit fictif.",
  "Recent activity": "Activité récente",
  "See all": "Tout voir",
  "Send": "Envoyer",
  "Add money": "Ajouter de l’argent",
  "Cards": "Cartes",
  "Enter a valid email address.": "Veuillez saisir une adresse e-mail valide.",
  "You're on the list. We'll be in touch soon.": "Vous êtes sur la liste. Nous vous contacterons bientôt.",
  "Transfer flow opened — connect an account to continue.": "Transfert ouvert — connectez un compte pour continuer.",
  "Add money is a demo action. No funds are moved.": "L’ajout d’argent est une action de démonstration. Aucun fonds n’est transféré.",
  "Your card controls are ready in the FlowPay app.": "Les commandes de votre carte sont disponibles dans l’application FlowPay.",
  "Design services · Today, 10:42": "Services de design · Aujourd’hui, 10:42",
  "Salary payment": "Versement du salaire",
  "Acme Studio · Yesterday": "Acme Studio · Hier",
  "Food & drink · Yesterday": "Restauration · Hier"
};

const transactions = [
  { name: "Studio North", detail: "Design services · Today, 10:42", amount: "-€240.00", icon: "SN", color: "violet", type: "sent" },
  { name: "Salary payment", detail: "Acme Studio · Yesterday", amount: "+€2,850.00", icon: "AC", color: "green", type: "received" },
  { name: "Coffee District", detail: "Food & drink · Yesterday", amount: "-€8.50", icon: "CD", color: "orange", type: "sent" }
];

const faqs = [
  { q: "What is FlowPay?", a: "FlowPay is a digital payments concept that brings everyday spending, transfers and payment cards together in one simple experience." },
  { q: "Are there fees for sending money?", a: "Transfers between FlowPay users are free in this demo. International and bank transfers may have fees depending on the route and provider." },
  { q: "Can I use FlowPay abroad?", a: "The product concept is designed for international use. Availability, supported currencies and card acceptance would depend on your region." },
  { q: "How is my money protected?", a: "Security is built into the experience with device verification, encrypted connections and controls for freezing a card. This demo does not hold or move real funds." }
];

export default function PaymentLanding() {
  const [locale, setLocale] = useState<"en" | "pt" | "fr">("en");
  const t = (value: string) => locale === "pt" ? (translations[value] ?? value) : locale === "fr" ? (frenchTranslations[value] ?? value) : value;
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [amount, setAmount] = useState("100");
  const [currency, setCurrency] = useState("EUR");
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const converted = useMemo(() => {
    const rates: Record<string, number> = { EUR: 1, USD: 1.08, GBP: 0.84, AOA: 950 };
    return (Math.max(0, Number(amount) || 0) * rates[currency]).toLocaleString(locale === "pt" ? "pt-PT" : locale === "fr" ? "fr-FR" : "en-US", { maximumFractionDigits: 2 });
  }, [amount, currency]);

  const closeMenu = () => setMenuOpen(false);
  const handleWaitlist = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) { setNotice(t("Enter a valid email address.")); return; }
    setSubmitted(true);
    setNotice(t("You're on the list. We'll be in touch soon."));
  };

  return (
    <main lang={locale === "pt" ? "pt-PT" : locale === "fr" ? "fr" : "en"}>
      <div className="announcement"><Sparkles size={14} /> {t("A simpler way to move money is here")} <a href="#features">{t("Discover FlowPay")} <ArrowRight size={13} /></a></div>
      <header className="site-header">
        <a href="#" className="brand" aria-label="FlowPay home"><span className="brand-mark"><ArrowLeftRight size={20} strokeWidth={2.7} /></span>flow<span>pay.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#features">{t("Features")}</a><a href="#how-it-works">{t("How it works")}</a><a href="#security">{t("Security")}</a><a href="#faq">{t("FAQs")}</a>
        </nav>
        <div className="header-actions"><div className="language-switch" aria-label="Select language"><button type="button" onClick={() => setLocale("en")} aria-pressed={locale === "en"} className={locale === "en" ? "selected" : ""}>EN</button><span>/</span><button type="button" onClick={() => setLocale("pt")} aria-pressed={locale === "pt"} className={locale === "pt" ? "selected" : ""}>PT</button><span>/</span><button type="button" onClick={() => setLocale("fr")} aria-pressed={locale === "fr"} className={locale === "fr" ? "selected" : ""}>FR</button></div><a className="login-link" href="#get-started">{t("Log in")}</a><a className="button button-dark button-small" href="#get-started">{t("Get started")} <ArrowUpRight size={15} /></a></div>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="mobile-menu"><div className="mobile-language"><span>{locale === "pt" ? "Idioma" : "Language"}</span><button type="button" onClick={() => setLocale("en")} className={locale === "en" ? "selected" : ""}>English</button><button type="button" onClick={() => setLocale("pt")} className={locale === "pt" ? "selected" : ""}>Português</button><button type="button" onClick={() => setLocale("fr")} className={locale === "fr" ? "selected" : ""}>Français</button></div>
        {["Features", "How it works", "Security", "FAQs"].map((item) => <a key={item} href={`#${item === "FAQs" ? "faq" : item.toLowerCase().replaceAll(" ", "-")}`} onClick={closeMenu}>{t(item)}<ChevronRight size={17} /></a>)}
        <a className="button button-dark" href="#get-started" onClick={closeMenu}>{t("Get started")} <ArrowUpRight size={16} /></a>
      </div>}

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> {t("YOUR MONEY, WITHOUT THE FRICTION")}</div>
          <h1>{locale === "fr" ? <>L’argent circule<br /><em>en toute liberté.</em></> : locale === "pt" ? <>O dinheiro<br /><em>flui consigo.</em></> : <>Money moves<br /><em>better with you.</em></>}</h1>
          <p className="hero-description">{t("Pay, get paid and send money around the world. One beautifully simple account for everything your money needs to do.")}</p>
          <div className="hero-cta"><a className="button button-lime" href="#get-started">{t("Get started for free")} <ArrowUpRight size={17} /></a><a className="text-link" href="#how-it-works">{t("See how it works")} <ArrowRight size={16} /></a></div>
          <div className="social-proof"><div className="avatar-stack"><span>JM</span><span>AK</span><span>LS</span><span>+</span></div><div><div className="stars">★★★★★</div><p>{t("Loved by people who move money")}</p></div></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="dashboard-card">
            <div className="dash-top"><div><span className="muted-label">{t("TOTAL BALANCE")}</span><div className="balance">€12,480<span>.50</span></div></div><button className="more-button" aria-label={locale === "pt" ? "Mais opções da conta" : "More account options"}>···</button></div>
            <div className="card-preview"><div className="card-top"><span className="card-logo">flowpay.</span><span className="chip" /></div><div className="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 4829</div><div className="card-bottom"><span>CESAR NSINGI</span><span>VISA <i>●●</i></span></div></div>
            <div className="quick-actions"><button onClick={() => setNotice(t("Transfer flow opened — connect an account to continue."))}><ArrowUpRight size={17} />{t("Send")}</button><button onClick={() => setNotice(t("Add money is a demo action. No funds are moved."))}><ArrowDownLeft size={17} />{t("Add money")}</button><button onClick={() => setNotice(t("Your card controls are ready in the FlowPay app."))}><CreditCard size={17} />{t("Cards")}</button></div>
            <div className="transactions-head"><strong>{t("Recent activity")}</strong><a href="#features">{t("See all")}</a></div>
            {transactions.map((transaction) => <div className="transaction" key={transaction.name}><div className={`transaction-icon ${transaction.color}`}>{transaction.icon}</div><div className="transaction-info"><strong>{t(transaction.name)}</strong><span>{t(transaction.detail)}</span></div><b className={transaction.type === "received" ? "positive" : ""}>{transaction.amount}</b></div>)}
          </div>
          <div className="floating-tag"><span className="tag-icon"><Check size={15} /></span><div><strong>{t("Payment complete")}</strong><small>{t("Your transfer was successful")}</small></div></div>
          <div className="floating-globe"><Globe2 size={22} /><span>{t("150+ countries")}</span></div>
        </div>
      </section>

      <section className="trust-strip"><p>{t("MADE FOR YOUR EVERYDAY")}</p><div><span><ShieldCheck /> {t("Secure by design")}</span><span><Zap /> {t("Fast transfers")}</span><span><Globe2 /> {t("Move globally")}</span><span><BadgeCheck /> {t("No hidden surprises")}</span></div></section>

      <section className="features section-wrap" id="features">
        <div className="section-heading"><div className="eyebrow">{t("ONE ACCOUNT. MORE POSSIBILITIES.")}</div><h2>{locale === "fr" ? <>Votre argent a<br />plus de possibilités.</> : locale === "pt" ? <>O seu dinheiro tem<br />mais possibilidades.</> : <>Your money has<br />places to <em>be.</em></>}</h2><p>{t("Everything you need to stay in control, whether you're at home or somewhere new.")}</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-dark"><div className="feature-icon lime-icon"><ArrowLeftRight /></div><span className="card-kicker">{t("SEND & RECEIVE")}</span><h3>{locale === "fr" ? <>L’argent qui<br />arrive à bon port.</> : locale === "pt" ? <>Dinheiro que<br />chega ao destino.</> : <>Money that<br />gets there.</>}</h3><p>{t("Send money to friends, family or businesses with a few taps. No complicated steps.")}</p><div className="mini-transfer"><div><span>{t("YOU SEND")}</span><strong>€250.00</strong></div><ArrowRight /><div><span>{t("THEY GET")}</span><strong>$270.00</strong></div></div></article>
          <article className="feature-card feature-lilac"><div className="feature-icon purple-icon"><CreditCard /></div><span className="card-kicker">{t("YOUR FLOWPAY CARD")}</span><h3>{locale === "fr" ? <>Prête quand<br />vous en avez besoin.</> : locale === "pt" ? <>Pronto quando<br />precisar.</> : <>Ready when<br />you are.</>}</h3><p>{t("A card experience designed for everyday purchases and travel alike.")}</p><div className="mini-card"><span>flowpay.</span><b>VISA</b><small>•••• 4829</small></div></article>
          <article className="feature-card feature-yellow"><div className="feature-icon dark-icon"><Globe2 /></div><span className="card-kicker">{t("MULTI-CURRENCY")}</span><h3>{locale === "fr" ? <>Allez au-delà<br /><em>des frontières.</em></> : locale === "pt" ? <>Vá mais<br />além-fronteiras.</> : <>Go beyond<br />borders.</>}</h3><p>{t("Keep an eye on different currencies and understand what you're spending.")}</p><div className="currency-pills"><span>€ EUR</span><span>$ USD</span><span>£ GBP</span></div></article>
        </div>
      </section>

      <section className="how-section" id="how-it-works"><div className="section-wrap how-grid">
        <div><div className="eyebrow"><span className="eyebrow-dot" /> {t("SIMPLE FROM THE START")}</div><h2>{locale === "fr" ? <>Moins d’étapes.<br /><em>Plus de vie.</em></> : locale === "pt" ? <>Menos passos.<br /><em>Mais vida.</em></> : <>Less steps.<br /><em>More living.</em></>}</h2><p className="body-copy">{t("Getting started shouldn't feel like work. Open your account and get on with your day.")}</p><a className="button button-lime" href="#get-started">{t("Create your account")} <ArrowUpRight size={16} /></a></div>
        <div className="steps">
          <div className="step"><span>01</span><div><h3>{t("Sign up in minutes")}</h3><p>{t("Tell us a little about yourself and set up your account.")}</p></div><div className="step-icon"><Banknote /></div></div>
          <div className="step"><span>02</span><div><h3>{t("Make it yours")}</h3><p>{t("Set your preferences and explore the tools you need.")}</p></div><div className="step-icon"><Sparkles /></div></div>
          <div className="step"><span>03</span><div><h3>{t("Move with confidence")}</h3><p>{t("Pay, send and track your money from one place.")}</p></div><div className="step-icon"><ArrowUpRight /></div></div>
        </div>
      </div></section>

      <section className="security-section section-wrap" id="security">
        <div className="security-art"><div className="security-ring"><div className="security-lock"><LockKeyhole size={48} /></div></div><span className="security-chip chip-a"><ShieldCheck size={16} /> {t("Protected")}</span><span className="security-chip chip-b"><Check size={16} /> {t("You're in control")}</span></div>
        <div className="security-copy"><div className="eyebrow">{t("YOUR PEACE OF MIND, BUILT IN")}</div><h2>{locale === "fr" ? <>La sécurité n’est pas<br /><em>une option.</em></> : locale === "pt" ? <>A segurança não é<br /><em>um extra.</em></> : <>Security isn't<br /><em>an extra.</em></>}</h2><p className="body-copy">{t("Your money and personal information deserve serious protection. That's why safety is part of every FlowPay interaction.")}</p><ul><li><Check /> {t("Extra verification for sensitive actions")}</li><li><Check /> {t("Instant card controls and freeze options")}</li><li><Check /> {t("Activity you can review at a glance")}</li></ul><p className="disclaimer">{t("FlowPay is a fictional product concept. No real financial services are provided.")}</p></div>
      </section>

      <section className="rate-section"><div className="section-wrap rate-grid"><div><div className="eyebrow"><span className="eyebrow-dot" /> {t("KNOW BEFORE YOU SEND")}</div><h2>{locale === "fr" ? <>Un peu plus<br /><em>de liberté.</em></> : locale === "pt" ? <>Um pouco mais<br /><em>de moeda.</em></> : <>A little more<br /><em>currency.</em></>}</h2><p className="body-copy">{t("Try the simple currency preview. Change the amount and see an illustrative conversion.")}</p></div><div className="rate-card"><div className="rate-card-head"><span>{t("QUICK CONVERTER")}</span><span className="live-pill"><i /> {t("DEMO RATES")}</span></div><label htmlFor="amount">{t("You send")}</label><div className="amount-input"><input id="amount" type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} /><select aria-label="Select currency" value={currency} onChange={e => setCurrency(e.target.value)}><option value="EUR">EUR €</option><option value="USD">USD $</option><option value="GBP">GBP £</option><option value="AOA">AOA Kz</option></select></div><div className="conversion-arrow"><ArrowDownLeft size={18} /></div><label>{t("Illustrative converted value")}</label><div className="converted-value"><strong>{converted}</strong><span>{currency === "EUR" ? "EUR" : currency === "USD" ? "USD" : currency === "GBP" ? "GBP" : "AOA"}</span></div><p className="rate-note">{t("Indicative demo calculation only. Not a live exchange quote.")}</p></div></div></section>

      <section className="faq-section section-wrap" id="faq"><div className="section-heading"><div className="eyebrow">{t("GOOD QUESTIONS")}</div><h2>{locale === "fr" ? <>Ce que vous voulez<br /><em>savoir.</em></> : locale === "pt" ? <>O que talvez queira<br /><em>saber.</em></> : <>Things you might<br /><em>wonder.</em></>}</h2></div><div className="faq-list">{faqs.map((faq, i) => <div className={`faq-item ${faqOpen === i ? "active" : ""}`} key={faq.q}><button onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}><span>{t(faq.q)}</span><span className="faq-plus">{faqOpen === i ? "−" : "+"}</span></button>{faqOpen === i && <p>{t(faq.a)}</p>}</div>)}</div></section>

      <section className="cta-section section-wrap" id="get-started"><div className="cta-inner"><div className="eyebrow"><span className="eyebrow-dot" /> {t("YOUR NEXT MOVE STARTS HERE")}</div><h2>{locale === "fr" ? <>Faites place à<br /><em>plus de vie.</em></> : locale === "pt" ? <>Abra espaço para<br /><em>mais vida.</em></> : <>Make room for<br /><em>more life.</em></>}</h2><p>{t("Get updates as FlowPay gets closer to launch.")}</p><form className="waitlist-form" onSubmit={handleWaitlist}><input type="email" placeholder={t("Your email address")} value={email} onChange={e => setEmail(e.target.value)} aria-label={t("Your email address")} required /><button className="button button-lime" type="submit" disabled={submitted}>{submitted ? t("You're on the list") : t("Join the waitlist")} <ArrowUpRight size={16} /></button></form>{notice && <p className="form-notice" role="status">{notice}</p>}<small>{t("No spam. Just the occasional good update.")}</small></div></section>

      <footer className="footer"><a href="#" className="brand"><span className="brand-mark"><ArrowLeftRight size={20} /></span>flow<span>pay.</span></a><p>{t("Move money. Move forward.")}</p><div><a href="#features">{t("Features")}</a><a href="#security">{t("Security")}</a><a href="#faq">{t("FAQs")}</a></div><small>© {new Date().getFullYear()} FlowPay. {t("Fictional product concept.")}</small></footer>
      {notice && <div className="toast" role="status"><Check size={16} />{notice}<button onClick={() => setNotice("")} aria-label="Dismiss notification"><X size={15} /></button></div>}
    </main>
  );
}
