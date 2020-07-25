var banerState = {
    create: function(){
        game.add.image(0, 0, 'background')
        
        this.music = game.add.audio('music'); 
        this.music.loop = true; 
        this.music.play();
        
        var baneLabel = game.add.text(266, 200, 'BANE 1', {font: '25px Arial', fill: '#ffffff' });
        baneLabel.anchor.setTo(0.5, 0.5);
        
        var baneLabel = game.add.text(533, 200, 'BANE 2', {font: '25px Arial', fill: '#ffffff' });
        baneLabel.anchor.setTo(0.5, 0.5);
        
        this.bane1Button = game.add.button(266, 220, 'bane1_billede', this.startbane1, this);
        this.bane1Button.anchor.x = 0.5; this.bane1Button.anchor.y = 0; 
        this.bane2Button = game.add.button(533, 220, 'bane2_billede', this.startbane2, this);
        this.bane2Button.anchor.x = 0.5; this.bane2Button.anchor.y = 0; 
        
        var menuknap = this.menuButton = game.add.button(400, 520, 'startknap', this.menu, this, 1, 2);
        menuknap.anchor.x = 0.5;
        
        var startLabel = game.add.text(400, 555, 'MENU', {font: '25px Arial', fill: '#ffffff' });
        startLabel.anchor.setTo(0.5, 0.5);

    },
    
    menu: function(){
        game.state.start('menu');
        this.music.stop();
        this.startLyd.stop();
    },
    
    startbane1: function(){
        game.state.start('bane1');
        this.music.stop();
        
    },
            
    startbane2: function(){
        game.state.start('bane2');
        this.music.stop();
        
    },    
}