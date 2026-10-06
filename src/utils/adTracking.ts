/**
 * Google Ads & Analytics Conversion Tracking Helper
 * Fires Google Ads call conversion events, custom conversion pings, and analytics
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const trackAdCallConversion = (source: string = 'header_call_button') => {
  try {
    // 1. Send Google Ads / GA4 event if gtag is defined
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_CALL_DEFAULT', // Placeholder ready for production Google Ads ID
        event_category: 'Google_Ad_Call',
        event_label: source,
        value: 300,
        currency: 'INR',
      });

      window.gtag('event', 'phone_call_click', {
        call_source: source,
        phone_number: '+919815505661',
        timestamp: new Date().toISOString(),
      });
    }

    // 2. Dispatch custom event for UI feedback
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('ad_call_triggered', {
          detail: { source, time: Date.now() },
        })
      );
    }
  } catch (error) {
    console.debug('Conversion tracker error:', error);
  }
};

export const trackWhatsAppConversion = (source: string = 'whatsapp_click') => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        event_category: 'Google_Ad_WhatsApp',
        event_label: source,
        value: 150,
        currency: 'INR',
      });
    }
  } catch (error) {
    console.debug('WhatsApp tracking error:', error);
  }
};
