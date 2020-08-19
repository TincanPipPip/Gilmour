/**
 * Quote
 * Dynamically set quote modules' bottom border to leave gap for the details
 */

const quoteModules = document.querySelectorAll('.md-quote');

// Get width of quote copy & details, calculate the width of the missing border parts
setBorder = (quote) => {
  const quoteWidth = quote.querySelector('.md-quote__content').clientWidth;
  const quoteDetailsWidth = quote.querySelector('.md-quote__details').clientWidth;

  let borderWidth = (quoteWidth - quoteDetailsWidth) / 2 - 30;

  // Minimum border width
  if (borderWidth < 0) {
    borderWidth = 10;
  }

  // Update CSS var with calculated border width
  quote.style.setProperty('--quote-border', `${borderWidth}px`);
};

quoteModules.forEach((quote) => setBorder(quote));

// Timer for resize event
let timeout;

// Rerun on resize
window.addEventListener(
  'resize',
  function() {
    if (!timeout) {
      timeout = setTimeout(function() {
        quoteModules.forEach((quote) => setBorder(quote));
        timeout = null;
      }, 66);
    }
  },
  false
);
