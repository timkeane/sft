var colors = {
  "Build It Back Multifamily": '#4789c6',
  "Hurricane Sandy Business Loan and Grant Program": 'yellow',
  "Public Housing - NYCHA": 'green',
  "Business PREP": 'purple',
};

function style(feature, resolution) {
  var zoom = nyc.ol.TILE_GRID.getZForResolution(resolution);
  var color = colors[feature.get('program')];
  return new ol.style.Style({
    image: new ol.style.Circle({
      radius: zoom / 3,
      fill: new ol.style.Fill({color: color}),
      stroke: new ol.style.Stroke({
        width: 2,
        color: 'black'
      })
    })
  });
};