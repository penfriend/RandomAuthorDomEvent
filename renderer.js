window.addEventListener('shout', (event) => {
    const { id, name, text } = event;
    console.log(event);
    window.list.querySelectorAll('li').forEach((item) => {
        item.classList.remove('active');

        if (item.id === `id-${id}`) {
            item.dataset.count++;
            item.classList.add('active');
            console.log(item);
        }
        
    })
    // Add to the page caught shout with author name and text.
    // Add to the page the list of authors with the count of shouts.
});

window.list.innerHTML = authorsList.map((el)=> {
    return `<li class="author" data-count="0" id="id-${el._id}">${el.name}</li>`;
}).join('');
