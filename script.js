/* ================================================================
   SCRIPT.JS — Martha Mariam Vanitha Samajam
   All interactive behaviour for the website.
================================================================ */

/* Wait for the full HTML page to load before running any code */
document.addEventListener('DOMContentLoaded', function () {

  /* ── GET HTML ELEMENTS ── */

  /* The hamburger button (3 lines) */
  var menuToggle = document.getElementById('menuToggle');

  /* The sliding sidebar menu */
  var mobileMenu = document.getElementById('mobileMenu');

  /* The dark overlay behind the open sidebar */
  var menuOverlay = document.getElementById('menuOverlay');

  /* The X close button inside the sidebar */
  var closeMenuBtn = document.getElementById('closeMenu');

  /* All the links inside the mobile sidebar */
  var mobileLinks = document.querySelectorAll('.mobile-nav-items a');


  /* ── OPEN THE SIDEBAR ── */
  /* Runs when the hamburger button is clicked */
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {

      /* Adds "open" class to sidebar — CSS slides it into view */
      mobileMenu.classList.add('open');

      /* Adds "open" class to overlay — CSS makes it visible */
      menuOverlay.classList.add('open');

      /* Adds "active" class to hamburger — CSS turns 3 lines into X */
      menuToggle.classList.add('active');

      /* Stops page from scrolling while sidebar is open */
      document.body.style.overflow = 'hidden';
    });
  }


  /* ── CLOSE SIDEBAR FUNCTION ── */
  /* This function closes the sidebar — used in multiple places */
  function closeMenu() {

    /* Removes "open" from sidebar — CSS slides it off screen */
    mobileMenu.classList.remove('open');

    /* Removes "open" from overlay — CSS hides it */
    menuOverlay.classList.remove('open');

    /* Removes "active" from hamburger — CSS turns X back to 3 lines */
    menuToggle.classList.remove('active');

    /* Allows the page to scroll again */
    document.body.style.overflow = '';
  }


  /* ── CLOSE WHEN X BUTTON CLICKED ── */
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }


  /* ── CLOSE WHEN OVERLAY CLICKED ── */
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
  }


  /* ── CLOSE WHEN ANY SIDEBAR LINK IS CLICKED ── */
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });


  /* ── NAV SHADOW ON SCROLL ── */
  /* Adds a shadow to the nav when the user scrolls down */
  window.addEventListener('scroll', function () {

    var header = document.querySelector('.header');

    if (header) {
      if (window.scrollY > 10) {
        /* User scrolled down — add shadow */
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        /* Change 0.4 to make shadow darker/lighter */
      } else {
        /* User is at the top — remove shadow */
        header.style.boxShadow = 'none';
      }
    }
  });


  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ── */
  /* Makes all # links scroll smoothly to their section */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener('click', function (e) {

      var targetId = this.getAttribute('href'); /* Gets e.g. "#organisations" */
      var targetSection = document.querySelector(targetId); /* Finds the section */

      if (targetSection) {

        e.preventDefault(); /* Stops the default jump */

        /* Gets the height of the sticky nav so we don't scroll under it */
        var navHeight = document.querySelector('.header') ?
          document.querySelector('.header').offsetHeight : 0;

        /* Calculates the correct scroll position */
        var targetPosition = targetSection.offsetTop - navHeight - 10;
        /* Change -10 to adjust the gap between the nav and the section */

        /* Smooth scroll to that position */
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'   /* Change to 'auto' for instant jump */
        });
      }
    });
  });


  /* ── LEADER CARD HOVER GLOW ── */
  /* Adds extra purple glow to each leader card on hover */
  var leaderCards = document.querySelectorAll('.leadership-card');

  leaderCards.forEach(function (card) {

    /* Mouse enters the card */
    card.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 20px 50px rgba(121, 0, 226, 0.5)';
      /* Change 0.5 to make the glow stronger/weaker */
    });

    /* Mouse leaves the card */
    card.addEventListener('mouseleave', function () {
      this.style.boxShadow = 'none';
    });
  });


  /* ── WING CARD HOVER BORDER ── */
  /* Changes wing card border to gold on hover */
  var wingCards = document.querySelectorAll('.wing-card');

  wingCards.forEach(function (card) {

    card.addEventListener('mouseenter', function () {
      this.style.borderColor = '#e6c068'; /* Gold border on hover */
    });

    card.addEventListener('mouseleave', function () {
      this.style.borderColor = 'rgba(121, 0, 226, 0.35)'; /* Back to purple */
    });
  });


  /* ── SCROLL TO WINGS IF URL HAS #organisations ── */
  /* Used when Organisations nav link is clicked from another page */
  if (window.location.hash === '#organisations') {
    setTimeout(function () {
      var wings = document.getElementById('organisations');
      if (wings) {
        var navHeight = document.querySelector('.header') ?
          document.querySelector('.header').offsetHeight : 0;
        window.scrollTo({
          top: wings.offsetTop - navHeight - 10,
          behavior: 'smooth'
        });
      }
    }, 100); /* 100ms delay so the page loads before scrolling */
  }

}); /* End of DOMContentLoaded */
