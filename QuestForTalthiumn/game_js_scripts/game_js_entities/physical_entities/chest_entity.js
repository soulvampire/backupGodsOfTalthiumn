/****************/
/* chest entity */
/****************/
game.chest_entity = me.Entity.extend(
{
    /***************/
    /* constructor */
    /***************/
    init: function(x, y, settings) 
    {
        /*************************************************************/
        /* Store the color of the key based on the tiled information */
        /*************************************************************/
        this.chest_colour = game.parseColor(settings.chest_colour);
        this.referenced_chest_number = settings.referenced_chest_number;
  
        settings.image = "rpg_item_chest";
        settings.framewidth = 32;
        settings.frameheight = 32;
        settings.anchorPoint = new me.Vector2d(0.5, 0.5);

        /************************/
        /* Call the constructor */
        /************************/
        this._super(me.Entity, 'init', [x, y, settings]);
        this.name = "item_chest";
  
        /***************************/
        /* chest closed by default */
        /***************************/
        this.chest_lid_closed = true;
  
        // Fix the chest on the map.
        this.body.setVelocity(0, 0);
        this.body.setMaxVelocity(0, 0);
        this.body.garavity = 0;
        this.body.collisionType = me.collision.types.ACTION_OBJECT;
  
         // ALWAYS update.
        this.alwaysUpdate = true;
  
        // Calculate the correct frame line.
        this.number_of_frames = 2;
        this.frame_line = this.number_of_frames * this.chest_colour;
  
        // Add animations.
        this.renderable.addAnimation("chest_closed", [0 + this.frame_line]);
        this.renderable.addAnimation("chest_opened", [1 + this.frame_line]);
        
        // chest closed by default
        this.renderable.setCurrentAnimation("chest_closed");
    },
  
    /***************************************/
    /* open chest with collected chest key */
    /***************************************/
    chest_open : function() 
    {
        // If the chest is locked.
        if (this.chest_lid_closed) 
        {
            const chest_index = game.data.obtained_keys.indexOf(this.chest_colour);
            if (chest_index > -1) 
            {
                /************************************************/
                /* Remove the key from the global obtained keys */
                /************************************************/
                game.data.obtained_keys.splice(chest_index, 1);
                /********************/
                /* open chest image */
                /********************/
                if (!this.renderable.isCurrentAnimation('chest_opened')) 
                {
                    this.renderable.setCurrentAnimation('chest_opened');
                }
                this.chest_closed = false;
                // Enable, show the inner key.
                game.game_keys.filter(game_keys => game_keys.game_key_number === this.game_key_number)[0].key_enable();
                me.timer.setTimeout(() => { this.body.collisionType = me.collision.types.NO_OBJECT; }, 500);
                return true;
            }
        }
        return false;
    },

    /*****************/
    /* entity update */
    /*****************/
    update : function(dt) 
    {
        // Apply physics to the body (this moves the entity).
        this.body.update(dt);
  
        // Handle collisions against other shapes.
        me.collision.check(this);
  
        // Return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]));
    },
  
    /*********************/
    /* collision handler */
    /*********************/
    onCollision : function()
    {
        // Make all other objects solid.
        return false;
    }
  });