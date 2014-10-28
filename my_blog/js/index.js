$(document).ready(function() {
    init_full_page();
    init_circliful();
    init_capital_letter();
});

function init_full_page(){
    $("#fullpage").fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#C1C1C1'],
        anchors: ['Blog', 'Note', 'Book', 'Contact'],
        slidesNavigation: true,
        menu: '#menu',
        navigation: true,
        navigationTooltips: ['Blog','Note','Book','Contact']
    });
}

function init_circliful(){
    $('#ruby_on_rails').circliful();
    $('#javascript').circliful();
    $('#linux').circliful();
    $('#git').circliful();
    $('#other').circliful();
}

function init_capital_letter(){
    $('.Contact div.article >  p').CapitalLetter({
        'color': '#02AD08',
        'font-family': 'kaushan_scriptregular',
        'margin-right': '0.3em'
    });
}
