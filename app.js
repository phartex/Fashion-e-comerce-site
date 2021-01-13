

const serviceMain = document.getElementById('second-link');
const aboutUsMain = document.getElementById('third-link')
const testimonialsMain = document.getElementById('fourth-link');
const contactMain = document.getElementById('fifth-link')

const service = (e =>{
    serviceMain.addEventListener('click', e=>{
        e.preventDefault();
        const service = document.getElementById('services')
        services.scrollIntoView();
    })
})
service()

const aboutUs = (e =>{
    aboutUsMain.addEventListener('click', e=>{
        e.preventDefault();
        const aboutUs = document.getElementById('about-us')
        aboutUs.scrollIntoView();
    })
})
aboutUs()

const testimonials = (e =>{
    testimonialsMain.addEventListener('click', e=>{
        e.preventDefault();
        const testimonials = document.getElementById('testimonials')
        testimonials.scrollIntoView();
    })
})
testimonials()


const contact = (e =>{
    contactMain.addEventListener('click', e=>{
        e.preventDefault();
        const contact = document.getElementById('footer')
        contact.scrollIntoView();
    })
})
contact()