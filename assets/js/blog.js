$(document).ready(function () {
  let queryString = window.location;
  console.log(queryString.href);

  var settings = {
    url: "https://api.bigdates.com.br:3010/postsPaginaSite/cybermonday",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    const apiResult = response.reverse();
    const destaque = document.getElementById("cards");
    var teste = `<div class="row justify-content-md-center">
      <div class="col-md-8">
        <h2 class="title-section">
          Blog <span class="title-section-dark">Black Friday</span
          ><span class="title-section-barra"></span>
        </h2>
      </div>
      <div class="col-md-4 d-none d-md-block">
      <a href="/blog/" target="_blank" class="ver-todos text-dark flip-animate">
      <span data-hover="ver todos os posts">ver todos os posts</span></a>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-6 destaque-item">
            <a
              href="https://cybermondaybrasil.com.br/blog/${apiResult[0].post_web_url}.html"
              class="destaque-link"
            >
              <figure>
                <img
                  src="https://api.bigdates.com.br:3010/imgpost/${apiResult[0].post_imagem}"
                  alt=""
                  class="image-blog"
                />
              </figure>
              <div class="destaque-content">
                <h3 class="destaque-title">
                  ${apiResult[0].post_titulo}
                </h3>
                <button class="button-block-sm">Veja Mais</button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-6 destaque-item">
          <a
          href="https://cybermondaybrasil.com.br/blog/${apiResult[1].post_web_url}.html"
          class="destaque-link"
        >
          <figure>
            <img
              src="https://api.bigdates.com.br:3010/imgpost/${apiResult[1].post_imagem}"
              alt=""
              class="image-blog"
            />
          </figure>
          <div class="destaque-content">
            <h3 class="destaque-title">
              ${apiResult[1].post_titulo}
            </h3>
            <button class="button-block-sm">Veja Mais</button>
          </div>
        </a>
          </div>
          <div
            class="col-lg-3 col-md-6 col-6 destaque-item d-none d-md-block"
          >
          <a
          href="https://cybermondaybrasil.com.br/blog/${apiResult[2].post_web_url}.html"
          class="destaque-link"
        >
          <figure>
            <img
              src="https://api.bigdates.com.br:3010/imgpost/${apiResult[2].post_imagem}"
              alt=""
              class="image-blog"
            />
          </figure>
          <div class="destaque-content">
            <h3 class="destaque-title">
              ${apiResult[2].post_titulo}
            </h3>
            <button class="button-block-sm">Veja Mais</button>
          </div>
        </a>
          </div>
          <div
            class="col-lg-3 col-md-6 col-6 destaque-item d-none d-md-block"
          >
          <a
          href="https://cybermondaybrasil.com.br/blog/${apiResult[3].post_web_url}.html"
          class="destaque-link"
        >
          <figure>
            <img
              src="https://api.bigdates.com.br:3010/imgpost/${apiResult[3].post_imagem}"
              alt=""
              class="image-blog"
            />
          </figure>
          <div class="destaque-content">
            <h3 class="destaque-title">
              ${apiResult[3].post_titulo}
            </h3>
            <button class="button-block-sm">Veja Mais</button>
          </div>
        </a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 pt-3 pt-md-0 d-md-none">
            <a href="blog/" class="ver-todos"
              >ver todos os posts</a
            >
          </div>
        </div>
      </div>
    </div>`;

    destaque.innerHTML += teste;
  });
  // $.get('https://api.bigdates.com.br:3010/postsPaginaSite/blackFriday', function (data) {
  //     const apiResult = data.reverse();
  //     const container = document.getElementById('cards');
  //     const destaque = document.getElementById('cards');

  //     apiResult.forEach((result, idx) => {
  //       if (idx == 0) {
  //         let href = (result.post_web_url).replace('https://blackFriday.vcsabia.online/', '')
  //         //add no destaque
  //         const createDestaque = document.createElement('div');
  //         createDestaque.classList = 'card-body';
  //         let text = result.post_web_texto.replace(/<\/?[^>]+(>|$)/g, "");
  //         const content = `
  //         <div class="col-md-12">
  //         <a href="./${href}.html" class="blog-destaque">
  //             <div class="row">
  //                 <div class="col-md-4">
  //                     <img src="https://api.bigdates.com.br:3010/imgpost/${result.post_imagem}" alt="${result.post_imagem_alt}" class="img-fluid blog-destaque-media">
  //                 </div>
  //                 <div class="col-md-8">
  //                     <h2 class="blog-destaque-title">${result.post_titulo}</h2>
  //                     <p class="blog-destaque-text">${text.substring(0,250)} ...</p>
  //                 </div>
  //             </div>
  //         </a>
  //         </div>
  //         `;
  //         destaque.innerHTML += content;

  //       } else {
  //         // add nos cards
  //         const card = document.createElement('div');
  //         card.classList = 'card-body';
  //         //let text = (result.post_web_texto).replace('<p>', '').replace('</p>', '').substring(0, 111)
  //         let text = result.post_web_texto.replace(/<\/?[^>]+(>|$)/g, "");
  //         let href = (result.post_web_url).replace('https://blackFriday.vcsabia.online/', '')
  //         const content = `
  //           <div class="col-md-6">
  //             <a href="./${href}.html" class="blog-item">
  //               <div class="row">
  //                     <div class="col-md-4">
  //                       <img src="https://api.bigdates.com.br:3010/imgpost/${result.post_imagem}" alt="${result.post_imagem_alt}" class="img-fluid blog-item-media">
  //                     </div>
  //                     <div class="col-md-8">
  //                       <h2 class="blog-item-title">${result.post_titulo}</h2>
  //                       <p class="blog-item-text" id="blog-num-char">${text.substring(0,150)} ...</p>
  //                     </div>
  //                 </div>
  //             </a>
  //           </div>
  //         `;
  //         container.innerHTML += content;
  //       }
  //     })
  //   });
});
