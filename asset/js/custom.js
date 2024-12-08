
// companise profile

$(document).ready(function(){
   
  $('.responsive').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

});

// wow part

new WOW().init();



// product slide part

$(document).ready(function(){
   
  $('.o_product').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

});


// board of director part js

$(document).ready(function(){
   
  $('.bod_o_dir').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

});



// news and event part js

$(document).ready(function(){
   
  $('.news_event').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      prevArrow:'<i class="fa fa-angle-left s_l_icon"></i>',
      nextArrow:'<i class="fa fa-angle-right s_r_icon"></i>',
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            prevArrow:false,
            nextArrow:false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

});



// product part in js

// Select filter buttons and product items
const filterButtons = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

// Add event listener to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterProducts(category);
  });
});

// Function to filter products by category
function filterProducts(category) {
  productItems.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block'; // Show item
    } else {
      item.style.display = 'none'; // Hide item
    }
  });
}

// Default: Show all products on page load
filterProducts('all');


// countdoen part in js

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the data-target attribute
  const counters = document.querySelectorAll("h4 span[data-target]");

  // Function to animate the counting
  counters.forEach((counter) => {
    const animate = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      // Increment calculation
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(animate, 1); // Repeat every 10ms
      } else {
        counter.innerText = target; // Ensure it ends exactly at the target
      }
    };

    animate();
  });
});


