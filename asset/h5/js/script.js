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

const input = document.getElementById('searchInput');
const measurer = document.getElementById('widthMeasurer');

// 设置span字体等样式与input一致
function syncMeasurerStyle() {
  const inputStyle = window.getComputedStyle(input);
  measurer.style.font = inputStyle.font;
  measurer.style.letterSpacing = inputStyle.letterSpacing;
  measurer.style.fontSize = inputStyle.fontSize;
  measurer.style.fontWeight = inputStyle.fontWeight;
  measurer.style.fontFamily = inputStyle.fontFamily;
  measurer.style.padding = inputStyle.padding;
}

// 更新input宽度
function adjustInputWidth() {
  measurer.textContent = input.value || input.placeholder;
  syncMeasurerStyle();
  // 至少宽度120px，预留20px间距
  input.style.width = (measurer.offsetWidth + 20) + 'px';
}

// 初始&监听输入
input.addEventListener('input', adjustInputWidth);
// 页面加载时初始化
window.addEventListener('DOMContentLoaded', adjustInputWidth);
