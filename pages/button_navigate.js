function navigateGame(){
    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();
    url += '/pages/gamePage.html';
    window.location.href =   url;
}

function navigateTutorial(){
    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();
    url += '/pages/tutorial.html';
    window.location.href =   url;
}

function navigateAboutUs(){
    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();
    url += '/pages/aboutUs.html';
    window.location.href =   url;
}