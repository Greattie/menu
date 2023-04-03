const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://www.allrecipes.com/thmb/yzEB2ltNpAW7JUiImTLz8oj4gQM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24530-ButtermilkPancakesII-mfs-beauty-3385-4x3-69cdcbfc09fa4aa999e2a3e18b8d68a8.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFtYnVyZ2VyJTIwbWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1629993470807-33bfa488153b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdvZHppbGxhJTIwbWlsa3NoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdW50cnklMjBkZWxpZ2h0JTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1586917049360-368e453444ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwbWlsa3NoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1559394473-f5c8303a6d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhY29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://plus.unsplash.com/premium_photo-1664391779617-c81011293ef6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyJTIwYW5kJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.unsplash.com/photo-1625943554499-342838b9c37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvdXBsZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1626056087728-05c3d180911a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHN0ZWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const section = document.querySelector('.menu-container')
  
  window.addEventListener('DOMContentLoaded', function(){
   let displaySection =  menu.map(function(item){
        
    return `<div class="card-wrapper">
    <!-- MENU CARD 1 -->
    <div class="card">
      <div class="img">
        <img src=${item.img} alt=${item.title} />
      </div>

      <div class="card-text">
        <div class="card-text-header">
          <p class="title">${item.title}</p>
          <p class="price">${item.price}</p>
        </div>
        <div class="card-description">
${item.desc}
        </div>
      </div>
    </div>

   </div>`
      })
      displaySection = displaySection.join('')
      section.innerHTML = displaySection
})
