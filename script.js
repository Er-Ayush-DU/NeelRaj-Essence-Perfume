function toggleMenu() {
  const sidebar = document.querySelector('#sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('#sidebar');
  sidebar.style.display = 'none'
}

function hideSidebarBG() {
  const sidebar = document.querySelector('.hero_image')
  sidebar.style.display = 'none'
}


const searchBar = document.getElementById('searchBarInput');

searchBar.addEventListener('focus', function () {
  searchBar.placeholder = '';
});

searchBar.addEventListener('blur', function () {
  searchBar.placeholder = 'Search here...';
});
