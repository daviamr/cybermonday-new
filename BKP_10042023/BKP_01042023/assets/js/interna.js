$(document).ready(function () {

    let queryString = window.location;
    queryString = queryString.pathname.replace("/blog/","");
    
    //corpo do blog
    $.get(`https://api.bigdates.com.br:3010/postsPaginaUrl?pagina=cybermonday&url=${queryString.replace(".html","")}`, function (data) {
        let result = data;
        console.log(result);
        $('#title').html(result[0].post_titulo)
        $('#description').html(result[0].post_web_texto)
        $('#route').html(`<a href="https://blackfriday.com.br/#">Início</a> / <a href="/blog/">Blog</a> / ${result[0].post_titulo}`)
        $('#img').html(`<img src="https://api.bigdates.com.br:3010/imgpost/${result[0].post_imagem}" class="img-fluid blog-post-media">`)

        //document.querySelector('meta[property="og:title"]').setAttribute("TESTE G", _desc);
        document.title = result[0].post_titulo;
        $('meta[name=description]').remove();
        $('head').append( `<meta name="description" content="${result[0].post_web_tag_description}">` );
        $('meta[name=keywords]').remove();
        $('head').append( `<meta name="keywords" content="${result[0].post_web_tag_keywords}">` );
        
        //document.querySelector('meta[name="description"]').setAttribute("content", );
    
        const container = document.getElementById('cards-col');

        for (let i = 1; i < 4; i++) {
            const cardsLaterias = document.createElement('div');
            cardsLaterias.classList = 'card-body';
            if (result[i].post_data_day != undefined) {
                var date = (result[i].post_data_day).replace('-', '/').replace('-', '/').replace('T00:00:00.000Z', '')
            }
            let href = (result[i].post_web_url).slice(0, 180).replace('https://blackFriday.vcsabia.online/', '')
            const content = `
           <div class="col-lg-12 destaque-item destaque-item-black">
               <a href="./${href}.html" class="destaque-link">
                   <figure>
                       <img src="https://api.bigdates.com.br:3010/imgpost/${result[i].post_imagem}" alt="${result[i].post_imagem_alt}" class="img-fluid">
                   </figure>    
                   <div class="destaque-content">
                       <h3 class="destaque-title">${result[i].post_titulo}</h3>                                                
                       <p class="destaque-date">${date}</p>
                   </div>    
               </a>
           </div>
           `;
            container.innerHTML += content;
        }//end for

        for(let j = 4; j < 8; j++ ){
            let href = (result[j].post_web_url).slice(0, 180).replace('https://blackFriday.vcsabia.online/', '');
           $('#destaques').append(
               `<div class="col-lg-3 col-md-6 destaque-item">
                    <div class="destaque-item-red">
                        <a href="./${href}.html" class="destaque-link">
                            <figure>
                                <img src="https://api.bigdates.com.br:3010/imgpost/${result[j].post_imagem}" alt="${result[j].post_imagem_alt}" class="img-fluid">
                            </figure>    
                            <div class="destaque-content">
                                <h3 class="destaque-title destaque-title-white">${result[j].post_titulo}</h3>                                        
                            </div>    
                        </a>
                    </div>
                </div>`
            );    

        }//end for destaques

    });
});