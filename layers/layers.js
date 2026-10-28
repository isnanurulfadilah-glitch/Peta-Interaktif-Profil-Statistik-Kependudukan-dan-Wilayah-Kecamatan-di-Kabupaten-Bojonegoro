var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KlasifikasiKepadatanPendudukKabBojonegoro_2 = new ol.format.GeoJSON();
var features_KlasifikasiKepadatanPendudukKabBojonegoro_2 = format_KlasifikasiKepadatanPendudukKabBojonegoro_2.readFeatures(json_KlasifikasiKepadatanPendudukKabBojonegoro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlasifikasiKepadatanPendudukKabBojonegoro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlasifikasiKepadatanPendudukKabBojonegoro_2.addFeatures(features_KlasifikasiKepadatanPendudukKabBojonegoro_2);
var lyr_KlasifikasiKepadatanPendudukKabBojonegoro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlasifikasiKepadatanPendudukKabBojonegoro_2, 
                style: style_KlasifikasiKepadatanPendudukKabBojonegoro_2,
                popuplayertitle: 'Klasifikasi Kepadatan Penduduk Kab Bojonegoro',
                interactive: true,
    title: 'Klasifikasi Kepadatan Penduduk Kab Bojonegoro<br />\
    <img src="styles/legend/KlasifikasiKepadatanPendudukKabBojonegoro_2_0.png" /> Sangat Rendah (30.370-44.606 Jiwa)<br />\
    <img src="styles/legend/KlasifikasiKepadatanPendudukKabBojonegoro_2_1.png" /> Rendah (44.606-57.336 Jiwa)<br />\
    <img src="styles/legend/KlasifikasiKepadatanPendudukKabBojonegoro_2_2.png" /> Sedang (57.336-61.717 Jiwa)<br />\
    <img src="styles/legend/KlasifikasiKepadatanPendudukKabBojonegoro_2_3.png" /> Tinggi (61.717-84.775 Jiwa)<br />\
    <img src="styles/legend/KlasifikasiKepadatanPendudukKabBojonegoro_2_4.png" /> Sangat Tinggi (84.775-121.121 Jiwa)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_KlasifikasiKepadatanPendudukKabBojonegoro_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_KlasifikasiKepadatanPendudukKabBojonegoro_2];
lyr_KlasifikasiKepadatanPendudukKabBojonegoro_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Join_No': 'Join_No', 'Join_Luas': 'Luas Wilayah', 'Join_Jumla': 'Jumlah Desa', 'Join_Pendu': 'Jumlah Penduduk', 'Join_Kepad': 'Jumlah Kepadatan', 'Join_Luas (ha)': 'Join_Luas (ha)', 'Join_Jumlah Desa/Kel': 'Join_Jumlah Desa/Kel', 'Join_Penduduk (ribu)': 'Join_Penduduk (ribu)', 'Join_Kepadatan Penduduk (per km2)': 'Join_Kepadatan Penduduk (per km2)', });
lyr_KlasifikasiKepadatanPendudukKabBojonegoro_2.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'UUPP': 'Hidden', 'luas': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Join_No': 'Hidden', 'Join_Luas': 'TextEdit', 'Join_Jumla': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Luas (ha)': 'Hidden', 'Join_Jumlah Desa/Kel': 'Hidden', 'Join_Penduduk (ribu)': 'Hidden', 'Join_Kepadatan Penduduk (per km2)': 'Hidden', });
lyr_KlasifikasiKepadatanPendudukKabBojonegoro_2.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Luas': 'inline label - always visible', 'Join_Jumla': 'inline label - always visible', 'Join_Pendu': 'inline label - always visible', 'Join_Kepad': 'inline label - always visible', });
lyr_KlasifikasiKepadatanPendudukKabBojonegoro_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});