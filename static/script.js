
  window.botpress.init({
  "botId": "1b972ffc-1208-40b2-a74f-152c31b83090",
  "configuration": {
    "version": "v1",
    "composerPlaceholder": "Apna sawal Likhe..",
    "botName": "Abhimantrit",
    "botDescription": "Abhimantrit Ai Chat",
    "fabImage": "https://files.bpcontent.cloud/2025/08/02/05/20250802053323-VE5R9YMB.jpeg",
    "website": {
      "title": "https://www.abhimantrit.shop/",
      "link": "https://www.abhimantrit.shop/"
    },
    "email": {
      "title": "info@abhimantrit.shop",
      "link": "info@abhimantrit.shop"
    },
    "phone": {
      "title": "+91 7898396007",
      "link": "+91 7898396007"
    },
    "termsOfService": {},
    "privacyPolicy": {},
    "color": "#f76b15",
    "variant": "solid",
    "headerVariant": "glass",
    "themeMode": "light",
    "fontFamily": "ibm",
    "radius": 1,
    "feedbackEnabled": false,
    "footer": "[Abhimantrit™ AI Sahayak](https://abhimantrit.shop)"
  },
  "clientId": "07004550-56af-440c-a7c6-3a02f9b3b9af",
  "selector": "#webchat"
});


   // Preloader functionality
    window.addEventListener('load', function () {
      const preloader = document.querySelector('.preloader');

      // Add a small delay to ensure everything is fully loaded
      setTimeout(function () {
        preloader.classList.add('hidden');

        // Remove preloader from DOM after animation completes
        setTimeout(function () {
          preloader.style.display = 'none';
        }, 800); // Matches the transition duration
      }, 1000); // Simulating loading time
    });