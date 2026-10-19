export default function Logo({compact=false}:{compact?:boolean}) {
  return <a className={`brand${compact?' brand-compact':''}`} href="/" aria-label="Tactical Keepers home">
    <img className="brand-lockup" src="/brand/tactical-keepers-logo.png" alt="Tactical Keepers — Professional Goalkeeper Training, Cheshire UK" />
    <img className="brand-crest" src="/brand/tactical-keepers-crest.png" alt="" aria-hidden="true" />
    <span className="header-wordmark" aria-hidden="true"><strong>TACTICAL KEEPERS</strong><small>PROFESSIONAL GOALKEEPER TRAINING</small><em>CHESHIRE · UK</em></span>
  </a>
}
