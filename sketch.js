let seaweeds = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-container'); // 將畫布嵌入到網站中的一個容器中
  canvas.style('pointer-events', 'none'); // 禁用畫布的指針事件
  background(0, 0, 0, 0); // 設定背景為透明
  // 初始化每條海草的長度和擺動頻率
  for (let j = 0; j < 40; j++) {
    let seaweed = {
      x: j * (width / 40),
      segmentLength: 10,
      numSegments: int(random(height / 3, height / 2) / 10), // 每條海草的長度不一樣
      frequency: random(0.02, 0.05), // 調快擺動頻率
      weight: random(30, 50), // 調大線條粗細
      color: [random(50, 255), random(50, 255), random(50, 255), random(50, 100)] // 設定顏色透明度
    };
    seaweeds.push(seaweed);
  }
}

function draw() {
  clear(); // 清除畫布，保持背景透明
  
  // 繪製多條海草
  for (let seaweed of seaweeds) {
    // 設定每條海草的粗細和顏色
    strokeWeight(seaweed.weight);
    stroke(seaweed.color);
    noFill(); // 確保不填充內部
    
    let x = seaweed.x;
    let y = height;
    beginShape();
    for (let i = 0; i < seaweed.numSegments; i++) {
      let nextX = x + sin(frameCount * seaweed.frequency + i * 0.1) * 2; // 調小搖晃幅度
      let nextY = y - seaweed.segmentLength;
      vertex(nextX, nextY);
      x = nextX;
      y = nextY;
    }
    endShape();
  }
}