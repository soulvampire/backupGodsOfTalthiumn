game.dust_trail = me.Renderable.extend(
{ 
  init: function(playerPosX, playerPosY) 
  {
    // create a new emitter
    this.dustemitter = new me.ParticleEmitter(playerPosX, playerPosY);

    // start the emitter with pre-defined params
    this.startDustTrails(playerPosX, playerPosY);
    
    // add the emitter to game
    me.game.world.addChild(this.dustemitter,100);
  },

  /*******************************/
  /* dust particle emitter start */
  /*******************************/
  startDustTrails: function(player_xPos, player_yPos)
  {
    this.dustemitter.image = me.loader.getImage("dust_particle");
    //this.playerdustemitter.totalParticles = 5;
    this.dustemitter.angle = null;
    this.dustemitter.width = 10;
    this.dustemitter.minLife = 250;
    this.dustemitter.maxLife = 500;
    this.dustemitter.speedVariation = 0;
    this.dustemitter.angleVariation = 1.52;
    this.dustemitter.gravity = 0.1,
    this.dustemitter.wind = 0.02,
    this.dustemitter.floating = false;
    this.dustemitter.frequency = 10;
    this.dustemitter.duration = 250;
    this.dustemitter.pos.set(player_xPos, player_yPos);
  },

  displayDustTrails: function(player_xPos, player_yPos, player_direction)
  {
    if (player_direction === "player_facing_left")
    {
      this.dustemitter.angle = -0.000;
      this.dustemitter.pos.set(Math.floor(player_xPos) + 10, Math.floor(player_yPos) + 53);
    }
    else if ((player_direction === "player_facing_right"))
    {
      this.dustemitter.angle = 3.142;
      this.dustemitter.pos.set(Math.floor(player_xPos) + 10, Math.floor(player_yPos) + 53);
    }
    else if ((player_direction === "player_crawl_left"))
    {
      this.dustemitter.angle = -0.000;
      this.dustemitter.pos.set(Math.floor(player_xPos) + 10, Math.floor(player_yPos) + 22);
    }
    else if ((player_direction === "player_crawl_right"))
    {
      this.dustemitter.angle = 3.142;
      this.dustemitter.pos.set(Math.floor(player_xPos) + 10, Math.floor(player_yPos) + 22);
    }
    this.dustemitter.totalParticles = me.Math.random(3, 7)// random number between 5 and 10;
    this.dustemitter.maxParticles = me.Math.random(3, 7)// random number between 5 and 10
    this.dustemitter.burstParticles();
  },

  removePlayerDustTrails: function() 
  {
    // remove the emitter from game		
    me.game.world.removeChild(this.dustemitter);
  }
});