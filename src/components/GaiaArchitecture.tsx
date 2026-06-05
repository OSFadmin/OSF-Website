'use client';

import { useState } from 'react';

type Child = { id: string; title: string; subtitle: string; description: string };
type Pole = {
  id: string; title: string; subtitle: string;
  description: string; color: string; rgb: string; children: Child[];
};
type Selection =
  | { kind: 'pole'; poleId: string }
  | { kind: 'child'; poleId: string; childId: string }
  | { kind: 'rope' }
  | null;
type DetailInfo = { title: string; subtitle: string; description: string; color?: string; rgb?: string };

const ropeData: DetailInfo = {
  title: 'Governance Rope',
  subtitle: 'The binding layer at every level',
  description: `Governance is not a fourth pole — it is the rope that lashes the three poles together and holds the whole structure in tension. Remove the rope and the poles scatter. It appears at every layer of the holarchy, from the meta-system down to individual working groups. It establishes the shared prime directive (a healthy and thriving Earth), the subsidiarity principle (decide locally what can be decided locally), and the distributed decision-making protocols that balance autonomy with coherence. All three poles without the Governance Rope are competing factions. With it, they are a living system.`,
};

const poles: Pole[] = [
  {
    id: 'cores',
    title: 'CORES',
    subtitle: 'Common Resource Stewardship',
    color: '#6E8B3D',
    rgb: '110,139,61',
    description: `The structural container of the commons — the riverbank that gives the river its shape. It holds what cannot be enclosed, privatised, or extracted without the consent of the commons as a whole, and provides the legal and relational architecture through which shared assets are received, protected, licensed, and made available. CORES without Coordination Technology has no nervous system. Without Regenerative Resource Flow it has no way to activate what it holds. What CORES holds, GaiaOS routes, and the Resource Flow circulates.`,
    children: [
      {
        id: 'trust',
        title: 'TRUST',
        subtitle: 'Federated Trust Protocol',
        description: `Legal holding of shared assets: federated IP stewardship, commons trust structures, purpose-entities supporting localised asset stewardship. The bedrock of what cannot be extracted or privatised. The federated trust layer sits above the Commons Purpose Vehicles, stewarding what they hold and gradually absorbing what they build — supporting the formation of localised commons nodes that hold their own assets within the federated architecture.`,
      },
      {
        id: 'opal',
        title: 'OPAL',
        subtitle: 'Open Peer Access Licence',
        description: `The IP licensing wrapper that de-risks innovation sharing into the commons — ensuring fair attribution and rewarding contribution. Dual architecture: favourable in-commons dynamics for participants; market pricing for out-of-commons commercial use, with a share returning to the commons. Not a binary open/closed choice — a composable licensing grammar across five dimensions: stewardship scope, economic interface, trust relation, value calibration, and derivative logic. OPAL is what makes IP a commons asset rather than a private moat.`,
      },
      {
        id: 'paseo',
        title: 'PASEO',
        subtitle: 'Participation Framework',
        description: `Legal and operational structures through which any organisation can engage with the commons at whatever level of readiness it brings, with reciprocal dynamics that incentivise progressive participation. Three tiers — Light, Hybrid, and Flagship — understood as a continuous gradient rather than fixed boxes. A CPV (Commons Purpose Vehicle) is a PASEO configured for capital aggregation. Each tier strengthens the ecosystem differently as organisations collectively build the commons resource pool.`,
      },
    ],
  },
  {
    id: 'gaiaos',
    title: 'GaiaOS',
    subtitle: 'Coordination Technology',
    color: '#B7A24B',
    rgb: '183,162,75',
    description: `The sensing and nervous system of the commons — the layer through which the federation perceives its own state, routes information and resources, coordinates action, and accumulates institutional memory. It is also the first CPV: GaiaOS is the commons infrastructure it is designed to power, tested in-house under real operating conditions before being opened to the broader federation. The seed is GaiaOps — the operational platform in live development with Darttek. Operations first, Operating System later.`,
    children: [
      {
        id: 'coord-software',
        title: 'Coordination Software',
        subtitle: 'GaiaOps → GaiaOS',
        description: `The operational seed in live build with Darttek, coordinating the commons today — progressive-commitment onboarding, document permissions, workflow orchestration, meeting intelligence, task management, KYC/AML. GaiaOS: the full commons-grade operating system it grows into — supply chains, inter-org smart contracts, self-sovereign identity, digital twins, ecosystem-scale coordination. GaiaOps is not a separate product; it is the first function of the GaiaOS CPV, proving the thesis before the full architecture is built.`,
      },
      {
        id: 'sensors',
        title: 'Physical Sensors',
        subtitle: 'Spatial Web',
        description: `The live state of the commons made digital: soil-health sensors, reef indicators, inventory tags, transport data. The nervous system at the boundary of digital and physical — continuous sensing of the world's actual conditions, consumed and surfaced within GaiaOS. This is where planetary intelligence enters the coordination layer: not as data abstracted from the world, but as continuous sensing of the world's actual conditions in real time.`,
      },
      {
        id: 'hardware',
        title: 'Hardware & Compute',
        subtitle: 'Distributed Infrastructure',
        description: `Local storage, commons computation, distributed networks — the substrate that runs without dependence on centralised cloud infrastructure. The long-horizon layer toward true peer-to-peer operation and local AI inference (GaiaOS scope, not GaiaOps scope). Commons-owned hardware nodes provide data sovereignty and resilience — the substrate on which coordination software runs without extractive dependency on third-party platforms.`,
      },
    ],
  },
  {
    id: 'resource-flow',
    title: 'Resource Flow',
    subtitle: 'Regenerative Resource Flow',
    color: '#C2CB52',
    rgb: '194,203,82',
    description: `The river — the actual movement of value into, through, and within the commons. CORES is the riverbank; GaiaOS is the navigation intelligence; Regenerative Resource Flow is the water. Without it, the other two poles are structures with nothing to activate them. The frame is not finance — finance is one tool within it. The frame is resource: how value in all its forms (financial, material, knowledge, time, care) is generated, recognised, circulated, and returned to the commons rather than extracted from it.`,
    children: [
      {
        id: 'philanthropy',
        title: 'Philanthropy',
        subtitle: 'Recoverable Grants',
        description: `Philanthropic capital flows into the OSF and from there into commons infrastructure — Trust, OPAL, PASEO, GaiaOS, governance, and commons operations. The activating stream: it funds the infrastructure that makes the other streams possible. Recoverable grants: capital the commons commits to return once self-sufficiency is reached, aligning donor and commons toward that threshold and ensuring neither party loses sight of the regenerative goal.`,
      },
      {
        id: 'revenue',
        title: 'Regenerative Revenue',
        subtitle: 'Commons Purpose Vehicles',
        description: `Commons Purpose Vehicles — the investable activation mechanism. Capped revenue-share, no ownership transfer; surplus above the cap recirculates into the commons. Commons-aligned fund vehicles and onboarding ramps bring capital from the old paradigm into the new — structured with mission-lock and capped returns at every stage, so investment serves the commons rather than extracting from it.`,
      },
      {
        id: 'internal',
        title: 'Internal Economy',
        subtitle: 'Commons Metabolism',
        description: `Not an inlet but the commons' own economic metabolism: multi-currency allocation (time credits, access rights, contribution ledgers), AI-informed redistribution to where most needed, access-right economics where contribution entitles participation without financial exchange, and a gradual transition from fiat dependence toward commons-native instruments. The regenerative economy made real — not as a concept but as operational infrastructure.`,
      },
    ],
  },
];

// Branch points at the ring level (~1/3 from top), viewBox "0 0 100 265"
// APEX=[50,10], BASES: cores=[5,240], gaiaos=[50,250], resource-flow=[95,240]
const SUBPOLES: Record<string, {
  branch: [number, number];
  subs: [[number, number], [number, number], [number, number]];
}> = {
  cores: {
    branch: [35, 88],
    subs: [[1, 250], [12, 257], [25, 254]],
  },
  gaiaos: {
    branch: [50, 88],
    subs: [[33, 260], [50, 264], [67, 260]],
  },
  'resource-flow': {
    branch: [65, 88],
    subs: [[75, 254], [88, 257], [99, 250]],
  },
};

// Staggered negative delays spread 12 nodes evenly across the 3s cycle
const ROPE_DELAYS: Record<string, number> = {
  cores: 0,
  trust: -0.22,
  opal: -0.44,
  paseo: -0.66,
  gaiaos: -1.0,
  'coord-software': -1.22,
  sensors: -1.44,
  hardware: -1.66,
  'resource-flow': -2.0,
  philanthropy: -2.22,
  revenue: -2.44,
  internal: -2.66,
};

// ── Big teepee outside the whiteboard box ──────────────────────────────────
function BigTeepee({
  hoverPole,
  isRopeActive,
  selection,
}: {
  hoverPole: string | null;
  isRopeActive: boolean;
  selection: Selection;
}) {
  const activePoleId =
    selection?.kind === 'pole' ? selection.poleId :
    selection?.kind === 'child' ? selection.poleId : null;
  const activeChildId = selection?.kind === 'child' ? selection.childId : null;

  const poleColor = (id: string, defaultColor: string) => {
    if (isRopeActive || activePoleId === id || hoverPole === id) return defaultColor;
    return 'rgba(255,255,255,0.2)';
  };
  const poleWidth = (id: string) =>
    (activePoleId === id || hoverPole === id || isRopeActive) ? 2.2 : 1.1;

  const childSubpoleColor = (poleId: string, idx: number) => {
    const pole = poles.find(p => p.id === poleId);
    if (!pole) return 'rgba(255,255,255,0.1)';
    const childId = pole.children[idx]?.id;
    if (activeChildId === childId) return pole.color;
    if (activePoleId === poleId) return `rgba(${pole.rgb},0.45)`;
    return `rgba(${pole.rgb},0.2)`;
  };
  const childSubpoleWidth = (poleId: string, idx: number) => {
    const pole = poles.find(p => p.id === poleId);
    if (!pole) return 0.8;
    const childId = pole.children[idx]?.id;
    return activeChildId === childId ? 2.0 : 0.9;
  };

  const showSubpoles = (poleId: string) =>
    activePoleId === poleId && activeChildId !== null;

  const APEX: [number, number] = [50, 10];
  const BASES: Record<string, [number, number]> = {
    cores: [5, 240],
    gaiaos: [50, 250],
    'resource-flow': [95, 240],
  };
  const POLE_COLORS: Record<string, string> = {
    cores: '#6E8B3D',
    gaiaos: '#B7A24B',
    'resource-flow': '#C2CB52',
  };

  return (
    <svg
      viewBox="0 0 100 265"
      style={{ width: '186px', height: '493px', overflow: 'visible' }}
      aria-hidden="true"
    >
      {poles.map(pole => {
        const base = BASES[pole.id];
        const sp = SUBPOLES[pole.id];
        const showSub = showSubpoles(pole.id);
        return (
          <g key={pole.id}>
            {/* Upper segment: apex → branch */}
            <line
              x1={APEX[0]} y1={APEX[1]}
              x2={sp.branch[0]} y2={sp.branch[1]}
              stroke={poleColor(pole.id, POLE_COLORS[pole.id])}
              strokeWidth={poleWidth(pole.id)}
              strokeLinecap="round"
              style={{ transition: 'all 0.35s ease' }}
            />
            {/* Lower segment: branch → base (fades when sub-poles expand) */}
            <line
              x1={sp.branch[0]} y1={sp.branch[1]}
              x2={base[0]} y2={base[1]}
              stroke={poleColor(pole.id, POLE_COLORS[pole.id])}
              strokeWidth={poleWidth(pole.id)}
              strokeLinecap="round"
              strokeOpacity={showSub ? 0.22 : 1}
              style={{ transition: 'all 0.35s ease' }}
            />
            {/* Sub-poles fanning from branch point */}
            {sp.subs.map(([tx, ty], idx) => (
              <line
                key={idx}
                x1={sp.branch[0]} y1={sp.branch[1]}
                x2={tx} y2={ty}
                stroke={childSubpoleColor(pole.id, idx)}
                strokeWidth={childSubpoleWidth(pole.id, idx)}
                strokeLinecap="round"
                strokeOpacity={showSub ? 1 : 0}
                style={{ transition: 'all 0.35s ease' }}
              />
            ))}
          </g>
        );
      })}

      {/* Governance rope ellipse */}
      <ellipse
        cx="50" cy="88" rx="36" ry="9"
        stroke={isRopeActive || hoverPole === 'rope' ? '#B7A24B' : 'rgba(183,162,75,0.28)'}
        strokeWidth={isRopeActive || hoverPole === 'rope' ? 2.0 : 0.9}
        fill="none"
        style={{ transition: 'all 0.35s ease' }}
      />

      {/* Apex dot */}
      <circle cx="50" cy="10" r="2.5"
        fill={isRopeActive ? '#B7A24B' : 'rgba(183,162,75,0.5)'}
        style={{ transition: 'all 0.35s ease' }}
      />

      {/* Pole base dots */}
      {poles.map(pole => {
        const base = BASES[pole.id];
        return (
          <circle key={pole.id} cx={base[0]} cy={base[1]} r="2"
            fill={activePoleId === pole.id ? POLE_COLORS[pole.id] : `rgba(${pole.rgb},0.25)`}
            style={{ transition: 'all 0.35s ease' }}
          />
        );
      })}
    </svg>
  );
}

// ── Rope border wrapper ────────────────────────────────────────────────────
// Uses ::after pseudo-element so the mask doesn't affect child content
function RopeBorderCard({
  children,
  nodeId,
  isRopeActive,
  radius = '12px',
}: {
  children: React.ReactNode;
  nodeId: string;
  isRopeActive: boolean;
  radius?: string;
}) {
  if (!isRopeActive) return <>{children}</>;
  const delay = ROPE_DELAYS[nodeId] ?? 0;
  const afterRadius = `${parseFloat(radius) + 1.5}px`;
  return (
    <div
      className="rope-spin-border"
      style={{
        borderRadius: radius,
        '--rope-delay': `${delay}s`,
        '--rope-after-radius': afterRadius,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function GaiaArchitecture() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<Selection>(null);
  const [hoverPole, setHoverPole] = useState<string | null>(null);

  const isRopeActive   = selection?.kind === 'rope';
  const isPoleActive   = (id: string) => selection?.kind === 'pole' && selection.poleId === id;
  const isPoleInvolved = (id: string) =>
    (selection?.kind === 'pole'  && selection.poleId === id) ||
    (selection?.kind === 'child' && selection.poleId === id);
  const isChildActive  = (poleId: string, childId: string) =>
    selection?.kind === 'child' && selection.poleId === poleId && selection.childId === childId;

  const selectPole = (poleId: string) =>
    setSelection(selection?.kind === 'pole' && selection.poleId === poleId ? null : { kind: 'pole', poleId });
  const selectChild = (poleId: string, childId: string) =>
    setSelection(
      selection?.kind === 'child' && selection.poleId === poleId && selection.childId === childId
        ? { kind: 'pole', poleId }
        : { kind: 'child', poleId, childId }
    );

  const getDetail = (): DetailInfo | null => {
    if (!selection) return null;
    if (selection.kind === 'rope') return ropeData;
    const pole = poles.find(p => p.id === selection.poleId);
    if (!pole) return null;
    if (selection.kind === 'child') {
      const child = pole.children.find(c => c.id === selection.childId);
      return child ? { ...child, color: pole.color, rgb: pole.rgb } : null;
    }
    return { title: pole.title, subtitle: pole.subtitle, description: pole.description, color: pole.color, rgb: pole.rgb };
  };
  const detail = getDetail();

  // dangerouslySetInnerHTML avoids React's HTML entity encoding of '<angle>' in style tags
  const css = `
    @property --rope-angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes rope-border-spin {
      from { --rope-angle: 0deg; }
      to   { --rope-angle: 360deg; }
    }
    /* ::after carries the mask so child content is never hidden */
    .rope-spin-border {
      position: relative;
      isolation: isolate;
    }
    .rope-spin-border::after {
      content: '';
      position: absolute;
      inset: -1.5px;
      border-radius: var(--rope-after-radius, 13.5px);
      background: conic-gradient(
        from var(--rope-angle) at 50% 50%,
        transparent 0deg 332deg,
        rgba(183,162,75,1) 340deg 348deg,
        transparent 356deg 360deg
      );
      animation: rope-border-spin 3s linear infinite;
      animation-delay: var(--rope-delay, 0s);
      z-index: -1;
      padding: 1.5px;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask-composite: destination-out;
    }
    @keyframes beckon-ring {
      0%, 100% { box-shadow: 0 0 0 0px rgba(110,139,61,0); }
      50%       { box-shadow: 0 0 0 8px rgba(110,139,61,0.12), 0 0 28px rgba(110,139,61,0.06); }
    }
    @keyframes beckon-chevron {
      0%, 100% { transform: translateY(0px);  opacity: 0.4; }
      50%       { transform: translateY(5px);  opacity: 0.85; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-5xl mx-auto">

          {/* Pre-button context + toggle — offset on lg to align with whiteboard panel */}
          <div className="lg:pl-[200px]">
          <div className="text-center mb-9 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
              The living structure
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.48)' }}>
              Three structural elements — each leaning on the others, none able to stand alone — held in dynamic tension by distributed governance. Like poles lashed at the apex: remove any one and the others fall. The diagram below maps this fractal architecture interactively. Each of the three poles contains its own triad of components, and the same pattern repeats at every scale of the commons.
            </p>
          </div>

          {/* Toggle button */}
          <div className="flex flex-col items-center gap-2 mb-0">
            <button
              onClick={() => { setOpen(v => !v); if (open) setSelection(null); }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-body font-medium text-sm tracking-wide transition-all"
              style={{
                border: `1px solid ${open ? '#6E8B3D' : 'rgba(110,139,61,0.42)'}`,
                color: '#F5F1E6',
                background: open ? 'rgba(110,139,61,0.1)' : 'rgba(255,255,255,0.03)',
                animation: open ? 'none' : 'beckon-ring 2.8s ease-in-out infinite',
              }}
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ border: `1px solid ${open ? '#6E8B3D' : 'rgba(110,139,61,0.5)'}`, background: open ? 'rgba(110,139,61,0.28)' : 'transparent' }}>
                <svg viewBox="0 0 12 12" width="10" fill="none" aria-hidden="true">
                  {!open && <line x1="6" y1="2" x2="6" y2="10" stroke="#F5F1E6" strokeWidth="1.5" strokeLinecap="round" />}
                  <line x1="2" y1="6" x2="10" y2="6" stroke="#F5F1E6" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              {open ? 'Close architecture' : 'Open the Live Architecture'}
            </button>
            {!open && (
              <svg viewBox="0 0 18 10" width="18" fill="none" aria-hidden="true"
                style={{ animation: 'beckon-chevron 2s ease-in-out infinite' }}>
                <path d="M1 1 L9 8.5 L17 1" stroke="rgba(110,139,61,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          </div>{/* end lg:pl-[200px] */}

          {/* Expand wrapper */}
          <div style={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.55s ease, margin-top 0.4s ease',
            marginTop: open ? '2.5rem' : 0,
          }}>
            <div style={{ overflow: 'hidden' }}>

              {/* Flex row: big teepee left + whiteboard right */}
              <div className="flex items-stretch gap-0">

                {/* Big teepee column — vertically centred alongside whiteboard */}
                <div
                  className="hidden lg:flex flex-col items-center justify-center shrink-0"
                  style={{ width: '200px', paddingRight: '14px' }}
                >
                  <BigTeepee
                    hoverPole={hoverPole}
                    isRopeActive={isRopeActive}
                    selection={selection}
                  />
                </div>

                {/* Whiteboard panel */}
                <div className="flex-1 rounded-2xl overflow-hidden" style={{
                  background: '#060f0b',
                  border: '1px solid rgba(110,139,61,0.18)',
                  backgroundImage: 'radial-gradient(circle, rgba(110,139,61,0.06) 1px, transparent 1px)',
                  backgroundSize: '26px 26px',
                }}>

                  {/* Header bar */}
                  <div className="px-6 py-5 flex items-center justify-between gap-4"
                    style={{ borderBottom: '1px solid rgba(110,139,61,0.12)' }}>
                    <div>
                      <p className="font-display font-bold tracking-[0.12em] text-sm"
                        style={{ color: 'rgba(245,241,230,0.82)' }}>
                        GAIA COMMONS — FRACTAL STRUCTURE
                      </p>
                      <p className="font-body text-xs mt-1" style={{ color: 'rgba(245,241,230,0.28)' }}>
                        One commons, repeating in threes · Click any node to explore
                      </p>
                    </div>
                    <button
                      onClick={() => setSelection(isRopeActive ? null : { kind: 'rope' })}
                      onMouseEnter={() => setHoverPole('rope')}
                      onMouseLeave={() => setHoverPole(null)}
                      className="shrink-0 text-xs font-body px-4 py-2 rounded-full transition-all"
                      style={{
                        border: `1px solid ${isRopeActive ? 'rgba(183,162,75,0.75)' : 'rgba(183,162,75,0.28)'}`,
                        color: isRopeActive ? '#B7A24B' : 'rgba(183,162,75,0.7)',
                        background: isRopeActive ? 'rgba(183,162,75,0.12)' : 'transparent',
                      }}
                    >
                      ⊕ Governance Rope
                    </button>
                  </div>

                  {/* Diagram body */}
                  <div className="px-6 pt-8 pb-6">

                    {/* Level labels */}
                    <div className="grid grid-cols-3 gap-4 mb-2">
                      {poles.map((pole, i) => (
                        <p key={pole.id} className="text-center font-body text-xs uppercase tracking-[0.14em]"
                          style={{ color: `rgba(${pole.rgb},0.38)` }}>
                          {['Pole 1', 'Pole 2 · Centre', 'Pole 3'][i]}
                        </p>
                      ))}
                    </div>

                    {/* L1 nodes + governance rope connector line */}
                    <div className="relative">
                      <div className="absolute left-0 right-0 pointer-events-none" style={{
                        top: '50%', transform: 'translateY(-50%)',
                        borderTop: `1px dashed ${isRopeActive ? 'rgba(183,162,75,0.55)' : 'rgba(183,162,75,0.2)'}`,
                        transition: 'border-color 0.4s ease', zIndex: 0,
                      }} />
                      <div className="grid grid-cols-3 gap-4 relative z-10">
                        {poles.map(pole => {
                          const active   = isPoleActive(pole.id);
                          const involved = isPoleInvolved(pole.id);
                          const dim      = selection !== null && !involved && !isRopeActive;
                          return (
                            <RopeBorderCard key={pole.id} nodeId={pole.id} isRopeActive={isRopeActive} radius="12px">
                              <button
                                onClick={() => selectPole(pole.id)}
                                onMouseEnter={() => setHoverPole(pole.id)}
                                onMouseLeave={() => setHoverPole(null)}
                                className="w-full rounded-xl px-4 py-5 text-center transition-all"
                                style={{
                                  background: active ? `rgba(${pole.rgb},0.14)` : 'rgba(15,28,20,0.97)',
                                  border: `1px solid ${active && !isRopeActive ? pole.color : involved && !isRopeActive ? `rgba(${pole.rgb},0.4)` : 'rgba(255,255,255,0.09)'}`,
                                  opacity: dim ? 0.32 : 1,
                                  ...(active && !isRopeActive ? { boxShadow: `0 0 22px rgba(${pole.rgb},0.18)` } : {}),
                                }}>
                                <p className="font-display font-bold text-base"
                                  style={{ color: active ? pole.color : '#F5F1E6' }}>
                                  {pole.title}
                                </p>
                                <p className="font-body text-xs mt-1 leading-snug"
                                  style={{ color: active ? 'rgba(245,241,230,0.65)' : 'rgba(245,241,230,0.36)' }}>
                                  {pole.subtitle}
                                </p>
                              </button>
                            </RopeBorderCard>
                          );
                        })}
                      </div>
                    </div>

                    {/* Vertical connectors + L2 child nodes */}
                    <div className="grid grid-cols-3 gap-4">
                      {poles.map(pole => {
                        const involved = isPoleInvolved(pole.id);
                        const dim      = selection !== null && !involved && !isRopeActive;
                        return (
                          <div key={pole.id} className="flex flex-col items-center"
                            style={{ opacity: dim ? 0.28 : 1, transition: 'opacity 0.3s ease' }}>
                            <div style={{
                              width: '1px', height: '22px',
                              background: `linear-gradient(to bottom, rgba(${pole.rgb},0.48), rgba(${pole.rgb},0.1))`,
                            }} />
                            <div className="w-full space-y-2">
                              {pole.children.map(child => {
                                const childActive = isChildActive(pole.id, child.id);
                                return (
                                  <RopeBorderCard key={child.id} nodeId={child.id} isRopeActive={isRopeActive} radius="9px">
                                    <button
                                      onClick={() => selectChild(pole.id, child.id)}
                                      onMouseEnter={() => setHoverPole(pole.id)}
                                      onMouseLeave={() => setHoverPole(null)}
                                      className="w-full text-left rounded-lg px-3.5 py-3 transition-all"
                                      style={{
                                        background: childActive ? `rgba(${pole.rgb},0.11)` : 'rgba(255,255,255,0.025)',
                                        border: `1px solid ${childActive && !isRopeActive ? `rgba(${pole.rgb},0.6)` : 'rgba(255,255,255,0.07)'}`,
                                        ...(childActive && !isRopeActive ? { boxShadow: `0 0 12px rgba(${pole.rgb},0.1)` } : {}),
                                      }}>
                                      <p className="font-display font-semibold text-sm"
                                        style={{ color: childActive ? pole.color : 'rgba(245,241,230,0.62)' }}>
                                        {child.title}
                                      </p>
                                      <p className="font-body text-xs mt-0.5"
                                        style={{ color: 'rgba(245,241,230,0.26)' }}>
                                        {child.subtitle}
                                      </p>
                                    </button>
                                  </RopeBorderCard>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Fixed-height detail panel */}
                    <div className="mt-5 rounded-xl p-6" style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${detail?.rgb
                        ? `rgba(${detail.rgb},0.22)`
                        : isRopeActive ? 'rgba(183,162,75,0.25)' : 'rgba(255,255,255,0.06)'}`,
                      minHeight: '220px',
                      transition: 'border-color 0.35s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: detail ? 'flex-start' : 'center',
                    }}>
                      {detail ? (
                        <>
                          <p className="font-body text-xs uppercase tracking-[0.16em] mb-2"
                            style={{ color: detail.color ?? '#B7A24B' }}>
                            {detail.subtitle}
                          </p>
                          <h4 className="font-display font-bold text-xl mb-3" style={{ color: '#F5F1E6' }}>
                            {detail.title}
                          </h4>
                          <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.60)' }}>
                            {detail.description}
                          </p>
                        </>
                      ) : (
                        <p className="text-center font-body text-xs" style={{ color: 'rgba(245,241,230,0.18)' }}>
                          Select a node to explore its role in the commons
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
