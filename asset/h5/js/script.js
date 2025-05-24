const searchInput = document.getElementById('searchInput');
    const bgVideo = document.getElementById('bg-video');
    
    searchInput.addEventListener('focus', () => {
      bgVideo.style.filter = 'blur(20px)';
    });
    
    searchInput.addEventListener('blur', () => {
      bgVideo.style.filter = 'blur(0)';
    });
    // 时间显示
    function updateTime() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      document.getElementById('time').textContent = `${h}:${m}:${s}`;
    }
    setInterval(updateTime, 1000);
    updateTime();

    // 搜索
    document.getElementById('searchForm').onsubmit = function(e) {
      e.preventDefault();
      const q = document.getElementById('searchInput').value.trim();
      if (!q) return;
      const engineUrl = document.getElementById('engineSelect').value;
      window.open(engineUrl.replace('%s', encodeURIComponent(q)), '_blank');
    }
