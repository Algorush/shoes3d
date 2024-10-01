export const extendedNavbarAnimation = {
  hidden: { y: -50 , opacity: 0},
  show: {
    y: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: 'tween',
    },

  }
}

export const parentStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,  // Adjust the timing as needed
    }
  }
};


export const childVariant = {
  hidden: { opacity: 0, y: 20 }, // Initial state
  show: { opacity: 1, y: 0 }     // Visible state
};

export const headerAnimation = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: 'tween',
    },
  },
};


export const fadeUpAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 0.5 },
  },
};

export const imageScaleAnimation = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
  hide: {
    scale: 2,
    opacity: 0,
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
};

export const slideRightAnimation = {
  hidden: {
    x: '-100%',  // Выезд с левой стороны за пределы экрана
    opacity: 0,
  },
  show: {
    x: '0%',  // Возврат на место
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",  // Плавный переход
    },
  },
  hide: {
    x: '-100%',  // Скрытие снова слева
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const slideLeftAnimation = {
  hidden: {
    x: '100%',  // Выезд с правой стороны за пределы экрана
    opacity: 0,
  },
  show: {
    x: '0%',  // Возврат на место
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",  // Плавный переход
    },
  },
  hide: {
    x: '100%',  // Скрытие снова справа
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};





//ANIMATE FEATURE SECTION

export const titleAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hide:{
    y:100,
    opacity:0,
    transition: {
      type: 'tween',
      bounce: 0.4,
      duration: 0.8,
    },
  }
};

export const fadeInAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  hide:{
    y:100,
    opacity:0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  }
};

export const fadeInWithBlinds = {
  hidden: {
    scaleY: 0,
    opacity: 0,
    transformOrigin: 'bottom', // Задает базовую линию снизу
  },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Плавная анимация для придания реалистичности
    },
  },
  hide: {
    scaleY: 0,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
};



export const subtitleAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hide: {
    x: 100,
    opacity: 0,
    transition: {
      type: 'tween',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

//ANIMATE SERVICES SECTION

export const imageSlideAnimate = {
  hidden: {
    x: -100,
    opacity: 0,
  },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      bounce: 0.4,
      duration: 1,
    },
  },
};


export const cardAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      duration:0.2,
    }
  },
}


export const priceCardAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.2,
    }
  }
}

export const homePageContent = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5, 
    }
  }
};



export const contactAnimation = {
  hidden: {
  
    opacity: 0,
  },

  show: {
    
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.2,
    }
  }
}


