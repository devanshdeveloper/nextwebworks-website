'use server';

import { Lead } from '@/lib/cms-kit/lead.js';

export async function submitLead(formData) {
  try {
    const honeypot = formData.get('website_hp');
    if (honeypot) {
      // Bot detected; silently exit with success
      return { success: true };
    }

    const formType = formData.get('formType') || 'contact';
    const email = formData.get('email')?.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { error: 'Please provide a valid email address.' };
    }

    if (formType === 'newsletter') {
      const payload = {
        name: 'Newsletter Subscriber',
        email,
        message: 'Newsletter subscription from website footer.',
        metadata: {
          category: 'newsletter',
          tags: ['newsletter', 'footer'],
          source: formData.get('source') || 'website-footer',
          formType: 'newsletter',
          submittedAt: new Date().toISOString(),
        },
      };

      await Lead.createOne(payload);
      return { success: true, message: "You're subscribed! We'll send our next engineering breakdown." };
    }

    const name = formData.get('name')?.trim();
    const agencyName = formData.get('agencyName')?.trim();
    const scopePlatform = formData.get('scopePlatform')?.trim();
    const message = formData.get('message')?.trim();

    if (!name) {
      return { error: 'Please provide your name.' };
    }

    const payload = {
      name,
      email,
      message: message || `Inquiry from ${agencyName || 'Agency'} regarding ${scopePlatform || 'development'}.`,
      metadata: {
        category: 'agency-lead',
        tags: ['agency-inquiry', scopePlatform || 'general'],
        agencyName: agencyName || '',
        scopePlatform: scopePlatform || '',
        source: formData.get('source') || 'homepage-contact-form',
        formType: 'contact',
        submittedAt: new Date().toISOString(),
      },
    };

    await Lead.createOne(payload);
    return { success: true, message: 'Brief received! We will review your requirements and respond within 24 hours.' };
  } catch (err) {
    console.error('[submitLead] Error submitting lead:', err);
    return { error: 'Unable to submit your brief right now. Please email us directly or message on WhatsApp.' };
  }
}
