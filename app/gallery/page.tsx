import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GalleryExperience,{type GalleryItem} from '@/components/GalleryExperience'
import {BOOKING_URL} from '@/lib/links'

export const metadata:Metadata={title:'Gallery | Tactical Keepers Goalkeeper Training'}
const gallery:GalleryItem[]=[
  {id:1,src:'/images/2.jpeg',alt:'Tactical Keepers coach laughing during a goalkeeper session',category:'training',caption:'Coach-led training',layout:'feature',width:778,height:1686},
  {id:2,src:'/images/4.jpeg',alt:'Goalkeeper in a Tactical Keepers coaching session',category:'training',caption:'Goalkeeper coaching',layout:'portrait',width:944,height:2048},
  {id:3,src:'/images/5.jpeg',alt:'Goalkeeper working through a technical drill',category:'training',caption:'Technical coaching',layout:'landscape',width:1080,height:1920},
  {id:4,src:'/images/4444.jpeg',alt:'Tactical Keepers training session',category:'training',caption:'Training session',layout:'portrait',width:944,height:2048},
  {id:5,src:'/images/5555.jpeg',alt:'Goalkeeper training on the pitch',category:'training',caption:'Goalkeeper training',layout:'landscape',width:944,height:2048},
  {id:6,src:'/images/WhatsApp Image 2026-10-02 at 10.58.12.jpeg',alt:'Goalkeeper on the Tactical Keepers training pitch',category:'training',caption:'On the training pitch',layout:'portrait',width:1366,height:2048},
  {id:7,src:'/images/WhatsApp Image 2026-10-02 at 10.58.121.jpeg',alt:'Tactical Keepers session preparation',category:'behind',caption:'Session preparation',layout:'portrait',width:1366,height:2048},
  {id:8,src:'/images/WhatsApp Image 2026-10-02 at 10.58.122.jpeg',alt:'Tactical Keepers coach in action',category:'behind',caption:'Coaching in action',layout:'landscape',width:933,height:603},
  {id:9,src:'/images/WhatsApp Image 2026-10-02 at 10.584.13.jpeg',alt:'Goalkeeper during a Tactical Keepers session',category:'training',caption:'Training moment',layout:'portrait',width:1009,height:2048},
  {id:10,src:'/images/WhatsApp Image 2026-10-02 at 106.58.13.jpeg',alt:'Goalkeeper training session',category:'training',caption:'Goalkeeper session',layout:'standard',width:1586,height:1586},
  {id:11,src:'/images/WhatsApp Image 2026-10-02 at 130.58.12.jpeg',alt:'Behind the scenes at Tactical Keepers',category:'behind',caption:'Behind the scenes',layout:'portrait',width:1366,height:2048},
  {id:12,src:'/images/WhatsApp Ima5ge 2026-10-02 at 10.58.13.jpeg',alt:'Goalkeeper striking a football on matchday',category:'matchday',caption:'Matchday goalkeeping',layout:'standard',width:1079,height:1074},
]
export default function GalleryPage(){return <main className="gallery-page"><Header/><GalleryExperience items={gallery}/><section className="gallery-final"><div><p className="gallery-eyebrow">YOUR NEXT SESSION</p><h2>READY TO<br/><span>IMPROVE?</span></h2><p>Train with Tactical Keepers and take the next step in your goalkeeping development.</p><div><a className="button" href={BOOKING_URL}>BOOK A SESSION <span>→</span></a></div></div></section><Footer/></main>}
