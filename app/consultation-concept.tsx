'use client';

import { FormEvent, useState } from 'react';

export default function ConsultationConcept() {
  const [mode, setMode] = useState<'text' | 'voice'>('text');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();

    if (!email && !phone) {
      setMessage('Please provide an email address or telephone number.');
      return;
    }

    setMessage('Concept preview complete. Nothing has been recorded, processed, or sent.');
  }

  return (
    <div className="intake-card" aria-labelledby="intake-title">
      <div className="intake-heading">
        <p className="concept-label">Consultation concept</p>
        <h2 id="intake-title">Tell us what you need.</h2>
        <p>A focused first conversation, by text or voice.</p>
      </div>

      <div className="intake-modes" aria-label="Choose how to respond">
        <button type="button" className={mode === 'text' ? 'active' : ''} onClick={() => setMode('text')}>Text</button>
        <button type="button" className={mode === 'voice' ? 'active' : ''} onClick={() => setMode('voice')}>Voice · 90 sec</button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>

        <div className="contact-fields">
          <label>
            Email
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Telephone
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
        </div>
        <p className="field-note">Please provide at least one contact method.</p>

        {mode === 'text' ? (
          <label>
            How can we help?
            <textarea name="request" rows={4} required placeholder="Briefly describe your business need." />
          </label>
        ) : (
          <div className="voice-placeholder">
            <span aria-hidden="true">●</span>
            <p>The working version will record up to 90 seconds here.</p>
          </div>
        )}

        <label className="consent">
          <input name="consent" type="checkbox" required />
          <span>UWorks may use these details to respond to this request.</span>
        </label>

        <button className="intake-submit" type="submit">Review request</button>
        <p className="prototype-note" role="status">{message || 'Concept preview only — no information will be sent.'}</p>
      </form>
    </div>
  );
}
