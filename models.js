//For models
// models.js

// Function to handle asset transfer
function transferAsset() {
    // Get values from input fields
    var assetCode = document.getElementById('asset_code').value;
    var newOwnerTIN = document.getElementById('tin').value;

    // Validate input values
    if (assetCode.trim() === '' || newOwnerTIN.trim() === '') {
        alert('Please fill in all the required fields.');
        return;
    }

    // Assuming you have an API endpoint to update the database with the new owner
    // You can replace the following code with an actual API call using fetch or any other method
    // For demonstration purposes, we'll just display a confirmation alert
    var currentOwner = "Current Owner"; // Replace with actual current owner data
    var assetName = "Asset Name"; // Replace with actual asset name data

    var confirmationMessage = `Asset: ${assetName}\nCurrent Owner: ${currentOwner}\nNew Owner: ${newOwnerTIN}`;
    
    // Display confirmation alert
    if (confirm(confirmationMessage)) {
        // Assuming you have a function to update the database (replace with actual implementation)
        updateDatabase(assetCode, newOwnerTIN);

        // Redirect back to the home page
        window.location.href = 'index.html';
    }
}

// Function to update the database (replace with actual implementation)
function updateDatabase(assetCode, newOwnerTIN) {
    // Implement the logic to update the database with the new owner information
    // This can involve making an API call, sending a request to a server, etc.
    console.log(`Updating database for Asset ${assetCode} with new owner TIN ${newOwnerTIN}`);
}
