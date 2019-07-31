const _ = (function(){
    'use strict'
    const methods ={};
    methods.get = function(_selector,element){
        if(!_selector) throw new Error('Provide Selector')
        return element?element.querySelector(_selector):document.querySelector(_selector);
    }
    methods.getAll = function(_selector,element){
        if(!_selector) throw new Error('provide Selector');
        return element?element.querySelectorAll(_selector):document.querySelectorAll(_selector);
    }
    methods.on = function(element,eventType,method,useCapture){
        if(!element) throw new Error('provide element to attach event listener');
        if(!eventType) throw new Error('provide event type');
        if(!method || typeof method !== 'function') throw new Error('provide event method or valid method');
        element.addEventListener(eventType,method,useCapture||false);
    }
    return methods;
})();