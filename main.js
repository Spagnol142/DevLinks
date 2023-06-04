function toggleMode () {
    const html = document.documentElement
    html.classList.toggle('light')

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    const switchButton = document.querySelector('#switch button');
    if (html.classList.contains('light')) {
        switchButton.style.transform = 'translateX(100%)';
    } else {
        switchButton.style.transform = 'translateX(0)';
    }
}


