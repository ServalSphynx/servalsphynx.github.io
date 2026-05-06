    function toggleDark() {
      const element = document.body;
      element.classList.toggle("dark-mode");
      if (element.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      }
      else {
        localStorage.setItem("theme", "light");
      }
    }

    function checkDark() {
      if (localStorage.getItem("theme") == "dark") {
        toggleDark();
      }
      else if (localStorage.getItem("theme") == "light") {
        return false;
      }
      else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	      toggleDark();
      }
    }
