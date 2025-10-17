          // Example data array
          const products = [
            { name: "Mumbai Business Group", link: "https://www.facebook.com/groups/mumbaibusinessgroupindia/", members: 1 },
            { name: "Business ideas for indian", link: "https://www.facebook.com/groups/businessideasforindian/", members: 24 },
            { name: "Small business owners/entrepreneurs", link: "https://www.facebook.com/groups/smallbusinessownersentrepreneurs.india/", members: 45 },
            { name: "India B2B business entreprenuers and startups", link: "https://www.facebook.com/groups/indiab2bbusinessentreprenuersandstartups/", members: 40 },
            { name: "Business Network India", link: "https://www.facebook.com/groups/businessnetworkindia.fb/", members: 44 },
            { name: "Promote Your Startup Business", link: "https://www.facebook.com/groups/promoteyourstartupbusiness/", members: 309 },
            { name: "Business Startups Indian", link: "https://www.facebook.com/groups/businessstartupsindian.bizcomnetwork/", members: 41 },
          ];

          const tbody = document.getElementById("cart-products");

          // Remove duplicates by link
          const uniqueProducts = products.filter(
            (product, index, self) =>
              index === self.findIndex(p => p.link === product.link)
          );

          // Sort by members (descending)
          uniqueProducts.sort((a, b) => b.members - a.members);

          // Add sorted rows to table
          uniqueProducts.forEach((product, index) => {
            const tr = document.createElement("tr");
            tr.id = `product-id1`;

            tr.innerHTML = `
              <td>
                <h4 class="group_title">
                  ${index + 1}. <a href="${product.link}">${product.name}</a>
                </h4>
                <p>Total Members: ${product.members}+</p>
              </td>
            `;

            tbody.appendChild(tr);
          });