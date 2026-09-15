import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { getArticle } from './src/content-all.mjs';
import { homePage, guidesPage, articlePage, toolsPage, aboutPage, disclosurePage, privacyPage, outboundUrl, sitemap, siteUrl, layout } from './src/site-all.mjs';

const port = Number(process.env.PORT || 3000);
const cssUrl = new URL('./public/styles.css', import.meta.url);
const securityHeaders = {
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'x-frame-options': 'SAMEORIGIN',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()'
};

function send(res, status, body, type = 'text/html; charset=utf-8', extra = {}) {
  res.writeHead(status, { 'content-type': type, 'cache-control': status === 200 ? 'public, max-age=300' : 'no-store', ...securityHeaders, ...extra });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, siteUrl());
    if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'Method Not Allowed', 'text/plain; charset=utf-8', { allow: 'GET, HEAD' });
    if (url.pathname === '/health') return send(res, 200, JSON.stringify({ ok: true, guides: 32 }), 'application/json; charset=utf-8', { 'cache-control': 'no-store' });
    if (url.pathname === '/styles.css') return send(res, 200, await readFile(cssUrl, 'utf8'), 'text/css; charset=utf-8');
    if (url.pathname === '/robots.txt') return send(res, 200, `User-agent: *\nAllow: /\nSitemap: ${siteUrl()}/sitemap.xml\n`, 'text/plain; charset=utf-8');
    if (url.pathname === '/sitemap.xml') return send(res, 200, sitemap(), 'application/xml; charset=utf-8');
    if (url.pathname === '/') return send(res, 200, homePage());
    if (url.pathname === '/guides') return send(res, 200, guidesPage(url));
    if (url.pathname === '/tools') return send(res, 200, toolsPage());
    if (url.pathname === '/about') return send(res, 200, aboutPage());
    if (url.pathname === '/affiliate-disclosure') return send(res, 200, disclosurePage());
    if (url.pathname === '/privacy') return send(res, 200, privacyPage());
    if (url.pathname.startsWith('/guides/')) {
      const article = getArticle(decodeURIComponent(url.pathname.slice('/guides/'.length)));
      if (article) return send(res, 200, articlePage(article));
    }
    if (url.pathname.startsWith('/go/')) {
      const partner = url.pathname.slice('/go/'.length);
      const outbound = outboundUrl(partner, url);
      if (outbound) {
        console.log(JSON.stringify({ event: 'outbound_click', partner, from: outbound.from, monetised: outbound.monetised, at: new Date().toISOString() }));
        res.writeHead(302, { location: outbound.target, 'cache-control': 'no-store', ...securityHeaders });
        return res.end();
      }
    }
    const notFound = layout({ title:'Not found — DROPi Delivery', description:'Page not found.', path:url.pathname, body:'<section class="page-head"><div class="eyebrow">404</div><h1>That page is not here.</h1><p><a class="text-link" href="/guides">Browse the guide library →</a></p></section>' });
    return send(res, 404, notFound);
  } catch (error) {
    console.error(error);
    return send(res, 500, 'Internal Server Error', 'text/plain; charset=utf-8');
  }
});

server.listen(port, '0.0.0.0', () => console.log(`DROPi Delivery listening on :${port}`));
