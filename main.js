const hamurger = document.querySelector('.hamurger-layer');
hamurger.addEventListener('click', () => {
  const menu = document.querySelectorAll('.menu-together');
  menu.forEach((m) => {
    m.classList.toggle('show-block');
  })
});


document.getElementById('toggle').addEventListener('change', () => {
  // Your code here for toggle change event
  const monthly = document.querySelector('.monthly');
  monthly.classList.toggle('green');
  const monthlyPlans = document.querySelector('.monthly-plans');
  monthlyPlans.classList.toggle('show-flex');

  const yearly = document.querySelector('.yearly');
  yearly.classList.toggle('white');
  const yearlyPlans = document.querySelector('.yearly-plans');
  yearlyPlans.classList.toggle('show-flex');
});


const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle('active');
    const accordionContent = accordionItem.querySelector('.accordion-content');
    const arrow = accordionItem.querySelector('.arrow'); // Get the arrow within the clicked item

    if (accordionItem.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      arrow.style.transform = 'rotate(180deg)';
    } else {
      accordionContent.style.maxHeight = '0';
      arrow.style.transform = 'rotate(0deg)';
    }
  });
});
// =
// N
// n
// B 
// b 
