export const DRUGS = {
  "Ozempic": {
    generic: "Semaglutide",
    category: "GLP-1",
    strengths: ["0.5mg/dose", "1mg/dose", "2mg/dose"],
    quantities: ["1 pen (4 doses)", "3 pens"],
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
  "Wegovy": {
    generic: "Semaglutide",
    category: "GLP-1",
    strengths: ["0.25mg", "0.5mg", "1mg", "1.7mg", "2.4mg"],
    quantities: ["4 pens/month"],
    sources: {
      goodrx: { price: "$1,349", url: "https://www.goodrx.com/wegovy" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$1,299", url: "https://www.blinkhealth.com/wegovy" },
      northwest: { price: "$469", url: "https://www.northwestpharmacy.com/product/wegovy" },
      canadaDrugs: { price: "$445", url: "https://www.canadadrugs.com/search?q=wegovy" },
      pharmacyChecker: { price: "from $389", url: "https://www.pharmacychecker.com/wegovy/" },
      manufacturer: { name: "Wegovy Savings Card", url: "https://www.wegovy.com/taking-wegovy/wegovy-savingscard.html", savings: "$0 for eligible patients" },
    },
    insurance: {
      medicare: { covered: "Generally not covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Prior auth usually required", url: "https://www.goodrx.com/insurance" },
    }
  },
  "Mounjaro": {
    generic: "Tirzepatide",
    category: "GLP-1",
    strengths: ["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
    quantities: ["4 pens/month"],
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
    quantities: ["4 pens/month"],
    sources: {
      goodrx: { price: "$1,059", url: "https://www.goodrx.com/zepbound" },
      costplus: { price: "Not listed", url: "https://costplusdrugs.com" },
      amazon: { price: "N/A", url: "https://pharmacy.amazon.com" },
      blink: { price: "$1,020", url: "https://www.blinkhealth.com/zepbound" },
      northwest: { price: "$389", url: "https://www.northwestpharmacy.com/product/zepbound" },
      canadaDrugs: { price: "$369", url: "https://www.canadadrugs.com/search?q=zepbound" },
      pharmacyChecker: { price: "from $329", url: "https://www.pharmacychecker.com/zepbound/" },
      manufacturer: { name: "Zepbound Savings Card", url: "https://www.zepbound.lilly.com/savings", savings: "As low as $25/month" },
    },
    insurance: {
      medicare: { covered: "Generally not covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Prior auth usually required", url: "https://www.goodrx.com/insurance" },
    }
  },
  "Rybelsus": {
    generic: "Oral Semaglutide",
    category: "GLP-1",
    strengths: ["3mg", "7mg", "14mg"],
    quantities: ["30 tablets"],
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
  "Advair Diskus": {
    generic: "Fluticasone/Salmeterol",
    category: "Inhaler",
    strengths: ["100/50mcg", "250/50mcg", "500/50mcg"],
    quantities: ["60 doses (1 month)", "120 doses (2 months)"],
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
  "Dulera HFA": {
    generic: "Mometasone/Formoterol",
    category: "Inhaler",
    strengths: ["100/5mcg", "200/5mcg"],
    quantities: ["120 doses (1 month)"],
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
  "Symbicort": {
    generic: "Budesonide/Formoterol",
    category: "Inhaler",
    strengths: ["80/4.5mcg", "160/4.5mcg"],
    quantities: ["120 doses (1 month)"],
    sources: {
      goodrx: { price: "$359", url: "https://www.goodrx.com/symbicort" },
      costplus: { price: "$78", url: "https://costplusdrugs.com/medications/budesonide-formoterol/" },
      amazon: { price: "$85", url: "https://pharmacy.amazon.com" },
      blink: { price: "$340", url: "https://www.blinkhealth.com/symbicort" },
      northwest: { price: "$79", url: "https://www.northwestpharmacy.com/product/symbicort" },
      canadaDrugs: { price: "$69", url: "https://www.canadadrugs.com/search?q=symbicort" },
      pharmacyChecker: { price: "from $59", url: "https://www.pharmacychecker.com/symbicort/" },
      manufacturer: { name: "AstraZeneca Savings", url: "https://www.symbicort.com/savings", savings: "Free 30-day trial" },
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
    sources: {
      goodrx: { price: "$35", url: "https://www.goodrx.com/albuterol" },
      costplus: { price: "$9", url: "https://costplusdrugs.com/medications/albuterol/" },
      amazon: { price: "$12", url: "https://pharmacy.amazon.com" },
      blink: { price: "$29", url: "https://www.blinkhealth.com/albuterol" },
      northwest: { price: "$14", url: "https://www.northwestpharmacy.com/product/albuterol" },
      canadaDrugs: { price: "$12", url: "https://www.canadadrugs.com/search?q=albuterol" },
      pharmacyChecker: { price: "from $10", url: "https://www.pharmacychecker.com/albuterol/" },
      manufacturer: { name: "Generic available", url: "https://www.goodrx.com/albuterol", savings: "Already low cost" },
    },
    insurance: {
      medicare: { covered: "Part D - usually covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Almost always covered", url: "https://www.goodrx.com/insurance" },
    }
  },
  "Viagra": {
    generic: "Sildenafil",
    category: "ED",
    strengths: ["25mg", "50mg", "100mg"],
    quantities: ["10 tablets", "30 tablets"],
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
      medicare: { covered: "Generally not covered", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Rarely covered", url: "https://www.goodrx.com/insurance" },
    }
  },
  "Lisinopril": {
    generic: "Lisinopril",
    category: "HBP",
    strengths: ["5mg", "10mg", "20mg", "40mg"],
    quantities: ["30 tablets", "90 tablets"],
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
  "Jardiance": {
    generic: "Empagliflozin",
    category: "HBP",
    strengths: ["10mg", "25mg"],
    quantities: ["30 tablets"],
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
      medicare: { covered: "Part D - varies by plan", url: "https://www.medicare.gov/drug-coverage-part-d" },
      goodrxInsurance: { note: "Often covered for diabetes", url: "https://www.goodrx.com/insurance" },
    }
  },
}

export const CATEGORIES = ["All", "GLP-1", "Inhaler", "ED", "HBP"]

export const SOURCES_CONFIG = [
  { key: "goodrx", label: "GoodRx", flag: "🇺🇸", type: "cash" },
  { key: "costplus", label: "Cost Plus Drugs", flag: "🇺🇸", type: "cash" },
  { key: "amazon", label: "Amazon Pharmacy", flag: "🇺🇸", type: "cash" },
  { key: "blink", label: "Blink Health", flag: "🇺🇸", type: "cash" },
  { key: "northwest", label: "Northwest Pharmacy", flag: "🇨🇦", type: "international" },
  { key: "canadaDrugs", label: "Canada Drugs Online", flag: "🇨🇦", type: "international" },
  { key: "pharmacyChecker", label: "PharmacyChecker", flag: "🌍", type: "international" },
]
