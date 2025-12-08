/* ==========================================================================
   ALEX MACMILLAN - SITE CONTENT DATA
   
   INSTRUCTIONS:
   1. To add a CASE: Copy a block inside CASES_DATA and fill in details.
   2. To add an ARTICLE: Copy a block inside ARTICLES_DATA.
   3. Be careful not to delete commas between items.
   ========================================================================== */

const CASES_DATA = [
    // --- 2025 CASES ---
    {
        title: "Mr Thomas Allen -v- Oolong Ltd",
        citation: "Case No: 6027054/2025",
        date: "2025",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "London South Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (1 day).",
        significance: "Final Hearing"
    },
    {
        title: "Agbotey v Maier UK Ltd",
        citation: "Case No: 6009509/2025",
        date: "2025",
        type: "Unfair Dismissal & Unlawful Deduction from Wages",
        confidential: "No",
        court: "Employment Tribunal (Midlands West)",
        judge: "EJ Wedderspoon",
        solicitor: "Instructing Solicitor", 
        firm: "George Green Solicitors LLP",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A", 
        status: "Concluded",
        description: "Successfully defended claims valued at £44,000 arising from the summary dismissal of a senior operator for gross negligence. The Tribunal found the dismissal fair following a 'shock-loading' incident involving a 13-tonne crane tool and a failure to follow mandatory reporting procedures.",
        significance: "Gross Misconduct / Health & Safety"
    }, 
    {
        title: "Mr Lee Robinson -v-  Stephen John Williams TA/ National Property Buyers",
        citation: "Case No: 1303573/2025",
        date: "2025",
        type: "Unlawful Deduction from Wages",
        confidential: "No",
        court: "Employment Tribunal (Midlands West)",
        judge: "EJ Wedderspoon",
        solicitor: "Instructing Solicitor", 
        firm: "HCB Solicitors Limited",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A", 
        status: "Settled",
        description: "Breach of Contract / Unlawful Deductions in relation to commission payments",
        significance: "Commission payments"
    }, 
    {
        title: "Miss Jacqueline Keddie Kelsall -v- Betsi Cadwaladr University Health Board",
        citation: "Case No: 1604319/2024",
        date: "2025",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Wales Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (4 days).",
        significance: "Final Hearing"
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
        significance: "Final Hearing"
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
        significance: "Disability discrimination"
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
        significance: "Final Hearing"
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
        significance: "Whistleblowing Detriment"
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
        significance: "Final Hearing"
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
        significance: "Final Hearing"
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
        significance: "Final Hearing"
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
        significance: "Final Hearing"
    },

    // --- 2024 CASES ---
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
        significance: "Final Hearing"
    },
    {
        title: "Miss C Ettore -v- Pro Support Limited",
        citation: "Case No: 2402575/2023",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Manchester Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (5 days).",
        significance: "Final Hearing"
    },
    {
        title: "Mr Habila Tikon -v- (1) Mitie Limited (2) Her Majestys Revenue and Customs",
        citation: "Ref: EA-2023-000125-AT",
        date: "2024",
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
        description: "Appeal Hearing (1 day).",
        significance: "Appeal"
    },
    {
        title: "Marta Grobarcikova Gonczyova -v- Barchester Healthcare Ltd",
        citation: "Case No: 2205716/2023",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Bristol Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (4 days).",
        significance: "Final Hearing"
    },
    {
        title: "F. Manshausen v IMI Precision Engineering",
        citation: "Case No: 1302345/2024",
        date: "2024",
        type: "Equality & Discrimination",
        confidential: "No",
        court: "Employment Tribunal",
        judge: "EJ Jones",
        solicitor: "Jane Doe",
        firm: "Irwin Mitchell",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "Ms Y (Counsel)",
        status: "Concluded",
        description: "Successfully represented the Claimant in a 7-day disability discrimination and victimisation claim concerning detrimental treatment during and after sickness absence for cancer treatment.",
        significance: "Disability Discrimination"
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
        significance: "Disability / Performance"
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
        significance: "Final Hearing"
    },
    {
        title: "A Medina -v- PRODENT LONDON LTD",
        citation: "Case No: 2209044/2022",
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
        description: "Final Hearing (3 days).",
        significance: "Final Hearing"
    },
    {
        title: "Mr Luke Salter -v- Muller UK & Ireland Group LLP",
        citation: "Case No: 1304966/2023",
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
        description: "Final Hearing (3 days).",
        significance: "Final Hearing"
    },
    {
        title: "Alex John Boggs -v- Warrington & Halton Hospitals Foundation",
        citation: "Case No: 2402734/2022",
        date: "2024",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Liverpool Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Claimant",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (9 days).",
        significance: "Final Hearing"
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
        significance: "Final Hearing"
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
        significance: "Final Hearing"
    },
    {
        title: "Anahita Ansari -v- Prodent London Limited",
        citation: "Case No: 2201830/2023",
        date: "2023",
        type: "Employment Tribunal Claim",
        confidential: "No",
        court: "Central London Employment Tribunal",
        judge: "",
        solicitor: "Instructing Solicitor",
        firm: "N/A",
        client: "Respondent",
        leading: "Sole Counsel",
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (4 days).",
        significance: "Final Hearing"
    },
    {
        title: "Mark Forsyth Taylor -v- Redcentric Solutions Limited",
        citation: "Case No: 1804275/2023",
        date: "2023",
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
        description: "Final Hearing (1 day).",
        significance: "Final Hearing"
    },
    {
        title: "Mr G Price -v- Fleet Express & Logistics Ltd",
        citation: "Case No: 1302825/2023",
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
        description: "Final Hearing (2 days).",
        significance: "Final Hearing"
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
        opposing: "N/A",
        status: "Concluded",
        description: "Final Hearing (5 days).",
        significance: "Final Hearing"
    },
    {
        title: "David Bannister -v- DPD Group UK Ltd",
        citation: "Case No: 3305117/2020",
        date: "2023",
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
        description: "Remedies Hearing.",
        significance: "Remedies"
    },
    {
        title: "Mr D Austin -v- Kingspan Ltd",
        citation: "Case No: 1307462/2020",
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
        description: "Final Hearing (5 days).",
        significance: "Final Hearing"
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
        significance: "Hearing"
    },
    {
        title: "Michael Lambrianos -v- Nowy Styl UK Limited",
        citation: "Case No: 2201870/2022",
        date: "2023",
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
        description: "Final Hearing (3 days).",
        significance: "Final Hearing"
    },
    {
        title: "Mr Ismail Ismail -v- ASDA Stores Limited",
        citation: "Case No: 3302412/2022",
        date: "2023",
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
        description: "Final Hearing (3 days).",
        significance: "Final Hearing"
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
        significance: "TUPE Leading Authority"
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
