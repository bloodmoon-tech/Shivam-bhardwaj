import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check if touchscreen or touch-enabled display
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    const container = containerRef.current;
    const aura = auraRef.current;
    const dot = dotRef.current;
    const textSpan = textRef.current;
    if (!container || !aura || !dot) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let isHovered = false;
    let isClicked = false;
    let currentText = '';
    let rafId: number | null = null;

    const isFillableElement = (el: HTMLElement | null) => {
      return !!el?.closest('input, textarea, select, [contenteditable="true"], .fill-input');
    };

    const setVisibility = (visible: boolean) => {
      isVisible = visible;
      container.style.opacity = visible ? '1' : '0';
    };

    const updateHoverState = (hovered: boolean, text: string) => {
      if (isHovered === hovered && currentText === text) return;
      isHovered = hovered;
      currentText = text;

      if (hovered) {
        aura.style.width = '46px';
        aura.style.height = '46px';
        aura.style.backgroundColor = 'rgba(16, 185, 129, 0.14)';
        aura.style.borderColor = 'rgba(16, 185, 129, 0.55)';
        aura.style.boxShadow = '0 8px 20px -4px rgba(16, 185, 129, 0.25)';

        dot.style.width = '8px';
        dot.style.height = '8px';
        dot.style.backgroundColor = '#059669';
      } else {
        aura.style.width = '32px';
        aura.style.height = '32px';
        aura.style.backgroundColor = 'rgba(16, 185, 129, 0.08)';
        aura.style.borderColor = 'rgba(16, 185, 129, 0.35)';
        aura.style.boxShadow = 'none';

        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
      }

      if (textSpan) {
        if (text) {
          textSpan.textContent = text;
          textSpan.style.display = 'inline-block';
        } else {
          textSpan.textContent = '';
          textSpan.style.display = 'none';
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target as HTMLElement | null;

      // Disable when hovering any fillable input or placeholder
      if (isFillableElement(target)) {
        if (isVisible) setVisibility(false);
        return;
      }

      // If an input is currently active/focused, keep cursor hidden
      const activeEl = document.activeElement as HTMLElement | null;
      if (isFillableElement(activeEl)) {
        if (isVisible) setVisibility(false);
        return;
      }

      if (!isVisible) {
        currentX = e.clientX;
        currentY = e.clientY;
        setVisibility(true);
      }

      // Check hovered interactive clickable element
      if (target) {
        const interactiveEl = target.closest(
          'button, a, [role="button"], .cursor-pointer, [data-cursor], [data-cursor-text]'
        ) as HTMLElement | null;

        if (interactiveEl) {
          const customText = interactiveEl.getAttribute('data-cursor-text') || '';
          updateHoverState(true, customText);
        } else {
          updateHoverState(false, '');
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (isFillableElement(target)) {
        setVisibility(false);
        return;
      }
      isClicked = true;
      // Instantly lock coordinates on click so it NEVER jumps or drifts away
      targetX = e.clientX;
      targetY = e.clientY;
      currentX = e.clientX;
      currentY = e.clientY;
    };

    const handleMouseUp = (e: MouseEvent) => {
      isClicked = false;
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (isFillableElement(target)) {
        setVisibility(false);
      }
    };

    const handleMouseLeave = () => {
      setVisibility(false);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (isFillableElement(target)) {
        setVisibility(false);
        return;
      }
      targetX = e.clientX;
      targetY = e.clientY;
      currentX = e.clientX;
      currentY = e.clientY;
      setVisibility(true);
    };

    // Keep coordinates rock-solid during page scroll
    const handleScroll = () => {
      // clientX / clientY remain fixed relative to viewport during scroll
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('focusin', handleFocusIn, true);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Continuous smooth animation loop directly updating DOM transforms
    // Translation and scale are ALWAYS bundled into a single atomic transform string
    const renderLoop = () => {
      if (isVisible) {
        const dotScale = isClicked ? 1.2 : 1;
        const auraScale = isClicked ? 0.9 : 1;

        // Dot stays directly under mouse pointer
        dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${dotScale})`;

        // Aura smoothly lerps to mouse position
        const speed = isClicked ? 0.45 : 0.22;
        currentX += (targetX - currentX) * speed;
        currentY += (targetY - currentY) * speed;

        aura.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${auraScale})`;
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('focusin', handleFocusIn, true);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden opacity-0 transition-opacity duration-150"
      style={{ pointerEvents: 'none' }}
    >
      {/* Outer fluid trailing aura */}
      <div
        ref={auraRef}
        className="fixed top-0 left-0 rounded-full flex items-center justify-center will-change-transform border transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out"
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: 'rgba(16, 185, 129, 0.08)',
          borderColor: 'rgba(16, 185, 129, 0.35)',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      >
        <span
          ref={textRef}
          style={{ display: 'none' }}
          className="text-[10px] font-bold text-emerald-900 tracking-tight whitespace-nowrap bg-white/95 px-2 py-0.5 rounded-full shadow-xs border border-emerald-200"
        />
      </div>

      {/* Center sharp dot cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full will-change-transform shadow-xs transition-[width,height,background-color] duration-150 ease-out"
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
