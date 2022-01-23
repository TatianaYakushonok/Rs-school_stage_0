let menu = document.getElementById('menu');
    let menutoggle = document.getElementById("menutoggle");

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        menutoggle.checked = false;
      }
    }