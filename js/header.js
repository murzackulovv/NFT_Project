export const Header = () => {
  const header = document.createElement('header');
  const container = document.createElement('div');

  const logoBox = document.createElement('div');
  const logoBoxItem = document.createElement('ul');
  const logoBoxList1 = document.createElement('li');
  const logoBoxList2 = document.createElement('li');
  const logoBoxList3 = document.createElement('li');
  const logoBoxList1Img = document.createElement('img')
  const logoBoxList2Img = document.createElement('img')
  const logoBoxList3Img = document.createElement('img')

  const navbar = document.createElement('div');
  const navbarLink1 = document.createElement('a');
  const navbarLink2 = document.createElement('a');
  const navbarLink3 = document.createElement('a');


  header.classList.add('header');
  container.classList.add('container');

  logoBox.classList.add('header-logoBox');
  logoBoxItem.classList.add('header-logoBox__item');
  logoBoxList1.classList.add('header-logoBox__list');
  logoBoxList2.classList.add('header-logoBox__list');
  logoBoxList3.classList.add('header-logoBox__list');
  logoBoxList1Img.classList.add('header-logoBox__listImg');
  logoBoxList2Img.classList.add('header-logoBox__listImg');
  logoBoxList3Img.classList.add('header-logoBox__listImg');

  navbar.classList.add('header-navbar');
  navbarLink1.classList.add('header-navbar-links', 'active');
  navbarLink2.classList.add('header-navbar-links');
  navbarLink3.classList.add('header-navbar-links');


  container.append(header);
  header.append(logoBox, navbar);
  logoBox.append(logoBoxItem);
  logoBoxItem.append(logoBoxList1, logoBoxList2, logoBoxList3);
  logoBoxList1.append(logoBoxList1Img)
  logoBoxList2.append(logoBoxList2Img)
  logoBoxList3.append(logoBoxList3Img)
  navbar.append(navbarLink1, navbarLink2, navbarLink3);
  

  logoBoxList1Img.src = '../src/images/Polygon 1.png';
  logoBoxList2Img.src = '../src/images/Polygon 2.png';
  logoBoxList3Img.src = '../src/images/Polygon 3.png';

  navbarLink1.textContent = 'Explore';
  navbarLink2.textContent = 'Trending🔥';
  navbarLink3.textContent = 'FAQ';
  
  return container;
}
