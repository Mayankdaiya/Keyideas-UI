window.addEventListener("load", () => {
    getAllCards();
    setTimeout(startAnimationLoop,2000);


    // hamburger
    const ham = document.querySelector(".ham");
    const menu = document.querySelector(".ham-content");
    document.getElementById("ham-toggle").addEventListener('change', () => {
        const isshow = menu.classList.toggle("shw");
        if(isshow) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
    });

    document.getElementById("items").addEventListener("click", (e) => {
        if (e.target.closest("li")) {
            document.querySelectorAll("#items li").forEach(li => li.classList.remove("active"));
            e.target.closest('li').classList.add("active");
            changeContent(e.target.closest('li').id);
        }
    });

    // for header transition smooth
    const header = document.querySelector("header");
    let hasScrolledFromTop = false;
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 5 && !hasScrolledFromTop) {
            // User is leaving the top of the page → trigger animation
            header.classList.add("scroll-animate");
            header.classList.add("end");
            setTimeout(() => {
                header.classList.remove("scroll-animate"); // slide back down
            }, 500); // match CSS transition

            hasScrolledFromTop = true; // mark that user left top
        } else if (currentScroll <= 5) {
            // User returned to top → reset so animation can happen again
            hasScrolledFromTop = false;
            header.classList.remove("end");
        }
    });

    // for listitems
    const listItems = document.querySelectorAll("#list-items li");
    listItems.forEach(item => {
        item.addEventListener("click", () => {
            const li = document.getElementById(item.getAttribute('data'));
            if(getComputedStyle(li).display == 'none'){
                li.style.display = 'flex';
            } else li.style.display = 'none';
            item.classList.toggle("open"); // toggle on/off
        });
    });

});

// List item change
const listItems = { 
    i1: ["Software Product Engineering", "We specialize in delivering end-to-end software product engineering services, ensuring seamless integration, innovative design, and performance optimization to help businesses stay competitive in the digital landscape.",
    `<span>API & Microservices</span>
    <a href="https://www.keyideasinfotech.com/top-cms-web-design-development-services/" target="_blank">Enterprise CMS Solutions</a>
    <span>Software Modernization</span>
    <a href="https://www.keyideasinfotech.com/best-cloud-application-development-services-company/" target="_blank">Cloud Application Development</a>
    <a href="https://www.keyideasinfotech.com/top-enterprise-software-development-company/" target="_blank">Enterprise Software Development</a>
    <a href="https://www.keyideasinfotech.com/top-outsource-software-development-company-it-outsourcing-services/" target="_blank">Software Outsourcing</a>
    <a href="https://www.keyideasinfotech.com/top-custom-crm-software-app-development-company/" target="_blank">Custom CRM Software</a>
    <span>Microsoft Development</span>
    <span>Software Support and Maintenance</span>
    <a href="https://www.keyideasinfotech.com/top-custom-software-development-services-hire-developers/" target="_blank">Custom Software Development</a>
    <a href="https://www.keyideasinfotech.com/top-mobile-app-development-company/" target="_blank">Mobile App Development</a>
    <a href="https://www.keyideasinfotech.com/software-application-testing-services-company/" target="_blank">Testing and Quality Assurance</a>
    <span>DevOps Consulting Services</span>
    <span>Software Consulting</span>`], 
    i2: ["Website & E-Commerce","We specialize in creating tailored websites and e-commerce solutions, offering user-friendly designs, seamless functionality, and secure platforms to help businesses thrive online.",
    `<a href="https://www.keyideasinfotech.com/website-development/ablecommerce-development-services/" target="_blank">AbleCommerce Website Development</a>
    <a href="https://www.keyideasinfotech.com/website-development/" target="_blank">Web Development</a>
    <a href="https://www.keyideasinfotech.com/bagisto-b2b-solutions-from-a-bagisto-laravel-e-commerce-development-company/" target="_blank">Bagisto E-Commerce</a>
    <a href="https://www.keyideasinfotech.com/website-development/" target="_blank">Website Maintenance Services</a>
    <a href="https://www.keyideasinfotech.com/ecommerce/web-design-company/" target="_blank">E-Commerce Website Design</a>
    <a href="https://www.keyideasinfotech.com/web-design/" target="_blank">Website Redesign Services</a>
    <a href="https://www.keyideasinfotech.com/top-responsive-web-design-development-company/" target="_blank">Responsive Websites</a>
    <a href="https://www.keyideasinfotech.com/website-development/wordpress/woocommerce/" target="_blank">WordPress Website Development</a>
    <a href="https://www.keyideasinfotech.com/best-shopify-web-development-company-hire-developers/" target="_blank">Shopify Website Development</a>`],
    i3: ["Digital Experience","We specialize in delivering exceptional digital experiences, focusing on user-centric design, seamless functionality, and innovative solutions to help businesses engage and thrive in the digital world.",
    `<a href="https://www.keyideasinfotech.com/branding/" target="_blank">Branding</a>
    <a href="https://www.keyideasinfotech.com/user-centered-design-agency/" target="_blank">User Research</a>
    <span>MVP</span>
    <a href="https://www.keyideasinfotech.com/best-ui-ux-web-design-development-agency-hire-designers/" target="_blank">UX & Information Architecture</a>
    <a href="https://www.keyideasinfotech.com/ux-ui-design/" target="_blank">UI/UX Design & Prototyping</a>
    <a href="https://www.keyideasinfotech.com/top-web-design-company/" target="_blank">Web Design</a>`],
    i4: ["Remote Team","We specialize in managing remote teams, providing efficient collaboration, seamless communication, and high-quality project delivery to help businesses succeed regardless of location.",
    `<a href="https://www.keyideasinfotech.com/top-asp-net-mvc-development-company/" target="_blank">Hire .NET Core Developers</a>
    <a href="https://www.keyideasinfotech.com/budget-friendly-maui-developers-the-top-maui-web-development-company-that-will-take-your-web-presence-to-paradise/" target="_blank">Hire MAUI Developers</a>
    <a href="https://www.keyideasinfotech.com/website-development/asp-dot-net-mvc/certified-developer/" target="_blank">Hire .NET Developers</a>
    <a href="https://www.keyideasinfotech.com/hire-mobile-app-developers/" target="_blank">Hire Mobile App Developers</a>
    <a href="https://www.keyideasinfotech.com/website-development/angular/" target="_blank">Hire Angular Developers</a>
    <a href="https://www.keyideasinfotech.com/website-development/nodejs/" target="_blank">Hire NodeJS Developers</a>
    <a href="https://www.keyideasinfotech.com/top-laravel-web-development-company/" target="_blank">Hire Laravel Developers</a>
    <a href="https://www.keyideasinfotech.com/website-development/react/" target="_blank">Hire ReactJS Developers</a>`],
    i5: ["Hi-Tech","We specialize in delivering comprehensive high-tech services, focusing on innovation, seamless integration, and performance optimization to help businesses thrive in today’s dynamic digital environment.",
    `<a href="https://www.keyideasinfotech.com/industries/retail-ecommerce/jewelry/3d-ar-virtual-try-on-vto-jewellery/" target="_blank">3D Virtual Try On</a>
    <span>ChatBot</span>
    <span>Big Data Solutions</span>
    <a href="https://www.keyideasinfotech.com/top-iot-app-development-company-internet-of-things-services/" target="_blank">IoT</a>
    <span>Blockchain</span>`],
    i6: ["Online Marketing","We specialize in digital marketing, offering data-driven strategies, targeted campaigns, and optimized performance to help businesses grow their online presence and achieve measurable results.",
    `<a href="https://www.keyideasinfotech.com/digital-marketing/" target="_blank">Digital Marketing</a>
    <a href="https://www.keyideasinfotech.com/unlocking-ecommerce-success-with-klaviyo-experts-your-klaviyo-agency-blueprint/" target="_blank">Klaviyo Email Marketing</a>
    <a href="https://www.keyideasinfotech.com/best-seo-company/" target="_blank">Search Engine Optimization (SEO)</a>
    <a href="https://www.keyideasinfotech.com/social-media-optimization/" target="_blank">Social Media Optimization (SMO)</a>`],
};
function changeContent(id) {
    const head = document.getElementById("s2-heading");
    const para = document.getElementById("s2-para");
    const links = document.getElementById("s2-links");
    head.innerText = listItems[id][0];
    para.innerText = listItems[id][1];
    links.innerHTML = listItems[id][2];
}

document.querySelectorAll('.toggle-btn').forEach(btn => {
  const arrow = btn.querySelector(".arrow-icon");
  const collapse = document.querySelector(btn.dataset.bsTarget);

  collapse.addEventListener("shown.bs.collapse", () => arrow.classList.add("rotate"));
  collapse.addEventListener("hidden.bs.collapse", () => arrow.classList.remove("rotate"));
});


// Card Animation
let effectIndex = 0;
const bgcolor1 = '#4F149A', bgcolor2 = '#CFA9FF', bgcolor3 = '#7646D7';
const originalContent = [];
const effects = [ effect1, effect2, effect3, effect4 ];

function getAllCards() {
    document.querySelectorAll(".card-wrapper").forEach(card => {
        originalContent.push(card.innerHTML);
    });
    originalContent.push(
        `<div class="grid-with-logo">
        <div class="crowd-reviews"></div>
        <div class="card-content">
        <span class="gh fw-bold">#1</span>
        <span class="gs">ASP.NET Development Company</span>
        </div>
        </div>`,
        `<div class="grid-with-logo">
        <div class="crowd-reviews"></div>
        <div class="card-content">
        <span class="gh fw-bold">Top 10</span>
        <span class="gs">Web Development Company</span>
        </div>
        </div>`,
        `<div class="grid-with-logo">
        <div class="crowd-reviews"></div>
        <div class="card-content">
        <span class="gh fw-bold">Top 3</span>
        <span class="gs">E-Commerce Development Company</span>
        </div>
        </div>`,
        `<div class="grid-with-logo">
        <div class="clutch"></div>
        <div class="card-content">
        <span class="gh fw-bold">Top 1000</span>
        <span class="gs">B2B Companies 2018</span>
        </div>
        </div>`
    );
}

function startAnimationLoop() {
    runEffect(effects[effectIndex]);
    effectIndex = (effectIndex + 1) % effects.length;
    const delay = 2000 + Math.random() * 1000; // 1–2 seconds gap
    setTimeout(startAnimationLoop, delay);
}

function runEffect(effectFun) {
    effectFun();
}

function effect1() {
    document.getElementById("card1").querySelector(".card-wrapper").style.backgroundColor = bgcolor3;
    ["card3", "card5", "card7", "card8"].forEach(id => {
        document.getElementById(id).querySelector(".card-wrapper").style.backgroundColor = bgcolor2;
    });
    slideNewCard(document.getElementById("card2"), originalContent[9], "bottom", bgcolor1);
    slideNewCard(document.getElementById("card4"), originalContent[10], "left", bgcolor1);
    slideNewCard(document.getElementById("card6"), originalContent[11], "top-right", bgcolor1);
    slideNewCard(document.getElementById("card9"), originalContent[12], "none", bgcolor1);
}

function effect2() {
    let li = [[1, bgcolor3], [4, bgcolor2], [3, bgcolor3], [6, bgcolor1], [0, bgcolor3], [2, bgcolor1], [8, bgcolor3], [5, bgcolor2], [7, bgcolor1]];
    document.querySelectorAll(".card-wrapper").forEach((card, idx) => {
        if (idx == 2) slideNewCard(document.getElementById("card3"), originalContent[li[idx][0]], "bottom", li[idx][1]);
        else replaceCardContent(card, originalContent[li[idx][0]], li[idx][1]);
    });
}

function effect3() {
    let list = [["card2", 0, "bottom", bgcolor2], ["card4", 7, "bottom", bgcolor3], ["card6", 4, "top-left", bgcolor3], ["card7", 6, "bottom-left", bgcolor2], ["card9", 5, "top", bgcolor3]]
    list.forEach((li) => {
        slideNewCard(document.getElementById(li[0]), originalContent[li[1]], li[2], li[3], true);
    });
    ["card1", "card3", "card5", "card8"].forEach((card, idx) => {
        replaceCardContent(document.getElementById(card).querySelector(".card-wrapper"), originalContent[9 + idx], bgcolor1);
    });
}

function effect4() {
    [[1, bgcolor2], [2, bgcolor3], [7, bgcolor1], [8, bgcolor1], [9, bgcolor3]].forEach((li) => {
        replaceCardContent(document.getElementById("card" + li[0]).querySelector(".card-wrapper"), originalContent[li[0] - 1], li[1]);
    });
    [[3, "left", bgcolor1], [4, "left", bgcolor3], [5, "top-left", bgcolor1], [6, "right", bgcolor2]].forEach((li) => {
        slideNewCard(document.getElementById("card" + li[0]), originalContent[li[0] - 1], li[1], li[2]);
    });
}

function slideNewCard(card, newContentHTML, direction, bgcolor, initialBg) {
    const oldWrapper = card.querySelector(".card-wrapper");
    const rect = card.getBoundingClientRect();     // Old card position

    // 1. Create new wrapper
    const floating = document.createElement("div");
    floating.classList.add("card-wrapper", "new");
    floating.innerHTML = newContentHTML;
    if (initialBg == undefined) floating.style.backgroundColor = bgcolor;
    else floating.style.backgroundColor = 'transparent';
    // position
    floating.style.width = rect.width + "px";
    floating.style.height = rect.height + "px";
    // Starting position: centered
    let startX = rect.left;
    let startY = rect.top;
    switch (direction) {
        case "bottom": startY = rect.bottom; break;
        case "top": startY = rect.top - rect.height; break;
        case "left": startX = rect.left - rect.width; break;
        case "right": startX = rect.right; break;
        case "top-left": startX = rect.left - rect.width; startY = rect.top - rect.height; break;
        case "top-right": startX = rect.right; startY = rect.top - rect.height; break;
        case "bottom-left": startX = rect.left - rect.width; startY = rect.bottom; break;
        case "bottom-right": startX = rect.right; startY = rect.bottom; break;
    }
    floating.style.left = startX + window.scrollX + "px";
    floating.style.top = startY + window.scrollY + "px";
    // Append to body and set its position and force layout
    oldWrapper.style.backgroundColor = bgcolor;
    document.body.appendChild(floating);
    floating.getBoundingClientRect();

    oldWrapper.innerHTML = ``;
    // ----- ANIMATE TO TARGET -----
    const moveX = (rect.left + window.scrollX) - (startX + window.scrollX);
    const moveY = (rect.top + window.scrollY) - (startY + window.scrollY);
    floating.style.transform = `translate(${moveX}px, ${moveY}px)`;


    // 4. After animation, remove old wrapper and rename
    floating.addEventListener("transitionend", () => {
        floating.remove();
        oldWrapper.innerHTML = newContentHTML;
        // floating.classList.remove("new");
    }, { once: true });
}

function replaceCardContent(wrapper, newContentHTML, bgcolor) {
    // Fade out
    wrapper.style.opacity = "0.2";

    setTimeout(() => {
        // Replace content
        wrapper.innerHTML = newContentHTML;
        if (bgcolor) wrapper.style.backgroundColor = bgcolor;
        // Fade in
        wrapper.style.opacity = "1";
    }, 200); // matches transition time
}

// mouse card swap
document.querySelectorAll('.image-grid').forEach(el => {
  let isDown = false;
  let startX, scrollLeft;

  el.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = el.scrollLeft;
  });

  document.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    el.scrollLeft = scrollLeft - walk;
  });

  document.addEventListener('mouseup', () => {
    isDown = false;
    el.classList.remove('active');
  });
});

// show more-less for mobile-view
document.querySelector(".show-more").addEventListener('click', () => {
    console.log("lskd");
    document.querySelector(".show-more").classList.toggle("show");
    document.querySelectorAll(".mw").forEach((el)=>{el.classList.toggle("show")});
    document.querySelector(".show-less").classList.toggle("show");
});
document.querySelector(".show-less").addEventListener('click',()=>{
    console.log("clicked");
    document.querySelector(".show-less").classList.toggle("show");
    document.querySelectorAll(".mw").forEach((el)=>{el.classList.toggle("show")});
    document.querySelector(".show-more").classList.toggle("show");
    document.querySelector(".show-more").scrollIntoView({ behavior: 'smooth', block: 'start' });
});
// if(window.matchMedia("(min-width: 768px)").matches) {
//     document.querySelectorAll(".mw").forEach((el)=>{el.style.display = 'flex'});
//     document.querySelector(".show-more").style.display = 'none';
//     document.querySelector(".show-less").style.display = 'none';
// } 

// for icons
document.querySelectorAll(".section6b > div").forEach((el)=>{
    el.addEventListener("mouseenter",()=>{
        showContent(el.getAttribute('data'),el);
    });
})

function showContent(cls,btn) {
    document.querySelectorAll(".section6c > div").forEach((el)=>{
        el.style.display = 'none';
    })
    document.querySelectorAll(".section6b > div").forEach((el)=>{
        el.classList.remove('active');
    })
    btn.classList.add("active");
    document.querySelector(cls).style.display = 'flex';
}