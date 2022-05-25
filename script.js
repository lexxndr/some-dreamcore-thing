var titles = ['why are you here?','wh# aR3 you! here??','wh##4y ar#$ you HEre?!','w47hy areeee3?','.','get out..!']
setInterval(() => {document.title = titles[1]},400);
setInterval(() => {document.title = titles[1]},500);
setInterval(() => {document.title = titles[2]},600);
setInterval(() => {document.title = titles[3]},700);
setInterval(() => {document.title = titles[4]},800);
setInterval(() => {document.title = titles[5]},900);

window.onload = function() {
    document.getElementById("audio").play();
}