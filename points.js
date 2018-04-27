// Голова
var x = Math.round(canvas.width / 2);
var y = Math.round((canvas.height - l*8) / 2);

// Плечи
var sx = x;
var sy = y + l + Math.round(l/3);


// Левый локоть
var elx = sx - Math.round(l * 2/3);
var ely = sy + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(sx-elx, 2)));
// Левая рука
var hlx = elx + Math.round(l/6);
var hly = ely + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(elx-hlx, 2)));

// Правый локоть
var erx = sx + Math.round(l * 2/3);
var ery = sy + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(sx-erx, 2)));
// Правая рука
var hrx = erx - Math.round(l/6);
var hry = ery + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(elx-hrx, 2)));


// Таз
var px = sx;
var py = sy + l*3;


// Левое колено
var klx = px - Math.round(l/3);
var kly = py + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(px-klx, 2)));
// Левая ступня
var flx = klx;
var fly = kly + l*2;

// Правое колено
var krx = px + Math.round(l/3);
var kry = py + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(px-krx, 2)));
// Правая ступня
var frx = krx;
var fry = kry + l*2;