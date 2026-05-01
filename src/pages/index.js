"use client"
import { useState, useRef, useEffect } from "react"
import Head from "next/head"
import { DRUGS, CATEGORIES, SOURCES_CONFIG } from "../data/drugs"

const CATEGORY_COLORS = {
  "GLP-1": "#185FA5",
  "Inhaler": "#0F6E56",
  "ED": "#993C1D",
  "HBP": "#533AB7",
  "Cholesterol": "#B7791F",
  "Diabetes": "#0E7C8C",
  "Thyroid": "#7C3F3F",
  "Mental Health": "#6B4FB7",
  "GI": "#9C6B1F",
  "Pain": "#B73A6E",
  "Blood Thinner": "#1F5F3A",
}
const CATEGORY_BG = {
  "GLP-1": "#E6F1FB",
  "Inhaler": "#E1F5EE",
  "ED": "#FAECE7",
  "HBP": "#EEEDFE",
  "Cholesterol": "#FBF3E2",
  "Diabetes": "#E2F2F4",
  "Thyroid": "#F5E8E8",
  "Mental Health": "#EFEAFB",
  "GI": "#F8EFE0",
  "Pain": "#FBE7EE",
  "Blood Thinner": "#E2F0E8",
}

const globalStyles = `
  :root { color-scheme: light only; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: #EEF4FB !important; color: #1A1A18 !important; -webkit-font-smoothing: antialiased; }
  .rx-input { font-family: 'Source Sans 3', sans-serif; font-size: 18px; width: 100%; padding: 18px 24px; border: 2px solid #C5D8EE; border-radius: 12px; background: white !important; outline: none; color: #1A1A18 !important; transition: border-color 0.2s; }
  .rx-input:focus { border-color: #185FA5; }
  .rx-input::placeholder { color: #888780; }
  .rx-btn { font-family: 'Source Sans 3', sans-serif; font-size: 16px; font-weight: 600; background: #185FA5 !important; color: white !important; border: none; border-radius: 10px; padding: 16px 36px; cursor: pointer; transition: background 0.2s; width: 100%; }
  .rx-btn:hover { background: #0C447C !important; }
  .rx-btn:disabled { background: #B4B2A9 !important; cursor: not-allowed; }
  .suggest-item { font-family: 'Source Sans 3', sans-serif; padding: 12px 20px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.15s; border-bottom: 1px solid #E8F0F8; background: white !important; color: #1A1A18 !important; }
  .suggest-item:hover { background: #EEF4FB !important; }
  .category-pill { font-family: 'Source Sans 3', sans-serif; font-size: 13px; font-weight: 500; padding: 6px 16px; border-radius: 20px; cursor: pointer; border: 1.5px solid #C5D8EE; background: white !important; transition: all 0.2s; color: #3A6EA5 !important; }
  .category-pill.active { background: #185FA5 !important; border-color: #185FA5; color: white !important; }
  .drug-card { background: white !important; border-radius: 12px; border: 1px solid #D5E5F5; padding: 16px 20px; cursor: pointer; transition: all 0.2s; display: flex; justify-content: space-between; align-items: center; color: #1A1A18 !important; }
  .drug-card:hover { border-color: #185FA5; box-shadow: 0 2px 12px rgba(24,95,165,0.12); }
  .go-btn { font-family: 'Source Sans 3', sans-serif; font-size: 13px; font-weight: 600; padding: 8px 18px; border-radius: 8px; border: 1.5px solid #185FA5; color: #185FA5 !important; background: transparent !important; cursor: pointer; text-decoration: none; display: inline-block; transition: all 0.2s; }
  .go-btn:hover { background: #185FA5 !important; color: white !important; }
  .tab-btn { font-family: 'Source Sans 3', sans-serif; font-size: 15px; font-weight: 500; padding: 12px 28px; border: none; background: transparent !important; cursor: pointer; color: #6A8CAD !important; border-bottom: 2px solid transparent; transition: all 0.2s; }
  .tab-btn.active { color: #185FA5 !important; border-bottom-color: #185FA5; font-weight: 600; }
  .price-card { background: white !important; border-radius: 14px; border: 1px solid #D5E5F5; padding: 20px 24px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; }
  .back-btn { font-family: 'Source Sans 3', sans-serif; font-size: 14px; color: #185FA5 !important; background: none !important; border: none; cursor: pointer; padding: 0; }
  .research-summary { cursor: pointer; font-family: 'Source Sans 3', sans-serif; font-size: 14px; font-weight: 600; color: #185FA5; padding: 4px 0; user-select: none; }
  .research-summary:hover { color: #0C447C; }
  .research-link { color: #185FA5 !important; text-decoration: none; font-family: 'Source Sans 3', sans-serif; font-size: 13px; line-height: 1.7; }
  .research-link:hover { text-decoration: underline; }
  select { background: white !important; color: #1A1A18 !important; }
`

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

  const drugNames = Object.keys(DRUGS)

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

  const handleSearch = () => { if (selectedDrug) setPage("results") }

  const filteredDrugs = activeCategory === "All"
    ? drugNames
    : drugNames.filter(n => DRUGS[n].category === activeCategory)

  const drug = selectedDrug ? DRUGS[selectedDrug] : null

  const buildGoodRxUrl = (name, zip) => {
    const base = DRUGS[name]?.sources.goodrx.url || "https://www.goodrx.com"
    return zip ? `${base}?zip=${zip}` : base
  }

  const pageStyle = { fontFamily: "Georgia, serif", minHeight: "100vh", background: "#EEF4FB" }
  const headerStyle = { padding: "24px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #D5E5F5", background: "white" }

  if (page === "home") {
    return (
      <>
        <Head>
          <title>EaseRX - Medication Price Comparison</title>
          <meta name="color-scheme" content="light" />
          <meta name="theme-color" content="#EEF4FB" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet" />
          <style>{globalStyles}</style>
        </Head>

        <div style={pageStyle}>
          <header style={headerStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, background: "#185FA5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 18 }}>Rx</span>
              </div>
              <span style={{ fontFamily: "Playfair Display, serif", fontSize: 22, fontWeight: 700, color: "#1A1A18" }}>EaseRX</span>
            </div>
            <span style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, color: "#6A8CAD" }}>Prices last verified April 2026 · Not medical advice</span>
          </header>

          <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 48px" }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: "#185FA5", textTransform: "uppercase" }}>Medication Price Comparison</span>
            </div>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 52, fontWeight: 700, color: "#1A1A18", lineHeight: 1.12, marginBottom: 20 }}>
              Find the real price<br />of your medication.
            </h1>
            <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: "#3A5A7A", lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
              Compare cash prices across US pharmacies, Canadian pharmacies, and international sources — including GoodRx, Cost Plus Drugs, and PharmacyChecker verified sources.
            </p>

            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1, position: "relative" }}>
                  <input
                    ref={inputRef}
                    className="rx-input"
                    placeholder="Search medication (e.g. Ozempic, Wegovy, Advair, Metformin...)"
                    value={query}
                    onChange={e => { setQuery(e.target.value); setSelectedDrug(null) }}
                    onKeyDown={e => { if (e.key === "Enter" && selectedDrug) handleSearch() }}
                  />
                  {suggestions.length > 0 && (
                    <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: "white", border: "1.5px solid #C5D8EE", borderRadius: 12, overflow: "hidden", zIndex: 100, boxShadow: "0 8px 24px rgba(24,95,165,0.12)" }}>
                      {suggestions.map(name => (
                        <div key={name} className="suggest-item" onClick={() => handleSelect(name)}>
                          <div>
                            <span style={{ fontFamily: "Source Sans 3, sans-serif", fontWeight: 500, color: "#1A1A18" }}>{name}</span>
                            <span style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, color: "#6A8CAD", marginLeft: 8 }}>{DRUGS[name].generic}</span>
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: CATEGORY_BG[DRUGS[name].category], color: CATEGORY_COLORS[DRUGS[name].category] }}>
                            {DRUGS[name].category}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input className="rx-input" style={{ width: 140, flex: "none" }} placeholder="ZIP code" value={zip} onChange={e => setZip(e.target.value)} maxLength={5} />
              </div>

              {selectedDrug && drug && (
                <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                  <select style={{ flex: 1, fontFamily: "Source Sans 3, sans-serif", fontSize: 15, padding: "12px 16px", borderRadius: 10, border: "1.5px solid #C5D8EE", background: "white", color: "#1A1A18" }} value={selectedStrength} onChange={e => setSelectedStrength(e.target.value)}>
                    {drug.strengths.map(s => <option key={s}>{s}</option>)}
                  </select>
                  <select style={{ flex: 1, fontFamily: "Source Sans 3, sans-serif", fontSize: 15, padding: "12px 16px", borderRadius: 10, border: "1.5px solid #C5D8EE", background: "white", color: "#1A1A18" }} value={selectedQty} onChange={e => setSelectedQty(e.target.value)}>
                    {drug.quantities.map(q => <option key={q}>{q}</option>)}
                  </select>
                </div>
              )}

              <button className="rx-btn" onClick={handleSearch} disabled={!selectedDrug}>
                {selectedDrug ? `Compare prices for ${selectedDrug}` : "Select a medication above to compare"}
              </button>
            </div>
          </section>

          <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
            <div style={{ borderTop: "1px solid #D5E5F5", paddingTop: 40, marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, fontWeight: 600, color: "#1A1A18", marginBottom: 16 }}>Browse by category</h2>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {CATEGORIES.map(c => (
                  <button key={c} className={`category-pill${activeCategory === c ? " active" : ""}`} onClick={() => setActiveCategory(c)}>{c}</button>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {filteredDrugs.map(name => (
                <div key={name} className="drug-card" onClick={() => { handleSelect(name); setPage("results") }}>
                  <div>
                    <div style={{ fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#1A1A18", fontSize: 15 }}>{name}</div>
                    <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, color: "#6A8CAD", marginTop: 2 }}>{DRUGS[name].generic}</div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20, background: CATEGORY_BG[DRUGS[name].category], color: CATEGORY_COLORS[DRUGS[name].category], whiteSpace: "nowrap" }}>
                    {DRUGS[name].category}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <footer style={{ borderTop: "1px solid #D5E5F5", padding: "24px 40px", background: "white", textAlign: "center" }}>
            <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, color: "#6A8CAD", lineHeight: 1.8 }}>
              EaseRX is a reference tool only. Prices are estimates and may vary. Canadian and international pharmacies shown are verified via PharmacyChecker.
              Importing medication for personal use may be legal under FDA enforcement discretion — consult your physician. Not affiliated with any pharmacy or pricing service.
            </p>
          </footer>
        </div>
      </>
    )
  }

  if (page === "results" && drug) {
    const cashSources = SOURCES_CONFIG.filter(s => s.type === "cash")
    const intlSources = SOURCES_CONFIG.filter(s => s.type === "international")

    return (
      <>
        <Head>
          <title>{selectedDrug} Prices - EaseRX</title>
          <meta name="color-scheme" content="light" />
          <meta name="theme-color" content="#EEF4FB" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet" />
          <style>{globalStyles}</style>
        </Head>

        <div style={pageStyle}>
          <header style={headerStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <button className="back-btn" onClick={() => setPage("home")}>← Back</button>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, background: "#185FA5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "white", fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 16 }}>Rx</span>
                </div>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 700, color: "#1A1A18" }}>EaseRX</span>
              </div>
            </div>
            <span style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, color: "#6A8CAD" }}>Prices are estimates · Verify at source</span>
          </header>

          <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px" }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: CATEGORY_COLORS[drug.category], fontFamily: "Source Sans 3, sans-serif" }}>{drug.category}</span>
                  <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 40, fontWeight: 700, color: "#1A1A18", lineHeight: 1.1, margin: "6px 0 4px" }}>{selectedDrug}</h1>
                  <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 16, color: "#3A5A7A" }}>Generic: {drug.generic} · {selectedStrength} · {selectedQty}</p>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <select style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, padding: "8px 14px", borderRadius: 8, border: "1.5px solid #C5D8EE", background: "white", color: "#1A1A18" }} value={selectedStrength} onChange={e => setSelectedStrength(e.target.value)}>
                    {drug.strengths.map(s => <option key={s}>{s}</option>)}
                  </select>
                  <select style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, padding: "8px 14px", borderRadius: 8, border: "1.5px solid #C5D8EE", background: "white", color: "#1A1A18" }} value={selectedQty} onChange={e => setSelectedQty(e.target.value)}>
                    {drug.quantities.map(q => <option key={q}>{q}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {drug.research && (
              <div style={{ background: "white", border: "1px solid #D5E5F5", borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
                <details>
                  <summary className="research-summary">About this medication & research sources ↓</summary>
                  <div style={{ paddingTop: 14 }}>
                    <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: "#3A5A7A", lineHeight: 1.7, marginBottom: 14 }}>
                      {drug.research.summary}
                    </p>
                    {drug.research.links && drug.research.links.length > 0 && (
                      <div>
                        <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6A8CAD", marginBottom: 8 }}>References</div>
                        <ul style={{ paddingLeft: 18, listStyle: "disc" }}>
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
                    <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 11, color: "#9AAEC0", marginTop: 14, lineHeight: 1.6 }}>
                      Educational summary only. EaseRX is not affiliated with NIH, FDA, or any cited source. Always consult your physician before changing medications.
                    </p>
                  </div>
                </details>
              </div>
            )}

            <div style={{ borderBottom: "1px solid #D5E5F5", marginBottom: 28, display: "flex" }}>
              <button className={`tab-btn${resultTab === "cash" ? " active" : ""}`} onClick={() => setResultTab("cash")}>Cash / No Insurance</button>
              <button className={`tab-btn${resultTab === "insurance" ? " active" : ""}`} onClick={() => setResultTab("insurance")}>Insurance Methods</button>
            </div>

            {resultTab === "cash" && (
              <div>
                <div style={{ marginBottom: 32 }}>
                  <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 600, color: "#1A1A18", marginBottom: 4 }}>🇺🇸 US Cash-Pay Sources</h2>
                  <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, color: "#6A8CAD", marginBottom: 16 }}>All legal, licensed US pharmacies and discount programs</p>
                  {cashSources.map(src => {
                    const info = drug.sources[src.key]
                    if (!info) return null
                    const url = src.key === "goodrx" ? buildGoodRxUrl(selectedDrug, zip) : info.url
                    return (
                      <div key={src.key} className="price-card">
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                          <span style={{ fontSize: 22 }}>{src.flag}</span>
                          <div>
                            <div style={{ fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#1A1A18", fontSize: 15 }}>{src.label}</div>
                            {src.key === "goodrx" && zip && <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, color: "#6A8CAD" }}>Localized for ZIP {zip}</div>}
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                          <span style={{ fontFamily: "Playfair Display, serif", fontSize: 22, fontWeight: 600, color: info.price === "N/A" || info.price === "Not listed" ? "#B4B2A9" : "#1A1A18" }}>{info.price}</span>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="go-btn">View price →</a>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div style={{ marginBottom: 32 }}>
                  <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 600, color: "#1A1A18", marginBottom: 4 }}>🇨🇦 Canadian & International Sources</h2>
                  <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, color: "#6A8CAD", marginBottom: 4 }}>Often 50–80% lower. Personal-use imports are generally allowed under FDA enforcement discretion.</p>
                  <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, color: "#9AAEC0", marginBottom: 16 }}>PharmacyChecker verifies international pharmacies meet safety standards.</p>
                  {intlSources.map(src => {
                    const info = drug.sources[src.key]
                    if (!info) return null
                    return (
                      <div key={src.key} className="price-card" style={{ borderLeft: "3px solid #0F6E56" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                          <span style={{ fontSize: 22 }}>{src.flag}</span>
                          <div>
                            <div style={{ fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#1A1A18", fontSize: 15 }}>{src.label}</div>
                            <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, color: "#0F6E56", fontWeight: 500 }}>International / Canadian</div>
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                          <span style={{ fontFamily: "Playfair Display, serif", fontSize: 22, fontWeight: 600, color: "#0F6E56" }}>{info.price}</span>
                          <a href={info.url} target="_blank" rel="noopener noreferrer" className="go-btn" style={{ borderColor: "#0F6E56", color: "#0F6E56" }}>View price →</a>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div style={{ background: "#FFF9EC", border: "1px solid #FAC775", borderRadius: 14, padding: "20px 24px" }}>
                  <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#854F0B", marginBottom: 6 }}>Manufacturer Program</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#1A1A18", fontSize: 15 }}>{drug.sources.manufacturer.name}</div>
                      <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: "#854F0B", marginTop: 2 }}>{drug.sources.manufacturer.savings}</div>
                    </div>
                    <a href={drug.sources.manufacturer.url} target="_blank" rel="noopener noreferrer" className="go-btn" style={{ borderColor: "#854F0B", color: "#854F0B" }}>Learn more →</a>
                  </div>
                </div>
              </div>
            )}

            {resultTab === "insurance" && (
              <div>
                {[
                  { title: "GoodRx with Insurance", note: drug.insurance.goodrxInsurance.note, extra: "GoodRx can check your specific plan and show your co-pay.", url: drug.insurance.goodrxInsurance.url, cta: "Check your insurance on GoodRx →" },
                  { title: "Medicare Part D", note: drug.insurance.medicare.covered, extra: "", url: drug.insurance.medicare.url, cta: "Check Medicare coverage →" },
                ].map(item => (
                  <div key={item.title} style={{ background: "white", border: "1px solid #D5E5F5", borderRadius: 14, padding: "24px 28px", marginBottom: 16 }}>
                    <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 18, fontWeight: 600, color: "#1A1A18", marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: "#3A5A7A", marginBottom: item.extra ? 8 : 16, lineHeight: 1.6 }}>{item.note}</p>
                    {item.extra && <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: "#3A5A7A", marginBottom: 16, lineHeight: 1.6 }}>{item.extra}</p>}
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="go-btn">{item.cta}</a>
                  </div>
                ))}
                <div style={{ background: "white", border: "1px solid #D5E5F5", borderRadius: 14, padding: "24px 28px", marginBottom: 16 }}>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 18, fontWeight: 600, color: "#1A1A18", marginBottom: 8 }}>Manufacturer Savings Programs</h3>
                  <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: "#3A5A7A", marginBottom: 4, lineHeight: 1.6 }}>{drug.sources.manufacturer.name}</p>
                  <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: "#185FA5", marginBottom: 16 }}>{drug.sources.manufacturer.savings}</p>
                  <a href={drug.sources.manufacturer.url} target="_blank" rel="noopener noreferrer" className="go-btn">Apply for savings →</a>
                </div>
                <div style={{ background: "#EEF4FB", border: "1px solid #C5D8EE", borderRadius: 14, padding: "20px 24px" }}>
                  <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, color: "#3A5A7A", lineHeight: 1.7 }}>
                    <strong>Tip:</strong> Always compare your insurance co-pay to the cash prices in the Cash tab. Sometimes Cost Plus Drugs or Canadian sources are cheaper than your co-pay.
                  </p>
                </div>
              </div>
            )}
          </main>

          <footer style={{ borderTop: "1px solid #D5E5F5", padding: "20px 40px", background: "white", textAlign: "center", marginTop: 40 }}>
            <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, color: "#6A8CAD" }}>
              Prices are reference estimates verified periodically. Always confirm at source before purchasing. Not medical or legal advice.
            </p>
          </footer>
        </div>
      </>
    )
  }

  return null
}
