export default function Logo({compact=false}:{compact?:boolean}) {
  return <a className={`brand${compact?' brand-compact':''}`} href="/" aria-label="Tactical Keepers home">
    <img className="brand-lockup" src="/brand/tactical-keepers-logo.png" alt="Tactical Keepers — Professional Goalkeeper Training, Cheshire UK" />
    <img className="brand-crest" src="/brand/tactical-keepers-crest.png" alt="" aria-hidden="true" />
    <img className="brand-silver-wordmark" src="/brand/tactical-keepers-silver-wordmark.png" alt="" aria-hidden="true" />
  </a>
}
