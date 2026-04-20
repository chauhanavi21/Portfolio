import { useEffect } from "react";

function setMeta(selector, attr, value) {
  if (!value) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [_, name] = /\[(?:name|property)="([^"]+)"\]/.exec(selector) || [];
    if (/property=/.test(selector)) el.setAttribute("property", name);
    else el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setCanonical(href) {
  if (!href) return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Per-route meta update for SPA navigation.
 * Static tags still live in index.html for crawlers that don't run JS.
 */
export function useDocumentMeta({ title, description, canonical }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
    if (title) {
      setMeta('meta[property="og:title"]', "content", title);
      setMeta('meta[name="twitter:title"]', "content", title);
    }
    if (canonical) {
      setCanonical(canonical);
      setMeta('meta[property="og:url"]', "content", canonical);
    }
  }, [title, description, canonical]);
}
