
            function getIEVersion() {
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf('MSIE ');
                if (msie > 0) {
                    // IE 10 or older => return version number
                    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                }

                var trident = ua.indexOf('Trident/');
                if (trident > 0) {
                    // IE 11 => return version number
                    var rv = ua.indexOf('rv:');
                    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                }

                var edge = ua.indexOf('Edge/');
                if (edge > 0) {
                    // Edge (IE 12+) => return version number
                    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
                }

                // other browser
                return false;
            }

            function detectGL() {
                try {
                    var canvas = document.createElement('canvas');
                    return !!(
                        window.WebGLRenderingContext &&
                        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
                    );
                } catch (e) {
                    return false;
                }
            }

            function notSupported() {
                var IEVersion = getIEVersion();
                // return true;
                return !detectGL() || (IEVersion && IEVersion <= 11);
            }

            if (notSupported()) {
                document.getElementById('unsupported').style.display = 'block';
            } else {
                var script = document.createElement('script');
                script.src = 'https://d1hl9u9k5hiqxp.cloudfront.net/loader.76ceb4644b28bd9c30b5.js';
                document.body.appendChild(script);
            }
        

// --- INLINE SCRIPT ---


            window.ga = function() {
                ga.q.push(arguments);
            };
            ga.q = [];
            ga.l = +new Date();
            ga('create', 'UA-141393418-1', 'auto');
            ga('send', 'pageview');
            ga('send', { hitType: 'pageview', page: '/' });
        

// --- INLINE SCRIPT ---


        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2300022956707329'); 
        fbq('track', 'PageView');
        

// --- INLINE SCRIPT ---


            (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
            {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
            a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
            r.src=n;var u=t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r,u);})(window,document,
            'https://sc-static.net/scevent.min.js');
            snaptr('init', '9883e0da-f829-4546-946f-bd621e12bd4a', {
            'user_email': '__INSERT_USER_EMAIL__'
            });
            snaptr('track', 'PAGE_VIEW');
        

// --- INLINE SCRIPT ---


            var _elqQ = _elqQ || [];
            _elqQ.push(['elqSetSiteId', '777435755']);
            _elqQ.push(['elqTrackPageView']);
    
            (function () {
                function async_load() {
                    var s = document.createElement('script'); s.type = 'text/javascript';
                    s.async = true; s.src = '//img.en25.com/i/elqCfg.min.js';
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                }
                if (window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);
                else if (window.attachEvent) window.attachEvent('onload', async_load);
            })();
        