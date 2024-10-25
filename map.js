function showMap(mapId) {
    const maps = document.querySelectorAll('.map');
    maps.forEach(map => {
        map.style.display = 'none';
    });
    const selectedMap = document.getElementById(mapId);
    if (selectedMap) {
        selectedMap.style.display = 'block';
    }
}