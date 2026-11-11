// Legal pages. The source text is copied from Lockii (Settings > Contracts) so the
// website and checkout always say the same thing. To update, replace the .html file.
import cancellation from './cancellation-policy.html?raw';
import legalNotice from './legal-notice.html?raw';
import privacy from './privacy.html?raw';
import rental from './rental-agreement.html?raw';
import terms from './terms.html?raw';

// Lockii stores headings as <strong> lines separated by <br><br>. Turn them into real headings.
function tidy(html: string): string {
  let out = html
    .replace(/<br>\s*<br>/g, '</p><p>')
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/<li><p>([\s\S]*?)<\/p><\/li>/g, '<li>$1</li>')
    .replace(/<h2>[^<]*<\/h2>/, '')
    .replace(/<h3>/g, '<h2>')
    .replace(/<\/h3>/g, '</h2>')
    .replace(/<p><strong>([^<]+)<\/strong><\/p>/g, '<h2>$1</h2>');
  // The first heading repeats the page title.
  out = out.replace(/^\s*<h2>[^<]*<\/h2>/, '');
  return out.trim();
}

export const legalPages = [
  { slug: 'rental-agreement', title: 'Rental Agreement', blurb: 'The terms you agree to when you hire a trailer.', html: tidy(rental) },
  { slug: 'cancellation-policy', title: 'Cancellation Policy', blurb: 'Cancelling, changing or moving your booking.', html: tidy(cancellation) },
  { slug: 'terms', title: 'Terms of Service', blurb: 'Using this website and our online booking system.', html: tidy(terms) },
  { slug: 'privacy', title: 'Privacy Policy', blurb: 'How we handle your personal information.', html: tidy(privacy) },
  { slug: 'legal-notice', title: 'Legal Notice', blurb: 'Who runs this site.', html: tidy(legalNotice) },
];
