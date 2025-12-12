// Employment Tribunal Cases Database
// Generated with comprehensive research, verification, jurisdiction classification, standardized solicitor information, and starred field
// Last updated: 2025-12-10

// --- CASE LAW SUMMARIES (For Tooltips) ---
const CASE_LAW_DICTIONARY = {
    "Chief Constable of PSNI v Agnew": "Supreme Court ruling: A gap of 3+ months does not automatically break a 'series of deductions' for unlawful wages.",
    "LQP v City of York Council [2022] EAT 196": "The Appellant (Claimant before the Tribunal) contended that an Employment Judge had erred in law in refusing an application to amend so as to permit him to bring a claim of disability discrimination based upon perceived, rather than actual, disability, and, in respect of the refusal of an anonymity order. The appeal was allowed in respect of both grounds of appeal. The Judge erred in his approach to the application for amendment by, arguably, ‘short-cutting’ the required and evaluration of the relative hardship of granting or refusing the amendment. In respect of the anonymity order, the Judge erred in that he failed to have proper regard to new evidence and consider and balance the Claimant’s Article 2",
    "F v J": "EAT [2025]: In applications for anonymity based on future employability, the claimant need not prove objective harm on the balance of probabilities. The test is whether there is a 'reasonable foundation' for the subjective fear.",
    "Fallows v News Group Newspapers": "EAT [2016]: Tribunals retain jurisdiction to regulate privacy orders even after a claim is withdrawn. Settlement creates a 'legitimate expectation' of privacy, but this does not automatically trump Open Justice.",
    "Queensgate Investments v Millet": "EAT [2021]: Commercial embarrassment or reputational damage is insufficient for a private hearing. The respondent must prove 'catastrophic consequences' (e.g. insolvency) that would prevent justice from being done.",
    "Millicom Services v Clifford": "Court of Appeal: Subjective fears of harm need not be 'well-founded' to justify an order; the question is whether the administration of justice would be prejudiced without protection.",
    "R v Chief Registrar of Friendly Societies ex p New Cross": "High Court: Exceptional authority that a hearing may be private if publicity would destroy the subject matter of the litigation (e.g. cause immediate collapse of a building society).",
    "Kerr v The Sweater Shop": "EAT held that a notice posted on a noticeboard does not constitute written notification of a deduction term to the individual.",
    "International Packaging Corporation (UK) Ltd v Balfour": "Unilateral reduction in hours/pay without contract term is an unlawful deduction.",
    "BHS v Burchell": "The classic test for unfair dismissal misconduct: Genuine belief, reasonable grounds, reasonable investigation.",
    "London City Airport Limited v Chacko": "Interim Relief test: Is it 'likely' the claimant will succeed at trial? A summary assessment.",
    "Iceland Frozen Foods v Jones": "Established the 'band of reasonable responses' test. Tribunals must not substitute their own view for the employer's.",
    "Kuzel v Roche Products Ltd": "Burden of proof in whistleblowing dismissal: Employer proves the reason; if they fail, Tribunal may infer it was the protected disclosure.",
    "Darnton v University of Surrey": "Whistleblowing: The worker must have a 'reasonable belief' the disclosure tends to show a failure, even if factually wrong.",
    "Fecitt v NHS Manchester": "Whistleblowing detriment: The disclosure need only 'materially influence' the employer's negative treatment.",
    "Williams v Compair Maxam Limited": "Redundancy fairness: Guidelines on selection pools, objective criteria, consultation, and alternative employment.",
    "Panayiotou v Kernaghan": "Distinction between the protected disclosure itself and the 'unreasonable manner' of making it (which can be a fair reason for dismissal).",
    "Harrow London Borough v Knight": "Whistleblowing detriment requires the employer's act to be done 'on the ground that' the disclosure was made.",
    "Blackbay Ventures Ltd v Gahir": "Procedural guidance for Tribunals in whistleblowing cases: Must identify each disclosure and detriment separately.",
    "Dyke v Hereford and Worcester County Council": "Redundancy: Confirmed the LEA's residual power to dismiss lecturers.",
    "Abernethy v Mott Hay and Anderson": "Reason for dismissal is the 'set of facts or beliefs' operating on the employer's mind.",
    "Aziz v Trinity Street Taxis Ltd": "Victimisation: There must be a causal link between the protected act and the expulsion/detriment.",
    "Bailey v BP Oil Kent Refinery": "Confirmed 'band of reasonable responses' test applies to the employer's decision to treat misconduct as sufficient for dismissal.",
    "Barton v Investec Henderson Crosthwaite Securities Ltd": "Equal Pay/Discrimination: Guidelines on the burden of proof where pay systems are opaque.",
    "Berriman v Delabole Slate Limited": "TUPE: Harmonising terms and conditions is not an 'ETO' reason; dismissal for this reason is automatically unfair.",
    "Boys and Girls Welfare Society v McDonald": "Tribunals must not substitute their own view for the employer's reasonable investigation in misconduct cases.",
    "Chief Constable of Lincolnshire Police v Stubbs": "Vicarious Liability: Social gatherings immediately after work can be 'in the course of employment'.",
    "Courtaulds Northern Spinning Ltd v Sibson": "Constructive Dismissal: Employer requiring transfer within mobility clause was not a fundamental breach.",
    "Courtaulds Northern Textiles Ltd v Andrew": "Implied term of trust and confidence: Unjustified criticism ('you can't do the job') can breach this term.",
    "Environment Agency v Rowan": "Reasonable Adjustments: Must identify the PCP, the physical feature, and the substantial disadvantage before assessing reasonableness.",
    "Ezsias v North Glamorgan NHS Trust": "Strike Out: Claims with disputed core facts (especially whistleblowing) should rarely be struck out without a trial.",
    "Faye v North Yorkshire County Council": "SOSR: The expiry of a genuinely temporary contract can be 'Some Other Substantial Reason' for dismissal.",
    "G McFall and Co Ltd v Curran": "Contributory Fault: The percentage reduction for employee conduct must be applied to both basic and compensatory awards.",
    "Green v SIG Trading Ltd": "Territorial Jurisdiction: Expatriate employees need a 'sufficiently strong connection' to Great Britain.",
    "HM Prison Service v Dolby": "Strike Out/Deposit Orders: Guidance on the 'reasonable prospect of success' test.",
    "Hemdan v Ishmail": "Deposit Orders: Must be proportionate to the claimant's means and not block access to justice.",
    "Hewage v Grampian Health Board": "Burden of Proof: If the Tribunal can make positive findings of fact, the burden of proof mechanism is academic.",
    "Hill v Governing Body of Great Tey Primary School": "Contributory Fault: Reductions must be rational and consider rights like freedom of expression.",
    "Hilton v Shiner Ltd": "Constructive Dismissal: Unilateral demotion/change of role without pay cut can still be a fundamental breach.",
    "Lawson v Serco Ltd": "Territorial Jurisdiction: Established exceptions for 'expatriate employees' and those in 'British enclaves'.",
    "Leaney v Loughborough University": "Constructive Dismissal: Delay in resigning does not automatically affirm the contract if the employee was negotiating.",
    "Lewis v Motorworld Garages Limited": "Last Straw Doctrine: A series of minor acts can cumulatively amount to a breach of trust and confidence.",
    "Malik v BCCI": "'Stigma damages' are recoverable if an employer's corrupt business destroys an employee's future employability.",
    "Murphy v Epsom College": "Redundancy definition: Focus is on the 'kind of work' ceasing or diminishing, not the specific duties.",
    "Naeem v Secretary of State for Justice": "Indirect Discrimination: No need to prove the 'reason why' a PCP disadvantages a group, only that it does.",
    "Nagarajan v London Regional Transport": "Victimisation: Motive is irrelevant; subconscious influence by the protected act is sufficient.",
    "Omilaju v Waltham Forest London Borough Council": "Last Straw: The final act need not be a breach itself, but cannot be 'utterly trivial' or reasonable conduct.",
    "Pedersen v Camden London Borough Council": "Constructive Dismissal is an objective test of whether conduct destroyed trust and confidence.",
    "Pfaffinger v City of Liverpool Community College": "Expiry of fixed-term contracts due to lack of work/funding is a redundancy.",
    "Polkey v AE Dayton Services": "Procedural unfairness makes a dismissal unfair, but compensation can be reduced if dismissal would have happened anyway.",
    "Rowstock Ltd v Jessemey": "Post-employment victimisation (e.g., bad references) is covered by the Equality Act 2010.",
    "Salford Royal NHS Foundation Trust v Roldan": "Investigations must be particularly rigorous where the consequences for the employee (e.g. deportation) are severe.",
    "Shamoon v Chief Constable of the Royal Ulster Constabulary": "Detriment test: Is it reasonable for the worker to feel disadvantaged? Also, focus on the 'reason why'.",
    "Smith v City of Glasgow District Council": "Employer cannot rely on reasons for dismissal that were not in their mind at the time.",
    "Steen v ASP Packaging Ltd": "Contributory Fault: Requires blameworthy conduct that actually caused or contributed to the dismissal.",
    "Tolson v Governing Body of Mixenden Community School": "Employee failure to use grievance procedure does not prevent a constructive dismissal claim.",
    "Warburton v The Chief Constable of Northamptonshire Police": "Detriment: A very broad test. Delaying a job offer due to a past claim is a detriment.",
    "Wong v Igen Ltd": "Burden of Proof: Two-stage test guidance. Claimant proves facts; burden shifts to employer to explain.",
    "Anya v University of Oxford": "Discrimination can be inferred from a wider picture of unreasonable treatment, not just the specific act.",
    "London Borough of Islington v Ladele": "Religious Discrimination: Employer can enforce neutral policies (e.g. dignity at work) even if they impact religious manifestation.",
    "Richmond Pharmacology Ltd v Dhaliwal": "Harassment: 'Effect' on the victim matters more than 'intent', provided the feeling is reasonable.",
    "Jones v Tower Boot Co Ltd": "Vicarious Liability: Employer liable for racial abuse by colleagues at work.",
    "Nottinghamshire County Council v Meikle": "Reasonable Adjustments: Can extend to paying full pay during disability-related absence in some cases.",
    "Bahl v The Law Society": "Unreasonable treatment is not automatically discriminatory; must be 'on grounds of' the characteristic.",
    "British Home Stores v Burchell": "The classic test for unfair dismissal misconduct: Genuine belief, reasonable grounds, reasonable investigation.",
    "Cox v Adecco": "Whistleblowing: Agency workers can claim against the end-user in certain detriment contexts.",
    "Madarassy v Nomura International plc": "Burden of Proof: A difference in status and difference in treatment is not enough; there must be 'something more'.",
    "Hamam v British Embassy in Cairo": "Territorial Jurisdiction: Local embassy staff generally do not have UK employment rights.",
    "Smania v Standard Chartered Bank": "Territorial Jurisdiction: Applies same 'strong connection' test to whistleblowing as unfair dismissal.",
    "Kaur v Leeds Teaching Hospitals NHS Trust": "Last Straw: An act can revive earlier breaches even if the employee affirmed the contract previously.",
    "White v HC-One Oval Ltd": "Volunteering for redundancy does not automatically bar an unfair dismissal claim.",
    "FCO v Bamieh": "Territorial Jurisdiction: Co-workers abroad may not be liable if they lack a connection to Great Britain.",
    "Allen v Hammett": "Contributory Fault: Fault of the solicitor/agent can be attributed to the claimant for time limits.",
    "Jeffery": "Territorial Jurisdiction: Choice of English law and pension are strong factors for connection.",
    "Nazir and Aslam v Asim": "Board members of unincorporated associations can be personally liable for discrimination.",
    "Pendleton v Derbyshire County Council": "Indirect Religious Discrimination: Dismissal for refusing to divorce a convicted husband was discriminatory.",
    "Williams v Alderman Davis Church in Wales Primary School": "Constructive Dismissal: Correct application of the 'last straw' doctrine.",
    "Duncombe v Secretary of State": "Territorial Jurisdiction: Teachers in European Schools had sufficient connection to the UK.",
    "Ministry of Defence v Wallis": "Territorial Jurisdiction: Spouses of armed forces personnel working for MoD abroad had UK rights.",
    "Bank Mellat v HM Treasury": "Proportionality test: A four-stage test used to balance conflicting rights.",
    "Essop v Home Office": "Indirect Discrimination: No need to prove 'reason why' the group is disadvantaged, only that it is.",
    "Elan-Cane v Secretary of State": "Passports: Lack of 'X' gender marker was not a breach of human rights.",
    "For Women Scotland Ltd v Scottish Ministers": "Definition of Sex: 'Sex' in the Equality Act 2010 refers to biological sex.",
    "Forstater v CDG Europe": "Gender Critical Beliefs are protected philosophical beliefs under the Equality Act.",
    "Hare Wines Ltd v Kaur": "TUPE: Dismissal because the new owner didn't want the employee was automatically unfair.",
    "Hardy & Hansons plc v Lax": "Indirect Discrimination: Justification requires objective balance, not just employer's 'reasonable' view.",
    "British Gas Trading Ltd v Lock": "Holiday Pay: Must include results-based commission.",
    "Stringer and others v Revenue and Customs Commissioners": "Holiday Pay: Accrues during sick leave.",
    "NHS Leeds v Larner": "Holiday Pay: Carries over automatically if sick, no request needed.",
    "Perkins v Marston (Holdings) Ltd": "Indirect Discrimination: Tribunal must see evidence of group disadvantage, cannot just assume it."
}; 


const CASES_DATA = [
  {
    citation: "Case No: 6027054/2025",
    title: "Mr Thomas Allen -v- Oolong Ltd",
    year: 2025,
    judge: "Employment Judge Walker",
    court: "London South Employment Tribunal",
    description: "Successful Final Hearing. The Tribunal found unlawful deductions of £29,166.66. While the Respondent alleged an oral agreement to reduce salary, the Tribunal applied <em>Kerr v The Sweater Shop</em> and <em>International Packaging v Balfour</em> to rule that, absent written notification of the variation terms <em>before</em> the deduction, the deductions violated s.13(2)(b) ERA 1996. The Tribunal further applied <em>Agnew</em> to establish a 'series of deductions' despite gaps in payment, preserving the full claim period.",
    jurisdiction: [
      "Breach of Contract",
      "Unlawful Deduction from Wages"
    ],
    solicitor: "Irwin Mitchell",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>Chief Constable of PSNI v Agnew</em> [2023] UKSC 33",
      "<em>Kerr v The Sweater Shop (Scotland) Ltd</em> [1996] IRLR 424",
      "<em>International Packaging Corporation (UK) Ltd v Balfour</em> [2003] IRLR 11"
    ]
  },

  {
    citation: "Case No: 6011451/2025",
    title: "Mr Ryan Bardsley -v- (1) Antony MacArthur (2) Belle Vue (Manchester) Ltd (3) Reece Page",
    year: 2025,
    judge: "Employment Judge Hook",
    court: "Manchester Employment Tribunal",
    description: "Case management of whistleblowing and sexual harassment complaints including an application to amend.",
    jurisdiction: [
      "s.26 sexual harassment",
      "s103A ERA 1996 automatic unfair dismissal"
    ],
    solicitor: "Lyons Davidson",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>Chief Constable of PSNI v Agnew</em> [2023] UKSC 33",
      "<em>Kerr v The Sweater Shop (Scotland) Ltd</em> [1996] IRLR 424",
      "<em>International Packaging Corporation (UK) Ltd v Balfour</em> [2003] IRLR 11"
    ]
  },
  {
    citation: "Case No: 6007283/2025",
    title: "Z -v- Sanctuary Housing Association",
    year: 2025,
    judge: "Employment Judge Kelly",
    court: "West Midlands Employment Tribunal",
    description: "Telephone Preliminary Hearing. The Tribunal heard submissions on an application for a permanent anonymity order pursuant to Rule 49 (formerly Rule 50) regarding 'evidence of a personal nature' (disability). Judgment was reserved to determine whether the Claimant could meet the necessary evidential threshold. The Tribunal reiterated the principle in <em>Fallows</em> that any derogation from open justice requires clear and cogent evidence of the harm that would be caused to the applicant's Convention rights.",
    jurisdiction: [
      "Disability Discrimination",
      "Practice and Procedure Issues"
    ],
    solicitor: "Gowling WLG",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Louisa Simpson (Pump Court Chambers)",
    key_case_law: [
      "<em>Fallows v News Group Newspapers Ltd</em> [2016] ICR 801",
      "<em>LQP v City of York Council</em> [2022] EAT 196"
    ]
  },
  {
    citation: "Case No: 716043",
    title: "Mr O Sanodze -v- EV Downton Ltd & Others",
    year: 2025,
    judge: "Employment Judge Chudleigh",
    court: "Bristol Employment Tribunal",
    description: "Preliminary Hearing fixture involving multiple respondents (Wincanton PLC, XPO Logistics).",
    jurisdiction: [],
    solicitor: "Pinsent Masons",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 703244",
    title: "Ms Gill Grant -v- Financial Ombudsman Service Ltd",
    year: 2025,
    judge: "",
    court: "East London Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6009509/2025",
    title: "Agbotey v Maier UK Ltd",
    year: 2025,
    judge: "Employment Judge Wedderspoon",
    court: "Employment Tribunal (Midlands West)",
    description: "Successfully defended claims valued at £44,000 arising from the summary dismissal of a senior operator for gross negligence. The Tribunal found the dismissal fair following a 'shock-loading' incident involving a 13-tonne crane tool and a failure to follow mandatory reporting procedures.",
    jurisdiction: [
      "Practice and Procedure Issues"
    ],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>BHS v Burchell</em> [1978] IRLR 379"
    ]
  },
  {
    citation: "Case No: 725013",
    title: "Mr D Love -v- Mitie Group PLC",
    year: 2025,
    judge: "Employment Judge P Davies",
    court: "Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Lewis Silkin",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Julie Richards",
    key_case_law: []
  },
  {
    citation: "Case No: 725420",
    title: "Neesha Hosein-Tang How -v- Shell UK Limited",
    year: 2025,
    judge: "Employment Judge Smail",
    court: "Glasgow Employment Tribunal",
    description: "Video Preliminary Hearing regarding jurisdiction and case management.",
    jurisdiction: [
      "Age Discrimination",
      "Jurisdictional Points"
    ],
    solicitor: "Direct Access",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Jaspel Kaur, Rajwinder Kaur Goraya",
    key_case_law: []
  },
  {
    citation: "Case No: 1304744/2023",
    title: "J Asselman -v- Serco & Others",
    year: 2025,
    judge: "Employment Judge Robin Broughton",
    court: "Birmingham Employment Tribunal",
    description: "Preliminary Hearing involving individual named respondents (Jo Doherty, Ian Moss).",
    jurisdiction: [],
    solicitor: "Serco",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>Further guidance was given by the EAT in London City Airport Limited v Chacko</em> [2013] IRLR610"
    ]
  },
  {
    citation: "Case No: 6021916/2024",
    title: "Amy Peel -v- Symons, Gay & Leland LLP",
    year: 2025,
    judge: "Employment Judge Robertson",
    court: "East London Employment Tribunal",
    description: "Video Preliminary Hearing involving partnership dispute.",
    jurisdiction: [
      "Sexual Orientation Discrimination"
    ],
    solicitor: "The Employment Solicitor",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1304212/2024",
    title: "Sandra Harding & Others -v- Birmingham City Council",
    year: 2025,
    judge: "Employment Judge Frances Eccles",
    court: "Birmingham Employment Tribunal",
    description: "Case Management Preliminary Hearing involving multiple claimants against the Local Authority and Local Enterprise Partnership.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "Birmingham City Council",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1308843/2023",
    title: "Christine Morgan & Stephen Lewis -v- Inductotherm Europe Limited",
    year: 2025,
    judge: "Employment Judge B J Clarke",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing for consolidated claims.",
    jurisdiction: [],
    solicitor: "The Employment Solicitor",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Sarah Lewis, Chris Davis MP",
    key_case_law: []
  },
  {
    citation: "Case No: 1800378/2022",
    title: "S Nowondy & Others -v- Delta Academies Trust",
    year: 2025,
    judge: "Employment Judge Buckley",
    court: "Leeds Employment Tribunal",
    description: "Video Preliminary Hearing for multiple claimant action.",
    jurisdiction: [],
    solicitor: "The Employment Solicitor",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 3200939/2024",
    title: "Miss P Hung -v- JLL",
    year: 2025,
    judge: "",
    court: "East London Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Dentons",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "Patrick Egan, William Yeung, Bob Benton, Richard Abrahams",
    key_case_law: [
      "<em>Iceland Frozen Foods v Jones</em> [1982] IRLR 439",
      "<em>Kuzel v Roche Products Ltd</em> [2008] IRLR 530",
      "<em>Public Interest Disclosure a. Darnton v University of Surrey</em> [2003] IRLR 133",
      "<em>Fecitt v NHS Manchester</em> [2012] ICR 372",
      "<em>Browne-Wilkinson J in Williams v Compair Maxam Limited</em> [1982] IRLR 83",
      "<em>Panayiotou v Kernaghan</em> [2014] IRLR 500",
      "<em>Harrow London Borough v Knight</em> [2003] IRLR 140",
      "<em>Blackbay Ventures Ltd v Gahir</em> [2014] IRLR 416",
      "<em>Dyke v Hereford and Worcester County Council</em> [1989] ICR 800",
      "<em>Williams v Compair Maxam Ltd</em> [1982] IRLR 83"
    ]
  },
  {
    citation: "Case No: 711413",
    title: "Timothy Dore -v- IDS Transport (UK) LTD",
    year: 2025,
    judge: "Employment Judge Buckley",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [
      "Sexual Orientation Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 2603299/2023",
    title: "Miss M Bradley -v- Senad Community LTD",
    year: 2025,
    judge: "Employment Judge Dunlop",
    court: "Leicester Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "MFG Solicitors",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 8001143/2025",
    title: "E Robertson -v- Mitie Limited",
    year: 2025,
    judge: "Employment Judge JM Wade",
    court: "Glasgow Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Lewis Silkin",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6005593/2025",
    title: "Mr Stephen John Watters -v- Bluebird Care Franchises Limited",
    year: 2025,
    judge: "Employment Judge Lucy Wiseman",
    court: "Bristol Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Lyons Davidson Solicitors",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "George Sargent -v- G E Caledonian Limited, James McKinlay -v- G E Caledonian Limited, James Thompson -v- G E Caledonian Limited, Jason Stewart -v- G E Caledonian Limited, Angus Dinning -v- G E Caledonian Limited, James Toner Dorrans -v- G E Caledonian Limited, James Houston -v- G E Caledonian Limited, Adrian Gillespie -v- G E Caledonian Limited, Thomas Booker -v- G E Caledonian Limited, John Conway -v- G E Caledonian Limited, Scott Alexander Milne -v- G E Caledonian Limited, Christopher Watson -v- G E Caledonian Limited, Matthew Clifford Paton -v- G E Caledonian Limited, James Lennon Black -v- G E Caledonian Limited, Gordon William Caldow -v- G E Caledonian Limited, John Miller -v- G E Caledonian Limited, Edward Hannigan -v- G E Caledonian Limited, Stuart Muirhead -v- G E Caledonian Limited, Stephen Joseph Watters -v- G E Caledonian Limited, Robert Grant McNeish -v- G E Caledonian Limited, Raymond Carroll -v- G E Caledonian Limited, John David Evans -v- G E Caledonian Limited",
    key_case_law: []
  },
  {
    citation: "Case No: 3307137/2023",
    title: "K Townsend -v- Paper London Limited",
    year: 2025,
    judge: "Employment Judge Pirani",
    court: "Watford Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1303573/2025",
    title: "Mr Lee Robinson -v- Stephen John Williams TA/ National Property Buyers",
    year: 2025,
    judge: "Employment Judge Wedderspoon",
    court: "Employment Tribunal (Midlands West)",
    description: "Breach of Contract / Unlawful Deductions in relation to commission payments.",
    jurisdiction: [
      "Breach of Contract",
      "Unlawful Deduction from Wages"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6015344/2024",
    title: "Margaret Anne Sullivan -v- H M Courts and Tribunal Services",
    year: 2025,
    judge: "Employment Judge Matthews",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Gemma Erasmus, Mark Rudge",
    key_case_law: [
      "<em>The Tribunal was referred to British Home Stores Ltd v Burchell</em> [1978] IRLR 379",
      "<em>Salford Royal NHS Foundation Trust v Roldan</em> [2010] IRLR 721"
    ]
  },
  {
    citation: "Case No: 33052241/2024",
    title: "Liz Dobson -v- Berkshire Healthcare NHS Foundation Trust",
    year: 2025,
    judge: "Employment Judge Harper MBE",
    court: "Watford Employment Tribunal",
    description: "Video Preliminary Hearing regarding jurisdictional issues.",
    jurisdiction: [
      "Jurisdictional Points"
    ],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 3302615/2024",
    title: "Ms Victoria Fairbairn -v- PS Forwarding Co Ltd",
    year: 2025,
    judge: "Employment Judge Pirani",
    court: "Watford Employment Tribunal",
    description: "Video Preliminary Hearing to determine case management orders.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1604319/2024",
    title: "Miss Jacqueline Keddie Kelsall -v- Betsi Cadwaladr University Health Board",
    year: 2025,
    judge: "EJ Lloyd-Lawrie",
    court: "Wales Employment Tribunal",
    description: "Open Preliminary Hearing to determine disability status under the Equality Act 2010.",
    jurisdiction: [
      "Disability Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1303877/2023",
    title: "Nazia Bi -v- (1) Jane Tovery (2) University City Hospital of Birmingham",
    year: 2025,
    judge: "Employment Judge Harding",
    court: "Birmingham Employment Tribunal",
    description: "Preliminary Hearing to identify issues in complex multi-respondent claim.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 2600511/2024",
    title: "Mr Andrew Garland v Footfalls and Heartbeat (UK) Limited",
    year: 2025,
    judge: "Employment Judge Shepherd",
    court: "Nottingham Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6013987/2024",
    title: "Susie Thompson -v- Gentoo Group",
    year: 2025,
    judge: "Employment Judge Bright",
    court: "Newcastle Employment Tribunal",
    description: "Video Preliminary Hearing/Mediation.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6025015/2025",
    title: "Mrs Asia Mahmood -v- Dawat e Islami UK",
    year: 2025,
    judge: "Employment Judge S Shore",
    court: "Leeds Employment Tribunal",
    description: "Final Hearing (3 days).",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 8001991/2024",
    title: "Dawn Dickson -v- ASDA",
    year: 2025,
    judge: "Employment Judge Pirani",
    court: "Glasgow Employment Tribunal",
    description: "Case Management Preliminary Hearing via CVP.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1304180/2024",
    title: "Mrs M Karch v Unipart Group Ltd",
    year: 2025,
    judge: "EJ ",
    court: "Employment Tribunal (Midlands West)",
    description: "Multi-week disability discrimination claim.",
    jurisdiction: [
      "Disability Discrimination"
    ],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1300123/2025",
    title: "John Lowe v Keble Heath Construction",
    year: 2025,
    judge: "EJ Smith",
    court: "Employment Tribunal",
    description: "Successfully defended claims of automatic unfair dismissal and whistleblowing detriment. Secured the withdrawal of all claims following the conclusion of the Claimant's evidence.",
    jurisdiction: [
      "Health & Safety",
      "Public Interest Disclosure"
    ],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6018151/2024",
    title: "Mark Roberts -v- Cast Iron Welding Services Limited",
    year: 2025,
    judge: "Employment Judge Brace",
    court: "Leicester Employment Tribunal",
    description: "Final Hearing (4 days).",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 568MC635",
    title: "Professor Peter Lax -v- The United Lincolnshire Hospitals NHS Trust",
    year: 2025,
    judge: "",
    court: "Lincoln County Court",
    description: "Final Hearing (1 day).",
    jurisdiction: [],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1300070/2024",
    title: "Mrs D Johnson V Prysmian Cables & Systems Ltd",
    year: 2025,
    judge: "EJ Edmonds",
    court: "West Midlands Employment Tribunal",
    description: "Final Hearing (10 days).",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 715878",
    title: "Paul Bryson -v- Schneider Electric UK Ltd",
    year: 2025,
    judge: "",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing for Case Management.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6013922/2024",
    title: "Nina Ogilvie -v- Alexander Optometrists",
    year: 2025,
    judge: "Employment Judge Gould",
    court: "Newcastle Employment Tribunal",
    description: "Final Hearing (3 days).",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Alexander Surtees. Mr, Samantha Surtees, Samantha Surtees.",
    key_case_law: [
      "<em>Langstaff J set out the approach for Tribunals to adopt in Steen v ASP Packaging Ltd</em> [2014] ICR 56",
      "<em>The Court of Appeal decision in Kaur v Leeds Teaching Hospitals NHS Trust</em> [2018] IRLR 833",
      "<em>Leaney v Loughborough University</em> [2023] EAT 155",
      "<em>Berriman v Delabole Slate Limited</em> [1985] IRLR 305",
      "<em>Limited v McConnell</em> [1995] IRLR 516",
      "<em>Limited v Sharp</em> [1978] QC 761",
      "<em>LB Waltham Forest v Omilaju</em> [2005] ICR 481",
      "<em>Lewis v Motorworld Garages Limited</em> [1986] ICR 157",
      "<em>In Williams v Alderman Davis Church in Wales Primary School</em> [2020] IRLR 589",
      "<em>The following passage from the judgment of the Court of Appeal in Nottinghamshire County Council v Meikle</em> [2004] IRLR 703",
      "<em>Smith v City of Glasgow District Council</em> [1987] IRLR 326",
      "<em>Malik v BCCI</em> [1997] IRLR 462"
    ]
  },
  {
    citation: "Case No: 716043",
    title: "Mr O Sanodze -v- EV Downton Ltd",
    year: 2025,
    judge: "Employment Judge Chudleigh",
    court: "Bristol Employment Tribunal",
    description: "Preliminary Hearing fixture regarding whistleblowing claims.",
    jurisdiction: [
      "Health & Safety",
      "Public Interest Disclosure"
    ],
    solicitor: "Pinsent Masons",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 713582",
    title: "Mr Umran Suleman -v- Maximus UK Services Limited",
    year: 2025,
    judge: "Employment Judge Warren",
    court: "Leeds Employment Tribunal",
    description: "Video Preliminary Hearing on case management and potential strike out.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 714386",
    title: "Miss C Ettore -v- Pro Support Limited",
    year: 2025,
    judge: "Employment Judge Leach",
    court: "Manchester Employment Tribunal",
    description: "Telephone Conference/PH prior to Final Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 707884",
    title: "J Asselman -v- Serco & Others",
    year: 2025,
    judge: "Employment Judge Robin Broughton",
    court: "Birmingham Employment Tribunal",
    description: "Preliminary Hearing involving multiple named respondents (Jo Doherty, Ian Moss).",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>Further guidance was given by the EAT in London City Airport Limited v Chacko</em> [2013] IRLR610"
    ]
  },
  {
    citation: "Case No: 708410",
    title: "Ms A Khambay -v- George Eliot Hospital NHS Trust",
    year: 2025,
    judge: "",
    court: "Birmingham Employment Tribunal",
    description: "Video Preliminary Hearing involving NHS Trust.",
    jurisdiction: [],
    solicitor: "Browne Jacobson",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 703539",
    title: "Christine Morgan & Stephen Lewis -v- Inductotherm Europe Limited",
    year: 2025,
    judge: "Employment Judge B J Clarke",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing for multiple claimants.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Sarah Lewis, Chris Davis MP",
    key_case_law: []
  },
  {
    citation: "Case No: 702029",
    title: "S Nowondy & Others -v- Delta Academies Trust",
    year: 2025,
    judge: "Employment Judge Buckley",
    court: "Leeds Employment Tribunal",
    description: "Video Preliminary Hearing involving multiple claimants.",
    jurisdiction: [],
    solicitor: "The Employment Solicitor",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 712257",
    title: "Miss P Hung -v- JLL",
    year: 2025,
    judge: "",
    court: "East London Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Broadfield Law UK",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Patrick Egan, William Yeung, Bob Benton, Richard Abrahams",
    key_case_law: [
      "<em>Iceland Frozen Foods v Jones</em> [1982] IRLR 439",
      "<em>Kuzel v Roche Products Ltd</em> [2008] IRLR 530",
      "<em>Public Interest Disclosure a. Darnton v University of Surrey</em> [2003] IRLR 133",
      "<em>Fecitt v NHS Manchester</em> [2012] ICR 372",
      "<em>Browne-Wilkinson J in Williams v Compair Maxam Limited</em> [1982] IRLR 83",
      "<em>Panayiotou v Kernaghan</em> [2014] IRLR 500",
      "<em>Harrow London Borough v Knight</em> [2003] IRLR 140",
      "<em>Blackbay Ventures Ltd v Gahir</em> [2014] IRLR 416",
      "<em>Dyke v Hereford and Worcester County Council</em> [1989] ICR 800",
      "<em>Williams v Compair Maxam Ltd</em> [1982] IRLR 83"
    ]
  },
  {
    citation: "Case No: 1304212/2024",
    title: "Sandra Harding & Others -v- Birmingham City Council",
    year: 2025,
    judge: "Employment Judge Frances Eccles",
    court: "Birmingham Employment Tribunal",
    description: "Preliminary Hearing involving the City Council.",
    jurisdiction: [],
    solicitor: "Birmingham City Council",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 711413",
    title: "Timothy Dore -v- IDS Transport (UK) LTD",
    year: 2025,
    judge: "Employment Judge Buckley",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [
      "Sexual Orientation Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 712202",
    title: "Miss M Bradley -v- Senad Community LTD",
    year: 2025,
    judge: "Employment Judge Dunlop",
    court: "Leicester Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Flint Bishop",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1310744/2022",
    title: "F. Manshausen v IMI Precision Engineering",
    year: 2025,
    judge: "Employment Judge Perry",
    court: "Birmingham Employment Tribunal",
    description: "Successfully represented the Claimant in a multi-day liability hearing. The Tribunal found the Claimant was unfairly dismissed and victimised following his grievance regarding the devaluation of his role upon returning from cancer-related absence. The redundancy process was found to be a sham.",
    jurisdiction: [
      "Redundancy",
      "Statutory Discipline and Grievance Procedures",
      "Victimisation Discrimination"
    ],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
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
    citation: "Case No: 710385",
    title: "K Townsend -v- Paper London Limited",
    year: 2025,
    judge: "Employment Judge Pirani",
    court: "Watford Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "DLP Legal Services",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 706996",
    title: "Francis Enahoro -v- ASDA Stores Ltd",
    year: 2025,
    judge: "",
    court: "London South Employment Tribunal",
    description: "Video Preliminary Hearing (Case Management).",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "Addleshaw Goddard",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6000185/2024",
    title: "Ion Burca -v- MD Construction",
    year: 2025,
    judge: "Employment Judge B Beyzade",
    court: "Leeds Employment Tribunal",
    description: "Preliminary Hearing (Video) for Case Management.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "The Employment Solicitor",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 710460",
    title: "Elaine Martin -v- Care Ashore",
    year: 2025,
    judge: "Employment Judge Postle",
    court: "Watford Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Anderton & Co Solicitors",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>British Home Stores v Burchell</em> [1980] ICR 303"
    ]
  },
  {
    citation: "Case No: 701136",
    title: "Parvinder Hammonds -v- HRS Family Law Solicitors Ltd",
    year: 2025,
    judge: "Employment Judge Grubb",
    court: "Birmingham Employment Tribunal",
    description: "Video Preliminary Hearing and Judicial Mediation.",
    jurisdiction: [],
    solicitor: "George Green",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 701853",
    title: "Mukesh Pawar -v- Jaguar Land Rover Ltd",
    year: 2025,
    judge: "Employment Judge J Connolly",
    court: "Birmingham Employment Tribunal",
    description: "Video Preliminary Hearing regarding complex discrimination claims.",
    jurisdiction: [],
    solicitor: "Direct Access",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 708586",
    title: "Terri-Anne Large -v- ASDA Stores Limited",
    year: 2025,
    judge: "",
    court: "Nottingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 709512",
    title: "Melanie Chandler -v- The King's Fund",
    year: 2025,
    judge: "Employment Judge",
    court: "London Central Employment Tribunal",
    description: "Preliminary Hearing (Video).",
    jurisdiction: [],
    solicitor: "The Employment Solicitor",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 708968",
    title: "Shaun Wood -v- Rolleston Park Farm",
    year: 2025,
    judge: "Employment Judge M Kearns",
    court: "Nottingham Employment Tribunal",
    description: "Preliminary Hearing regarding farm employment dispute.",
    jurisdiction: [],
    solicitor: "Lanyon Bowdler",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 6019242/2024",
    title: "John Bradley -v- Technical Drive",
    year: 2025,
    judge: "Employment Judge E Fowell",
    court: "Birmingham Employment Tribunal",
    description: "Final Hearing (4 days).",
    jurisdiction: [],
    solicitor: "MFG Solicitors",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "John Leigh, Michael Kadoorie is, Samantha Bradley, Michael Kadoorie, James Laddie, Ronald McAulay",
    key_case_law: [
      "<em>In Cox v Adecco</em> [2021] ICR 1307",
      "<em>Green v SIG Trading Ltd</em> [2019] ICR 929",
      "<em>That case also considered an appeal in the case of Ministry of Defence v Wallis</em> [2011] ICR 617",
      "<em>Ms Bradley also referred me to the case of Smania v Standard Chartered Bank</em> [2015] UKEAT 018114",
      "<em>UK government abroad. Duncombe v Secretary of State</em> [2011] ICR 1312",
      "<em>More recently in Hamam v British Embassy in Cairo</em> [2020] IRLR 570",
      "<em>HM Prison Service v Dolby</em> [2003] IRLR 694",
      "<em>Another decision reached since the summary of the law in Jeffery is FCO v Bamieh</em> [2020] ICR 465",
      "<em>An example of the potential for pitfalls is shown by the case of White v HC-One Oval Ltd</em> [2022] IRLR 576",
      "<em>Ltd and another v Mulumba</em> [2021] ICR 1501",
      "<em>House of Lords in Lawson v Serco Ltd</em> [2006] ICR 250"
    ]
  },
  {
    citation: "Case No: 2402575/2023",
    title: "Miss C Ettore -v- Pro Support Limited",
    year: 2025,
    judge: "Employment Judge Leach",
    court: "Manchester",
    description: "Miss C Ettore brought claims against Pro Support Limited including unfair dismissal, detriments, and unauthorized deductions from wages. The tribunal dismissed the unfair dismissal claims as they were presented out of time and it was reasonably practicable to present them earlier. The claims relating to detriments and unauthorized wage deductions were allowed to proceed to further case management.",
    jurisdiction: [
      "Age Discrimination",
      "Breach of Contract",
      "Unlawful Deduction from Wages"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 708410",
    title: "Ms A Khambay -v- George Eliot Hospital NHS Trust",
    year: 2025,
    judge: "",
    court: "Birmingham Employment Tribunal",
    description: "Video Preliminary Hearing involving NHS Trust.",
    jurisdiction: [],
    solicitor: "Browne Jacobson",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 707529",
    title: "Daisy Lo -v- Norfolk and Suffolk NHS Foundation Trust",
    year: 2025,
    judge: "Employment Judge Adkinson sitting alone",
    court: "Watford Employment Tribunal",
    description: "Case Management Preliminary Hearing (Video).",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Harjit Sandhu",
    key_case_law: [
      "<em>Ltd v Andrews</em> [2007] IRLR 568",
      "<em>G McFall and Co Ltd v Curran</em> [1981] IRLR 455",
      "<em>Bailey v BP Oil Kent Refinery</em> [1980] ICR 642",
      "<em>Allen v Hammett</em> [1982] ICR 227",
      "<em>Faye v North Yorkshire County Council</em> [1986] ICR 133",
      "<em>Murphy v Epsom College</em> [1983] IRLR 395",
      "<em>Hill v Governing Body of Great Tey Primary School</em> [2013] ICR 691",
      "<em>Pfaffinger v City of Liverpool Community College and Another</em> [1997] ICR 142"
    ]
  },
  {
    citation: "Case No: 707755",
    title: "CN Hall -v- Do & Co International Catering Ltd",
    year: 2025,
    judge: "Employment Judge Russell",
    court: "Bristol Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>Ezsias v North Glamorgan NHS Trust</em> [2007] IRLR 603",
      "<em>In Ezsias v North Glamorgan NHS Trust</em> [2007] IRLR 603",
      "<em>Chief Constable of Lincolnshire Police v Stubbs</em> [1999] IRLR 81",
      "<em>In Jones v Tower Boot Co Ltd</em> [1997] IRLR 168",
      "<em>Hemdan v Ishmail</em> [2017] IRLR 228"
    ]
  },
  {
    citation: "Case No: 695080",
    title: "Ebony Laleye -v- ASDA Stores Limited",
    year: 2025,
    judge: "",
    court: "Watford Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Addleshaw Goddard",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 691835",
    title: "Miss C Stewart -v- Hypebeast UK Ltd",
    year: 2025,
    judge: "Employment Judge Woffenden",
    court: "London Central Employment Tribunal",
    description: "Video Preliminary Hearing regarding jurisdictional points.",
    jurisdiction: [
      "Jurisdictional Points"
    ],
    solicitor: "Armstrongs Solicitors",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 691775",
    title: "Mrs Nichola Pilgrim -v- Herefordshire and Worcestershire Health and Care NHS Trust",
    year: 2025,
    judge: "Employment Judge Harrington",
    court: "Birmingham Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Sarah Norman, Sarah Norman as a respondent to the claim of public, Sarah Norman as a Respondent to his",
    key_case_law: []
  },
  {
    citation: "Case No: 706597",
    title: "Fay Bryant -v- Brays School",
    year: 2025,
    judge: "Employment Judge Phil Allen",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "The Employment Solicitor",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>Environment Agency v Rowan</em> [2008] IRLR 20",
      "<em>The Employment Appeal Tribunal in Richmond Pharmacology v Dhaliwal</em> [2009] IRLR 336",
      "<em>In Nazir and Aslam v Asim and Nottinghamshire Black Partnership</em> [2010] ICR 1225"
    ]
  },
  {
    citation: "Case No: 706357",
    title: "I Beckett -v- Weetabix Limited",
    year: 2025,
    judge: "Employment Judge JM Wade",
    court: "Watford Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Crawford Legal Services UK",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 2601646/2023",
    title: "Rachel McDonald -v- Avanti Schools Trust",
    year: 2025,
    judge: "",
    court: "Leicester Employment Tribunal",
    description: "Preliminary Hearing to determine case management orders.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "HY Education",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>Ltd v Sharp</em> [1978] IRLR 27",
      "<em>The only case law cited to the Tribunal was Kaur v Leeds Teaching Hospitals NHS Trust</em> [2018] IRLR 833",
      "<em>Courtaulds Northern Textiles Ltd v Andrew</em> [1979] IRLR 84",
      "<em>Tolson v Governing Body of Mixenden Community School</em> [2003] IRLR 842",
      "<em>Hilton v Shiner Ltd</em> [2001] IRLR 727",
      "<em>Omilaju v Waltham Forest London Borough Council</em> [2005] IRLR 35",
      "<em>Courtaulds Northern Spinning Ltd v Sibson</em> [1988] IRLR 305",
      "<em>Lewis v Motorworld Garages Ltd</em> [1985] IRLR 465",
      "<em>Kaur v Leeds Teaching Hospitals NHS Trust</em> [2018] IRLR 833",
      "<em>Pedersen v Camden London Borough Council</em> [1981] IRLR 173",
      "<em>Malik v BCCI SA</em> [1997] IRLR 462"
    ]
  },
  {
    citation: "Ref: EA-2023-000125-AT",
    title: "Mr Habila Tikon -v- (1) Mitie Limited (2) Her Majestys Revenue and Customs",
    year: 2025,
    judge: "Employment Judge Hindmarch",
    court: "London Central by CVP on 16 December 2022",
    description: "The tribunal struck out all claims against HMRC and the claimant's unfair dismissal and detriment claims as out of time, allowing only the unlawful deduction from wages and breach of contract claims to proceed against Mitie Limited.",
    jurisdiction: [
      "Age Discrimination",
      "Breach of Contract",
      "Unlawful Deduction from Wages"
    ],
    solicitor: "Dentons",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "Adams v GKN Sankey Ltd (1980) IRLR 416",
      "Dixon v Stenor Ltd (1993) IRLR 28",
      "Saunders v Southend-on-Sea Borough Council (1984) ILR 372",
      "Service v. Dolby [2003] IRLR 694"
    ]
  },
  {
    citation: "Case No: 2205716/2023",
    title: "Marta Grobarcikova Gonczyova -v- Barchester Healthcare Ltd",
    year: 2025,
    judge: "Employment Judge Walters",
    court: "Bristol by CVP",
    description: "Mrs. Marta Grobarcikova Gonczyova brought claims against Barchester Healthcare Ltd alleging disability discrimination arising under section 15 of the Equality Act 2010 and failure to make reasonable adjustments under section 21. The Tribunal found that although the claimant was disabled, the alleged unfavourable treatment and failure to make reasonable adjustments claims were not made out and dismissed both claims.",
    jurisdiction: [
      "Disability Discrimination"
    ],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "Environment Agency v Rowan [2008] ICR 218",
      "Birtenshaw v Oldfield [2019] IRLR 946",
      "Archibald v Fife Council [2004] IRLR 651",
      "Trustees of Swansea University Pension Scheme v Williams [2018] UKSC 65"
    ]
  },
  {
    citation: "Case No: 1303456/2024",
    title: "Z v HRS Family Law Solicitors Ltd",
    year: 2025,
    judge: "EJ Edmonds",
    court: "Employment Tribunal",
    description: "Acted for the Respondent law firm in a sensitive disability discrimination claim arising from the performance management of a solicitor suffering from alcoholism.",
    jurisdiction: [
      "Age Discrimination",
      "Disability Discrimination"
    ],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 700105",
    title: "Rachel Webb -v- The University of Worcester",
    year: 2025,
    judge: "Employment Judge Gray",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 705149",
    title: "Nazia Bi -v- Jane Tovery",
    year: 2025,
    judge: "Employment Judge Harding",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Direct Access",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 702658",
    title: "M Lewis -v- Interduct Uk Ltd",
    year: 2025,
    judge: "Employment Judge Manley",
    court: "Reading Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 2301957/2022",
    title: "Raymond Gibbons -v- John Lewis Plc",
    year: 2025,
    judge: "Employment Judge Webster",
    court: "Ashford Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 701880",
    title: "Mr H Taha -v- Novatek Europe Ltd",
    year: 2025,
    judge: "Employment Judge E Fowell",
    court: "London South Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Harith Taha",
    key_case_law: []
  },
  {
    citation: "Case No: TBC",
    title: "Hasnain Visram -v- Boots Management Services Ltd",
    year: 2025,
    judge: "Employment Judge Heap",
    court: "London Central Employment Tribunal",
    description: "Final Hearing (4 days).",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 2209044/2022",
    title: "A Medina -v- PRODENT LONDON LTD",
    year: 2025,
    judge: "Employment Judge Webster",
    court: "London Central Employment Tribunal",
    description: "Dr A Medina brought a claim against Prodent London Ltd for unlawful deductions from wages under section 13 of the Employment Rights Act 1996. The tribunal found that the employer made unauthorised deductions from the claimant’s pay in May, June, and July 2022, which were not authorised by statute, contract, or the claimant’s prior written consent, and ordered the respondent to pay £29,384.40 in gross sums to the claimant.",
    jurisdiction: [
      "Age Discrimination",
      "Breach of Contract",
      "Unlawful Deduction from Wages"
    ],
    solicitor: "DASLaw",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1304966/2023",
    title: "Mr Luke Salter -v- Muller UK & Ireland Group LLP",
    year: 2025,
    judge: "Employment Judge Dimbylow",
    court: "Birmingham Employment Tribunal",
    description: "The claimant, Mr Luke Salter, brought a claim for constructive unfair dismissal against his employer, Muller UK & Ireland Group LLP. The Employment Tribunal found that the claim was not well-founded and dismissed it, concluding that the claimant had not established constructive unfair dismissal.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 2402734/2022",
    title: "Alex John Boggs -v- Warrington & Halton Hospitals Foundation",
    year: 2025,
    judge: "Employment Judge Aspinall",
    court: "Liverpool Employment Tribunal",
    description: "The claimant, John William Kennedy Boggs, brought claims against Warrington and Halton Teaching Hospitals NHS Foundation Trust for unfair dismissal, wrongful dismissal, and disability discrimination arising from autism, anxiety, and depression. The Tribunal found in favor of the respondent on unfair dismissal, wrongful dismissal, discrimination arising from disability, and harassment claims, but partially upheld the claim for failure to make reasonable adjustments.",
    jurisdiction: [
      "Disability Discrimination",
      "Harassment"
    ],
    solicitor: "Pharmacists’ Defence Association",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "Birds v Croucher [1984] IRLR 425",
      "Abernethy v Mott Hay and Anderson [1974] ICR 323",
      "Polkey v AE Dayton [1987] IRLR 50",
      "Taylor v OCS [2006] EWCA Civ"
    ]
  },
  {
    citation: "Case No: 2204229/2021",
    title: "Mr Akeem Adesola -v- (1) Mitie (2) Kingdom Services Group",
    year: 2025,
    judge: "",
    court: "London Central Employment Tribunal",
    description: "Final Hearing (1 day).",
    jurisdiction: [],
    solicitor: "Dentons",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 2201830/2023",
    title: "Anahita Ansari -v- Prodent London Limited",
    year: 2025,
    judge: "Employment Judge Klimov",
    court: "London Central (in public, by video)",
    description: "The claimant, Ms Anahita Ansari, brought multiple complaints against Prodent London Limited which were heard over several days in a London Central Employment Tribunal. The tribunal found that none of the claimant’s complaints were well-founded and consequently dismissed the claim in full.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 701586",
    title: "Finbarr J Conolly -v- Radiocoms Systems Ltd",
    year: 2025,
    judge: "",
    court: "Manchester Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "BDB Pitmans / Broadfield",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 701432",
    title: "Tonia Couzins -v- HEREFORDSHIRE CITY COUNCIL",
    year: 2025,
    judge: "",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Herefordshire City Council",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 700440",
    title: "E Barrance -v- Sanderson Design Group Brands Limited",
    year: 2025,
    judge: "",
    court: "Watford Employment Tribunal",
    description: "Telephone Case Management Fixture.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "DLA Piper UK",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 700026",
    title: "Beverly Ann Sterry",
    year: 2025,
    judge: "",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Fixture.",
    jurisdiction: [],
    solicitor: "Davies & Partners Solicitors",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 699531",
    title: "MR A E Talukdar -v- TZG Partnerships",
    year: 2025,
    judge: "Employment Judge Balogun",
    court: "London South Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 696882",
    title: "Olga Luscombe -v- Procurious Limited & Tania Seary",
    year: 2025,
    judge: "Employment Judge C Sharp",
    court: "Central London Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Consilia Legal",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 697467",
    title: "N Gough -v- Board of Governers At Mount Grace School",
    year: 2025,
    judge: "Employment Judge Woffenden",
    court: "Watford Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [
      "Race Discrimination"
    ],
    solicitor: "Stone King",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 695408",
    title: "Mr T Field -v- ASDA Stores LTD",
    year: 2025,
    judge: "Employment Judge Smail",
    court: "Bristol Employment Tribunal",
    description: "Telephone Case Management Fixture.",
    jurisdiction: [
      "Age Discrimination"
    ],
    solicitor: "Addleshaw Goddard",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 4105781/2022",
    title: "Heather Barclay -v- ASDA Stores",
    year: 2025,
    judge: "",
    court: "Manchester Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1804275/2023",
    title: "Mark Forsyth Taylor -v- Redcentric Solutions Limited",
    year: 2025,
    judge: "Employment Judge Deeley",
    court: "Before:",
    description: "The claimant, Mr Mark Taylor, brought claims against Redcentric Solutions Limited for unpaid commission for February to April 2023 and wrongful dismissal regarding notice pay. The Tribunal found that the claimant was entitled to the commission payments, constituting unauthorised deductions from wages, but dismissed the wrongful dismissal claim as the respondent lawfully paid one week's notice in lieu during the claimant's probationary period.",
    jurisdiction: [
      "Age Discrimination",
      "Breach of Contract",
      "Unlawful Deduction from Wages"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 1302825/2023",
    title: "Mr G Price -v- Fleet Express & Logistics Ltd",
    year: 2025,
    judge: "Employment Judge Routley",
    court: "West Midlands Employment Tribunal (by CVP)",
    description: "The key issue in Mr G Price v Fleet Express & Logistics Ltd was whether the claimant was unfairly dismissed following incidents involving alleged aggressive behavior towards his supervisor, Mr Pugh. The Tribunal found the claimant was unfairly dismissed but reduced the compensation by 75% due to contributory conduct, awarding the claimant £2,743.19.",
    jurisdiction: [],
    solicitor: "Ansons Solicitors",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "Polkey v AE Dayton"
    ]
  },
  {
    citation: "Case No: 2205898/2022",
    title: "Mr Paul Andrew Whittaker -v- (1) Dogwoof Ltd (2) Anthony Tabatznik",
    year: 2025,
    judge: "Employment Judge",
    court: "London Central Employment Tribunal",
    description: "Preliminary Hearing (Video) to manage complex whistleblowing detriments.",
    jurisdiction: [
      "Age Discrimination",
      "Health & Safety",
      "Public Interest Disclosure"
    ],
    solicitor: "Shakespeare Martineau",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 3219922/2020",
    title: "Jan Godliman -v- London Borough of Waltham Forest",
    year: 2025,
    judge: "Employment Judge C Lewis",
    court: "East London Employment Tribunal",
    description: "Ms J Godliman brought claims against the London Borough of Waltham Forest alleging direct disability discrimination, discrimination arising from disability, harassment related to disability, and victimisation under the Equality Act 2010. The Tribunal dismissed the claims for direct disability discrimination and several complaints of discrimination and harassment following the Claimant's withdrawal, and found the remaining complaints and the victimisation claim to fail. Overall, all claims were dismissed.",
    jurisdiction: [
      "Disability Discrimination",
      "Harassment",
      "Victimisation Discrimination"
    ],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 3305117/2020",
    title: "David Bannister -v- DPD Group UK Ltd",
    year: 2025,
    judge: "Employment Judge Bedeau",
    court: "Watford",
    description: "The claimant, Mr David Bannister, who suffered from multiple disabilities including learning difficulties and severe hearing impairment, brought claims against DPD Group UK Ltd for disability discrimination and failure to make reasonable adjustments following his dismissal for gross misconduct. The Tribunal found the disability discrimination and failure to make reasonable adjustments claims well-founded, with the dismissal linked to issues arising from his disabilities rather than unrelated misconduct.",
    jurisdiction: [
      "Disability Discrimination",
      "Statutory Discipline and Grievance Procedures"
    ],
    solicitor: "Pharmacists’ Defence Association",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "Environment Agency v Rowan [2008] IRLR 20",
      "Griffiths v Secretary of State [2016] IRLR 216",
      "Project Management Institute v Latif [2007] IRLR 576",
      "General Dynamics Information Technology Ltd v Carranza [2015] ICR 169"
    ]
  },
  {
    citation: "Case No: 1301189/2021",
    title: "Mrs Nichola Pilgrim -v- Herefordshire and Worcestershire Health and Care NHS Trust",
    year: 2025,
    judge: "Employment Judge Harrington",
    court: "Birmingham Employment Tribunal",
    description: "Preliminary Hearing (Video) involving NHS Trust.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Sarah Norman, Sarah Norman as a respondent to the claim of public, Sarah Norman as a Respondent to his",
    key_case_law: []
  },
  {
    citation: "Case No: 1307462/2020",
    title: "Mr D Austin -v- Kingspan Ltd",
    year: 2025,
    judge: "Employment Judge Dean",
    court: "Birmingham by CVP",
    description: "Mr D Austin, a disabled employee, was found to have been unfairly dismissed by Kingspan Ltd in breach of the Employment Rights Act 1996. Although he withdrew some discrimination claims under the Equality Act 2010, the Tribunal found that he was subjected to unlawful disability discrimination under section 15 and awarded him compensation totaling £33,008.27 for unfair dismissal and injury to feelings.",
    jurisdiction: [
      "Disability Discrimination"
    ],
    solicitor: "",
    starred: true,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 692828",
    title: "Mr C Borg-Neal -v- Lloyds Banking Group",
    year: 2025,
    judge: "Employment Judge Lewis",
    court: "Video Hearing",
    description: "Hearing Fixture.",
    jurisdiction: [],
    solicitor: "Eversheds Sutherland",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Ms I Ferber",
    key_case_law: [
      "<em>EAT in British Home Stores v Burchell</em> [1978] IRLR 379",
      "<em>Abernethy v Mott Hay and Anderson</em> [1974] ICR 323",
      "<em>Polkey v AE Dayton Services</em> [1987] IRLR 503",
      "<em>Hewage v Grampian Health Board</em> [2012] IRLR 870",
      "<em>EAT in London Borough of Islington v Ladele</em> [2009] IRLR 154",
      "<em>Boys and Girls Welfare Society v McDonald</em> [1996] IRLR 129",
      "<em>Shamoon v Chief Constable of the Royal Ulster Constabulary</em> [2003] UKHL 11",
      "<em>Nagarajan v London Regional Transport</em> [1999] IRLR 572",
      "<em>Steen v ASP Packaging Ltd</em> [2014] ICR 56",
      "<em>Supermarkets Ltd v Hitt</em> [2003] IRLR 23",
      "<em>British Home Stores v Burchell</em> [1978] IRLR 379"
    ]
  },
  {
    citation: "Case No: 2201870/2022",
    title: "Michael Lambrianos -v- Nowy Styl UK Limited",
    year: 2025,
    judge: "Employment Judge Sutton",
    court: "London Central Employment Tribunal",
    description: "The claimant, Mr Michael Lambrianos, brought a claim against Nowy Styl UK Limited for unpaid commission on multiple sales. The Tribunal found the respondent owed the claimant £716.40 in commission but refused both parties' applications for costs, noting the claimant's claim largely failed and the respondent's defense was reasonable and pragmatic.",
    jurisdiction: [],
    solicitor: "Ward Hadaway",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 3302412/2022",
    title: "Mr Ismail Ismail -v- ASDA Stores Limited",
    year: 2025,
    judge: "Employment Judge Din",
    court: "Watford",
    description: "Mr Ismail Ismail claimed constructive unfair dismissal against Asda Stores Limited, alleging denial of promotion opportunities and bullying by a senior manager, Mr Preston, which breached the implied term of trust and confidence. The Employment Tribunal found that the claimant was not constructively dismissed and dismissed the claim.",
    jurisdiction: [
      "Age Discrimination",
      "Harassment"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "London Borough of Waltham Forest v Omilaju [2005] IRLR 35",
      "British Aircraft Corporation Ltd v Austin [1978] IRLR 332",
      "Western Excavating (ECC) Ltd v Sharp [1978] ICR 221",
      "Malik and Mahmud v BCCI [1997] ICR 606"
    ]
  },
  {
    citation: "Case No: 686538",
    title: "Mr S Bridges -v- ASDA",
    year: 2025,
    judge: "Employment Judge Harding",
    court: "Wales Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Addleshaw Goddard",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 3204026/2022",
    title: "Mr C Vassallo -v- Sizedwell Clothing Ltd",
    year: 2025,
    judge: "",
    court: "East London Employment Tribunal",
    description: "Final Hearing (1 day).",
    jurisdiction: [],
    solicitor: "Anderton Law",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 688031",
    title: "Ms V Parmar -v- John Lewis Plc",
    year: 2025,
    judge: "Employment Judge Beck",
    court: "London South Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Direct Access",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 687996",
    title: "Mr Danny Hazel & Mr Connor O'Driscoll -v- Lift Gear Engineering Limited",
    year: 2025,
    judge: "Employment Judge Shotter",
    court: "East London Employment Tribunal",
    description: "Video Preliminary Hearing for multiple claimants.",
    jurisdiction: [],
    solicitor: "Clements Solicitors",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 1601704/2021",
    title: "Ms Shakila Devi Perumal -v- Cardiff University",
    year: 2025,
    judge: "Employment Judge S Knight",
    court: "On:",
    description: "Final Hearing.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Gnanapragasan Jayachandran",
    key_case_law: []
  },
  {
    citation: "Case No: 684315",
    title: "M Forbes-Innerarity –v- ASDA",
    year: 2025,
    judge: "",
    court: "Birmingham Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Addleshaw Goddard",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 686401",
    title: "Alex Soyvural -v- Boots Uk Limted",
    year: 2025,
    judge: "",
    court: "London South Employment Tribunal",
    description: "Video Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 682857",
    title: "Mr J Seaman -v- Morrisons PLC",
    year: 2025,
    judge: "Employment Judge Shulman",
    court: "Manchester Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "Minster Law",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Delroy Rudd, Doug Ross, Richard Goulbourne, Roger Bailey",
    key_case_law: []
  },
  {
    citation: "Case No: 682260",
    title: "B Mafavuke -v- Home-Start Birmingham North West",
    year: 2025,
    judge: "Employment Judge Faulkner",
    court: "Birmingham Employment Tribunal",
    description: "Preliminary Hearing fixture.",
    jurisdiction: [],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "<em>Warburton v The Chief Constable of Northamptonshire Police</em> [2022] EAT 42",
      "<em>Aziz v Trinity Street Taxis Ltd</em> [1998] IRLR 204",
      "<em>Wong v Igen Ltd</em> [2005] ICR 931",
      "<em>In Pendleton v Derbyshire County Council</em> [2016] IRLR 580",
      "<em>Rowstock Ltd and anor v Jessemey</em> [2014] ICR 550",
      "<em>Bahl v The Law Society</em> [2004] IRLR 799",
      "<em>EAT in Richmond Pharmacology Ltd v Dhaliwal</em> [2009] ICR 724",
      "<em>Shamoon v Chief Constable of the RUC</em> [2003] UKHL 11",
      "<em>Naeem v Secretary of State for Justice</em> [2017] UKSC 27",
      "<em>As was held in Madarassy v Nomura International plc</em> [2007] IRLR 246",
      "<em>Barton v Investec Henderson Crosthwaite Securities Ltd</em> [2003] ICR 1205",
      "<em>Court of Appeal said in Anya v University of Oxford and anor</em> [2001] ICR 847"
    ]
  },
  {
    citation: "Case No: 674723",
    title: "Douglas Conroy",
    year: 2025,
    judge: "",
    court: "London South Employment Tribunal",
    description: "Preliminary Hearing fixture.",
    jurisdiction: [],
    solicitor: "Direct Access",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 686458",
    title: "Miss P Hill v Apex Jewellery",
    year: 2025,
    judge: "Employment Judge Loy",
    court: "Manchester Employment Tribunal",
    description: "Telephone Preliminary Hearing.",
    jurisdiction: [],
    solicitor: "D & N Solicitors",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 3300169/2017",
    title: "Gillian Oxborrow & Others -v- Partnerships In Care",
    year: 2025,
    judge: "Employment Judge Frances Eccles",
    court: "Watford Employment Tribunal",
    description: "Final Hearing.",
    jurisdiction: [],
    solicitor: "Priory Group",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 1307028/2020",
    title: "Adele Deane -v- Solihull Metropolitan Borough Council",
    year: 2025,
    judge: "",
    court: "Birmingham Employment Tribunal",
    description: "Final Hearing (4 days).",
    jurisdiction: [],
    solicitor: "Solihull Metropolitan Borough Council",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 2414517/2021",
    title: "Mr G Fuller -v- Lancashire County Council",
    year: 2025,
    judge: "Employment Judge Mc",
    court: "Manchester (hybrid (1st day) and",
    description: "The key issue in Mr G Fuller's claim against Lancashire County Council was whether he was an employee or a casual worker during the period when alleged unauthorised deductions from his wages were made. The tribunal found that the claimant was not an employee but a casual worker and dismissed the claim for unauthorised deductions. The respondent had ceased offering shifts during an investigation period, which was not considered an unlawful deduction of wages.",
    jurisdiction: [
      "Age Discrimination",
      "Breach of Contract",
      "Unlawful Deduction from Wages"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: [
      "Societe Generale, London Branch v Geys [2013] ICR 117",
      "Cerberus Software Ltd v Rowley [2001] IRLR 160",
      "Ready Mixed Concrete (South East) Ltd v Minister of Pensions and National Insurance [1968] 2 QB 497"
    ]
  },
  {
    citation: "Ref: 2300279/2021",
    title: "N Lomotey v Mitie Limited",
    year: 2025,
    judge: "Employment Judge Kelly",
    court: "London South Employment Tribunal (by CVP)",
    description: "The key issue in this case was whether the claimant, Natasha Lomotey, was unfairly dismissed by Mitie Limited. The Employment Tribunal found in favor of the claimant, ruling that the dismissal was unfair and ordering a compensation payment of £12,000, with the proceedings adjourned to allow for settlement implementation.",
    jurisdiction: [
      "Unlawful Deduction from Wages"
    ],
    solicitor: "Dentons",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 3301008/2021",
    title: "Mr K Macleod -v- Mitie Group PLC",
    year: 2025,
    judge: "",
    court: "Watford Employment Tribunal",
    description: "Final Hearing.",
    jurisdiction: [],
    solicitor: "Dentons",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 2200311/2021",
    title: "Samantha Zenda Ovies -v- Mahiul Muqit",
    year: 2025,
    judge: "Employment Judge Davidson",
    court: "London Central Employment Tribunal",
    description: "The case concerned Ms Samantha Zenda Ovies' claim of unfair dismissal by Mr Mahiul Muqit, her former employer. The Tribunal found that the dismissal was unfair, awarded the claimant one day's holiday pay, and ordered payment of an outstanding £2,000 gross bonus from June 2020. The Tribunal also allowed either party to apply for a remedy hearing to determine further compensation or remedies.",
    jurisdiction: [
      "Unlawful Deduction from Wages",
      "Working Time Regulations"
    ],
    solicitor: "Direct Access",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 686651",
    title: "Mr G Tuffen v Asda Stores Limited",
    year: 2025,
    judge: "",
    court: "East London Employment Tribunal",
    description: "Final Hearing.",
    jurisdiction: [],
    solicitor: "Addleshaw Goddard",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Ref: 1303462/2021",
    title: "Andrew Hemming -v- Ellisa Motors Limited",
    year: 2025,
    judge: "Employment Judge Mensah",
    court: "On:",
    description: "The claimant, Mr Andrew Hemming, brought claims against Ellisa Motors Limited for unpaid holiday pay, unfair dismissal, and redundancy. The tribunal found in favour of the claimant on the holiday pay claim, ordering the respondent to pay £1,843.80 for untaken accrued holiday. However, the claims for unfair dismissal and redundancy were dismissed.",
    jurisdiction: [
      "Redundancy",
      "Unlawful Deduction from Wages",
      "Working Time Regulations"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: 683848",
    title: "Ms Devi Sundar -v- Cardiff University",
    year: 2025,
    judge: "Employment Judge W Brady",
    court: "Employment Tribunal",
    description: "Ms D Sundar brought multiple claims against Cardiff University including unfair dismissal, detriments for protected disclosures, race, disability and marriage discrimination, breach of contract, and victimisation. After several preliminary hearings and amendment applications, all claims were dismissed by the Employment Tribunal, which found no evidence to support unfair dismissal, discrimination, victimisation, or breach of contract. The claimant was also found not to be disabled under the Equality Act 2010, resulting in dismissal of the reasonable adjustments claim.",
    jurisdiction: [
      "Age Discrimination",
      "Breach of Contract",
      "Disability Discrimination",
      "Public Interest Disclosure",
      "Race Discrimination",
      "Victimisation Discrimination"
    ],
    solicitor: "",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "Randeep Sundar",
    key_case_law: [
      "Ellis v Bacon [2023] IRLR 262",
      "Hewage v Grampian Health Board [2012] IRLR 870",
      "Pnaiser v NHS England [2016] IRLR 170",
      "Madarassy v Nomura International [2007] IRLR 246",
      "Nagarajan v London Regional Transport [1999] IRLR 572",
      "Shamoon v Chief Constable of the Royal Ulster Constabulary [2003] IRLR 285"
    ]
  },
  {
    citation: "Case No: N/A",
    title: "Jhuti -v- Royal Mail Group Ltd",
    year: 2025,
    judge: "Employment Judge Bax",
    court: "Employment Appeal Tribunal",
    description: "EAT Appeal / Remission Hearing regarding high-profile whistleblowing claim.",
    jurisdiction: [
      "Health & Safety",
      "Public Interest Disclosure"
    ],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: N/A",
    title: "Mr D Kuma -v- ASDA Stores Limited",
    year: 2025,
    judge: "Employment Judge Bax",
    court: "Employment Tribunal",
    description: "Employment Tribunal proceedings.",
    jurisdiction: [],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: N/A",
    title: "Mrs Z Mason -v- K V Hartshorne (Chemists) Limited",
    year: 2025,
    judge: "Employment Judge Bax",
    court: "Employment Tribunal",
    description: "Employment Tribunal proceedings.",
    jurisdiction: [],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: N/A",
    title: "Shilen Mehta -v- Pomvom UK Limited",
    year: 2025,
    judge: "Employment Judge Bax",
    court: "Employment Tribunal",
    description: "Employment Tribunal proceedings.",
    jurisdiction: [],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: N/A",
    title: "Carvell Appeal",
    year: 2025,
    judge: "Employment Judge Bax",
    court: "Employment Appeal Tribunal",
    description: "Appeal Hearing.",
    jurisdiction: [],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  },
  {
    citation: "Case No: N/A",
    title: "Kaye Tranter -v- [Respondent]",
    year: 2025,
    judge: "Employment Judge Bax",
    court: "Employment Tribunal",
    description: "Pre-Trial proceedings.",
    jurisdiction: [],
    solicitor: "Pharmacists’ Defence Association",
    starred: false,
    leading: "Alexander MacMillan",
    opposing: "N/A",
    key_case_law: []
  }
];

// --- ARTICLES DATABASE ---
const ARTICLES_DATA = [
    {
        id: "point-estimate-fallacy",
        title: "The Tyranny of the Point Estimate: Law, Finance, and False Precision",
        date: "December 2025",
        summary: "A cross-sectoral analysis comparing the flaws of \"point estimates\" in financial forecasting (OBR fiscal headroom) and litigation risk assessment (percentage prospects), arguing for the use of uncertainty bands instead of false precision.",
        content: `
            <div class="article-body">
                <p>In a piece for the <em>Financial Times</em> this week, Yuan Yang MP, a member of the Treasury Select Committee, dismantled a fallacy that plagues modern governance: the obsession with the "point estimate."</p>

                <p>Yang argues that the UK’s fiscal framework is being held hostage by false precision. The Office for Budget Responsibility provides a specific figure for "fiscal headroom," which is the difference between revenue and spending four years hence. This number fluctuates by billions of pounds based on minor data inputs, yet politicians treat it as a hard constraint, slashing investment to meet a number that is, statistically speaking, a ghost.</p>

                <p>As Yang writes: <em>"Don’t describe a number to a greater degree of accuracy than you can guarantee... The UK collectively forgets this lesson every six months."</em></p>

                <p>This will resonate comfortably with anyone who has ever had to value a complex discrimination claim or assess the prospects of an unfair dismissal appeal.</p>

                <h3>The "Legal Headroom" Fallacy</h3>

                <p>In litigation, we face our own version of the point estimate problem. Clients, insurers, and funders demand a percentage figure for "prospects of success." They want to know if a case has a "60%" or "51%" chance of winning. They demand a Schedule of Loss calculated to the penny.</p>

                <p>These demands are understandable, litigation is an investment decision, but they are intellectually dangerous.</p>

                <p>Just as the OBR cannot predict with certainty the tax receipts of 2029, a barrister cannot predict the mood of an Employment Judge on a wet Tuesday in Birmingham. To assign a "65%" prospect to a whistleblowing claim is to apply a veneer of actuarial science to what is, in reality, a chaotic human process. It is a point estimate where an "uncertainty band" is required.</p>

                <h3>The Cost of Certainty</h3>

                <p>The danger, as Yang points out, is not just theoretical; it drives bad behaviour. In government, the fixation on a single headroom figure leads to short-termism and a refusal to invest. In law, the fixation on a specific percentage or quantum figure leads to:</p>

                <ol>
                    <li><strong>The Sunk Cost Trap:</strong> A client told their case is worth "£100,000" (a point estimate) may reject a sensible offer of £60,000, failing to appreciate that the £100k figure sits within a probability band that ranges from £0 to £150k.</li>
                    <li><strong>Litigation Paralysis:</strong> A case with "50/50" prospects is often viewed as a coin toss. In reality, it may be a highly meritorious claim with a single, solvable evidential complex. The number hides the nuance.</li>
                </ol>

                <h3>Embracing the Uncertainty Band</h3>

                <p>Yang suggests that investors in the gilt market are smarter than the politicians: <em>"I don’t think we will be overly focused on what the deficit will be in 2029... the uncertainty band around that number is so high."</em></p>

                <p>Sophisticated litigants must adopt the same mindset. We must stop asking "What is the exact chance of winning?" and start asking: "What is the volatility of this claim? What are the outliers? Is the uncertainty band narrow (a simple unpaid wages claim) or wide (a discrimination claim relying on inference)?"</p>

                <p>The Treasury Select Committee is right to challenge the tyranny of the point estimate. It is time the legal profession—and the clients we advise—did the same.</p>
            </div>
        `
    },

    {
        id: "peggie-v-fife",
        title: "Peggie v Fife in Context: the balancing test in trans rights cases",
        date: "December 2025",
        summary: "An analysis of Peggie v Fife Health Board Case No. 4104864/2024 and For Women Scotland Ltd v Scottish Ministers [2025] ICR 899, clarifying that 'sex' refers to biological sex under the Equality Act 2010 and outlining the 'balancing test' for conflicting rights in the workplace.",
        content: `
            <div class="article-body">
                <p>As I write, the first instance decision in Peggie v Fife Health Board is in the British press, with both apparent vindication for the Claimant (found to have suffered harassment) and the Health Board also protesting it was largely vindicated. What legal insights arise from this nuanced outcome? To understand <em>Peggie</em>, we have to look first at the Supreme Court’s decision in <em>For Women Scotland Ltd v Scottish Ministers [2025]</em>.</p>
                
                <h3>The Context: Sex means Biological Sex</h3>
                <p>In that landmark judgment, the Court clarified a fundamental definition within the Equality Act 2010: "Sex" refers to biological sex. It held that a trans woman (even one holding a Gender Recognition Certificate) remains male for the purposes of the sex discrimination provisions in the Equality Act.</p>
                <p>This distinction is important. It means that when an employer provides a "female-only" space, they are providing it for biological women. However, that doesn't automatically mean trans women must be excluded. It means that allowing access involves a conflict between two protected characteristics: the sex of female employees (and their privacy rights) and the gender reassignment rights of trans employees.</p>

                <h3>The Case: Peggie v Fife Health Board</h3>
                <p><strong>The Facts:</strong> Sandie Peggie, a nurse with 30 years of service, held "gender-critical" beliefs—specifically that sex is immutable and that biological males should not access female-only spaces. Dr. Upton, a junior doctor and trans woman, had been granted permission by the Health Board to use the female staff changing room.</p>
                <p>The conflict came to a head over several incidents, culminating on Christmas Eve 2023. Mrs. Peggie, feeling intimidated and embarrassed by the presence of a biological male while she was undressing, confronted Dr. Upton. The exchange was heated; Mrs. Peggie challenged Dr. Upton’s sex ("what are your chromosomes?") and made a comparison to a controversial case involving a trans prisoner.</p>
                <p>The Health Board suspended Mrs. Peggie, launched a disciplinary investigation that dragged on for nearly a year, and eventually brought unsubstantiated allegations about patient safety against her.</p>

                <p><strong>The Judgment:</strong> The Tribunal found in favour of Mrs. Peggie on several counts of harassment by the employer.</p>
                <p>Of note, the Tribunal applied a "balancing test" (derived from <em>Bank Mellat</em>) to the Health Board’s decision to allow Dr. Upton access to the female changing room. They broke the timeline down into three periods:</p>
                <ul>
                    <li><strong>Period 1 (Lawful):</strong> Initially, granting Dr. Upton access was lawful. No one had complained, and the Board was aiming to be inclusive.</li>
                    <li><strong>Period 2 (Unlawful Harassment):</strong> Once Mrs. Peggie raised a formal concern about her dignity and privacy, the landscape changed. The Board failed to pause or revoke the permission while they found a solution. By allowing the situation to continue knowing Mrs. Peggie felt violated, the Board harassed Mrs. Peggie. They failed to balance her rights with Dr. Upton's.</li>
                    <li><strong>Period 3 (Lawful):</strong> Eventually, the Board adjusted the rotas so the two employees were never on shift together. This was deemed a lawful, proportionate solution.</li>
                </ul>
                <p>The Tribunal also slammed the Board for the "unreasonable length" of the investigation into Mrs. Peggie (which took nearly a year) and for issuing vague instructions effectively silencing her from discussing her case.</p>

                <h3>What does this mean for employers?</h3>
                <p>This judgment suggests that "inclusion" cannot be a passive, blanket policy. It requires active management of conflicting rights.</p>
                <ul>
                    <li><strong>No Automatic Right:</strong> Trans employees do not have an unqualified right to access the single-sex facilities of their acquired gender if it impacts the dignity and privacy of others.</li>
                    <li><strong>No Automatic Ban:</strong> Conversely, there is no absolute ban. If no female staff object, access may be lawful.</li>
                    <li><strong>The Duty to Manage:</strong> Once an objection is raised, the employer must act. Ignoring the complaint, or telling a female employee to "be kind," may amount to unlawful harassment. Solutions might include rotas, single-occupancy pods, or assigning different changing areas—but the status quo cannot persist if it violates dignity.</li>
                </ul>

                <h3>Relevant Case Law</h3>
                <p>The <em>Peggie</em> judgment relies on a specific ecosystem of case law regarding discrimination, definition of sex, and the proportionality of interfering with rights. Key cases cited include:</p>
                <ul>
                    <li><em>For Women Scotland Ltd v Scottish Ministers</em> [2025] ICR 899 – Established that "sex" in the Equality Act 2010 refers to biological sex.</li>
                    <li><em>Forstater v CDG Europe</em> [2022] ICR 1 – Established that gender-critical beliefs (that sex is real and immutable) are protected under the Equality Act.</li>
                    <li><em>Higgs v Farmor’s School</em> [2025] IRLR 368 – Discusses the distinction between holding a belief and manifesting it in an objectionable way.</li>
                    <li><em>Bank Mellat v HM Treasury (No 2)</em> [2014] AC 700 – The source of the proportionality test used by the Tribunal to balance conflicting rights.</li>
                    <li><em>Croft v Royal Mail Group</em> [2003] ICR 1425 – An older but relevant Court of Appeal case regarding trans employees and toilet facilities.</li>
                    <li><em>Chief Constable of West Yorkshire Police v A</em> [2005] 1 AC 51 – Regarding the treatment of trans people in searches.</li>
                    <li><em>Elan-Cane v Secretary of State for the Home Department</em> [2021] UKSC 56 – Confirmed that "sex" and "gender" are distinct concepts in UK law.</li>
                </ul>
            </div>
        `
    },
   {
        id: "equal-pay-perkins",
        title: "The 'Reason Why' Fallacy and Proportionality in Equal Pay: An Analysis of Perkins v Marston (Holdings) Ltd [2025] EAT 170",
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

// --- TESTIMONIALS ---
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

// --- KNOWLEDGE BASE (Summaries for Knowledge Cards) ---
const KNOWLEDGE_BASE = {
    "Age Discrimination": {
        title: "Age Discrimination",
        content: "Protected under the Equality Act 2010. Unlike other characteristics, direct age discrimination can be lawful if it is 'objectively justified' as a proportionate means of achieving a legitimate aim. Common issues include retirement policies and recruitment bias."
    },
    "Breach of Contract": {
        title: "Breach of Contract",
        content: "Claims arising from the employment contract, such as unpaid notice or bonus disputes. In the Tribunal, these are capped at £25,000 and must arise on termination; higher value or complex claims (e.g., restrictive covenants) are heard in the Civil Courts."
    },
    "Disability Discrimination": {
        title: "Disability Discrimination",
        content: "Covers direct discrimination, 'discrimination arising from disability' (s.15), and the duty to make reasonable adjustments (s.20). Litigation often focuses on the definition of disability and whether an employer knew (or should have known) about the condition."
    },
    "Employment Status": {
        title: "Employment Status",
        content: "The legal distinction between 'Employees', 'Workers', and 'Self-Employed' contractors. This status determines entitlement to key rights like unfair dismissal protection, holiday pay, and the national minimum wage."
    },
    "Equal Pay": {
        title: "Equal Pay",
        content: "The right to equal pay for equal work between men and women. These complex claims often involve comparing 'work of equal value' and analysing the employer's 'material factor defence' to explain the pay disparity."
    },
    "Harassment": {
        title: "Harassment",
        content: "Unwanted conduct related to a protected characteristic that violates dignity or creates a hostile environment. The legal test is part subjective (the victim's feeling) and part objective (was it reasonable to feel that way?)."
    },
    "Health & Safety": {
        title: "Health & Safety Detriment",
        content: "Protections for employees who refuse to work in imminent danger or take steps to protect themselves. Dismissals for these reasons are often 'automatically unfair,' requiring no qualifying period of service."
    },
    "Jurisdictional Points": {
        title: "Jurisdictional & Territorial Issues",
        content: "Preliminary disputes determining if the Tribunal has the power to hear a claim. Common issues include strict statutory time limits (typically 3 months) and whether UK employment laws apply to employees working abroad."
    },
    "Practice and Procedure Issues": {
        title: "Tribunal Practice & Procedure",
        content: "Technical disputes governed by the ET Rules of Procedure. This covers strike-out applications, deposit orders, amendments to claims, and disclosure battles—procedural steps that often determine the outcome before a final hearing."
    },
    "Public Interest Disclosure": {
        title: "Whistleblowing (Public Interest Disclosure)",
        content: "Protection for workers reporting wrongdoing under the Employment Rights Act 1996. Claimants must prove a 'qualifying disclosure' was made in the public interest and that it caused the detriment or dismissal."
    },
    "Race Discrimination": {
        title: "Race Discrimination",
        content: "Protection against less favourable treatment based on race, colour, nationality, or ethnic origin. Evidence is rarely overt; Tribunals often have to draw inferences from the primary facts to establish if race was the reason for treatment."
    },
    "Redundancy": {
        title: "Redundancy",
        content: "A fair reason for dismissal caused by a business closure or reduced requirement for work. Fairness depends on meaningful consultation, fair selection criteria, and the search for alternative employment within the organisation."
    },
    "Restraint of Trade / Non competition / Injunctive Relief": {
        title: "Restraint of Trade & Injunctions",
        content: "High-stakes litigation regarding post-termination restrictions (covenants). Employers may seek injunctions to prevent former staff from soliciting clients or joining competitors if necessary to protect legitimate business interests."
    },
    "Sexual Orientation Discrimination": {
        title: "Sexual Orientation Discrimination",
        content: "Protection against discrimination based on sexual orientation (actual or perceived). This includes direct discrimination, harassment, and victimisation."
    },
    "Statutory Discipline and Grievance Procedures": {
        title: "Discipline & Grievance (ACAS Code)",
        content: "Compliance with the ACAS Code of Practice is crucial. Unreasonable failure to follow these procedures can lead to a 25% uplift in compensation awards in successful Tribunal claims."
    },
    "Termination of Employment": {
        title: "Termination of Employment",
        content: "The broad area covering unfair dismissal, constructive dismissal (resigning in response to a breach), and wrongful dismissal (notice pay). The core test is usually whether the employer acted within the 'range of reasonable responses'."
    },
    "TUPE": {
        title: "Transfer of Undertakings (TUPE)",
        content: "Regulations preserving employment terms when a business transfers ownership. Employment transfers automatically; dismissals connected to the transfer are automatically unfair unless for an 'Economic, Technical, or Organisational' (ETO) reason."
    },
    "Unlawful Deduction from Wages": {
        title: "Unlawful Deduction from Wages",
        content: "Claims under s.13 ERA 1996 for unauthorized non-payment. Key issues include 'series of deductions' (Agnew) arguments regarding holiday pay and whether contract terms explicitly authorized the stoppage."
    },
    "Victimisation Discrimination": {
        title: "Victimisation",
        content: "Retaliation against an employee for doing a 'protected act' (e.g., raising a grievance about discrimination). The claimant need not prove the original discrimination occurred, only that they were punished for complaining about it."
    },
    "Whistleblowing & Victimisation": {
        title: "Whistleblowing & Victimisation",
        content: "Complex litigation involving the overlap between statutory whistleblowing protections and the Equality Act. Often involves senior executives and high reputational risk."
    },
    "Working Time Regulations": {
        title: "Working Time & Holiday Pay",
        content: "Rights derived from the WTR 1998, including maximum working weeks, rest breaks, and holiday pay calculations. Recent case law has significantly expanded what must be included in 'normal remuneration' for holiday pay."
    }
};
