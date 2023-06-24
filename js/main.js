// Draw zone
const result = document.getElementById('result');

// Fieldset Element
const flexDirectionFieldset = document.getElementById('flex-direction');
const justifyContentFieldSet = document.getElementById('justify-content');
const alignItemsFieldSet = document.getElementById('align-items');



// Actions events
flexDirectionFieldset.addEventListener('change', (e) => {
    changeClass(result, 'in-', e.target.value);
});


justifyContentFieldSet.addEventListener('change', (e) => {
    changeClass(result, 'justify-content-', e.target.value);
});

alignItemsFieldSet.addEventListener('change', (e) =>{
   changeClass(result, 'align-items-', e.target.value);
});

const changeClass = (htmlElement, prefix, newAlign) => {
    const regex = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');

    if(htmlElement.className.match(regex)){
        htmlElement.className = htmlElement.className.replace(regex, `${prefix}${newAlign} `);
    }

    return htmlElement;

}
