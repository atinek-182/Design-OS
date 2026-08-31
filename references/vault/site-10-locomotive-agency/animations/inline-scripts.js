
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-WYYJ9ZP43V');
                gtag('consent', 'default', {
                    'ad_personalization': 'denied',
                    'ad_storage':         'denied',
                    'ad_user_data':       'denied',
                    'ads_data_redaction': 'true',
                    'analytics_storage':  'denied',
                    'wait_for_update':    500
                });
            

// --- INLINE SCRIPT ---


          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//matomo.locomotive.ca/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        

// --- INLINE SCRIPT ---



    window.preloaderEnterPromise = new Promise(resolve => {
        setTimeout(resolve, 1200);
    });
    console.log('preloaderEnterPromise created in preloader.twig');

    window.preloaderPromise = new Promise(resolve => {
        window.preloaderPromiseResolve = resolve;
    });
    console.log('preloaderPromise created in preloader.twig');
