const slides=document.querySelectorAll(".slide")
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
const goNext=()=>{
    counter++
    slideImage()
}
const goPrev=()=>{
    counter--
    slideImage()
}
const slideImage=() =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();
