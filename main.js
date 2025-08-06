  const minLoadingTime = 1000; // Tối thiểu 1 giây
  const startTime = Date.now();

  window.addEventListener("load", () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minLoadingTime - elapsed);

    setTimeout(() => {
      const mainLoading = document.getElementById('mainLoading');
      if (mainLoading) {
        mainLoading.style.opacity = '0';
        setTimeout(() => {
          mainLoading.style.display = 'none';
        }, 500); // chờ animation mờ dần hoàn tất
      }
    }, remaining);
  });
