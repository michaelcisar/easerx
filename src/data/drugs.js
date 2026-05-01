export const DRUGS = {
  // ============================================================
  // GLP-1 — High cash-pay spend, fastest growing category
  // ~6M Americans on GLP-1s, $1,300+/mo at retail without insurance.
  // Source: NIH/NLM clinical reviews and Annals of Internal Medicine (2024).
  // ============================================================
  "Ozempic": {
    generic: "Semaglutide",
    category: "GLP-1",
    strengths: ["0.25mg/dose", "0.5mg/dose", "1mg/dose", "2mg/dose"],
    quantities: ["1 pen (4 doses)", "3 pens"],
    research: {
      summary: "Semaglutide (Ozempic) is a GLP-1 receptor agonist FDA-approved for type 2 diabetes. NIH-published trials (SUSTAIN, STEP) show A1C reductions of ~1.5% and 12-15% body weight loss at 68 weeks. One of the highest cash-pay drugs in the US — listed price >$900/mo without insurance, but Canadian-licensed pharmacies sell the same drug for $250-$300/mo.",
      links: [
        { label: "NIH/NLM: Semaglutide overview (StatPearls)", url: "https://www.ncbi.nlm.nih.gov/books/NBK603723/" },
        { label: "NEJM: STEP 1 trial (Wilding et al, 2021)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" },
        { label: "FDA label", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/209637s003lbl.pdf" },
      ]
    },
    sources: {
      goodrx: { price: "$935", url: "https://www.goodrx.com/ozempic" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com/medications/" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$920", url: "https://www.blinkhealth.com/ozempic" },
      northwest: { price: "$299", url: "https://www.northwestpharmacy.com/product/ozempic" },
      canadaDrugs: { price: "$285", url: "https://www.canadadrugs.com/search?q=ozempic" },
      pharmacyChecker: { price: "from $249", url: "https://www.pharmacychecker.com/ozempic/" },
      manufacturer: { name: "Novo Nordisk Savings Card", url: "https://www.ozempic.com/savings-card.html", savings: "Up to $150/month" },
    },
    insurance: {
      medicare: { covered: "Part D - varies", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Check your plan", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Wegovy (Injection)": {
    generic: "Semaglutide",
    category: "GLP-1",
    strengths: ["0.25mg", "0.5mg", "1mg", "1.7mg", "2.4mg"],
    quantities: ["4 pens/month"],
    research: {
      summary: "Wegovy is high-dose semaglutide approved specifically for chronic weight management. The STEP-1 trial (NEJM, NIH-indexed) showed mean weight loss of 14.9% at 68 weeks vs 2.4% placebo. Frequently denied by insurance for weight-loss-only indication, making it one of the most price-sensitive cash-pay drugs.",
      links: [
        { label: "NIH/NLM: STEP 1 trial summary", url: "https://pubmed.ncbi.nlm.nih.gov/33567185/" },
        { label: "Novo Nordisk DTC ($499/mo cash)", url: "https://www.novocare.com/obesity/products/wegovy/wegovy-savings-offer.html" },
      ]
    },
    sources: {
      goodrx: { price: "$1,349", url: "https://www.goodrx.com/wegovy" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$1,299", url: "https://www.blinkhealth.com/wegovy" },
      northwest: { price: "$469", url: "https://www.northwestpharmacy.com/product/wegovy" },
      canadaDrugs: { price: "$445", url: "https://www.canadadrugs.com/search?q=wegovy" },
      pharmacyChecker: { price: "from $389", url: "https://www.pharmacychecker.com/wegovy/" },
      manufacturer: { name: "NovoCare Direct (cash)", url: "https://www.novocare.com/obesity/products/wegovy.html", savings: "$499/mo direct cash" },
    },
    insurance: {
      medicare: { covered: "Limited — only for CV risk reduction", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Prior auth usually required", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Wegovy Oral (Pill)": {
    generic: "Oral Semaglutide (high-dose)",
    category: "GLP-1",
    strengths: ["1.5mg", "4mg", "9mg", "14mg", "25mg"],
    quantities: ["30 tablets"],
    research: {
      summary: "FDA-approved December 2025; launched January 2026 as the first oral GLP-1 specifically for weight loss. This is a major inflection point — same active ingredient as Wegovy injection, but the pill removes the 'I have to inject myself' barrier that has limited adoption. Cash price launched at $149-199/mo for lower doses. Expected to dominate the new-starter GLP-1 market over the next 24 months.",
      links: [
        { label: "FDA approval announcement (Dec 2025)", url: "https://www.fda.gov/news-events/press-announcements" },
        { label: "NEJM: Oral semaglutide PIONEER trials", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1901118" },
        { label: "Managed Healthcare Executive: oral GLP-1 race", url: "https://www.managedhealthcareexecutive.com/view/glp-1-pills-for-weight-loss-the-race-is-on" },
      ]
    },
    sources: {
      goodrx: { price: "$199 (4mg) / $299 (higher)", url: "https://www.goodrx.com/wegovy" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "Check availability", url: "https://www.blinkhealth.com/" },
      northwest: { price: "Coming soon", url: "https://www.northwestpharmacy.com" },
      canadaDrugs: { price: "Coming soon", url: "https://www.canadadrugs.com" },
      pharmacyChecker: { price: "Coming soon", url: "https://www.pharmacychecker.com/" },
      manufacturer: { name: "NovoCare Direct (cash)", url: "https://www.novocare.com/obesity/products/wegovy.html", savings: "$149-199/mo direct cash for 1.5mg/4mg" },
    },
    insurance: {
      medicare: { covered: "Generally not covered for weight loss alone", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Coverage still rolling out", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Rybelsus": {
    generic: "Oral Semaglutide",
    category: "GLP-1",
    strengths: ["3mg", "7mg", "14mg"],
    quantities: ["30 tablets"],
    research: {
      summary: "First-ever oral GLP-1, FDA-approved 2019 for type 2 diabetes. Lower doses than Wegovy oral. Strict fasting requirement (take with ≤4oz water, wait 30 min) is a known adherence challenge per NIH-published reviews. Often used off-label for weight loss when injectables aren't tolerated.",
      links: [
        { label: "NIH/NLM: Oral semaglutide review", url: "https://pubmed.ncbi.nlm.nih.gov/32197148/" },
        { label: "FDA prescribing info", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/213051s018lbl.pdf" },
      ]
    },
    sources: {
      goodrx: { price: "$935", url: "https://www.goodrx.com/rybelsus" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$899", url: "https://www.blinkhealth.com/rybelsus" },
      northwest: { price: "$189", url: "https://www.northwestpharmacy.com/product/rybelsus" },
      canadaDrugs: { price: "$175", url: "https://www.canadadrugs.com/search?q=rybelsus" },
      pharmacyChecker: { price: "from $159", url: "https://www.pharmacychecker.com/rybelsus/" },
      manufacturer: { name: "Novo Nordisk Savings", url: "https://www.rybelsus.com/savings.html", savings: "Up to $200/month" },
    },
    insurance: {
      medicare: { covered: "Part D - varies", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Check your plan", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Mounjaro": {
    generic: "Tirzepatide",
    category: "GLP-1",
    strengths: ["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
    quantities: ["4 pens/month"],
    research: {
      summary: "Tirzepatide is a dual GIP/GLP-1 receptor agonist — a newer mechanism than Ozempic. NIH-published SURPASS trials show superior A1C and weight loss vs semaglutide. Approved for type 2 diabetes. Has rapidly become the highest-grossing diabetes drug.",
      links: [
        { label: "NIH/NLM: Tirzepatide overview", url: "https://www.ncbi.nlm.nih.gov/books/NBK585056/" },
        { label: "NEJM: SURPASS-2 head-to-head vs semaglutide", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519" },
      ]
    },
    sources: {
      goodrx: { price: "$1,023", url: "https://www.goodrx.com/mounjaro" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$989", url: "https://www.blinkhealth.com/mounjaro" },
      northwest: { price: "$379", url: "https://www.northwestpharmacy.com/product/mounjaro" },
      canadaDrugs: { price: "$359", url: "https://www.canadadrugs.com/search?q=mounjaro" },
      pharmacyChecker: { price: "from $319", url: "https://www.pharmacychecker.com/mounjaro/" },
      manufacturer: { name: "Lilly Savings Card", url: "https://www.mounjaro.com/savings-and-resources", savings: "As low as $25/month" },
    },
    insurance: {
      medicare: { covered: "Part D - diabetes indication", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Diabetes diagnosis may help", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Zepbound": {
    generic: "Tirzepatide",
    category: "GLP-1",
    strengths: ["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
    quantities: ["4 pens/month", "Single-dose vials"],
    research: {
      summary: "Same molecule as Mounjaro but FDA-approved for chronic weight management. The SURMOUNT trials (NIH-indexed) showed up to 22.5% weight loss at 72 weeks — the highest yet for any approved weight-loss drug. Lilly launched a direct-to-consumer cash program at $299/mo for the 2.5mg vial — a deliberate move to capture the cash market.",
      links: [
        { label: "NIH/NLM: SURMOUNT-1 trial", url: "https://pubmed.ncbi.nlm.nih.gov/35658024/" },
        { label: "LillyDirect (cash program)", url: "https://lillydirect.lilly.com/pharmacy/zepbound" },
      ]
    },
    sources: {
      goodrx: { price: "$1,059", url: "https://www.goodrx.com/zepbound" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$1,020", url: "https://www.blinkhealth.com/zepbound" },
      northwest: { price: "$389", url: "https://www.northwestpharmacy.com/product/zepbound" },
      canadaDrugs: { price: "$369", url: "https://www.canadadrugs.com/search?q=zepbound" },
      pharmacyChecker: { price: "from $329", url: "https://www.pharmacychecker.com/zepbound/" },
      manufacturer: { name: "LillyDirect (cash)", url: "https://lillydirect.lilly.com/pharmacy/zepbound", savings: "$299-$549/mo for vials direct" },
    },
    insurance: {
      medicare: { covered: "Generally not covered for obesity", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Prior auth usually required", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Foundayo (Orforglipron)": {
    generic: "Orforglipron",
    category: "GLP-1",
    strengths: ["3mg", "12mg", "36mg"],
    quantities: ["30 tablets"],
    research: {
      summary: "FDA-approved April 2026 — the first non-peptide oral GLP-1. Unlike semaglutide pills, orforglipron has NO food/water restrictions, can be taken any time of day. ACHIEVE-3 head-to-head vs oral semaglutide showed superior A1C reduction (-2.2% vs -1.4%) and superior weight loss (-19.7 lb vs -11.0 lb). Because it's a small molecule, it's cheaper to manufacture than peptides — analysts expect aggressive pricing.",
      links: [
        { label: "FDA approval announcement (April 2026)", url: "https://www.fda.gov/news-events/press-announcements" },
        { label: "NIH/NLM: ACHIEVE-3 trial data", url: "https://pubmed.ncbi.nlm.nih.gov/?term=orforglipron" },
        { label: "Managed Healthcare Executive analysis", url: "https://www.managedhealthcareexecutive.com/view/could-orforglipron-reshape-the-glp-1-market-" },
      ]
    },
    sources: {
      goodrx: { price: "Check launch pricing", url: "https://www.goodrx.com/" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "Check availability", url: "https://pharmacy.amazon.com" },
      blink: { price: "Check availability", url: "https://www.blinkhealth.com/" },
      northwest: { price: "Coming soon", url: "https://www.northwestpharmacy.com" },
      canadaDrugs: { price: "Coming soon", url: "https://www.canadadrugs.com" },
      pharmacyChecker: { price: "Coming soon", url: "https://www.pharmacychecker.com/" },
      manufacturer: { name: "LillyDirect", url: "https://lillydirect.lilly.com/", savings: "Cash program expected ~$50-300/mo per Medicare deal" },
    },
    insurance: {
      medicare: { covered: "$50/mo per Nov 2025 Medicare agreement", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Coverage rolling out post-launch", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // INHALERS — Anchor cash-pay category
  // HFA propellant patents (post-2008 CFC ban) keep brand-name
  // inhalers expensive. Albuterol HFA patent expired 2028 — still
  // no full generic. NIH studies show inhaler nonadherence
  // strongly correlates with cost.
  // ============================================================
  "Advair HFA": {
    generic: "Fluticasone/Salmeterol (HFA)",
    category: "Inhaler",
    strengths: ["45/21mcg", "115/21mcg", "230/21mcg"],
    quantities: ["120 doses (1 inhaler)"],
    research: {
      summary: "Advair HFA is the aerosol/MDI version of Advair — preferred over Diskus for patients with low inspiratory flow (children, elderly, severe asthma). The HFA propellant transition after the 2008 CFC ban (FDA, Montreal Protocol) reset patent clocks for inhalers, making aerosol inhalers significantly more expensive than the same drug in dry-powder form. The Conversation/U.S. News documented retail prices rising from ~$13/mo to ~$98/mo post-2008. No therapeutic equivalent generic exists for Advair HFA as of 2026.",
      links: [
        { label: "NIH/NLM: Cost of HFA inhaler transition", url: "https://pubmed.ncbi.nlm.nih.gov/26479472/" },
        { label: "U.S. News: Why asthma meds are unaffordable", url: "https://www.usnews.com/news/healthiest-communities/articles/2024-03-10/why-asthma-medication-is-so-expensive-in-the-u-s" },
        { label: "FDA: HFA inhaler transition history", url: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/transition-cfc-propelled-albuterol-inhalers-hfa-propelled-albuterol-inhalers" },
      ]
    },
    sources: {
      goodrx: { price: "$429", url: "https://www.goodrx.com/advair-hfa" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$410", url: "https://www.blinkhealth.com/advair-hfa" },
      northwest: { price: "$129", url: "https://www.northwestpharmacy.com/product/advair-hfa" },
      canadaDrugs: { price: "$115", url: "https://www.canadadrugs.com/search?q=advair+hfa" },
      pharmacyChecker: { price: "from $99", url: "https://www.pharmacychecker.com/advair-hfa/" },
      manufacturer: { name: "GSK Patient Assistance", url: "https://www.gsk.com/en-gb/patients-and-caregivers/", savings: "Program available" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Often covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Advair Diskus": {
    generic: "Fluticasone/Salmeterol",
    category: "Inhaler",
    strengths: ["100/50mcg", "250/50mcg", "500/50mcg"],
    quantities: ["60 doses (1 month)", "120 doses (2 months)"],
    research: {
      summary: "Dry-powder version of Advair. Wixela Inhub (FDA-approved 2019) is the first authorized generic and is much cheaper, but is a dry-powder inhaler — not interchangeable for patients who need the HFA aerosol form. Advair Diskus has Cost Plus availability since the generic exists.",
      links: [
        { label: "NIH/NLM: Fluticasone/Salmeterol StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK547737/" },
        { label: "FDA: Wixela Inhub generic approval", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-generic-advair-diskus" },
      ]
    },
    sources: {
      goodrx: { price: "$389", url: "https://www.goodrx.com/advair-diskus" },
      costplus: { price: "$89", url: "https://costplusdrugs.com/medications/fluticasone-salmeterol/" },
      amazon: { price: "$95", url: "https://pharmacy.amazon.com" },
      blink: { price: "$375", url: "https://www.blinkhealth.com/advair-diskus" },
      northwest: { price: "$89", url: "https://www.northwestpharmacy.com/product/advair-diskus" },
      canadaDrugs: { price: "$79", url: "https://www.canadadrugs.com/search?q=advair" },
      pharmacyChecker: { price: "from $65", url: "https://www.pharmacychecker.com/advair/" },
      manufacturer: { name: "GSK Patient Assistance", url: "https://www.gsk.com/en-gb/patients-and-caregivers/", savings: "Program available" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Often covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Symbicort": {
    generic: "Budesonide/Formoterol",
    category: "Inhaler",
    strengths: ["80/4.5mcg", "160/4.5mcg"],
    quantities: ["120 doses (1 inhaler)"],
    research: {
      summary: "HFA aerosol combination ICS/LABA inhaler. Authorized generic (Breyna) approved March 2022 by FDA — first generic Symbicort, but supply has been inconsistent. Per AstraZeneca: launched cash-pay program at $35/mo as of 2024 in response to scrutiny over HFA inhaler pricing.",
      links: [
        { label: "NIH/NLM: Budesonide/formoterol overview", url: "https://www.ncbi.nlm.nih.gov/books/NBK559164/" },
        { label: "FDA: Breyna generic approval", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-generic-symbicort" },
      ]
    },
    sources: {
      goodrx: { price: "$329", url: "https://www.goodrx.com/symbicort" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$315", url: "https://www.blinkhealth.com/symbicort" },
      northwest: { price: "$79", url: "https://www.northwestpharmacy.com/product/symbicort" },
      canadaDrugs: { price: "$69", url: "https://www.canadadrugs.com/search?q=symbicort" },
      pharmacyChecker: { price: "from $59", url: "https://www.pharmacychecker.com/symbicort/" },
      manufacturer: { name: "AstraZeneca $35 cash program", url: "https://www.symbicort.com/savings", savings: "$35/mo direct cash" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Often covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Dulera HFA": {
    generic: "Mometasone/Formoterol",
    category: "Inhaler",
    strengths: ["100/5mcg", "200/5mcg"],
    quantities: ["120 doses (1 month)"],
    research: {
      summary: "HFA aerosol ICS/LABA combination. No generic available. Affected by the same HFA pricing dynamics as Advair HFA and Symbicort.",
      links: [
        { label: "NIH/NLM: Mometasone/formoterol", url: "https://pubmed.ncbi.nlm.nih.gov/?term=mometasone+formoterol+asthma" },
      ]
    },
    sources: {
      goodrx: { price: "$429", url: "https://www.goodrx.com/dulera" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$410", url: "https://www.blinkhealth.com/dulera" },
      northwest: { price: "$129", url: "https://www.northwestpharmacy.com/product/dulera" },
      canadaDrugs: { price: "$115", url: "https://www.canadadrugs.com/search?q=dulera" },
      pharmacyChecker: { price: "from $99", url: "https://www.pharmacychecker.com/dulera/" },
      manufacturer: { name: "Organon Patient Savings", url: "https://www.organon.com/", savings: "Check eligibility" },
    },
    insurance: {
      medicare: { covered: "Part D - varies", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Check your plan", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Flovent HFA": {
    generic: "Fluticasone Propionate (HFA)",
    category: "Inhaler",
    strengths: ["44mcg", "110mcg", "220mcg"],
    quantities: ["120 doses (1 inhaler)"],
    research: {
      summary: "HFA aerosol corticosteroid inhaler — historically a top pediatric asthma controller. GSK discontinued branded Flovent HFA in January 2024, replacing it with an authorized generic (fluticasone propionate HFA) — a controversial move that disrupted Medicaid coverage for many pediatric patients (Medicaid rebate avoidance).",
      links: [
        { label: "NIH/NLM: Fluticasone propionate", url: "https://www.ncbi.nlm.nih.gov/books/NBK547928/" },
        { label: "JAMA Pediatrics: Flovent discontinuation impact", url: "https://jamanetwork.com/journals/jamapediatrics/" },
      ]
    },
    sources: {
      goodrx: { price: "$259", url: "https://www.goodrx.com/flovent-hfa" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$245", url: "https://www.blinkhealth.com/flovent-hfa" },
      northwest: { price: "$59", url: "https://www.northwestpharmacy.com/product/flovent-hfa" },
      canadaDrugs: { price: "$49", url: "https://www.canadadrugs.com/search?q=flovent" },
      pharmacyChecker: { price: "from $39", url: "https://www.pharmacychecker.com/flovent/" },
      manufacturer: { name: "Authorized generic available", url: "https://www.gsk.com/", savings: "Authorized generic ~$140/mo" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Often covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Albuterol HFA": {
    generic: "Albuterol",
    category: "Inhaler",
    strengths: ["90mcg/actuation"],
    quantities: ["200 doses (1 inhaler)"],
    research: {
      summary: "Most prescribed rescue inhaler in the US. Despite being available in three brand forms (ProAir, Proventil, Ventolin), there is STILL no AB-rated therapeutic generic — patents around the HFA propellant and metered-dose canister extend to ~2028. Average retail price has risen from ~$15 (CFC era) to ~$98 in 2024 per The Conversation.",
      links: [
        { label: "NIH/NLM: Albuterol StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK482272/" },
        { label: "The Conversation: HFA inhaler pricing", url: "https://theconversation.com/asthma-meds-have-become-shockingly-unaffordable-but-relief-may-be-on-the-way-222858" },
      ]
    },
    sources: {
      goodrx: { price: "$35", url: "https://www.goodrx.com/albuterol" },
      costplus: { price: "$9", url: "https://costplusdrugs.com/medications/albuterol/" },
      amazon: { price: "$12", url: "https://pharmacy.amazon.com" },
      blink: { price: "$29", url: "https://www.blinkhealth.com/albuterol" },
      northwest: { price: "$14", url: "https://www.northwestpharmacy.com/product/albuterol" },
      canadaDrugs: { price: "$12", url: "https://www.canadadrugs.com/search?q=albuterol" },
      pharmacyChecker: { price: "from $10", url: "https://www.pharmacychecker.com/albuterol/" },
      manufacturer: { name: "Authorized generic available", url: "https://www.goodrx.com/albuterol", savings: "Authorized generic available" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Almost always covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Trelegy Ellipta": {
    generic: "Fluticasone/Umeclidinium/Vilanterol",
    category: "Inhaler",
    strengths: ["100/62.5/25mcg", "200/62.5/25mcg"],
    quantities: ["30 doses (1 month)"],
    research: {
      summary: "First and only once-daily triple-therapy inhaler (ICS + LAMA + LABA) for COPD and asthma. Dry-powder Ellipta device. NIH-published IMPACT and CAPTAIN trials showed reductions in moderate/severe exacerbations vs dual therapy. No generic. Increasingly prescribed for moderate-to-severe asthma, especially in Medicare populations.",
      links: [
        { label: "NIH/NLM: IMPACT trial", url: "https://pubmed.ncbi.nlm.nih.gov/29668226/" },
        { label: "NIH/NLM: CAPTAIN trial (asthma)", url: "https://pubmed.ncbi.nlm.nih.gov/32475087/" },
      ]
    },
    sources: {
      goodrx: { price: "$679", url: "https://www.goodrx.com/trelegy-ellipta" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$649", url: "https://www.blinkhealth.com/trelegy-ellipta" },
      northwest: { price: "$199", url: "https://www.northwestpharmacy.com/product/trelegy-ellipta" },
      canadaDrugs: { price: "$185", url: "https://www.canadadrugs.com/search?q=trelegy" },
      pharmacyChecker: { price: "from $159", url: "https://www.pharmacychecker.com/trelegy/" },
      manufacturer: { name: "GSK Trelegy Savings", url: "https://www.trelegy.com/copd/savings-and-support/", savings: "As low as $0/mo for eligible" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Often covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // ED — Very high cash-pay volume, near-universally cash-paid
  // because Medicare and most commercial plans don't cover.
  // ============================================================
  "Viagra": {
    generic: "Sildenafil",
    category: "ED",
    strengths: ["25mg", "50mg", "100mg"],
    quantities: ["10 tablets", "30 tablets"],
    research: {
      summary: "Sildenafil — generic available since 2017. Per NIH-indexed reviews, ~30 million US men experience ED. Insurance rarely covers ED drugs, making this near-100% cash-pay. Cost Plus has driven the generic price floor below $5/mo. Telehealth-direct (Hims, Ro) competes heavily.",
      links: [
        { label: "NIH/NLM: Sildenafil StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK558978/" },
        { label: "NIH: ED prevalence", url: "https://www.niddk.nih.gov/health-information/urologic-diseases/erectile-dysfunction" },
      ]
    },
    sources: {
      goodrx: { price: "$25", url: "https://www.goodrx.com/sildenafil" },
      costplus: { price: "$5", url: "https://costplusdrugs.com/medications/sildenafil/" },
      amazon: { price: "$19", url: "https://pharmacy.amazon.com" },
      blink: { price: "$22", url: "https://www.blinkhealth.com/sildenafil" },
      northwest: { price: "$79", url: "https://www.northwestpharmacy.com/product/viagra" },
      canadaDrugs: { price: "$69", url: "https://www.canadadrugs.com/search?q=viagra" },
      pharmacyChecker: { price: "from $59", url: "https://www.pharmacychecker.com/viagra/" },
      manufacturer: { name: "Generic sildenafil available", url: "https://www.goodrx.com/sildenafil", savings: "Use generic — 95% cheaper" },
    },
    insurance: {
      medicare: { covered: "Generally not covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Rarely covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Cialis": {
    generic: "Tadalafil",
    category: "ED",
    strengths: ["2.5mg", "5mg", "10mg", "20mg"],
    quantities: ["30 tablets"],
    research: {
      summary: "Tadalafil — generic since 2018. Longer half-life (~17.5h) than sildenafil makes daily-use 5mg dosing popular. Also FDA-approved for benign prostatic hyperplasia (BPH), giving it a covered indication that sildenafil lacks.",
      links: [
        { label: "NIH/NLM: Tadalafil StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK549843/" },
      ]
    },
    sources: {
      goodrx: { price: "$22", url: "https://www.goodrx.com/tadalafil" },
      costplus: { price: "$4", url: "https://costplusdrugs.com/medications/tadalafil/" },
      amazon: { price: "$17", url: "https://pharmacy.amazon.com" },
      blink: { price: "$19", url: "https://www.blinkhealth.com/tadalafil" },
      northwest: { price: "$69", url: "https://www.northwestpharmacy.com/product/cialis" },
      canadaDrugs: { price: "$59", url: "https://www.canadadrugs.com/search?q=cialis" },
      pharmacyChecker: { price: "from $49", url: "https://www.pharmacychecker.com/cialis/" },
      manufacturer: { name: "Generic tadalafil available", url: "https://www.goodrx.com/tadalafil", savings: "Use generic — 90% cheaper" },
    },
    insurance: {
      medicare: { covered: "Covered when prescribed for BPH", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Sometimes covered for BPH indication", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // CHOLESTEROL — High-volume cash-pay generics
  // GoodRx data: atorvastatin is one of the most-searched drugs.
  // ============================================================
  "Atorvastatin": {
    generic: "Atorvastatin",
    category: "Cholesterol",
    strengths: ["10mg", "20mg", "40mg", "80mg"],
    quantities: ["30 tablets", "90 tablets"],
    research: {
      summary: "Statins are among the top 5 most prescribed drug classes globally per NIH data. Atorvastatin is the highest-prescribed statin. The cash price ($4-15/mo) is often LOWER than insurance copays — GoodRx has documented this for years as a flagship example of when not to use insurance.",
      links: [
        { label: "NIH/NLM: Atorvastatin StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK430779/" },
        { label: "NIH/NLM: Statins prescribed at scale", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9047873/" },
      ]
    },
    sources: {
      goodrx: { price: "$8", url: "https://www.goodrx.com/atorvastatin" },
      costplus: { price: "$3", url: "https://costplusdrugs.com/medications/atorvastatin/" },
      amazon: { price: "$5", url: "https://pharmacy.amazon.com" },
      blink: { price: "$7", url: "https://www.blinkhealth.com/atorvastatin" },
      northwest: { price: "$15", url: "https://www.northwestpharmacy.com/product/atorvastatin" },
      canadaDrugs: { price: "$12", url: "https://www.canadadrugs.com/search?q=atorvastatin" },
      pharmacyChecker: { price: "from $9", url: "https://www.pharmacychecker.com/atorvastatin/" },
      manufacturer: { name: "Generic — very affordable", url: "https://www.goodrx.com/atorvastatin", savings: "Cash often beats insurance" },
    },
    insurance: {
      medicare: { covered: "Part D - almost always covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Cash often cheaper than copay", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Rosuvastatin": {
    generic: "Rosuvastatin",
    category: "Cholesterol",
    strengths: ["5mg", "10mg", "20mg", "40mg"],
    quantities: ["30 tablets", "90 tablets"],
    research: {
      summary: "High-intensity statin, most potent of the commonly prescribed statins per AHA dose-equivalence guidelines. Generic since 2016. Often used when atorvastatin doesn't reach LDL target.",
      links: [
        { label: "NIH/NLM: Rosuvastatin StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK539883/" },
      ]
    },
    sources: {
      goodrx: { price: "$10", url: "https://www.goodrx.com/rosuvastatin" },
      costplus: { price: "$4", url: "https://costplusdrugs.com/medications/rosuvastatin/" },
      amazon: { price: "$7", url: "https://pharmacy.amazon.com" },
      blink: { price: "$9", url: "https://www.blinkhealth.com/rosuvastatin" },
      northwest: { price: "$19", url: "https://www.northwestpharmacy.com/product/rosuvastatin" },
      canadaDrugs: { price: "$15", url: "https://www.canadadrugs.com/search?q=rosuvastatin" },
      pharmacyChecker: { price: "from $12", url: "https://www.pharmacychecker.com/rosuvastatin/" },
      manufacturer: { name: "Generic — affordable", url: "https://www.goodrx.com/rosuvastatin", savings: "Generic widely available" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Cash often beats copay", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // HIGH BLOOD PRESSURE — Top-3 most prescribed drug class
  // Lisinopril alone has >100M prescriptions/year per CDC.
  // ============================================================
  "Lisinopril": {
    generic: "Lisinopril",
    category: "HBP",
    strengths: ["5mg", "10mg", "20mg", "40mg"],
    quantities: ["30 tablets", "90 tablets"],
    research: {
      summary: "ACE inhibitor, one of the top 5 most-dispensed drugs in the US per CDC and NIH data. Cash price typically $2-4/mo — almost always cheaper to skip insurance for this drug.",
      links: [
        { label: "NIH/NLM: Lisinopril StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK482230/" },
      ]
    },
    sources: {
      goodrx: { price: "$4", url: "https://www.goodrx.com/lisinopril" },
      costplus: { price: "$2", url: "https://costplusdrugs.com/medications/lisinopril/" },
      amazon: { price: "$3", url: "https://pharmacy.amazon.com" },
      blink: { price: "$4", url: "https://www.blinkhealth.com/lisinopril" },
      northwest: { price: "$15", url: "https://www.northwestpharmacy.com/product/lisinopril" },
      canadaDrugs: { price: "$12", url: "https://www.canadadrugs.com/search?q=lisinopril" },
      pharmacyChecker: { price: "from $10", url: "https://www.pharmacychecker.com/lisinopril/" },
      manufacturer: { name: "Generic — very affordable", url: "https://www.goodrx.com/lisinopril", savings: "Already very low cost" },
    },
    insurance: {
      medicare: { covered: "Part D - almost always covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Almost always covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Losartan": {
    generic: "Losartan",
    category: "HBP",
    strengths: ["25mg", "50mg", "100mg"],
    quantities: ["30 tablets", "90 tablets"],
    research: {
      summary: "ARB. First-line HBP option for patients who can't tolerate ACE inhibitor cough. Generic since 2010.",
      links: [
        { label: "NIH/NLM: Losartan StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK553162/" },
      ]
    },
    sources: {
      goodrx: { price: "$9", url: "https://www.goodrx.com/losartan" },
      costplus: { price: "$3", url: "https://costplusdrugs.com/medications/losartan/" },
      amazon: { price: "$7", url: "https://pharmacy.amazon.com" },
      blink: { price: "$8", url: "https://www.blinkhealth.com/losartan" },
      northwest: { price: "$19", url: "https://www.northwestpharmacy.com/product/losartan" },
      canadaDrugs: { price: "$15", url: "https://www.canadadrugs.com/search?q=losartan" },
      pharmacyChecker: { price: "from $12", url: "https://www.pharmacychecker.com/losartan/" },
      manufacturer: { name: "Generic — affordable", url: "https://www.goodrx.com/losartan", savings: "Generic widely available" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Usually covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Amlodipine": {
    generic: "Amlodipine",
    category: "HBP",
    strengths: ["2.5mg", "5mg", "10mg"],
    quantities: ["30 tablets", "90 tablets"],
    research: {
      summary: "Calcium channel blocker, top-10 most prescribed drug in the US per NIH/CDC reporting. Frequently combined with lisinopril or losartan in single-pill combos.",
      links: [
        { label: "NIH/NLM: Amlodipine StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK519508/" },
      ]
    },
    sources: {
      goodrx: { price: "$5", url: "https://www.goodrx.com/amlodipine" },
      costplus: { price: "$3", url: "https://costplusdrugs.com/medications/amlodipine/" },
      amazon: { price: "$4", url: "https://pharmacy.amazon.com" },
      blink: { price: "$5", url: "https://www.blinkhealth.com/amlodipine" },
      northwest: { price: "$15", url: "https://www.northwestpharmacy.com/product/amlodipine" },
      canadaDrugs: { price: "$12", url: "https://www.canadadrugs.com/search?q=amlodipine" },
      pharmacyChecker: { price: "from $10", url: "https://www.pharmacychecker.com/amlodipine/" },
      manufacturer: { name: "Generic — very affordable", url: "https://www.goodrx.com/amlodipine", savings: "Already very low cost" },
    },
    insurance: {
      medicare: { covered: "Part D - almost always covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Almost always covered", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Jardiance": {
    generic: "Empagliflozin",
    category: "Diabetes",
    strengths: ["10mg", "25mg"],
    quantities: ["30 tablets"],
    research: {
      summary: "SGLT2 inhibitor. EMPA-REG OUTCOME and EMPEROR trials (NIH-indexed) show major mortality benefit in heart failure AND kidney disease, expanding indications well beyond diabetes. Selected for Medicare price negotiation under the Inflation Reduction Act starting 2026.",
      links: [
        { label: "NIH/NLM: Empagliflozin StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK532925/" },
        { label: "NEJM: EMPA-REG OUTCOME trial", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1504720" },
        { label: "CMS: Medicare drug price negotiation list", url: "https://www.cms.gov/inflation-reduction-act-and-medicare/medicare-drug-price-negotiation" },
      ]
    },
    sources: {
      goodrx: { price: "$629", url: "https://www.goodrx.com/jardiance" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$599", url: "https://www.blinkhealth.com/jardiance" },
      northwest: { price: "$159", url: "https://www.northwestpharmacy.com/product/jardiance" },
      canadaDrugs: { price: "$145", url: "https://www.canadadrugs.com/search?q=jardiance" },
      pharmacyChecker: { price: "from $129", url: "https://www.pharmacychecker.com/jardiance/" },
      manufacturer: { name: "Boehringer Savings Card", url: "https://www.jardiance.com/savings-card", savings: "As low as $10/month" },
    },
    insurance: {
      medicare: { covered: "Part D - Medicare-negotiated price 2026", url: "https://www.cms.gov/inflation-reduction-act-and-medicare/medicare-drug-price-negotiation" },
      goodrxInsurance: { note: "Often covered for diabetes", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // DIABETES (non-GLP-1) — Metformin is the #1 diabetes drug
  // ============================================================
  "Metformin": {
    generic: "Metformin",
    category: "Diabetes",
    strengths: ["500mg", "850mg", "1000mg", "500mg ER", "1000mg ER"],
    quantities: ["60 tablets", "180 tablets"],
    research: {
      summary: "First-line type 2 diabetes therapy per ADA guidelines. Among the top 5 most prescribed drugs in the US per NIH data. NIH currently funding the TAME trial studying metformin's potential anti-aging effects. Cash price <$5/mo.",
      links: [
        { label: "NIH/NLM: Metformin StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK518983/" },
        { label: "NIH: TAME aging trial overview", url: "https://www.afar.org/tame-trial" },
      ]
    },
    sources: {
      goodrx: { price: "$6", url: "https://www.goodrx.com/metformin" },
      costplus: { price: "$3", url: "https://costplusdrugs.com/medications/metformin/" },
      amazon: { price: "$4", url: "https://pharmacy.amazon.com" },
      blink: { price: "$5", url: "https://www.blinkhealth.com/metformin" },
      northwest: { price: "$15", url: "https://www.northwestpharmacy.com/product/metformin" },
      canadaDrugs: { price: "$12", url: "https://www.canadadrugs.com/search?q=metformin" },
      pharmacyChecker: { price: "from $9", url: "https://www.pharmacychecker.com/metformin/" },
      manufacturer: { name: "Generic — very affordable", url: "https://www.goodrx.com/metformin", savings: "Already very low cost" },
    },
    insurance: {
      medicare: { covered: "Part D - almost always covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Cash often beats copay", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // THYROID — Top-3 most prescribed drug in the US
  // ============================================================
  "Levothyroxine": {
    generic: "Levothyroxine",
    category: "Thyroid",
    strengths: ["25mcg", "50mcg", "75mcg", "88mcg", "100mcg", "112mcg", "125mcg", "150mcg", "175mcg", "200mcg"],
    quantities: ["30 tablets", "90 tablets"],
    research: {
      summary: "Top-3 most prescribed drug in the US for >15 years. NIH estimates ~5 in 100 Americans have hypothyroidism. GoodRx has flagged this as one of the best 'cash-beats-insurance' opportunities — typical insurance copay $20-30, cash price $4-10.",
      links: [
        { label: "NIH/NLM: Levothyroxine StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK539808/" },
        { label: "NIH: Hypothyroidism overview", url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/hypothyroidism" },
      ]
    },
    sources: {
      goodrx: { price: "$10", url: "https://www.goodrx.com/levothyroxine" },
      costplus: { price: "$4", url: "https://costplusdrugs.com/medications/levothyroxine/" },
      amazon: { price: "$8", url: "https://pharmacy.amazon.com" },
      blink: { price: "$9", url: "https://www.blinkhealth.com/levothyroxine" },
      northwest: { price: "$19", url: "https://www.northwestpharmacy.com/product/levothyroxine" },
      canadaDrugs: { price: "$15", url: "https://www.canadadrugs.com/search?q=levothyroxine" },
      pharmacyChecker: { price: "from $12", url: "https://www.pharmacychecker.com/levothyroxine/" },
      manufacturer: { name: "Generic — affordable", url: "https://www.goodrx.com/levothyroxine", savings: "Cash often beats copay" },
    },
    insurance: {
      medicare: { covered: "Part D - almost always covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Cash often cheaper", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // MENTAL HEALTH — SSRIs are the most prescribed antidepressants
  // ============================================================
  "Sertraline": {
    generic: "Sertraline",
    category: "Mental Health",
    strengths: ["25mg", "50mg", "100mg"],
    quantities: ["30 tablets", "90 tablets"],
    research: {
      summary: "SSRI. Per NIH-published reviews, antidepressants are the most prescribed medication class in the US, with SSRIs the most common subtype. Sertraline is consistently in the top 10 most-prescribed drugs overall.",
      links: [
        { label: "NIH/NLM: Sertraline StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK547689/" },
        { label: "NIH: SSRIs as most prescribed antidepressant class", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9827898/" },
      ]
    },
    sources: {
      goodrx: { price: "$10", url: "https://www.goodrx.com/sertraline" },
      costplus: { price: "$4", url: "https://costplusdrugs.com/medications/sertraline/" },
      amazon: { price: "$7", url: "https://pharmacy.amazon.com" },
      blink: { price: "$9", url: "https://www.blinkhealth.com/sertraline" },
      northwest: { price: "$19", url: "https://www.northwestpharmacy.com/product/sertraline" },
      canadaDrugs: { price: "$15", url: "https://www.canadadrugs.com/search?q=sertraline" },
      pharmacyChecker: { price: "from $12", url: "https://www.pharmacychecker.com/sertraline/" },
      manufacturer: { name: "Generic — very affordable", url: "https://www.goodrx.com/sertraline", savings: "Already very low cost" },
    },
    insurance: {
      medicare: { covered: "Part D - almost always covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Cash often beats copay", url: "https://www.goodrx.com/insurance" },
    }
  },

  "Escitalopram": {
    generic: "Escitalopram",
    category: "Mental Health",
    strengths: ["5mg", "10mg", "20mg"],
    quantities: ["30 tablets", "90 tablets"],
    research: {
      summary: "SSRI (the active enantiomer of citalopram/Lexapro). Generic since 2012. Among the top-prescribed antidepressants alongside sertraline.",
      links: [
        { label: "NIH/NLM: Escitalopram StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK557734/" },
      ]
    },
    sources: {
      goodrx: { price: "$11", url: "https://www.goodrx.com/escitalopram" },
      costplus: { price: "$4", url: "https://costplusdrugs.com/medications/escitalopram/" },
      amazon: { price: "$8", url: "https://pharmacy.amazon.com" },
      blink: { price: "$10", url: "https://www.blinkhealth.com/escitalopram" },
      northwest: { price: "$19", url: "https://www.northwestpharmacy.com/product/escitalopram" },
      canadaDrugs: { price: "$15", url: "https://www.canadadrugs.com/search?q=escitalopram" },
      pharmacyChecker: { price: "from $12", url: "https://www.pharmacychecker.com/escitalopram/" },
      manufacturer: { name: "Generic — affordable", url: "https://www.goodrx.com/escitalopram", savings: "Generic widely available" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Cash often beats copay", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // GI — Omeprazole and PPIs are extremely high-volume
  // ============================================================
  "Omeprazole": {
    generic: "Omeprazole",
    category: "GI",
    strengths: ["20mg", "40mg"],
    quantities: ["30 capsules", "90 capsules"],
    research: {
      summary: "PPI. Available OTC at lower doses, prescription at 40mg. Top-15 most prescribed drug in the US per NIH data.",
      links: [
        { label: "NIH/NLM: Omeprazole StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK539786/" },
      ]
    },
    sources: {
      goodrx: { price: "$10", url: "https://www.goodrx.com/omeprazole" },
      costplus: { price: "$4", url: "https://costplusdrugs.com/medications/omeprazole/" },
      amazon: { price: "$8", url: "https://pharmacy.amazon.com" },
      blink: { price: "$9", url: "https://www.blinkhealth.com/omeprazole" },
      northwest: { price: "$19", url: "https://www.northwestpharmacy.com/product/omeprazole" },
      canadaDrugs: { price: "$15", url: "https://www.canadadrugs.com/search?q=omeprazole" },
      pharmacyChecker: { price: "from $12", url: "https://www.pharmacychecker.com/omeprazole/" },
      manufacturer: { name: "Generic + OTC available", url: "https://www.goodrx.com/omeprazole", savings: "OTC version available" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Cash often beats copay", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // PAIN / NEUROLOGY — Gabapentin extremely high cash-pay volume
  // ============================================================
  "Gabapentin": {
    generic: "Gabapentin",
    category: "Pain",
    strengths: ["100mg", "300mg", "400mg", "600mg", "800mg"],
    quantities: ["90 capsules"],
    research: {
      summary: "Originally an anticonvulsant, now FDA-approved for postherpetic neuralgia and widely prescribed off-label for nerve pain, anxiety, and other indications. Top-10 most-prescribed drug in the US.",
      links: [
        { label: "NIH/NLM: Gabapentin StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK493228/" },
      ]
    },
    sources: {
      goodrx: { price: "$12", url: "https://www.goodrx.com/gabapentin" },
      costplus: { price: "$5", url: "https://costplusdrugs.com/medications/gabapentin/" },
      amazon: { price: "$9", url: "https://pharmacy.amazon.com" },
      blink: { price: "$11", url: "https://www.blinkhealth.com/gabapentin" },
      northwest: { price: "$25", url: "https://www.northwestpharmacy.com/product/gabapentin" },
      canadaDrugs: { price: "$19", url: "https://www.canadadrugs.com/search?q=gabapentin" },
      pharmacyChecker: { price: "from $15", url: "https://www.pharmacychecker.com/gabapentin/" },
      manufacturer: { name: "Generic — affordable", url: "https://www.goodrx.com/gabapentin", savings: "Already low cost" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Cash often beats copay", url: "https://www.goodrx.com/insurance" },
    }
  },

  // ============================================================
  // BLOOD THINNERS — Eliquis is one of the highest-spend drugs
  // and was selected for Medicare's first negotiation round
  // ============================================================
  "Eliquis": {
    generic: "Apixaban",
    category: "Blood Thinner",
    strengths: ["2.5mg", "5mg"],
    quantities: ["60 tablets"],
    research: {
      summary: "Top DOAC (direct oral anticoagulant). Selected as one of the first 10 drugs for Medicare price negotiation under the Inflation Reduction Act — negotiated price effective January 2026 cuts the price by ~56% for Medicare beneficiaries. No generic until ~2028. Canadian-licensed pharmacies have always been a major savings route for Eliquis.",
      links: [
        { label: "NIH/NLM: Apixaban StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK507910/" },
        { label: "CMS: Medicare drug price negotiation", url: "https://www.cms.gov/inflation-reduction-act-and-medicare/medicare-drug-price-negotiation" },
      ]
    },
    sources: {
      goodrx: { price: "$589", url: "https://www.goodrx.com/eliquis" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$565", url: "https://www.blinkhealth.com/eliquis" },
      northwest: { price: "$129", url: "https://www.northwestpharmacy.com/product/eliquis" },
      canadaDrugs: { price: "$115", url: "https://www.canadadrugs.com/search?q=eliquis" },
      pharmacyChecker: { price: "from $99", url: "https://www.pharmacychecker.com/eliquis/" },
      manufacturer: { name: "BMS-Pfizer 360 Support", url: "https://www.eliquis.com/eliquis/eliquis-360-support", savings: "Free trial; copay assistance" },
    },
    insurance: {
      medicare: { covered: "Negotiated price effective Jan 2026", url: "https://www.cms.gov/inflation-reduction-act-and-medicare/medicare-drug-price-negotiation" },
      goodrxInsurance: { note: "Often covered with prior auth", url: "https://www.goodrx.com/insurance" },
    }
  },
}

export const CATEGORIES = [
  "All",
  "GLP-1",
  "Inhaler",
  "ED",
  "Cholesterol",
  "HBP",
  "Diabetes",
  "Thyroid",
  "Mental Health",
  "GI",
  "Pain",
  "Blood Thinner"
]

export const SOURCES_CONFIG = [
  { key: "goodrx", label: "GoodRx", flag: "🇺🇸", type: "cash" },
  { key: "costplus", label: "Cost Plus Drugs", flag: "🇺🇸", type: "cash" },
  { key: "amazon", label: "Amazon Pharmacy", flag: "🇺🇸", type: "cash" },
  { key: "blink", label: "Blink Health", flag: "🇺🇸", type: "cash" },
  { key: "northwest", label: "Northwest Pharmacy", flag: "🇨🇦", type: "international" },
  { key: "canadaDrugs", label: "Canada Drugs Online", flag: "🇨🇦", type: "international" },
  { key: "pharmacyChecker", label: "PharmacyChecker", flag: "🌍", type: "international" },
]
