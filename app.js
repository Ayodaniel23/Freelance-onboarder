function generateInvoice() {
    // Get input values
    var clientName = document.getElementById("client-name").value;
    var serviceDescription = document.getElementById("service-description").value;
    var rate = parseFloat(document.getElementById("rate").value);
    var gstRate = parseFloat(document.getElementById("gst").value);

    // Validation
    if (!clientName || !serviceDescription || isNaN(rate) || isNaN(gstRate)) {
        alert("Please fill in all fields.");
        return;
    }

    // Calculate GST and total
    var gstAmount = (rate * gstRate) / 100;
    var totalAmount = rate + gstAmount;

    // Generate invoice content
    var invoiceContent = `
        <h2>Invoice for ${clientName}</h2>
        <p><strong>Service Description:</strong> ${serviceDescription}</p>
        <p><strong>Rate:</strong> ₹${rate.toFixed(2)}</p>
        <p><strong>GST (${gstRate}%):</strong> ₹${gstAmount.toFixed(2)}</p>
        <p><strong>Total:</strong> ₹${totalAmount.toFixed(2)}</p>
    `;

    // Show the generated invoice
    var output = document.getElementById("invoice-output");
    output.innerHTML = invoiceContent;
    output.style.display = "block";
}