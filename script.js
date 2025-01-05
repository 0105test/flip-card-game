const imageGroups = {
  1: ['imgB.jpg', 'imgC.jpg', 'imgD.jpg'],
  2: ['imgE.jpg', 'imgF.jpg', 'imgG.jpg'],
  3: ['imgI.jpg', 'imgJ.jpg', 'imgK.jpg']
};

// 初始化事件監聽器
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => handleCellClick(cell));
});

// 點擊事件處理
function handleCellClick(cell) {
  const group = cell.dataset.group;
  const randomImage = getRandomImage(imageGroups[group]);

  // 更新圖片並顯示
  const img = cell.querySelector('img');
  const originalSrc = img.src; // 保存原始圖片路徑
  img.src = randomImage;

  // 1秒後自動翻回原圖
  setTimeout(() => {
    img.src = originalSrc;
  }, 1000);
}

// 隨機選擇圖片
function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
