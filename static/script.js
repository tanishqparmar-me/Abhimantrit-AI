    // When webchat is initialized and ready:
    window.botpress.on("webchat:ready", () => {
       const preloader = document.querySelector('.preloader');
      
      // Add a small delay to ensure everything is fully loaded
      setTimeout(function() {
        preloader.classList.add('hidden');
        
        // Remove preloader from DOM after animation completes
        setTimeout(function() {
          preloader.style.display = 'none';
        }, 800); // Matches the transition duration
      }, 1000); 
    });


  

    // Initialize Botpress Webchat with responsive configuration
    document.addEventListener("DOMContentLoaded", function () {
   window.botpressWebChat.init({
      botId: "1b972ffc-1208-40b2-a74f-152c31b83090",
      clientId: "07004550-56af-440c-a7c6-3a02f9b3b9af",
      selector: "#webchat",
      configuration: {
        version: "v1",
        composerPlaceholder: "Ask your spiritual question here...",
        botName: "Abhimantrit",
        botDescription: "Sahayak - Your Spiritual AI Assistant",
        fabImage: "images/icon.jpg",
        website: {
          title: "https://www.abhimantrit.shop/",
          link: "https://www.abhimantrit.shop/"
        },
        email: {
          title: "info@abhimantrit.shop",
          link: "info@abhimantrit.shop"
        },
        phone: {
          title: "+91 7898396007",
          link: "+91 7898396007"
        },
        color: "#f76b15",
        variant: "solid",
        headerVariant: "glass",
        themeMode: "light",
        fontFamily: "ibm",
        radius: 1,
        feedbackEnabled: false,
        footer: "[By - Abhimantrit™](https://abhimantrit.shop)",
        styleSheet: `
          @media (max-width: 767px) {
            .bpw-header-title {
              font-size: 18px !important;
            }
            .bpw-header-subtitle {
              font-size: 14px !important;
            }
            .bpw-chat-bubble {
              font-size: 16px !important;
              line-height: 1.5 !important;
            }
            .bpw-keyboard-quick_reply {
              padding: 10px 12px !important;
              font-size: 14px !important;
            }
            .bpw-composer {
              min-height: 60px !important;
            }
          }
          @media (max-width: 480px) {
            .bpw-header-container {
              padding: 12px 15px !important;
            }
            .bpw-chat-container {
              padding-bottom: 70px !important;
            }
          }
        `
      }
    });

    // Handle chat opening
    document.getElementById('open-chat').addEventListener('click', function () {
      document.getElementById('webchat').style.visibility = 'visible';
      window.botpress.open();
    });

    // Handle orientation changes
    window.addEventListener('orientationchange', function () {
      window.location.reload();
    });
  });

