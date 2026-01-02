/**
 * Watermark Parallax
 * Subtle depth effect on the "1" watermark responding to mouse movement.
 */

(function () {
  'use strict';

  // Skip on touch devices and reduced motion preference
  if ('ontouchstart' in window || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const MAX_SHIFT = 30; // Maximum pixel shift
  const body = document.body;
  let rafId = null;
  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;
  let isAnimating = false;

  function setParallax(x, y) {
    body.style.setProperty('--parallax-x', `${x}px`);
    body.style.setProperty('--parallax-y', `${y}px`);
  }

  // Smooth animation loop for reset
  function animate() {
    const dx = targetX - currentX;
    const dy = targetY - currentY;

    // Ease towards target
    currentX += dx * 0.15;
    currentY += dy * 0.15;

    setParallax(currentX, currentY);

    // Stop when close enough
    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      requestAnimationFrame(animate);
    } else {
      currentX = targetX;
      currentY = targetY;
      setParallax(currentX, currentY);
      isAnimating = false;
    }
  }

  function handleMouseMove(e) {
    if (rafId) return; // Throttle with rAF

    rafId = requestAnimationFrame(() => {
      targetX = (e.clientX / window.innerWidth - 0.5) * -MAX_SHIFT;
      targetY = (e.clientY / window.innerHeight - 0.5) * -MAX_SHIFT;

      // Direct update while moving (CSS transition handles smoothing)
      currentX = targetX;
      currentY = targetY;
      setParallax(currentX, currentY);

      rafId = null;
    });
  }

  // Smooth reset on mouse leave
  function handleMouseLeave() {
    targetX = 0;
    targetY = 0;

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animate);
    }
  }

  document.addEventListener('mousemove', handleMouseMove, { passive: true });
  document.addEventListener('mouseleave', handleMouseLeave);
})();
