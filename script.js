// Local Form Interactivity Configurations
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const clientName = document.getElementById('name').value.trim();
            const serviceRequested = document.getElementById('serviceType').value;

            if (clientName) {
                // Return clear confirmation response alert
                alert(`Thank you, ${clientName}! Your top notch quote request for "${serviceRequested.toUpperCase()}" clean has been compiled successfully. Our team will verify your setup and reach out soon.`);
                bookingForm.reset();
            }
        });
    }
});
