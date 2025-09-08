
var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

var matrix = "اً إً أً بً تً ثً جً حً خً دً ذً رً زً سً شً صً ضً طً ظً عً غً فً قً كً لً مً نً هـً وً يً" +
             "ٍ إٍ أٍ بٍ تٍ ثٍ جٍ حٍ خٍ دٍ ذٍ رٍ زٍ سٍ شٍ صٍ ضٍ طٍ ظٍ عٍ غٍ فٍ قٍ كٍ لٍ مٍ نٍ هـٍ وٍ يٍ" +
             "ٌ إٌ أٌ بٌ تٌ ثٌ جٌ حٌ خٌ دٌ ذٌ رٌ زٌ سٌ شٌ صٌ ضٌ طٌ ظٌ عٌ غٌ فٌ قٌ كٌ لٌ مٌ نٌ هـٌ وٌ يٌ" +
             "@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++)
    drops[x] = Math.floor(Math.random() * c.height / font_size);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#8b8b8bff";
    ctx.font = font_size + "px monospace";
    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 35);