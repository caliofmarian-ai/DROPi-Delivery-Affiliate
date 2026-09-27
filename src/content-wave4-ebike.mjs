const SOURCE = {
  rsa: {
    name: 'Road Safety Authority Ireland — e-bike and e-moped rules',
    url: 'https://www.rsa.ie/road-safety/road-users/special-purpose-vehicles/powered-personal-transportation'
  },
  dfb: {
    name: 'Dublin Fire Brigade — fire safety for e-bikes and e-scooters',
    url: 'https://www.dublincity.ie/dublin-fire-brigade/fire-safety-community/fire-safety-e-scooters-and-e-bikes'
  },
  opss: {
    name: 'UK Office for Product Safety and Standards — lithium-ion battery safety for e-bikes',
    url: 'https://www.gov.uk/guidance/statutory-guidelines-on-lithium-ion-battery-safety-for-e-bikes'
  },
  euBattery: {
    name: 'European Union — Regulation (EU) 2023/1542 on batteries and waste batteries',
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1542'
  },
  boschRange: {
    name: 'Bosch eBike Systems — Range Assistant and range factors',
    url: 'https://www.bosch-ebike.com/en/service/range-assistant'
  },
  schwalbe: {
    name: 'Schwalbe — bicycle tyre pressure guidance',
    url: 'https://www.schwalbe.com/en/technology-faq/tire-pressure/'
  },
  trekRack: {
    name: 'Trek — BackRack MIK specifications',
    url: 'https://www.trekbikes.com/ca/en_CA/equipment/cycling-accessories/bike-racks/trek-backrack-mik-bike-rack/p/74339/'
  },
  ortliebQuick: {
    name: 'ORTLIEB — Quick-Rack specifications and fit information',
    url: 'https://uk.ortlieb.com/products/quick-rack'
  },
  ortliebThree: {
    name: 'ORTLIEB — Rack Three specifications and warnings',
    url: 'https://uk.ortlieb.com/products/rack-three'
  },
  thule: {
    name: 'Thule — Tour Rack technical specifications',
    url: 'https://www.thule.com/en-gb/bike-packs-bags-and-racks/panniers-and-bike-bags/thule-tour-rack-_-3205483'
  },
  cpsc: {
    name: 'US Consumer Product Safety Commission — micromobility battery safety',
    url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Micromobility-Information-Center'
  },
  cpscChargers: {
    name: 'US Consumer Product Safety Commission — warning about universal e-bike chargers',
    url: 'https://www.cpsc.gov/About-CPSC/Commissioner/Richard-Trumka/Statement/Commissioner-Trumka-Urges-Consumers-Not-to-Use-%E2%80%9CUniversal%E2%80%9D-Chargers-for-E-bikes-Because-of-Fire-Hazard'
  },
  shimano: {
    name: 'Shimano — e-bike battery and parts user manual',
    url: 'https://si.shimano.com/en/pdfs/um/7GP0B/UM-7GP0B-001-ENG.pdf'
  },
  fsaiDeliveryBags: {
    name: 'Food Safety Authority of Ireland — takeaway delivery-bag controls',
    url: 'https://www.fsai.ie/business-advice/starting-a-food-business/starting-and-running-a-takeaway/common-compliance-issues-and-controls'
  }
};

const common = {
  category: 'bike-ebike',
  published: '2026-09-27',
  updated: '2026-09-27',
  series: 'ebike-delivery',
  sourceChecked: '27 September 2026'
};

export const ebikeDeliveryArticles = [
  {
    ...common,
    seriesOrder: 1,
    slug: 'ebike-rear-rack-delivery-guide',
    title: 'E-bike Rear Rack Guide for Delivery Work: Fit, Load and Brake Clearance',
    description: 'Choose a rear rack from the bicycle outward: identify the mounts, axle, wheel, tyre, brake and real cargo weight before comparing rack brands.',
    image: {
      src: '/images/ebike-guides/rear-rack-thermal-bag.webp',
      width: 1536,
      height: 1024,
      alt: 'Step-through electric delivery bicycle with balanced panniers and a thermal food bag secured to the rear rack',
      caption: 'Illustrative setup: the thermal bag has a rigid, level base while dense equipment stays low in balanced panniers.'
    },
    intent: 'commercial',
    productQuery: 'ebike rear rack thermal delivery bag mounting platform 25kg 30kg',
    safetyNotice: 'The usable cargo limit is the lowest published limit in the complete system: bicycle frame, mounts, rack, adapter, panniers, box and straps.',
    sections: [
      {
        heading: 'Start with the bicycle, not the box',
        paragraphs: [
          'A delivery rack has to fit the frame, clear the tyre and brake, remain stable under repeated starts and stay inside every load rating. A product described as universal can still be wrong for a particular wheel size, axle, disc-caliper position or frame material.',
          'Record the bicycle make and model, frame material, wheel and tyre marking, rear-axle type, brake position, battery position and the normal loaded weight. Include the weight of panniers, the top box, locks and any spare battery.'
        ],
        bullets: [
          'Lower mounts: look for threaded eyelets near each rear dropout.',
          'Upper mounts: look for threaded bosses on the seat stays or an approved bridge adapter.',
          'Axle: identify quick-release, solid motor axle or thru-axle and its exact dimensions.',
          'Brake: photograph both the disc caliper and the cable or hose path.',
          'Tyre: read the full sidewall size and leave the manufacturer-required clearance.'
        ]
      },
      {
        heading: 'Choose the correct rack class',
        paragraphs: [
          'For a rigid frame with approved threaded eyelets, a bolted rack rated around 25–30 kg is usually the strongest practical starting point for daily delivery. A disc-compatible model with adjustable legs is especially useful when a rear hub motor and brake caliper compete for space around the dropout.',
          'If the bicycle genuinely lacks eyelets, use a rack and adapter designed for that exact axle or stay arrangement. Seatpost racks put the load high and create leverage, so they are a poor default for repeated delivery cargo.'
        ],
        bullets: [
          'Bolted rigid rack: best default when the frame maker permits it and proper eyelets exist.',
          'Approved axle-mounted system: useful for a compatible thru-axle or non-standard frame.',
          'Stay-mounted universal rack: reserve for light loads and only within its published rating.',
          'Trailer or cargo bike: safer when daily loads are bulky or consistently above roughly 15–20 kg.'
        ]
      },
      {
        heading: 'Design the rack around the thermal delivery bag',
        paragraphs: [
          'For food delivery, the thermal bag is part of the load-bearing system, not an afterthought. Measure the loaded bag base, then choose a rack platform or rated adapter plate that supports that footprint without overhang, rocking or concentrated pressure points.',
          'The Food Safety Authority of Ireland says food-delivery bags must be clean, suitable, in good condition, easy to clean and disinfect, and capable of keeping food at the appropriate temperature. A secure bicycle mount must preserve those functions rather than crushing the insulation or preventing the lid from closing.'
        ],
        bullets: [
          'Use a rigid, flat and washable base between the rack and soft thermal bag where the bag maker permits it.',
          'Secure the bag in at least four directions using rated buckles, a compatible mounting plate or the bag maker’s approved attachment points.',
          'Capture every strap end so it cannot reach the tyre, spokes, rotor or chain.',
          'Use removable upright dividers for drinks and separate hot and cold orders when the food-business procedure requires it.',
          'Keep the rear light and reflector visible and retain access to the battery lock and rack fasteners.'
        ]
      },
      {
        heading: 'Read product ratings in context',
        paragraphs: [
          'Current manufacturer examples show why the mounting method matters. Trek publishes a 25 kg rating for the BackRack MIK; ORTLIEB publishes 26 kg for the Quick-Rack XL family and 30 kg for Rack Three under its specified fit conditions; Thule publishes an 11 kg rear load for Tour Rack. These numbers describe the rack, not automatic compatibility with every bicycle.',
          'Confirm wheel and tyre compatibility, mounting hardware, minimum tyre clearance, disc-brake clearance and any frame-specific restriction in the current instructions before ordering.'
        ]
      },
      {
        heading: 'Use the weakest-link rule',
        paragraphs: [
          'A rack marked 30 kg does not permit a 30 kg load if the frame allows less, an adapter has a lower rating, or the box mounting plate is weaker. Use the lowest permitted number and leave a practical margin for rough roads and normal wear.',
          'Use the specified bolts, washers, spacers and torque. Do not clamp a rack to carbon tubes unless the frame maker explicitly approves that system. A passenger or child seat also requires explicit approval from every relevant component maker.'
        ]
      },
      {
        heading: 'Complete a progressive loaded test',
        paragraphs: [
          'In a traffic-free area, test the bicycle empty, then at roughly 25%, 50%, 75% and 100% of the planned working load. At every stage check heel strike, tyre clearance, rack movement, steering, low-speed balance, braking, cornering and stand stability.',
          'Stop if a bolt loosens, a leg touches the brake or motor cable, the rack flexes, the tyre rubs, the bicycle oscillates or braking becomes inadequate. Recheck all fasteners after the first short loaded ride.'
        ]
      }
    ],
    sources: [SOURCE.trekRack, SOURCE.ortliebQuick, SOURCE.ortliebThree, SOURCE.thule, SOURCE.fsaiDeliveryBags]
  },
  {
    ...common,
    seriesOrder: 2,
    slug: 'stable-ebike-cargo-system-delivery',
    title: 'Build a Stable E-bike Cargo System: Thermal Bags, Panniers and Load Balance',
    description: 'Mount a thermal delivery bag on a stable platform, place dense weight low, balance both sides and prevent food, drinks and equipment moving in any direction.',
    image: {
      src: '/images/ebike-guides/stable-cargo-thermal-bag.webp',
      width: 1672,
      height: 941,
      alt: 'Electric delivery bicycle with a large insulated food bag on the rear platform and balanced side panniers',
      caption: 'Illustrative cargo system: the thermal bag is supported on top while denser tools and equipment are carried lower.'
    },
    intent: 'commercial',
    productQuery: 'insulated food delivery bag bicycle rack rigid base dividers panniers',
    safetyNotice: 'A strong rack cannot correct a high, loose or one-sided load. Test handling and braking progressively before entering traffic.',
    sections: [
      {
        heading: 'Make the cargo behave like part of the bicycle',
        paragraphs: [
          'The rack is only the foundation. A tall box full of dense objects raises the centre of gravity, a loose item changes direction during braking, and an uneven pannier pair makes low-speed steering unpredictable.',
          'The preferred pattern is simple: dense items low, left and right reasonably balanced, light bulky items on top, and nothing able to slide into a wheel or move against the rider.'
        ]
      },
      {
        heading: 'Load in the right order',
        bullets: [
          'Put tools, locks, drinks and a spare battery low in secure panniers or a purpose-built low carrier.',
          'Weigh loaded panniers when the side-to-side difference is not obvious.',
          'Reserve the top platform for lighter parcels or an insulated box with internal dividers.',
          'Use a non-slip liner and rated restraints that cannot reach spokes, rotor or tyre.',
          'Keep rear lights, reflectors and any required markings visible from their intended angles.'
        ]
      },
      {
        heading: 'Match the layout to the work',
        paragraphs: [
          'Documents and compact parcels work well in two slim panniers because the load stays low and access remains quick. Food delivery needs a clean, suitable thermal bag that can maintain the appropriate temperature, while liquids still need upright dividers and reliable restaurant packaging. A mixed shift benefits from two panniers plus a modular thermal bag that can be removed for cleaning or reconfigured.',
          'Keep repair tools in a separate pouch so sharp or dirty items cannot damage food, clothing or electronics. Use a cleanable liner and make drainage paths avoid the battery, controller and connectors.'
        ]
      },
      {
        heading: 'Build the mounting stack deliberately',
        bullets: [
          'Use a traceable rack and adapter plate with published ratings and instructions.',
          'Choose pannier hooks with positive retention and confirm heel clearance.',
          'Through-bolt a crate only where the plate maker allows it, using specified backing plates or large washers.',
          'Cover exposed bolt ends inside the box and use the specified locking-nut or thread-locking method.',
          'Use two independent retention methods for valuable or heavy cargo.'
        ]
      },
      {
        heading: 'Inspect the system as one unit',
        paragraphs: [
          'Shake the loaded module firmly before every shift. Look for movement at the rack feet, upper stays, adapter plate, pannier hooks and lid. Turn the handlebars fully and compress the bicycle to check that cables and cargo still clear moving parts.',
          'After wet or rough routes, clean the hooks and mounting surfaces, inspect for cracks or elongating holes, and verify torque using the relevant instructions rather than guessing.'
        ]
      }
    ],
    sources: [SOURCE.ortliebQuick, SOURCE.ortliebThree, SOURCE.thule, SOURCE.fsaiDeliveryBags]
  },
  {
    ...common,
    seriesOrder: 3,
    slug: 'increase-ebike-range-delivery-work',
    title: 'How to Increase E-bike Range for Delivery Work: Measure Before You Upgrade',
    description: 'Build a realistic range model from usable watt-hours and measured consumption, then improve tyres, drag, cadence, speed, route and cargo in the right order.',
    image: {
      src: '/images/ebike-guides/range-planning-thermal-bag.webp',
      width: 1774,
      height: 887,
      alt: 'Electric delivery bicycle with a thermal food bag, balanced panniers and navigation phone overlooking a hilly city route',
      caption: 'Illustrative range setup: model the real bicycle, thermal bag, cargo, hills and weather rather than relying on a brochure maximum.'
    },
    intent: 'commercial',
    productQuery: 'bicycle tyre pressure gauge chain checker ebike maintenance',
    safetyNotice: 'Plan every shift with a reserve. Advertised range is not a promise for cargo, cold weather, hills, wind or repeated starts.',
    sections: [
      {
        heading: 'Use energy, not marketing distance',
        formula: 'Planned range (km) = usable battery energy (Wh) ÷ measured consumption (Wh/km)',
        paragraphs: [
          'Battery energy is nominal voltage multiplied by amp-hours. A 48 V, 20 Ah pack is approximately 960 Wh, but a delivery plan should not assume every rated watt-hour will be available. Cold, ageing, route changes, headwinds and measurement error all need reserve.',
          'As a planning example, 800 usable Wh supports about 80 km at 10 Wh/km, 53 km at 15 Wh/km, or 40 km at 20 Wh/km. The correct number is the conservative consumption measured on your own route.'
        ]
      },
      {
        heading: 'Create a personal consumption baseline',
        numbered: [
          'Start at a repeatable charge level using the correct charger.',
          'Ride a representative 15–25 km route with normal cargo, assist mode and stops.',
          'Record distance, start and end charge, temperature, wind, cargo and elevation.',
          'Repeat at least three times and use the conservative result.',
          'Plan the working route with at least 15–20% remaining rather than targeting zero.'
        ]
      },
      {
        heading: 'Improve efficiency before adding battery mass',
        bullets: [
          'Tyres: use a gauge and stay within both tyre and rim limits for the real loaded weight.',
          'Brake drag: lift each wheel and investigate continuous rubbing.',
          'Drivetrain: clean, lubricate and replace a worn chain before it damages the gears.',
          'Assist: use the lowest mode that keeps the shift safe and sustainable.',
          'Cadence: shift down before starts and hills instead of forcing a tall gear.',
          'Speed: moderate cruising speed, especially into a headwind.',
          'Route: prefer safer, flatter and more flowing roads when the overall trade-off is sensible.',
          'Cargo: remove items that are carried every day but rarely used, and reduce aerodynamic bulk.'
        ],
        paragraphs: [
          'Bosch identifies rider, assistance mode, drive system, battery, terrain, temperature, wind and surface as range factors. Schwalbe likewise notes that correct tyre pressure depends on rider and luggage load and must remain within the component limits.'
        ]
      },
      {
        heading: 'Treat very long shifts as energy logistics',
        paragraphs: [
          'A 150 km target consumes about 1,500 Wh at 10 Wh/km or 2,250 Wh at 15 Wh/km. With a 15% reserve, the starting-energy target rises to roughly 1,765–2,647 Wh. For a normal delivery bicycle, that is usually better solved by efficiency, approved spare batteries and planned charging than by one enormous improvised pack.',
          'Build charge or swap points into the route, keep the spare battery protected low on the bicycle, and use a cargo platform if the combined battery and delivery mass starts to overwhelm normal bicycle handling.'
        ]
      },
      {
        heading: 'Keep a ten-shift range log',
        bullets: [
          'Date, route and distance',
          'Start and end state of charge',
          'Assist mode and average working speed',
          'Cargo mass and tyre pressure',
          'Temperature, wind and rain',
          'Elevation or notable hills',
          'Any brake rub, puncture, fault or unusual battery behaviour'
        ],
        paragraphs: [
          'Ten honest entries are more useful than the best distance the bicycle has ever achieved. Recalculate after a tyre change, winter weather, a heavier cargo setup or noticeable battery ageing.'
        ]
      }
    ],
    sources: [SOURCE.boschRange, SOURCE.schwalbe]
  },
  {
    ...common,
    seriesOrder: 4,
    slug: 'add-ebike-battery-capacity-safely',
    title: 'How to Add E-bike Battery Capacity Safely: Larger Packs, Spares and Dual Systems',
    description: 'Compare approved larger batteries, supported dual-battery systems and manual swaps without using improvised parallel leads or incompatible chargers.',
    image: {
      src: '/images/ebike-guides/safe-battery-capacity.webp',
      width: 1672,
      height: 941,
      alt: 'Electric bicycle beside matched removable batteries, charger and purpose-built range extender on a workshop bench',
      caption: 'Illustrative compatibility review: battery, charger, communication, connector and mount must belong to a supported system.'
    },
    intent: 'informational',
    productQuery: null,
    commercialCta: 'none',
    safetyNotice: 'Never connect two packs together merely because both carry the same nominal-voltage label. Compatibility includes voltage, full-charge voltage, current, communication, connector, charger and mechanical retention.',
    sections: [
      {
        heading: 'Use the safest upgrade order',
        paragraphs: [
          'The lowest-risk range upgrade is a larger battery explicitly approved for the complete bicycle system. Next is a manufacturer-supported dual-battery system. A second compatible battery that remains electrically separate and is swapped while the bicycle is powered off can also be practical.',
          'A custom pack has a much higher validation burden. A homemade Y-lead or parallel adapter between unrelated packs is not a safe shortcut and can create uncontrolled equalisation current, connector heating, charging faults or protection-system conflicts.'
        ]
      },
      {
        heading: 'Check the full compatibility chain',
        bullets: [
          'Nominal voltage and maximum full-charge voltage match the controller and charger.',
          'Required battery communication or authentication is supported.',
          'Continuous and peak discharge current cover controller demand with engineering margin.',
          'Charge current, polarity, connector type and every connector pin match exactly.',
          'Mounting rail, lock, key and secondary retention are mechanically correct.',
          'The bicycle remains within frame, rack, axle and total-system weight limits.',
          'The replacement has traceable manufacturer identity, instructions, warranty and safety documentation.'
        ]
      },
      {
        heading: 'Carry a spare as protected cargo',
        paragraphs: [
          'Place the spare low in a purpose-built, padded and restrained compartment. Fit a terminal cap, keep tools and liquids separate, and stop the battery from striking hard edges or receiving direct wheel spray.',
          'Do not carry a loose traction battery in a top basket or on your back. After a crash, hard drop or water exposure, isolate the battery from use and follow the manufacturer or a qualified service provider for assessment.'
        ]
      },
      {
        heading: 'Swap with the system powered down',
        numbered: [
          'Park securely away from traffic and switch the bicycle off.',
          'Remove the key and wait for the display and system to shut down.',
          'Inspect the spare, rail and connector for water, dirt or damage.',
          'Remove and stow the depleted battery with its terminals protected.',
          'Install and lock the spare exactly as the manufacturer specifies.',
          'Power up and check for warnings before rejoining traffic.'
        ]
      },
      {
        heading: 'Know when the bicycle platform is the limit',
        paragraphs: [
          'More energy also means more mass. If multiple batteries plus cargo make the rear of a normal bicycle unstable, the right upgrade may be a cargo bike, rated trailer or a planned charging stop rather than another pack.',
          'Any modification that changes assisted speed, motor power or throttle behaviour can also change the legal category in Ireland. Keep range work separate from power or speed modification.'
        ]
      }
    ],
    sources: [SOURCE.opss, SOURCE.rsa, SOURCE.cpscChargers]
  },
  {
    ...common,
    seriesOrder: 5,
    slug: 'ebike-battery-design-from-zero-safety',
    title: 'E-bike Battery Design from Zero: Cells, BMS, Enclosure and Quality Gates',
    description: 'Understand pack voltage, energy, cells, interconnects, BMS protection, enclosure design and validation without treating a high-energy battery as a casual DIY project.',
    image: {
      src: '/images/ebike-guides/battery-design-lab.webp',
      width: 1672,
      height: 941,
      alt: 'Battery engineer reviewing a closed e-bike pack and design components in a professional laboratory',
      caption: 'Illustrative professional design review—not a live-pack assembly instruction.'
    },
    intent: 'informational',
    productQuery: null,
    commercialCta: 'none',
    safetyNotice: 'Specification is not assembly. This guide teaches design review, not step-by-step live-pack construction. The safest DIY outcome is a complete engineering specification assembled and validated by a qualified battery builder.',
    sections: [
      {
        heading: 'A battery is a complete safety system',
        paragraphs: [
          'An e-bike battery is not simply a group of cells joined together. It is an electrical, thermal, mechanical and regulatory system that must survive charge, discharge, vibration, impact, water exposure, connector wear and foreseeable misuse.',
          'Never open or modify a charged pack or one connected to a bicycle or charger. Do not begin with reclaimed cells, an unknown BMS or a charger chosen only because its plug fits.'
        ]
      },
      {
        heading: 'Start with voltage, capacity and current',
        paragraphs: [
          'For typical 3.6 V nominal lithium-ion cells, series groups set pack voltage and parallel cells set amp-hour capacity and current capability. A common 36 V-class pack uses 10 series groups and charges to about 42.0 V; a 48 V-class pack commonly uses 13 groups and reaches about 54.6 V; a 52 V-class pack commonly uses 14 groups and reaches about 58.8 V.',
          'Those labels are not interchangeable. The controller, display, charger, BMS, wiring and connectors must all be designed for the exact voltage and current range.'
        ],
        bullets: [
          'Pack Ah = cell Ah × number of parallel cells.',
          'Pack Wh = nominal pack voltage × pack Ah.',
          'Parallel-group current capability begins with verified cell data and must include design derating.'
        ]
      },
      {
        heading: 'Specify every component and interface',
        bullets: [
          'New, authentic and identical cells from a traceable batch with manufacturer data.',
          'Cell holders, insulation rings, barriers and mechanical restraint against movement and abrasion.',
          'Interconnects engineered for continuous and peak current using a validated joining process.',
          'A BMS that measures individual group voltage, pack current and relevant temperatures, with balancing and protective cut-offs.',
          'Appropriate fuse, short-circuit protection, protected service interface and anti-spark or pre-charge strategy when required.',
          'Correct wire gauge, insulation temperature rating, crimping, strain relief, polarity control and touch-safe connectors.',
          'An enclosure designed for impact, vibration, ingress, heat flow, venting strategy and secure bicycle mounting.',
          'A charger matched to chemistry, series count, voltage, current, connector and charging logic.',
          'A schematic, bill of materials, serial identity, test record, labels and user instructions.'
        ]
      },
      {
        heading: 'Use professional equipment and controlled procedures',
        paragraphs: [
          'A serious workshop needs traceable cell-voltage and internal-resistance checks, controlled grading where required, a suitable spot welder with a verified weld procedure, correct crimp and torque tools, current-limited supplies, an electronic load, logging instruments and thermal monitoring.',
          'The work area also needs electrical isolation, non-combustible surfaces, ventilation, eye protection and an emergency plan. Owning a spot welder is not evidence that the complete process is controlled.'
        ]
      },
      {
        heading: 'Pass quality gates before road use',
        numbered: [
          'Complete an independent design review for voltage, current, energy, charging and mounting requirements.',
          'Authenticate and record incoming cells and safety-critical components.',
          'Verify every series group for correct polarity and balanced voltage before final connection.',
          'Inspect insulation, strain relief, fuse, BMS sensors and connectors before closing the enclosure.',
          'Test cut-offs, charging behaviour, usable capacity, voltage sag, temperature rise and connector heating under controlled conditions.',
          'Assess vibration, impact, ingress and mounting risks for the real bicycle and route.',
          'Issue an identification label, matched charger, user instructions and traceable acceptance record.'
        ]
      },
      {
        heading: 'Do not use dangerous shortcuts',
        bullets: [
          'Do not mix reclaimed cells from laptops, drills or unknown packs.',
          'Do not solder directly to cylindrical cell ends unless the cell maker permits a validated process.',
          'Do not accept a BMS label as proof of real current capability or tested protection.',
          'Do not parallel packs merely because both are labelled 48 V.',
          'Do not charge an experimental pack in a bedroom, hallway, stairwell or unattended location.',
          'Do not sell, import or supply a pack without the conformity, traceability, instructions and technical documentation that apply.'
        ],
        paragraphs: [
          'EU Regulation 2023/1542 creates obligations for batteries made available on the EU market. A personal experiment becomes a different legal responsibility when the pack is sold, imported or supplied through a store.'
        ]
      }
    ],
    sources: [SOURCE.opss, SOURCE.euBattery, SOURCE.cpsc]
  },
  {
    ...common,
    seriesOrder: 6,
    slug: 'ebike-battery-charging-storage-fire-safety',
    title: 'E-bike Battery Charging and Storage Safety for Home and Delivery Work',
    description: 'Use the correct charger, keep escape routes clear, stay present and act immediately on swelling, unusual heat, damage, smell, hissing or smoke.',
    image: {
      src: '/images/ebike-guides/charging-storage-safety.webp',
      width: 1536,
      height: 1024,
      alt: 'Removable e-bike battery charging on a clear metal bench with its matched charger and an unobstructed exit',
      caption: 'Illustrative charging layout. Always follow the exact battery and charger instructions and keep escape routes clear.'
    },
    intent: 'informational',
    productQuery: null,
    commercialCta: 'none',
    safetyNotice: 'If a battery produces smoke, gas, hissing or fire, evacuate, warn others, call 999 or 112 from safety and state that a lithium-ion e-bike battery is involved. Do not re-enter.',
    sections: [
      {
        heading: 'Follow the same charging routine every time',
        numbered: [
          'Inspect the battery case, mount, cable, connector and charger before connecting.',
          'Let a cold, wet or hot battery return to its permitted charging temperature in a dry place.',
          'Charge on a stable, non-combustible surface away from exits, clutter and direct sun.',
          'Use only the charger supplied or explicitly approved for that exact battery.',
          'Remain present and awake, then unplug when charging is complete or before leaving.',
          'Keep the charger uncovered, ventilated and protected from cable damage.'
        ],
        paragraphs: [
          'Dublin Fire Brigade advises against charging in communal areas or escape routes, overnight charging and leaving home while charging. Manufacturer instructions take priority for the exact battery and charger.'
        ]
      },
      {
        heading: 'Stop using the battery at the first warning sign',
        bullets: [
          'Swelling, cracks, melted plastic, crushed areas, loose mounting or exposed conductors.',
          'Water intrusion or a pack involved in flooding.',
          'Unusual heat while resting, charging or under light use.',
          'Arcing, repeated protective trips, sudden range collapse or intermittent power.',
          'A sweet or solvent-like smell, hissing, popping, smoke or gas.',
          'A crash, hard drop, unknown repair history or recalled model.'
        ],
        paragraphs: [
          'Disconnect only if it is safe to do so and no abnormal heat, smoke or gas is present. Isolate the battery from use and contact the manufacturer, retailer or a qualified service route. Do not open it to investigate.'
        ]
      },
      {
        heading: 'Know the emergency response',
        paragraphs: [
          'If smoke, hissing, gas or fire appears, leave immediately. Close the door if possible without delaying escape, warn other occupants and call emergency services from outside. Tell the operator that an e-bike lithium-ion battery is involved.',
          'Toxic gases and re-ignition are serious hazards. A domestic extinguisher may not stop a pack in thermal runaway, so personal escape takes priority over trying to save the bicycle or property.'
        ]
      },
      {
        heading: 'Store batteries conservatively',
        bullets: [
          'Follow the battery maker’s storage state-of-charge and inspection instructions.',
          'Use a cool, dry and secure area away from direct sun, heat sources, exits and combustible clutter.',
          'Do not leave the battery fully depleted for an extended period.',
          'Protect terminals from metal objects and never stack, crush or load the pack.',
          'Keep the charger and the battery visible and inspectable rather than covering either with insulation.',
          'Use an appropriate battery or WEEE collection route for damaged or end-of-life packs, not general waste.'
        ],
        paragraphs: [
          'Shimano gives an example of about 70% charge and a top-up every six months for long storage in the cited system. Other brands can specify different targets, so copy the instruction for the battery you actually own.'
        ]
      },
      {
        heading: 'Keep a battery identity record',
        paragraphs: [
          'Record the manufacturer, model, serial number, purchase date, charger model and any recall or service information. Photograph the label while it is readable. A clear record makes warranty, recall, recycling and emergency communication easier.',
          'For delivery work, also log hard impacts, repeated faults and unusual capacity changes. Do not return a suspect battery to service merely because it appears normal the next morning.'
        ]
      }
    ],
    sources: [SOURCE.dfb, SOURCE.opss, SOURCE.cpsc, SOURCE.cpscChargers, SOURCE.shimano]
  },
  {
    ...common,
    seriesOrder: 7,
    slug: 'ebike-delivery-accessories-priority-checklist',
    title: 'E-bike Delivery Accessories Checklist: Buy Safety and Reliability First',
    description: 'Prioritise visibility, stable cargo, theft protection, roadside recovery, weather and navigation before comfort gadgets and optional electronics.',
    image: {
      src: '/images/ebike-guides/delivery-accessories-thermal-bag.webp',
      width: 1536,
      height: 1024,
      alt: 'Thermal food-delivery bag surrounded by helmet, lights, high-visibility vest, locks, rainwear and repair tools',
      caption: 'Illustrative priority kit: the thermal bag is core delivery equipment alongside visibility, security and roadside recovery.'
    },
    intent: 'commercial',
    productQuery: 'insulated food delivery bag bike courier lights lock repair kit waterproof',
    safetyNotice: 'Every accessory must preserve brake access, steering, cable movement, lights, battery cooling and a safe dismount path.',
    sections: [
      {
        heading: 'Build the setup in layers',
        paragraphs: [
          'Delivery accessories are useful only when they solve a known problem without creating a new one. Start with equipment that prevents a crash, theft, wet cargo or a shift-ending mechanical fault. Comfort and recording gadgets come later.',
          'Ireland’s rules and the bicycle maker’s requirements come before a generic shopping list. The RSA states that lights are required during lighting-up hours and darkness and that riders must not hold or use a mobile phone while cycling.'
        ]
      },
      {
        heading: 'First-priority equipment',
        bullets: [
          'A clean, suitable thermal delivery bag with a rigid base, closed lid, washable interior and dividers appropriate to the orders carried.',
          'A suitable helmet, high-visibility layer, compliant front and rear lights, bell and a well-positioned mirror.',
          'A rated rack, positively retained panniers, safe straps, waterproof covers and mudguards.',
          'Two appropriate locks for layered security plus a concealed tracker if desired.',
          'A pump with gauge, tyre levers, repair or tube solution, multi-tool and compatible quick link.',
          'A compact first-aid kit and emergency contact information appropriate to the work.'
        ]
      },
      {
        heading: 'Next-priority productivity and weather kit',
        bullets: [
          'A phone mount with positive mechanical retention, positioned clear of controls and hoses.',
          'A separate reputable power bank and short cable kept dry; avoid tapping the traction battery without an approved converter.',
          'Rain shell, waterproof trousers, gloves and overshoes that preserve control and awareness.',
          'A small dry bag for keys, documents, charger and electronics, separate from food or leaking cargo.',
          'Ergonomic grips, correct saddle position and an approved suspension seatpost only after basic fit is correct.'
        ]
      },
      {
        heading: 'Choose tyres and stands for the real load',
        paragraphs: [
          'Select tyres for loaded pressure range, wet grip, puncture resistance, rim compatibility and e-bike approval where applicable. Maximum-speed marketing is less useful than reliable behaviour on wet streets with cargo.',
          'A compatible double-leg stand can make loading more stable, but it must clear the motor, crank and ground and must not exceed the frame’s permitted mounting arrangement.'
        ]
      },
      {
        heading: 'Avoid accessories that hide risk',
        bullets: [
          'Universal chargers or electrical adapters with an unknown pinout.',
          'No-name batteries without traceable maker details, instructions and a correct charger.',
          'Racks without a published rating and installation instructions.',
          'Open-hook bungee cords that can release or enter the wheel.',
          'Oversized top boxes that create severe sway or obscure the rear light.',
          'Battery or charger covers used during charging, because heat must dissipate.',
          'Handlebar accessories that crowd brake levers, cables or safe hand positions.'
        ]
      }
    ],
    sources: [SOURCE.rsa, SOURCE.schwalbe, SOURCE.cpscChargers, SOURCE.fsaiDeliveryBags]
  },
  {
    ...common,
    seriesOrder: 8,
    slug: 'ebike-delivery-gadgets-diy-inventions',
    title: 'Useful E-bike Delivery Gadgets and DIY Inventions That Stay Low Risk',
    description: 'Build modular cargo, range logging, drying, repair and visibility systems without modifying the high-current battery circuit or weakening the frame.',
    image: {
      src: '/images/ebike-guides/modular-cargo-inventions.webp',
      width: 1536,
      height: 1024,
      alt: 'Open insulated delivery bag with drink dividers secured to a modular rear platform on an electric bicycle',
      caption: 'Illustrative modular platform: reversible dividers and a supported thermal bag improve workflow without altering the frame or battery circuit.'
    },
    intent: 'commercial',
    productQuery: 'bike cargo crate quick release plate dividers reflective tape scale',
    safetyNotice: 'Keep inventions modular, reversible and inspectable. Battery combiners, high-current converters, frame drilling and brake-system changes belong with qualified professionals.',
    sections: [
      {
        heading: 'Use a simple invention rule',
        paragraphs: [
          'A good delivery invention saves time or prevents failure while remaining easy to remove and inspect. It should not depend on hidden wiring, unverified structural changes or a battery modification.',
          'Before building, write the problem in one sentence, identify every new failure mode, set a maximum load and create an inspection point for each fastener or restraint.'
        ]
      },
      {
        heading: 'Build a modular cargo deck',
        paragraphs: [
          'Start with a rack and adapter plate whose ratings are known. Add a durable commercial crate or rounded HDPE module, a non-slip washable liner, removable dividers, a restrained lid and reflective markings. Drainage must not direct water onto the battery, controller or connectors.',
          'Use only the bolt pattern and hardware permitted by the plate maker. Count the deck, crate, liner and hardware as part of the rack load, not as free capacity.'
        ]
      },
      {
        heading: 'Create a personal range dashboard',
        paragraphs: [
          'A phone form can record date, route, distance, start and end charge, assist mode, cargo, wind and temperature. After ten shifts, calculate conservative kilometres per percentage point or Wh/km where the system provides reliable energy data.',
          'Use the result to set route limits and charging stops. The dashboard is useful because it describes the real bicycle, rider, cargo and weather rather than repeating a generic advertised distance.'
        ]
      },
      {
        heading: 'Make a protected spare-battery module',
        paragraphs: [
          'Use a rigid low pannier compartment, closed-cell padding, a terminal cap and two independent restraints. The battery must not support other cargo, move against hard edges or share a compartment with tools, metal objects or liquids.',
          'The module is for transport only. Remove the battery and charge it according to the battery instructions in a safe location; never convert the carrier into a charging enclosure.'
        ]
      },
      {
        heading: 'Add low-risk workflow inventions',
        bullets: [
          'Load-weighing kit: compact luggage scale plus a visible label for rack and side limits.',
          'Wet-shift dock: a ventilated drying rack for panniers, rainwear and helmet, away from charging equipment.',
          'Quiet delivery crate: removable rubber zones and dividers to reduce movement and damaged parcels.',
          'Rapid repair roll: tools arranged in repair order with an inventory label.',
          'Visibility spine: a vertical reflective panel and approved auxiliary rear light on the cargo module.',
          'Security routine tag: a small prompt for battery lock, frame lock, tracker and cargo check.'
        ]
      },
      {
        heading: 'Leave high-energy and structural work to specialists',
        bullets: [
          'Dual-battery combiners or automatic switching electronics.',
          'High-current DC converters or traction-battery USB systems.',
          'Battery heaters, active cooling or altered battery enclosures.',
          'Frame welding, drilling or unapproved clamping.',
          'Brake modifications involving rotor, caliper, hose or motor cut-off compatibility.'
        ]
      }
    ],
    sources: [SOURCE.opss, SOURCE.ortliebQuick, SOURCE.cpsc]
  },
  {
    ...common,
    seriesOrder: 9,
    slug: 'ebike-delivery-maintenance-schedule',
    title: 'E-bike Delivery Maintenance Schedule: Daily, Wet-Shift, Weekly and Monthly Checks',
    description: 'Use a five-minute pre-shift inspection and a simple service log to catch brake, tyre, rack, drivetrain and electrical problems before they stop a route.',
    image: {
      src: '/images/ebike-guides/delivery-maintenance.webp',
      width: 1672,
      height: 941,
      alt: 'Bicycle mechanic inspecting the rear brake of an electric delivery bicycle with the thermal bag stored nearby',
      caption: 'Illustrative service setting: remove cargo for access, then inspect brakes, tyres, drivetrain, rack mounts and lights.'
    },
    intent: 'commercial',
    productQuery: 'bike maintenance toolkit torque wrench chain checker tyre gauge',
    safetyNotice: 'Delivery loads and wet stop-start riding accelerate wear. Follow the bicycle, brake, motor and battery manufacturer intervals whenever they are stricter.',
    sections: [
      {
        heading: 'Complete a five-minute pre-shift check',
        numbered: [
          'Squeeze both brakes and roll the bicycle to confirm strong, independent stopping.',
          'Measure both tyre pressures and inspect sidewalls and tread.',
          'Confirm both wheels and the battery are locked into their mounts.',
          'Shake the rack and cargo module firmly; no mount should move.',
          'Turn the bars fully both ways and compress the bicycle to check cable and cargo clearance.',
          'Test the front light, rear light, brake light if fitted and bell.',
          'Ride a short braking and handling check before joining traffic.'
        ]
      },
      {
        heading: 'Use the right interval for each failure',
        bullets: [
          'After wet shifts: dry the bicycle, wipe battery contacts externally, care for the chain and check brake contamination.',
          'Weekly: inspect pad thickness, chain condition, rack and stand hardware, tyre cuts and obvious spoke problems.',
          'Monthly: check specified fastener torque, wheel trueness, drivetrain wear, cable chafe and charger condition.',
          'By maker interval: arrange motor-system, firmware, battery-diagnostic, suspension, hub and brake service.'
        ]
      },
      {
        heading: 'Treat rack hardware as a safety item',
        paragraphs: [
          'Rack bolts experience vibration and repeated load reversal. Clean enough dirt away to inspect each mount, look for fretting or elongated holes and use a torque tool where the instructions provide a value.',
          'Do not keep tightening a bolt that repeatedly loosens. Identify the cause, check thread condition, spacers, alignment and the specified locking method, then replace damaged hardware with the correct part.'
        ]
      },
      {
        heading: 'Track consumables before they become emergencies',
        paragraphs: [
          'Cargo increases brake demand, and stop-start riding can accelerate chain and tyre wear. Record brake-pad changes, rotor condition, chain measurement, punctures, tyre pressure and spoke or wheel work.',
          'If range falls suddenly, check tyre pressure, brake drag, weather and route before assuming the battery is worn. Repeated electrical warnings, abnormal heat or connector damage require isolation and qualified assessment.'
        ]
      },
      {
        heading: 'Keep a small maintenance log',
        bullets: [
          'Date and odometer or total distance',
          'Battery charge events or cycle information where available',
          'Brake pads and rotor observations',
          'Chain measurement and replacement',
          'Tyre pressures, punctures and damage',
          'Rack fasteners, cracks and corrective work',
          'Electrical faults, warnings and service outcome'
        ],
        paragraphs: [
          'A short consistent log is better than a complex system nobody updates. It should make repeated faults and overdue work visible at a glance.'
        ]
      }
    ],
    sources: [SOURCE.schwalbe, SOURCE.shimano]
  },
  {
    ...common,
    seriesOrder: 10,
    slug: 'complete-ebike-delivery-setup-ireland',
    title: 'Complete E-bike Delivery Setup for Ireland: A Safe Purchase and Test Sequence',
    description: 'Build a delivery bicycle in the right order: confirm its legal category and condition, fit stable cargo, test handling, measure range and then add only the upgrades the route requires.',
    image: {
      src: '/images/ebike-guides/complete-ireland-setup.webp',
      width: 1672,
      height: 941,
      alt: 'High-visibility courier beside a fully equipped electric delivery bicycle with a thermal food bag on a wet Dublin street',
      caption: 'Illustrative complete setup: thermal bag, stable rack, low panniers, lights, weather protection and visible safety equipment.'
    },
    intent: 'commercial',
    productQuery: 'electric bike insulated delivery bag rear rack panniers lights locks',
    safetyNotice: 'Do not buy the complete setup at once. Build a safe base, test it under real work and upgrade the limitation you can measure.',
    sections: [
      {
        heading: 'Choose the setup class',
        bullets: [
          'Lean city setup: rated rack, securely mounted thermal delivery bag, lights, mirror, phone mount, two locks, repair kit and rainwear.',
          'Serious daily setup: 25–30 kg rack where approved, rigid thermal-bag base, drink dividers, low panniers, compatible stand and a protected spare-battery module.',
          'Long-range setup: measured energy plan, approved spare batteries, planned charging, low-drag cargo, weather kit and a detailed maintenance log.',
          'Heavy-cargo setup: cargo bike or rated trailer, commercial box, suitable brakes and stable loading support.'
        ]
      },
      {
        heading: 'Follow a deliberate purchase sequence',
        numbered: [
          'Confirm the bicycle model, legal category, total permitted weight and mechanical condition.',
          'Choose the rack or cargo platform from measured compatibility.',
          'Add compliant lights, mirror, locks and roadside repair equipment.',
          'Test braking and handling with cargo added progressively.',
          'Measure energy use over several representative shifts.',
          'Add an approved spare battery or charging stop only when the route data justifies it.',
          'Add comfort and productivity gadgets after the base system is reliable.'
        ]
      },
      {
        heading: 'Keep the Irish legal category in view',
        paragraphs: [
          'The RSA describes an e-bike as pedal-assisted, with maximum continuous rated output of 250 W and assistance that cuts out before 25 km/h. In that category it is treated like a conventional bicycle. More powerful or throttle-assisted machines can fall into e-moped categories with different approval, registration, insurance, protective-equipment and licence rules.',
          'Changing motor power, assisted speed or throttle behaviour can therefore change the legal category. Range, cargo and comfort work should not quietly become an unapproved power or speed modification.'
        ]
      },
      {
        heading: 'Run a loaded acceptance test',
        bullets: [
          'The rack, box and panniers remain inside the weakest published load limit.',
          'The thermal bag is clean, closes fully, stays level and can be removed for cleaning and disinfection.',
          'Heavy items sit low and left/right balance is acceptable.',
          'No mount, strap, cable or cargo can contact the tyre, spokes, rotor or chain.',
          'Both brakes stop the bicycle predictably with the planned working load.',
          'The stand supports loading without overstressing its mount.',
          'Front and rear lights remain visible and controls remain easy to reach.',
          'Range is based on measured consumption with a reserve, not a brochure maximum.'
        ]
      },
      {
        heading: 'Apply a strict store and affiliate standard',
        paragraphs: [
          'Any future DROPi listing should show verified compatibility, load or electrical ratings, manufacturer identity, warranty, included hardware, instructions and safety documentation. A product should not be called universal when fit depends on frame, axle, tyre, voltage, connector or software communication.',
          'Battery, charger and high-current conversion products need stronger evidence than ordinary accessories. If traceability, compatibility or the correct charger cannot be verified, the product should not be promoted as a delivery upgrade.'
        ]
      },
      {
        heading: 'Use the final departure checklist',
        bullets: [
          'Rack fit confirmed by measurements and current manufacturer instructions.',
          'Cargo inside the lowest system limit and secured in every direction.',
          'Battery, charger, controller and connectors are a matched supported system.',
          'Charging never blocks an escape route and is supervised.',
          'Tyres, brakes, lights, locks and tools checked before the shift.',
          'Loaded handling test completed before delivery work.'
        ]
      }
    ],
    sources: [SOURCE.rsa, SOURCE.dfb, SOURCE.opss, SOURCE.euBattery, SOURCE.fsaiDeliveryBags]
  }
];
