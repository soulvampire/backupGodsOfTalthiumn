/************************/
/* floating text entity */
/************************/
game.generic_floating_text_renderable = me.Renderable.extend(
  {
    /***************/
    /* constructor */
    /***************/
    init: function(floating_text_string, floating_text_position_x,floating_text_position_y) 
    {
      /**************************/
      /* generic text font/size */
      /**************************/
      this.floating_text = new me.BitmapText(0, 0, {
        font: "amble_bold",
        size: 1.2,
        textAlign: "top",
        textBaseline: "bottom"
      });

      this.tween_finsihed = false;
      this.opacity = 1;
      this.floating_text_position_x = floating_text_position_x;
      this.floating_text_position_y = floating_text_position_y;
      this.floating_text_string = floating_text_string;

      this.floating_text_end_position_y = this.floating_text_position_y - 60;
      this._super(me.Renderable, "init", [this.floating_text_position_x, this.floating_text_position_y, 0, 0]);
      me.game.world.addChild(this);
    },

    /*********************************/
    /* bit mapped font draw function */
    /*********************************/
    draw : function(renderer) 
    {
      /******************************************/
      /* tween to allow the slow fading of text */
      /******************************************/
      new me.Tween(this)
        .to({ floating_text_position_y: this.floating_text_end_position_y }, 450)
        .easing(me.Tween.Easing.Exponential.InOut)
        .onComplete(function() { this.tween_finsihed = true; })
        .start()
      if (!this.tween_finsihed)
      { 
        this.opacity = this.opacity - 0.036;
        this.floating_text.draw(renderer, this.floating_text_string, this.floating_text_position_x + 5, this.floating_text_position_y - 5);
        this.floating_text.setOpacity(this.opacity);
      }
      else
      {
        me.game.world.removeChild(this);
        this.floating_text.setOpacity(1);
        this.tween_finsihed = false;
      }  
    }
  });
    