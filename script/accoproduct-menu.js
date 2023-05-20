// const list = $('.menu-acco');
// list.on('click', '.menu-acco__line', function (e) {
//  e.preventDefault()
//  if (e.target.classList.contains('menu-acco__content')) return
//  $(this).siblings('li').removeClass('menu-acco__line_active')
//  $(this).toggleClass('menu-acco__line_active')
//})

const lines = document.querySelectorAll('.menu-acco__line');

for (let index = 0; index < lines.length; index++) {
  const element = lines[index]
  element.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.classList.contains('menu-acco__content')) return
    
    const currentLine = e.target.closest('.menu-acco__line');
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] !== currentLine)
      lines[i].classList.remove('menu-acco__line_active')
    } 
    
    if (currentLine.classList.contains('menu-acco__line_active')) {
      currentLine.classList.remove('menu-acco__line_active')
    } else {
      currentLine.classList.add('menu-acco__line_active')
    } 
  })
}