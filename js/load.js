var loadState = {
    preload: function(){
        game.load.image('background','assets/menubillede.jpg');
        game.load.image('tileset', 'assets/tilesets/tileset.png');
        game.load.tilemap('map', 'assets/maps/map1/map.json', null,
            Phaser.Tilemap.TILED_JSON);
         game.load.image('tileset1', 'assets/tilesets/tileset.png');
        game.load.tilemap('map2', 'assets/maps/map2/map.json', null,
            Phaser.Tilemap.TILED_JSON);
        game.load.image('startknap', 'assets/knap_menu3.png', 208, 73);
        game.load.image('eksbane', 'assets/eksbane1.png');
        game.load.image('bane1_billede', 'assets/bane1_ny.png');
        game.load.image('bane2_billede', 'assets/bane2_ny.png');
        game.load.image('textbox', 'assets/textbox5.png');
        game.load.image('gamebg', 'assets/gamebg.jpg');
        //game.load.image('player', 'assets/player.png');
        //game.load.image('enemy', 'assets/enemy.png');
        game.load.image('a', 'assets/a.png');
        game.load.image('b', 'assets/b.png');
        game.load.image('e', 'assets/e.png');
        game.load.image('h', 'assets/h.png');
        game.load.image('s', 'assets/s.png');
        game.load.image('t', 'assets/t.png');
        game.load.image('hint', 'assets/hint.png');
        //game.load.image('pause', 'assets/pause.png');
        //game.load.image('lyd', 'assets/lyd.png');
        //game.load.image('lyd0', 'assets/lyd0.png');
        game.load.image('abe_billede', 'assets/abe.png');
        game.load.image('hest_billede', 'assets/Hest.png');
        game.load.spritesheet('startknap', 'assets/knap_menu3.png', 208, 73);
        game.load.spritesheet('lyd_spritesheet', 'assets/lyd_spritesheet.png', 59, 57);
        game.load.spritesheet('pause_spritesheet', 'assets/pause_spritesheet.png', 58, 57);
        game.load.image('menuKnap', 'assets/menuKnap.png');
        game.load.image('monster', 'assets/monster1.png');
        game.load.spritesheet('player', 'assets/player2.png', 30, 45);
        
        game.load.audio('music', 'assets/menu-musik.mp3');
        game.load.audio('map1', ['assets/musik/sunny.ogg', 'assets/musik/sunny.mp3']);
        game.load.audio('saml', ['assets/voiceover/saml.ogg', 'assets/voiceover/saml.mp3']);
        game.load.audio('abe_lyd', ['assets/abe_lyd.ogg', 'assets/abe_lyd.mp3']);
        game.load.audio('hest_lyd', ['assets/hest_lyd.ogg', 'assets/hest_lyd.mp3']);
        game.load.audio('instruks_lyd', ['assets/instruks_lyd.ogg', 'assets/instruks_lyd.mp3']);
        game.load.audio('start_lyd', ['assets/start_lyd.ogg', 'assets/start_lyd.mp3']);
        game.load.audio('baneskift_lyd', ['assets/baneskift.ogg', 'assets/baneskfit.mp3']);
        
    },
  
    create: function(){
        game.state.start('menu');
    }
};