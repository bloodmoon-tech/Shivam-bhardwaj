import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const auraRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Check if touchscreen or touch-enabled display
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    ) {
      setIsTouchDevice(true);
      return;
    }

    const isFillableElement = (el: HTMLElement | null) => {
      return !!el?.closest('input, textarea, select, [contenteditable="true"], .fill-input');
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      const target = e.target as HTMLElement | null;

      // Disable and hide moving cursor animation completely whenever hovering or clicking any fillable field/placeholder
      if (isFillableElement(target)) {
        if (isVisibleRef.current) {
          isVisibleRef.current = false;
          setIsVisible(false);
        }
        return;
      }

      // If an input is currently active/focused, keep cursor animation hidden
      const activeEl = document.activeElement as HTMLElement | null;
      if (isFillableElement(activeEl)) {
        if (isVisibleRef.current) {
          isVisibleRef.current = false;
          setIsVisible(false);
        }
        return;
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        currentRef.current.x = e.clientX;
        currentRef.current.y = e.clientY;
      }

      // Check hovered interactive clickable element (buttons, links, case studies)
      if (target) {
        const interactiveEl = target.closest(
          'button, a, [role="button"], .cursor-pointer, [data-cursor], [data-cursor-text]'
        ) as HTMLElement | null;

        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute('data-cursor-text') || '';
          setCursorText(customText);
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      // When clicking any placeholder or input to write something, disable animation immediately
      if (isFillableElement(target)) {
        isVisibleRef.current = false;
        setIsVisible(false);
        return;
      }
      setIsClicked(true);
    };

    const handleMouseUp = () => setIsClicked(false);

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (isFillableElement(target)) {
        isVisibleRef.current = false;
        setIsVisible(false);
      }
    };

    const handleFocusOut = () => {
      // Allow re-enabling on next mouse move outside fillable fields
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (isFillableElement(target)) {
        isVisibleRef.current = false;
        setIsVisible(false);
        return;
      }
      isVisibleRef.current = true;
      setIsVisible(true);
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      currentRef.current.x = e.clientX;
      currentRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('focusin', handleFocusIn, true);
    document.addEventListener('focusout', handleFocusOut, true);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Smooth RAF loop: dot snaps directly to pointer; aura lerps fluidly
    const renderLoop = () => {
      if (isVisibleRef.current) {
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0) translate(-50%, -50%)`;
        }

        const speed = 0.22;
        currentRef.current.x += (targetRef.current.x - currentRef.current.x) * speed;
        currentRef.current.y += (targetRef.current.y - currentRef.current.y) * speed;

        if (auraRef.current) {
          auraRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%)`;
        }
      }

      rafId.current = requestAnimationFrame(renderLoop);
    };

    rafId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('focusin', handleFocusIn, true);
      document.removeEventListener('focusout', handleFocusOut, true);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer fluid trailing aura */}
      <div
        ref={auraRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center will-change-transform transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-emerald-500/15 border-2 border-emerald-500/60 shadow-lg shadow-emerald-500/25'
            : 'w-8 h-8 bg-emerald-500/10 border border-emerald-500/35'
        } ${isClicked ? 'scale-90 bg-emerald-600/30' : ''}`}
        style={{
          transform: `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold text-emerald-900 tracking-tight whitespace-nowrap bg-white/95 px-2 py-0.5 rounded-full shadow-xs border border-emerald-200">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center sharp dot cursor */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full will-change-transform transition-[width,height,background-color] duration-150 ease-out ${
          isHovered
            ? 'w-2 h-2 bg-emerald-600 shadow-xs'
            : 'w-2.5 h-2.5 bg-slate-900/90 shadow-xs'
        } ${isClicked ? 'scale-125 bg-emerald-700' : ''}`}
        style={{
          transform: `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};
