function navigate(path){
    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();
    url += '/game/pages/' + path + '/' + path + '.html';
    window.location.href =   url;
}

function navigateBack() {
    window.history.back();
}
