'use server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  turnstileToken: string;
}

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
}

export async function submitContactForm(data: ContactFormData) {
  // Verify Turnstile token
  const turnstileResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: data.turnstileToken,
      }),
    }
  );

  const turnstileResult: TurnstileVerifyResponse = await turnstileResponse.json();

  if (!turnstileResult.success) {
    return {
      success: false,
      error: 'Security verification failed. Please try again.',
    };
  }

  // TODO: Add your email sending logic here
  // For now, log the submission
  console.log('Contact form submission:', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
  });

  return { success: true };
}
