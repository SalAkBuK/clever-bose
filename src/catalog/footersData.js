import BridgeFooter from '../components/BridgeFooter.jsx';
import SwissMonolithFooter from '../components/footers/SwissMonolithFooter.jsx';
import CyberTelemetryFooter from '../components/footers/CyberTelemetryFooter.jsx';

export const CATEGORIES = [
  { id: 'all', label: 'All Footers' },
  { id: 'illustrated', label: 'Illustrated & Parallax' },
  { id: 'modernist', label: 'Swiss Modernist' },
  { id: 'cyber', label: 'Cyber & Telemetry' },
  { id: 'concepts', label: 'In Atelier / Concepts' },
];

export const FOOTERS_CATALOG = [
  {
    id: 'grand-imperial-viaduct',
    name: 'The Grand Imperial Viaduct',
    subtitle: '1888 Steam Train Panoramic Viaduct',
    era: 'Victorian Steampunk (1888)',
    category: 'illustrated',
    status: 'ready',
    featured: true,
    aspectRatio: '2172 / 724',
    dimensions: '2172 × 724 px (3.000 : 1)',
    previewBg: '#f6c97c',
    component: BridgeFooter,
    tags: ['Canvas Art', 'WebP Sprite', 'Balustrade Occlusion', '60 FPS Quad', 'Container Queries'],
    summary:
      'A monumental hand-engraved Scottish railway viaduct suspended 46m above tidal waters. A seamless 4-carriage steam locomotive crosses the bridge while its wheels are occluded behind stone balustrades and pillar caps.',
    curatorialNotes: [
      'Artwork based on Victorian steel-plate civil engineering engravings.',
      'Calibrated wheel-to-deck baseline (+1.4% container height) seating wheels into the recessed track bed behind the stone parapet.',
      'Staggered scroll reveal on the upper sky typography with zero overlap onto moving locomotive chimneys.',
      'Hardware-accelerated 3D GPU transforms with linear continuous linear subpixel travel across the 2,172px span.',
    ],
    palette: [
      { hex: '#f6c97c', name: 'Aged Parchment', role: 'Sky & Stage Background' },
      { hex: '#231b14', name: 'Iron Gall Ink', role: 'Engraving Linework & Headers' },
      { hex: '#453628', name: 'Raw Umber', role: 'Bridge Masonry Shading' },
      { hex: '#a83606', name: 'Terracotta Red', role: 'Heraldic Est. 1888 Badge' },
      { hex: '#6e5843', name: 'Antique Bronze', role: 'Body Copy & Link Tones' },
    ],
    specs: {
      framerate: '60.1 FPS (CDP Verified)',
      layers: '4 Stacking Layers (Base, Train, Foreground Occlusion, Sky Content)',
      animationType: 'GPU translate3d + 140-Frame Lossless WebP Sprite',
      renderBudget: '9.2 kB CSS, zero third-party canvas overhead',
      responsiveness: 'Guaranteed 3.000 aspect ratio across 12 viewports',
    },
    codeSnippet: `import BridgeFooter from './components/BridgeFooter.jsx';
import './components/BridgeFooter.css';

export default function MySite() {
  return (
    <div className="site-layout">
      {/* ... your main page content ... */}
      <BridgeFooter id="footer" />
    </div>
  );
}`,
  },
  {
    id: 'swiss-monolith',
    name: 'Neue Form Systematik',
    subtitle: '1968 Swiss International Typographic Style',
    era: 'Mid-Century Modernist (1968)',
    category: 'modernist',
    status: 'ready',
    featured: false,
    aspectRatio: '16 / 7',
    dimensions: 'Responsive Modular Grid',
    previewBg: '#0c0d0f',
    component: SwissMonolithFooter,
    tags: ['Swiss Style', 'Live World Clocks', 'Modular Grid', 'Akzidenz Grotesk', 'Tactile'],
    summary:
      'Rigorous mathematical order inspired by Josef Müller-Brockmann and the Zurich School of Arts. Features live world clocks for Zurich, Tokyo, and San Francisco, kinetic column rules, and high-contrast typography.',
    curatorialNotes: [
      'Strict modular column hierarchy with 1px hairline dividing rules.',
      'Real-time ticking UTC/local clocks synced via internal ticker.',
      'Asymmetric hero branding paired with functional monospace discipline.',
      'Swiss vermilion (#ff3b00) accent accents signaling active system operations.',
    ],
    palette: [
      { hex: '#0c0d0f', name: 'Obsidian Basalt', role: 'Stage Background' },
      { hex: '#ff3b00', name: 'Swiss Vermilion', role: 'Brand Accent & Status Dot' },
      { hex: '#f4f4f2', name: 'Pure Chalk', role: 'Primary Typography' },
      { hex: '#ffb000', name: 'Amber Glow', role: 'Live Clock Numbers' },
      { hex: '#7d8492', name: 'Graphite Slate', role: 'Column Indexes & Rules' },
    ],
    specs: {
      framerate: '60 FPS CSS Transitions + 1Hz Atomic Clock Sync',
      layers: '3 Structural Tiers (Meta Strip, Body Grid, Colophon)',
      animationType: 'CSS Hover Micro-Transitions & Live Time React State',
      renderBudget: '4.8 kB CSS, zero external fonts required',
      responsiveness: 'Adaptive 3-tier container queries (@container swiss-stage)',
    },
    codeSnippet: `import SwissMonolithFooter from './components/footers/SwissMonolithFooter.jsx';
import './components/footers/SwissMonolithFooter.css';

export default function MySite() {
  return (
    <div className="site-layout">
      <SwissMonolithFooter id="footer" />
    </div>
  );
}`,
  },
  {
    id: 'cyber-telemetry',
    name: 'Neo-Tokyo 2099',
    subtitle: 'Orbital Telemetry & Quantum Matrix Terminal',
    era: 'Cyberpunk Sci-Fi (2099)',
    category: 'cyber',
    status: 'ready',
    featured: false,
    aspectRatio: '16 / 7.5',
    dimensions: 'Responsive Terminal Grid',
    previewBg: '#080a0f',
    component: CyberTelemetryFooter,
    tags: ['Terminal HUD', 'Animated SVG Radar', 'Audio Visualizer', 'Telemetry Readouts', 'Phosphor Glow'],
    summary:
      'A dense, high-frequency cybernetic terminal footer. Incorporates an animated 360° radar sweep beam, dynamic audio waveform equalizer, geodetic satellite telemetry, and encrypted transmission protocols.',
    curatorialNotes: [
      'Continuous 360° rotating radar sweep line with fading blip targets.',
      'Dynamic CSS-pulsing 16-channel audio frequency visualizer.',
      'Real-time packet counter incrementing with orbital simulation logic.',
      'Phosphor cyber cyan (#00e5ff) and amber glow (#ffb000) terminal hierarchy.',
    ],
    palette: [
      { hex: '#080a0f', name: 'Deep Space Void', role: 'Terminal Chassis' },
      { hex: '#00e5ff', name: 'Cyber Cyan', role: 'Radar Vector & Active Prompts' },
      { hex: '#ffb000', name: 'Phosphor Amber', role: 'Telemetry Values & Warning Tags' },
      { hex: '#00ff66', name: 'Matrix Green', role: 'Audio EQ & Link Hover State' },
      { hex: '#8b949e', name: 'Terminal Gray', role: 'Monospace Narrative Text' },
    ],
    specs: {
      framerate: '60 FPS GPU Keyframes + 1.5s Packet Flux',
      layers: 'HUD Bar, Telemetry Matrix, Equalizer, Command Strip',
      animationType: 'SVG Keyframe Sweep + CSS Height Waveform Transforms',
      renderBudget: '5.2 kB CSS, pure vector SVG graphics',
      responsiveness: 'Single-column HUD collapse under 600px',
    },
    codeSnippet: `import CyberTelemetryFooter from './components/footers/CyberTelemetryFooter.jsx';
import './components/footers/CyberTelemetryFooter.css';

export default function MySite() {
  return (
    <div className="site-layout">
      <CyberTelemetryFooter id="footer" />
    </div>
  );
}`,
  },
  {
    id: 'solaris-deep-trench',
    name: 'Solaris Bathymetry',
    subtitle: 'Bioluminescent Abyssal Marine Research Trench',
    era: 'Oceanographic Atelier (1974)',
    category: 'concepts',
    status: 'concept',
    featured: false,
    aspectRatio: '16 / 7',
    dimensions: 'Bathymetric Canvas',
    previewBg: '#05101a',
    component: null,
    tags: ['Bathymetric Contours', 'Bioluminescence', 'Hydrophone Audio', 'Marine Blueprints'],
    summary:
      'Concept: Interactive depth-meter footer exploring the Mariana Trench. Animated SVG contour pressure waves, bioluminescent jellyfish particles, and oceanic telemetry as the user hovers over depths from 2,000m to 11,000m.',
    curatorialNotes: [
      'Topography derived from oceanic bathymetry elevation surveys.',
      'Subsurface particle dynamics reacting to cursor movement.',
      'Deep sapphire to abyssal black color ramp with neon bioluminescent accents.',
    ],
    palette: [
      { hex: '#05101a', name: 'Abyssal Trench', role: 'Deep Sea Chassis' },
      { hex: '#00ffa3', name: 'Bioluminescent Teal', role: 'Jellyfish Glow & Contours' },
      { hex: '#0088cc', name: 'Oceanic Cobalt', role: 'Depth Waves' },
      { hex: '#7fd8ff', name: 'Surface Sunlight', role: 'Metadata Readouts' },
    ],
    specs: {
      framerate: 'In Development (Canvas 2D / WebGL)',
      layers: 'Depth Contours, Marine Snow, Hydrophone HUD',
      animationType: 'Fluid Physics + Contour Distortion',
      renderBudget: 'Target < 25 kB',
      responsiveness: 'Fluid Vector Topography',
    },
    codeSnippet: `// Blueprint under active development in the Atelier
// To contribute or request this footer, see catalog guide.`,
  },
  {
    id: 'kyoto-paper-garden',
    name: 'Kyoto Engawa Garden',
    subtitle: 'Wabi-Sabi Autumn Veranda & Kinetic Sakura',
    era: 'Traditional Japanese / Modern Minimalist',
    category: 'concepts',
    status: 'concept',
    featured: false,
    aspectRatio: '16 / 7',
    dimensions: 'Washi Paper Canvas',
    previewBg: '#f2eee6',
    component: null,
    tags: ['Wabi-Sabi', 'Kinetic Sakura', 'Bamboo Chime', 'Washi Texture', 'Zen Aesthetics'],
    summary:
      'Concept: A peaceful tatami & engawa veranda overlooking a Kyoto rock garden. Gentle autumn maple leaves and sakura blossom petals flutter dynamically across the screen, settling upon stone lanterns on scroll.',
    curatorialNotes: [
      'Authentic washi paper grain texture background with sumi-e ink linework.',
      'Subtle wind physics engine for realistic petal drift and aerodynamic tumble.',
      'Minimalist vertical typography inspired by Japanese editorial book craft.',
    ],
    palette: [
      { hex: '#f2eee6', name: 'Raw Washi Paper', role: 'Veranda Background' },
      { hex: '#1a1817', name: 'Sumi-e Charcoal', role: 'Calligraphy & Wood Columns' },
      { hex: '#c85a48', name: 'Kyoto Vermilion Maple', role: 'Drifting Leaves' },
      { hex: '#6a7860', name: 'Bamboo Moss', role: 'Garden Stone Shading' },
    ],
    specs: {
      framerate: 'In Development (2D Wind Physics)',
      layers: 'Tatami Screen, Veranda Deck, Leaf Particles, Vertical Typography',
      animationType: 'Verlet Particle Integration',
      renderBudget: 'Target < 15 kB',
      responsiveness: 'Responsive Vertical/Horizontal Kanji Grid',
    },
    codeSnippet: `// Blueprint under active development in the Atelier
// To contribute or request this footer, see catalog guide.`,
  },
];
