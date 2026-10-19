import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VideoHighlights from '@/components/VideoHighlights'
import {BOOKING_URL} from '@/lib/links'

export const metadata:Metadata={title:'Goalkeeper Training | Tactical Keepers Cheshire',description:'Professional goalkeeper training in Cheshire focused on technique, decision-making, confidence, game understanding and match-ready performance.'}

const pillars=[
 {n:'01',title:'TECHNIQUE',role:'HOW YOU EXECUTE',copy:'Build repeatable movement, handling, footwork and positioning that hold up under pressure.',focus:['Set position','Footwork','Handling','Diving technique','Recovery movement','Catching','Parrying','Distribution mechanics']},
 {n:'02',title:'DECISIONS',role:'WHAT YOU CHOOSE',copy:'Recognise danger, read the game and choose the right action before time and space disappear.',focus:['Starting positions','Angles','Through balls','Crosses','1v1 situations','Hold or parry','Come or stay','Distribution decisions']},
 {n:'03',title:'MENTALITY',role:'HOW YOU RESPOND',copy:'Become comfortable with pressure, mistakes and the difficult moments every goalkeeper faces.',focus:['Confidence','Concentration','Resilience','Communication','Leadership','Dealing with mistakes','Resetting quickly','Performing under pressure']}
]
const testimonials=[
 {quote:"Honestly, I couldn't speak more highly of your coaching sessions. You're an amazing coach, and the way you communicate with parents is brilliant. You manage to coach children of all different ages and abilities in one session while still making every child feel included, supported and encouraged. Our child really enjoys his sessions, and it's lovely to see the confidence and skills he's building. He's been goalkeeping for two and a half years and since your sessions he's picked up new techniques for handling and saving the ball that he hadn't been taught before. The time, effort and passion you put into the sessions really shines through, and we feel very lucky to have you as a coach who genuinely cares about helping every child improve.",name:'Lianne',role:'PARENT'},
 {quote:"I just wanted to say how much our child enjoys your sessions. To say he's improved is an understatement! His confidence has grown massively, and he really looks forward to going in goal every week. You're a fantastic coach, and the children are really lucky to have you!",name:'Hannah',role:'PARENT'}
]
const trainingVideos=[
 {src:'1-loud.mp4',category:'TRAINING',title:'Session highlight 01'},
 {src:'112233-loud.mp4',category:'TRAINING',title:'Session highlight 02'},
 {src:'334455-loud.mp4',category:'TRAINING',title:'Session highlight 03'},
 {src:'66555444-loud.mp4',category:'TRAINING',title:'Session highlight 04'},
 {src:'666-loud.mp4',category:'TRAINING',title:'Session highlight 05'},
 {src:'777-loud.mp4',category:'TRAINING',title:'Session highlight 06'},
 {src:'888-loud.mp4',category:'TRAINING',title:'Session highlight 07'},
 {src:'WhatsApp Video 2026-10-04 at 19.22.43-loud.mp4',category:'TRAINING',title:'Session highlight 08'}
]

export default function TrainingPage(){return <main className="training-page"><Header/>
 <section className="training-hero"><video className="training-hero-video" autoPlay muted loop playsInline aria-hidden="true"><source src="/videos/home-hero.mp4" type="video/mp4"/></video><div className="training-hero-copy"><p className="tk-label">TRAINING</p><h1><span>TRAIN</span><span>WITH</span><strong>PURPOSE</strong></h1><p className="training-hook">Every session has a reason.</p><p>Tactical Keepers training is designed to build better habits, sharper decisions, stronger technique and more confident goalkeepers.</p><div><a className="button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">BOOK A SESSION <span>→</span></a><a className="button button-outline" href="#method">SEE HOW WE TRAIN</a></div></div></section>

 <section className="training-pillars"><div className="pillar-ghost" aria-hidden="true">03</div><header><div><p className="tk-label">THREE CORE PILLARS</p><i/></div><h2>THE TACTICAL<br/><span>KEEPERS WAY</span></h2></header><div className="pillar-list">{pillars.map(p=><article key={p.n}><div className="pillar-visual" aria-hidden="true"/><div className="pillar-number">{p.n}</div><p className="pillar-role">{p.role}</p><h3>{p.title}</h3><p className="pillar-description">{p.copy}</p><div className="pillar-rule"/><ul>{p.focus.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div><div className="pillar-statement"><span>TECHNIQUE BUILDS <b>THE ACTION.</b></span><span>DECISIONS CHOOSE <b>THE MOMENT.</b></span><span>MENTALITY DELIVERS <b>UNDER PRESSURE.</b></span></div></section>

 <section className="training-pricing" id="pricing"><header><p className="tk-label">PRICELIST</p><h2>TRAINING THAT<br/><span>WORKS FOR YOU</span></h2><p className="pricing-intro">Choose the session format that best supports your development.</p></header><div className="first-session">YOUR <strong>1ST SESSION</strong> IS <b>FREE</b></div><div className="pricing-cards"><article className="price-card"><div><p className="price-card-label">PERSONALISED COACHING</p><h3>1-TO-1<br/>SESSIONS</h3><span className="price-duration">1 HOUR</span><ul><li>Personalised coaching</li><li>Focus on your individual goals</li><li>Technique, decision-making and confidence</li></ul></div><div className="price-options"><p><strong>£35</strong><span>PER HOUR<small>Pay on the day</small></span></p><p><strong>£120</strong><span>BLOCK BOOK<small>4 sessions</small></span></p></div></article><article className="price-card"><div><p className="price-card-label">SMALL GROUP COACHING</p><h3>GROUP<br/>SESSIONS</h3><span className="price-duration">1 HOUR</span><ul><li>Small group sessions</li><li>Develop key goalkeeping skills</li><li>Build confidence and match awareness</li></ul></div><div className="price-options"><p><strong>£15</strong><span>PER HOUR<small>Pay on the day</small></span></p><p><strong>£50</strong><span>PER MONTH<small>Direct Debit · Pay monthly</small></span></p></div></article></div><aside className="frontline-discount"><div><p>FRONT LINE DISCOUNT</p><span>Military · Police · NHS · Fire</span></div><div className="frontline-rates"><p><strong>GROUP</strong><b>£40</b><small>Direct Debit · Pay monthly</small></p><p><strong>1-TO-1</strong><b>£100</b><small>Direct Debit · Pay monthly</small></p></div></aside><a className="button pricing-book" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">BOOK YOUR FREE FIRST SESSION <span>→</span></a></section>

 <section className="training-testimonials"><header><p className="tk-label">PARENT FEEDBACK</p><h2>THE PEOPLE WHO<br/><span>SEE THE PROGRESS</span></h2><p>Training is about more than the saves. It is about the confidence young goalkeepers take with them into every game.</p></header><div className="testimonial-list">{testimonials.map((review,index)=><article key={review.name} className={index===0?'testimonial-feature':''}><span className="testimonial-mark" aria-hidden="true">“</span><blockquote>{review.quote}</blockquote><footer><strong>{review.name}</strong><span>{review.role}</span></footer></article>)}</div></section>

 <section className="video-gallery training-video-gallery"><header><p className="gallery-eyebrow">TRAINING IN ACTION</p><h2>WATCH THE<br/><span>SESSIONS</span></h2></header><VideoHighlights items={trainingVideos}/></section>

 <Footer/>
 </main>}
