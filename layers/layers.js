var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_nynta_population_density_1 = new ol.format.GeoJSON();
var features_nynta_population_density_1 = format_nynta_population_density_1.readFeatures(json_nynta_population_density_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nynta_population_density_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nynta_population_density_1.addFeatures(features_nynta_population_density_1);
var lyr_nynta_population_density_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nynta_population_density_1, 
                style: style_nynta_population_density_1,
                popuplayertitle: "nynta_population_density",
                interactive: true,
    title: 'nynta_population_density<br />\
    <img src="styles/legend/nynta_population_density_1_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/nynta_population_density_1_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/nynta_population_density_1_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/nynta_population_density_1_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/nynta_population_density_1_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/nynta_population_density_1_5.png" /> >100000<br />'
        });

lyr_Positron_0.setVisible(true);lyr_nynta_population_density_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_nynta_population_density_1];
lyr_nynta_population_density_1.set('fieldAliases', {'fid': 'fid', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CountyFIPS': 'CountyFIPS', 'NTACode': 'NTACode', 'NTAName': 'NTAName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Population': 'Population', 'Density': 'Density', });
lyr_nynta_population_density_1.set('fieldImages', {'fid': 'Hidden', 'BoroCode': 'Hidden', 'BoroName': 'TextEdit', 'CountyFIPS': 'Hidden', 'NTACode': 'TextEdit', 'NTAName': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Population': 'Range', 'Density': 'TextEdit', });
lyr_nynta_population_density_1.set('fieldLabels', {'BoroName': 'inline label - always visible', 'NTACode': 'inline label - always visible', 'NTAName': 'inline label - always visible', 'Population': 'inline label - always visible', 'Density': 'inline label - always visible', });
lyr_nynta_population_density_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});