game.mana_bar_entity = me.Renderable.extend(
{
    init: function(hitPoints, maxHitPoints, hp_pos_x, hp_pos_y)
    {
        this.offsetPosX = 10;
        this.offsetPosY = -10;
        this.hp_pos_x = hp_pos_x + this.offsetPosX;
        this.hp_pos_y = hp_pos_y + this.offsetPosY;
        this._super(me.Renderable, "init", [this.hp_pos_x, this.hp_pos_y, 40, 5]);
        this.z = 100;
        this.hitPoints = hitPoints;
        this.maxHitPoints = maxHitPoints;
        this.mana = 1;
        this.currentmana = 1;
        this.setPlayerManaBar(hitPoints);
        this.borderColor = '#000';
        this.alwaysUpdate = false;
    },
    
    drawManaBarPosition : function(hp_posX, hp_posY, mp_mana)
    {
        this.pos.x = hp_posX + this.offsetPosX;
        this.pos.y = hp_posY + this.offsetPosY;
    },
    
    draw : function(renderer)
    {
        if(this.mana >= 0)
        {  
            renderer.setColor(this.borderColor);
            renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);
            renderer.setColor('#F00');
            renderer.fillRect(this.pos.x+1, this.pos.y+1, this.width-2, this.height-2);
            renderer.setColor('#07F');
            if(this.mana >1)
                renderer.fillRect(this.pos.x+1, this.pos.y+1, this.width-2, this.height-2);
            else
                renderer.fillRect(this.pos.x+1, this.pos.y+1, (this.width-2)* this.mana, this.height-2);
        }  
    },
     
    update : function() 
    {
        if(this.updateOnce)
        {
            this.updateOnce = false;
            return true;
        }
        if(this.mana == this.currentmana)
            return false;
        this.mana = this.currentmana;
            return true;
    },
    
    setPlayerManaBar: function(hitPoints)
    {
	   this.currentmana = hitPoints/this.maxHitPoints;
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