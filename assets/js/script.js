// animated searchbar starts here
document.getElementById("searchBtn").addEventListener("click", function() {
    let searchBar = document.getElementById("searchBar");
    if (searchBar.classList.contains("show")) {
        searchBar.style.opacity = "0";
        searchBar.style.width = "0";
        setTimeout(() => {
            searchBar.classList.remove("show");
        }, 400);
    } else {
        searchBar.classList.add("show");
        searchBar.style.width = "120px";
        searchBar.style.backgroundColor = "#000";
        searchBar.style.border = "none";
        setTimeout(() => {
            searchBar.style.opacity = "1";
        }, 10);
    }
});
// animated searchbar ends here 




// movies owl carousel starts here

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        768:{
            items:5
        },
        1000:{
            items:6
        }
    }
});


// movies  owl carousel ends here





