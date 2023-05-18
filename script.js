const card = document.querySelector('.card');
const wrapper = document.querySelector('.wrapper');
const addlist = document.querySelector('.add-list');
let input = document.querySelector('.input-list');

wrapper.addEventListener('click', function(e) {
    if(e.target.className == 'icofont-ui-add') {
        addlist.classList.toggle('show');
    } else if(e.target.className == 'icofont-ui-delete') {
        e.target.parentElement.remove();
    } else if(e.target.className == 'icofont-close-circled') {
        // Reset value input
        input.value = '';

        addlist.classList.toggle('show');
    } else if(e.target.className == 'icofont-check') {
        const list = document.createElement('div');
        list.classList.add('list');

        if(input.value == '') {
            alert('List tidak boleh kosong!');

            return;
        }
    
        const listP = document.createElement('p');

        const listText = document.createTextNode(input.value);
        listP.classList.add('list-text');
    
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('icofont-ui-delete');
    
        listP.appendChild(listText);
    
        list.appendChild(listP);
    
        list.appendChild(deleteIcon);
    
        card.appendChild(list);

        addlist.classList.remove('show');

        input.value = '';
    }
});