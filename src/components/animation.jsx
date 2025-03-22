import React, { useState, useEffect, useRef } from 'react';

const Animation1 = ({ children, direction = 'left', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  // Determine initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-100%)';
      case 'right': return 'translateX(100%)';
      case 'top': return 'translateY(-100%)';
      case 'bottom': return 'translateY(100%)';
      default: return 'translateX(-100%)';
    }
  };
  
  // Check if element is in viewport
  const checkVisibility = () => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    // Consider element visible when it's in the viewport with some margin
    const isElementVisible = 
      rect.top <= windowHeight * 0.9 && // 90% of viewport height
      rect.bottom >= windowHeight * 0.1 && // 10% of viewport height
      rect.left <= windowWidth &&
      rect.right >= 0;
    
    setIsVisible(isElementVisible);
  };
  
  useEffect(() => {
    // Use multiple detection methods for maximum reliability
    
    // 1. Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: [0.1, 0.5], // Check at multiple thresholds
        rootMargin: '100px 0px'
      }
    );
    
    // 2. Scroll event listener (as backup)
    const handleScroll = () => {
      checkVisibility();
    };
    
    // 3. Resize event (in case window size changes)
    const handleResize = () => {
      checkVisibility();
    };
    
    // 4. Initial check after small delay
    const initialCheckTimer = setTimeout(() => {
      checkVisibility();
    }, 300);
    
    // Set up all listeners
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Check on initial load
    checkVisibility();
    
    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(initialCheckTimer);
    };
  }, []);
  
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0)' : getInitialTransform(),
    transition: `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: 'opacity, transform',
    position: 'relative',
    zIndex: 1
  };
  
  return (
    <div ref={ref} style={animationStyle} className={className}>
      {children}
    </div>
  );
};

export default Animation1;