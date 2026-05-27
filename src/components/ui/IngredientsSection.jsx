import { motion } from 'framer-motion'
import { Leaf, Droplets, Sun, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

const smoothEase = [0.16, 1, 0.3, 1]

const ingredients = [
  {
    name: "Amla (Indian Gooseberry)",
    desc: "Boosts scalp health with Vitamin C and antioxidants.",
    icon: <Sun size={24} />
  },
  {
    name: "Bhringraj",
    desc: "Known as the King of Hair Growth, prevents premature greying.",
    icon: <Leaf size={24} />
  },
  {
    name: "Neem",
    desc: "Purifies and protects the scalp from dandruff and infections.",
    icon: <Sparkles size={24} />
  },
  {
    name: "Coconut Oil",
    desc: "Deep nourishment and conditioning from root to tip.",
    icon: <Droplets size={24} />
  }
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: smoothEase } 
  }
}

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let player;
    
    const initPlayer = () => {
      player = new window.YT.Player(videoRef.current, {
        videoId: 'RXhISDkRzDE',
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          disablekb: 1,
          fs: 0,
          showinfo: 0
        },
        events: {
          onReady: (e) => e.target.playVideo(),
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.playVideo();
            }
          }
        }
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        initPlayer();
      };
      document.body.appendChild(tag);
    } else if (window.YT.Player) {
      initPlayer();
    }

    return () => {
      if (player && player.destroy) player.destroy();
    };
  }, []);

  return (
    <div 
      style={{
        position: 'absolute',
        top: '-30%',
        left: '-20%',
        width: '140%',
        height: '160%',
        pointerEvents: 'none',
        filter: 'contrast(1.05) brightness(1.1) saturate(1.15)',
      }}
    >
      <div ref={videoRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="section ingredients-section">
      <div className="container">
        <div className="ingredients-layout">
          <motion.div 
            className="ingredients-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: smoothEase }}
          >
            {/* Spectacular Typography Section */}
            <div style={{ marginBottom: '3.5rem', position: 'relative', zIndex: 2 }}>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: smoothEase }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}
              >
                <div style={{ height: '2px', width: '40px', background: 'var(--color-accent)' }}></div>
                <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 700 }}>Pure Ingredients</span>
              </motion.div>
              
              <h2 className="section-title" style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', marginBottom: '1.25rem', lineHeight: 1.05, color: '#091B11', letterSpacing: '-0.02em' }}>
                Nature's Best<br/>
                <span style={{ 
                  fontStyle: 'italic', 
                  fontWeight: 400, 
                  background: 'linear-gradient(135deg, #D4AF37, #F3CA40, #AA8C2C)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>Kept Secrets</span>
              </h2>
              
              <p className="section-text" style={{ fontSize: '1.2rem', color: '#4a5d52', maxWidth: '95%', lineHeight: 1.7, fontWeight: 400 }}>
                Each drop is an infusion of cold-pressed oils and sun-dried herbs, carefully selected to restore and elevate your hair's natural vitality.
              </p>
            </div>

            {/* Vibrant, Bright Video Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: smoothEase }}
              style={{
                position: 'relative', 
                width: '100%', 
                paddingBottom: '55%', 
                borderRadius: '32px', 
                overflow: 'hidden',
                boxShadow: '0 40px 80px -15px rgba(212, 175, 55, 0.2), 0 0 0 1px rgba(212, 175, 55, 0.1)', // Glowing gold aura
                transform: 'translateZ(0)', 
                backgroundColor: '#f9f9f9',
                zIndex: 1
              }}
            >
              <BackgroundVideo />
            </motion.div>
            

          </motion.div>
          
          {/* Right side is empty here because the 3D canvas is showing the bottle & floating ingredients */}
          <div className="ingredients-spacer"></div>
        </div>
      </div>
    </section>
  )
}
