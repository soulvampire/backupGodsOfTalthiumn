game.player_level_icon_entity = me.Renderable.extend(
{
    init: function(hp_pos_x, hp_pos_y)
    {
        this.offsetPosX = -24;
        this.offsetPosY = -14;
        this.hp_pos_x = hp_pos_x + this.offsetPosX;
        this.hp_pos_y = hp_pos_y + this.offsetPosY;
        this._super(me.Renderable, "init", [this.hp_pos_x, this.hp_pos_y, 15, 15]);
        this.z = 100;
        this.borderColor = '#000';
        this.alwaysUpdate = false;
    },
    
    drawPlayerLevelIconPosition: function(hp_posX, hp_posY)
    {
        this.pos.x = hp_posX + this.offsetPosX;
        this.pos.y = hp_posY + this.offsetPosY;
    },
    
    draw: function(renderer)
    {
        renderer.setColor(this.borderColor);
        renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);;
        renderer.setColor('#F00');
        renderer.fillRect(this.pos.x+1, this.pos.y+1, this.width-2, this.height-2);
        renderer.setColor('#0F0');
    },
    
    update: function() 
    {
        if(this.updateOnce)
        {
            this.updateOnce = false;
            return true;
        }
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