import { categories, partnerPrograms, articles as launchArticles } from './content.mjs';
import { wave2Articles01 } from './content-wave2-01.mjs';
import { wave2Articles02 } from './content-wave2-02.mjs';
import { wave2Articles03 } from './content-wave2-03.mjs';
import { wave2Articles04 } from './content-wave2-04.mjs';
import { wave2Articles05 } from './content-wave2-05.mjs';
import { wave3Articles01 } from './content-wave3-01.mjs';
import { wave3Articles02 } from './content-wave3-02.mjs';
import { wave3Articles03 } from './content-wave3-03.mjs';
import { wave3Articles04 } from './content-wave3-04.mjs';
import { wave3Articles05 } from './content-wave3-05.mjs';

export { categories, partnerPrograms };

export const wave2Articles = [
  ...wave2Articles01,
  ...wave2Articles02,
  ...wave2Articles03,
  ...wave2Articles04,
  ...wave2Articles05
];

export const wave3Articles = [
  ...wave3Articles01,
  ...wave3Articles02,
  ...wave3Articles03,
  ...wave3Articles04,
  ...wave3Articles05
];

// New content appears first on listing pages while all earlier guides remain available.
export const articles = [...wave3Articles, ...wave2Articles, ...launchArticles];

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
