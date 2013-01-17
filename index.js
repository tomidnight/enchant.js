enchant();

var picNumber = 0;

window.onload = function() 
{
    var game = new Game(320, 480);
    
    game.preload('http://enchantjs.com/assets/images/chara5.gif');
    
    game.onload = function() {
        var bear = new Sprite(32, 32);
        bear.image =
            game.assets['http://enchantjs.com/assets/images/chara5.gif'];
        bear.frame = 0;
        game.preload('http://enchantjs.com/assets/images/chara5.gif');
        
        bear.addEventListener(Event.ENTER_FRAME, function(){
            picNumber++;
            if (picNumber > 8) {
                picNumber = 3;
            }
            bear.frame = picNumber;
            bear.y +=1;
        });
            game.rootScene.addChild(bear);
    };
        
        
        game.start();
};

