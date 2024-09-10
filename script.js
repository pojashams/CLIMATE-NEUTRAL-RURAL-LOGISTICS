
document.getElementById('deliveryMethod').addEventListener('change', function() {
    const method = this.value;
    let emissions = 0;

    // Simulate CO2 emissions for different methods
    if (method === 'home') {
        emissions = 5.4; // Example value for home delivery
    } else if (method === 'locker') {
        emissions = 3.2; // Example value for parcel lockers
    } else if (method === 'pickup') {
        emissions = 4.1; // Example value for pickup points
    }

    document.getElementById('emissionsResult').textContent = emissions.toFixed(2);
});

// Set up a simple bar chart to show results using Chart.js
const ctx = document.getElementById('co2Chart').getContext('2d');
const co2Chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Home Delivery', 'Parcel Locker', 'Pickup Point'],
        datasets: [{
            label: 'CO2 Emissions (kg)',
            data: [5.4, 3.2, 4.1],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
