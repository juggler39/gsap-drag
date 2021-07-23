document.addEventListener('DOMContentLoaded', function () {
    init();
});

function init() {
    const gridContainer = document.getElementById('gridContainer');
    Draggable.create('.moveAble', {
        bounds: gridContainer,
        edgeResistance: 0.75,
        cursor: 'pointer',
        type: "rotation",
    });
}
