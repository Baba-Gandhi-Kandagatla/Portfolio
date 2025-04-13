// Animation variants for consistent hover effects across the portfolio
export const hoverVariants = {
  // Subtle scale up effect for links and small UI elements
  subtle: {
    initial: {},
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    tap: { 
      scale: 0.95 
    }
  },
  
  // Lift effect for cards and larger elements
  lift: {
    initial: {},
    hover: { 
      y: -8,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { 
      y: -2,
      transition: { duration: 0.1 }
    }
  },
  
  // Button hover effect with lift and subtle scale
  button: {
    initial: {},
    hover: { 
      y: -3,
      boxShadow: "0 4px 8px rgba(var(--primary) / 0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { 
      y: -1,
      boxShadow: "0 2px 4px rgba(var(--primary) / 0.2)",
      transition: { duration: 0.1 }
    }
  },
  
  // Image zoom effect for visual content
  zoom: {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  },
  
  // Text hover effect with shadow
  text: {
    initial: {},
    hover: {
      textShadow: "0 0 8px rgb(var(--primary) / 0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  },
  
  // Badge hover effect
  badge: {
    initial: {},
    hover: { 
      scale: 1.1, 
      y: -2,
      transition: { duration: 0.2 }
    }
  },
  
  // Tab trigger hover effect
  tab: {
    initial: {},
    hover: { 
      y: -2,
      backgroundColor: "rgba(var(--primary) / 0.1)",
      transition: { duration: 0.2 }
    },
    tap: { 
      y: 0,
      backgroundColor: "rgba(var(--primary) / 0.2)",
      transition: { duration: 0.1 }
    }
  }
};

// Shared transition settings for consistency
export const transitions = {
  default: { duration: 0.3, ease: "easeOut" },
  slow: { duration: 0.5, ease: "easeOut" },
  fast: { duration: 0.2, ease: "easeOut" }
};