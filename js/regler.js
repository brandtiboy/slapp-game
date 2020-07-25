var reglerState = {
    
    create: function(){
        game.add.image(0, 0, 'background');
        
        this.music = game.add.audio('music'); 
        this.music.loop = true; 
        this.music.play();
        
        this.instruksLyd = game.add.audio('instruks_lyd');
        this.instruksLyd.play();
        
        var box = game.add.image(400, 10, 'textbox');
        box.anchor.x = 0.5;
         
         var instruktionsLabel = game.add.text(100, 80, 
            'For at vinde spillet skal du styre uden om forhindringerne og samle \nbogstaverne så ordet bliver stavet rigtigt. \nHvis du ikke kan gætte hvilket ord du skal stave kan du trykke på \nhint knappen og få et hint til hvilket dyr det er. \nTryk på piletasterne for at styre figuren rundt og undgå at blive \nfanget af fjenderne.',
            { font: '20px Arial', fill: '#ffffff' }); 
         //instruktionsLabel.anchor.setTo(0.5, 0.5);
        
        this.menuButton = game.add.button(150, 300, 'startknap', this.menu, this, 1, 2);
        this.startButton = game.add.button(450, 300, 'startknap', this.start, this, 1, 2);
        
        var startLabel = game.add.text(250, 335, 'MENU', {font: '25px Arial', fill: '#ffffff' });
        startLabel.anchor.setTo(0.5, 0.5);
        var startLabel = game.add.text(550, 335, 'START', {font: '25px Arial', fill: '#ffffff' });
        startLabel.anchor.setTo(0.5, 0.5);
         
         
     },
    
    start: function() { 
        game.state.start('bane1');
        this.instruksLyd.stop();
        this.music.stop();

    },
    
    menu: function(){
        game.state.start('menu');
        this.instruksLyd.stop();
        this.music.stop();
           
    }

    
    
};