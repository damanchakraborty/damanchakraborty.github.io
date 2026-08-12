document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const rows = document.querySelectorAll(".project-row");
  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");
      const category = filter.dataset.filter;
      rows.forEach(row => {
        row.classList.toggle("hidden", category !== "all" && row.dataset.category !== category);
      });
    });
  });
});
