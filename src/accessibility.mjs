function canonicalPath(html) {
  const match = html.match(/<link rel="canonical" href="([^"]+)">/);
  if (!match) return '/';
  try {
    return new URL(match[1]).pathname;
  } catch {
    return '/';
  }
}

function markNavigation(html, path) {
  const items = [
    ['/guides', 'Guides'],
    ['/tools', 'Shipping tools'],
    ['/about', 'About']
  ];

  let result = html;
  for (const [target, label] of items) {
    const exact = path === target;
    const nested = target === '/guides' && path.startsWith('/guides/');
    if (!exact && !nested) continue;
    const current = exact ? 'page' : 'location';
    result = result.replace(
      `<a href="${target}">${label}</a>`,
      `<a href="${target}" aria-current="${current}">${label}</a>`
    );
  }
  return result;
}

export function enhanceHtmlAccessibility(html) {
  if (typeof html !== 'string' || !html.includes('<html')) return html;

  const path = canonicalPath(html);
  let result = html;

  if (!result.includes('class="skip-link"')) {
    result = result.replace(
      '<body>',
      '<body><a class="skip-link" href="#main-content">Skip to main content</a>'
    );
  }

  result = result
    .replace(
      '<a class="brand" href="/">',
      '<a class="brand" href="/" aria-label="DROPi Delivery home">'
    )
    .replace(
      '<span class="brand-mark">D</span>',
      '<span class="brand-mark" aria-hidden="true">D</span>'
    )
    .replace(
      '<main>',
      '<main id="main-content" tabindex="-1">'
    )
    .replaceAll(
      '<aside class="affiliate-note">',
      '<aside class="affiliate-note" aria-label="Affiliate disclosure">'
    )
    .replaceAll(
      '<a class="chip active"',
      '<a class="chip active" aria-current="page"'
    );

  return markNavigation(result, path);
}
