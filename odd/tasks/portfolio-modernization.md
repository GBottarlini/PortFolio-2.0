# Portfolio modernization
Objective: modernize the professional portfolio while preserving its restrained visual identity and replacing stale content with verified real-world experience.
Branch: `feat/portfolio-modernization`. Delivery: `ask-on-risk` with `feature-branch-chain`. Runner: `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`.
Forecast: 500–700 authored changed lines across three reviewable work units.

## Specs

S1. Preserve the current visual identity unless explicitly changed, and implement the approved audit recommendations in stages with functional verification. Do not invent personal, professional, client, or project information.

S2. Replace the public CRM customer screenshot with illustrative, non-production media while the live project is corrected. The CRM was built fully by Genaro for Concesionario Nation to search customers more efficiently and improve commercial follow-up.

S3. Add CodingFlash as the real agency, linking to `https://codingflash.com/`. Present Genaro as “Co-Fundador & Full Stack Developer” from April 2025 to present, focused on websites, custom web applications, React, JavaScript, Node.js, APIs, integrations, automation, infrastructure, digital experience optimization, and internal business tools.

S4. Prioritize these real-world projects: Fiscalía de Estado de la Provincia de Santa Fe; the Spanish-language multi-channel stock integrator for Mercado Libre and Tiendanube built for Concesionario Nation; CRM Nation; Jamabag WooCommerce; and PriCut developed with Viavervit. Project descriptions must explain the problem, Genaro's role, relevant stack, real use, and confidentiality limits without unsupported claims.

S5. Update Concesionario Nation experience to “Analista de E-commerce & Desarrollador”, October 2024 to present. Cover Mercado Libre and Tiendanube operations, Product Ads, publication creation and optimization, factory purchasing, process analysis, and Genaro's full-stack ownership of the inventory integrator and CRM.

S6. Add Viavervit as freelance experience: “Desarrollador Frontend (React.js)”, March 2025 to August 2025. Cover reusable React/CSS components from Figma, features and bug fixes managed through Trello, maintainable project structure, Vitest, remote work in a six-developer team, Git Flow, GitHub/GitLab, and participation in PriCut's quotation flow.

S7. Position the portfolio for Full Stack, Frontend, and Backend developer opportunities. Prefer evidence from real systems over tutorial projects, and keep quantitative claims only when supported by the user-provided professional information.

S8. Correct the approved technical findings: canonical site metadata, Open Graph URL, sitemap, robots, structured data, semantic H1, accessible icon controls, reduced-motion support, media loading strategy, Node engine contract, dead configuration/content, and proportional quality checks.

## Tasks

- T1 — S2-S7 — `inline` (no writer trigger; one coherent content/privacy work unit) — **completed** — Commit: `feat(portfolio): refresh professional story` (hash recorded after commit) — Risk: item 2, removed potentially sensitive CRM media and public access paths.
- T2 — S8 — `inline` (no writer trigger; cohesive SEO/accessibility/performance work unit) — **pending** — Commit: pending — Risk: none expected; reassess shared components after diff.
- T3 — S1,S7-S8 — `inline` (no writer trigger; final maintainability and verification work unit) — **pending** — Commit: pending — Risk: none expected; reassess after diff.

## Log

L1 — 2026-11-17 — User request: “Quiero realizar una auditoría y modernización integral de mi portfolio profesional como desarrollador de software.” The user required the first stage to remain read-only, requested prioritized diagnosis and approval decisions, and asked that later implementation preserve the existing visual identity unless otherwise agreed.

L2 — 2026-11-17 — User approved the proposal: “Bien me encanto toda tu propuesta” and authorized implementation with “si ya puedes comenza”. The user clarified that the CRM backend is currently down, approved illustrative images until it is corrected, identified CodingFlash as the agency, selected Fiscalía, Multi-Channel Inventory Sync, CRM Nation, Jamabag, and PriCut as the principal real-world projects, described Nation duties and full-stack ownership, identified frontend ownership at Viavervit, and set Full Stack, Frontend, and Backend roles as the employment targets. Three screenshots supplied exact professional experience details for CodingFlash, Nation, and Viavervit.

L3 — 2026-11-17 — Evidence: `https://codingflash.com/` responds publicly with the title “CodingFlash | Desarrollo web y software a medida”. Public GitHub repositories and profile README corroborate the selected technical projects and stacks. LinkedIn itself remains unavailable to unauthenticated inspection, so user-provided screenshots are the source for exact roles and dates.

L4 — 2026-11-17 — Delivery decision: the user selected “Cadena en una rama (Recommended)”, mapped to `feature-branch-chain`.

L5 — 2026-11-17 — T1 completed. Replaced the CRM deployment/screenshot with local illustrative media; added verified CodingFlash, Nation, Viavervit and project content; focused the project list on five real-world cases. Structural checks passed (`git diff --check`, SVG XML parsing, bounded sensitive-reference searches). `pnpm lint` and `pnpm exec tsc --noEmit` could not start because `node_modules` is absent. Independent high-risk verification found five blockers; one correction batch fixed all of them and the targeted recheck passed.
