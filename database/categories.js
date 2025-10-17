const products = [
    { name: "Doctors", link: "doctors.html", thumb: "assets/images/category/doctor.png", groups: 1 },
    // ...baaki categories
  ];

  const container = document.getElementById("catagories-sec-inner");

  // Remove duplicates by link
  const uniqueProducts = products.filter(
    (product, index, self) =>
      index === self.findIndex(p => p.link === product.link)
  );

  // Sort by groups (descending)
  uniqueProducts.sort((a, b) => b.groups - a.groups);

  // Append HTML blocks
  uniqueProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "i-box-s1";
    div.innerHTML = `
      <div class="thumb">
        <img src="${product.thumb}" alt="${product.name}" />
      </div>
      <div class="content">
        <h3>${product.name} (${product.groups})</h3>
        <a href="${product.link}" class="f-btn">View All<i class="fa-solid fa-arrow-right"></i></a>
      </div>
    `;
    container.appendChild(div);
  });
