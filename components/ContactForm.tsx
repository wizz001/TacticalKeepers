'use client'
import {FormEvent,useState} from 'react'

type Errors=Partial<Record<'name'|'email'|'age'|'subject'|'message',string>>

export default function ContactForm(){
 const[errors,setErrors]=useState<Errors>({});const[success,setSuccess]=useState(false)
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const form=new FormData(e.currentTarget);const next:Errors={};
  if(!String(form.get('name')||'').trim())next.name='Please enter your name.'
  const email=String(form.get('email')||'').trim();if(!email)next.email='Please enter your email address.';else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))next.email='Please enter a valid email address.'
  if(!String(form.get('age')||'').trim())next.age="Please enter the goalkeeper's age."
  if(!String(form.get('subject')||'').trim())next.subject='Please choose an enquiry type.'
  if(!String(form.get('message')||'').trim())next.message='Please enter your message.'
  setErrors(next);if(Object.keys(next).length)return
  // TODO: Connect this validated payload to the production email service or API endpoint.
  setSuccess(true);e.currentTarget.reset()
 }
 if(success)return <div className="contact-success" role="status"><span>MESSAGE RECEIVED</span><h2>THANK YOU.</h2><p>Thanks for getting in touch. We’ll get back to you as soon as possible.</p><button type="button" onClick={()=>setSuccess(false)}>SEND ANOTHER MESSAGE →</button></div>
 return <form className="contact-form" noValidate onSubmit={submit}>
  <div className="form-row"><Field label="Name" name="name" required error={errors.name}/><Field label="Email" name="email" type="email" required error={errors.email}/></div>
  <div className="form-row"><Field label="Phone number" name="phone" type="tel"/><Field label="Goalkeeper age" name="age" inputMode="numeric" required error={errors.age}/></div>
  <label className={errors.subject?'has-error':''}><span>Subject / enquiry type <b>*</b></span><select name="subject" defaultValue="" aria-invalid={!!errors.subject} aria-describedby={errors.subject?'subject-error':undefined}><option value="" disabled>Select an option</option><option>Book a session</option><option>Training enquiry</option><option>General enquiry</option><option>Other</option></select>{errors.subject&&<small id="subject-error">{errors.subject}</small>}</label>
  <label className={errors.message?'has-error':''}><span>Message <b>*</b></span><textarea name="message" rows={6} placeholder="How can we help?" aria-invalid={!!errors.message} aria-describedby={errors.message?'message-error':undefined}/>{errors.message&&<small id="message-error">{errors.message}</small>}</label>
  <button className="button contact-submit" type="submit">SEND MESSAGE <span>→</span></button>
  <p className="booking-note"><strong>LOOKING TO BOOK GOALKEEPER TRAINING?</strong> Include the goalkeeper’s age, current level and preferred days when you message us.</p>
 </form>
}

function Field({label,name,type='text',required=false,error,inputMode}:{label:string;name:string;type?:string;required?:boolean;error?:string;inputMode?:'numeric'}){return <label className={error?'has-error':''}><span>{label} {required&&<b>*</b>}</span><input name={name} type={type} inputMode={inputMode} required={required} aria-invalid={!!error} aria-describedby={error?`${name}-error`:undefined}/>{error&&<small id={`${name}-error`}>{error}</small>}</label>}
