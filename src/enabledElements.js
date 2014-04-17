var cornerstone = (function (cornerstone) {

    "use strict";

    if(cornerstone === undefined) {
        cornerstone = {};
    }

    var enabledElements = [];

    function getEnabledElement(element) {
        if(element === undefined) {
            throw "getEnabledElement: parameter element must not be undefined";
        }
        for(var i=0; i < enabledElements.length; i++) {
            if(enabledElements[i].element == element) {
                return enabledElements[i];
            }
        }

        throw "element not enabled";
    }

    function addEnabledElement(enabledElement) {
        if(enabledElement === undefined) {
            throw "getEnabledElement: enabledElement element must not be undefined";
        }

        enabledElements.push(enabledElement);
    }

    function removeEnabledElement(element) {
        if(element === undefined) {
            throw "getEnabledElement: element element must not be undefined";
        }

        for(var i=0; i < enabledElements.length; i++) {
            if(enabledElements[i].element === element) {
                enabledElements[i].element.removeChild(enabledElements[i].canvas);
                enabledElements.splice(i, 1);
                return;
            }
        }
    }

    // module/private exports
    cornerstone.getEnabledElement = getEnabledElement;
    cornerstone.addEnabledElement = addEnabledElement;
    cornerstone.removeEnabledElement = removeEnabledElement ;

    return cornerstone;
}(cornerstone));