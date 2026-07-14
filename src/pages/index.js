"use client"
import { useState, useRef, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { DRUGS, CATEGORIES, SOURCES_CONFIG } from "../data/drugs"

/* ============================================================
   EaseRX — one site, one page.
   Design tokens taken verbatim from the Claude Design export.
   All app logic (URL routing, autocomplete, ZIP, strengths,
   tabs, research, insurance, savings math) is unchanged from
   the previous version — only the skin and the landing chrome.
   ============================================================ */

const T = {
  bg: "oklch(19% 0.015 255)", // #0F141B
  surface: "oklch(24% 0.015 255)", // #1B2026
  searchBg: "oklch(97% 0.005 255)", // #F3F5F8
  border: "oklch(30% 0.015 255)", // #292E35
  borderLight: "oklch(31% 0.015 255)", // #2B3138
  borderNav: "oklch(32% 0.015 255)", // #2E333B
  borderFooter: "oklch(28% 0.015 255)", // #242930
  accent: "oklch(75% 0.15 70)", // #E99B2A
  accentDim: "oklch(66% 0.14 70)", // hover
  accentTint: "oklch(27% 0.045 70)", // amber-tinted dark surface
  onAccent: "oklch(19% 0.015 255)", // #0F141B
  text: "oklch(96% 0.005 255)", // #EFF2F5
  text94: "oklch(94% 0.005 255)",
  text92: "oklch(92% 0.005 255)",
  text90: "oklch(90% 0.005 255)",
  text88: "oklch(88% 0.01 255)",
  text80: "oklch(80% 0.01 255)",
  text78: "oklch(78% 0.01 255)",
  muted: "oklch(62% 0.01 255)",
  muted60: "oklch(60% 0.01 255)",
  muted58: "oklch(58% 0.01 255)",
  inputText: "oklch(20% 0.02 255)",
  inputIcon: "oklch(45% 0.02 255)",
  display: "'Space Grotesk', sans-serif",
  body: "'Work Sans', system-ui, sans-serif",
}

// Edit these in one place.
const LINKS = {
  writing: "https://mikecisar.substack.com/",
}
const AUTHOR = {
  name: "Mike Cisar",
  byline: "By Mike Cisar",
  avatar: null, // set to "/mike.jpg" (file in /public) to show a real photo
}

// Category tags, retuned for the dark background.
const CATEGORY_COLORS = {
  "GLP-1": "#8FBEEC",
  "Inhaler": "#6FD3B4",
  "ED": "#F0937A",
  "HBP": "#A99AF0",
  "Cholesterol": "#E8C06B",
  "Diabetes": "#6CC9D6",
  "Thyroid": "#E39A9A",
  "Mental Health": "#B9A3F0",
  "GI": "#E5B472",
  "Pain": "#F09ABF",
  "Blood Thinner": "#7CCB9C",
}
const CATEGORY_BG = {
  "GLP-1": "#16283A",
  "Inhaler": "#12302A",
  "ED": "#38211A",
  "HBP": "#241F3D",
  "Cholesterol": "#33290F",
  "Diabetes": "#123033",
  "Thyroid": "#331E1E",
  "Mental Health": "#272040",
  "GI": "#332612",
  "Pain": "#351C29",
  "Blood Thinner": "#16301F",
}

// Shown as "Popular:" chips under the search bar. Any name not in DRUGS is skipped.
const POPULAR = ["Ozempic", "Wegovy", "Metformin", "Advair", "Lipitor"]

const parsePrice = (str) => {
  if (!str) return null
  const m = String(str).replace(/,/g, "").match(/\$\s*(\d+(?:\.\d+)?)/)
  return m ? parseFloat(m[1]) : null
}

const globalStyles = `
  :root { color-scheme: dark; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: ${T.bg}; color: ${T.text}; -webkit-font-smoothing: antialiased; font-family: ${T.body}; }

  /* The search bar stays a white pill, exactly as in the design. */
  .rx-searchbar { display: flex; align-items: center; gap: 10px; background: ${T.searchBg}; border-radius: 16px; padding: 8px 8px 8px 20px; box-shadow: 0 24px 60px -20px oklch(0% 0 0 / .55); }
  .rx-input { font-family: ${T.body}; font-weight: 500; font-size: 17px; flex: 1; min-width: 0; padding: 14px 0; border: none; background: transparent; outline: none; color: ${T.inputText}; }
  .rx-input::placeholder { color: ${T.inputIcon}; }
  .rx-zip { font-family: ${T.body}; font-weight: 500; font-size: 15px; width: 92px; flex: none; padding: 12px 10px; border: none; border-left: 1px solid #D9DEE5; background: transparent; outline: none; color: ${T.inputText}; }
  .rx-zip::placeholder { color: ${T.inputIcon}; }

  .rx-btn { font-family: ${T.body}; font-size: 16px; font-weight: 700; background: ${T.accent}; color: ${T.onAccent}; border: none; border-radius: 11px; padding: 14px 28px; cursor: pointer; transition: background .2s; flex: none; white-space: nowrap; }
  .rx-btn:hover:not(:disabled) { background: ${T.accentDim}; }
  .rx-btn:disabled { background: #DDE2E8; color: #9AA2AB; cursor: not-allowed; }

  .suggest-item { font-family: ${T.body}; padding: 12px 20px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 12px; transition: background .15s; border-bottom: 1px solid ${T.border}; background: ${T.surface}; color: ${T.text}; }
  .suggest-item:last-child { border-bottom: none; }
  .suggest-item:hover { background: ${T.bg}; }

  .category-pill { font-family: ${T.body}; font-size: 13.5px; font-weight: 500; padding: 8px 15px; border-radius: 20px; cursor: pointer; border: 1px solid ${T.borderLight}; background: ${T.surface}; color: ${T.text88}; transition: all .2s; }
  .category-pill:hover { border-color: ${T.accent}; }
  .category-pill.active { background: ${T.accent}; border-color: ${T.accent}; color: ${T.onAccent}; font-weight: 700; }

  .drug-card { background: ${T.surface}; border-radius: 12px; border: 1px solid ${T.borderLight}; padding: 16px 20px; cursor: pointer; transition: all .2s; display: flex; justify-content: space-between; align-items: center; gap: 12px; color: ${T.text}; }
  .drug-card:hover { border-color: ${T.accent}; transform: translateY(-1px); }

  .go-btn { font-family: ${T.body}; font-size: 13px; font-weight: 700; padding: 9px 18px; border-radius: 9px; border: 1px solid ${T.accent}; color: ${T.accent}; background: transparent; cursor: pointer; text-decoration: none; display: inline-block; transition: all .2s; white-space: nowrap; }
  .go-btn:hover { background: ${T.accent}; color: ${T.onAccent}; }

  .tab-btn { font-family: ${T.body}; font-size: 15px; font-weight: 500; padding: 12px 28px; border: none; background: transparent; cursor: pointer; color: ${T.muted}; border-bottom: 2px solid transparent; transition: all .2s; }
  .tab-btn:hover { color: ${T.text88}; }
  .tab-btn.active { color: ${T.accent}; border-bottom-color: ${T.accent}; font-weight: 700; }

  .price-card { background: ${T.surface}; border-radius: 14px; border: 1px solid ${T.borderLight}; padding: 20px 24px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }

  .back-btn { font-family: ${T.body}; font-size: 14px; font-weight: 500; color: ${T.accent}; background: none; border: none; cursor: pointer; padding: 0; }
  .back-btn:hover { opacity: .85; }

  .research-summary { cursor: pointer; font-family: ${T.body}; font-size: 14px; font-weight: 600; color: ${T.accent}; padding: 4px 0; user-select: none; }
  .research-link { color: ${T.accent}; text-decoration: none; font-family: ${T.body}; font-size: 13px; line-height: 1.7; }
  .research-link:hover { text-decoration: underline; }

  .nav-link { font-family: ${T.body}; font-size: 14px; font-weight: 500; color: ${T.text80}; text-decoration: none; }
  .nav-link:hover { color: ${T.accent}; }
  .accent-link { font-family: ${T.body}; font-size: 13px; font-weight: 500; color: ${T.accent}; text-decoration: none; }
  .accent-link:hover { opacity: .85; }

  select { font-family: ${T.body}; background: ${T.surface}; color: ${T.text}; border: 1px solid ${T.borderLight}; border-radius: 10px; padding: 12px 14px; font-size: 15px; }

  a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, summary:focus-visible { outline: 2px solid ${T.accent}; outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; scroll-behavior: auto !important; } }
`

const fontLinks = (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
)

export default function EaseRX() {
  const [page, setPage] = useState("home")
  const [query, setQuery] = useState("")
  const [zip, setZip] = useState("")
  const [selectedDrug, setSelectedDrug] = useState(null)
  const [selectedStrength, setSelectedStrength] = useState("")
  const [selectedQty, setSelectedQty] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [resultTab, setResultTab] = useState("cash")
  const inputRef = useRef(null)
  const router = useRouter()

  const drugNames = Object.keys(DRUGS)

  useEffect(() => {
    if (!router.isReady) return
    const d = router.query.drug
    if (typeof d === "string" && DRUGS[d]) {
      setSelectedDrug(d)
      setQuery(d)
      setSelectedStrength(s => (DRUGS[d].strengths.includes(s) ? s : DRUGS[d].strengths[0]))
      setSelectedQty(q => (DRUGS[d].quantities.includes(q) ? q : DRUGS[d].quantities[0]))
      setPage("results")
    } else {
      setPage("home")
    }
  }, [router.isReady, router.query.drug])

  useEffect(() => {
    if (query.length > 1) {
      const matches = drugNames.filter(n =>
        n.toLowerCase().includes(query.toLowerCase()) ||
        DRUGS[n].generic.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(matches.slice(0, 6))
    } else {
      setSuggestions([])
    }
  }, [query])

  const handleSelect = (name) => {
    setSelectedDrug(name)
    setQuery(name)
    setSuggestions([])
    setSelectedStrength(DRUGS[name].strengths[0])
    setSelectedQty(DRUGS[name].quantities[0])
  }

  const handleSearch = () => {
    if (selectedDrug) router.push({ pathname: "/", query: { drug: selectedDrug } }, undefined, { shallow: true })
  }

  const openDrug = (name) => {
    handleSelect(name)
    router.push({ pathname: "/", query: { drug: name } }, undefined, { shallow: true })
  }

  const focusSearch = () => {
    inputRef.current?.focus()
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const filteredDrugs = activeCategory === "All"
    ? drugNames
    : drugNames.filter(n => DRUGS[n].category === activeCategory)

  const drug = selectedDrug ? DRUGS[selectedDrug] : null

  const buildGoodRxUrl = (name, zip) => {
    const base = DRUGS[name]?.sources.goodrx.url || "https://www.goodrx.com"
    return zip ? `${base}?zip=${zip}` : base
  }

  /* ---------------- shared chrome ---------------- */

  const Nav = ({ withBack }) => (
    <nav style={ST.nav}>
      <div style={ST.navLeft}>
        {withBack && (
          <button
            className="back-btn"
            onClick={() => router.push({ pathname: "/" }, undefined, { shallow: true })}
            style={{ marginRight: 10 }}
          >
            ← Back
          </button>
        )}
        <div style={ST.logoMark}>Rx</div>
        <span style={ST.wordmark}>EaseRX</span>
        <span style={ST.byline}>{AUTHOR.byline}</span>
      </div>
      <div style={ST.navRight}>
        <a href={LINKS.writing} target="_blank" rel="noopener noreferrer" className="nav-link">
          Writing
        </a>
        {withBack ? (
          <span style={ST.navNote}>Prices are estimates · Verify at source</span>
        ) : (
          <button type="button" className="rx-btn" style={ST.navCta} onClick={focusSearch}>
            Search a medication
          </button>
        )}
      </div>
    </nav>
  )

  const PersonalNote = () => (
    <section style={ST.note}>
      <h2 style={ST.noteHeading}>
        A small tool for a big problem.
        <br />
        <span style={{ color: T.accent }}>Finding the real price of your medication.</span>
      </h2>
      <div style={ST.bylineBlock}>
        {AUTHOR.avatar ? (
          <img src={AUTHOR.avatar} alt={AUTHOR.name} style={ST.avatarImg} />
        ) : (
          <div style={ST.avatarPlaceholder}>
            <span style={ST.avatarPlaceholderText}>photo</span>
          </div>
        )}
        <div style={{ textAlign: "left" }}>
          <div style={ST.bylineName}>{AUTHOR.name}</div>
          <a href={LINKS.writing} target="_blank" rel="noopener noreferrer" className="accent-link">
            Read my writing on Substack →
          </a>
        </div>
      </div>
    </section>
  )

  const Footer = () => (
    <footer style={ST.footer}>
      <div style={ST.footerTop}>
        <div style={ST.footerBrand}>
          <div style={ST.footerMark}>Rx</div>
          <span style={ST.footerWordmark}>EaseRX</span>
        </div>
        <div style={ST.footerLinks}>
          <a href={LINKS.writing} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: 13 }}>
            Writing
          </a>
          <a href="/" className="nav-link" style={{ fontSize: 13 }}>
            Browse medications
          </a>
        </div>
      </div>
      <p style={ST.legal}>
        EaseRX is a reference tool only. Prices are estimates and may vary. Canadian and
        international pharmacies shown are verified via PharmacyChecker. Importing medication for
        personal use may be legal under FDA enforcement discretion — consult your physician. Not
        affiliated with any pharmacy or pricing service.
      </p>
    </footer>
  )

  /* ---------------- HOME ---------------- */

  if (page === "home") {
    return (
      <>
        <Head>
          <title>EaseRX — The real price of your medication</title>
          <meta
            name="description"
            content="Compare cash prices across US pharmacies, Canadian pharmacies, and verified international sources."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="color-scheme" content="dark" />
          <meta name="theme-color" content="#0F141B" />
          {fontLinks}
          <style>{globalStyles}</style>
        </Head>

        <div style={ST.page}>
          <Nav />

          {/* Hero */}
          <header style={ST.hero}>
            <div style={ST.eyebrow}>
              <span style={ST.eyebrowDot} />
              Prices last verified July 2026 · Not medical advice
            </div>

            <h1 style={ST.h1}>
              The real price of your medication.
              <br />
              <span style={{ color: T.accent }}>Finally, in one place.</span>
            </h1>

            <p style={ST.subhead}>
              Compare cash prices across US pharmacies, Canadian pharmacies, and verified
              international sources — GoodRx and Cost Plus Drugs included.
            </p>

            {/* Search */}
            <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
              <div className="rx-searchbar">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flex: "none" }} aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke={T.inputIcon} strokeWidth="2" />
                  <path d="M20 20l-3.5-3.5" stroke={T.inputIcon} strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  ref={inputRef}
                  className="rx-input"
                  placeholder="Search a medication — Ozempic, Metformin, Advair…"
                  aria-label="Search a medication"
                  value={query}
                  onChange={e => { setQuery(e.target.value); setSelectedDrug(null) }}
                  onKeyDown={e => { if (e.key === "Enter" && selectedDrug) handleSearch() }}
                />
                <input
                  className="rx-zip"
                  placeholder="ZIP"
                  aria-label="ZIP code — localizes GoodRx pricing"
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                  maxLength={5}
                />
                <button className="rx-btn" onClick={handleSearch} disabled={!selectedDrug}>
                  Compare
                </button>
              </div>

              {suggestions.length > 0 && (
                <div style={ST.suggestBox}>
                  {suggestions.map(name => (
                    <div key={name} className="suggest-item" onClick={() => handleSelect(name)}>
                      <div>
                        <span style={{ fontWeight: 600, color: T.text }}>{name}</span>
                        <span style={{ fontSize: 13, color: T.muted, marginLeft: 8 }}>
                          {DRUGS[name].generic}
                        </span>
                      </div>
                      <span
                        style={{
                          ...ST.catTag,
                          background: CATEGORY_BG[DRUGS[name].category],
                          color: CATEGORY_COLORS[DRUGS[name].category],
                        }}
                      >
                        {DRUGS[name].category}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {selectedDrug && drug ? (
                <div style={ST.selectRow}>
                  <select style={{ flex: 1 }} value={selectedStrength} onChange={e => setSelectedStrength(e.target.value)} aria-label="Strength">
                    {drug.strengths.map(s => <option key={s}>{s}</option>)}
                  </select>
                  <select style={{ flex: 1 }} value={selectedQty} onChange={e => setSelectedQty(e.target.value)} aria-label="Quantity">
                    {drug.quantities.map(q => <option key={q}>{q}</option>)}
                  </select>
                </div>
              ) : (
                <div style={ST.hintRow}>Start typing, then pick a medication from the list.</div>
              )}
            </div>

            {/* Popular chips */}
            <div style={ST.chipRow}>
              <span style={ST.chipLabel}>Popular:</span>
              {POPULAR.filter(n => DRUGS[n]).map(name => (
                <button key={name} type="button" className="category-pill" onClick={() => openDrug(name)}>
                  {name}
                </button>
              ))}
            </div>
          </header>

          {/* Browse — fills the slot where the design had a screenshot placeholder */}
          <section id="browse" style={ST.browse}>
            <h2 style={ST.browseHeading}>Browse by category</h2>
            <div style={ST.pillRow}>
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`category-pill${activeCategory === c ? " active" : ""}`}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div style={ST.grid}>
              {filteredDrugs.map(name => (
                <div key={name} className="drug-card" onClick={() => openDrug(name)}>
                  <div>
                    <div style={{ fontWeight: 600, color: T.text92, fontSize: 15 }}>{name}</div>
                    <div style={{ fontSize: 13, color: T.muted, marginTop: 2 }}>
                      {DRUGS[name].generic}
                    </div>
                  </div>
                  <span
                    style={{
                      ...ST.catTag,
                      background: CATEGORY_BG[DRUGS[name].category],
                      color: CATEGORY_COLORS[DRUGS[name].category],
                    }}
                  >
                    {DRUGS[name].category}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <PersonalNote />

          {/* CTA — focuses the search, doesn't navigate */}
          <section style={ST.ctaWrap}>
            <div style={ST.ctaPanel}>
              <div style={ST.ctaHeading}>Check your medication&apos;s real price.</div>
              <div style={ST.ctaSub}>No login. No upsell. Just the comparable price.</div>
              <button type="button" className="rx-btn" style={ST.ctaBtn} onClick={focusSearch}>
                Search a medication →
              </button>
            </div>
          </section>

          <Footer />
        </div>
      </>
    )
  }

  /* ---------------- RESULTS ---------------- */

  if (page === "results" && drug) {
    const cashSources = SOURCES_CONFIG.filter(s => s.type === "cash")
    const intlSources = SOURCES_CONFIG.filter(s => s.type === "international")

    const pricedSources = [...cashSources, ...intlSources]
      .map(src => {
        const info = drug.sources[src.key]
        if (!info) return null
        const value = parsePrice(info.price)
        if (value === null) return null
        return { key: src.key, label: src.label, type: src.type, value }
      })
      .filter(Boolean)

    const lowest = pricedSources.length > 0
      ? pricedSources.reduce((min, s) => (s.value < min.value ? s : min), pricedSources[0])
      : null
    const cashPriced = pricedSources.filter(s => s.type === "cash")
    const highestUS = cashPriced.length > 0
      ? cashPriced.reduce((max, s) => (s.value > max.value ? s : max), cashPriced[0])
      : null

    return (
      <>
        <Head>
          <title>{selectedDrug} prices — EaseRX</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="color-scheme" content="dark" />
          <meta name="theme-color" content="#0F141B" />
          {fontLinks}
          <style>{globalStyles}</style>
        </Head>

        <div style={ST.page}>
          <Nav withBack />

          <main style={ST.main}>
            {/* Drug header */}
            <div style={ST.drugHead}>
              <div>
                <span style={{ ...ST.eyebrowLabel, color: CATEGORY_COLORS[drug.category] }}>
                  {drug.category}
                </span>
                <h1 style={ST.drugTitle}>{selectedDrug}</h1>
                <p style={ST.drugMeta}>
                  Generic: {drug.generic} · {selectedStrength} · {selectedQty}
                </p>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <select value={selectedStrength} onChange={e => setSelectedStrength(e.target.value)} aria-label="Strength">
                  {drug.strengths.map(s => <option key={s}>{s}</option>)}
                </select>
                <select value={selectedQty} onChange={e => setSelectedQty(e.target.value)} aria-label="Quantity">
                  {drug.quantities.map(q => <option key={q}>{q}</option>)}
                </select>
              </div>
            </div>

            {/* Research */}
            {drug.research && (
              <div style={ST.panel}>
                <details>
                  <summary className="research-summary">
                    About this medication &amp; research sources ↓
                  </summary>
                  <div style={{ paddingTop: 14 }}>
                    <p style={{ fontSize: 14, color: T.text80, lineHeight: 1.7, marginBottom: 14 }}>
                      {drug.research.summary}
                    </p>
                    {drug.research.links && drug.research.links.length > 0 && (
                      <div>
                        <div style={ST.microLabel}>References</div>
                        <ul style={{ paddingLeft: 18, listStyle: "disc", color: T.muted }}>
                          {drug.research.links.map(link => (
                            <li key={link.url} style={{ marginBottom: 4 }}>
                              <a href={link.url} target="_blank" rel="noopener noreferrer" className="research-link">
                                {link.label} ↗
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p style={{ fontSize: 11, color: T.muted58, marginTop: 14, lineHeight: 1.6 }}>
                      Educational summary only. EaseRX is not affiliated with NIH, FDA, or any cited
                      source. Always consult your physician before changing medications.
                    </p>
                  </div>
                </details>
              </div>
            )}

            {/* Tabs */}
            <div style={ST.tabs}>
              <button
                className={`tab-btn${resultTab === "cash" ? " active" : ""}`}
                onClick={() => setResultTab("cash")}
              >
                Cash / No insurance
              </button>
              <button
                className={`tab-btn${resultTab === "insurance" ? " active" : ""}`}
                onClick={() => setResultTab("insurance")}
              >
                Insurance methods
              </button>
            </div>

            {resultTab === "cash" && (
              <div>
                {pricedSources.length >= 2 && highestUS && lowest && highestUS.value > lowest.value && (
                  <div style={ST.savings}>
                    <span style={{ fontSize: 15, color: T.text88, lineHeight: 1.7 }}>
                      Lowest price found:{" "}
                      <strong style={ST.savingsNum}>${Math.round(lowest.value)}</strong> at{" "}
                      {lowest.label} — save{" "}
                      <strong style={ST.savingsNum}>
                        ${Math.round(highestUS.value - lowest.value)}
                      </strong>{" "}
                      ({Math.round((1 - lowest.value / highestUS.value) * 100)}%) vs the highest US
                      cash price.
                    </span>
                  </div>
                )}

                <section style={{ marginBottom: 36 }}>
                  <h2 style={ST.sectionHeading}>🇺🇸 US cash-pay sources</h2>
                  <p style={ST.sectionSub}>
                    All legal, licensed US pharmacies and discount programs
                  </p>
                  {cashSources.map(src => {
                    const info = drug.sources[src.key]
                    if (!info) return null
                    const url = src.key === "goodrx" ? buildGoodRxUrl(selectedDrug, zip) : info.url
                    const unpriced = info.price === "N/A" || info.price === "Not listed"
                    return (
                      <div key={src.key} className="price-card">
                        <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
                          <span style={{ fontSize: 22 }}>{src.flag}</span>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                              <div style={{ fontWeight: 600, color: T.text92, fontSize: 15 }}>
                                {src.label}
                              </div>
                              {lowest && lowest.key === src.key && (
                                <span style={ST.lowestBadge}>Lowest price</span>
                              )}
                            </div>
                            {src.key === "goodrx" && zip && (
                              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
                                Localized for ZIP {zip}
                              </div>
                            )}
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                          <span style={{ ...ST.price, color: unpriced ? T.muted60 : T.text }}>
                            {info.price}
                          </span>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="go-btn">
                            View price →
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </section>

                <section style={{ marginBottom: 36 }}>
                  <h2 style={ST.sectionHeading}>🇨🇦 Canadian &amp; international sources</h2>
                  <p style={ST.sectionSub}>
                    Often 50–80% lower. Personal-use imports are generally allowed under FDA
                    enforcement discretion.
                  </p>
                  <p style={{ ...ST.sectionSub, color: T.muted58, marginTop: -10 }}>
                    PharmacyChecker verifies international pharmacies meet safety standards.
                  </p>
                  {intlSources.map(src => {
                    const info = drug.sources[src.key]
                    if (!info) return null
                    return (
                      <div
                        key={src.key}
                        className="price-card"
                        style={{ borderLeft: `3px solid ${T.accent}` }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
                          <span style={{ fontSize: 22 }}>{src.flag}</span>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                              <div style={{ fontWeight: 600, color: T.text92, fontSize: 15 }}>
                                {src.label}
                              </div>
                              {lowest && lowest.key === src.key && (
                                <span style={ST.lowestBadge}>Lowest price</span>
                              )}
                            </div>
                            <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
                              International / Canadian
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                          <span style={{ ...ST.price, color: T.accent }}>{info.price}</span>
                          <a href={info.url} target="_blank" rel="noopener noreferrer" className="go-btn">
                            View price →
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </section>

                <div style={ST.manufacturer}>
                  <div style={ST.microLabel}>Manufacturer program</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: T.text92, fontSize: 15 }}>
                        {drug.sources.manufacturer.name}
                      </div>
                      <div style={{ fontSize: 14, color: T.accent, marginTop: 2 }}>
                        {drug.sources.manufacturer.savings}
                      </div>
                    </div>
                    <a
                      href={drug.sources.manufacturer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="go-btn"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            )}

            {resultTab === "insurance" && (
              <div>
                {[
                  {
                    title: "GoodRx with insurance",
                    note: drug.insurance.goodrxInsurance.note,
                    extra: "GoodRx can check your specific plan and show your co-pay.",
                    url: drug.insurance.goodrxInsurance.url,
                    cta: "Check your insurance on GoodRx →",
                  },
                  {
                    title: "Medicare Part D",
                    note: drug.insurance.medicare.covered,
                    extra: "",
                    url: drug.insurance.medicare.url,
                    cta: "Check Medicare coverage →",
                  },
                ].map(item => (
                  <div key={item.title} style={ST.panel}>
                    <h3 style={ST.panelHeading}>{item.title}</h3>
                    <p style={ST.panelBody}>{item.note}</p>
                    {item.extra && <p style={ST.panelBody}>{item.extra}</p>}
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="go-btn">
                      {item.cta}
                    </a>
                  </div>
                ))}

                <div style={ST.panel}>
                  <h3 style={ST.panelHeading}>Manufacturer savings programs</h3>
                  <p style={{ ...ST.panelBody, marginBottom: 4 }}>
                    {drug.sources.manufacturer.name}
                  </p>
                  <p style={{ ...ST.panelBody, color: T.accent }}>
                    {drug.sources.manufacturer.savings}
                  </p>
                  <a
                    href={drug.sources.manufacturer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="go-btn"
                  >
                    Apply for savings →
                  </a>
                </div>

                <div style={ST.tip}>
                  <p style={{ fontSize: 13, color: T.text80, lineHeight: 1.7 }}>
                    <strong style={{ color: T.text }}>Tip:</strong> Always compare your insurance
                    co-pay to the cash prices in the Cash tab. Sometimes Cost Plus Drugs or Canadian
                    sources are cheaper than your co-pay.
                  </p>
                </div>
              </div>
            )}
          </main>

          <PersonalNote />
          <Footer />
        </div>
      </>
    )
  }

  return null
}

/* ---------------- Styles (values from the design export) ---------------- */

const ST = {
  page: { background: T.bg, color: T.text, minHeight: "100vh", fontFamily: T.body },

  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 6vw",
    maxWidth: 1280,
    margin: "0 auto",
    flexWrap: "wrap",
    gap: 16,
  },
  navLeft: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" },
  navRight: { display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" },
  navCta: { fontSize: 14, padding: "10px 20px", borderRadius: 9 },
  navNote: { fontSize: 13, color: T.muted },
  logoMark: {
    width: 30,
    height: 30,
    borderRadius: 8,
    background: T.accent,
    color: T.onAccent,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: `700 15px ${T.display}`,
    flex: "none",
  },
  wordmark: { font: `700 17px ${T.display}` },
  byline: {
    font: `400 13px ${T.body}`,
    color: T.muted60,
    letterSpacing: ".01em",
    paddingLeft: 12,
    borderLeft: `1px solid ${T.borderNav}`,
    whiteSpace: "nowrap",
  },

  hero: { maxWidth: 920, margin: "0 auto", padding: "76px 6vw 40px", textAlign: "center" },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    font: `500 12.5px ${T.body}`,
    letterSpacing: ".03em",
    color: T.text78,
    background: T.surface,
    border: `1px solid ${T.border}`,
    padding: "7px 15px",
    borderRadius: 20,
    marginBottom: 30,
  },
  eyebrowDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: T.accent,
    display: "inline-block",
  },
  h1: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: "clamp(34px, 6.2vw, 60px)", // design: 60px
    lineHeight: 1.04,
    letterSpacing: "-0.025em",
    margin: "0 0 22px",
  },
  subhead: { fontSize: 18, lineHeight: 1.6, color: T.text80, maxWidth: 560, margin: "0 auto 40px" },

  suggestBox: {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    right: 0,
    background: T.surface,
    border: `1px solid ${T.borderLight}`,
    borderRadius: 12,
    overflow: "hidden",
    zIndex: 100,
    boxShadow: "0 20px 50px -12px oklch(0% 0 0 / .6)",
    textAlign: "left",
  },
  catTag: {
    fontSize: 11,
    fontWeight: 600,
    padding: "4px 11px",
    borderRadius: 20,
    whiteSpace: "nowrap",
    fontFamily: T.body,
  },
  selectRow: { display: "flex", gap: 12, marginTop: 14 },
  hintRow: { fontSize: 13, color: T.muted60, marginTop: 12 },

  chipRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    maxWidth: 660,
    margin: "26px auto 0",
  },
  chipLabel: { font: `500 13px ${T.body}`, color: T.muted, alignSelf: "center", marginRight: 2 },

  browse: { maxWidth: 1080, margin: "48px auto 0", padding: "0 6vw" },
  browseHeading: {
    fontFamily: T.display,
    fontWeight: 600,
    fontSize: 24,
    letterSpacing: "-0.015em",
    color: T.text94,
    marginBottom: 16,
  },
  pillRow: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 },

  main: { maxWidth: 880, margin: "0 auto", padding: "24px 6vw 0" },
  drugHead: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 32,
  },
  eyebrowLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    fontFamily: T.body,
  },
  drugTitle: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: "clamp(30px, 5vw, 44px)",
    lineHeight: 1.05,
    letterSpacing: "-0.025em",
    color: T.text,
    margin: "6px 0 6px",
  },
  drugMeta: { fontSize: 16, color: T.text80 },

  panel: {
    background: T.surface,
    border: `1px solid ${T.borderLight}`,
    borderRadius: 14,
    padding: "22px 26px",
    marginBottom: 16,
  },
  panelHeading: {
    fontFamily: T.display,
    fontWeight: 600,
    fontSize: 18,
    color: T.text94,
    marginBottom: 8,
  },
  panelBody: { fontSize: 14, color: T.text80, lineHeight: 1.7, marginBottom: 16 },
  microLabel: {
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: ".08em",
    color: T.muted60,
    marginBottom: 8,
    fontFamily: T.body,
  },

  tabs: {
    borderBottom: `1px solid ${T.border}`,
    marginBottom: 28,
    marginTop: 12,
    display: "flex",
    flexWrap: "wrap",
  },

  savings: {
    background: T.accentTint,
    border: `1px solid ${T.accent}`,
    borderRadius: 14,
    padding: "16px 24px",
    marginBottom: 24,
  },
  savingsNum: { fontFamily: T.display, fontWeight: 700, color: T.accent, fontSize: 18 },

  sectionHeading: {
    fontFamily: T.display,
    fontWeight: 600,
    fontSize: 20,
    color: T.text94,
    marginBottom: 4,
    letterSpacing: "-0.01em",
  },
  sectionSub: { fontSize: 13, color: T.muted, marginBottom: 16, lineHeight: 1.6 },

  lowestBadge: {
    background: T.accent,
    color: T.onAccent,
    fontSize: 11,
    fontWeight: 700,
    padding: "3px 10px",
    borderRadius: 20,
    fontFamily: T.body,
    whiteSpace: "nowrap",
  },
  price: { fontFamily: T.display, fontSize: 22, fontWeight: 700, whiteSpace: "nowrap" },

  manufacturer: {
    background: T.accentTint,
    border: `1px solid ${T.accent}`,
    borderRadius: 14,
    padding: "20px 24px",
  },
  tip: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: 14,
    padding: "20px 24px",
  },

  note: { maxWidth: 820, margin: "0 auto", padding: "88px 6vw 40px", textAlign: "center" },
  noteHeading: {
    fontFamily: T.display,
    fontWeight: 600,
    fontSize: "clamp(24px, 4vw, 34px)", // design: 34px
    lineHeight: 1.25,
    letterSpacing: "-0.015em",
    color: T.text94,
    margin: "0 0 22px",
  },
  bylineBlock: { display: "flex", alignItems: "center", justifyContent: "center", gap: 12 },
  avatarImg: { width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flex: "none" },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background:
      "repeating-linear-gradient(135deg, oklch(30% 0.015 255), oklch(30% 0.015 255) 5px, oklch(26% 0.015 255) 5px, oklch(26% 0.015 255) 10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none",
  },
  avatarPlaceholderText: { font: "7px ui-monospace, monospace", color: T.muted60 },
  bylineName: { font: `600 14px ${T.body}`, color: T.text92, marginBottom: 2 },

  ctaWrap: { maxWidth: 1080, margin: "20px auto 0", padding: "0 6vw" },
  ctaPanel: {
    background: T.surface,
    border: `1px solid ${T.borderLight}`,
    borderRadius: 18,
    padding: "52px 6vw",
    textAlign: "center",
  },
  ctaHeading: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: "clamp(22px, 3.5vw, 30px)", // design: 30px
    letterSpacing: "-0.02em",
    marginBottom: 12,
  },
  ctaSub: { fontSize: 16, color: T.text78, marginBottom: 28 },
  ctaBtn: { padding: "15px 34px", fontSize: 16, borderRadius: 11 },

  footer: {
    maxWidth: 1080,
    margin: "56px auto 0",
    padding: "32px 6vw 48px",
    borderTop: `1px solid ${T.borderFooter}`,
  },
  footerTop: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 20,
  },
  footerBrand: { display: "flex", alignItems: "center", gap: 9 },
  footerMark: {
    width: 24,
    height: 24,
    borderRadius: 6,
    background: T.accent,
    color: T.onAccent,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: `700 12px ${T.display}`,
  },
  footerWordmark: { font: `700 14px ${T.display}`, color: T.text90 },
  footerLinks: { display: "flex", gap: 26, flexWrap: "wrap" },
  legal: { fontSize: 12, lineHeight: 1.6, color: T.muted58, maxWidth: 820, margin: 0 },
}
