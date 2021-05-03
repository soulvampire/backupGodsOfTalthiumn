/************************/
/* window dialog entity */
/************************/
game.dialog_window = function dialog_window(script, callback) {
  background = game.getImage("dialog_window");
  font = new me.BitmapText(0, 0, {
    font: "amble_bold",
    size: 1.0,
    textAlign: "top",
    textBaseline: "bottom"
  });
};

/*****************/
/* dialog object */
/*****************/
game.dialog_object = Entity.extend(
{
  init: function (x, y)  
  {
    settings = {};
    settings.image = background;
  }
});