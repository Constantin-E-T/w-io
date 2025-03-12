'use client';

import { useState, useEffect } from 'react';

interface GridConfig {
  width: number;
  columns: number;
  sideMargin: number;
  topMargin: number;
  gutterSize: number;
  name: string;
}

export default function GridOverlay() {
  const [visible, setVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [currentConfig, setCurrentConfig] = useState<GridConfig>({
    width: 1536,
    columns: 12,
    sideMargin: 130,
    topMargin: 50,
    gutterSize: 20,
    name: 'Desktop'
  });
  
  // Define all breakpoints from the Figma design - More accurate based on screenshots
  const breakpoints: GridConfig[] = [
    // From largest to smallest
    {
      width: 1536,
      columns: 12,
      sideMargin: 130,
      topMargin: 50,
      gutterSize: 20,
      name: '2xl Desktop'
    },
    {
      width: 1280,
      columns: 12,
      sideMargin: 110,
      topMargin: 50,
      gutterSize: 20,
      name: 'xl Desktop'
    },
    {
      width: 1024,
      columns: 6,
      sideMargin: 50,
      topMargin: 50,
      gutterSize: 20,
      name: 'lg Small Desktop/Tablet'
    },
    {
      width: 768,
      columns: 6,
      sideMargin: 30,
      topMargin: 50,
      gutterSize: 20,
      name: 'md Tablet'
    },
    {
      width: 640,
      columns: 4,
      sideMargin: 20,
      topMargin: 28,
      gutterSize: 20,
      name: 'sm Mobile'
    },
    {
      width: 510,
      columns: 4,
      sideMargin: 20,
      topMargin: 28,
      gutterSize: 20,
      name: 'xs Phone'
    }
  ];
  
  // Toggle grid with keyboard sequence "kim" or "conn"
  useEffect(() => {
    const keySequence: string[] = [];
    const validSequences = ['kim', 'conn'];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Continue supporting Ctrl+Shift+G
      if (e.ctrlKey && e.shiftKey && e.key === 'G') {
        setVisible(prev => !prev);
        return;
      }
      
      // For sequence detection - only track alphabetic keys
      if (/^[a-zA-Z]$/.test(e.key)) {
        const key = e.key.toLowerCase();
        
        // Add key to sequence and limit to 4 chars (length of longest sequence)
        keySequence.push(key);
        if (keySequence.length > 4) {
          keySequence.shift();
        }
        
        // Check if current sequence matches any valid sequence
        const currentSequence = keySequence.join('');
        for (const seq of validSequences) {
          if (currentSequence.endsWith(seq)) {
            setVisible(prev => !prev);
            keySequence.length = 0; // Clear sequence after successful match
            break;
          }
        }
      }
    };
    
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      
      // Find the appropriate breakpoint
      let config = breakpoints[0]; // Default to largest
      
      for (let i = 0; i < breakpoints.length; i++) {
        if (width <= breakpoints[i].width) {
          config = breakpoints[i];
        } else {
          break;
        }
      }
      
      // If screen is wider than the largest breakpoint, adjust margins proportionally
      if (width > breakpoints[0].width) {
        const extraWidth = width - breakpoints[0].width;
        const growFactor = 0.08; // How much the margin grows with extra width
        const extraMargin = extraWidth * growFactor;
        config = {
          ...breakpoints[0],
          sideMargin: breakpoints[0].sideMargin + extraMargin,
          name: 'Custom Desktop+'
        };
      }
      
      setCurrentConfig(config);
    };
    
    // Initial calculation
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  if (!visible) return null;

  // Show the container max-width with an outline
  const containerMaxWidth = currentConfig.width;
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Container that matches the design specs */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: containerMaxWidth + 'px',
          height: '100%',
          margin: '0 auto',
          border: '1px dashed rgba(255, 255, 0, 0.5)',
        }}
      >
        {/* Content area with margins */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            paddingTop: `${currentConfig.topMargin}px`,
            paddingLeft: `${currentConfig.sideMargin}px`,
            paddingRight: `${currentConfig.sideMargin}px`,
          }}
        >
          {/* Grid columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${currentConfig.columns}, 1fr)`,
            gap: `${currentConfig.gutterSize}px`,
            height: 'calc(100% - 50px)',
          }}>
            {Array.from({ length: currentConfig.columns }).map((_, i) => (
              <div 
                key={i}
                style={{
                  height: '100%', 
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 0, 0, 0.2)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ 
                  backgroundColor: 'rgba(255, 0, 0, 0.6)', 
                  color: 'white', 
                  padding: '2px 6px', 
                  borderRadius: '0 0 4px 4px',
                  fontSize: '10px',
                }}>
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top margin indicator */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: `${currentConfig.topMargin}px`,
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          borderBottom: '1px dashed rgba(0, 255, 0, 0.5)',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          color: 'rgba(0, 255, 0, 0.8)',
        }}>
          Top Margin: {currentConfig.topMargin}px
        </div>
      </div>
      
      {/* Visualize side margins */}
      <div style={{
        position: 'absolute',
        top: `${currentConfig.topMargin}px`,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '100%',
          maxWidth: `${containerMaxWidth}px`,
          height: '100%',
          position: 'relative',
        }}>
          {/* Left margin */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${currentConfig.sideMargin}px`,
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderRight: '1px dashed rgba(0, 0, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: 'rgba(0, 0, 255, 0.8)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}>
            Side Margin: {Math.round(currentConfig.sideMargin)}px
          </div>
          
          {/* Right margin */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: `${currentConfig.sideMargin}px`,
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderLeft: '1px dashed rgba(0, 0, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: 'rgba(0, 0, 255, 0.8)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}>
            Side Margin: {Math.round(currentConfig.sideMargin)}px
          </div>
        </div>
      </div>
      
      {/* Grid info display */}
      <div style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 10000,
        pointerEvents: 'auto',
        width: 'auto',
      }}>
        <div style={{ marginBottom: '4px', fontWeight: 'bold' }}>
          {currentConfig.name} ({screenWidth}px)
        </div>
        <div>Columns: {currentConfig.columns}</div>
        <div>Side Margin: {Math.round(currentConfig.sideMargin)}px</div>
        <div>Top Margin: {currentConfig.topMargin}px</div>
        <div>Gutter: {currentConfig.gutterSize}px</div>
        <div>Max Width: {containerMaxWidth}px</div>
      </div>
      
      {/* Breakpoints indicator */}
      <div style={{
        position: 'fixed',
        bottom: '70px',
        left: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '11px',
        zIndex: 10000,
        pointerEvents: 'auto',
      }}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Breakpoints:</div>
        {breakpoints.map((bp, index) => (
          <div key={index} style={{ 
            marginBottom: '4px',
            display: 'flex',
            alignItems: 'center',
            opacity: screenWidth <= bp.width && screenWidth > (breakpoints[index+1]?.width || 0) ? 1 : 0.5
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: screenWidth <= bp.width && screenWidth > (breakpoints[index+1]?.width || 0) ? 'lime' : 'white',
              marginRight: '8px'
            }}></div>
            {bp.name}: {bp.width}px / {bp.columns} cols / {bp.topMargin}px top / {bp.sideMargin}px side
          </div>
        ))}
      </div>
      
      {/* Toggle button */}
      <button
        onClick={() => setVisible(false)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '8px 12px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 10000,
          fontSize: '12px',
        }}
      >
        Hide Grid (Ctrl+Shift+G)
      </button>
    </div>
  );
}