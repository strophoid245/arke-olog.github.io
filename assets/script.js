var styles = [ "/assets/style.css", "/assets/bootstrap.min.css" ];
var scripts = [ "/assets/jquery.min.js", "/assets/bootstrap.min.js" ];

var scriptLoadIndex = 0;

function loadNextScript() {
    if (scripts.length > 0) {
        var xh = new XMLHttpRequest();
        xh.open("GET", scripts[scriptLoadIndex], true);
        xh.onreadystatechange = function() {
            if (xh.status == 200 && xh.readyState == 4) {
                var scriptTag = document.createElement("script");
                scriptTag.innerText = xh.responseText;
                document.head.appendChild(scriptTag);
            }
        }
        xh.send(null);
    }

    if (scriptLoadIndex < scripts.length - 1) {
        scriptLoadIndex++;
        loadNextScript();
    }
}

function addAssets() {
    var viewportTag = document.createElement("meta");
    viewportTag.name = "viewport";
    viewportTag.content = "width=device-width, initial-scale=1, shrink-to-fit=no"
    document.head.append(viewportTag);

    styles.forEach(function(url) {
        var styleTag = document.createElement("link");
        styleTag.rel="stylesheet";
        styleTag.href=url;
        document.head.append(styleTag);
    });

    loadNextScript();
}

var before = '<div class="container mt-3"><nav class="navbar navbar-expand-lg navbar-light bg-light mb-2"><a class="navbar-brand" href="/">Agrega</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Navigasyon"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item"><a class="nav-link" href="/">Ana Sayfa</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">İngilizce Sözlük</a><div class="dropdown-menu" aria-labelledby="navbarDropdown1"><a class="dropdown-item" href="/ingilizce-sozluk/ingilizce-kelimeler/index.html">İngilizce - Türkçe</a><a class="dropdown-item" href="/ingilizce-sozluk/turkce-kelimeler/index.html">Türkçe - İngilizce</a><a class="dropdown-item" href="/ingilizce-sozluk/english-dictionary/index.html">İngilizce - İngilizce</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Şarkı Sözleri</a><div class="dropdown-menu" aria-labelledby="navbarDropdown2"><a class="dropdown-item" href="/sarki-sozleri/sarkilar/index.html">Şarkılar</a><a class="dropdown-item" href="/sarki-sozleri/sanatcilar/index.html">Şanatçılar</a></div></li><li class="nav-item"><a class="nav-link" href="/ruya-tabirleri/index.html">Rüya Tabirleri</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hadisler</a><div class="dropdown-menu" aria-labelledby="navbarDropdown3"><a class="dropdown-item" href="/hadisler/tum-hadisler/index.html">Tüm Hadisler</a><a class="dropdown-item" href="/hadisler/konular/index.html">Konular</a><a class="dropdown-item" href="/hadisler/fasillar/index.html">Fasıllar (Bölümler)</a><a class="dropdown-item" href="/hadisler/raviler/index.html">Raviler</a></div></li><li class="nav-item"><a class="nav-link" href="/posta-kodu/index.html">Posta Kodları</a></li><li class="nav-item"><a class="nav-link" href="/iletisim.html">İletişim</a></li></ul></div></nav><div class="row"><div class="col-lg-9 pb-3 lead">';

var after = '<p class="mt-5"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=" class="btn btn-facebook m-1">Facebook</a><a target="_blank" href="https://twitter.com/home?status=" class="btn btn-twitter m-1">Twitter</a><a target="_blank" href="https://plus.google.com/share?url=" class="btn btn-google-plus m-1">Google+</a><a target="_blank" href="https://api.whatsapp.com/send?text=" class="btn btn-whatsapp m-1">Whatsapp</a></p><ul class="mt-5 small list-inline"></ul></div><div class="col-lg-3 pl-md-0"><div class="card my-3"><div class="card-body"><h2 class="card-title"><a href="/ingilizce-sozluk/ingilizce-kelimeler/self-examination.html">self-examination</a></h2><p class="card-text">i. kendi kendini inceleme.</p><h6 class="card-text text-muted m-0 text-right">İngilizce-Türkçe Sözlük</h6></div></div><div class="card my-3"><div class="card-body"><p class="card-text">Urve ve başkalarından almış olarak Hz. Aişe\'nin şu rivayetini nakleder: Hz. Aişe (ra) buyurmuştur ki: "Resulullah ... <a href="/hadisler/hadis/709.html">(devamı)</a></p><h6 class="card-text text-muted m-0 p-0 text-right">Hadisler</h6></div></div><div class="card my-3"><div class="card-body"><h2 class="card-title"><a href="/ruya-tabirleri/ruyada-galibiyet-gormek.html">Rüyada Galibiyet Görmek</a></h2><p class="card-text"> Rüyada galip geldiğini görme sevinç ve üzüntüden kurtulmaya işaret eder.Rüyada galip gelmek, ... <a href="/ruya-tabirleri/ruyada-galibiyet-gormek.html">(devamı)</a></p><h6 class="card-text text-muted m-0 p-0 text-right">Rüya Tabirleri</h6></div></div><div class="card"><div class="card-body"><h2 class="card-title"><a href="/sarki-sozleri/sarki/bulent-ersoy/yuruyorum.html">Yürüyorum</a></h2><p class="card-text"> Karlı dağların ardında Yara doğru yürüyorum Yunusun feyza aldığı Yere doğru yürüyorum   H... <a href="/sarki-sozleri/sarki/bulent-ersoy/yuruyorum.html">(devamı)</a></p><h6 class="card-text text-muted m-0 p-0 text-right">Şarkı Sözleri</h6></div></div></div></div><div class="row text-center bg-light mx-0 my-3 p-2"><div class="col-12">Agrega &copy; 2018</div></div></div>';

window.onload=function() {
    var content = document.body.innerHTML;
    document.body.innerHTML = before + content + after;

    addAssets();
}