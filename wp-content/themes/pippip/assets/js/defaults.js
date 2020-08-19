import 'focus-visible';
import 'picturefill';
import zenscroll from 'zenscroll';
import LazyLoad from 'vanilla-lazyload';
import FocusWithin from 'focus-within';
import UpdateViewportHeight from './components/UpdateViewportHeight';
import toggleDataAttr from './components/toggleDataAttr';

new UpdateViewportHeight();

/**
 * Focus within polyfill
 */

FocusWithin(document, {
  attr: false,
  className: 'focus-within',
});

/**
 * Menu burger
 */

const menuBurgerBtn = document.querySelector('.a-nav-toggle');

function toggleNav() {
  toggleDataAttr(document.body, 'nav', 'open', 'closed');
}

if (menuBurgerBtn) {
  menuBurgerBtn.addEventListener('click', toggleNav);
}

/**
 * Automatically set external links to have nofollow/noopener attrs
 */

const links = document.querySelectorAll('a');

links.forEach((link) => {
  if (link.hostname != window.location.hostname) {
    link.setAttribute('rel', 'nofollow noopener');
  }
});

/**
 * Lazyload images
 */

const lazyLoadImages = new LazyLoad();
