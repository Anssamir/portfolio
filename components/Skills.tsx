'use client';

import { assets } from '@/data/assets';

/* --- Monochrome line icons (Lucide-style) ---------------------------------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const LayoutIcon = () => (
  <svg {...iconProps}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const PenIcon = () => (
  <svg {...iconProps}>
    <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
    <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
    <path d="m2.3 2.3 7.286 7.286" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const CameraIcon = () => (
  <svg {...iconProps}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const BadgeIcon = () => (
  <svg {...iconProps}>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  </svg>
);

export function Skills() {
  return (
    <section className="skills section">
      <div className="eyebrow">The Magic I Create</div>
      <div className="skills-head">
        <h2>My Superpowers</h2>
        <p>
          From crafting seamless digital journeys to shaping brands that stick, these are the
          skills I use to turn ideas into impactful experiences.
        </p>
      </div>

      <div className="sp-grid">
        {/* Left column: UI/UX (feature) + Photography */}
        <div className="sp-col">
          <article className="sp-card sp-card--feature reveal">
            <div className="sp-head">
              <span className="sp-icon">
                <LayoutIcon />
              </span>
              <h3>UI/UX Design</h3>
              <p>
                I design intuitive, accessible, and user-centric web &amp; mobile experiences that
                solve real problems.
              </p>
            </div>
            <div className="sp-media sp-media--dark">
              <img src={assets.loreal} alt="Analytics dashboard UI design" loading="lazy" />
              <img src={assets.nissan} alt="Ventra vehicle management dashboard" loading="lazy" />
            </div>
          </article>

          <article className="sp-card reveal">
            <span className="sp-icon">
              <CameraIcon />
            </span>
            <h3>Photography</h3>
            <p>
              I capture stunning visuals&mdash;food, travel, lifestyle&mdash;that bring stories and
              aesthetics to life across digital platforms.
            </p>
          </article>
        </div>

        {/* Right column: Visual Design + Branding (feature) */}
        <div className="sp-col">
          <article className="sp-card reveal">
            <span className="sp-icon">
              <PenIcon />
            </span>
            <h3>Visual Design</h3>
            <p>
              I create modern, engaging visuals that enhance usability, elevate brands, and improve
              user interaction.
            </p>
          </article>

          <article className="sp-card sp-card--feature reveal">
            <div className="sp-head">
              <span className="sp-icon">
                <BadgeIcon />
              </span>
              <h3>Branding</h3>
              <p>
                From logos to style guides, I craft unique brand identities that reflect your vision
                and connect with your audience.
              </p>
            </div>
            <div className="sp-media sp-media--brand" aria-hidden="true">
              <div className="sp-brand sp-brand--narrow">
                <span className="sp-brand-label sp-brand-label--bl">
                  <em>Copyright</em>@anasamir
                </span>
              </div>
              <div className="sp-brand sp-brand--wide">
                <span className="sp-brand-label sp-brand-label--tl">
                  <em>Name</em>JD Post House Studio
                </span>
                <div className="sp-brand-logo">
                  <b>m</b>
                  <span>MakerScape.in</span>
                </div>
                <span className="sp-brand-label sp-brand-label--bl">
                  <em>Industry</em>Art Workshops
                </span>
                <span className="sp-brand-label sp-brand-label--br">
                  <em>Copyright</em>@anasamir
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="marquee">
        User Research &#x00B7; Prototyping &#x00B7; Interaction Design &#x00B7; Branding &#x00B7; Custom Code &#x00B7; Framer &#x00B7; Design thinking &#x00B7; Visual Design &#x00B7;
      </div>
    </section>
  );
}
