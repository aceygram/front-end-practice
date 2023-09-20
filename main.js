document.getElementById('toggle').addEventListener('change', () => {
  // Your code here for toggle change event
  const monthly = document.querySelector('.monthly');
  monthly.classList.toggle('green');
  const monthlyPlans = document.querySelector('.monthly-plans');
  monthlyPlans.classList.toggle('show');

  const yearly = document.querySelector('.yearly');
  yearly.classList.toggle('white');
  const yearlyPlans = document.querySelector('.yearly-plans');
  yearlyPlans.classList.toggle('show');
});


const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle('active');
    const accordionContent = accordionItem.querySelector('.accordion-content');
    accordionContent.style.display = accordionContent.style.display === 'none' ? 'block' : 'none';
  });
});

// =
// N
// n
// B 
// b 
