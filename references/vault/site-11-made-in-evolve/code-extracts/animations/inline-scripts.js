try{Typekit.load();}catch(e){}

// --- INLINE SCRIPT ---

!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

// --- INLINE SCRIPT ---


{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Made in Evolve",
  "url": "/",
  "description": "Made in Evolve is a digital studio that blends strategy, design, and technology to craft meaningful eCommerce experiences.",
  "foundingDate": "2008-01-01",
  "email": "info@madeinevolve.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Modena",
    "addressCountry": "IT"
  },
  "sameAs": [
    "https://forbes.it/2022/12/14/progetti-e-commerce-agency-settore-fashion",
    "https://www.pambianconews.com/2022/04/01/evolve-lecommerce-agency-cresce-del-78-con-partnership-a-provvigione-342942/",
    "https://forbes.it/2024/05/07/creativita-digitale-e-integrazione-tecnologica-unalleanza-strategica-definisce-il-futuro-digitale-di-engine",
    "https://www.breakmagazine.it/oggi-vi-parliamo-di-una-novita-nellambito-del-digital-e-del-fashion/"
  ],
  "areaServed": "International"
}


// --- INLINE SCRIPT ---

!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='plwebflow';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('consent', 'revoke');fbq('init', '445999716255324');fbq('track', 'PageView');

// --- INLINE SCRIPT ---

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDRD39H');

// --- INLINE SCRIPT ---


function initAccordionCSS() {
  document.querySelectorAll('[data-accordion-css-init]').forEach((accordion) => {
    const closeSiblings = accordion.getAttribute('data-accordion-close-siblings') === 'true';

    accordion.addEventListener('click', (event) => {
      const toggle = event.target.closest('[data-accordion-toggle]');
      if (!toggle) return; // Exit if the clicked element is not a toggle

      const singleAccordion = toggle.closest('[data-accordion-status]');
      if (!singleAccordion) return; // Exit if no accordion container is found

      const isActive = singleAccordion.getAttribute('data-accordion-status') === 'active';
      singleAccordion.setAttribute('data-accordion-status', isActive ? 'not-active' : 'active');
      
      // When [data-accordion-close-siblings="true"]
      if (closeSiblings && !isActive) {
        accordion.querySelectorAll('[data-accordion-status="active"]').forEach((sibling) => {
          if (sibling !== singleAccordion) sibling.setAttribute('data-accordion-status', 'not-active');
        });
      }
    });
  });
}

// Initialize Accordion CSS
document.addEventListener('DOMContentLoaded', () => {
  initAccordionCSS();
});


// --- INLINE SCRIPT ---

!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","445999716255324");fbq("track","PageView");

// --- INLINE SCRIPT ---

gsap.registerPlugin(Flip,SplitText,CustomEase,ScrollToPlugin,ScrambleTextPlugin,ScrollTrigger);

// --- INLINE SCRIPT ---

!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();