//chart 7
const ctx = document.getElementById("activityChart").getContext("2d");
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
        borderColor: "#007BFF",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        fill: true,
        tension: 0,
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "#007BFF",
      },
      {
        label: "Suspended",
        data: [150, 350, 200, 500, 600, 700, 300, 350, 400, 390, 430, 410],
        borderColor: "#0038A8",
        backgroundColor: "rgba(0, 56, 168, 0.2)",
        fill: true,
        tension: 0,
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "#0038A8",
      },
      {
        label: "Termination",
        data: [100, 200, 150, 300, 400, 500, 250, 270, 300, 320, 350, 300],
        borderColor: "#ADD8E6",
        backgroundColor: "rgba(173, 216, 230, 0.3)",
        fill: true,
        tension: 0,
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "#ADD8E6",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true, grid: { display: false } },
      x: { grid: { display: false } },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: "Activity",
        align: "start",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw;
            return `${label}: ${value} activations`;
          },
        },
        titleFont: { weight: "bold" },
        bodyFont: { weight: "bold" },
      },
    },
  },
});
//chart 8: pie chart
const plansCtx = document.getElementById("plansChart").getContext("2d");
new Chart(plansCtx, {
  type: "pie",
  data: {
    labels: ["Plan 1", "Plan 2", "Plan 3"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(0, 56, 168, 0.9)",
          "rgba(0, 123, 255, 0.7)",
          "rgba(173, 216, 230, 0.8)",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 14,
          },
          color: "#333",
        },
      },
      title: {
        display: true,
        text: "Plans",
        align: "start",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  },
});
