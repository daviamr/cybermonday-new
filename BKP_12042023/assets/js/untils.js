$(document).ready(function () {

    let queryString = window.location;
    console.log(queryString.href);
    if(queryString.href == "https://bf2022-ec2-and-cloudfront-1164987782.sa-east-1.elb.amazonaws.com/blog/" || queryString.href == "http://bf2022-ec2-and-cloudfront-1164987782.sa-east-1.elb.amazonaws.com/blog/"){
        window.location.href="https://blackfriday.com.br/blog/"
    }
    
      $.get('https://api.bigdates.com.br:3010/postsPaginaSite/cybermonday', function (data) {
        const apiResult = data.reverse();
        const container = document.getElementById('cards');
        const destaque = document.getElementById('cards');
        
        apiResult.forEach((result, idx) => {
          if (idx == 0) {
            let href = result.post_web_url
            console.log(href);
            //add no destaque
            const createDestaque = document.createElement('div');
            createDestaque.classList = 'card-body';
            let text = result.post_web_texto.replace(/<\/?[^>]+(>|$)/g, "");
            const content = `
            <div class="col-md-12">
            <a href="./${href}.html" class="blog-destaque">
                <div class="row">
                    <div class="col-md-4">
                        <img src="https://api.bigdates.com.br:3010/imgpost/${result.post_imagem}" alt="${result.post_imagem_alt}" class="img-fluid blog-destaque-media">
                    </div>    
                    <div class="col-md-8">
                        <h2 class="blog-destaque-title">${result.post_titulo}</h2>
                        <p class="blog-destaque-text">${text.substring(0,250)} ...</p>                                               
                    </div>    
                </div>    
            </a>    
            </div>
            `;
            destaque.innerHTML += content;
    
          } else {
            // add nos cards
            const card = document.createElement('div');
            card.classList = 'card-body';
            //let text = (result.post_web_texto).replace('<p>', '').replace('</p>', '').substring(0, 111)
            let text = result.post_web_texto.replace(/<\/?[^>]+(>|$)/g, "");
            let href = (result.post_web_url).replace('https://blackFriday.vcsabia.online/', '')
            const content = `
              <div class="col-md-6">
                <a href="./${href}.html" class="blog-item">
                  <div class="row">
                        <div class="col-md-4">
                          <img src="https://api.bigdates.com.br:3010/imgpost/${result.post_imagem}" alt="${result.post_imagem_alt}" class="img-fluid blog-item-media">
                        </div>    
                        <div class="col-md-8">
                          <h2 class="blog-item-title">${result.post_titulo}</h2>
                          <p class="blog-item-text" id="blog-num-char">${text.substring(0,150)} ...</p>                                            
                        </div>    
                    </div>    
                </a>    
              </div>
            `;
            container.innerHTML += content;
          }
        })
      });
    });