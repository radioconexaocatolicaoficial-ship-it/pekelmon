import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "./primitives";

// Ícones SVG Oficiais das Redes Sociais
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export function Media() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Carregar scripts das redes sociais
  useEffect(() => {
    // Instagram Embed Script
    if (!document.getElementById('instagram-embed')) {
      const instagramScript = document.createElement('script');
      instagramScript.id = 'instagram-embed';
      instagramScript.src = '//www.instagram.com/embed.js';
      instagramScript.async = true;
      document.body.appendChild(instagramScript);
    }

    // Facebook SDK
    if (!document.getElementById('facebook-jssdk')) {
      const facebookScript = document.createElement('script');
      facebookScript.id = 'facebook-jssdk';
      facebookScript.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v18.0';
      facebookScript.async = true;
      document.body.appendChild(facebookScript);
    }

    // TikTok Embed Script
    if (!document.getElementById('tiktok-embed')) {
      const tiktokScript = document.createElement('script');
      tiktokScript.id = 'tiktok-embed';
      tiktokScript.src = 'https://www.tiktok.com/embed.js';
      tiktokScript.async = true;
      document.body.appendChild(tiktokScript);
    }

    // Twitter Widget
    if (!document.getElementById('twitter-wjs')) {
      const twitterScript = document.createElement('script');
      twitterScript.id = 'twitter-wjs';
      twitterScript.src = 'https://platform.twitter.com/widgets.js';
      twitterScript.async = true;
      document.body.appendChild(twitterScript);
    }

    setScriptsLoaded(true);

    // Reprocessar widgets após scripts carregarem
    const timer = setTimeout(() => {
      // Instagram
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      
      // Facebook
      if (window.FB) {
        window.FB.XFBML.parse();
      }
      
      // TikTok
      if (window.tiktok) {
        window.tiktok.lib.render(document.querySelectorAll('.tiktok-embed'));
      }
      
      // Twitter
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Dados das redes sociais com widgets embed automáticos
  const socialMedia = [
    {
      name: "Instagram",
      handle: "@pekelmon",
      url: "https://www.instagram.com/pekelmon/",
      icon: InstagramIcon,
      color: "#E4405F",
      widget: "instagram",
      embedCode: `
        <div class="instagram-feed-widget" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/pekelmon/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:12px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:100%; min-width:250px; padding:0; width:calc(100% - 2px);">
            <div style="padding:16px;">
              <a href="https://www.instagram.com/pekelmon/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
                <div style="display: flex; flex-direction: row; align-items: center;">
                  <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                  <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                    <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                    <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                  </div>
                </div>
                <div style="padding: 19% 0;"></div>
                <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g>
                    </g>
                  </svg>
                </div>
                <div style="padding-top: 8px;">
                  <div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicação no Instagram</div>
                </div>
              </a>
            </div>
          </blockquote>
        </div>
      `
    },
    {
      name: "YouTube",
      handle: "@PadreKelmonBr",
      url: "https://www.youtube.com/@PadreKelmonBr",
      icon: YoutubeIcon,
      color: "#FF0000",
      widget: "youtube",
      channelId: "UCxU_CHANNEL_ID", // Substituir pelo ID real do canal
      embedCode: `
        <div class="youtube-feed-widget" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <p style="text-align: center; color: #666; padding: 2rem;">
            Últimos vídeos do canal @PadreKelmonBr
            <br/><br/>
            <a href="https://www.youtube.com/@PadreKelmonBr" target="_blank" rel="noopener noreferrer" style="color: #FF0000; font-weight: bold;">
              Ver todos os vídeos no YouTube →
            </a>
          </p>
        </div>
      `
    },
    {
      name: "TikTok",
      handle: "@pekelmon",
      url: "https://www.tiktok.com/@pekelmon",
      icon: TiktokIcon,
      color: "#000000",
      widget: "tiktok",
      embedCode: `
        <div class="tiktok-feed-widget" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pekelmon" data-unique-id="pekelmon" data-embed-type="creator" style="max-width: 100%; min-width: 250px;">
            <section>
              <a target="_blank" href="https://www.tiktok.com/@pekelmon?refer=creator_embed">@pekelmon</a>
            </section>
          </blockquote>
        </div>
      `
    },
    {
      name: "Facebook",
      handle: "PadreKelmon",
      url: "https://www.facebook.com/PadreKelmon",
      icon: FacebookIcon,
      color: "#1877F2",
      widget: "facebook",
      embedCode: `
        <div class="facebook-feed-widget" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <div class="fb-page" 
               data-href="https://www.facebook.com/PadreKelmon" 
               data-tabs="timeline" 
               data-width="500" 
               data-height="600" 
               data-small-header="false" 
               data-adapt-container-width="true" 
               data-hide-cover="false" 
               data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/PadreKelmon" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/PadreKelmon">Padre Kelmon</a>
            </blockquote>
          </div>
        </div>
      `
    },
  ];

  return (
    <section id="midia" className="bg-card/30" style={{ scrollMarginTop: '80px', paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
          {/* Layout 50/50: Textos Esquerda + Vídeo Direita */}
          <div className="mb-12 grid items-stretch gap-8 lg:grid-cols-2">
            {/* Textos Esquerda - 50% */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--yellow-primary)' }}>
                Mídia
              </p>
              <h2 className="mb-4 text-3xl font-black sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
                Padre Kelmon nas Redes Sociais
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                Acompanhe diariamente as publicações, vídeos, mensagens e posicionamentos do Padre Kelmon nas principais plataformas digitais. Fique por dentro da agenda, conheça as propostas e participe ativamente desta caminhada por São Paulo e pelo Brasil através das redes sociais oficiais.
              </p>
            </div>

            {/* Vídeo Direita - 50% */}
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/EI-bTS70q0U"
                title="Padre Kelmon - Vídeo Oficial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Seção de Redes Sociais */}
          <div className="mt-10">
            <h3 className="mb-6 text-xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
              Redes Sociais
            </h3>
            
            {socialMedia.map((social, socialIndex) => {
              const IconComponent = social.icon;
              return (
                <div key={social.name} className="mb-10">
                  {/* Cabeçalho da Rede Social */}
                  <div className="mb-4 flex items-center gap-3">
                    <div 
                      className="inline-flex size-10 items-center justify-center rounded-xl p-2 text-white"
                      style={{ backgroundColor: social.color }}
                    >
                      <IconComponent />
                    </div>
                    <div>
                      <h4 className="text-base font-bold" style={{ color: 'var(--blue-primary)' }}>
                        {social.name}
                      </h4>
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {social.handle}
                      </a>
                    </div>
                  </div>

                  {/* Widget Embed Automático da Rede Social */}
                  <Reveal delay={0.1}>
                    <div 
                      className="social-media-widget"
                      dangerouslySetInnerHTML={{ __html: social.embedCode }}
                    />
                  </Reveal>

                  {/* Link para Ver Mais */}
                  <div className="mt-4 text-center">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: social.color }}
                    >
                      <div className="size-4 flex items-center justify-center">
                        <IconComponent />
                      </div>
                      <span>Ver todas as publicações</span>
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
