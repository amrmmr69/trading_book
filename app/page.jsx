import Image from "next/image";
import { highlights, siteContent, upcomingArticles } from "@/content/site-content";

function CandleIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="12" y1="8" x2="12" y2="40" stroke="currentColor" strokeWidth="2.6" />
      <rect x="8" y="15" width="8" height="14" rx="2" fill="#4CC96E" />
      <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="2.6" />
      <rect x="20" y="18" width="8" height="16" rx="2" fill="#FF4D6D" />
      <line x1="36" y1="9" x2="36" y2="39" stroke="currentColor" strokeWidth="2.6" />
      <rect x="32" y="12" width="8" height="14" rx="2" fill="#4CC96E" />
    </svg>
  );
}

function TrendIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 33L18 23L26 30L40 14"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 14H40V21"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="7" y="9" width="34" height="30" rx="6" stroke="currentColor" strokeWidth="3" />
      <line x1="18" y1="9" x2="18" y2="39" stroke="currentColor" strokeWidth="3" />
      <line x1="30" y1="9" x2="30" y2="39" stroke="currentColor" strokeWidth="3" />
      <line x1="7" y1="20" x2="41" y2="20" stroke="currentColor" strokeWidth="3" />
      <line x1="7" y1="29" x2="41" y2="29" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function getFeatureIcon(index) {
  if (index === 0) {
    return <CandleIcon className="iconBase iconCandle" />;
  }

  if (index === 1) {
    return <TrendIcon className="iconBase" />;
  }

  return <GridIcon className="iconBase" />;
}

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero card reveal" style={{ animationDelay: "0.08s" }}>
        <div className="heroCopy">
          <p className="kicker">Практический справочник для трейдеров</p>
          <h1>
            {siteContent.projectName}
            <span>{siteContent.subtitle}</span>
          </h1>
          <p className="headline">{siteContent.headline}</p>
          <p className="description">{siteContent.shortDescription}</p>

          <ul className="bulletList">
            {siteContent.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="cta">
            <a className="button buttonPrimary" href={siteContent.downloadFile} download>
              <CandleIcon className="buttonIcon" />
              <span>{siteContent.buttons.download}</span>
            </a>
            <a
              className="button buttonGhost"
              href={siteContent.telegramUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <TrendIcon className="buttonIcon" />
              <span>{siteContent.buttons.telegram}</span>
            </a>
          </div>

          <div className="stats">
            {siteContent.stats.map((item) => (
              <article key={item.label} className="statItem">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="heroVisual">
          <div className="marketBadge">Simple Trading</div>
          <Image
            className="cover coverFront"
            src="/book-yellow-cover.png"
            alt="Обложка книги Simple Trading"
            width={420}
            height={620}
            priority
          />
          <div className="marketTrace" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="section card reveal" style={{ animationDelay: "0.18s" }}>
        <h2>О материале</h2>
        <p>
          «Простой Трейдинг» создан как прикладной инструмент для ежедневной работы с графиком.
          Печатные паттерны помогают быстро сверять сценарии входа и поддерживать дисциплину при
          принятии торговых решений.
        </p>
      </section>

      <section className="section reveal" style={{ animationDelay: "0.28s" }}>
        <h2>Что входит в материалы</h2>
        <div className="grid">
          {highlights.map((item, index) => (
            <article key={item.title} className="card featureCard">
              <div className="featureTop">
                <span className="featureIcon">{getFeatureIcon(index)}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" style={{ animationDelay: "0.38s" }}>
        <div className="sectionHead">
          <h2>Темы для новых публикаций</h2>
          <span>Канал развивает материалы книги через регулярные рыночные разборы</span>
        </div>
        <div className="grid">
          {upcomingArticles.map((article) => (
            <article key={article.title} className="card articleCard">
              <span className="articleIcon">
                <TrendIcon className="iconBase" />
              </span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span className="chip">Разбор в канале</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
