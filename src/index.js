let wrapper = document.querySelector('.wrapper');
let header = document.createElement('header');

header.classList.add('header');
header.innerHTML = `
<nav>
<ul class="nav-menu">
  <li id="Home">Home</li>
  <li id="Menu">Menu</li>
  <li id="Contact">Contact Us</li>
</ul>
</nav>
`;

document.body.appendChild(header)
console.log("runung");
