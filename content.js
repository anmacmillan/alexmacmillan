/* ==========================================================================
   ALEX MACMILLAN - SITE CONTENT DATA
   
   INSTRUCTIONS:
   1. To add a CASE: Copy a block inside CASES_DATA and fill in details.
   2. To add an ARTICLE: Copy a block inside ARTICLES_DATA.
   3. Be careful not to delete commas between items.
   ========================================================================== */

const CASES_DATA = [
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
