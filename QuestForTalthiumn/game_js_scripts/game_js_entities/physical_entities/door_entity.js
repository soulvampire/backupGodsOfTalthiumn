/***************/
/* door entity */
/***************/
game.door_entity = me.Entity.extend({

    /***************/
    /* constructor */
    /***************/
    init : function(x, y, settings) 
    {
        this.door_locks = [];// array of all door locks
  
        /********************************************/
        /* Parse the right color code into padlocks */
        /********************************************/
        for (const door_lock_key in settings.door_lock) 
        {
            if (settings.door_lock.hasOwnProperty(door_lock_key)) 
            {
                this.door_locks.push(game.parseColor(settings.door_lock[door_lock_key]));
            }
        }
        
        this.door_number = settings.door_number;
    
        settings.image = "rpg_doors";
        settings.framewidth = 64;
        settings.frameheight = 64;
    
        // Change the hitbox.
        settings.anchorPoint = new me.Vector2d(0.5, 0.5);
        settings.shapes = [new me.Rect(27, 0, 11, 64)];
    
        // Call the constructor.
        this._super(me.Entity, 'init', [x, y, settings]);
    
        this.name = "castle_level_door";
        this.door_closed = true;
    
        this.alwaysUpdate = true;
    
        // Disable gravity.
        this.body.gravity = 0;
        this.body.setVelocity(1, 1);
    
        // Set renderable animations.
        this.renderable.addAnimation("door_closed", [0]);
        this.renderable.addAnimation("door_opened", [4]);
        this.renderable.addAnimation("door_opening", [0, 1, 2, 3, 4], 250);
    
        this.renderable.setCurrentAnimation("door_closed");
    },
  
    /*************/
    /* door open */
    /*************/
    door_open: function(removed_lock) 
    {
        // If the door is locked.
        if (this.door_closed) 
        {
            this.door_locks.splice(this.door_locks.indexOf(removed_lock), 1);
    
                if (this.door_locks.length === 0) 
                {
                    // Play the opening animation.
                    this.renderable.setCurrentAnimation("door_opening", () => {
                    this.renderable.setCurrentAnimation("door_opened");
                    // After this, the door will be opened no matter what.
                    this.door_closed = false;
        
                    // Turn off the collision.
                    this.body.setCollisionMask(me.collision.types.NO_OBJECT);
                });
            }
        }
    },

    /*****************/
    /* entity update */
    /*****************/
    update : function(dt) {
      // Apply physics to the body (this moves the entity).
      this.body.update(dt);
  
      // Handle collisions against other shapes.
      me.collision.check(this);
  
      // Return true if we moved or if the renderable was updated.
      return (this._super(me.Entity, 'update', [dt]));
    },
  
    /*********************/
    /* collision handler */
    /*********************/
    onCollision : function()
    {
        // Make all other objects non solid.
        return false;
    }
  });
  