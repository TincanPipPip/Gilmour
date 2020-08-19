/**
 * Mobile Nav sub menus
 */
const mainNav = document.querySelector('.m-nav--main');
const navItemParents = mainNav.querySelectorAll('.menu-item-has-children');

// Toggle data-hover state on sub nav's parent <li> to hide/show subnav
function toggleSubNav(e, subNavParentLi) {
  if (subNavParentLi.getAttribute('data-hover') === 'true') {
    subNavParentLi.setAttribute('data-hover', 'false');
  } else {
    subNavParentLi.setAttribute('data-hover', 'true');
  }

  e.preventDefault();
}

navItemParents.forEach((subNavParentLi) => {
  const parentLink = subNavParentLi.querySelector('a');
  const firstChildLi = subNavParentLi.querySelector('li');
  const subNavTitle = document.createElement('li');

  // Get Parent <li>'s link title and add to sub nav to form back button
  subNavTitle.classList.add('a-mobile-helper');
  subNavTitle.innerHTML = `<span>${parentLink.textContent}</span>`;
  firstChildLi.before(subNavTitle);

  // When clicking the '>' button in the parent link, i.e. opening sub nav
  parentLink.querySelector('span').addEventListener('touchstart', (e) => {
    toggleSubNav(e, subNavParentLi);
  });

  // When tapping the sub nav title, i.e hiding sub nav
  subNavTitle.querySelector('span').addEventListener('touchstart', (e) => {
    toggleSubNav(e, subNavParentLi);
  });
});

/**
 * Set height of main nav based so it fills screen
 */
function navHeight() {
  const setHeight = window.innerHeight - document.querySelector('.o-header').clientHeight;

  document.body.style.setProperty('--windowHeight', `${setHeight}px`);
}

navHeight();

// Timer for resize event
let timeout;

// Rerun on resize
window.addEventListener(
  'resize',
  function() {
    if (!timeout) {
      timeout = setTimeout(function() {
        navHeight;
        timeout = null;
      }, 66);
    }
  },
  false
);

// TODO - click outside of nav to close menu?
