import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

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

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export function Media() {
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

    // Reprocessar widgets após scripts carregarem
    const timer = setTimeout(() => {
      if (window.instgrm) window.instgrm.Embeds.process();
      if (window.FB) window.FB.XFBML.parse();
      if (window.tiktok) window.tiktok.lib.render(document.querySelectorAll('.tiktok-embed'));
      if (window.twttr && window.twttr.widgets) window.twttr.widgets.load();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Dados das redes sociais com 4 posts cada
  const socialMedia = [
    {
      name: "Instagram",
      handle: "@pekelmon",
      url: "https://www.instagram.com/pekelmon/",
      icon: InstagramIcon,
      color: "#E4405F",
      posts: [
        { id: 1, embedHtml: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/LATEST_POST_1/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:100%; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/LATEST_POST_1/" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"></a></div></blockquote>' },
        { id: 2, embedHtml: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/LATEST_POST_2/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:100%; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/LATEST_POST_2/" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"></a></div></blockquote>' },
        { id: 3, embedHtml: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/LATEST_POST_3/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:100%; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/LATEST_POST_3/" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"></a></div></blockquote>' },
        { id: 4, embedHtml: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/LATEST_POST_4/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:100%; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/LATEST_POST_4/" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"></a></div></blockquote>' },
      ]
    },
    {
      name: "YouTube",
      handle: "@PadreKelmonBr",
      url: "https://www.youtube.com/@PadreKelmonBr",
      icon: YoutubeIcon,
      color: "#FF0000",
      posts: [
        { id: 1, embedHtml: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/VIDEO_ID_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
        { id: 2, embedHtml: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/VIDEO_ID_2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
        { id: 3, embedHtml: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/VIDEO_ID_3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
        { id: 4, embedHtml: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/VIDEO_ID_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
      ]
    },
    {
      name: "TikTok",
      handle: "@pekelmon",
      url: "https://www.tiktok.com/@pekelmon",
      icon: TiktokIcon,
      color: "#000000",
      posts: [
        { id: 1, embedHtml: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pekelmon/video/VIDEO_ID_1" data-video-id="VIDEO_ID_1" style="max-width: 605px;min-width: 325px;" > <section></section> </blockquote>' },
        { id: 2, embedHtml: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pekelmon/video/VIDEO_ID_2" data-video-id="VIDEO_ID_2" style="max-width: 605px;min-width: 325px;" > <section></section> </blockquote>' },
        { id: 3, embedHtml: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pekelmon/video/VIDEO_ID_3" data-video-id="VIDEO_ID_3" style="max-width: 605px;min-width: 325px;" > <section></section> </blockquote>' },
        { id: 4, embedHtml: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pekelmon/video/VIDEO_ID_4" data-video-id="VIDEO_ID_4" style="max-width: 605px;min-width: 325px;" > <section></section> </blockquote>' },
      ]
    },
    {
      name: "X",
      handle: "@PeKelmon",
      url: "https://x.com/PeKelmon",
      icon: XIcon,
      color: "#000000",
      posts: [
        { id: 1, embedHtml: '<blockquote class="twitter-tweet"><p lang="pt" dir="ltr">Tweet 1</p>&mdash; Padre Kelmon (@PeKelmon) <a href="https://x.com/PeKelmon/status/TWEET_ID_1">Link</a></blockquote>' },
        { id: 2, embedHtml: '<blockquote class="twitter-tweet"><p lang="pt" dir="ltr">Tweet 2</p>&mdash; Padre Kelmon (@PeKelmon) <a href="https://x.com/PeKelmon/status/TWEET_ID_2">Link</a></blockquote>' },
        { id: 3, embedHtml: '<blockquote class="twitter-tweet"><p lang="pt" dir="ltr">Tweet 3</p>&mdash; Padre Kelmon (@PeKelmon) <a href="https://x.com/PeKelmon/status/TWEET_ID_3">Link</a></blockquote>' },
        { id: 4, embedHtml: '<blockquote class="twitter-tweet"><p lang="pt" dir="ltr">Tweet 4</p>&mdash; Padre Kelmon (@PeKelmon) <a href="https://x.com/PeKelmon/status/TWEET_ID_4">Link</a></blockquote>' },
      ]
    },
    {
      name: "Facebook",
      handle: "PadreKelmon",
      url: "https://www.facebook.com/PadreKelmon",
      icon: FacebookIcon,
      color: "#1877F2",
      posts: [
        { id: 1, embedHtml: '<div class="fb-post" data-href="https://www.facebook.com/PadreKelmon/posts/POST_ID_1" data-width="500" data-show-text="true"></div>' },
        { id: 2, embedHtml: '<div class="fb-post" data-href="https://www.facebook.com/PadreKelmon/posts/POST_ID_2" data-width="500" data-show-text="true"></div>' },
        { id: 3, embedHtml: '<div class="fb-post" data-href="https://www.facebook.com/PadreKelmon/posts/POST_ID_3" data-width="500" data-show-text="true"></div>' },
        { id: 4, embedHtml: '<div class="fb-post" data-href="https://www.facebook.com/PadreKelmon/posts/POST_ID_4" data-width="500" data-show-text="true"></div>' },
      ]
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

          {/* Seção de Redes Sociais - 4 Cards por Linha */}
          <div className="mt-10 space-y-12">
            {socialMedia.map((social) => {
              const IconComponent = social.icon;
              return (
                <div key={social.name} className="space-y-4">
                  {/* Cabeçalho da Rede Social */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
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
                    
                    {/* Link Ver Mais */}
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: social.color }}
                    >
                      <span>Ver todos</span>
                      <ExternalLink className="size-4" />
                    </a>
                  </div>

                  {/* Grid 4 Cards por Linha */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {social.posts.map((post, index) => (
                      <Reveal key={`${social.name}-${post.id}`} delay={0.05 * index}>
                        <div 
                          className="overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                          style={{ borderColor: social.color + '40' }}
                        >
                          <div 
                            className="social-post-embed"
                            dangerouslySetInnerHTML={{ __html: post.embedHtml }}
                          />
                        </div>
                      </Reveal>
                    ))}
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
