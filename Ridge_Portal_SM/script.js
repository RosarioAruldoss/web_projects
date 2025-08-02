document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const welcomeMessage = document.getElementById('welcome-message');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Dashboard Cards
    const salesReportCard = document.getElementById('sales-report-card');
    const stockDataCard = document.getElementById('stock-data-card');
    
    // Content Sections
    const salesReportSection = document.getElementById('sales-report-section');
    const stockDataSection = document.getElementById('stock-data-section');
    
    // Back Buttons
    const backFromSales = document.getElementById('back-from-sales');
    const backFromStock = document.getElementById('back-from-stock');
    
    // Download Buttons
    const downloadSalesReport = document.getElementById('download-sales-report');

    // Simulated user data (in a real app, this would come from a server)
    const validCredentials = [
        { username: 'sales@ridgehousehold.com', password: 'ridge123', name: 'Sales Team' },
        { username: 'user2@example.com', password: 'password2', name: 'User Two' }
    ];

    // Login Form Submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Check credentials
        const user = validCredentials.find(
            cred => (cred.username === username || cred.username === username) && cred.password === password
        );
        
        if (user) {
            // Successful login
            loginContainer.style.display = 'none';
            dashboardContainer.style.display = 'flex';
            welcomeMessage.textContent = `Welcome, ${user.name}`;
            
            // Store user session (in a real app, use proper session management)
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('userName', user.name);
        } else {
            // Failed login
            alert('Invalid credentials. Please try again.');
        }
    });

    // Logout Functionality
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('userName');
        loginContainer.style.display = 'flex';
        dashboardContainer.style.display = 'none';
        loginForm.reset();
        
        // Hide any open sections
        salesReportSection.style.display = 'none';
        stockDataSection.style.display = 'none';
    });

    // Check if user is already logged in (page refresh)
    if (sessionStorage.getItem('loggedIn') === 'true') {
        loginContainer.style.display = 'none';
        dashboardContainer.style.display = 'flex';
        welcomeMessage.textContent = `Welcome, ${sessionStorage.getItem('userName') || 'User'}`;
    }

    // Dashboard Card Click Handlers
    salesReportCard.addEventListener('click', function() {
        showSection(salesReportSection);
    });

    stockDataCard.addEventListener('click', function() {
        showSection(stockDataSection);
    });

    // Back Button Handlers
    backFromSales.addEventListener('click', function() {
        hideSection(salesReportSection);
    });

    backFromStock.addEventListener('click', function() {
        hideSection(stockDataSection);
    });

    // Download Sales Report
    downloadSalesReport.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real app, this would download the actual file
        alert('Downloading Sales Report...');
        // Simulate file download
        simulateDownload('Ridge_Household_Sales_Report_' + getCurrentDate() + '.xlsx');
    });

    // Helper function to show a section
    function showSection(section) {
        salesReportSection.style.display = 'none';
        stockDataSection.style.display = 'none';
        section.style.display = 'block';
    }

    // Helper function to hide a section
    function hideSection(section) {
        section.style.display = 'none';
    }

    // Helper function to simulate file download
    function simulateDownload(filename) {
        console.log(`Simulating download of ${filename}`);
        // In a real implementation, you would fetch the file from the server
        // and trigger a download using the Blob API or similar
    }

    // Helper function to get current date in YYYY-MM-DD format
    function getCurrentDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
    }

    // Set the current date in the sales report section
    document.getElementById('sales-report-date').textContent = getCurrentDate();
});