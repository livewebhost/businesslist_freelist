const products = [
    { name: "Buy & Sell", link: "facebook-buy-and-sell-groups.html", groups: 19 },
    { name: "Digital Marketing", link: "facebook-digital-marketing-groups.html", groups: 7 },
    { name: "Job", link: "facebook-job-groups.html", groups: 6 },
    { name: "Influencer", link: "facebook-influencer-groups.html", groups: 1 },
    { name: "Business", link: "facebook-business-groups.html", groups: 7 },
    { name: "Friend", link: "facebook-friend-groups.html", groups: 1 },
    { name: "Wholesale", link: "facebook-wholesale-groups.html", groups: 1 },
    { name: "Classified", link: "facebook-classified-groups.html", groups: 1 },
    { name: "Loan", link: "facebook-loan-groups.html", groups: 0 },
    { name: "Follower", link: "facebook-follower-groups.html", groups: 0 },
    { name: "Fitness", link: "facebook-fitness-groups.html", groups: 0 },
    { name: "SEO", link: "facebook-seo-groups.html", groups: 0 },
    { name: "Community", link: "facebook-community-groups.html", groups: 0 },
    { name: "B2B Business", link: "facebook-b2b-business-groups.html", groups: 0 },
    { name: "Architects & Interior", link: "facebook-architects-interior-groups.html", groups: 0 },
    { name: "Skin & Hair", link: "facebook-skin-hair-groups.html", groups: 0 },
    { name: "Flat and Flatmates", link: "facebook-flat-flatmates-groups.html", groups: 0 },
    { name: "Real Estate & Property", link: "facebook-real-estate-property-groups.html", groups: 0 },
    { name: "Citywise", link: "facebook-citywise-groups.html", groups: 0 },
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
        <img src="assets/images/categoryicons/facebook_groups_category.png" alt="" />
      </div>
      <div class="content">
        <h3>${product.name} (${product.groups})</h3>
        <a href="${product.link}" class="f-btn">View All<i class="fa-solid fa-arrow-right"></i></a>
      </div>
    `;
    container.appendChild(div);
  });
