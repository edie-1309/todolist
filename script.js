const card = document.querySelector('.card');
const wrapper = document.querySelector('.wrapper');
const addlist = document.querySelector('.add-list');

wrapper.addEventListener('click', function(e) {
    if(e.target.className == 'icofont-ui-add') {
        // const list = document.createElement('div');
        // list.classList.add('list');
    
        // const listP = document.createElement('p');
        // const listText = document.createTextNode('Ini list baru');
        // listP.classList.add('list-text');
    
        // const deleteIcon = document.createElement('i');
        // deleteIcon.classList.add('icofont-ui-delete');
    
        // listP.appendChild(listText);
    
        // list.appendChild(listP);
    
        // list.appendChild(deleteIcon);
    
        // card.appendChild(list);
        addlist.classList.toggle('show');

    } else if(e.target.className == 'icofont-ui-delete') {
        e.target.parentElement.remove();
    } else if(e.target.className == 'icofont-close-circled') {
        addlist.classList.toggle('show');
    }
});