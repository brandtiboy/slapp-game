var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');


game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('regler', reglerState);

game.state.add('bane1', bane1State);
game.state.add('bane2', bane2State);
game.state.add('baner', banerState);

game.state.start('load');