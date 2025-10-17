const products = [
    { name: "Instagram influencers", link: "instagram-influencers.html", thumb: "assets/images/category/advertising-marketing.webp", groups: 1 },
    { name: "Youtube influencers", link: "youtube-influencers.html", thumb: "assets/images/category/advertising-marketing.webp", groups: 1 },
    { name: "Facebook influencers", link: "facebook-influencers.html", thumb: "assets/images/category/advertising-marketing.webp", groups: 1 },
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
        <a href="${product.link}"><img src="${product.thumb}" alt="${product.name}" style="width: 60px;" /></a>
      </div>
      <div class="content">
        <h3 style="font-size: .85rem;"><a href="${product.link}">${product.name} (${product.groups})</a></h3>
      </div>
    `;
    container.appendChild(div);
  });
