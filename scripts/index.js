const openInNewTab = (url)=>{
    let win = window.open(url, '_blank')
    win.focus()
}


// start point
document.addEventListener('DOMContentLoaded', ()=>{
    // burger open/close
    const BURGER_BTN = document.querySelector(".container__menu_nav_burger")
    
    BURGER_BTN.addEventListener("click", ()=>{
    BURGER_BTN.classList.toggle('active')
    
    const MOB_MENU = document.querySelector(".mobileMenu")
    MOB_MENU.classList.toggle('active')

    const BODY = document.querySelector(".body")
    BODY.classList.toggle('fixed')
    
    const HEADER_CONTAINER = document.querySelector('.headerMenu')
    HEADER_CONTAINER.classList.toggle('active')

    })

    // scroll and Testimonials
    if(window.location.pathname != '/HotelShowcase/pages/form.html'){
        const TESTIMONIAL_BTNS = document.querySelectorAll('.container__review_btns_btn')
        const TESTIMONIAL_TEXT = document.querySelector('.container__review_paragraph')
        const TESTIMONIAL_AUTHOR = document.querySelector('.container__review_desc')
        // making changable reviews(Testimonials)
        let counter = 1
        TESTIMONIAL_BTNS.forEach((btn)=>{
            btn.addEventListener('click', ()=>{

                // making so click changes the counter and its limit from 0 to 3
                // Я знаю, що структура погана, але працює ) (Ви нам не показували як таке робити або схожі приклади)
                if(counter < 3 && counter > 0){
                    if(btn.classList[1] == 'next'){
                        counter += 1
                    }else{
                        counter -= 1
                    }
                }else if(btn.classList[1] == 'previous' && counter > 0){
                    counter -= 1
                }else if(btn.classList[1] == 'next' && counter == 0){
                    counter += 1
                }else if(btn.classList[1] == 'next' && counter == 3){
                    counter = 0
                }else if(btn.classList[1] == 'previous' && counter == 0){
                    counter = 3
                }
                
                // changing text on counter
                if(counter == 0){
                    TESTIMONIAL_TEXT.innerHTML = `"Calm, Serene, Retro – What a way to relax and enjoy"`
                    TESTIMONIAL_AUTHOR.innerHTML = `Mr. and Mrs. Baxter, UK`
                }else if(counter == 1){
                    TESTIMONIAL_TEXT.innerHTML = `"Comment 2"`
                    TESTIMONIAL_AUTHOR.innerHTML = `Author 2`
                }else if(counter == 2){
                    TESTIMONIAL_TEXT.innerHTML = `"Comment 3"`
                    TESTIMONIAL_AUTHOR.innerHTML = `Author 3`
                }else{
                    TESTIMONIAL_TEXT.innerHTML = `"Comment 4"`
                    TESTIMONIAL_AUTHOR.innerHTML = `Author 4`
                }
            })
        })
        // scroll to footer
        const SCROLL_BTN = document.querySelector('.container__scrollDown_btn_img')
        const FOOTER = document.querySelector('footer')

        SCROLL_BTN.addEventListener('click', ()=>{
            FOOTER.scrollIntoView({behavior: 'smooth'})
    })
    }

    // slider
    if(window.location.pathname == '/HotelShowcase/pages/rooms.html'){
        $('.single-item').slick({
            inifinte: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            vertical: true,
            verticalSwiping: true,
        });
    }

    // expand buttons
    const EXPAND_BTNS = document.querySelectorAll('.container__rooms_room_content_details_btn')

    EXPAND_BTNS.forEach((btn, index) => {
        //get button index and its element on click
        btn.addEventListener('click', () => {
            
            // get btn desc with the same index
            const DESC = document.querySelectorAll('.container__rooms_room_expandedDetails')[index]
            // get btn room with the same index
            const ROOM = document.querySelectorAll('.container__rooms_room')[index]
            
            // check if desc is displayed or hidden then check for window width
            if (DESC.style.display === 'none' || DESC.style.display === '') {
                if(720 <= window.innerWidth){
                    DESC.style.display = 'block'
                    ROOM.style.height = '600px'
                    btn.innerHTML = '⬆'
                }else if(window.innerWidth <= 500){
                    DESC.style.display = 'block'
                    ROOM.style.height = '340px'
                    btn.innerHTML = '⬆'
                }else{
                    DESC.style.display = 'block'
                    ROOM.style.height = '440px'
                    btn.innerHTML = '⬆'
                }
            } else {
                if(720 <= window.innerWidth){
                    DESC.style.display = 'none'
                    ROOM.style.height = '500px'
                    btn.innerHTML = '⬇'
                }else if(window.innerWidth <= 500){
                    DESC.style.display = 'none'
                    ROOM.style.height = '280px'
                    btn.innerHTML = '⬇'
                }else{
                    DESC.style.display = 'none'
                    ROOM.style.height = '380px'
                    btn.innerHTML = '⬇'
                }
            }
        })
    })
})