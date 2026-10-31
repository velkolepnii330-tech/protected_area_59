var size = 0;
var placement = 'point';
function categories_O_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Государственный природный заповедник':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,53,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(60,127,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Национальный парк':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,53,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(26,161,101,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Природный парк':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,53,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(33,191,117,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Государственный природный заказник':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,53,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(246,144,63,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Природный биологический заказник':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,53,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(238,88,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Ботанический памятник природы':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,53,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(247,203,94,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Памятник природы':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,53,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(168,218,220,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Охраняемый ландшафт':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,53,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}),fill: new ol.style.Fill({color: 'rgba(200,200,140,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_O_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("protection");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_O_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
