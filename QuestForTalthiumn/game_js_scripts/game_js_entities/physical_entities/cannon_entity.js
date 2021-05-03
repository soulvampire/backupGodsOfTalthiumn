/**
 * Cannon Entity.
 */
game.platform_cannon_entity = me.Entity.extend({

  /**
   * Constructor
   */
  init(x, y, settings) {
    // Set the proper image.
    settings.image = 'static_cannon';
    settings.framewidth = 64;
    settings.frameheight = 64;
    settings.anchorPoint = new me.Vector2d(0.5, 1);

    // Call the constructor.
    this._super(me.Entity, 'init', [x, y, settings]);

    this.name = 'platform_cannon';

    // Fix the cannon on the map.
    this.body.setVelocity(0, 0);
    this.body.setMaxVelocity(0, 0);
    this.body.garavity = 0;
    this.body.collisionType = me.collision.types.ACTION_OBJECT;

    // Turn on the updates.
    this.alwaysUpdate = true;

    // Add an idle and fire animation.
    this.renderable.addAnimation('idle', [0]);
    this.renderable.addAnimation('fire', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 200);

    this.renderable.setCurrentAnimation('idle');
  },

  /**
   * Open FIRE!
   */
  fire() {
    if (!this.renderable.isCurrentAnimation('fire')) {
      this.renderable.setCurrentAnimation('fire', 'idle');
    }
  },

  /**
   * Update the entity.
   */
  update(dt) {
    // apply physics to the body (this moves the entity).
    this.body.update(dt);

    // Handle collisions against other shapes.
    me.collision.check(this);

    // Return true if we moved or if the renderable was updated.
    return (this._super(me.Entity, 'update', [dt]));
  },

  /**
   * Collision handler.
   */
  onCollision(response, other) {
    switch (other.body.collisionType) {
      case me.collision.types.ENEMY_OBJECT:
        // If the cannonSpike is at the start (spawn) position.
        if (other.name === 'cannonSpike') {
          // Use the fire action.
          this.fire();
        }
        break;
      default:
        break;
    }
    // Make all other objects solid.
    return false;
  },
});
