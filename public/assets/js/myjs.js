function svgMap() {
    const element = document.querySelector('#svg-turkey-map');
    const info = document.querySelector('.city-names');

    element.addEventListener(
        'mouseover',
        function(event) {

            if (event.target.tagName === 'path') {
                info.innerHTML = [
                    '<div>',
                    event.target.parentNode.getAttribute('data-cityname'),
                    '</div>'
                ].join('');
            }
        }
    );

    element.addEventListener(
        'mousemove',
        function(event) {
            info.style.top = event.pageY + 25 + 'px';
            info.style.left = event.pageX + 'px';
        }
    );

    element.addEventListener(
        'mouseout',
        function(event) {
            info.innerHTML = '';
        }
    );

    element.addEventListener(
        'click',
        function(event) {
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');

                const cityName = parent.getAttribute('data-cityname');
                alert(`İl: ${cityName}`);
            }
        }
    );
}

svgMap();