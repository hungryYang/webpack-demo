import _ from 'lodash'
import $ from 'jquery'
function component () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['helloa','webpack'], ' ');

    return element;
}

document.body.appendChild(component());
