function navigateGame(){
    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();
    url += '/game/pages/gamePage.html';
    window.location.href =   url;
}

function navigateTutorial(){
    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();
    url += '/game/pages/tutorial.html';
    window.location.href =   url;
}

function navigateAboutUs(){
    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();
    url += '/game/pages/aboutUs.html';
    window.location.href =   url;
}