/* ==========================================================================
   ALEX MACMILLAN - SITE CONTENT DATA
   
   INSTRUCTIONS:
   1. To add a CASE: Copy a block inside CASES_DATA and fill in details.
   2. To add an ARTICLE: Copy a block inside ARTICLES_DATA.
   3. To add a TESTIMONIAL: Copy a block inside TESTIMONIALS_DATA.
   4. Be careful not to delete commas between items.
   ========================================================================== */

const CASES_DATA = [
    // --- 2025 CASES ---
    {
        title: "Mr Thomas Allen -v- Oolong Ltd",
        citation: "Case No: 6027054/2025",
        date: "2025",
        type: "Unlawful Deduction from Wages",
        confidential: "No",
        court: "London South Employment Tribunal",
        judge: "Employment Judge Walker",
        solicitor: "Rebekah Brown",
        firm: "Irwin Mitchell LLP",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "Mr Mills",
        status: "Successful",
        description: "Successful Final Hearing. The Tribunal found unlawful deductions of £29,166.66. While the Respondent alleged an oral agreement to reduce salary, the Tribunal applied <em>Kerr v The Sweater Shop</em> and <em>International Packaging v Balfour</em> to rule that, absent written notification of the variation terms <em>before</em> the deduction, the deductions violated s.13(2)(b) ERA 1996. The Tribunal further applied <em>Agnew</em> to establish a 'series of deductions' despite gaps in payment, preserving the full claim period.",
        significance: "s.13 ERA 1996 / Written Notification",
        key_case_law: [
            "<em>Chief Constable of PSNI v Agnew</em> [2023] UKSC 33",
            "<em>Kerr v The Sweater Shop (Scotland) Ltd</em> [1996] IRLR 424",
            "<em>International Packaging Corporation (UK) Ltd v Balfour</em> [2003] IRLR 11"
        ]
    },
    {
        title: "Agbotey v Maier UK Ltd",
        citation: "Case No: 6009509/2025",
        date: "2025",
        type: "Unfair Dismissal & Unlawful Deduction from Wages",
        confidential: "No",
        court: "Employment Tribunal (Midlands West)",
        judge: "EJ Wedderspoon",
        solicitor: "Amy Brokenshire", 
        firm: "George Green Solicitors LLP",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A", 
        status: "Concluded",
        description: "Successfully defended claims valued at £44,000 arising from the summary dismissal of a senior operator for gross negligence. The Tribunal found the dismissal fair following a 'shock-loading' incident involving a 13-tonne crane tool and a failure to follow mandatory reporting procedures.",
        significance: "Gross Misconduct / Health & Safety",
        key_case_law: [
           "<em>BHS v Burchell</em> [1978] IRLR 379"
        ]
    }, 
    {
        title: "Mr Lee Robinson -v-  Stephen John Williams TA/ National Property Buyers",
        citation: "Case No: 1303573/2025",
        date: "2025",
        type: "Unlawful Deduction from Wages",
        confidential: "No",
        court: "Employment Tribunal (Midlands West)",
        judge: "EJ Wedderspoon",
        solicitor: "Natassia Brown", 
        firm: "HCB Solicitors Limited",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A", 
        status: "Settled",
        description: "Breach of Contract / Unlawful Deductions in relation to commission payments",
        significance: "Commission payments",
        key_case_law: []
    }, 
    {
        title: "Miss Jacqueline Keddie Kelsall -v- Betsi Cadwaladr University Health Board",
        citation: "Case No: 1604319/2024",
        date: "2025",
        type: "Open Preliminary Hearing",
        confidential: "No",
        court: "Wales Employment Tribunal",
        judge: "EJ Lloyd-Lawrie",
        solicitor: "Rebekah Brown",
        firm: "Irwin Mitchell LLP",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "Mr Andrew Rhodes - No 5 Chambers",
        status: "Concluded",
        description: "Open Preliminary Hearing",
        significance: "Disability status",
        key_case_law: []
    },
    {
        title: "Mrs Asia Mahmood -v- Dawat e Islami UK",
        citation: "Case No: 6025015/2025",
        date: "2025",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Leeds Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (3 days).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mrs M Karch v Unipart Group Ltd",
        citation: "Case No: 1304180/2024",
        date: "2025",
        type: "Disability discrimination",
        confidential: "No",
        court: "Employment Tribunal (Midlands West)",
        judge: "EJ ",
        solicitor: "Instructing Solicitor", 
        firm: "HCB Solicitors Limited",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "John Horan (Cloisters)", 
        status: "Settled",
        description: "Multi-week disability discrimination claim",
        significance: "Disability discrimination",
        key_case_law: []
    }, 
    {
        title: "Alisha Kausar v (1) Our Lady and All Saints Catholic Multi Academy Company (2) TeacherActive Limited",
        citation: "Case No: 1304360/2024 & 13085996/2024",
        date: "2025",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Birmingham Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (7 days).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "John Lowe v Keble Heath Construction",
        citation: "Case No: 1300123/2025",
        date: "2025",
        type: "Whistleblowing & Victimisation",
        confidential: "No",
        court: "Employment Tribunal",
        judge: "EJ Smith",
        solicitor: "Direct Access",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Mr X (Counsel)",
        status: "Concluded",
        description: "Successfully defended claims of automatic unfair dismissal and whistleblowing detriment. Secured the withdrawal of all claims following the conclusion of the Claimant's evidence.",
        significance: "Whistleblowing Detriment",
        key_case_law: []
    },
    {
        title: "Mark Roberts -v- Cast Iron Welding Services Limited",
        citation: "Case No: 6018151/2024",
        date: "2025",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Leicester Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (4 days).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Professor Peter Lax -v- The United Lincolnshire Hospitals NHS Trust",
        citation: "Ref: 568MC635",
        date: "2025",
        type: "County Court Claim",
        confidential: "No",
        court: "Lincoln County Court",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (1 day).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mrs D Johnson V Prysmian Cables & Systems Ltd",
        citation: "Case No: 1300070/2024",
        date: "2025",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "West Midlands Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (10 days).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Nina Ogilvie -v- Alexander Optometrists",
        citation: "Case No: 6013922/2024",
        date: "2025",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Newcastle Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (3 days).",
        significance: "Final Hearing",
        key_case_law: []
    },

    // --- 2024 CASES ---
    {
        title: "F. Manshausen v IMI Precision Engineering",
        citation: "Case No: 1310744/2022",
        date: "2024",
        type: "Equality & Discrimination",
        confidential: "No",
        court: "Birmingham Employment Tribunal",
        judge: "Employment Judge Perry",
        solicitor: "Jane Doe",
        firm: "Irwin Mitchell",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "Ms C McCann",
        status: "Concluded",
        description: "Successfully represented the Claimant in a multi-day liability hearing. The Tribunal found the Claimant was unfairly dismissed and victimised following his grievance regarding the devaluation of his role upon returning from cancer-related absence. The redundancy process was found to be a sham.",
        significance: "Disability Discrimination / Sham Redundancy",
        key_case_law: [
            "Barclays Bank Plc v Kapur [1991] I.C.R. 208",
            "Hendricks v Commissioner of Police of the Metropolis [2003] IRLR 96",
            "Royal Mail Group Ltd v Jhuti [2018] UKEAT/0020/16",
            "Robertson v Bexley Community Centre [2003] IRLR 434",
            "Efobi v Royal Mail Group Ltd [2021] ICR 1263",
            "Hewage v Grampian Health Board [2012] UKSC 37",
            "Pnaiser v NHS England [2016] IRLR 170",
            "City of York Council v Grosset [2018] IRLR 746",
            "Gallop v Newport City Council 2014 IRLR 211",
            "Hardys & Hansons plc v Lax [2005] IRLR 726",
            "Martin v Devonshires Solicitors [2011] ICR 352",
            "Polkey v AE Dayton Services Ltd [1988] ICR 142",
            "Iceland Frozen Foods Ltd v Jones [1982] IRLR 439",
            "Safeway Stores plc v Burrell [1997] ICR 523"
        ]
    },
    {
        title: "John Bradley -v- Technical Drive",
        citation: "Case No: 6019242/2024",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Birmingham Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (4 days).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Miss C Ettore -v- Pro Support Limited",
        citation: "Case No: 2402575/2023",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Manchester",
        judge: "Employment Judge Leach",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Miss C Ettore brought claims against Pro Support Limited including unfair dismissal, detriments, and unauthorized deductions from wages. The tribunal dismissed the unfair dismissal claims as they were presented out of time and it was reasonably practicable to present them earlier. The claims relating to detriments and unauthorized wage deductions were allowed to proceed to further case management. Unfair dismissal (Employment Rights Act 1996 ss 94-98, s103A); Protection from detriments (Employment Rights Act 1996 s47B); Unauthorized deductions from wages (Employment Rights Act 1996 s13)",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mr Habila Tikon -v- (1) Mitie Limited (2) Her Majestys Revenue and Customs",
        citation: "Ref: EA-2023-000125-AT",
        date: "2024",
        type: "EAT Appeal",
        confidential: "No",
        court: "London Central by CVP on 16 December 2022",
        judge: "Employment Judge Hindmarch",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Appellant",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "The claimant, Mr Habila Tikon, brought claims against HMRC and Mitie Limited including detriment under whistleblowing provisions, unlawful deduction of wages, breach of contract, and unfair dismissal. The tribunal struck out all claims against HMRC and the claimant's unfair dismissal and detriment claims as out of time, allowing only the unlawful deduction from wages and breach of contract claims to proceed against Mitie Limited. The decision involved preliminary issues including the timing of claims, TUPE transfer questions, and the claimant's failure to provide evidence regarding means for a deposit order. Whistleblowing detriment (Employment Rights Act 1996 s47B); Unfair dismissal (Employment Rights Act 1996 ss 94-98, s103A); Unlawful deduction from wages (Employment Rights Act 1996 s13); Breach of contract; Time limits for claims (Employment Rights Act 1996 s111); TUPE transfer issues (Transfer of Undertakings (Protection of Employment) Regulations 2006)",
        significance: "Appeal",
        key_case_law: [
            "Adams v GKN Sankey Ltd (1980) IRLR 416",
            "Dixon v Stenor Ltd (1993) IRLR 28",
            "Saunders v Southend-on-Sea Borough Council (1984) ILR 372",
            "Service v. Dolby [2003] IRLR 694"
        ]
    },
    {
        title: "Marta Grobarcikova Gonczyova -v- Barchester Healthcare Ltd",
        citation: "Case No: 2205716/2023",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Bristol by CVP",
        judge: "Employment Judge Walters",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "Mrs. Marta Grobarcikova Gonczyova brought claims against Barchester Healthcare Ltd alleging disability discrimination arising under section 15 of the Equality Act 2010 and failure to make reasonable adjustments under section 21. The Tribunal found that although the claimant was disabled, the alleged unfavourable treatment and failure to make reasonable adjustments claims were not made out and dismissed both claims. The decision focused on whether the respondent's conduct and policies constituted discrimination or unreasonable failure to adjust workplace practices to accommodate the claimant's disabilities. Disability discrimination arising from disability (Equality Act 2010 s15); Duty to make reasonable adjustments (Equality Act 2010 s21); Disability-related harassment (Equality Act 2010 s26)",
        significance: "Final Hearing",
        key_case_law: [
            "Environment Agency v Rowan [2008] ICR 218",
            "Birtenshaw v Oldfield [2019] IRLR 946",
            "Archibald v Fife Council [2004] IRLR 651",
            "Trustees of Swansea University Pension Scheme v Williams [2018] UKSC 65"
        ]
    },
    {
        title: "Z v HRS Family Law Solicitors Ltd",
        citation: "Case No: 1303456/2024",
        date: "2024",
        type: "Equality & Discrimination",
        confidential: "Yes",
        court: "Employment Tribunal",
        judge: "EJ Brown",
        solicitor: "John Smith",
        firm: "Pinsent Masons",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Mr A (Counsel)",
        status: "Concluded",
        description: "Acted for the Respondent law firm in a sensitive disability discrimination claim arising from the performance management of a solicitor suffering from alcoholism.",
        significance: "Disability / Performance",
        key_case_law: []
    },
    {
        title: "Hasnain Visram -v- Boots Management Services Ltd",
        citation: "Case No: TBC",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "London Central Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (4 days).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "A Medina -v- PRODENT LONDON LTD",
        citation: "Case No: 2209044/2022",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "London Central Employment Tribunal",
        judge: "Employment Judge Webster",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Dr A Medina brought a claim against Prodent London Ltd for unlawful deductions from wages under section 13 of the Employment Rights Act 1996. The tribunal found that the employer made unauthorised deductions from the claimant’s pay in May, June, and July 2022, which were not authorised by statute, contract, or the claimant’s prior written consent, and ordered the respondent to pay £29,384.40 in gross sums to the claimant. The key issues revolved around whether the deductions were lawful under the terms of the Associate Agreement and whether proper notice or consent had been given. Unauthorised deductions from wages (Employment Rights Act 1996 s13); Contract terms and variations; Worker status under ERA 1996; Burden of proof in wage deduction claims",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mr Luke Salter -v- Muller UK & Ireland Group LLP",
        citation: "Case No: 1304966/2023",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Birmingham Employment Tribunal",
        judge: "Employment Judge Dimbylow",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "The claimant, Mr Luke Salter, brought a claim for constructive unfair dismissal against his employer, Muller UK & Ireland Group LLP. The Employment Tribunal found that the claim was not well-founded and dismissed it, concluding that the claimant had not established constructive unfair dismissal. Constructive unfair dismissal (Employment Rights Act 1996 ss 95-98)",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Alex John Boggs -v- Warrington & Halton Hospitals Foundation",
        citation: "Case No: 2402734/2022",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Liverpool",
        judge: "Employment Judge Aspinall",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "The claimant, John William Kennedy Boggs, brought claims against Warrington and Halton Teaching Hospitals NHS Foundation Trust for unfair dismissal, wrongful dismissal, and disability discrimination arising from autism, anxiety, and depression. The Tribunal found in favor of the respondent on unfair dismissal, wrongful dismissal, discrimination arising from disability, and harassment claims, but partially upheld the claim for failure to make reasonable adjustments. The claimant withdrew sex discrimination and direct/indirect disability discrimination claims during the hearing. Unfair dismissal (Employment Rights Act 1996 ss 94-98); Wrongful dismissal (common law contract principles); Disability discrimination (Equality Act 2010 ss 15, 20 - discrimination arising from disability and reasonable adjustments); Time limits for discrimination claims (Equality Act 2010 s 123); ACAS Code of Practice on Disciplinary and Grievance Procedures",
        significance: "Final Hearing",
        key_case_law: [
            "Birds v Croucher [1984] IRLR 425",
            "Abernethy v Mott Hay and Anderson [1974] ICR 323",
            "Polkey v AE Dayton [1987] IRLR 50",
            "Taylor v OCS [2006] EWCA Civ"
        ]
    },
    {
        title: "Mr Akeem Adesola -v- (1) Mitie (2) Kingdom Services Group",
        citation: "Case No: 2204229/2021",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "London Central Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (1 day).",
        significance: "Final Hearing",
        key_case_law: []
    },

    // --- 2023 CASES ---
    {
        title: "Darren Richardson & Andrew Parry -v- Müller UK & Ireland Group LLP",
        citation: "Case No: 1309392/2022 & 1302082/2023",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Birmingham Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (1 day).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Anahita Ansari -v- Prodent London Limited",
        citation: "Case No: 2201830/2023",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "London Central (in public, by video)",
        judge: "Employment Judge Klimov",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "The claimant, Ms Anahita Ansari, brought multiple complaints against Prodent London Limited which were heard over several days in a London Central Employment Tribunal. The tribunal found that none of the claimant’s complaints were well-founded and consequently dismissed the claim in full. No written reasons were provided unless requested, and the decision was issued promptly after the hearing. General Employment Claims (specific areas not detailed in the decision summary)",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mark Forsyth Taylor -v- Redcentric Solutions Limited",
        citation: "Case No: 1804275/2023",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Before:",
        judge: "Employment Judge Deeley",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "The claimant, Mr Mark Taylor, brought claims against Redcentric Solutions Limited for unpaid commission for February to April 2023 and wrongful dismissal regarding notice pay. The Tribunal found that the claimant was entitled to the commission payments, constituting unauthorised deductions from wages, but dismissed the wrongful dismissal claim as the respondent lawfully paid one week's notice in lieu during the claimant's probationary period. A separate remedy hearing was ordered to determine the exact amount of commission owed. Unauthorised deductions from wages (Employment Rights Act 1996 s13); Wrongful dismissal (common law contract principles and Employment Rights Act 1996 ss 94-98); Contractual terms and probationary period interpretation",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mr G Price -v- Fleet Express & Logistics Ltd",
        citation: "Case No: 1302825/2023",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "West Midlands Employment Tribunal (by CVP)",
        judge: "Employment Judge Routley",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "The key issue in Mr G Price v Fleet Express & Logistics Ltd was whether the claimant was unfairly dismissed following incidents involving alleged aggressive behavior towards his supervisor, Mr Pugh. The Tribunal found the claimant was unfairly dismissed but reduced the compensation by 75% due to contributory conduct, awarding the claimant £2,743.19. The decision hinged on conflicting accounts of the incidents, credibility assessments, and procedural fairness in the disciplinary process. Unfair dismissal (Employment Rights Act 1996 ss 94-98); Contributory fault in unfair dismissal (Employment Rights Act 1996 s 123); Procedural fairness in disciplinary processes",
        significance: "Final Hearing",
        key_case_law: ["Polkey v AE Dayton"]
    },
    {
        title: "Jan Godliman -v- London Borough of Waltham Forest",
        citation: "Case No: 3219922/2020",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "East London Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "Ms J Godliman brought claims against the London Borough of Waltham Forest alleging direct disability discrimination, discrimination arising from disability, harassment related to disability, and victimisation under the Equality Act 2010. The Tribunal dismissed the claims for direct disability discrimination and several complaints of discrimination and harassment following the Claimant's withdrawal, and found the remaining complaints and the victimisation claim to fail. Overall, all claims were dismissed. Disability discrimination (Equality Act 2010 ss 13, 15, 26, 27)",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "David Bannister -v- DPD Group UK Ltd",
        citation: "Case No: 3305117/2020",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Watford",
        judge: "Employment Judge Bedeau",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "The claimant, Mr David Bannister, who suffered from multiple disabilities including learning difficulties and severe hearing impairment, brought claims against DPD Group UK Ltd for disability discrimination and failure to make reasonable adjustments following his dismissal for gross misconduct. The Tribunal found the disability discrimination and failure to make reasonable adjustments claims well-founded, with the dismissal linked to issues arising from his disabilities rather than unrelated misconduct. The unfair dismissal claim was withdrawn due to insufficient continuous service. Disability discrimination (Equality Act 2010 s15); Failure to make reasonable adjustments (Equality Act 2010 ss 20-21); Unfair dismissal (Employment Rights Act 1996 ss 94-98) - withdrawn due to lack of qualifying service",
        significance: "Remedies",
        key_case_law: [
            "Environment Agency v Rowan [2008] IRLR 20",
            "Griffiths v Secretary of State [2016] IRLR 216",
            "Project Management Institute v Latif [2007] IRLR 576",
            "General Dynamics Information Technology Ltd v Carranza [2015] ICR 169"
        ]
    },
    {
        title: "Mr D Austin -v- Kingspan Ltd",
        citation: "Case No: 1307462/2020",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Birmingham by CVP",
        judge: "Employment Judge Dean",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Mr D Austin, a disabled employee, was found to have been unfairly dismissed by Kingspan Ltd in breach of the Employment Rights Act 1996. Although he withdrew some discrimination claims under the Equality Act 2010, the Tribunal found that he was subjected to unlawful disability discrimination under section 15 and awarded him compensation totaling £33,008.27 for unfair dismissal and injury to feelings. Unfair dismissal (Employment Rights Act 1996 s94); Disability discrimination (Equality Act 2010 ss6, 15); Withdrawal of discrimination claims under Equality Act 2010 ss13, 20, 21",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mr C Borg-Neal -v- Lloyds Banking Group",
        citation: "Case No: 692828",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Video Hearing",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Hearing Fixture.",
        significance: "Hearing",
        key_case_law: []
    },
    {
        title: "Michael Lambrianos -v- Nowy Styl UK Limited",
        citation: "Case No: 2201870/2022",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "London Central Employment Tribunal",
        judge: "Employment Judge Sutton",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "The claimant, Mr Michael Lambrianos, brought a claim against Nowy Styl UK Limited for unpaid commission on multiple sales. The Tribunal found the respondent owed the claimant £716.40 in commission but refused both parties' applications for costs, noting the claimant's claim largely failed and the respondent's defense was reasonable and pragmatic. Contractual entitlement to commission; Employment Tribunal procedure (Costs under Employment Tribunal Rules of Procedure 2013, Rule 76)",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mr Ismail Ismail -v- ASDA Stores Limited",
        citation: "Case No: 3302412/2022",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Watford",
        judge: "Employment Judge Din",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "Mr Ismail Ismail claimed constructive unfair dismissal against Asda Stores Limited, alleging denial of promotion opportunities and bullying by a senior manager, Mr Preston, which breached the implied term of trust and confidence. The Employment Tribunal found that the claimant was not constructively dismissed and dismissed the claim. The Tribunal considered whether the employer’s conduct justified resignation and whether the dismissal was fair, ultimately concluding the claim failed. Constructive unfair dismissal (Employment Rights Act 1996 ss 95-98); Implied term of trust and confidence; Unfair dismissal (Employment Rights Act 1996 ss 94-98); Internal grievance procedures; Employment contract law",
        significance: "Final Hearing",
        key_case_law: [
            "London Borough of Waltham Forest v Omilaju [2005] IRLR 35",
            "British Aircraft Corporation Ltd v Austin [1978] IRLR 332",
            "Western Excavating (ECC) Ltd v Sharp [1978] ICR 221",
            "Malik and Mahmud v BCCI [1997] ICR 606"
        ]
    },

    // --- 2022 CASES ---
    {
        title: "Mr C Vassallo -v- Sizedwell Clothing Ltd",
        citation: "Ref: 3204026/2022",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "East London Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (1 day).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Ms Shakila Devi Perumal -v- Cardiff University",
        citation: "Ref: 1601704/2021",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "On:",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing.",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Gillian Oxborrow & Others -v- Partnerships In Care",
        citation: "Ref: 3300169/2017",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Watford Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing.",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Adele Deane -v- Solihull Metropolitan Borough Council",
        citation: "Ref: 1307028/2020",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Birmingham Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (4 days).",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mr G Fuller -v- Lancashire County Council",
        citation: "Ref: 2414517/2021",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Manchester (hybrid (1st day) and",
        judge: "Employment Judge Mc",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "The key issue in Mr G Fuller's claim against Lancashire County Council was whether he was an employee or a casual worker during the period when alleged unauthorised deductions from his wages were made. The tribunal found that the claimant was not an employee but a casual worker and dismissed the claim for unauthorised deductions. The respondent had ceased offering shifts during an investigation period, which was not considered an unlawful deduction of wages. Employment status (Employment Rights Act 1996 s230); Unauthorised deductions from wages (Employment Rights Act 1996 ss13-27); Casual worker status; Jurisdictional issues in Employment Tribunal claims",
        significance: "Final Hearing",
        key_case_law: [
            "Societe Generale, London Branch v Geys [2013] ICR 117",
            "Cerberus Software Ltd v Rowley [2001] IRLR 160",
            "Ready Mixed Concrete (South East) Ltd v Minister of Pensions and National Insurance [1968] 2 QB 497"
        ]
    },
    {
        title: "N Lomotey v Mitie Limited",
        citation: "Ref: 2300279/2021",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "London South Employment Tribunal (by CVP)",
        judge: "Employment Judge Kelly",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "The key issue in this case was whether the claimant, Natasha Lomotey, was unfairly dismissed by Mitie Limited. The Employment Tribunal found in favor of the claimant, ruling that the dismissal was unfair and ordering a compensation payment of £12,000, with the proceedings adjourned to allow for settlement implementation. Unfair dismissal (Employment Rights Act 1996 ss 94-98)",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mr K Macleod -v- Mitie Group PLC",
        citation: "Ref: 3301008/2021",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Watford Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing.",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Samantha Zenda Ovies -v- Mahiul Muqit",
        citation: "Ref: 2200311/2021",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "London Central Employment Tribunal",
        judge: "Employment Judge Davidson",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "Alexander MacMillan",
        status: "Concluded",
        description: "The case concerned Ms Samantha Zenda Ovies' claim of unfair dismissal by Mr Mahiul Muqit, her former employer. The Tribunal found that the dismissal was unfair, awarded the claimant one day's holiday pay, and ordered payment of an outstanding £2,000 gross bonus from June 2020. The Tribunal also allowed either party to apply for a remedy hearing to determine further compensation or remedies. Unfair dismissal (Employment Rights Act 1996 ss 94-98); Holiday pay entitlement (Working Time Regulations 1998); Contractual bonus payments and remuneration terms",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Mr G Tuffen v Asda Stores Limited",
        citation: "Case No: 686651",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "East London Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing.",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Andrew Hemming -v- Ellisa Motors Limited",
        citation: "Ref: 1303462/2021",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "On:",
        judge: "Employment Judge Mensah",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "The claimant, Mr Andrew Hemming, brought claims against Ellisa Motors Limited for unpaid holiday pay, unfair dismissal, and redundancy. The tribunal found in favour of the claimant on the holiday pay claim, ordering the respondent to pay £1,843.80 for untaken accrued holiday. However, the claims for unfair dismissal and redundancy were dismissed. Holiday pay (Working Time Regulations 1998); Unfair dismissal (Employment Rights Act 1996 ss 94-98); Redundancy (Employment Rights Act 1996 ss 135-139)",
        significance: "Final Hearing",
        key_case_law: []
    },
    {
        title: "Ms Devi Sundar -v- Cardiff University",
        citation: "Case No: 683848",
        date: "2022",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Ms D Sundar brought multiple claims against Cardiff University including unfair dismissal, detriments for protected disclosures, race, disability and marriage discrimination, breach of contract, and victimisation. After several preliminary hearings and amendment applications, all claims were dismissed by the Employment Tribunal, which found no evidence to support unfair dismissal, discrimination, victimisation, or breach of contract. The claimant was also found not to be disabled under the Equality Act 2010, resulting in dismissal of the reasonable adjustments claim. Unfair dismissal (Employment Rights Act 1996 ss 94-98, s103A); Protected disclosures/detriment (Employment Rights Act 1996 s47B); Breach of contract; Direct race discrimination (Equality Act 2010 s13); Direct marriage discrimination (Equality Act 2010 s13); Disability discrimination and reasonable adjustments (Equality Act 2010 ss 6, 20, 21); Victimisation (Equality Act 2010 s27)",
        significance: "Final Hearing",
        key_case_law: [
            "Ellis v Bacon [2023] IRLR 262",
            "Hewage v Grampian Health Board [2012] IRLR 870",
            "Pnaiser v NHS England [2016] IRLR 170",
            "Madarassy v Nomura International [2007] IRLR 246",
            "Nagarajan v London Regional Transport [1999] IRLR 572",
            "Shamoon v Chief Constable of the Royal Ulster Constabulary [2003] IRLR 285"
        ]
    },

    // --- 2021 CASES ---
    {
        title: "L Ali -v- Mitie Limited",
        citation: "Case No: N/A",
        date: "2021",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Pre-Hearing Conference.",
        significance: "Preliminary Hearing",
        key_case_law: []
    },
    {
        title: "Jhuti -v- Royal Mail Group Ltd",
        citation: "Case No: N/A",
        date: "2021",
        type: "EAT Appeal",
        confidential: "No",
        court: "Employment Appeal Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Appellant",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "EAT Appeal / Remission Hearing regarding high-profile whistleblowing claim.",
        significance: "Whistleblowing / Appeal",
        key_case_law: []
    },
    {
        title: "Mr D Kuma -v- ASDA Stores Limited",
        citation: "Case No: N/A",
        date: "2021",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Employment Tribunal proceedings.",
        significance: "Employment Tribunal",
        key_case_law: []
    },
    {
        title: "Mrs Z Mason -v- K V Hartshorne (Chemists) Limited",
        citation: "Case No: N/A",
        date: "2021",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Employment Tribunal proceedings.",
        significance: "Employment Tribunal",
        key_case_law: []
    },
    {
        title: "Shilen Mehta -v- Pomvom UK Limited",
        citation: "Case No: N/A",
        date: "2021",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Employment Tribunal proceedings.",
        significance: "Employment Tribunal",
        key_case_law: []
    },
    {
        title: "Carvell Appeal",
        citation: "Case No: N/A",
        date: "2021",
        type: "EAT Appeal",
        confidential: "No",
        court: "Employment Appeal Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Appellant",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Appeal Hearing.",
        significance: "Appeal",
        key_case_law: []
    },
    {
        title: "Kaye Tranter -v- [Respondent]",
        citation: "Case No: N/A",
        date: "2021",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Pre-Trial proceedings.",
        significance: "Employment Tribunal",
        key_case_law: []
    },

    // --- OLDER CASES ---
    {
        title: "Hare Wines Ltd v Kaur & Anor",
        citation: "[2019] EWCA Civ 216",
        date: "2019",
        type: "TUPE",
        confidential: "No",
        court: "Court of Appeal",
        judge: "Lord Justice Underhill",
        solicitor: "Appellate Work",
        firm: "Various",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "QC (Respondent)",
        status: "Concluded",
        description: "Represented the successful Claimant in the Court of Appeal in a key case concerning the proper application of the TUPE ‘sole or principal reason’ test.",
        significance: "TUPE Leading Authority",
        key_case_law: []
    }
];

const ARTICLES_DATA = [
   {
        id: "equal-pay-perkins",
        title: "The 'Reason Why' Fallacy and Proportionality in Equal Pay: An Analysis of Perkins v Marston (Holdings) Ltd [2025]",
        date: "December 2025",
        summary: "The Employment Appeal Tribunal clarifies the burden of proof for material factor defences and corrects a fundamental error in applying the Essop principle to indirect discrimination.",
        content: `
            <div class="article-body">
                <p>In the complex arena of Equal Pay litigation, the battleground often shifts from "equal value" to the "material factor defence." The recent Employment Appeal Tribunal (EAT) judgment in <em>Perkins v Marston (Holdings) Ltd [2025] EAT 170</em> provides critical clarity on three pillars of this defence: the cogency of evidence required, the correct test for indirect discrimination, and the granularity required when assessing proportionality.</p>
                <p>The case concerned a startling pay disparity: Ms Perkins, a Head of Enforcement, was paid approximately £51,500, while her male comparators—Divisional Enforcement Directors doing work of equal value—received nearly £92,000. The employer relied on market forces and the necessity of recruiting from a specific pool of "Enforcement Agents" (90% male) to justify the gap.</p>
                 
                <h3>The Evidential Threshold: No "Higher Standard"</h3>
                <p>A persistent question in Equal Pay disputes is the level of evidence required to prove a material factor. The Claimant argued that following <em>BMC Software Ltd v Shaikh</em>, employers face a heightened threshold of "cogency and particularisation."</p>
                <p>The EAT rejected this interpretation. While an opaque pay system (as was present here) demands convincing evidence to rebut the presumption of discrimination, there is no special, elevated burden of proof for Equal Pay cases. The standard remains the civil balance of probabilities. As the EAT noted, if a Tribunal accepts oral evidence that a specific sum was necessary to retain an employee, that factual finding stands, even in the absence of a pristine paper trail.</p>

                <h3>Indirect Discrimination: The "Reason Why" Trap</h3>
                <p>Perhaps the most legally significant aspect of this judgment is the correction of the Employment Tribunal's approach to particular disadvantage. The Tribunal had initially rejected the claim of indirect discrimination, reasoning that Ms Perkins personally had not been deterred from entering the male-dominated "Enforcement Agent" pool.</p>
                <p>The EAT held this to be a fundamental error of law. Citing the Supreme Court in <em>Essop v Home Office</em>, the EAT reiterated that a claimant does not need to prove <em>why</em> a provision puts women at a disadvantage; they only need to prove that it <em>does</em>.</p>
                <p>The Tribunal had impermissibly engaged in a factual inquiry into the sociological reasons for the male dominance in the recruitment pool (e.g., risk of violence). The EAT clarified that such an inquiry is irrelevant. If the recruitment pool for the higher-paid roles is 90% male, and that requirement drives the pay disparity, the disadvantage is established <em>prima facie</em>. The "reason why" is distinct from the fact of the disadvantage itself.</p>

                <h3>Proportionality: Beware the "All or Nothing" Approach</h3>
                <p>On the cross-appeal regarding objective justification, the EAT provided a stern reminder regarding the detailed analysis required under <em>Hardy & Hansons plc v Lax</em>. The Tribunal had rejected the employer's justification defence essentially because the £40,000 pay gap was considered excessive, suggesting the employer could have recruited from a wider, cheaper pool.</p>
                <p>The EAT found this analysis lacking. Proportionality is not a binary switch. The Tribunal erred by adopting an "all or nothing" approach—implying that because the <em>entire</em> gap wasn't necessary, the defence failed completely.</p>
                <p>Instead, the EAT mandated a more critical evaluation: the Tribunal should have analyzed <em>what part</em> of the pay differential was proportionate to the legitimate aim of retention. Even if a £40,000 premium was disproportionate, a smaller premium might have been justified. By failing to weigh the specific business risks (loss of staff and certification) against the discriminatory impact, the Tribunal failed to perform the necessary balancing exercise.</p>

                <h3>The Takeaway</h3>
                <p><em>Perkins</em> serves as a vital course correction. For claimants, it reinforces that statistical disadvantage in a recruitment pool is sufficient to shift the burden of proof without needing to explain the sociological causes. For employers, it offers a lifeline on the "cogency" of evidence but demands a rigorous, granular justification for specific pay premiums. You cannot simply wave the flag of "market forces"; you must be prepared to justify the precise quantum of the gap.</p>
            </div>
        `
    }, 
   {
        id: "payroll-paradox",
        title: "The Payroll Paradox: When \"the Computer Says No\" - Holiday Pay During Sick Leave",
        date: "November 2025",
        summary: "Blocking a sick employee from accessing holiday pay is not merely a breach of the Working Time Regulations: it can be the catalyst for successful discrimination claims.",
        content: `
            <div class="article-body">
                <p>In employment law, few areas cause as much administrative friction as the overlap between long-term sickness absence and statutory annual leave. A scenario crossing my desk with surprising frequency involves a long-term sick employee - perhaps on half-pay or nil pay with Statutory Sick Pay (SSP) - who requests to take a week of annual leave.</p>
                <p>The immediate reaction from HR or payroll may be a reflex refusal: “You cannot be on holiday if you are signed off sick. We need a fit note, not a holiday request.” While intuitively logical to the non-lawyer, this administrative rigidity is fraught with legal risk.</p>
                 
                <h3>The "Stringer" Principle: Two Sides of the Same Coin</h3>
                <p>The foundational misunderstanding often lies in the belief that sickness and holiday are mutually exclusive statuses. They are not. Since the seminal decision in <em>Stringer and others v Revenue and Customs Commissioners [2009] ICR 932</em>, it has been established that workers on long-term sick leave continue to accrue statutory annual leave.</p>
                <p>Crucially, the Grand Chamber of the Court of Justice ruled that the Directive treats the entitlement to leave and the payment for it as inseparable:</p>
                <blockquote>"Directive 2003/88 treats entitlement to annual leave and to a payment on that account as being two aspects of a single right." — Stringer, Paragraph 60</blockquote>

                <h3>Codification: The 2024 Amendments</h3>
                <p>Effective 1 January 2024, the Employment Rights (Amendment, Revocation and Transitional Provision) Regulations 2023 amended the Working Time Regulations 1998 (WTR) to explicitly codify these principles. Regulation 13(15) now expressly states that where a worker is unable to take annual leave due to sickness, they are entitled to carry that leave forward into the following leave year.</p>
                <p>Relying on <em>NHS Leeds v Larner [2012] EWCA Civ 1034</em>, this carry-over is automatic. If sickness prevents a worker from taking leave, they do not need to submit a formal request to carry it over; the right is preserved by operation of law.</p>

                <h3>The Counter-Notice Caveat: Regulation 15</h3>
                <p>Employers often clutch at Regulation 15 of the WTR as a shield to refuse specific dates. However, because Regulation 13(15) guarantees the right to carry over leave lost due to sickness, refusing a request merely defers the liability. The employer is simply pushing a financial snowball down the hill.</p>

                <h3>The "Normal Remuneration" Trap</h3>
                <p>In <em>British Gas Trading Ltd v Lock [2017] ICR 1</em>, the Court of Appeal affirmed that holiday pay must reflect "normal remuneration"—including commission and regular overtime. Preventing a sick worker from swapping SSP for full Holiday Pay subjects them to a financial detriment.</p>

                <h3>When Administration Becomes Discrimination</h3>
                <p>This "computer says no" approach is high-risk under the Equality Act 2010. If the sickness arises from a disability, refusing a request to access full pay via annual leave may constitute discrimination arising from disability (Section 15) or a failure to make reasonable adjustments (Section 20).</p>

                <h3>The Takeaway</h3>
                <p>The law is unsympathetic to administrative inconvenience. As established in Stringer, reinforced by Lock, and now codified in the 2024 WTR amendments, the right to paid annual leave is robust. For legal practitioners and HR professionals, the advice is simple: when a long-term sick employee asks to take a holiday, the answer should almost always be "yes."</p>
            </div>
        `
    },
    {
        id: "tupe-defence",
        title: "No 'personal reasons' defence in TUPE automatically unfair dismissals",
        date: "November 2024",
        summary: "Analyzing the Court of Appeal's decision in Hare Wines Ltd v Kaur & Anor. The judgment clarifies the application of the 'sole or principal reason' test.",
        content: `
            <div class="article-body">
                <p>This article addresses the implications of the Court of Appeal's decision in <em>Hare Wines Ltd v Kaur & Anor [2019] EWCA Civ 216</em>, a case in which I acted for the successful Claimant at first instance, in the EAT, and in the Court of Appeal.</p>
                <p>The judgment clarifies the application of the 'sole or principal reason' test under the Transfer of Undertakings (Protection of Employment) Regulations 2006 (TUPE). It firmly establishes that employers cannot rely on a vague defence of 'personal reasons' to avoid liability for automatically unfair dismissal.</p>
                <h3>Key Takeaways</h3>
                <ul>
                    <li>The 'sole or principal reason' test is strict.</li>
                    <li>Personal friction between employee and new management is often connected to the transfer itself.</li>
                </ul>
            </div>
        `
    },
    {
        id: "prospects-percentages",
        title: "What do percentage figures mean when stating a legal case’s prospects?",
        date: "September 2024",
        summary: "Clients often ask how I arrive at a '60%' or '70%' chance of success. This article breaks down the methodology behind legal probability.",
        content: `
            <div class="article-body">
                <p>More than once, having drafted legal advice and distilled my opinion on prospects of success into a percentage figure, the client has come back to me and questioned how I arrived at it.</p>
                <p>Is it a mathematical calculation? A gut feeling? This article explores the accepted definitions of legal risk (e.g., 'Reasonable Prospects' vs 'Good Prospects') and how they map to percentages.</p>
            </div>
        `
    },
    {
        id: "prosecutors-fallacy",
        title: "The Prosecutor’s Fallacy in Workplace Investigations",
        date: "July 2024",
        summary: "How statistical errors and cognitive biases can derail disciplinary investigations. A lesson from criminal law applied to employment disputes.",
        content: `
            <div class="article-body">
                <p>This is the classic illustration: a murder takes place. The forensics team identify hair from the crime scene. A DNA test is carried out, indicating that someone with a previous conviction who lives in the same town is a match.</p>
                <p>In employment investigations, a similar fallacy occurs when an investigator assumes that because an event <em>could</em> have happened a certain way, it <em>must</em> have happened that way, ignoring other probabilities.</p>
            </div>
        `
    },
    {
        id: "forced-distribution",
        title: "On Forced Distribution Performance Management",
        date: "May 2024",
        summary: "In 2019 the UK’s civil service moved away from forced distributions. Why this management style is legally risky.",
        content: `
            <div class="article-body">
                <p>In 2019 the UK’s civil service changed its mind about its use of forced distributions, deciding instead to move to more flexible, non-mandatory objective setting. This article explores the discrimination risks inherent in 'bell curve' performance ranking systems.</p>
            </div>
        `
    },
    {
        id: "employment-casino",
        title: "The Employment Law Casino",
        date: "January 2024",
        summary: "How to guess your award (without paying lawyers). A look at the Vento bands and Schedule of Loss calculations.",
        content: `
            <div class="article-body">
                <p>Imagine that, for whatever reason, you do not wish to engage a lawyer. Perhaps they are too expensive; perhaps lawyers do not have your trust. This article explains how Tribunals calculate awards, removing the mystery from the 'casino' of litigation.</p>
            </div>
        `
    }
];

const TESTIMONIALS_DATA = [
    {
        text: "Please pass our thanks on to Alex – he really did an excellent job of representing us and sounded like he knew all about tool setting and overhead crane use!",
        author: "Partner",
        firm: "Leading Regional Employment Firm",
        date: "December 2025"
    },
    {
        text: "Alex provided clear, pragmatic advice that helped us navigate a very tricky TUPE situation. His strategic approach made all the difference.",
        author: "HR Director",
        firm: "National Logistics Company",
        date: "August 2024"
    },
    {
        text: "A superb advocate who was incredibly well-prepared. He put the client at ease and secured a fantastic result in the Tribunal.",
        author: "Senior Associate",
        firm: "Legal 500 Firm",
        date: "March 2024"
    }
];
