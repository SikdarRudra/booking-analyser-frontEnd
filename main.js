
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBar.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});


formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});


const videoSlider = document.querySelector('.video-slider');
const controls = document.querySelector('.controls');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

const slideVideos = () => {
    videoSlider.style.transform = `translateX(-${currentSlide * 100}vw)`;
};

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        slideVideos();
        updateDots();
    });
});

const updateDots = () => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
};


slideVideos();
updateDots();


document.getElementById('inquiry-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const subject = document.getElementById('subject').value;

    if (!name || !email || !contact || !subject) {
        event.preventDefault();
        alert("Please fill out all fields.");
    } else {
        alert("Thank you for your inquiry! We will get back to you soon.");
    }
});


document.querySelector('#about-us a[href="tel:7001157474"]').addEventListener('click', function() {
    alert("You are about to call 7001157474!");
});


const places = [
    
    "Agra, Uttar Pradesh", "Ahmedabad, Gujarat", "Amritsar, Punjab", "Bangalore, Karnataka",
    "Bhopal, Madhya Pradesh", "Chandigarh, Chandigarh", "Dehradun, Uttarakhand", "Delhi, Delhi",
    "Gurgaon, Haryana", "Jaipur, Rajasthan", "Jammu, Jammu & Kashmir", "Kanpur, Uttar Pradesh",
    "Lucknow, Uttar Pradesh", "Ludhiana, Punjab", "Meerut, Uttar Pradesh", "Mohali, Punjab",
    "Noida, Uttar Pradesh", "Shimla, Himachal Pradesh", "Varanasi, Uttar Pradesh",

    
    "Ahmedabad, Gujarat", "Baroda, Gujarat", "Bhopal, Madhya Pradesh", "Gandhinagar, Gujarat",
    "Jaipur, Rajasthan", "Jodhpur, Rajasthan", "Mumbai, Maharashtra", "Nagpur, Maharashtra",
    "Pune, Maharashtra", "Surat, Gujarat", "Udaipur, Rajasthan",

    
    "Bangalore, Karnataka", "Chennai, Tamil Nadu", "Hyderabad, Telangana", "Kochi, Kerala",
    "Madurai, Tamil Nadu", "Mysore, Karnataka", "Thiruvananthapuram, Kerala", "Visakhapatnam, Andhra Pradesh",

    
    "Bhubaneswar, Odisha", "Durgapur, West Bengal", "Guwahati, Assam", "Howrah, West Bengal",
    "Kolkata, West Bengal", "Patna, Bihar", "Ranchi, Jharkhand", "Siliguri, West Bengal",
    
    
    "Agartala, Tripura", "Aizawl, Mizoram", "Imphal, Manipur", "Itanagar, Arunachal Pradesh",
    "Kohima, Nagaland", "Shillong, Meghalaya", "Sikkim, Gangtok",

    
    "Chandigarh, Chandigarh", "Dadra and Nagar Haveli, Silvassa", "Daman, Daman and Diu",
    "Lakshadweep, Kavaratti", "Puducherry, Puducherry", "Delhi, Delhi",

    
    "Alleppey, Kerala", "Agra, Uttar Pradesh", "Goa", "Manali, Himachal Pradesh", 
    "Munnar, Kerala", "Rishikesh, Uttarakhand", "Shimla, Himachal Pradesh", "Varanasi, Uttar Pradesh"
];


function setupAutocomplete(inputElement, dropdownElement) {
    inputElement.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        dropdownElement.innerHTML = ''; 

        if (!value) {
            dropdownElement.style.display = 'none'; 
            return;
        }

        
        const filteredPlaces = places.filter(place => place.toLowerCase().startsWith(value));
        
        if (filteredPlaces.length > 0) {
            dropdownElement.style.display = 'block'; 
            filteredPlaces.forEach(place => {
                const div = document.createElement('div');
                div.textContent = place;
                div.addEventListener('click', function() {
                    inputElement.value = place;
                    dropdownElement.style.display = 'none'; 
                });
                dropdownElement.appendChild(div);
            });
        } else {
            dropdownElement.style.display = 'none'; 
        }
    });

   
    document.addEventListener('click', function(event) {
        if (!inputElement.contains(event.target) && !dropdownElement.contains(event.target)) {
            dropdownElement.style.display = 'none';
        }
    });
}


setupAutocomplete(document.getElementById('whereTo'), document.getElementById('whereToDropdown'));
setupAutocomplete(document.getElementById('whereFrom'), document.getElementById('whereFromDropdown'));
