
window.console = window.console || function (t) { };

if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

loadProjetos();

async function loadProjetos() {
  //dados de json file ou API.
  const projetos = await file_get_json('assets/js/data/projetos.json');
  console.log(projetos);
  if (projetos) {
    const cardTemplates = (data) => {
      return data.map((item) => {
        return (
          `
        <div class="card">
          <div class="content">
            <h2 class="title">${item.titulo}</h2>
            <p class="copy">${item.sobre}</p>
            <button class="btn" onclick="window.open('${item.url}');">
              Visualizar
            </button>
          </div>
        </div> 
        `
        )
      }).join('')
    }
    // .card:nth-child(1):before {background-image: url(assets/img/about-img.jpg);}
    const cssTemplates = (data) => {
      return data.map((item) => {
        return (
          `.card:nth-child(${item.idImagem}):before
          {
            background-image: url(assets/img/${item.nomeImagem});
          } `
        )
      }).join('')
    }
    insertCss(cssTemplates(projetos));

    //criar cards
    const elCard = document.querySelector('[data-cardprj]')
    const conteudo = cardTemplates(projetos);
    if (conteudo !== null) {
      elCard.innerHTML = conteudo;
    }
    else {
      elCard.innerHTML = "sem dados";
    }

  }

}


async function file_get_json(uri) {
  let res = await fetch(uri),
    ret = await res.json();
  return ret; // a Promise() actually.
}


function insertCss(conteudoCss) {
  var head = document.head;
  var createCss = document.createElement('style');
  createCss.innerHTML = conteudoCss;
  head.appendChild(createCss);
  console.log(conteudoCss)
}
