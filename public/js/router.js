function _fireEvent(ctx, next){
    window.dispatchEvent(new CustomEvent('location-changed'));
}

var pages,room,tb,body;
function homeStyle(ctx, next){
    body.style.backgroundImage = "url(/img/bg.png)";
    tb.hidden = true;
    next();
}
function clearHomeStyle(ctx, next){
    body.style.backgroundImage = "none";
    tb.hidden = false;
    next();
}
window.addEventListener('WebComponentsReady', function(e) {
    console.log('Components are ready');

    pages = document.querySelector('#pages');
    room = document.querySelector('#x-room');
    tb = document.querySelector('paper-toolbar');
    body = document.querySelector('body');

    page('/', function(ctx, next){
        pages.select('x-door');
        next();
    }, homeStyle, _fireEvent);
    page('/random', function(ctx, next){
        pages.select('random-room');
        next();
    }, clearHomeStyle, _fireEvent);
    page('/room/:id', function(ctx, next){
        room.roomId = ctx.params.id;
        pages.select('x-room');
        next();
    }, clearHomeStyle, _fireEvent);
    page('*', function(ctx, next){
        pages.select('x-door');
        next();
    }, homeStyle, _fireEvent);

    page({
        hashbang: false
    });
});

