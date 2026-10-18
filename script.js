window.addEventListener("scroll", function () {
  const header = document.querySelectorAll("header");
  header.forEach((heading) => {
    heading.classList.toggle("sticky", window.scrollY > 0);
  });
});

const product = [
  {
    img: "graphics-1.jpg",
    name: "BrandIdentity Suite",
    type: "Logo Design",
    category: "graphics",
    description:
      "A comprehensive branding package featuring custom logos, typography guidelines, and color palettes.",
  },
  {
    img: "web-1.jpg",
    name: "ShopFlow Platform",
    type: "E-Commerce",
    category: "web-dev",
    description:
      "A fully responsive online store with integrated payment gateways and user dashboard.",
  },
  {
    img: "graphics-2.jpg",
    name: "SocialPulse Campaign",
    type: "Banner Set",
    category: "graphics",
    description:
      "High-engagement social media banners optimized for various digital platforms.",
  },
  {
    img: "web-2.jpg",
    name: "Apex Corporate Portal",
    type: "Landing Page",
    category: "web-dev",
    description:
      "A sleek, conversion-focused landing page built with modern frontend frameworks.",
  },
  {
    img: "graphics-3.jpg",
    name: "VectorCraft Icons",
    type: "Illustration",
    category: "graphics",
    description:
      "Custom vector illustrations and icon sets tailored for modern mobile applications.",
  },
  {
    img: "web-3.jpg",
    name: "PulseBlog Engine",
    type: "CMS Web App",
    category: "web-dev",
    description:
      "A dynamic content management system featuring a clean UI and fast loading times.",
  },
  {
    img: "graphics-4.jpg",
    name: "Metro Transit Guide",
    type: "Infographic",
    category: "graphics",
    description:
      "Clear and visually appealing data visualizations and infographics for transit systems.",
  },
  {
    img: "web-4.jpg",
    name: "Nova SaaS Dashboard",
    type: "Web Application",
    category: "web-dev",
    description:
      "An intuitive analytics dashboard with dark mode support and real-time data charts.",
  },
  {
    img: "item-9",
    name: "Artisan Coffee Packaging",
    type: "Print Design",
    category: "graphics",
    description:
      "Eye-catching product packaging and label designs created for retail shelves.",
  },
  {
    img: "item-10",
    name: "DevSphere Portfolio",
    type: "Portfolio",
    category: "web-dev",
    description:
      "A minimalist developer portfolio template with smooth transitions and clean code architecture.",
  },
  {
    img: "item-11",
    name: "Vogue Lookbook",
    type: "Magazine Layout",
    category: "graphics",
    description:
      "A professional editorial layout design created for digital and print fashion magazines.",
  },
  {
    img: "item-12",
    name: "Zenith Booking System",
    type: "Web Application",
    category: "web-dev",
    description:
      "An interactive reservation and appointment scheduling platform for service businesses.",
  },
  {
    img: "item-13",
    name: "CyberPunk Keyart",
    type: "Concept Art",
    category: "graphics",
    description:
      "Immersive digital concept artwork designed for sci-fi video game marketing.",
  },
  {
    img: "item-14",
    name: "BiteDash App UI",
    type: "Mobile App",
    category: "web-dev",
    description:
      "A mobile-first frontend web app for food delivery tracking and ordering.",
  },
  {
    img: "item-15",
    name: "EcoTrend Guidelines",
    type: "Brand Guide",
    category: "graphics",
    description:
      "Detailed brand style guides outlining visual standards, tone of voice, and usage rules.",
  },
];

const categories = [...product];

// Render Menu Items
document.getElementById("work-body").innerHTML = categories
  .map((item, index) => {
    let { img, name, type, category, description } = item;

    if (name.length > 15) {
      name = name.substring(0, 15) + "...";
    }

    // if (description.length > 35) {
    //   name = name.substring(0, 15) + "...";
    // }
    return `
    <div class="work-item ${category}">
      <div class="img">
        <button class="view" onclick="view(${index})">
          <i class="fa-solid fa-eye"></i>
        </button>
        <img src="media/${img}" alt="">
      </div>
      <div class="work-info">
        <span>${type}</span>
        <p class="name">${name}</p>
        <p class="description">${description}</p>
      </div>
    </div>
  `;
  })
  .join("");


const selectElement = document.getElementById("work-list");

if(selectElement){
  const selectedValue = selectElement.value;

  console.log(selectedValue);
}