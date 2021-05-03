game.health_bar_entity = me.Renderable.extend(
{
  init: function(hitPoints, maxHitPoints, hp_pos_x, hp_pos_y)
  {
    this.offsetPosX = 10;
    this.offsetPosY = -4;
    this._super(me.Renderable, "init", [hp_pos_x + this.offsetPosX, hp_pos_y + this.offsetPosY, 40, 5]);
    this.z = 100;
    this.hitPoints = hitPoints;
    this.maxHitPoints = maxHitPoints;
    this.health = 1;
    this.currentHealth = 1;
    this.setPlayerHealthBar(hitPoints);
    this.borderColor = '#000';
    this.alwaysUpdate = false;
  },
      
  drawHealthBarPosition : function(hp_posX, hp_posY)
  {
    this.pos.x = hp_posX + this.offsetPosX;
    this.pos.y = hp_posY + this.offsetPosY;
  },
      
  draw : function(renderer)
  {
    if(this.health >= 0)
    {  
      renderer.setColor(this.borderColor);
      renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);;
      renderer.setColor('#F00');
      renderer.fillRect(this.pos.x+1, this.pos.y+1, this.width-2, this.height-2);
      renderer.setColor('#0F0');
      if(this.health > 1)
      {
        renderer.fillRect(this.pos.x+1, this.pos.y+1, this.width-2, this.height-2);
      }
      else
      {
        renderer.fillRect(this.pos.x+1, this.pos.y+1, (this.width-2)*this.health, this.height-2);
      }
    }  
  },
       
  update : function() 
  {
    if(this.updateOnce)
    {
      this.updateOnce = false;
      return true;
    }
    if(this.health == this.currentHealth)
    {
      return false;
    }
    this.health = this.currentHealth;
    return true;
  },
      
  setPlayerHealthBar: function(hitPoints)
  {
    this.currentHealth = hitPoints/this.maxHitPoints;
  },
      
  setCurrentAnimation: function()
  {
    //do nothing
  },
      
  setAnimationFrame: function(blarg)
  {
    //do nothing
  }
});