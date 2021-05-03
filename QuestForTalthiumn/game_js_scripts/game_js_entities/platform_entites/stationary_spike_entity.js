/***************************/
/* stationary spike entity */
/***************************/
game.stationary_spike_entity = me.Entity.extend(
{
    /***************/
    /* constructor */
    /***************/
    init: function(x, y, settings) 
    {
        this.spike_rotation_speed = settings.spike_rotation_speed;
        this.spike_hit_points = settings.spike_hit_points;
        settings.image = "platform_spike";
        settings.shapes = new me.Rect(0, 0, settings.framewidth, settings.frameheigh);

        /********************/
        /* call constructor */
        /********************/
        this._super(me.Entity, 'init', [x, y, settings]);
        this.name = 'stationary_spike';

        /**************************/
        /* default for all spikes */
        /**************************/
        this.body.setVelocity(0, 0);
        this.body.setMaxVelocity(0, 0);

        this.body.collisionType = me.collision.types.ENEMY_OBJECT;

        // ALWAYS update.
        this.alwaysUpdate = false;

        this.renderable.addAnimation( "stationary_rotating_spike", [ 0, 1, 2, 3, 4], this.spike_rotation_speed );
        this.renderable.setCurrentAnimation("stationary_rotating_spike");
    },

    /*****************/
    /* entity update */
    /*****************/
    update(dt) 
    {
        // apply physics to the body (this moves the entity).
        this.body.update(dt);

        // Handle collisions against other shapes.
        me.collision.check(this);

        // Return true if we moved or if the renderable was updated.
        return (this._super(me.Entity, 'update', [dt]));
    },

    /*********************/
    /* collision handler */
    /*********************/
    onCollision() 
    {
        // Make all other objects solid.
        return false;
    }
});
