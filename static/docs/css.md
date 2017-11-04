# css 变量

1. CSS颜色函数

CSS Color Module Level 4的颜色配置函数有：color()、gray()、hsl()、hwb()等，这些函数浏览器暂时不支持，实际开发需要引入第三方插件（postcss/cssnext）来做预处理。

color-mod()函数详解：

color-mod() = color(#29B4F0 a() s() h() l() tint() shade() w() b() contrast());

调用语法：

`color(#29B4F0 a() s() h() l() tint() shade() w() b() contrast() blend())`

第一个参数基准色值，必须设定；

第二个参数及后面的参数为可选参数，这些参数的详细含义如下：

a-alpha，透明度，值为百分比；
b-blackness，黑度，值为百分比；
blend，混合度，值为百分比;
contrast，对比度，值为百分比；    
h-hue，色相-色彩的第一属性，色彩的相貌区别；0-360deg，0和360是红色，接近120的是绿色，240是蓝色；
l-lightness，明度，亮度-色彩的第二属性，表明色彩的明暗性质； 0%是最暗，50%均值，100%最亮。
s-saturation，纯度，饱和度-色彩的第三属性，表明色彩的鲜灰程度；0%是灰度，100%饱和度最高 ;
shade，暗度，值为百分比；
tint，色调，值为百分比；
w-whiteness，白度，值为百分比；