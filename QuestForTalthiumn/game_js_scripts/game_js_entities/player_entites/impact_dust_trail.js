game.impact_dust_trail = me.Renderable.extend(
  { 
    init: function(playerPosX, playerPosY) 
    {
      // create a new emitter
      this.playerimpactdustemitter = new me.ParticleEmitter(playerPosX, playerPosY);
  
      // start the emitter with pre-defined params
      this.configureImpactDustTrails();
      
      // add the emitter to game
      me.game.world.addChild(this.playerimpactdustemitter,100);
    },
  
    /*******************************/
    /* dust particle emitter start */
    /*******************************/
    configureImpactDustTrails: function()
    {
      this.playerimpactdustemitter.image = me.loader.getImage("dust_particle");
      this.playerimpactdustemitter.angle = null;
      this.playerimpactdustemitter.width = 22;
      this.playerimpactdustemitter.minLife = 500;
      this.playerimpactdustemitter.maxLife = 1000;
      this.playerimpactdustemitter.speedVariation = 0;
      this.playerimpactdustemitter.angleVariation = 1.52;
      this.playerimpactdustemitter.gravity = 0.15,
      this.playerimpactdustemitter.wind = 0.02,
      this.playerimpactdustemitter.floating = false;

      this.playerimpactdustemitter.frequency = 10;
      this.playerimpactdustemitter.duration = 250;
    },
  
    displayImpactDustTrails: function(player_xPos, player_yPos)
    {
      this.playerimpactdustemitter.angle = 1.570;
      this.playerimpactdustemitter.totalParticles = me.Math.random(3, 7)// random number between 5 and 10;
      this.playerimpactdustemitter.maxParticles = me.Math.random(3, 7)// random number between 5 and 10
      this.playerimpactdustemitter.pos.set(Math.floor(player_xPos), Math.floor(player_yPos));
      this.playerimpactdustemitter.burstParticles();
    },
  
    removeImpactDustTrails: function() 
    {
      // remove the emitter from game		
      me.game.world.removeChild(this.playerimpactdustemitter);
    }
  });