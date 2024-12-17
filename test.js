document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");
  const ctx = document.getElementById("activityChart");
  if (!ctx) {
    console.error("Canvas element not found");
    return;
  }
  console.log("Canvas element found, initializing Chart.js...");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Activations",
          data: [200, 400, 100, 600, 700, 800, 401, 450, 500, 480, 520, 450],
          borderColor: "#007bff",
          backgroundColor: "rgba(0, 123, 255, 0.1)",
          fill: true,
          tension: 0.3,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } },
    },
  });
});
