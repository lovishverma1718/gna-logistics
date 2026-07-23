import { IMAGES } from '../assets/images';
import { ServiceItem, IndustryItem, ProcessStep, StatisticItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'moffett-forklift',
    title: 'Truck Mounted Forklift Deliveries',
    subtitle: 'Self-Unloading Precision for Rough Terrain Jobsites',
    description: 'Our all-terrain Moffett truck-mounted forklifts eliminate jobsite waiting time, placing heavy loads precisely where your construction crew needs them.',
    fullDescription: 'GNA Logistics operates a modern fleet of truck-mounted Moffett forklifts designed specifically for tight jobsites, uneven terrain, and unpaved construction zones across Edmonton and Alberta. With zero reliance on jobsite equipment or manual labor, our certified operators unload and maneuver heavy building materials, palletized cargo, and specialized equipment directly to placement zones with maximum safety and speed.',
    image: IMAGES.moffett,
    iconName: 'Truck',
    features: [
      'All-terrain rough terrain rough capability',
      'Zero jobsite waiting or labor assistance needed',
      'Unloads up to 5,500 lbs per pallet',
      'Tight spatial clearance maneuverability'
    ],
    specs: [
      { label: 'Lift Capacity', value: '5,500 lbs' },
      { label: 'Terrain Type', value: 'Mud, Gravel, Sloped, Paved' },
      { label: 'Reach Height', value: 'Up to 12 Feet' },
      { label: 'Coverage', value: 'Edmonton & All Alberta' }
    ]
  },
  {
    id: 'building-materials',
    title: 'Building Materials Delivery',
    subtitle: 'Direct-to-Site Concrete, Masonry & Structural Supply',
    description: 'Reliable distribution of concrete blocks, drywall, masonry, and heavy materials scheduled down to the exact hour of site readiness.',
    fullDescription: 'Timing is critical on modern building sites. GNA Logistics provides high-volume, damage-free transport and placement for concrete products, bricks, masonry supplies, drywall, and structural components. We coordinate closely with site superintendents and dispatch teams to ensure material arrives in alignment with framing, foundation, and envelope schedules.',
    image: IMAGES.buildingMaterialsDelivery,
    iconName: 'Boxes',
    features: [
      'Palletized concrete block & brick transport',
      'Precision drop-off inside site perimeters',
      'Weather-protected secured loads',
      'Flexible drop-off window scheduling'
    ],
    specs: [
      { label: 'Payload Capacity', value: 'Up to 48,000 lbs' },
      { label: 'Material Types', value: 'Concrete, Masonry, Drywall, Steel' },
      { label: 'Turnaround', value: 'Same-Day / Next-Day' },
      { label: 'Tracking', value: 'Real-Time Dispatch GPS' }
    ]
  },
  {
    id: 'construction-site-deliveries',
    title: 'Construction Site Deliveries',
    subtitle: 'Active Commercial & Civil Jobsite Access Experts',
    description: 'Seamless logistics execution for active high-rise, commercial, and infrastructure jobsites with strict safety compliance.',
    fullDescription: 'Navigating active construction zones requires experienced drivers who understand safety protocols, site marshals, traffic management plans, and tight access lanes. GNA Logistics drivers are fully safety-certified, equipped with complete PPE, and trained in hazard assessment for seamless site entry.',
    image: IMAGES.construction,
    iconName: 'HardHat',
    features: [
      'COR-compliant safety standards',
      'High-density urban jobsite access',
      'Off-peak and early morning delivery slots',
      'Dedicated site coordination'
    ],
    specs: [
      { label: 'Safety Compliance', value: 'COR Certified / ISNetworld' },
      { label: 'Driver Standard', value: 'Commercial Class 1 & 3' },
      { label: 'Site Protocol', value: 'PPE, Hazard Assessment, Tailgate' },
      { label: 'Service Hours', value: '24/7 Scheduled Windows' }
    ]
  },
  {
    id: 'material-placement',
    title: 'Job Site Material Placement',
    subtitle: 'Precision Positioning Beyond the Curb Line',
    description: 'Don’t settle for curbside drops. We maneuver materials deep onto roofs, upper slabs, staging yards, and interior framing zones.',
    fullDescription: 'Curbside unloading causes costly secondary handling delays. GNA Logistics specializes in precision placement—positioning roofing bundles, lumber packs, structural steel, and mechanical units exactly at point-of-use. We save your construction team hundreds of man-hours.',
    image: IMAGES.heavyPlacement,
    iconName: 'Move',
    features: [
      'Direct staging placement at point-of-use',
      'Eliminates double-handling overhead',
      'Over-the-fence & elevated placement',
      'Gentle handling for fragile materials'
    ],
    specs: [
      { label: 'Placement Accuracy', value: 'Exact Staging Zone' },
      { label: 'Handling Type', value: 'Mechanical Forklift / Boom' },
      { label: 'Labor Saving', value: 'Reduces Site Crane Demand' },
      { label: 'Equipment', value: 'Moffett M8 / Heavy Rigging' }
    ]
  },
  {
    id: 'flatbed-transportation',
    title: 'Flatbed Transportation',
    subtitle: 'Heavy Haul & Open Deck Freight Solutions',
    description: 'Versatile step-deck and tandem flatbed trailers engineered for oversized equipment, lumber, truss packs, and machinery.',
    fullDescription: 'Our flatbed fleet handles demanding freight requirements with clean securement, tarping, and custom tie-downs. From structural steel beams to full lumber yard loads, GNA Logistics provides high-capacity regional transport backed by heavy-duty tractors.',
    image: IMAGES.flatbed,
    iconName: 'Trailer',
    features: [
      'Step-deck & standard flatbed configurations',
      'Heavy strap & chain securement standard',
      'Custom tarping for moisture-sensitive cargo',
      'Oversized load escort capabilities'
    ],
    specs: [
      { label: 'Deck Lengths', value: '48ft - 53ft Deck Options' },
      { label: 'Hauling Power', value: 'Heavy Duty Tandem Tractors' },
      { label: 'Cargo Shield', value: 'Full Waterproof Heavy Tarps' },
      { label: 'Permits', value: 'Alberta Over-Dimensional' }
    ]
  },
  {
    id: 'same-day-delivery',
    title: 'Same-Day Regional Delivery',
    subtitle: 'Rapid Dispatch Across Edmonton & Greater Alberta',
    description: 'Emergency freight, urgent project top-offs, and critical material hot-shots delivered within hours to keep projects on track.',
    fullDescription: 'Jobsite downtime costs thousands per hour. When shortage occurs or critical replacement components are needed immediately, GNA Logistics offers dedicated same-day express dispatch across the Edmonton region, Nisku, Leduc, St. Albert, Sherwood Park, and provincial corridors.',
    image: IMAGES.regionalFreight,
    iconName: 'Zap',
    features: [
      'Rapid response within 60 minutes of request',
      'Dedicated truck point-to-point dispatch',
      'Real-time status updates to site managers',
      'Available 6 days a week'
    ],
    specs: [
      { label: 'Response Time', value: 'Immediate Dispatch' },
      { label: 'Coverage Area', value: 'Greater Edmonton + 300km' },
      { label: 'Urgency Rating', value: 'Priority Hot-Shot' },
      { label: 'Confirmation', value: 'Digital Proof of Delivery' }
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'construction',
    title: 'Commercial & Civil Construction',
    tagline: 'Streamlined Logistics for Large-Scale Building Projects',
    description: 'Heavy infrastructure, multi-family developments, and commercial high-rises demand rigorous scheduling, safety compliance, and robust flatbed capacity.',
    image: IMAGES.construction,
    benefits: [
      'Just-in-time delivery matching site master schedule',
      'Complete safety orientation & site marshal compliance',
      'Heavy payload capacity for rebar, forms & steel',
      'Staging area consolidation'
    ],
    applications: ['Structural Framing', 'Concrete Forms', 'Rebar Bundles', 'Pre-cast Panels']
  },
  {
    id: 'roofing',
    title: 'Roofing & Building Envelope',
    tagline: 'High-Elevation Shingle & Membrane Placement',
    description: 'Delivering pallets of shingles, insulation boards, membrane rolls, and metal flashing directly onto jobsites with zero manual double-handling.',
    image: IMAGES.roofing,
    benefits: [
      'Rough terrain placement adjacent to roof hoists',
      'Minimizes shingle damage during transfer',
      'Commercial roof membrane bulk distribution',
      'Immediate turnarounds for weather windows'
    ],
    applications: ['Asphalt Shingles', 'EPDM / TPO Roll Goods', 'Insulation Panels', 'Roofing Accessories']
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Industrial Logistics',
    tagline: 'Cross-Docking, Storage & Distribution Hubs',
    description: 'Short and long-term staging in modern indoor facilities with seamless transition to jobsite flatbed transport when construction calls.',
    image: IMAGES.warehouse,
    benefits: [
      'Secure climate-controlled material storage',
      'Cross-docking for interprovincial freight',
      'Pallet consolidation and inventory staging',
      'Full fork & crane loading support'
    ],
    applications: ['Pre-Staged Materials', 'Cross-Dock Transfer', 'Overstock Storage', 'Equip Staging']
  },
  {
    id: 'residential',
    title: 'Residential Construction & Communities',
    tagline: 'Subdivision & Custom Home Supply Logistics',
    description: 'Maneuvering through narrow residential streets, cul-de-sacs, and fresh sub-divisions to place lumber, trusses, and masonry cleanly.',
    image: IMAGES.residential,
    benefits: [
      'Compact Moffett footprint for tight residential driveways',
      'Zero damage to new curbing or asphalt',
      'Direct garage and floor deck unloading',
      'Polite, professional uniformed operators'
    ],
    applications: ['House Framing Packages', 'Truss Loads', 'Siding & Masonry', 'Landscape Rock']
  },
  {
    id: 'commercial',
    title: 'Commercial Fit-Outs & Infrastructure',
    tagline: 'Retail, Industrial Parks & Public Works',
    description: 'Delivering interior fit-out materials, HVAC units, glazing systems, and electrical distribution equipment under strict urban access rules.',
    image: IMAGES.distribution,
    benefits: [
      'Night-time and off-peak urban deliveries',
      'Dock-height loading and liftgate support',
      'Precision positioning in congested loading bays',
      'Detailed digital POD signature captures'
    ],
    applications: ['HVAC Equipment', 'Electrical Gear', 'Store Fixtures', 'Glazing & Glass']
  },
  {
    id: 'building-suppliers',
    title: 'Building Material Suppliers & Lumber Yards',
    tagline: 'Outsourced Fleet & Peak Capacity Distribution',
    description: 'Partnering with building suppliers, lumber yards, and distributors across Alberta to supplement fleet capacity during high-demand construction seasons.',
    image: IMAGES.buildingMaterials,
    benefits: [
      'Scalable fleet expansion without capital overhead',
      'Dedicated branding & professional driver representation',
      'Seamless electronic order manifest integration',
      'High client satisfaction ratings'
    ],
    applications: ['Lumber Yard Freight', 'Drywall Suppliers', 'Concrete Manufacturers', 'Steel Yards']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Request & Dispatch Quote',
    description: 'Submit your jobsite specifications, cargo dimensions, and desired drop-off window for an instant, transparent quote.'
  },
  {
    number: '02',
    title: 'Precision Scheduling',
    description: 'Our logistics team coordinates with site superintendents to lock in exact arrival slots matching your site crew timeline.'
  },
  {
    number: '03',
    title: 'Safe Secure Transport',
    description: 'Our Class 1 heavy drivers haul your load using modern flatbeds, full weather tarps, and certified tie-down protocols.'
  },
  {
    number: '04',
    title: 'Jobsite Material Placement',
    description: 'Using onboard Moffett forklifts, our operators unload and place cargo directly into your active construction zone.'
  }
];

export const STATS_DATA: StatisticItem[] = [
  { value: 15, suffix: '+', label: 'Years of Excellence', description: 'Deep construction logistics experience across Western Canada.' },
  { value: 45000, suffix: '+', label: 'Successful Deliveries', description: 'On-time jobsite placements completed without damage.' },
  { value: 1200, suffix: '+', label: 'Active Jobsites', description: 'Served across Edmonton, Calgary, Red Deer and northern hubs.' },
  { value: 99.8, suffix: '%', label: 'On-Time Performance', description: 'Industry-leading reliability metric maintained consistently.' }
];

export const COMPANY_VALUES = [
  {
    title: 'Uncompromised Safety',
    description: 'COR-certified, rigorous daily vehicle inspections, and continuous operator safety training protect your site and our personnel.'
  },
  {
    title: 'Construction Specialization',
    description: 'We do not haul general dry van freight; our entire equipment roster and driver training focus exclusively on jobsite delivery.'
  },
  {
    title: 'Punctual Reliability',
    description: 'We respect construction site schedules. Late deliveries cost money; GNA Logistics arrives when promised.'
  },
  {
    title: 'Modern Equipment Fleet',
    description: 'We invest in late-model tractors, versatile flatbeds, and heavy-duty Moffett forklifts for maximum uptime.'
  }
];
