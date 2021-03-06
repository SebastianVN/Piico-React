var gauge = new LinearGauge({ 
    renderTo : 'canvas-id' , 
    ancho : 120 , 
    altura : 400 , 
    unidades : "° C" , 
    minValue : 0 , 
    startAngle : 90 , 
    ticksAngle : 180 , 
    valueBox : false , 
    maxValue : 220 , 
    majorTicks : [ "0" , "20" , "40" , "60" , "80" , "100" , "120" , "140" , "160" , "180" , "200" , "220" ], 
    tics menores : 2 , 
    tics : verdadero , 
    destacados : [ { "de" : 100 , "a" : 220 , "color" : "rgba (200, 50, 50, .75)" } ],
    colorPlate : "#fff" , borderShadowWidth : 0 , 
    border : false , 
    needleType : "arrow" , 
    needleWidth : 2 , 
    needleCircleSize : 7 , 
    needleCircleOuter : true , 
    needleCircleInner : false , 
    animationDuration : 1500 , 
    animationRule : "linear" , 
    barWidth : 10 , 
    value : 35 }). dibujar();
    
var gauge = new RadialGauge ({ 
    renderTo : 'canvas-id' , 
    width : 300 , 
    height : 300 , 
    units : "° C" , 
    title : "Temperature" , 
    minValue : - 50 , 
    maxValue : 50 , 
    majorTicks : [ - 50 , - 40 , - 30 , - 20 , -10 , 0 , 10 , 20 , 30 , 40 , 50 ], 
    tics menores : 2 , 
    tics de trazo : verdadero , 
    resaltados : [ { "de" : - 50 , "a" : 0 , "color" : "rgba (0,0 , 255, .3) " }, { " de " : 0 , " a " : 50 , " color " : " rgba (255, 0, 0, .3) "}], 
    ticksAngle : 225 , 
    startAngle : 67.5 , 
    colorMajorTicks : "#ddd" , 
    colorMinorTicks : "#ddd" , 
    colorTitle : "#eee" , 
    colorUnits : "#ccc" , 
    colorNumbers : "#eee" , 
    colorPlate : "# 222 " , 
    borderShadowWidth : 0 , 
    bordes : verdadero , tipo 
    aguja : " flecha " ,           
    needleWidth : 2 , 
    needleCircleSize : 7 , 
    needleCircleOuter : verdadero , 
    needleCircleInner : falso , 
    animationDuration : 1500 , 
    animationRule : "lineal" , 
    colorBorderOuter : "# 333" , 
    colorBorderOuterEnd : "# 111" , 
    colorBorderMiddle : "# 222" , 
    colorBorderMiddleEnd : " # 111 " , 
    colorBorderInner :           "# 111" , 
    colorBorderInnerEnd : "# 333" , 
    colorNeedleShadowDown : "# 333" , 
    colorNeedleCircleOuter : "# 333" , 
    colorNeedleCircleOuterEnd : "# 111" , 
    colorNeedleCircleInner : "# 111" , 
    colorNeedleCircleInnerEnd : "# 222" , 
    valueBoxBorderRadius : 0 , 
    colorValueBoxRect : "# 222" , 
    colorValueBoxRectEnd : "# 333" }).dibujar ();