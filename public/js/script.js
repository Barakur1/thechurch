// Toggles the mobile/navigation menu open ('flex') or closed ('none')
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Displays a toast notification message for 3 seconds, then hides it
function showMessage(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Prevents default page reload on form submit, clears the inputs, and shows a feedback message
function submitForm(e, msg) {
  e.preventDefault();
  e.target.reset();
  showMessage(msg);
}

// Sermon search input and topic dropdown elements
const search = document.getElementById('sermonSearch');
const filter = document.getElementById('sermonFilter');

// Filters sermon cards based on both search text and selected topic
function filterSermons() {
  // Exit early if either element isn't present on the current page
  if (!search || !filter) return;

  const query = search.value.toLowerCase();
  const topic = filter.value;

  document.querySelectorAll('.sermon').forEach((card) => {
    const matchesText = card.innerText.toLowerCase().includes(query);
    const matchesTopic = topic === 'all' || card.dataset.topic === topic;

    // Show card only if it matches both search text and topic filter
    card.style.display = matchesText && matchesTopic ? 'block' : 'none';
  });
}

// Listen for typing in search box and changes in topic dropdown
if (search) {
  search.addEventListener('input', filterSermons);
}
if (filter) {
  filter.addEventListener('change', filterSermons);
}

// Donation / payment form elements
const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
const cardFields = document.querySelector('.card-fields');
const transferBox = document.querySelector('.transfer-box');
const donationForm = document.querySelector('.give-form');

// Shows card or bank transfer fields depending on the selected payment radio button
function updatePaymentFields() {
  const selected =
    document.querySelector('input[name="payment-method"]:checked')?.value || 'card';

  if (cardFields) {
    cardFields.style.display = selected === 'card' ? 'grid' : 'none';
  }
  if (transferBox) {
    transferBox.style.display = selected === 'bank' ? 'block' : 'none';
  }
}

// Update visible payment fields whenever the user switches payment methods
paymentMethods.forEach((method) => {
  method.addEventListener('change', updatePaymentFields);
});

// Run once on load so the initial payment option matches the UI
updatePaymentFields();

// Handle donation form submission with a thank-you toast message
if (donationForm) {
  donationForm.addEventListener('submit', (e) => {
    submitForm(e, 'Thank you for your generous gift.');
  });
}