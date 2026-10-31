var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_O_1 = new ol.format.GeoJSON();
var features_O_1 = format_O_1.readFeatures(json_O_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_O_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_O_1.addFeatures(features_O_1);
var lyr_O_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_O_1, 
                style: style_O_1,
                popuplayertitle: 'OОПТ',
                interactive: true,
    title: 'OОПТ<br />\
    <img src="styles/legend/O_1_0.png" /> Государственный природный заповедник<br />\
    <img src="styles/legend/O_1_1.png" /> Национальный парк<br />\
    <img src="styles/legend/O_1_2.png" /> Природный парк<br />\
    <img src="styles/legend/O_1_3.png" /> Государственный природный заказник<br />\
    <img src="styles/legend/O_1_4.png" /> Природный биологический заказник<br />\
    <img src="styles/legend/O_1_5.png" /> Ботанический памятник природы<br />\
    <img src="styles/legend/O_1_6.png" /> Памятник природы<br />\
    <img src="styles/legend/O_1_7.png" /> Охраняемый ландшафт<br />' });
var format_A_2 = new ol.format.GeoJSON();
var features_A_2 = format_A_2.readFeatures(json_A_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_2.addFeatures(features_A_2);
var lyr_A_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A_2, 
                style: style_A_2,
                popuplayertitle: 'Aдминистративные границы',
                interactive: true,
                title: '<img src="styles/legend/A_2.png" /> Aдминистративные границы'
            });
var format_H_3 = new ol.format.GeoJSON();
var features_H_3 = format_H_3.readFeatures(json_H_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_3.addFeatures(features_H_3);
var lyr_H_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_H_3, 
                style: style_H_3,
                popuplayertitle: 'Hаселённые пункты',
                interactive: false,
                title: '<img src="styles/legend/H_3.png" /> Hаселённые пункты'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_O_1.setVisible(true);lyr_A_2.setVisible(true);lyr_H_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_O_1,lyr_A_2,lyr_H_3];
lyr_O_1.set('fieldAliases', {'protection': 'Тип ООПТ', 'name': 'Название ООПТ', 'photo': 'photo', });
lyr_A_2.set('fieldAliases', {'name': 'Муницапальное образование', });
lyr_H_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'SETTLM_TYP': 'SETTLM_TYP', 'FULL_NAME': 'FULL_NAME', 'SHORT_NAME': 'SHORT_NAME', 'ID_ADM2': 'ID_ADM2', 'OKATO': 'OKATO', 'OKTMO': 'OKTMO', 'POP1963': 'POP1963', 'POP1981': 'POP1981', 'POP1989': 'POP1989', 'POP1993': 'POP1993', 'POP2010': 'POP2010', });
lyr_O_1.set('fieldImages', {'protection': 'TextEdit', 'name': 'TextEdit', 'photo': 'ExternalResource', });
lyr_A_2.set('fieldImages', {'name': 'TextEdit', });
lyr_H_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'SETTLM_TYP': 'TextEdit', 'FULL_NAME': 'TextEdit', 'SHORT_NAME': 'TextEdit', 'ID_ADM2': 'TextEdit', 'OKATO': 'TextEdit', 'OKTMO': 'TextEdit', 'POP1963': 'TextEdit', 'POP1981': 'TextEdit', 'POP1989': 'TextEdit', 'POP1993': 'TextEdit', 'POP2010': 'TextEdit', });
lyr_O_1.set('fieldLabels', {'protection': 'inline label - always visible', 'name': 'inline label - always visible', 'photo': 'no label', });
lyr_A_2.set('fieldLabels', {'name': 'no label', });
lyr_H_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'SETTLM_TYP': 'no label', 'FULL_NAME': 'no label', 'SHORT_NAME': 'no label', 'ID_ADM2': 'no label', 'OKATO': 'no label', 'OKTMO': 'no label', 'POP1963': 'no label', 'POP1981': 'no label', 'POP1989': 'no label', 'POP1993': 'no label', 'POP2010': 'no label', });
lyr_H_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});