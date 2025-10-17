document.addEventListener("DOMContentLoaded", function () {
    // tabs
    const allTabButtons = document.querySelectorAll(".tab-btn");

    for (let i = 0; i < allTabButtons.length; i++) {
        allTabButtons[i].addEventListener("click", openTab);
    }

    function openTab(event) {
        let tab = event.currentTarget.closest(".tab-links");
        const linkFor = tab.getAttribute("data-links-for");
        let tabButtons;
        let tabPanes;

        if (linkFor) {
            tabButtons = tab.querySelectorAll(".tab-btn");
            tabPanes = document.querySelector(`#${linkFor}`).querySelectorAll(".tab-pane");
        } else {
            // get all tab panes
            tab = event.currentTarget.closest(".tab");
            tabPanes = tab.querySelectorAll(".tab-pane");
            tabButtons = tab.querySelectorAll(".tab-btn");
        }

        // reset all tab panes
        for (let i = 0; i < tabPanes.length; i++) {
            tabPanes[i].classList.remove("active");
        }
        // reset all tab buttons
        for (let i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove("active");
        }

        // active the correct tab pane
        const tabId = event.currentTarget.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
        // active the correct tab button
        event.currentTarget.classList.add("active");
    }

    // stikcy menu
    const header = document.querySelector("header");
    let stikcyActive = false;
    window.addEventListener("scroll", headerStikcy);

    function headerStikcy() {
        if (window.scrollY > 300 && !stikcyActive) {
            header.classList.add("sticky");
            stikcyActive = true;
        }

        if (window.scrollY <= 300 && stikcyActive) {
            header.classList.remove("sticky");
            stikcyActive = false;
        }
    }

    // mobile menu
    const mobileMenuContainer = document.querySelector("#m-nav-container");
    const navOpnBtn = document.querySelector("#m-nav-open");
    const clsOpnBtn = document.querySelector("#m-nav-close");

    navOpnBtn.addEventListener("click", openNav);
    clsOpnBtn.addEventListener("click", clsNav);

    function openNav() {
        mobileMenuContainer.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function clsNav() {
        mobileMenuContainer.classList.remove("open");
        document.body.style.overflow = "";
    }

    // product lincense tab
    const licenseSelect = document.querySelector(".p-pricing-widget > .nice-select");

    if (licenseSelect) {
        licenseSelect.addEventListener("click", togglePriceTable);
    }

    function togglePriceTable(event) {
        if (event.currentTarget.classList.contains("open")) {
            const target = event.currentTarget;
            let selected;

            setTimeout(getSelectValue, 50);

            function getSelectValue() {
                const listElements = Array.from(target.lastElementChild.children);

                listElements.forEach((item) => {
                    if (item.classList.contains("selected")) {
                        selected = item.getAttribute("data-value");
                    }
                });

                changePricing();
            }

            function changePricing() {
                target.nextElementSibling.querySelector(`.active`).classList.remove("active");
                target.nextElementSibling.querySelector(`#${selected}`).classList.add("active");
            }
        }
    }

    // cart page
    const cartProducts = document.querySelector("#cart-products");

    if (cartProducts) {
        const productRemoveBtns = Array.from(document.querySelectorAll(".btn-rm"));
        const cartSection = document.querySelector(".cart-page-main");
        const emptyMsg = document.querySelector("#empty-msg");

        productRemoveBtns.forEach((button) => {
            button.addEventListener("click", removeProduct);
        });

        function removeProduct(event) {
            const product = event.currentTarget.getAttribute("data-product");
            // remove element
            document.getElementById(product).remove();
            checkCart();
        }

        function checkCart() {
            if (cartProducts.childElementCount === 0) {
                cartSection.classList.add("hidden");
                emptyMsg.classList.add("visible");
            }
        }
    }

    // accordion
    const accordions = document.querySelectorAll(".s-accordion");

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", openAccordion);
        if(accordions[i].classList.contains('default-open')){
            accordions[i].click();
        }
    }

    function openAccordion(event) {
        // sibling accordions
        const siblingTabs = event.target.closest(".accordion").querySelectorAll(".s-accordion");
        const target = event.currentTarget;

        // if accordion is already active
        const targetWasActive = target.classList.contains("active");

        // remove active from sibling accordions
        for (let i = 0; i < siblingTabs.length; i++) {
            siblingTabs[i].classList.remove("active");
            siblingTabs[i].lastElementChild.style.height = "";
        }

        if (targetWasActive) {
            // if target was alreay active remove class active
            target.classList.remove("active");
        } else {
            // if target was not active add class active
            target.classList.add("active");
            const height = getHeight(target.lastElementChild);
            target.lastElementChild.style.height = height + "px";
        }
    }

    function getHeight(target) {
        target.style.display = "block";
        const height = target.scrollHeight;
        target.style.display = "";

        return height;
    }

    // circle counter
    const allCircleCounters = document.querySelectorAll(".c-progress");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCircleProgress(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    allCircleCounters.forEach((el) => observer.observe(el));

    function animateCircleProgress(element) {
        const bg = element.getAttribute("data-progress-background") || "#fff";
        const fill = element.getAttribute("data-progress-fill");
        const percent = +element.getAttribute("data-progress-percent");
        const duration = +element.getAttribute("data-progress-duration") || 1500;
        const progressElement = element.querySelector(".circle-outer");
        const progressCounter = element.querySelector(".counter-num");
        let step = 0;

        const interval = setInterval(() => {
            step++;
            if (step === percent) {
                clearInterval(interval);
            }

            progressElement.style.background = `conic-gradient(${fill} ${3.6 * step}deg, ${bg} ${3.6 * step}deg)`;
            progressCounter.textContent = `${step}%`;
        }, duration / percent);
    }

    // rangle slider
    const allRangeSliders = document.querySelectorAll("div[data-element=range-slider]");

    allRangeSliders.forEach((el) => {
        el.querySelectorAll("input[type=range]").forEach((input) => {
            input.addEventListener("input", rangeHandler);
        });
    });

    function rangeHandler(event) {
        const target = event.currentTarget;
        const slider = event.currentTarget.parentNode.firstElementChild;
        const output = event.currentTarget.parentNode.nextElementSibling;
        const isMin = target.getAttribute("data-role") === "min";

        if (isMin) {
            const max = +target.nextElementSibling.value;
            target.value = target.value > max ? max - 1 : target.value;
            slider.style.left = target.value + "%";
            slider.style.right = 100 - max + "%";
            output.firstElementChild.textContent = target.value;
            output.lastElementChild.textContent = max;
        } else {
            const min = +target.previousElementSibling.value;
            target.value = target.value < min ? min + 1 : target.value;
            slider.style.left = min + "%";
            slider.style.right = 100 - target.value + "%";
            output.firstElementChild.textContent = min;
            output.lastElementChild.textContent = target.value;
        }
    }
});
