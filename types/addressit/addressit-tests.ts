import * as Addressit from 'addressit';

Addressit(`123 Main St.\nSan Francisco, CA`).parts.forEach(part => part);
Addressit(`123 Main St.\nSan Francisco, CA`, {locale: 'en-AU'}).parts.forEach(part => part);
