(function WebPageChange() {
  document.querySelector(".text-4xl.font-bold.mb-4.text-white.relative.z-20").innerText="Uplift Your Brand with Stellar Marketing"
  document.querySelector(".text-xl.mb-6.text-white.relative.z-20").innerText="Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel."
  const getStarted =document.querySelector(".relative.bg-blue-600.text-white.px-6.py-2.rounded.hover\\:bg-blue-700.z-20");
  getStarted.remove();

  const element = document.getElementById("hero");
  element.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";


  const header = document.querySelector("header");
  header.style.backgroundColor = "#1F2937";

  const sectionHeadings = document.querySelectorAll("main section h2");
  sectionHeadings.forEach(function (heading) {
    heading.classList.add("text-center");
  });

  const servicesIcons = document.querySelectorAll("#services span.material-symbols-outlined");
  servicesIcons.forEach(function (icon) {
    icon.style.color = "#47C714";
  });

  const digitalIcon = document.querySelector('span[data-icon="digital"]');
  digitalIcon.innerText = "ads_click";

  const solutionsGrid = document.querySelector("section#solutions div[data-section='product_cards']");

  solutionsGrid.classList.add("lg:grid-cols-4");

  const musiciansImage = document.querySelector('img[alt="Musicians"]');
  musiciansImage.src = "https://picsum.photos/id/453/400/300";
  

  const contactForm = document.querySelector("#contact form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";

    
    if (name && email) {
      alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
    } else {
      alert("Please provide a name and email.");
    }
  });
  


  
})();
