import L, { map } from 'leaflet';

export function createAreaTooltip(layer,map) {
    if (layer.areaTooltip) {
      return;
    }
  
    layer.areaTooltip = L.tooltip({
      permanent: true,
      direction: "center",
      className: "area-tooltip",
    });
  
    layer.on("remove", function (event) {
      layer.areaTooltip.remove();
    });
  
    layer.on("add", function (event) {
      updateAreaTooltip(layer);
      layer.areaTooltip.addTo(map);
    });
  
    if (map.hasLayer(layer)) {
      updateAreaTooltip(layer);
      layer.areaTooltip.addTo(map);
    }
}

export function updateAreaTooltip(layer,map) {
    var area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
    var readableArea = L.GeometryUtil.readableArea(area, true);
    var latlng = layer.getCenter();
  
    layer.areaTooltip.setContent(readableArea).setLatLng(latlng);
  }