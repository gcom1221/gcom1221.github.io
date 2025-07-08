class ParticleBackground {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.header = document.querySelector('header');
    this.particles = [];
    this.color = '#ed5565';
    this.count = 20;

    this.setup();
    this.createParticles();
    this.animate = this.animate.bind(this); 
    window.addEventListener('resize', this.resize.bind(this));
    this.animate();
  }

  setup() {
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.opacity = '0.5';
    this.header.style.position = 'relative';
    this.header.prepend(this.canvas);
    this.resize();
  }

  resize() {
    this.canvas.width = this.header.clientWidth;
    this.canvas.height = this.header.clientHeight;
  }

  createParticles() {
    for (var i = 0; i < this.count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        r: Math.random() * 2 + 1,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > this.canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.dy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
    requestAnimationFrame(this.animate);
  }
}