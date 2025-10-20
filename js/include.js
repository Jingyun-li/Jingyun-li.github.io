document.addEventListener("DOMContentLoaded", function() {
  const sidebarContainer = document.getElementById("sidebar-container");
  if (sidebarContainer) {
    fetch("sidebar.html")
      .then(response => response.text())
      .then(html => {
        sidebarContainer.innerHTML = html;
      })
      .catch(err => console.error("Error loading sidebar:", err));
  }
});
