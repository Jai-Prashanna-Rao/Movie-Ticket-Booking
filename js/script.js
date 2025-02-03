function bookTicket() {
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let movie = document.getElementById("movie").value;
    let time = document.getElementById("time").value;
    let date = document.getElementById("date").value;
    let location = document.getElementById("location").value;
    let ticketType = document.getElementById("ticketType");
    let ticketText = ticketType.options[ticketType.selectedIndex].text;
    let pricePerTicket = parseInt(ticketType.value);
    let seats = document.getElementById("seats").value.trim();

    if (!validateInputs(name, mobile, seats)) return;

    let totalPrice = pricePerTicket * parseInt(seats);

    let receipt = `
        <h3>Movie Ticket Booking Receipt</h3>
        <p><strong>Booker Name:</strong> ${name}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>Movie:</strong> ${movie}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Ticket Type:</strong> ${ticketText}</p>
        <p><strong>Seats:</strong> ${seats}</p>
        <p><strong>Price per Ticket:</strong> ₹${pricePerTicket}</p>
        <p><strong>Total Price:</strong> ₹${totalPrice}</p>
        <p>Thank you for your booking!</p>
    `;

    document.getElementById("receipt").innerHTML = receipt;
    document.getElementById("receipt").style.display = "block";
}

function validateInputs(name, mobile, seats) {
    if (name === "" || mobile === "") {
        alert("Please enter both name and mobile number.");
        return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return false;
    }
    if (seats <= 0 || isNaN(seats)) {
        alert("Please enter a valid number of seats.");
        return false;
    }
    return true;
}
