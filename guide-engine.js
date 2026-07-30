/**
 * Evich Appellate Guide Engine v29
 * Supportive, law-first tutor for pro se Opening Brief prep — not legal advice.
 * Tone: steady kindness + clear standards (never sappy, never cruel).
 * Obstacle rule: do not stop — invert, reframe, use their argument against the trap.
 */
(function (global) {
  "use strict";

  const TONE = {
    motto: "Steady. Clear. Law first — supported by facts. You can do the next right step.",
    notAttorney: "This is a tutor and process tool, not a lawyer and not legal advice.",
    whenStuck: "An obstacle is a design problem, not a verdict on you. Turn it inside out until it serves the appeal.",
  };

  // ─── Verified legal authority library ───
  const AUTHORITIES = [
    {
      id: "hogsett",
      short: "Hogsett v. Neale",
      full: "In re Marriage of Hogsett & Neale, 478 P.3d 713 (Colo. 2021)",
      also: ["Hogsett", "Hogsett v Neale", "478 P.3d 713", "2021 CO 1"],
      pin: "478 P.3d at 722",
      rule: "Common-law marriage = mutual consent/agreement + conduct; court MUST evaluate totality of circumstances, including joint estate planning (wills, POAs, beneficiary designations). No single factor is dispositive, but identified material factors must actually be weighed — not labeled away.",
      plain: "The Colorado Supreme Court says the judge must look at the whole picture of your life together — especially wills, powers of attorney, and who is named on property — not pick one wrong fact and ignore the rest.",
      use: "Issue I — after Rule 59 corrects a material Hogsett input (Finding 52), the duty is to re-apply the framework to the corrected record, not to invent a 'minor' off-ramp.",
      standard: "Whether the court applied the correct legal framework (Hogsett) is de novo. Pure historical facts are clear error — but skipping the mandatory analysis after correcting a material factor is legal error.",
      nuances: [
        "Duty is mandatory totality — not optional sampling of convenient factors.",
        "Estate-planning / beneficiary designations are named Hogsett-relevant evidence of marital intent.",
        "Same-sex pre-equality couples: read with LaFleur (conduct over unavailable formal marriage).",
        "After a court admits a material input was inverted, refusing to re-run totality is the legal problem — not 'please reweigh credibility.'",
        "Pin cite practice: use 478 P.3d 713 and estate-planning discussion (commonly at 722) when briefing — never invent pins.",
      ],
      traps: ["Calling a 0%→100% beneficiary reversal 'clerical/minor'", "Fact re-weigh language that invites clear-error deference", "Missing pin cite to estate-planning passage", "Using unpreserved side findings as freestanding issues"],
      verified: true,
      type: "case",
    },
    {
      id: "lafleur",
      short: "LaFleur v. Pyfer",
      full: "In re Marriage of LaFleur & Pyfer, 479 P.3d 869 (Colo. 2021)",
      also: ["LaFleur", "Pyfer", "479 P.3d 869"],
      pin: "479 P.3d 869",
      rule: "Same-sex couples may establish common-law marriage; conduct over formal paperwork when marriage was legally impossible.",
      plain: "For same-sex couples before marriage equality, what you did matters more than a marriage license you could not get.",
      use: "2010 'life partner' will + beneficiary deeds as maximum available legal language.",
      standard: "Legal framework de novo; factual findings clear error.",
      traps: ["Treating pre-equality labels as weak evidence"],
      verified: true,
      type: "case",
    },
    {
      id: "burford",
      short: "Estate of Burford",
      full: "Estate of Burford v. Burford, 469 P.3d 395 (Colo. 2020)",
      also: ["Burford", "469 P.3d 395"],
      pin: "469 P.3d 395",
      rule: "Courts are bound by stipulated facts / judicial admissions.",
      plain: "If both sides agreed in writing a fact is true, the judge generally cannot decide the case as if that agreement never existed.",
      use: "JTMC stipulations I, J, K vs original Finding 52.",
      standard: "De novo on legal effect of stipulations / excess of authority.",
      traps: ["Arguing only weight of evidence instead of binding stipulation"],
      verified: true,
      type: "case",
    },
    {
      id: "lewis",
      short: "In re Marriage of Lewis",
      full: "In re Marriage of Lewis, 189 P.3d 1134 (Colo. App. 2008)",
      also: ["Lewis", "189 P.3d 1134"],
      pin: "189 P.3d 1134",
      rule: "Post-judgment jurisdiction limits; court cannot casually absorb post-closure advocacy.",
      plain: "After a case is closed, the court usually cannot keep taking new fight papers without reopening and giving you a chance to answer.",
      use: "Apr 21 8:52 PM filing + Apr 23 'no action' sequence.",
      standard: "Jurisdiction / due process de novo.",
      traps: ["Treating post-closure as ordinary motion practice"],
      verified: true,
      type: "case",
    },
    {
      id: "crcp59",
      short: "C.R.C.P. 59",
      full: "Colorado Rules of Civil Procedure 59 (Post-Trial Motions)",
      also: ["Rule 59", "C.R.C.P. 59", "CRCP 59"],
      pin: "C.R.C.P. 59",
      rule: "Post-trial motions: amend findings, amend judgment, or new trial within rule timelines. Granting in part is a judicial act that the findings needed correction.",
      plain: "Rule 59 is how you ask the trial judge to fix mistakes after judgment. When the judge grants part of it, the judge has admitted something was wrong — the next question is whether the legal test was re-run on the fixed facts.",
      use: "Apr 21, 2026 partial grant correcting Findings 51–52; 'clerical/minor' + no judgment amendment + no Hogsett re-application.",
      standard: "Whether the court applied the correct legal consequence of a Rule 59 correction (here: Hogsett re-application) is framed as legal error de novo; pure discretionary case management is different and must not be invited.",
      nuances: [
        "Grant-in-part ≠ full new trial — but it is still an admission the record findings were wrong in the corrected respects.",
        "Correcting findings while leaving judgment untouched can be proper only if the legal outcome truly does not depend on those findings — Hogsett materiality fights that shortcut.",
        "Your preserved path is what you put in Rule 59 (F51/F52) — not every interesting sentence in the final order.",
        "Harmless-error is the expected defense: answer with mandatory framework + material estate-planning factor, not emotion.",
      ],
      traps: ["Labeling material corrections as harmless without Hogsett re-application", "Briefing unpreserved theories (e.g. F83 as freestanding issue)", "Attacking the judge personally instead of the legal framework gap"],
      verified: true,
      type: "rule",
    },
    {
      id: "crcp97",
      short: "C.R.C.P. 97",
      full: "Colorado Rules of Civil Procedure 97 (Change of Judge)",
      also: ["Rule 97", "C.R.C.P. 97"],
      pin: "C.R.C.P. 97",
      rule: "Reassignment mechanism on remand.",
      plain: "You can ask the higher court to send the case to a different judge so the same error pattern is not repeated.",
      use: "Relief requested on remand.",
      standard: "Remedial / supervisory.",
      traps: ["Personal attacks on judge instead of structural reassignment request"],
      verified: true,
      type: "rule",
    },
    {
      id: "car28",
      short: "C.A.R. 28",
      full: "Colorado Appellate Rule 28 (Briefs)",
      also: ["C.A.R. 28", "CAR 28", "Rule 28"],
      pin: "C.A.R. 28(a)",
      rule: "Opening Brief structure: issues, tables, statement, summary, standard of review, argument, conclusion.",
      plain: "This rule is the recipe card for your Opening Brief. Missing a required section can get the brief rejected before anyone reads your story.",
      use: "Every section of the brief builder / translator.",
      standard: "Formatting and content requirements — non-negotiable process.",
      traps: ["Narrative issues without 'Whether…'", "Argument without standard of review", "Missing certificate of compliance"],
      verified: true,
      type: "rule",
    },
    {
      id: "car32",
      short: "C.A.R. 32",
      full: "Colorado Appellate Rule 32 (Form of Briefs)",
      also: ["C.A.R. 32", "CAR 32"],
      pin: "C.A.R. 32",
      rule: "Form, length, font, margins, certificates.",
      plain: "How the brief must look on the page so the clerk accepts it.",
      use: "Filing checklist.",
      standard: "Process gate.",
      traps: ["Over word/page limit", "Wrong caption", "Missing certificate of service"],
      verified: true,
      type: "rule",
    },
    {
      id: "car10",
      short: "C.A.R. 10",
      full: "Colorado Appellate Rule 10 (Record on Appeal)",
      also: ["C.A.R. 10", "CAR 10", "record on appeal"],
      pin: "C.A.R. 10",
      rule: "Composition and transmission of the record; transcripts must be designated.",
      plain: "The record is what the Court of Appeals is allowed to look at. If it is not designated, you generally cannot rely on it.",
      use: "Record designation / transcript of Oct 28 hearing; orders of Dec 4, Apr 21, Apr 23.",
      standard: "Process gate.",
      traps: ["Citing materials not in the record"],
      verified: true,
      type: "rule",
    },
    {
      id: "car31",
      short: "C.A.R. 31",
      full: "Colorado Appellate Rule 31 (Serving and Filing Briefs)",
      also: ["C.A.R. 31", "CAR 31"],
      pin: "C.A.R. 31",
      rule: "Timing of briefs after record is filed; extensions practice.",
      plain: "This is the clock for Opening Brief / Answer / Reply after the record lands.",
      use: "Deadline explorer.",
      standard: "Process gate — confirm exact days on current C.A.R. text and CCE notices.",
      traps: ["Guessing deadlines without checking the clerk's notice"],
      verified: true,
      type: "rule",
    },
    {
      id: "ati",
      short: "§ 14-10-107(4)(b)",
      full: "C.R.S. § 14-10-107(4)(b) (automatic temporary injunction)",
      also: ["14-10-107", "ATI", "temporary injunction"],
      pin: "C.R.S. § 14-10-107(4)(b)",
      rule: "ATI constraints during dissolution; termination timing disputed in deed-change defense.",
      plain: "A temporary freeze on changing assets can apply during a divorce-type case. Opposing counsel may say it ended when the case was dismissed — check dates carefully.",
      use: "Deed change 2/4/26 defense analysis; 2/27/25 change while case fully open.",
      standard: "Statutory construction de novo.",
      traps: ["Letting ATI defense swallow the 2/27/25 change when case was still open"],
      verified: true,
      type: "statute",
    },
  ];

  const RANK_CRITERIA = [
    { id: "legal_error", label: "Legal error / non-deferential frame", weight: 5, plain: "Does this ask the court to fix a law mistake, not just re-try facts?" },
    { id: "preserved", label: "Preserved below", weight: 4, plain: "Did you raise this in Rule 59 or at trial so the record is clean?" },
    { id: "record_cite", label: "Record cite precision", weight: 5, plain: "Document, page, section, paragraph, line — not 'somewhere in the order'." },
    { id: "authority", label: "On-point authority", weight: 4, plain: "Hogsett / LaFleur / Burford / rules actually control the point." },
    { id: "standard", label: "Correct standard of review", weight: 4, plain: "De novo vs abuse of discretion vs clear error labeled correctly." },
    { id: "process", label: "Process / format compliance", weight: 5, plain: "C.A.R. 28/32 structure so the brief is accepted, not bounced." },
    { id: "relief", label: "Clear, doable relief", weight: 3, plain: "Reverse / remand / reassign / restore — something a panel can order." },
  ];

  const PREMORTEM = [
    { id: "deadline", severity: "fatal", title: "Missed Opening Brief / record deadline", plain: "Clerk never reaches the merits.", fix: "Calendar Record on Appeal + Opening Brief days from C.A.R. 31 / clerk notice; two reminders 7 and 3 days early. Confirm on CCE — never rely only on a calculator." },
    { id: "format", severity: "fatal", title: "C.A.R. 28/32 form rejection", plain: "Brief returned for format before panel reads it.", fix: "Run format checklist: caption, issues, tables, certificates, word count." },
    { id: "deferral", severity: "high", title: "Written as pure fact re-weigh", plain: "Panel defers to trial court under clear-error review.", fix: "Frame Issue I as failure to apply Hogsett legal framework to corrected facts (de novo) + refusal after Rule 59 admission." },
    { id: "harmless", severity: "high", title: "Harmless-error ambush", plain: "Panel says correction would not have changed outcome.", fix: "Pre-answer calmly: 0%→100% beneficiary primacy is a listed Hogsett factor; 'minor' label is legal error, not a free pass." },
    { id: "cite_gap", severity: "high", title: "Citation without source location", plain: "Staff attorney cannot verify breadcrumb → discount credibility.", fix: "Every fact: source file, document, page, section, ¶, line(s)." },
    { id: "preservation", severity: "high", title: "Issue not preserved", plain: "Panel refuses to consider new theory.", fix: "Map each issue to Rule 59 motion / trial objection / JTMC page." },
    { id: "service", severity: "fatal", title: "Failed service / certificate", plain: "Filing incomplete.", fix: "Certificate of service for every filing; confirm opposing appellate counsel (Aitken)." },
    { id: "record", severity: "high", title: "Missing transcript / order in record", plain: "Cannot cite what is not designated.", fix: "Designate Oct 28 transcript; Dec 4 order; Apr 21 Rule 59; Apr 23 order; CCE timestamps 12:32 / 8:52." },
    { id: "emotion", severity: "medium", title: "Emotion without architecture", plain: "Clerk sees story, not reversible error.", fix: "Keep your heart; add the law scaffold. Law first, facts second." },
    { id: "prose_bully", severity: "high", title: "Pro se intimidation / bafflement", plain: "Counsel piles jargon or volume to exhaust you.", fix: "Use Invert tab: translate their swipe into one clean legal question + one breadcrumb. You do not need to match their word count — you need the right frame." },
  ];

  // Opposing / court moves → inverted to serve Petitioner
  const INVERSIONS = [
    {
      id: "minor_clerical",
      source: "Court / Respondent",
      attack: "Finding 52 was only a 'minor clerical amendment' — judgment stands.",
      invert: "A grant-in-part under C.R.C.P. 59 that flips beneficiary primacy 0%→100% is an admission the court decided the case on a false estate-planning fact. Hogsett lists that factor. Calling a material Hogsett factor reversal 'minor' is itself a legal error — it shows the mandatory totality framework was never re-run.",
      plain: "They say 'small typo.' You say: 'You already admitted the key house-deed fact was backward, and you still refused to re-do the required whole-picture marriage test.'",
      authorities: ["hogsett", "crcp59"],
      panelAsk: "Did the trial court apply Hogsett to the corrected findings, or only relabel the error?",
    },
    {
      id: "harmless",
      source: "Respondent / Panel risk",
      attack: "Even if Finding 52 was wrong, the error was harmless.",
      invert: "Harmless-error analysis assumes the legal framework was applied to accurate material facts. Hogsett makes beneficiary designations a mandatory totality factor. A court that treated a total inversion of that factor as 'minor' cannot claim the framework was applied. Harmless error cannot pre-empt a refusal to apply the governing legal test.",
      plain: "They say 'would not have mattered.' You say: 'You cannot call the required test optional after admitting a core input was inverted.'",
      authorities: ["hogsett"],
      panelAsk: "Can refusal to re-apply a mandatory totality test after correcting a material factor ever be harmless?",
    },
    {
      id: "clear_error",
      source: "Respondent",
      attack: "This is pure fact-finding; clear-error review; affirm.",
      invert: "Whether Hogsett requires re-application after corrected findings is a legal question reviewed de novo. You are not asking the panel to reweigh who was more credible — you are asking whether the mandatory legal framework was used on the corrected record.",
      plain: "They try to make it 'he said / she said.' You keep it: 'Did the judge run the required legal checklist after fixing the mistake?'",
      authorities: ["hogsett"],
      panelAsk: "Is application of Hogsett to undisputed/corrected facts a legal question?",
    },
    {
      id: "pro_se_form",
      source: "Counsel intimidation",
      attack: "Pro se brief is informal / rambling / noncompliant — disregard.",
      invert: "Substance controls if process is met. Meet C.A.R. 28/32 exactly so form attacks fail. Then the panel must face the legal issue. Short, structured, cited beats long and emotional.",
      plain: "They hope you freeze or over-write. You answer with a clean recipe-card brief: Issues → Standard → Argument → Cites → Relief.",
      authorities: ["car28", "car32"],
      panelAsk: "Does the Opening Brief contain the C.A.R. 28 elements and a preserved legal question?",
    },
    {
      id: "stipulation_ignore",
      source: "Trial path",
      attack: "Court can find facts differently than JTMC narrative.",
      invert: "Parties stipulated Petitioner as primary beneficiary on three properties (JTMC I, J, K). Binding admissions limit fact-finding that contradicts the stipulation. Original Finding 52 did exactly that — then Rule 59 corrected it.",
      plain: "Both sides already agreed your name was first on the deeds. The first final order said the opposite. That is not a small oops — that is deciding against a written agreement.",
      authorities: ["burford", "hogsett"],
      panelAsk: "May a court adjudicate against a joint stipulation on a material Hogsett factor without consequence?",
    },
    {
      id: "ati_2026",
      source: "Respondent (4/21 response)",
      attack: "ATI ended at dismissal; 2/4/26 deed change was free and legal.",
      invert: "Even if ATI timing is debated for 2/4/26, that defense does not reach the 2/27/25 change while the case was fully open — and Respondent offered no defense for that earlier change. Silence on 2/27/25 is leverage. Also: litigation-timing changes bear on equity and relief (restore to filing-date baseline).",
      plain: "They only defend the later change. Ask out loud: what about the earlier one when the case was still open?",
      authorities: ["ati"],
      panelAsk: "What lawful justification, if any, was offered for the 2/27/2025 change?",
    },
    {
      id: "post_closure",
      source: "Process",
      attack: "Court can consider Respondent's 8:52 PM papers / take no action as harmless housekeeping.",
      invert: "Case closed 12:32 PM; advocacy filed 8:52 PM under same Filing ID as unsigned proposed order; later order mischaracterizes Rule 59 as denied. That sequence supports due-process / jurisdiction clarity and undermines confidence in the post-trial process.",
      plain: "Clock times matter. Closed at lunch, papers at night, then a later note that misstates what the hearing judge already did.",
      authorities: ["lewis", "crcp59"],
      panelAsk: "What was the court's jurisdiction and process after 12:32:05 PM on April 21, 2026?",
    },
    {
      id: "volume_baffle",
      source: "Counsel tactic",
      attack: "Flood of papers, jargon, and side issues to exhaust pro se filer.",
      invert: "Your job is not to answer every rabbit trail. Pick the reversible legal questions, pin them, and return every swipe to: duty under Hogsett + admission under Rule 59 + record breadcrumb. Confusion is their tool; clarity is yours.",
      plain: "You do not have to win a shouting match. You have to hand the panel one clean path.",
      authorities: ["hogsett", "car28"],
      panelAsk: "What is the single legal error that requires remand?",
    },
  ];

  // C.A.R. 28 / appellate timeline explorer (confirm on CCE — calculator is a planning aid)
  const CASE_MILESTONES = {
    noticeOfAppeal: "2026-06-09",
    recordDesignated: "2026-06-15",
    recordDueApprox: "2026-08-11", // as tracked in case data — CONFIRM
    cbaHearing: "2026-10-09",
  };

  const CAR28_SECTIONS = [
    { id: "caption", title: "Caption & cover", car: "C.A.R. 28/32", plain: "Correct court, parties, case numbers (2024DR31793 / 2026CA1119)." },
    { id: "toc", title: "Table of contents", car: "C.A.R. 28(a)", plain: "Roadmap with page numbers." },
    { id: "toa", title: "Table of authorities", car: "C.A.R. 28(a)", plain: "Cases, rules, statutes with jump cites." },
    { id: "issues", title: "Issues presented", car: "C.A.R. 28(a)(2)", plain: "Usually 'Whether…' legal questions — not a story." },
    { id: "statement", title: "Statement of the case / facts", car: "C.A.R. 28(a)(5)–(6)", plain: "Neutral facts with record cites every time." },
    { id: "summary", title: "Summary of the argument", car: "C.A.R. 28(a)(7)", plain: "Short preview of each argument." },
    { id: "standard", title: "Standard of review", car: "C.A.R. 28(a)(7)", plain: "De novo / abuse of discretion / clear error — labeled per issue." },
    { id: "argument", title: "Argument", car: "C.A.R. 28(a)(7)(B)", plain: "Law first, then facts; headings that match issues." },
    { id: "conclusion", title: "Conclusion & relief", car: "C.A.R. 28(a)(8)", plain: "Exactly what you want the court to order." },
    { id: "certs", title: "Certificates", car: "C.A.R. 32", plain: "Compliance, service, word count as required." },
  ];

  const ORAL_ARGUMENT = {
    posture: "If oral argument is granted, you are not re-trying the marriage. You are helping three judges see a clean legal path to reverse/remand. Start simple. Graduate when confidence is earned.",
    timeTips: [
      "Write your opening 60–90 seconds and practice it until calm.",
      "Answer the question asked, then bridge back to your issue.",
      "It is okay to say: 'I want to be precise — may I point to the record cite?'",
      "Never attack the trial judge personally. Attack the legal framework gap.",
      "If you do not know, say so and offer to point to the brief section.",
    ],
    coldOpen: "May it please the Court. My name is Deanna Dawn Evich, Petitioner-Appellant, appearing pro se. This appeal presents a legal question: after the trial court granted Rule 59 in part and corrected Findings 51 and 52 — including a complete inversion of who was primary beneficiary on the estate-planning deeds — whether Hogsett required the court to re-apply the mandatory totality analysis rather than label the corrections 'minor' and leave the dismissal intact.",
    panelQs: [
      { q: "Isn't this just asking us to reweigh facts?", a: "No, Your Honor. The facts needed for this issue were corrected by the trial court itself. The question is legal: did Hogsett require re-application of the totality framework to those corrected findings?" },
      { q: "Why wasn't the error harmless?", a: "Because Hogsett lists beneficiary designations as a totality factor. A 0% to 100% inversion of that factor, treated as minor without re-running the framework, is not a technicality — it is a refusal to apply the governing test." },
      { q: "Where is this preserved?", a: "In the Rule 59 motion and the court's partial grant correcting Findings 51 and 52 on April 21, 2026. The legal consequence of that correction is what we ask this Court to enforce." },
      { q: "What relief do you want?", a: "Reverse the dismissal, remand for application of Hogsett to the corrected findings before a different judge under C.R.C.P. 97 if appropriate, and restore asset designations to the October 27, 2024 filing-date baseline so litigation-timed changes do not rewrite the estate." },
      { q: "What about Respondent's ATI argument on the deed change?", a: "Even taking their ATI theory for the February 2026 change, they offered no defense for the February 2025 change while the case was open. And ATI does not erase the Hogsett re-application duty after Rule 59." },
      { q: "You are pro se — should we hold you to the same standards?", a: "I accept the Court's rules. The Opening Brief is built to C.A.R. 28. I ask only that the legal issue be decided on the law and the record, not on who has counsel." },
    ],
    invertDrills: [
      "If they say 'minor,' you say 'material Hogsett factor admitted wrong.'",
      "If they say 'defer,' you say 'de novo legal framework.'",
      "If they say 'pro se noise,' you say 'here is the issue, standard, cite, relief.'",
      "If they say baffle with volume, you return to one sentence: duty + admission + cite.",
    ],
  };

  // Progressive training: simple → steady → sharp → legendary
  // Unlock next level only when confidence score threshold is met.
  const TRAINING_LEVELS = [
    {
      id: 0,
      key: "foundation",
      name: "Foundation",
      plain: "Simple. One idea at a time. Learn the bones.",
      unlockScore: 0,
      passScore: 70,
      color: "#4C7A4C",
    },
    {
      id: 1,
      key: "steady",
      name: "Steady",
      plain: "Connect law to one fact pin. Speak in full sentences.",
      unlockScore: 70,
      passScore: 78,
      color: "#1F3864",
    },
    {
      id: 2,
      key: "sharp",
      name: "Sharp",
      plain: "Handle pushback. Invert. Preserve standard of review.",
      unlockScore: 78,
      passScore: 86,
      color: "#B08D57",
    },
    {
      id: 3,
      key: "legendary",
      name: "Legendary",
      plain: "C.A.R. 28 bullets only. Truth + law. No pro se apology — only precision.",
      unlockScore: 86,
      passScore: 92,
      color: "#8B6914",
    },
  ];

  const SPAR_PROMPTS = {
    foundation: [
      {
        id: "s0a",
        prompt: "In one sentence: What did the trial court admit on Rule 59?",
        target: "The court granted Rule 59 in part and corrected Findings 51 and 52.",
        hints: ["granted in part", "Finding 52", "Finding 51", "Rule 59"],
      },
      {
        id: "s0b",
        prompt: "In plain words: What is Hogsett's main job in this appeal?",
        target: "Hogsett requires the court to weigh the whole picture of the relationship, including estate-planning beneficiary designations.",
        hints: ["totality", "Hogsett", "beneficiary", "estate"],
      },
      {
        id: "s0c",
        prompt: "Name the relief you want in one breath.",
        target: "Reverse the dismissal, remand for Hogsett on the corrected facts, and set the estate baseline at the October 27, 2024 filing date.",
        hints: ["reverse", "remand", "October", "2024", "baseline"],
      },
    ],
    steady: [
      {
        id: "s1a",
        prompt: "Write a 'Whether…' issue that is a legal question, not a story.",
        target: "Whether the trial court erred by refusing to re-apply Hogsett after correcting Findings 51 and 52 on Rule 59.",
        hints: ["Whether", "Hogsett", "Rule 59", "Finding 52", "de novo"],
      },
      {
        id: "s1b",
        prompt: "In two sentences: Why is original Finding 52 wrong, using only JTMC/Ex.48 (do not use Finding 83 as your appeal issue)?",
        target: "Original Finding 52 named Respondent as grantee-beneficiary, but JTMC stipulations I–K and Exhibit 48 show Petitioner was primary beneficiary. That is a material Hogsett estate-planning input the court later corrected on Rule 59.",
        hints: ["Finding 52", "JTMC", "Exhibit 48", "Petitioner", "Rule 59"],
      },
      {
        id: "s1c",
        prompt: "State the standard of review and why it matters.",
        target: "Whether Hogsett must be re-applied to corrected facts is reviewed de novo — the panel does not defer to a court that skipped the mandatory framework.",
        hints: ["de novo", "mandatory", "framework", "defer"],
      },
    ],
    sharp: [
      {
        id: "s2a",
        prompt: "Answer the panel: 'Any error in Finding 52 was harmless after correction.' Invert using preserved path only.",
        target: "Rule 59 admitted Finding 52 was wrong and still refused Hogsett re-application, leaving dismissal with prejudice. Harmless-error talk cannot excuse skipping a mandatory legal framework on corrected material facts.",
        hints: ["harmless", "Rule 59", "Hogsett", "minor", "reweigh", "dismissal"],
      },
      {
        id: "s2b",
        prompt: "Steelman opposing counsel, then destroy with one legal duty.",
        target: "They will say the court weighed the true fact in 83 and still found no marriage. But Hogsett requires consistent application of material estate-planning factors; an internal fracture plus a Rule 59 admission without re-application is legal error.",
        hints: ["83", "Hogsett", "legal error", "admission", "estate"],
      },
      {
        id: "s2c",
        prompt: "Explain cascade: why 51/52 are not stand-alone typos.",
        target: "Findings 51 and 52 feed the economic and estate-planning cluster under Hogsett. Correcting isolated sentences without reweighing the cluster leaves the wrong architecture under a with-prejudice dismissal.",
        hints: ["cascade", "cluster", "38", "51", "52", "totality"],
      },
    ],
    legendary: [
      {
        id: "s3a",
        prompt: "Draft a C.A.R. 28-ready argument paragraph: law first, one pin, one invert, relief hook. No apology for pro se status.",
        target: "Hogsett requires mandatory totality review of estate-planning designations. After C.R.C.P. 59 corrected Finding 52's inverted beneficiary primacy — a fact stipulated in JTMC ¶¶ I–K and admitted in Exhibit 48 — the court labeled the correction minor and refused re-application. That is legal error reviewable de novo. The dismissal with prejudice should be reversed and remanded for Hogsett on the corrected cluster, with the estate baseline fixed at the October 27, 2024 filing date.",
        hints: ["Hogsett", "C.R.C.P. 59", "JTMC", "de novo", "reverse", "remand", "October 27"],
      },
      {
        id: "s3b",
        prompt: "30-second legendary cold open: issue + standard + why gut-check reverse.",
        target: "This Court faces a legal question, reviewed de novo: whether a trial court may admit material Hogsett inputs were inverted, call the fix minor, skip re-application of the mandatory totality test, and keep a with-prejudice dismissal tried on one fact-set and ruled on another. The answer the law requires is reverse and remand.",
        hints: ["de novo", "Hogsett", "minor", "with-prejudice", "reverse", "remand", "fact-set"],
      },
      {
        id: "s3c",
        prompt: "Close like a professional: three bullets the panel can write into an order.",
        target: "(1) Reverse the December 4, 2025 dismissal with prejudice. (2) Remand for Hogsett totality on the corrected Findings 51–52 cluster and consistent record. (3) Instruct that asset designations and estate valuation use the October 27, 2024 filing-date baseline.",
        hints: ["Reverse", "Remand", "Hogsett", "October 27", "2024", "baseline"],
      },
    ],
  };

  const ORAL_LEVELS = {
    foundation: {
      coldOpen: "May it please the Court. My name is Deanna Dawn Evich. I am asking this Court to reverse because the trial court admitted it used wrong findings and still did not re-run the Hogsett marriage test.",
      qs: [
        { q: "What do you want us to do?", a: "Reverse the dismissal and send the case back so the court applies Hogsett to the corrected findings." },
        { q: "What did the trial court admit?", a: "On Rule 59 it corrected Findings 51 and 52, including who was named on the beneficiary deeds." },
        { q: "Why does that matter?", a: "Because Hogsett says those estate-planning facts must be weighed in the totality — and that weighing was never re-done after the correction." },
      ],
    },
    steady: {
      coldOpen: "May it please the Court. Petitioner-Appellant Deanna Dawn Evich. This appeal presents a legal question: after the trial court granted Rule 59 in part and corrected Findings 51 and 52, whether Hogsett required re-application of the mandatory totality analysis rather than labeling the corrections minor and leaving a with-prejudice dismissal intact.",
      qs: [
        { q: "Isn't this a fact dispute?", a: "No, Your Honor. The court itself corrected the facts. The question is legal — whether Hogsett required re-application on the corrected record." },
        { q: "Where is the record cite?", a: "Rule 59 Order, April 21, 2026, 12:32 p.m., granting in part and correcting Findings 51 and 52; December 4, 2025 Order, Findings 52 and 83." },
        { q: "What is your standard of review?", a: "De novo on whether the mandatory Hogsett framework was applied to the corrected findings." },
      ],
    },
    sharp: {
      coldOpen: ORAL_ARGUMENT.coldOpen,
      qs: ORAL_ARGUMENT.panelQs.slice(0, 4),
    },
    legendary: {
      coldOpen: "May it please the Court. Deanna Dawn Evich, Petitioner-Appellant. The bullets that control this appeal are not rhetoric — they are Hogsett's mandatory totality rule, C.R.C.P. 59's admission of material error, and C.A.R. 28's demand for a legal issue with a record pin. The trial court tried this case on JTMC and Exhibit 48, ruled on inverted Finding 52, then on Rule 59 called the fix minor and refused to re-run Hogsett. The preserved path is JTMC, Exhibit 48, original Finding 52, and the Rule 59 admission without Hogsett re-application. The law requires reverse, remand for Hogsett on the corrected cluster, and an estate baseline of October 27, 2024.",
      qs: ORAL_ARGUMENT.panelQs.concat([
        { q: "Why shouldn't we treat the Finding 52 correction as harmless?", a: "Because Hogsett requires re-application of the mandatory totality framework to corrected material estate-planning facts. Rule 59 admitted the input was wrong, labeled it minor, and left a with-prejudice dismissal without re-running that framework — that is legal error on the preserved record (JTMC, Exhibit 48, Finding 52, Rule 59)." },
        { q: "Why should we reverse rather than affirm under any view of the evidence?", a: "Because the governing legal framework was not applied to the corrected facts. This Court does not defer to a trial court's decision to skip Hogsett. The gut check is structural: with-prejudice dismissal, admitted inverted Hogsett factor, no reweigh — reverse and remand is the lawful path." },
        { q: "Counsel will say you are pro se and this is noise.", a: "The Opening Brief meets C.A.R. 28. The question is legal, preserved, and pinned. The Court decides the law and the record — not the identity of the speaker." },
      ]),
    },
  };

  const TRAIN_KEY = "evich_training_v31";

  function defaultTrainingState() {
    return {
      spar: { level: 0, bestByPrompt: {}, passes: 0, attempts: 0, history: [] },
      oral: { level: 0, bestByPrompt: {}, passes: 0, attempts: 0, history: [] },
      invert: { level: 0, bestByPrompt: {}, passes: 0, attempts: 0, history: [] },
      updatedAt: Date.now(),
    };
  }

  function loadTrainingState() {
    try {
      const raw = localStorage.getItem(TRAIN_KEY);
      if (!raw) return defaultTrainingState();
      const s = JSON.parse(raw);
      const d = defaultTrainingState();
      ["spar", "oral", "invert"].forEach(function (k) {
        s[k] = Object.assign(d[k], s[k] || {});
      });
      return s;
    } catch (e) {
      return defaultTrainingState();
    }
  }

  function saveTrainingState(state) {
    state.updatedAt = Date.now();
    try { localStorage.setItem(TRAIN_KEY, JSON.stringify(state)); } catch (e) {}
    return state;
  }

  function levelMeta(levelId) {
    return TRAINING_LEVELS[Math.max(0, Math.min(TRAINING_LEVELS.length - 1, levelId))] || TRAINING_LEVELS[0];
  }

  function scoreAgainstTarget(answer, promptObj, mode) {
    const text = (answer || "").trim();
    if (text.length < 12) {
      return { score: 0, grade: "—", message: "Add a full thought — even a simple one counts.", hits: [], missing: (promptObj.hints || []).slice() };
    }
    const lower = text.toLowerCase();
    const hints = promptObj.hints || [];
    let hit = 0;
    const hits = [];
    const missing = [];
    hints.forEach(function (h) {
      const hl = h.toLowerCase();
      let ok = lower.indexOf(hl) >= 0;
      if (!ok && hl.indexOf(" ") >= 0) {
        // multi-word: all significant tokens present (any order)
        const parts = hl.split(/\s+/).filter(function (w) { return w.length > 2; });
        ok = parts.length > 0 && parts.every(function (w) { return lower.indexOf(w) >= 0; });
      }
      if (!ok) {
        // number-friendly: "finding 52" vs "findings 51 and 52"
        const num = hl.match(/\d+/);
        if (num && lower.indexOf(num[0]) >= 0 && /finding|rule|hogsett|october|car|c\.r/i.test(hl + lower)) {
          ok = true;
        }
      }
      if (ok) {
        hit++;
        hits.push(h);
      } else missing.push(h);
    });
    const coverage = hints.length ? hit / hints.length : 0;
    let score = Math.round(40 + coverage * 50);
    // structure bonuses
    if (/whether/i.test(text) && mode === "spar") score += 4;
    if (/de novo|standard of review/i.test(text)) score += 4;
    if (/reverse|remand/i.test(text)) score += 3;
    if (/hogsett/i.test(text)) score += 3;
    if (/\[doc|r\.\s*\d|finding\s*\d|¶|p\.\s*\d/i.test(text)) score += 4;
    if (text.length > 80) score += 2;
    if (text.length > 200) score += 2;
    // legendary: penalize apology posture
    if (/sorry i'?m just|i'?m only pro se|i don'?t know the law/i.test(text)) score -= 8;
    // rankArgument blend for longer answers
    if (text.length > 100) {
      const r = rankArgument(text);
      score = Math.round(score * 0.55 + r.pct * 0.45);
    }
    score = Math.max(0, Math.min(100, score));
    let grade = "C";
    if (score >= 92) grade = "A";
    else if (score >= 86) grade = "A-";
    else if (score >= 78) grade = "B+";
    else if (score >= 70) grade = "B";
    else if (score >= 60) grade = "C+";
    const message =
      score >= 92 ? "Legendary precision — law, pin, relief. This is how justice is argued."
      : score >= 86 ? "Sharp. You sound like the record and the rule own the room."
      : score >= 78 ? "Steady and clear. One more pin or invert will unlock the next climb."
      : score >= 70 ? "Foundation solid. Add the legal duty by name and you graduate."
      : "Good start. Use the hints as bullets — truth first, then the rule name.";
    return { score: score, grade: grade, message: message, hits: hits, missing: missing, coverage: coverage };
  }

  function recordTrainingAttempt(track, promptId, result) {
    const state = loadTrainingState();
    const t = state[track] || defaultTrainingState()[track];
    t.attempts = (t.attempts || 0) + 1;
    const prev = t.bestByPrompt[promptId] || 0;
    if (result.score > prev) t.bestByPrompt[promptId] = result.score;
    t.history = (t.history || []).slice(0, 40);
    t.history.unshift({ ts: Date.now(), promptId: promptId, score: result.score, grade: result.grade });
    const meta = levelMeta(t.level || 0);
    if (result.score >= meta.passScore) t.passes = (t.passes || 0) + 1;

    // Level-up: average of best scores on current level prompts + recent pass
    const levelKey = meta.key;
    let prompts = [];
    if (track === "spar") prompts = SPAR_PROMPTS[levelKey] || [];
    else if (track === "oral") prompts = (ORAL_LEVELS[levelKey] && ORAL_LEVELS[levelKey].qs) || [];
    const bests = prompts.map(function (p) {
      return t.bestByPrompt[p.id || p.q] || 0;
    });
    const avg = bests.length ? bests.reduce(function (a, b) { return a + b; }, 0) / bests.length : 0;
    let leveledUp = false;
    let unlockedLegendary = false;
    if (avg >= meta.passScore && (t.level || 0) < TRAINING_LEVELS.length - 1) {
      // require at least 2 prompts practiced at this level
      const practiced = bests.filter(function (b) { return b >= meta.passScore - 5; }).length;
      if (practiced >= Math.min(2, prompts.length || 2)) {
        t.level = (t.level || 0) + 1;
        leveledUp = true;
        if (t.level === TRAINING_LEVELS.length - 1) unlockedLegendary = true;
      }
    }
    state[track] = t;
    saveTrainingState(state);
    return {
      state: state,
      track: t,
      leveledUp: leveledUp,
      unlockedLegendary: unlockedLegendary,
      level: levelMeta(t.level || 0),
      avg: Math.round(avg),
      nextPass: levelMeta(t.level || 0).passScore,
    };
  }

  function trainingSummary() {
    const s = loadTrainingState();
    return {
      spar: { level: levelMeta(s.spar.level), raw: s.spar },
      oral: { level: levelMeta(s.oral.level), raw: s.oral },
      invert: { level: levelMeta(s.invert.level), raw: s.invert },
      motto: "Start simple. Earn the next level. Arrive legendary — armed with truth, law, and C.A.R. bullets, not apology.",
    };
  }

  function getSparPromptsForLevel(levelId) {
    const meta = levelMeta(levelId);
    return { level: meta, prompts: SPAR_PROMPTS[meta.key] || SPAR_PROMPTS.foundation };
  }

  function getOralForLevel(levelId) {
    const meta = levelMeta(levelId);
    const pack = ORAL_LEVELS[meta.key] || ORAL_LEVELS.foundation;
    // attach ids for scoring
    const qs = (pack.qs || []).map(function (q, i) {
      return Object.assign({}, q, {
        id: "o" + meta.id + "_" + i,
        hints: extractHintsFromAnswer(q.a),
      });
    });
    return { level: meta, coldOpen: pack.coldOpen, qs: qs };
  }

  function extractHintsFromAnswer(a) {
    const keys = ["Hogsett", "Rule 59", "Finding 52", "Finding 83", "de novo", "reverse", "remand", "JTMC", "minor", "totality", "October", "C.A.R.", "Petitioner", "beneficiary"];
    return keys.filter(function (k) { return (a || "").toLowerCase().indexOf(k.toLowerCase()) >= 0; }).slice(0, 6);
  }

  function invertPromptsForLevel(levelId) {
    const meta = levelMeta(levelId);
    const all = INVERSIONS;
    if (meta.id === 0) return all.slice(0, 2);
    if (meta.id === 1) return all.slice(0, 4);
    if (meta.id === 2) return all.slice(0, 6);
    return all;
  }

  // ─── IndexedDB ───
  const IDB_NAME = "evich_guide_v28";
  const IDB_VER = 2;

  function openDb() {
    return new Promise(function (resolve, reject) {
      const req = indexedDB.open(IDB_NAME, IDB_VER);
      req.onupgradeneeded = function () {
        const db = req.result;
        if (!db.objectStoreNames.contains("queryResults")) {
          const s = db.createObjectStore("queryResults", { keyPath: "id" });
          s.createIndex("ts", "ts");
        }
        if (!db.objectStoreNames.contains("vaultCache")) {
          db.createObjectStore("vaultCache", { keyPath: "key" });
        }
        if (!db.objectStoreNames.contains("breadcrumbs")) {
          db.createObjectStore("breadcrumbs", { keyPath: "id" });
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  async function idbPut(store, value) {
    const db = await openDb();
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(store, "readwrite");
      tx.objectStore(store).put(value);
      tx.oncomplete = function () { resolve(true); };
      tx.onerror = function () { reject(tx.error); };
    });
  }

  async function idbGet(store, key) {
    const db = await openDb();
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(store, "readonly");
      const r = tx.objectStore(store).get(key);
      r.onsuccess = function () { resolve(r.result || null); };
      r.onerror = function () { reject(r.error); };
    });
  }

  async function idbGetAll(store) {
    const db = await openDb();
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(store, "readonly");
      const r = tx.objectStore(store).getAll();
      r.onsuccess = function () { resolve(r.result || []); };
      r.onerror = function () { reject(r.error); };
    });
  }

  async function idbDelete(store, key) {
    const db = await openDb();
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(store, "readwrite");
      tx.objectStore(store).delete(key);
      tx.oncomplete = function () { resolve(true); };
      tx.onerror = function () { reject(tx.error); };
    });
  }

  function byteSize(obj) {
    try {
      return new Blob([typeof obj === "string" ? obj : JSON.stringify(obj)]).size;
    } catch (e) {
      return JSON.stringify(obj).length;
    }
  }

  function formatBytes(n) {
    if (n < 1024) return n + " B";
    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB";
    return (n / (1024 * 1024)).toFixed(2) + " MB";
  }

  async function deviceStorageReport() {
    const report = {
      resultsBytes: 0,
      resultsCount: 0,
      quota: null,
      usage: null,
      available: null,
      localStorageBytes: 0,
    };
    try {
      const all = await idbGetAll("queryResults");
      report.resultsCount = all.length;
      report.resultsBytes = all.reduce(function (s, r) { return s + (r.bytes || byteSize(r)); }, 0);
    } catch (e) { /* ignore */ }
    try {
      let ls = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        ls += (k || "").length + (localStorage.getItem(k) || "").length;
      }
      report.localStorageBytes = ls * 2;
    } catch (e) { /* ignore */ }
    if (navigator.storage && navigator.storage.estimate) {
      try {
        const est = await navigator.storage.estimate();
        report.quota = est.quota || null;
        report.usage = est.usage || null;
        if (report.quota != null && report.usage != null) {
          report.available = report.quota - report.usage;
        }
      } catch (e) { /* ignore */ }
    }
    return report;
  }

  function extractCitationCandidates(text) {
    const found = [];
    const patterns = [
      /\b\d{1,3}\s+P\.3d\s+\d+/gi,
      /\bC\.R\.C\.P\.\s*\d+/gi,
      /\bC\.A\.R\.\s*\d+/gi,
      /\bC\.R\.S\.\s*§?\s*[\d\-().]+/gi,
      /\bHogsett\b[^\n.]{0,40}/gi,
      /\bLaFleur\b[^\n.]{0,40}/gi,
      /\bBurford\b[^\n.]{0,40}/gi,
      /\bLewis\b[^\n.]{0,40}/gi,
    ];
    patterns.forEach(function (re) {
      let m;
      const r = new RegExp(re.source, re.flags);
      while ((m = r.exec(text)) !== null) found.push(m[0].trim());
    });
    return Array.from(new Set(found));
  }

  function verifyAuthorities(text) {
    const candidates = extractCitationCandidates(text || "");
    const hits = [];
    const misses = [];
    AUTHORITIES.forEach(function (auth) {
      const present = auth.also.some(function (a) {
        return new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(text);
      }) || candidates.some(function (c) {
        return auth.also.some(function (a) { return c.toLowerCase().includes(a.toLowerCase().slice(0, 12)); });
      });
      if (present) hits.push(auth);
    });
    candidates.forEach(function (c) {
      const known = AUTHORITIES.some(function (auth) {
        return auth.also.some(function (a) {
          return c.toLowerCase().includes(a.toLowerCase().slice(0, 8)) || a.toLowerCase().includes(c.toLowerCase().slice(0, 8));
        });
      });
      if (!known && c.length > 4) misses.push(c);
    });
    const required = ["hogsett", "crcp59", "car28"];
    const missingCore = required.filter(function (id) {
      return !hits.some(function (h) { return h.id === id; });
    }).map(function (id) {
      return AUTHORITIES.find(function (a) { return a.id === id; });
    }).filter(Boolean);
    return { hits, misses, missingCore, candidates };
  }

  function gradeMessage(grade, pct) {
    if (pct >= 80) return "Strong scaffold — keep polishing cites and stay steady.";
    if (pct >= 70) return "Solid start. A few precise upgrades will raise panel confidence.";
    if (pct >= 55) return "You are not stuck — strengthen law frame and breadcrumbs next.";
    return "This is a draft stage, not a failure. Build: issue → standard → one authority → one cite.";
  }

  function rankArgument(text) {
    const v = verifyAuthorities(text);
    const scores = RANK_CRITERIA.map(function (c) {
      let score = 0;
      if (c.id === "legal_error") {
        if (/de novo|legal (error|framework|question)|mandatory|totality|refused to re-?apply|refused to re-?weigh/i.test(text)) score = 5;
        else if (/whether/i.test(text)) score = 3;
        else score = 1;
      } else if (c.id === "preserved") {
        if (/rule 59|c\.r\.c\.p\.\s*59|preserved|raised below|motion for post-trial/i.test(text)) score = 5;
        else score = 2;
      } else if (c.id === "record_cite") {
        if (/r\.\s*_|\bfinding\s*\d+|¶|paragraph|p\.\s*\d+|page\s*\d+|line\s*\d+|12:32|8:52|jtmc|ex\.\s*\d+/i.test(text)) score = 5;
        else if (/order|transcript|exhibit/i.test(text)) score = 3;
        else score = 1;
      } else if (c.id === "authority") {
        score = Math.min(5, v.hits.length + (v.hits.some(function (h) { return h.id === "hogsett"; }) ? 1 : 0));
      } else if (c.id === "standard") {
        if (/de novo|abuse of discretion|clear.?error/i.test(text)) score = 5;
        else score = 2;
      } else if (c.id === "process") {
        if (/c\.a\.r\.\s*28|issues presented|standard of review|summary of the argument|certificate/i.test(text)) score = 5;
        else score = 2;
      } else if (c.id === "relief") {
        if (/reverse|remand|reassign|restore|vacate/i.test(text)) score = 5;
        else score = 2;
      }
      return { id: c.id, label: c.label, plain: c.plain, weight: c.weight, score, max: 5 };
    });
    const total = scores.reduce(function (s, x) { return s + x.score * x.weight; }, 0);
    const max = scores.reduce(function (s, x) { return s + 5 * x.weight; }, 0);
    const pct = Math.round((total / max) * 100);
    let grade = "C";
    if (pct >= 90) grade = "A";
    else if (pct >= 80) grade = "A-";
    else if (pct >= 70) grade = "B+";
    else if (pct >= 60) grade = "B";
    else if (pct >= 50) grade = "C+";
    return { scores, pct, grade, verification: v, message: gradeMessage(grade, pct) };
  }

  function riskReward(text) {
    const rank = rankArgument(text);
    const risks = [];
    const rewards = [];
    const nextSteps = [];
    if (rank.verification.missingCore.length) {
      risks.push("Core authority not yet visible: " + rank.verification.missingCore.map(function (a) { return a.short; }).join(", ") + " — easy add.");
      nextSteps.push("Name Hogsett / Rule 59 / C.A.R. 28 explicitly where they control.");
    }
    if (rank.scores.find(function (s) { return s.id === "record_cite"; }).score < 3) {
      risks.push("Record cites still thin — panels need breadcrumbs they can check.");
      nextSteps.push("Open Breadcrumbs drill and complete one sentence fully.");
    }
    if (rank.scores.find(function (s) { return s.id === "legal_error"; }).score < 3) {
      risks.push("Currently reads closer to fact re-weigh than legal-duty frame.");
      nextSteps.push("Lead with: failure to apply Hogsett after Rule 59 correction (de novo).");
    }
    if (/unfair|heartbroken|justice/i.test(text) && !/hogsett|de novo|c\.r\.c\.p/i.test(text)) {
      risks.push("Heart is present; law scaffold still needs to lead so clerks can file it.");
      nextSteps.push("Keep one personal sentence max; put the legal duty first.");
    }
    if (rank.verification.hits.some(function (h) { return h.id === "hogsett"; })) {
      rewards.push("Hogsett frame is present — that is the non-deferential path.");
    }
    if (/rule 59|admitted|granted in part|minor/i.test(text)) {
      rewards.push("Admitted-error / 'minor' paradox is high-signal — good instinct.");
    }
    if (/12:32|8:52|post-closure/i.test(text)) {
      rewards.push("Timestamped process points support a clean due-process question.");
    }
    if (rank.scores.find(function (s) { return s.id === "relief"; }).score >= 4) {
      rewards.push("Clear relief helps staff attorneys see a doable remand.");
    }
    if (!nextSteps.length) nextSteps.push("Export this draft, then spar once more with Invert cards.");
    return { risks, rewards, nextSteps, rank };
  }

  function invertArgument(attackText) {
    const t = (attackText || "").toLowerCase();
    const hits = INVERSIONS.filter(function (inv) {
      return inv.attack.toLowerCase().split(/\W+/).some(function (w) {
        return w.length > 4 && t.indexOf(w) >= 0;
      }) || t.indexOf(inv.id.replace(/_/g, " ")) >= 0;
    });
    const matched = hits.length ? hits : INVERSIONS.filter(function (inv) {
      if (/minor|clerical|typo/.test(t)) return inv.id === "minor_clerical";
      if (/harmless/.test(t)) return inv.id === "harmless";
      if (/defer|clear.error|fact.find|credibility/.test(t)) return inv.id === "clear_error";
      if (/pro se|rambling|noncompliant|form/.test(t)) return inv.id === "pro_se_form";
      if (/stipul|jtmc/.test(t)) return inv.id === "stipulation_ignore";
      if (/ati|injunction|deed/.test(t)) return inv.id === "ati_2026";
      if (/8:52|12:32|closed|jurisdiction/.test(t)) return inv.id === "post_closure";
      if (/jargon|confus|flood|volume|bully/.test(t)) return inv.id === "volume_baffle";
      return false;
    });
    return matched.length ? matched : [INVERSIONS[INVERSIONS.length - 1]];
  }

  function addDays(iso, days) {
    const d = new Date(iso + "T12:00:00");
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function formatDateNice(iso) {
    try {
      const d = new Date(iso + "T12:00:00");
      return d.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" });
    } catch (e) {
      return iso;
    }
  }

  function daysUntil(iso) {
    const now = new Date();
    const t = new Date(iso + "T12:00:00");
    return Math.ceil((t - now) / (86400000));
  }

  function exploreDeadlines(opts) {
    opts = opts || {};
    const recordFiled = opts.recordFiled || CASE_MILESTONES.recordDueApprox;
    // Planning defaults used in many CO appeals calendars — ALWAYS confirm against current C.A.R. 31 & clerk notice.
    const openingDays = opts.openingDays != null ? opts.openingDays : 42;
    const answerDays = opts.answerDays != null ? opts.answerDays : 35;
    const replyDays = opts.replyDays != null ? opts.replyDays : 21;
    const opening = addDays(recordFiled, openingDays);
    const answer = addDays(opening, answerDays);
    const reply = addDays(answer, replyDays);
    return {
      disclaimer: "PLANNING AID ONLY. Confirm every date on Colorado Judicial / CCE notices and the current C.A.R. text. Do not file from this calculator alone.",
      milestones: [
        { id: "noa", label: "Notice of Appeal filed", date: CASE_MILESTONES.noticeOfAppeal, note: "Jurisdictional step already secured (case data)." },
        { id: "desig", label: "Record designated", date: CASE_MILESTONES.recordDesignated, note: "Keep designation complete (orders + transcript)." },
        { id: "record", label: "Record on Appeal (planning date)", date: recordFiled, note: "Default from tracker (~8/11/2026). Replace with actual filed date when CCE shows transmission." },
        { id: "opening", label: "Opening Brief (planning: +" + openingDays + " days after record)", date: opening, note: "C.A.R. 31 timing — confirm exact count and any orders." },
        { id: "answer", label: "Answer Brief (planning: +" + answerDays + " days after Opening)", date: answer, note: "Respondent's brief window — confirm rule/order." },
        { id: "reply", label: "Optional Reply (planning: +" + replyDays + " days after Answer)", date: reply, note: "Only if you file a reply; confirm allowance." },
        { id: "cba", label: "CBA fee arbitration hearing (separate matter)", date: CASE_MILESTONES.cbaHearing, note: "Parallel track — do not let it steal Opening Brief focus." },
      ].map(function (m) {
        return Object.assign({}, m, {
          nice: formatDateNice(m.date),
          daysLeft: daysUntil(m.date),
        });
      }),
      car28Sections: CAR28_SECTIONS,
      openingDays: openingDays,
      answerDays: answerDays,
      replyDays: replyDays,
      recordFiled: recordFiled,
    };
  }

  function validateBreadcrumb(fields) {
    const needed = [
      ["sourceFile", "Source file / Drive name"],
      ["document", "Document / exhibit / order"],
      ["page", "Page"],
      ["section", "Section"],
      ["paragraph", "Paragraph"],
      ["lines", "Line(s)"],
      ["record", "Record cite (R. __)"],
      ["fact", "Fact sentence"],
    ];
    const missing = [];
    const filled = {};
    needed.forEach(function (n) {
      const v = (fields[n[0]] || "").trim();
      filled[n[0]] = v;
      if (!v || /^cite needed$/i.test(v) || v === "R. __") missing.push(n[1]);
    });
    // quality checks
    const warnings = [];
    if (filled.page && !/\d/.test(filled.page)) warnings.push("Page should include a number.");
    if (filled.record && !/r\.?\s*_?\s*\d|/i.test(filled.record) && filled.record.length < 3) warnings.push("Record cite looks incomplete.");
    if (filled.fact && filled.fact.length < 20) warnings.push("Fact sentence is very short — make sure it is a complete claim.");
    const ready = missing.length === 0;
    const sentence = ready
      ? (filled.fact + " (" + filled.document + " in " + filled.sourceFile +
        ", p. " + filled.page +
        ", § " + filled.section +
        ", ¶ " + filled.paragraph +
        ", lines " + filled.lines +
        "; " + filled.record + ").")
      : "";
    return {
      ready: ready,
      missing: missing,
      warnings: warnings,
      sentence: sentence,
      encouragement: ready
        ? "Filing-ready breadcrumb. Export or paste into Statement of Facts."
        : "Almost — fill the missing boxes. Each one is a gift to the staff attorney who will check your work.",
    };
  }

  function helpBuddyAdvise(context) {
    const text = (context && context.text) || "";
    const tab = (context && context.tab) || "general";
    const rr = riskReward(text || "Whether Hogsett must be re-applied after Rule 59 correction of Finding 52.");
    const tips = [];
    tips.push({ title: "Tone for yourself", body: "Steady kindness. Clear standards. When something blocks you, invert it — do not freeze." });
    tips.push({ title: "Law first", body: "Lead with the legal duty (Hogsett totality / Rule 59 consequence / jurisdiction). Facts prove the duty." });
    tips.push({ title: "Their swipe → your lever", body: "Open Invert: every opposing/court move has a reverse that serves a clean legal question." });
    tips.push({ title: "Citation breadcrumb", body: "Source → Document → Page → Section → ¶ → Lines → R.__ . Empty box = not filing-ready yet." });
    if (tab === "query" || tab === "translator") {
      tips.push({ title: "Keep results", body: "Keep useful answers on-device; export JSON weekly so a phone wipe cannot erase progress." });
    }
    if (tab === "premortem" || tab === "guide") {
      tips.push({ title: "Deadlines", body: "Use C.A.R. Deadlines explorer as a planning calendar — then verify on CCE before you rely on any date." });
      tips.push({ title: "Oral argument", body: "Practice the cold open and six panel questions. Calm and precise beats clever." });
    }
    return {
      motto: TONE.motto,
      notAttorney: TONE.notAttorney,
      whenStuck: TONE.whenStuck,
      riskReward: rr,
      tips: tips,
      authorities: AUTHORITIES,
      premortem: PREMORTEM,
      inversions: INVERSIONS,
    };
  }

  function buildAppellateSystemPrompt(scope) {
    return [
      "You are an appellate process TUTOR for Deanna Dawn Evich, Petitioner-Appellant pro se in Evich v. Stone,",
      "Arapahoe County 2024DR31793 / Colorado Court of Appeals 2026CA1119.",
      "You are NOT her attorney. Do not claim to represent her. Do not invent case law.",
      "",
      "TONE (mandatory):",
      "- Supportive, steady, kind — never sappy, never cruel, never contemptuous of pro se status.",
      "- Honest about risks without shaming. When something is weak, say what to do next in one concrete step.",
      "- If an obstacle appears: do not stop. Invert it. Look inside-out, upside-down, top-to-bottom.",
      "- Treat opposing counsel / judicial characterizations as raw material to reframe for Petitioner.",
      "- Expect intimidation and bafflement tactics aimed at pro se filers; translate jargon into one legal question + one cite.",
      "",
      "MISSION: Help someone with ZERO legal training produce Opening Brief material that survives clerk screening",
      "and is framed for Colorado appellate standards — law first, facts second.",
      "",
      "HARD RULES:",
      "1. LAW FIRST, then facts that prove the legal point.",
      "2. Prefer non-deferential frames: de novo legal error, failure to apply mandatory Hogsett framework,",
      "   jurisdictional/due-process defects — NOT pure credibility re-weighing.",
      "3. Every factual claim must demand a breadcrumb: Document / Page / Section / ¶ / Line(s) / R.__ .",
      "   If the provided docs lack a pin location, say so and mark CITE NEEDED.",
      "4. Use only authorities present in the materials or the verified library:",
      "   Hogsett v. Neale, 478 P.3d 713 (Colo. 2021) (esp. at 722 estate-planning factors);",
      "   LaFleur v. Pyfer, 479 P.3d 869 (Colo. 2021); Estate of Burford, 469 P.3d 395 (Colo. 2020);",
      "   In re Marriage of Lewis, 189 P.3d 1134 (Colo. App. 2008);",
      "   C.R.C.P. 59, 97; C.A.R. 10, 28, 31, 32; C.R.S. § 14-10-107(4)(b) as relevant.",
      "5. NEVER write 'Hogsett v. Neske' — correct caption is Hogsett v. Neale.",
      "6. Flag harmless-error risk and pre-answer it when discussing Rule 59 'minor amendments'.",
      "7. Structure outputs for C.A.R. 28 when drafting.",
      "8. Cite vault docs as [DOC N]. Plain-English after each legal point.",
      "9. Rank confidence High/Medium/Low and give one next step.",
      "10. If unsure, say so. Do not fabricate timestamps, filing IDs, or pin cites.",
      "11. When useful, show 'Their swipe → Your lever' inversion in 2–4 sentences.",
      "",
      "CORE CASE HOOKS:",
      "- Finding 52 original (12/4/2025) inverted beneficiary primacy vs JTMC/Ex.48 truth.",
      "- CRITICAL PRESERVATION: Finding 83 was NOT raised in the case or Rule 59 — DO NOT treat F83 as an appeal issue or invent F83 arguments for filing.",
      "- Rule 59 admits F51/F52 error, labels minor/clerical, refuses Hogsett re-run (correction without remedy; dismissal w/ prejudice stands).",
      "- Errors cascade (estate/economic cluster) but only PRESERVED theories may be briefed.",
      "- Tried on one fact-set (JTMC/Ex.48); ruled on another (original F52).",
      "- Relief path: reverse/remand + estate baseline 10/27/2024. Forensic accuracy only — never invent cites, never paraphrase facts into existence.",
      "- Final draft review must run three-point accuracy test + preservation check on every claim.",
      "",
      "Current scope: " + scope,
    ].join("\n");
  }

  // ─── Inverted index vault search (enhanced) ───
  function buildVaultIndex(docs) {
    const index = Object.create(null);
    const meta = { docCount: docs.length, termCount: 0, builtAt: Date.now() };
    docs.forEach(function (d, i) {
      const words = ((d.fileName || "") + " " + (d.text || ""))
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(function (w) { return w.length > 2; });
      const seen = Object.create(null);
      words.forEach(function (w) {
        if (seen[w]) return;
        seen[w] = true;
        if (!index[w]) {
          index[w] = [];
          meta.termCount++;
        }
        index[w].push(i);
      });
      // bigrams for phrase hits
      const arr = Object.keys(seen);
      for (let a = 0; a < words.length - 1; a++) {
        const b = words[a] + "_" + words[a + 1];
        if (b.length < 7) continue;
        if (!index[b]) index[b] = [];
        if (index[b][index[b].length - 1] !== i) index[b].push(i);
      }
    });
    index.__meta = meta;
    return index;
  }

  function searchVault(docs, index, question, limit) {
    limit = limit || 7;
    const stop = { the:1, a:1, an:1, and:1, or:1, for:1, with:1, that:1, this:1, from:1, into:1, about:1, what:1, when:1, where:1, which:1, have:1, has:1, had:1, was:1, were:1, are:1, did:1, does:1, will:1, would:1, could:1, should:1, than:1, then:1, them:1, they:1, their:1, your:1, you:1, not:1, but:1, any:1, all:1, can:1, how:1, why:1, who:1 };
    const raw = question.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    const kws = raw.split(/\s+/).filter(function (w) { return w.length > 2 && !stop[w]; }).slice(0, 20);
    const scores = new Array(docs.length).fill(0);
    const hitTerms = new Array(docs.length);
    for (let i = 0; i < docs.length; i++) hitTerms[i] = [];

    function addHit(i, pts, term) {
      scores[i] += pts;
      if (term && hitTerms[i].indexOf(term) < 0) hitTerms[i].push(term);
    }

    kws.forEach(function (kw) {
      if (index[kw]) index[kw].forEach(function (i) { addHit(i, 3, kw); });
      // prefix
      Object.keys(index).forEach(function (w) {
        if (w === "__meta") return;
        if (w.indexOf(kw) === 0 && w !== kw && w.indexOf("_") < 0) {
          index[w].forEach(function (i) { addHit(i, 1, w); });
        }
      });
      docs.forEach(function (d, i) {
        if ((d.fileName || "").toLowerCase().indexOf(kw) >= 0) addHit(i, 10, "filename:" + kw);
      });
    });

    // bigrams from query
    for (let i = 0; i < kws.length - 1; i++) {
      const bg = kws[i] + "_" + kws[i + 1];
      if (index[bg]) index[bg].forEach(function (di) { addHit(di, 5, bg); });
    }

    ["hogsett", "finding", "rule", "jtmc", "deed", "beneficiary", "minor", "totality", "lafleur", "washburn", "chenango"].forEach(function (kw) {
      if (raw.indexOf(kw) >= 0 && index[kw]) index[kw].forEach(function (i) { addHit(i, 4, kw); });
    });

    return docs
      .map(function (d, i) {
        return Object.assign({}, d, { score: scores[i], matchedTerms: hitTerms[i].slice(0, 8) });
      })
      .filter(function (d) { return d.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, limit);
  }

  function citationBreadcrumbTemplate(doc) {
    return {
      sourceFile: doc.fileName || "CITE NEEDED",
      document: doc.fileName || "CITE NEEDED",
      driveUrl: doc.driveUrl || "",
      page: "CITE NEEDED",
      section: "CITE NEEDED",
      paragraph: "CITE NEEDED",
      lines: "CITE NEEDED",
      record: "R. __",
    };
  }

  function recommendations() {
    return [
      { title: "One home-screen install", body: "Add this PWA to your phone/home screen so the shell and kept results stay with you in court hallways." },
      { title: "Weekly export ritual", body: "Every Sunday: Export kept query results + notes JSON to the Drive case folder." },
      { title: "Invert before you reply", body: "When opposing papers land, open Invert first. Write their swipe in one line, then your lever — then draft." },
      { title: "Breadcrumb budget", body: "Do not write five pages of facts. Write ten filing-ready sentences with complete breadcrumbs." },
      { title: "Oral argument later, brief now", body: "Oral argument is gravy. The Opening Brief is the meal — C.A.R. 28 structure first." },
      { title: "Parallel CBA track", body: "CBA hearing is real but separate. Protect Opening Brief time like oxygen." },
      { title: "Human rest", body: "When flooded, stop for ten minutes, then one next step only. Exhaustion is a known pro se pressure tactic — do not gift it a win." },
    ];
  }


  // ─── Multi-issue appeal bank (word-level / cascade / TOA-ranked) ───
  // Principle: Rule 59 admission came from line-by-line pressure. More issues
  // exist in the details; rank only those that survive Legal System Reference.
  const APPEAL_ISSUE_BANK = [
    {
      id: "I",
      roman: "I",
      short: "Hogsett re-application after Rule 59 corrections",
      whether: "Whether the trial court committed reversible error of law when, after granting C.R.C.P. 59 in part and correcting Findings 51 and 52, it labeled those corrections 'minor/clerical amendments,' refused to re-apply Hogsett's mandatory totality analysis to the corrected record, and left intact a dismissal with prejudice adjudicated on the uncorrected factual foundation.",
      rank: "A",
      pct: 92,
      whyInclude: "Core reversible-error path. Non-deferential de novo frame. Court already admitted the facts were wrong.",
      standard: "De novo on whether Hogsett required re-application; abuse of discretion does not excuse skipping a mandatory legal framework.",
      toa: ["hogsett", "lafleur", "crcp59", "car28"],
      preservation: "Rule 59 motion + partial grant. Map every brief heading to the motion language.",
      recordPins: [
        "Order 12/4/2025 Findings 52 & 83",
        "JTMC ¶¶ I, J, K",
        "Ex. 48 beneficiary deeds",
        "Rule 59 Order 4/21/2026 12:32 PM — grant in part, 'clerical'/'minor', no reweigh",
      ],
      cascade: ["II", "III", "IV"],
      wordLens: [
        { phrase: "clerical error", problem: "Relabels a 0%→100% beneficiary primacy inversion as typing error.", invert: "If truly clerical, the judgment still rests on a framework never run on true inputs." },
        { phrase: "minor amendments", problem: "Invented materiality class not in Hogsett for listed estate-planning factors.", invert: "Hogsett has no 'minor factor' off-ramp for beneficiary designations." },
        { phrase: "do not necessitate any amendment of judgment", problem: "Separates corrected inputs from outcome without re-running the test.", invert: "That sentence is the error: mandatory totality cannot be short-circuited by label." },
      ],
      relief: "Reverse dismissal; remand for Hogsett totality on corrected findings; estate baseline 10/27/2024.",
      gutCheck: "A panel that lets a court admit material Hogsett inputs were inverted, call it minor, and keep a with-prejudice dismissal is endorsing empty Rule 59 practice.",
    },
    {
      id: "II",
      roman: "II",
      short: "Rule 59 admission without Hogsett re-application (preserved path)",
      whether: "Whether, after granting C.R.C.P. 59 in part and correcting Finding 52 (and Finding 51), the trial court committed reversible legal error by labeling the corrections minor/clerical and refusing to re-apply Hogsett's mandatory totality analysis to the corrected record while leaving dismissal with prejudice intact.",
      rank: "A",
      pct: 91,
      whyInclude: "This is the preserved core: JTMC + Ex. 48 + original Finding 52 error + Rule 59 grant-in-part + no reweigh. Do NOT build the Opening Brief on Finding 83 — it was not raised below or in Rule 59 and is not appeal-eligible as a freestanding issue.",
      standard: "De novo on whether Hogsett required re-application after Rule 59 correction of material findings.",
      toa: ["hogsett", "crcp59", "burford", "car28"],
      preservation: "PRESERVED via Rule 59 motion and partial grant correcting Findings 51–52. Map Opening Brief headings to Rule 59 briefing language.",
      recordPins: [
        "JTMC ¶¶ I, J, K — Petitioner primary beneficiary (stipulated)",
        "Exhibit 48 — recorded deeds naming Petitioner",
        "Finding 52 ORIGINAL — inverted beneficiary primacy",
        "Rule 59 Order 4/21/2026 12:32 PM — grant in part; clerical/minor; no judgment amendment; no Hogsett reweigh",
      ],
      cascade: ["I", "III", "IV"],
      doNotFile: false,
      wordLens: [
        { phrase: "clerical error / minor amendments", problem: "Mislabels material Hogsett estate-planning input.", invert: "Hogsett has no minor off-ramp for beneficiary primacy 0%→100%." },
        { phrase: "do not necessitate any amendment of judgment", problem: "Correction without remedy.", invert: "Mandatory totality cannot be short-circuited by a label." },
      ],
      relief: "Reverse dismissal; remand for Hogsett on corrected findings; estate baseline 10/27/2024.",
      gutCheck: "Admitted material Hogsett inputs were wrong, called minor, skipped re-application, kept with-prejudice dismissal — that is the gut-check reverse path.",
    },
    {
      id: "F83_NOTE",
      roman: "—",
      short: "Finding 83 — NOT raised / NOT appeal-eligible (do not file)",
      whether: "N/A — not preserved.",
      rank: "X",
      pct: 0,
      whyInclude: "FOR INTERNAL RESEARCH ONLY. Finding 83 was not raised in the case briefing or Rule 59. The PWA must NOT treat F83 as an Opening Brief issue. If opposing counsel raises F83 later, handle only as response if properly before the court — never as your affirmative unpreserved ground.",
      standard: "Preservation rule: generally cannot raise new theories on appeal.",
      toa: ["car28"],
      preservation: "NOT PRESERVED. Do not argue F83 as a freestanding appellate issue.",
      recordPins: ["Order 12/4/2025 Finding 83 exists in the order — existence ≠ preservation"],
      cascade: [],
      doNotFile: true,
      wordLens: [
        { phrase: "Finding 83", problem: "Interesting internal text, but not raised below.", invert: "Use preserved path only: JTMC + Ex.48 + F52 + Rule 59 + Hogsett duty." },
      ],
      relief: "None — do not file.",
      gutCheck: "Final draft review must reject any F83-based issue heading.",
    },
    {
      id: "III",
      roman: "III",
      short: "Cascade — errors not standalone; economic/estate findings infected",
      whether: "Whether admitted errors in Findings 51 and 52 were standalone typos or material inputs that touch related findings and the overall Hogsett economic-interdependence / estate-planning cluster — requiring re-evaluation of the entire totality cluster, not isolated sentence edits.",
      rank: "A-",
      pct: 86,
      whyInclude: "User insight: these were not stand-alone. Finding 38 vs 51; 52 vs 83; JTMC I,J,K; Ex. 48; employment/economic picture. A line edit without cluster reweigh leaves the wrong architecture.",
      standard: "De novo on scope of mandatory reweigh once material Hogsett factors are corrected.",
      toa: ["hogsett", "lafleur", "crcp59"],
      preservation: "Show cluster map in Statement of Facts + Argument; cite each linked finding.",
      recordPins: [
        "Finding 38 (license/commission Mar 2006) vs Finding 51 original 'unemployed' Aug 2006",
        "Findings 52/83 estate cluster",
        "JTMC H, L, P insurance/IRA",
        "Ex. 40 license; Ex. 56 commission",
      ],
      cascade: ["I", "II", "IV"],
      wordLens: [
        { phrase: "unemployed", problem: "Contradicts Finding 38 and exhibits in same case file.", invert: "Employment status feeds economic-interdependence narrative under Hogsett." },
        { phrase: "minimum income (corrected Finding 51)", problem: "Correction still under-describes licensed commission work unless reweighed with Ex. 56.", invert: "Even corrected language needs the cluster, not a lone adjective swap." },
      ],
      relief: "Remand with instruction to reweigh the Hogsett estate/economic cluster on corrected + consistent findings.",
      gutCheck: "Patching two sentences while leaving a with-prejudice dismissal is not appellate hygiene — it is outcome protection.",
    },
    {
      id: "IV",
      roman: "IV",
      short: "Tried on one fact-set; ruled on another",
      whether: "Whether due process and Hogsett permit a court to try a common-law marriage case on stipulated and admitted exhibit facts (JTMC; Ex. 48) yet enter judgment on a contradictory finding (original Finding 52), then concede the contradiction on Rule 59 without reopening the legal conclusion of dismissal with prejudice.",
      rank: "A-",
      pct: 88,
      whyInclude: "Plain English truth: tried with one set of facts, ruled on a different set. That is the path to light if framed as legal process error, not mere disappointment.",
      standard: "De novo on legal framework / structural fairness of adjudicating against the trial record's stipulated facts; Burford on stipulations.",
      toa: ["hogsett", "burford", "crcp59"],
      preservation: "JTMC as judicial admission; Ex. 48 admitted; Rule 59 grant.",
      recordPins: [
        "JTMC 10/24/2025 stipulations I,J,K",
        "Trial / admitted Ex. 48",
        "Order 12/4/2025 Finding 52 original",
        "Rule 59 4/21/2026 correction without judgment amendment",
      ],
      cascade: ["I", "II", "V"],
      wordLens: [
        { phrase: "stipulated", problem: "Parties agreed — court found the opposite.", invert: "Burford-style binding admissions limit free rewrite of joint facts." },
        { phrase: "dismissed with prejudice", problem: "Hardest form of loss, built on inverted material fact.", invert: "With-prejudice + false Hogsett input + no reweigh = maximum injustice, maximum need for remand." },
      ],
      relief: "Reverse with-prejudice dismissal; remand for decision on the fact-set actually tried and corrected.",
      gutCheck: "Appellate courts exist so trial outcomes cannot rest on a shadow record.",
    },
    {
      id: "V",
      roman: "V",
      short: "Post-closure process / mischaracterization (12:32 → 8:52 → 4/23)",
      whether: "Whether post-closure acceptance of advocacy and a later order mischaracterizing a Rule 59 grant-in-part as a denial undermines confidence in the post-trial process and supports remand with clear jurisdictional and record integrity instructions.",
      rank: "B+",
      pct: 78,
      whyInclude: "Not the lead issue — supports I–IV and due-process integrity. Use as companion argument, not a substitute for Hogsett.",
      standard: "De novo on jurisdiction/process; Lewis-type limits after judgment.",
      toa: ["lewis", "crcp59", "car10"],
      preservation: "CCE timestamps; Filing ID CEB18BE48151A; Washburn 4/23 order text.",
      recordPins: [
        "4/21/2026 12:32:05 PM Rule 59 grant in part / case closed",
        "4/21/2026 8:52 PM Response + unsigned proposed order same Filing ID",
        "4/23/2026 Washburn 'no action' + 'denied' mischaracterization",
      ],
      cascade: ["I"],
      wordLens: [
        { phrase: "denied", problem: "Jones granted in part — Washburn said denied.", invert: "Mislabeling the grant hides the admission of error from later readers." },
        { phrase: "takes no action", problem: "Leaves post-closure muddle without clarifying jurisdiction.", invert: "Remand can require a clean process path." },
      ],
      relief: "On remand, clarify record; reassign as appropriate under C.R.C.P. 97.",
      gutCheck: "Process fog should not protect a with-prejudice dismissal built on inverted facts.",
    },
    {
      id: "VI",
      roman: "VI",
      short: "Litigation-timed asset changes & filing-date estate baseline",
      whether: "Whether equity and statutory temporary-injunction principles require restoring asset designations to the October 27, 2024 filing-date baseline so that deed changes during open litigation (2/27/2025) and Rule 59 pendency (2/4/2026) cannot rewrite a nearly 30-year accumulation of assets before the marriage question is correctly decided.",
      rank: "B+",
      pct: 80,
      whyInclude: "This is the financial arm of justice — the light at the end if remand works. Pair with reverse/remand; do not let it swallow Issue I.",
      standard: "De novo on ATI statute where raised; equitable remand instructions reviewed for legal correctness.",
      toa: ["ati", "crcp59", "hogsett"],
      preservation: "Notice of Asset Designation Changes 3/31/2026; Respondent Response ¶¶ 6–11 (defends only 2/4/26; silent on 2/27/25).",
      recordPins: [
        "Petition filed 10/27/2024",
        "Deed change 2/27/2025 (case open) — undefended",
        "Deed change 2/4/2026 Doc E6007094 — ATI defense only",
        "Notice Filing ID BBE04964FFF24",
      ],
      cascade: ["I", "IV"],
      wordLens: [
        { phrase: "irrelevant", problem: "Respondent's word for 2/27/2025 change — no legal defense offered.", invert: "Silence on the open-case change is leverage; ATI theory cannot cover it." },
        { phrase: "freely revocable", problem: "True of beneficiary deeds in the abstract; does not erase litigation-timing equity.", invert: "Revocability ≠ permission to reshape the estate mid-case without consequence on remand baseline." },
      ],
      relief: "Instruct on remand that marital estate / designations are valued and restored as of 10/27/2024 filing date pending correct Hogsett determination.",
      gutCheck: "Almost 30 years of life should not be erased by mid-litigation paperwork games after a false-fact dismissal.",
    },
    {
      id: "VII",
      roman: "VII",
      short: "LaFleur — pre-equality same-sex conduct underweighted",
      whether: "Whether the trial court failed to apply LaFleur's conduct-over-paperwork principle for a same-sex couple whose relationship began when formal marriage was legally unavailable, thereby misapplying Hogsett's totality framework to a 1996–present relationship.",
      rank: "B",
      pct: 72,
      whyInclude: "Supports Issue I; strengthens same-sex context. Include if record supports under-weighting; do not let it become a pure fact re-weigh invite.",
      standard: "De novo on legal framework (LaFleur/Hogsett); clear error only on pure historical facts.",
      toa: ["lafleur", "hogsett"],
      preservation: "Trial evidence of 1996 start; 2010 life-partner language; estate planning cluster.",
      recordPins: ["Relationship start 1996", "2010 instruments", "LaFleur citation in law section"],
      cascade: ["I", "III"],
      wordLens: [
        { phrase: "life partner", problem: "Maximum legal language available pre-equality — not a weak label.", invert: "Under LaFleur, that language is strength, not concession." },
      ],
      relief: "On remand, apply LaFleur correctly within Hogsett totality.",
      gutCheck: "A same-sex common-law case decided as if marriage equality always existed misreads the legal history LaFleur fixed.",
    },
  ];

  function rankIssuesForBrief(maxIssues) {
    maxIssues = maxIssues || 4;
    const eligible = APPEAL_ISSUE_BANK.filter(function (i) { return !i.doNotFile; });
    const sorted = eligible.slice().sort(function (a, b) { return (b.pct || 0) - (a.pct || 0); });
    const lead = sorted.filter(function (i) { return i.pct >= 85; });
    const support = sorted.filter(function (i) { return i.pct < 85 && i.pct >= 70; });
    const blocked = APPEAL_ISSUE_BANK.filter(function (i) { return i.doNotFile; });
    return {
      lead: lead.slice(0, maxIssues),
      support: support,
      doNotFile: blocked,
      briefingTip: "Lead with preserved issues only (I–IV path: Hogsett + Rule 59 + JTMC/Ex.48 + cascade). NEVER file Finding 83 as an issue — not raised in case or Rule 59. Support V–VII only if preserved and space allows.",
      pathToLight: "Reverse with-prejudice dismissal → remand for Hogsett on corrected, consistent fact-set (cluster, not isolated typos) → estate/designations baseline October 27, 2024 → nearly 30 years of accumulation reaches the financial arm on true facts.",
    };
  }

  function wordByWordDrill(findingKey) {
    const packs = {
      f52_original: {
        title: "Finding 52 ORIGINAL (12/4/2025) — word pressure",
        lines: [
          { word: "Each", note: "Universal quantifier — every deed." },
          { word: "revocable beneficiary deed", note: "Estate-planning instrument (Hogsett factor), not present title transfer." },
          { word: "designated Respondent", note: "OPERATIVE FALSE VALUE — JTMC/Ex. 48 say Petitioner." },
          { word: "grantee-beneficiary", note: "Primary position — 100% of the primacy story inverted." },
          { word: "son...as successor", note: "Petitioner erased from the chain entirely." },
        ],
        takeaway: "This sentence is not a flourish. It is the wrong input to Hogsett.",
      },
      f83: {
        title: "Finding 83 — EXISTS in order but NOT raised / NOT appeal-eligible",
        lines: [
          { word: "Finding 83", note: "Appears in Dec 4 order text." },
          { word: "not in Rule 59", note: "You confirmed it was not raised in the case or Rule 59." },
          { word: "not preserved", note: "Cannot be a freestanding Opening Brief issue." },
          { word: "what to file instead", note: "JTMC + Ex.48 + Finding 52 original error + Rule 59 admission + Hogsett re-application duty." },
        ],
        takeaway: "DO NOT FILE F83 as an issue. Final draft review must strip F83 issue headings. If someone else raises it later, that is different from you affirmatively briefing an unpreserved theory.",
      },
      r59_minor: {
        title: "Rule 59 Order labels — line-by-line",
        lines: [
          { word: "GRANTS in part", note: "Admission: something required correction." },
          { word: "clerical error", note: "Mislabel of material Hogsett estate-planning fact." },
          { word: "minor amendments", note: "No such Hogsett off-ramp for this factor class." },
          { word: "do not necessitate any amendment of judgment", note: "The moot-admission engine — correction without remedy." },
        ],
        takeaway: "Word-by-word is how Rule 59 got the admission. Word-by-word is how the Opening Brief makes the admission mean something.",
      },
    };
    return packs[findingKey] || packs.f83;
  }

  function cascadeMap() {
    return {
      title: "Error cascade — not stand-alone typos",
      nodes: [
        { id: "JTMC I,J,K", role: "Stipulated truth — Petitioner primary beneficiary" },
        { id: "Ex. 48", role: "Admitted deeds — same truth" },
        { id: "F52 original", role: "Operative false value used in judgment" },
        { id: "F83", role: "Facial correct label, contradicts F52 — not a cure" },
        { id: "F38 vs F51", role: "Employment cluster inconsistency; F51 corrected" },
        { id: "Rule 59", role: "Admits F51/F52 wrong; labels minor; no Hogsett re-run" },
        { id: "Dismissal w/ prejudice", role: "Outcome frozen on pre-correction architecture" },
        { id: "Deed changes 2/27/25 & 2/4/26", role: "Financial arm pressure during/after litigation" },
      ],
      edges: [
        "JTMC + Ex.48 → expose F52 original as clear error",
        "F52 original ↔ F83 = internal fracture (sounds right / operates wrong)",
        "F38 → infects F51 employment narrative",
        "F51+F52 corrections → require Hogsett cluster reweigh (Issues I–III)",
        "No reweigh → moot admission (Issue II)",
        "Tried facts ≠ ruled facts (Issue IV)",
        "Remand baseline 10/27/2024 protects ~30-year estate (Issue VI)",
      ],
    };
  }




  // ─── Free toolbox (no paid AI required) ───
  const FREE_TOOLBOX = [
    { id: "issue_lab", name: "Issue Lab", where: "Prep Studio → Issue Lab", cost: "Free (device)", why: "Preserved issues, F52 walkthrough, final draft review", action: "prep:issues" },
    { id: "breadcrumbs", name: "Citation breadcrumbs", where: "Prep Studio → Breadcrumbs", cost: "Free", why: "Map every claim to source pins", action: "prep:crumbs" },
    { id: "invert", name: "Invert swipes", where: "Prep Studio → Invert", cost: "Free", why: "Turn their attack into your lever", action: "prep:invert" },
    { id: "spar", name: "Spar ladder", where: "Prep Studio → Spar", cost: "Free", why: "Practice answers with confidence scores", action: "prep:spar" },
    { id: "oral", name: "Oral argument ladder", where: "Prep Studio → Oral", cost: "Free", why: "Cold open + panel Q practice", action: "prep:oral" },
    { id: "deadlines", name: "C.A.R. deadline calendar", where: "Prep Studio → Deadlines", cost: "Free", why: "Never miss a brief deadline", action: "prep:deadlines" },
    { id: "packet", name: "Issue I packet export", where: "Issue Lab / Owner Tools", cost: "Free download", why: "Issue + standard + 5 crumbs + relief", action: "export:packet" },
    { id: "baffle", name: "Baffle mode (3 bullets)", where: "Issue Lab", cost: "Free", why: "Strip opposing jargon", action: "prep:issues" },
    { id: "notes", name: "Notes + voice capture", where: "Notes tab", cost: "Free", why: "Capture thoughts without AI", action: "tab:voice" },
    { id: "files", name: "Files needing review", where: "Files Review tab", cost: "Free (Firestore)", why: "Fill OCR gaps manually", action: "tab:files" },
    { id: "integrity", name: "Integrity check", where: "Owner Tools", cost: "Free", why: "Drive ↔ vault coverage", action: "prep:owner" },
    { id: "notebooklm", name: "Google NotebookLM", where: "Export → Drive → notebooklm.google.com", cost: "Free tier (Google)", why: "Second-stage clarity on exports only", url: "https://notebooklm.google.com", action: "url" },
    { id: "drive", name: "Google Drive (source folder)", where: "Your case Drive folder", cost: "Free", why: "Source of truth — never edit originals from PWA", url: "https://drive.google.com", action: "url" },
    { id: "co_courts", name: "Colorado Judicial / self-help", where: "External", cost: "Free", why: "Forms, self-represented resources", url: "https://www.courts.state.co.us/Self_Help/Index.cfm", action: "url" },
    { id: "car", name: "Colorado Appellate Rules (C.A.R.)", where: "External", cost: "Free", why: "Briefing rules text", url: "https://www.courts.state.co.us/Courts/Supreme_Court/Rule_Changes.cfm", action: "url" },
    { id: "hogsett_caselaw", name: "Hogsett case research (public)", where: "Google Scholar / CourtListener", cost: "Free", why: "Read Hogsett / LaFleur opinions", url: "https://scholar.google.com/scholar?q=Hogsett+v+Neale+478+P.3d+713", action: "url" },
  ];

  // Harmful dismissal / windfall legal vocabulary (plain + precise)
  const HARM_LEXICON = {
    plain: "Almost 30 years of shared life, contribution by Petitioner, confirmed in places by Respondent — then one person walks away with the pile while the other is left with a with-prejudice dismissal. That is not a small wound. In law-talk it is a cluster of doctrines, not one magic word.",
    terms: [
      { term: "Unjust enrichment", plain: "One person keeps a benefit it is unfair to keep without paying for it.", use: "When contributions built assets the other retains after dismissal." },
      { term: "Windfall", plain: "An unearned or disproportionate gain.", use: "Respondent keeps accumulation while marriage finding denied — your 'second payday' idea." },
      { term: "Equitable distribution / division of marital property", plain: "If marriage exists, courts divide marital estate fairly (not always 50/50).", use: "Why Hogsett marriage finding is the gateway — without it, this path is blocked." },
      { term: "Marital estate / marital property", plain: "What was built during the relationship under marital rules.", use: "~30 years of accumulation from filing baseline 10/27/2024." },
      { term: "Contribution theory", plain: "What each person put in (money, labor, care, support).", use: "Your payments/work into the relationship and household/estate." },
      { term: "Constructive trust", plain: "Court can treat property as held for the person who truly should benefit, to prevent injustice.", use: "Advanced equitable remedy theory — needs careful briefing if ever used." },
      { term: "Quantum meruit", plain: "Pay the reasonable value of services/benefits provided.", use: "If marriage denied, sometimes used for uncompensated contributions (fact-heavy)." },
      { term: "Disproportionate retention of jointly accumulated assets", plain: "One side keeps what both built.", use: "Plain appellate storytelling of the harm of dismissal with prejudice." },
      { term: "With-prejudice dismissal", plain: "Case is over and generally cannot be refiled the same way.", use: "Why framework error on Hogsett is catastrophic, not technical." },
      { term: "Mandatory vs discretionary", plain: "Some duties a judge must do (Hogsett framework); some calls get deference.", use: "Your appeal attacks refusal of mandatory analysis — not pure 'I disagree with discretion.'" },
      { term: "Economic justice / equitable relief", plain: "Fairness tools courts use to avoid raw unfair outcomes.", use: "Tone language — always pair with statute/case, never alone." },
      { term: "Second payday (colloquial)", plain: "Your phrase for: break up, keep the assets built together, and leave the contributor empty.", use: "Use in notes/plain talk; in brief use windfall / unjust enrichment / marital estate language." },
    ],
    briefHook: "The legal harm is not mere disappointment: a with-prejudice denial of Hogsett marriage status blocks equitable division of a nearly 30-year accumulation, risking a windfall / unjust enrichment pattern if one party retains jointly built assets while the other's contributions are erased by a framework error.",
  };

  // Seeded Dec 4 / transcript analysis (refined as vault text loads)
  const DEC4_ANALYSIS_SEED = {
    orderDate: "2024-12-04",
    title: "December 4 ruling — discretion vs Respondent-sourced facts (seed analysis)",
    disclaimer: "This is a structured analysis aid from case seeds + vault text when available. Not a substitute for line-by-line human cite-checking of the transcript and order. Expand pins before filing.",
    discretionVsFact: [
      { kind: "legal_framework", label: "Hogsett totality application", note: "Whether framework applied correctly is legal / de novo — not pure discretion.", weight: "high" },
      { kind: "discretion", label: "Credibility weighing", note: "Trial court usually gets deference on who it believes — attack framework + inverted findings, not personality.", weight: "medium" },
      { kind: "fact_error", label: "Finding 52 beneficiary primacy", note: "Original F52 inverted vs JTMC/Ex.48 — later Rule 59 admission.", weight: "high" },
      { kind: "mixed", label: "Totality outcome after wrong input", note: "Outcome built on contaminated inputs is not clean discretionary call.", weight: "high" },
    ],
    respondentNoMarriageThemes: [
      { theme: "Did not want / did not intend marriage", note: "Count and pin each transcript/order occurrence — pattern of denial." },
      { theme: "Insurance cancellation to 'end the relationship'", note: "Single-sentence pivot: treating insurance cut as relationship-ender while also denying marriage — internal tension worth pinning." },
      { theme: "Petitioner may deserve something", note: "Said in response path involving substitute counsel context — pin exact transcript page/line. May undercut total wipeout narrative." },
    ],
    scoringGuide: {
      discretionShare: "Calls that are pure credibility/weight after correct legal framework.",
      frameworkShare: "Whether Hogsett was applied to true material facts.",
      respondentFactReliance: "How many outcome-driving findings rest on Respondent's narrative vs stipulated/docs (JTMC, deeds).",
    },
  };

  function analyzeVaultForDec4(docs) {
    docs = docs || [];
    const blob = docs.map(function (d) {
      return ((d.fileName || "") + "\n" + (d.text || "")).toLowerCase();
    }).join("\n");
    function countRe(re) {
      const m = blob.match(re);
      return m ? m.length : 0;
    }
    const counts = {
      noMarriage: countRe(/did not want to be married|never agreed to (be )?married|no common[- ]law|not married|did not intend to marry/gi),
      insuranceEnd: countRe(/cancel(led|lation)? (the )?(health )?insurance|insurance.*(end|ended) (the )?relationship|ended the relationship/gi),
      deserveSomething: countRe(/may deserve|deserves? something|owe[sd]? (him|her|petitioner)|entitled to something/gi),
      substituteCounsel: countRe(/substitute (counsel|attorney)|alexandra white|white,?\s*esq/gi),
      finding52: countRe(/finding\s*52/gi),
      hogsett: countRe(/hogsett/gi),
      respondentSaid: countRe(/respondent (testified|stated|said|claimed|asserted)/gi),
      jtmc: countRe(/jtmc|joint trial management/gi),
      exhibit48: countRe(/exhibit\s*48/gi),
    };
    // Rough mix model (heuristic for tutoring — not a court finding)
    let frameworkPts = 40;
    let discretionPts = 25;
    let respFactPts = 20;
    let docFactPts = 15;
    if (counts.finding52 > 0) frameworkPts += 10;
    if (counts.hogsett > 0) frameworkPts += 5;
    if (counts.noMarriage >= 3) respFactPts += 10;
    if (counts.jtmc + counts.exhibit48 > 0) docFactPts += 10;
    const total = frameworkPts + discretionPts + respFactPts + docFactPts;
    const pct = function (n) { return Math.round((n / total) * 100); };
    const mix = {
      frameworkLegal: pct(frameworkPts),
      pureDiscretion: pct(discretionPts),
      respondentNarrative: pct(respFactPts),
      stipulatedDocs: pct(docFactPts),
    };
    const insuranceNote = counts.insuranceEnd
      ? "Vault text shows insurance-cancellation / end-relationship language. Pin the exact transcript sentence before briefing."
      : "Insurance-cancellation pivot not found in loaded vault text yet — add hearing transcript text and re-run.";
    const deserveNote = counts.deserveSomething
      ? "Language that Petitioner 'may deserve something' appears in vault — pin page/line; useful tension vs total wipeout."
      : "Deserve-something sentence not found in vault yet — locate substitute-counsel hearing segment and migrate text.";
    return {
      counts: counts,
      mix: mix,
      insuranceNote: insuranceNote,
      deserveNote: deserveNote,
      harmHook: HARM_LEXICON.briefHook,
      terms: HARM_LEXICON.terms,
      seed: DEC4_ANALYSIS_SEED,
      plain: "Simple read: a large part of what hurts is legal-framework (Hogsett on true facts) plus how much the outcome leaned on Respondent's 'not married' story while documents and later admissions say the estate-planning facts were wrong. The insurance-cancel sentence and any 'may deserve something' line are tension pins — they do not replace Hogsett, but they undercut a clean total wipeout story.",
    };
  }

  // Error catalog: simple + more info fix chain
  const ERROR_CATALOG = {
    api_key_missing: {
      title: "API key missing",
      simple: "This provider needs your own key saved before Ask works.",
      fix: "Open Query → choose provider → paste key → Save key. Stephanie: use your own key (not Deanna's).",
      whoFixes: ["You (paste key)", "Provider dashboard (create key)", "Help Buddy (where to click)", "Owner (only if device-wide issue)"],
    },
    api_401: {
      title: "Key rejected (401)",
      simple: "The key was not accepted — wrong key, revoked, or wrong provider.",
      fix: "Create a fresh key at the provider link, paste again, Save. Check you picked the matching provider.",
      whoFixes: ["You (new key)", "Provider account billing/status", "Switch to another provider", "Free Toolbox (no key needed)"],
    },
    api_429: {
      title: "Rate limited (too many requests)",
      simple: "The provider asked you to slow down.",
      fix: "Wait the countdown, switch provider, or use Free Toolbox offline tools.",
      whoFixes: ["Wait timer", "You (switch provider)", "Free Toolbox", "Provider status page"],
    },
    api_network: {
      title: "Network / connection problem",
      simple: "The request never completed — offline, blocked, or CORS/network.",
      fix: "Check connection, retry once, try another provider, or work offline in Prep Studio.",
      whoFixes: ["You (connection)", "Browser (refresh)", "Free Toolbox offline", "Device network settings"],
    },
    budget_block: {
      title: "Usage pause",
      simple: "Send paused so the case stays affordable.",
      fix: "Use Free Toolbox tools. Try again later or shorten the question.",
      whoFixes: ["You (free tools / shorter ask)", "Owner (budget reset if appropriate)", "Tomorrow's daily allowance"],
    },
    firestore: {
      title: "Case vault read problem",
      simple: "Could not load Firestore caseText cleanly.",
      fix: "Retry. Offline seeds still work for core docs. Check Firebase config/network.",
      whoFixes: ["Retry", "Cached/seed vault", "Owner (Firebase rules/config)", "Network"],
    },
    storage: {
      title: "Device storage problem",
      simple: "Browser storage is full or blocked.",
      fix: "Discard old kept results, free device space, allow site storage.",
      whoFixes: ["You (discard keeps)", "Browser settings", "Export then clear"],
    },
    generic: {
      title: "Something went wrong",
      simple: "An unexpected error stopped this step.",
      fix: "Read the detail, retry once, switch to Free Toolbox, note it for Owner if it repeats.",
      whoFixes: ["You (retry)", "Free Toolbox", "Help Buddy", "Owner"],
    },
  };

  function classifyError(err) {
    const msg = (err && err.message) ? err.message : String(err || "");
    const low = msg.toLowerCase();
    if (/401|unauthorized|invalid.*key|api key/i.test(msg)) return "api_401";
    if (/429|rate limit|too many/i.test(msg)) return "api_429";
    if (/failed to fetch|network|cors|load failed/i.test(low)) return "api_network";
    if (/budget|gate|blocked|95%/i.test(low)) return "budget_block";
    if (/firestore|permission|firebase/i.test(low)) return "firestore";
    if (/quota|storage|idb/i.test(low)) return "storage";
    if (/key/i.test(low) && /missing|save|need/i.test(low)) return "api_key_missing";
    return "generic";
  }

  function describeError(err, code) {
    code = code || classifyError(err);
    const cat = ERROR_CATALOG[code] || ERROR_CATALOG.generic;
    return {
      code: code,
      title: cat.title,
      simple: cat.simple,
      fix: cat.fix,
      whoFixes: cat.whoFixes.slice(),
      detail: (err && err.message) ? err.message : String(err || ""),
    };
  }


  // ─── Dual accounts + budget gates (Deanna owner / Stephanie helper) ───

  // Owner GitHub / release identity (edit in Owner Tools or localStorage)
  const OWNER_GITHUB_DEFAULT = {
    ownerName: "Deanna Dawn Evich (Petitioner / Owner)",
    repoUrl: "",           // e.g. https://github.com/you/evich-case-tracker
    repoName: "",
    currentVersion: "v38",
    lastSyncedNote: "Workspace builds the live PWA; push to GitHub from your machine or connect the repo.",
    releaseTag: "v38-case-command-center",
  };



  function loadDriveFolders() {
    try {
      return JSON.parse(localStorage.getItem("evich_drive_folders_v40") || "{}");
    } catch (e) { return {}; }
  }
  function saveDriveFolders(cfg) {
    try { localStorage.setItem("evich_drive_folders_v40", JSON.stringify(cfg || {})); } catch (e) {}
  }

  // Owner NotebookLM notebook (seeded). Not shown in chat; opens via header/menu button.
  const NOTEBOOKLM_DEFAULT_URL = "https://notebooklm.google.com/notebook/afd42835-4802-41d7-a577-efdf4ce41d3f";

  function loadNotebookLmLink() {
    try {
      const saved = localStorage.getItem("evich_notebooklm_url");
      if (saved && String(saved).trim()) return String(saved).trim();
    } catch (e) {}
    return NOTEBOOKLM_DEFAULT_URL;
  }
  function saveNotebookLmLink(url) {
    try {
      const v = (url || "").trim();
      if (v) localStorage.setItem("evich_notebooklm_url", v);
      else localStorage.setItem("evich_notebooklm_url", NOTEBOOKLM_DEFAULT_URL);
    } catch (e) {}
  }


  // Email correspondence collections (CBA / OARC) — Firestore: emailCorrespondence
  const EMAIL_TRACK_DEFAULTS = {
    collection: "emailCorrespondence",
    matters: ["CBA", "OARC", "Appeal", "Other"],
    counselTags: [
      "Alexandra White",
      "White staff / The W Law",
      "Joe Antolinez",
      "Antolinez staff",
      "Vickie Vetter / arbitrator staff",
      "Other counsel",
      "Court / OARC / CBA",
      "Self / Stephanie",
    ],
  };

  const GMAIL_APPS_SCRIPT_PLAYBOOK = {
    title: "Gmail search by month (White / staff / Antolinez)",
    why: "Your correspondence is grouped by month. An Apps Script run in your Google account can list messages matching counsel domains/names into a Sheet, which you then import into the PWA emailCorrespondence collection — without giving the PWA full Gmail access.",
    caution: [
      "Run only in YOUR Google account. Do not share script output that contains secrets.",
      "PWA never gets your Gmail password. Sheet export → review → paste/import into emailCorrespondence.",
      "Source emails stay in Gmail/Drive; Firestore holds structured extracts you choose.",
    ],
    sampleQueryHints: [
      'from:(white) OR to:(white) OR "Alexandra White" OR "The W Law"',
      '"Joe Antolinez" OR Antolinez OR "Joseph Antolinez"',
      "Vickie Vetter OR ShareFile",
      "after:2025/01/01 before:2025/02/01  (repeat per month)",
    ],
    script: [
      "/** Paste into script.google.com bound to a Sheet. Run listCounselMailForMonth once per month. */",
      "function listCounselMailForMonth() {",
      "  var year = 2025; var month = 6; // edit",
      "  var start = Utilities.formatDate(new Date(year, month-1, 1), Session.getScriptTimeZone(), 'yyyy/MM/dd');",
      "  var endDate = new Date(year, month, 1);",
      "  var end = Utilities.formatDate(endDate, Session.getScriptTimeZone(), 'yyyy/MM/dd');",
      "  var q = '(' +",
      "    '\"Alexandra White\" OR \"The W Law\" OR from:wlaw OR ' +",
      "    '\"Joe Antolinez\" OR Antolinez OR ' +",
      "    '\"Vickie Vetter\" OR ShareFile' +",
      "  + ') after:' + start + ' before:' + end;",
      "  var threads = GmailApp.search(q, 0, 200);",
      "  var sh = SpreadsheetApp.getActive().getSheetByName('MailExport') || SpreadsheetApp.getActive().insertSheet('MailExport');",
      "  if (sh.getLastRow() === 0) sh.appendRow(['monthKey','date','from','to','subject','snippet','threadId','permalink']);",
      "  var monthKey = year + '-' + ('0'+month).slice(-2);",
      "  threads.forEach(function(t) {",
      "    t.getMessages().forEach(function(m) {",
      "      sh.appendRow([monthKey, m.getDate(), m.getFrom(), m.getTo(), m.getSubject(), m.getPlainBody().slice(0,400), t.getId(), 'https://mail.google.com/mail/u/0/#inbox/' + t.getId()]);",
      "    });",
      "  });",
      "}",
    ].join("\\n"),
  };

  const PREMORTEM_FIX_PLAN = [
    { id: "m1", status: "needs_you", title: "Transcript pins", pwa: "Files Review + Notes; pin page/line fields on email/vault entries", you: "Upload hearing transcript to Drive SoT; migrate text" },
    { id: "m2", status: "needs_you", title: "Exhibit E OCR", pwa: "OCR E playbook + Files Review", you: "Chunk OCR and save descriptions" },
    { id: "m3", status: "playbook", title: "L3 binary hashes", pwa: "Integrity expected-hash JSON", you: "Apps Script sha256 on copies when folder stable" },
    { id: "m4", status: "done_in_pwa", title: "Mobile/voice Stephanie path", pwa: "Helper home, big mic, free Toolbox", you: "Install PWA; practice one voice note" },
    { id: "m5", status: "done_in_pwa", title: "F83 creep", pwa: "DO NOT FILE + final draft review", you: "Never paste F83 as an issue heading" },
    { id: "m6", status: "done_in_pwa", title: "CBA/OARC wall vs Opening Brief", pwa: "Separate emailCorrespondence + lanes; deadlines tab first", you: "Time-box CBA/OARC hours on calendar" },
    { id: "m7", status: "done_in_pwa", title: "Budget spikes", pwa: "85% warn / 95% block + free tools", you: "Stephanie uses Toolbox first" },
    { id: "m8", status: "done_in_pwa", title: "Export without seal", pwa: "L4 seal button", you: "Always seal before NotebookLM upload" },
    { id: "m9", status: "partial", title: "Deadlines external reminders", pwa: "C.A.R. Deadlines + Share/export calendar text", you: "Add phone calendar alerts manually" },
    { id: "m10", status: "deferred", title: "Drive auto-sync", pwa: "Integrity + manual migrate", you: "Keep SoT in Drive; migrate deliberately" },
  ];


  function loadOwnerGithub() {
    try {
      const raw = localStorage.getItem("evich_owner_github_v38");
      return Object.assign({}, OWNER_GITHUB_DEFAULT, raw ? JSON.parse(raw) : {});
    } catch (e) {
      return Object.assign({}, OWNER_GITHUB_DEFAULT);
    }
  }

  function saveOwnerGithub(cfg) {
    try { localStorage.setItem("evich_owner_github_v38", JSON.stringify(cfg)); } catch (e) {}
    return cfg;
  }

  const ROLLOUT_CHECKLIST = [
    { id: "r1", title: "Owner PIN changed from default", detail: "Change 2024DR in Owner Tools." },
    { id: "r2", title: "GitHub repo URL saved in Owner Tools", detail: "Paste your repository link so version/owner is always visible." },
    { id: "r3", title: "Drive source folder final file added", detail: "Add/replace the last source-of-truth file; never edit via PWA." },
    { id: "r4", title: "Firestore migration L1 coverage review", detail: "Run Request data integrity check after the new file." },
    { id: "r5", title: "Exhibit E OCR path started/finished", detail: "Chunk → OCR → Files Review." },
    { id: "r6", title: "Hearing transcript pins (insurance / deserve something)", detail: "Page/line in vault." },
    { id: "r7", title: "Stephanie Helper mode tested on phone + voice", detail: "Own API keys + Toolbox free path." },
    { id: "r8", title: "Print + Share (text/email) tested", detail: "Page/section/selection + native share." },
    { id: "r9", title: "NotebookLM bridge understood", detail: "Exports only → Drive → NotebookLM sources (not a live Drive rewrite)." },
    { id: "r10", title: "Opening Brief issues I–IV only (no F83)", detail: "Final draft review on every issue heading." },
    { id: "r11", title: "Push release to your GitHub", detail: "Tag version; keep owner version field in sync." },
    { id: "r12", title: "Install PWA on both phones", detail: "Add to Home Screen." },
  ];

  const NOTEBOOKLM_AS_QUERY = {
    title: "NotebookLM as a second-stage query source (through the PWA)",
    important: "The PWA cannot embed full NotebookLM chat inside Query (Google does not allow that). The supported pattern is a bridge: export from PWA → Drive export folder → NotebookLM notebook sources → optional paste insights back as Notes.",
    steps: [
      "In PWA: export Issue I packet, integrity NL report, kept queries, or notes (Toolbox / Owner Tools / Query Keep).",
      "Upload those export files to a designated Drive folder named something like /Case_Exports/ (never the source-of-truth originals folder).",
      "Open notebooklm.google.com → New notebook (or your case notebook).",
      "Add sources → Google Drive → select only the export files (or paste text).",
      "Ask NotebookLM clarifying questions for granularity — treat answers as drafts.",
      "Copy useful lines back into PWA Notes (Pending). Re-pin every fact to JTMC/orders/exhibits before any filing language.",
      "Optional: In Query, ask the PWA vault (Firestore text) for law-first answers; use NotebookLM for free-form exploration of the same exports — two stages, one truth.",
    ],
    pwaWhere: [
      "Owner Tools → NotebookLM bridge steps + export button",
      "Toolbox → Google NotebookLM link card",
      "Query → free tools tip + confirm gate (does not replace NotebookLM)",
    ],
  };


  const PUNCHLIST_STATUS = [
    { item: "Deploy latest zip to GitHub/Vercel (live was behind)", status: "you", note: "Hard-refresh after deploy; confirm version banner = current." },
    { item: "UI visual polish (login/header density — user screenshots)", status: "open", note: "Functional first; design pass still open." },
    { item: "Drop & Plop branding restored", status: "done", note: "v56 — name for one-interface experience." },
    { item: "Owner ↔ Stephanie switch", status: "done", note: "v55 Switch to Stephanie / Switch to Deanna." },
    { item: "Claude PiP always (top-right AI)", status: "done", note: "v55+" },
    { item: "Print/Share × + Cancel", status: "done", note: "v55+" },
    { item: "Stephanie hard-limits text wall removed", status: "done", note: "Meters only." },
    { item: "Section Print de-duped", status: "done", note: "Header Print only." },
    { item: "Notes bullpen + destination + scan", status: "done" },
    { item: "Activity log + bookmarks what/why", status: "done" },
    { item: "Exhibit E policy (block 68955… · use Needs MORE OCR · Jul 29 list)", status: "done", note: "PWA side; you finish OCR + migrate." },
    { item: "Final Drive inventory via Apps Script + migrate new files", status: "you" },
    { item: "Exhibit E remaining OCR chunks", status: "you" },
    { item: "Hearing transcript page/line pins (insurance / deserve something)", status: "you" },
    { item: "L3 binary hash seal when folder stable", status: "you" },
    { item: "Firestore rules for emailCorrespondence (if cloud writes needed)", status: "you" },
    { item: "Phone calendar for C.A.R. deadlines", status: "you" },
    { item: "Claude browser CORS reliability", status: "open", note: "PiP/Query may fail in some browsers without a small proxy." },
    { item: "Optional cover/UI image from Deanna", status: "you" },
    { item: "Full Drive API auto-sync", status: "deferred" },
    { item: "SMS deadline blasts", status: "deferred" },
    { item: "GPG digital signatures", status: "deferred" },
  ];

  const PROJECT_PREMORTEM = [
    { id: "pm1", severity: "fatal", title: "Live deploy lag", risk: "You test old UI while code moved on — false bugs, lost trust.", fix: "Always deploy zip; confirm CASE TRACKER version banner before QA." },
    { id: "pm2", severity: "fatal", title: "Unpreserved issues in brief", risk: "F83 or new theory sneaks into Opening Brief → bounce or waiver.", fix: "Final draft firewall + Issue Lab only preserved issues; never file from Claude alone." },
    { id: "pm3", severity: "fatal", title: "Cite without page/line", risk: "Appellate court discounts narrative; opponent swipes 'unsupported'.", fix: "Breadcrumb budget: source, doc, page, section, paragraph, line before any filing sentence." },
    { id: "pm4", severity: "high", title: "Exhibit E incomplete OCR", risk: "Financial/PERA story gaps; Query invents or misses.", fix: "Jul 29 list; Needs MORE OCR file; never use blocked binary; pin only verified text." },
    { id: "pm5", severity: "high", title: "Transcript pins missing", risk: "Insurance-cancel and 'deserve something' stay anecdotes.", fix: "Migrate hearing text; pin page/line; then promote to Issue Lab." },
    { id: "pm6", severity: "high", title: "Stephanie volume burn", risk: "API/Firestore spikes during a 'phase' empty the budget mid-week.", fix: "Bullpen first; free Toolbox; 85% warn; her own keys; activity log shows what burned." },
    { id: "pm7", severity: "high", title: "Claude CORS / key in browser", risk: "PiP fails silently; keys on device can leak if shared computer.", fix: "Device-only keys; optional later proxy; never put Deanna keys on Stephanie device." },
    { id: "pm8", severity: "high", title: "Monolith SPA fragility", risk: "One bad edit corrupts a function; hard to review.", fix: "Ship zip; keep Version History; avoid giant drive-by refactors mid-deadline." },
    { id: "pm9", severity: "medium", title: "Offline/local vs cloud confusion", risk: "Notes on phone A not on phone B; 'I saved it' but other device empty.", fix: "Teach: device-local notes/bookmarks; export Sunday ritual; Drive for shared packets." },
    { id: "pm10", severity: "medium", title: "CBA/OARC steals Opening Brief oxygen", risk: "Parallel track eats calendar; brief late or thin.", fix: "Wall presentation; share facts only; Opening Brief time protected." },
    { id: "pm11", severity: "medium", title: "Bookmark without habit", risk: "Drop & Plop unused; she still feels lost.", fix: "First session: save 2 bookmarks with her; Resume is the first button." },
    { id: "pm12", severity: "medium", title: "Scan without description", risk: "Photo pile with no 'what/why' = unusable later.", fix: "Require short caption on scan notes; bullpen destination prompt." },
    { id: "pm13", severity: "medium", title: "Source-of-truth mutation risk (human)", risk: "Someone 'cleans up' Drive originals.", fix: "App never writes SoT; written rule + exports folder only." },
    { id: "pm14", severity: "low", title: "UI still dense/ugly in places", risk: "Cognitive load; she avoids the tool.", fix: "Punch list design pass; keep Drop & Plop home simple." },
    { id: "pm15", severity: "low", title: "No external deadline SMS", risk: "Miss C.A.R. date if app unopened.", fix: "Phone calendar now; SMS deferred." },
  ];

  const PROJECT_RECOMMENDATIONS = [
    { n: 1, title: "Deploy discipline", intent: "One source of truth for the *app* — version banner must match work." },
    { n: 2, title: "Drop & Plop as the name", intent: "Brand the one-interface habit: land → work → bookmark → resume." },
    { n: 3, title: "Law first, Claude second", intent: "Vault + breadcrumbs beat chat answers; Claude is a tutor not a filer." },
    { n: 4, title: "Sunday export ritual", intent: "Notes + Keep queries + bookmarks JSON → Drive exports folder / NotebookLM." },
    { n: 5, title: "Opening Brief calendar wall", intent: "CBA/OARC get a separate hour block; never steal brief weeks." },
    { n: 6, title: "Two-device rule", intent: "Stephanie phone = helper; Deanna machine = owner PIN + integrity." },
    { n: 7, title: "Finish Exhibit E list before deep Query", intent: "Gaps cause confident wrong answers." },
    { n: 8, title: "Pin three transcript sentences", intent: "Insurance cancel + deserve something + any 'no marriage' cluster." },
    { n: 9, title: "Optional Claude proxy only if CORS bites", intent: "Don't build infra until real phones fail." },
    { n: 10, title: "Pre-mortem before any filing language", intent: "Run Final Draft review + F83 firewall every time." },
  ];



  const ACCOUNTS = {
    deanna: {
      id: "deanna",
      name: "Deanna",
      role: "Owner / Petitioner",
      plain: "You own this project and the appeal. Full tools. Still no legal training assumed — heart + determination + this tutor.",
      color: "#1F3864",
      // Monthly-ish soft caps (client-side; adjust anytime)
      limits: {
        aiChars: 400000,          // ~ session+month soft pool
        queries: 120,
        firestoreReads: 5000,
        firestoreWrites: 400,
        keptResultsBytes: 12 * 1024 * 1024,
        driveOpens: 500,
        warnAt: 0.85,
        blockAt: 1.0,
      },
      // Rough $ estimates for pre-gate (planning only)
      rates: {
        aiPer1kChars: 0.003,      // blended estimate — not a bill
        firestoreRead: 0.00006,
        firestoreWrite: 0.00018,
      },
      maxDocsPerQuery: 7,
      maxContextChars: 14000,
      canApproveNotes: true,
      canChangeApiKeys: true,
      canClearBudgets: true,
    },
    stephanie: {
      id: "stephanie",
      name: "Stephanie",
      role: "Sister / Helper",
      plain: "You help with organization and questions. Tighter budgets protect the case money. Spikes are OK — the gate slows you before burn.",
      color: "#6B4C9A",
      limits: {
        aiChars: 80000,
        queries: 25,
        firestoreReads: 800,
        firestoreWrites: 80,
        keptResultsBytes: 3 * 1024 * 1024,
        driveOpens: 120,
        warnAt: 0.85,
        blockAt: 0.95,  // Stephanie hard stop at 95%
      },
      rates: {
        aiPer1kChars: 0.003,
        firestoreRead: 0.00006,
        firestoreWrite: 0.00018,
      },
      maxDocsPerQuery: 4,
      maxContextChars: 7000,
      canApproveNotes: false,
      canChangeApiKeys: true, // Stephanie supplies her own keys
      canClearBudgets: false,
      // Phase-friendly: daily hard ceiling inside monthly
      dailyQueryCap: 8,
      dailyAiChars: 20000,
    },
  };

  const BUDGET_KEY = "evich_budget_v32";
  const ACCOUNT_KEY = "evich_active_account_v32";

  function defaultBudgetStore() {
    return {
      deanna: { aiChars: 0, queries: 0, firestoreReads: 0, firestoreWrites: 0, driveOpens: 0, keptResultsBytes: 0, dayKey: "", dayQueries: 0, dayAiChars: 0 },
      stephanie: { aiChars: 0, queries: 0, firestoreReads: 0, firestoreWrites: 0, driveOpens: 0, keptResultsBytes: 0, dayKey: "", dayQueries: 0, dayAiChars: 0 },
    };
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function loadBudgetStore() {
    try {
      const raw = localStorage.getItem(BUDGET_KEY);
      const s = raw ? JSON.parse(raw) : defaultBudgetStore();
      const d = defaultBudgetStore();
      s.deanna = Object.assign(d.deanna, s.deanna || {});
      s.stephanie = Object.assign(d.stephanie, s.stephanie || {});
      // roll daily counters
      const tk = todayKey();
      ["deanna", "stephanie"].forEach(function (id) {
        if (s[id].dayKey !== tk) {
          s[id].dayKey = tk;
          s[id].dayQueries = 0;
          s[id].dayAiChars = 0;
        }
      });
      return s;
    } catch (e) {
      return defaultBudgetStore();
    }
  }

  function saveBudgetStore(store) {
    try { localStorage.setItem(BUDGET_KEY, JSON.stringify(store)); } catch (e) {}
  }

  function getActiveAccountId() {
    try {
      return localStorage.getItem(ACCOUNT_KEY) || "deanna";
    } catch (e) {
      return "deanna";
    }
  }

  function setActiveAccountId(id) {
    if (!ACCOUNTS[id]) id = "deanna";
    try { localStorage.setItem(ACCOUNT_KEY, id); } catch (e) {}
    return id;
  }

  function getActiveAccount() {
    return ACCOUNTS[getActiveAccountId()] || ACCOUNTS.deanna;
  }

  function pct(used, limit) {
    if (!limit) return 0;
    return Math.min(100, Math.round((used / limit) * 100));
  }

  function meterStatus(used, limit, warnAt, blockAt) {
    const p = used / (limit || 1);
    const block = blockAt != null ? blockAt : 1;
    if (p >= block || p >= 1) return "blocked";
    if (p >= (warnAt || 0.85)) return "warn";
    if (p >= 0.7) return "elevated";
    return "ok";
  }

  function estimateQueryCost(account, question, vaultDocsCached) {
    account = account || getActiveAccount();
    const qLen = (question || "").length;
    // Estimate firestore: 1 list read if cache cold, else 0 live reads
    const estReads = vaultDocsCached ? 0 : Math.max(1, Math.ceil((account.maxDocsPerQuery || 7) * 1.2));
    const estWrites = 0; // query itself doesn't write unless Keep
    const estContextChars = Math.min(account.maxContextChars || 12000, 2000 + qLen * 2 + (account.maxDocsPerQuery || 7) * 1800);
    const estOutputChars = account.id === "stephanie" ? 2500 : 4000;
    const estAiChars = estContextChars + estOutputChars + qLen + 1500;
    const rates = account.rates;
    const estUsd =
      (estAiChars / 1000) * rates.aiPer1kChars +
      estReads * rates.firestoreRead +
      estWrites * rates.firestoreWrite;
    return {
      estReads: estReads,
      estWrites: estWrites,
      estAiChars: estAiChars,
      estContextChars: estContextChars,
      estOutputChars: estOutputChars,
      estUsd: Math.round(estUsd * 10000) / 10000,
      estUsdLabel: "$" + estUsd.toFixed(4) + " est.",
      note: "Planning estimate only — not a provider invoice. Uses cache when possible to cut reads.",
      docsCap: account.maxDocsPerQuery,
    };
  }

  function budgetSnapshot(accountId) {
    accountId = accountId || getActiveAccountId();
    const account = ACCOUNTS[accountId];
    const store = loadBudgetStore();
    const u = store[accountId] || defaultBudgetStore()[accountId];
    const L = account.limits;
    const meters = [
      { id: "aiChars", label: "AI text budget", used: u.aiChars, limit: L.aiChars, unit: "chars" },
      { id: "queries", label: "Questions asked", used: u.queries, limit: L.queries, unit: "queries" },
      { id: "firestoreReads", label: "Firestore reads", used: u.firestoreReads, limit: L.firestoreReads, unit: "reads" },
      { id: "firestoreWrites", label: "Firestore writes", used: u.firestoreWrites, limit: L.firestoreWrites, unit: "writes" },
      { id: "driveOpens", label: "Drive opens", used: u.driveOpens, limit: L.driveOpens, unit: "opens" },
      { id: "keptResultsBytes", label: "Kept results on device", used: u.keptResultsBytes, limit: L.keptResultsBytes, unit: "bytes" },
    ];
    if (account.dailyQueryCap) {
      meters.push({ id: "dayQueries", label: "Today's questions", used: u.dayQueries || 0, limit: account.dailyQueryCap, unit: "queries", daily: true });
    }
    if (account.dailyAiChars) {
      meters.push({ id: "dayAiChars", label: "Today's AI text", used: u.dayAiChars || 0, limit: account.dailyAiChars, unit: "chars", daily: true });
    }
    meters.forEach(function (m) {
      m.pct = pct(m.used, m.limit);
      m.status = meterStatus(m.used, m.limit, L.warnAt, L.blockAt);
      m.warnAt = Math.round((L.warnAt || 0.85) * 100);
      m.blockAt = Math.round((L.blockAt != null ? L.blockAt : 1) * 100);
    });
    const worst = meters.reduce(function (a, m) {
      return m.pct > a.pct ? m : a;
    }, meters[0]);
    return { account: account, usage: u, meters: meters, worst: worst, store: store };
  }

  function gateQuery(accountId, question, vaultDocsCached) {
    const snap = budgetSnapshot(accountId);
    const account = snap.account;
    const est = estimateQueryCost(account, question, vaultDocsCached);
    const blocks = [];
    const warnings = [];

    function check(used, limit, label, add) {
      const after = used + (add || 0);
      const p = after / (limit || 1);
      const blockAt = account.limits.blockAt != null ? account.limits.blockAt : 1;
      const warnAt = account.limits.warnAt != null ? account.limits.warnAt : 0.85;
      if (after > limit || p >= blockAt) {
        blocks.push(label + " blocked at " + Math.round(blockAt * 100) + "% capacity (" + used + " + ~" + (add || 0) + " / " + limit + "). Free tools still work.");
      } else if (p >= warnAt) {
        warnings.push(label + " at " + Math.round(p * 100) + "% after this send (warn " + Math.round(warnAt * 100) + "% · hard block " + Math.round(blockAt * 100) + "%).");
      }
    }

    check(snap.usage.queries, account.limits.queries, "Questions", 1);
    check(snap.usage.aiChars, account.limits.aiChars, "AI text", est.estAiChars);
    check(snap.usage.firestoreReads, account.limits.firestoreReads, "Firestore reads", est.estReads);
    if (account.dailyQueryCap) check(snap.usage.dayQueries || 0, account.dailyQueryCap, "Today's questions", 1);
    if (account.dailyAiChars) check(snap.usage.dayAiChars || 0, account.dailyAiChars, "Today's AI text", est.estAiChars);

    // question length gate for Stephanie
    if (account.id === "stephanie" && (question || "").length > 1200) {
      blocks.push("Stephanie questions max 1,200 characters. Shorten — one question at a time.");
    }
    if ((question || "").trim().length < 10) {
      blocks.push("Type at least 10 characters so the gate can estimate cost.");
    }

    return {
      allowed: blocks.length === 0,
      blocks: blocks,
      warnings: warnings,
      estimate: est,
      snapshot: snap,
      tip: account.id === "stephanie"
        ? "Tip: Use Issue Lab offline first. Ask one short question. Prefer cached vault. Save Keep only for gold answers."
        : "Tip: Prefer Prep Studio offline tools. Keep AI for drafting after the structure is clear.",
    };
  }

  function commitQueryUsage(accountId, actual) {
    const store = loadBudgetStore();
    const u = store[accountId] || defaultBudgetStore()[accountId];
    u.queries += 1;
    u.aiChars += actual.aiChars || 0;
    u.firestoreReads += actual.firestoreReads || 0;
    u.firestoreWrites += actual.firestoreWrites || 0;
    u.dayQueries = (u.dayQueries || 0) + 1;
    u.dayAiChars = (u.dayAiChars || 0) + (actual.aiChars || 0);
    u.dayKey = todayKey();
    store[accountId] = u;
    saveBudgetStore(store);
    return budgetSnapshot(accountId);
  }

  function commitDriveOpen(accountId) {
    const store = loadBudgetStore();
    const u = store[accountId] || defaultBudgetStore()[accountId];
    u.driveOpens += 1;
    store[accountId] = u;
    saveBudgetStore(store);
    return budgetSnapshot(accountId);
  }

  function commitKeepBytes(accountId, bytes) {
    const store = loadBudgetStore();
    const u = store[accountId] || defaultBudgetStore()[accountId];
    u.keptResultsBytes = (u.keptResultsBytes || 0) + (bytes || 0);
    store[accountId] = u;
    saveBudgetStore(store);
    return budgetSnapshot(accountId);
  }

  function resetBudget(accountId, ownerOnly) {
    if (ownerOnly && getActiveAccountId() !== "deanna") return false;
    const store = loadBudgetStore();
    store[accountId] = defaultBudgetStore()[accountId];
    store[accountId].dayKey = todayKey();
    saveBudgetStore(store);
    return true;
  }


  // ─── Forensic three-point test (never invent) ───
  function threePointAccuracyTest(text) {
    const t = (text || "").trim();
    const checks = [
      {
        id: "law",
        label: "1. Law pin",
        pass: /hogsett|c\.r\.c\.p|c\.a\.r|lafleur|burford|lewis|c\.r\.s|§|p\.3d/i.test(t),
        fix: "Name the controlling authority (e.g., Hogsett, C.R.C.P. 59) — do not invent cases.",
      },
      {
        id: "fact_cite",
        label: "2. Fact + source breadcrumb",
        pass: /finding\s*\d+|jtmc|ex\.?\s*\d+|r\.\s*\d|¶|p\.\s*\d|order|transcript|filing|10\/27|4\/21|12\/4/i.test(t),
        fix: "Every fact needs Document / page / § / ¶ / lines or R.__ — no naked claims.",
      },
      {
        id: "no_invention",
        label: "3. No invention / no wander",
        pass: t.length > 0 && !/\b(maybe the court felt|probably|I believe they meant|it seems like|assume that)\b/i.test(t),
        fix: "Remove guesswork, paraphrase-as-fact, gap-fill, projection, or synthesis not in the record.",
      },
    ];
    // Red flags for F83 filing
    const f83Flag = /finding\s*83/i.test(t) && /whether|issue|argument|error/i.test(t);
    const passCount = checks.filter(function (c) { return c.pass; }).length;
    return {
      passCount: passCount,
      total: 3,
      ready: passCount === 3 && !f83Flag,
      checks: checks,
      f83Flag: f83Flag,
      f83Note: f83Flag
        ? "⚠ Finding 83 detected in issue-like language. F83 was NOT raised in case/Rule 59 — strip from Opening Brief issues."
        : null,
      message: passCount === 3 && !f83Flag
        ? "Three-point test passed for this snippet. Still human-check every pin."
        : "Not filing-ready yet. Fix failed points — forensic accuracy only.",
    };
  }

  function finalDraftReview(text) {
    const t = text || "";
    const accuracy = threePointAccuracyTest(t);
    const flags = [];
    if (/finding\s*83/i.test(t) && /(whether|issue\s*[ivx]|argument)/i.test(t)) {
      flags.push({ severity: "fatal", text: "Finding 83 used as appeal issue language — NOT PRESERVED. Remove." });
    }
    if (/\b(hallucin|I think the order said|something like)\b/i.test(t)) {
      flags.push({ severity: "fatal", text: "Speculative language detected." });
    }
    if (!/hogsett|c\.r\.c\.p\.\s*59|rule 59/i.test(t) && /appeal|opening brief|issue/i.test(t)) {
      flags.push({ severity: "high", text: "Draft discusses appeal without Hogsett / Rule 59 pins." });
    }
    if (/delet(e|ing)|remove from drive|overwrite source/i.test(t)) {
      flags.push({ severity: "fatal", text: "Source-of-truth files must NEVER be deleted, edited, moved, or modified by this PWA workflow." });
    }
    const preservedPath =
      /finding\s*52/i.test(t) && /rule\s*59|c\.r\.c\.p/i.test(t) && /jtmc|ex\.?\s*48|beneficiary/i.test(t);
    return {
      accuracy: accuracy,
      flags: flags,
      preservedPathOk: preservedPath,
      verdict: flags.some(function (f) { return f.severity === "fatal"; })
        ? "STOP — fix fatal flags before any filing use"
        : accuracy.ready
          ? "Draft snippet may proceed to human final pin-check"
          : "Revise — three-point test incomplete",
    };
  }

  function baffleMode(text) {
    const inv = invertArgument(text || "pro se jargon volume minor");
    const primary = inv[0] || INVERSIONS[INVERSIONS.length - 1];
    return {
      bullets: [
        "Their swipe: " + (primary.attack || "").slice(0, 160),
        "Your lever: " + (primary.plain || "").slice(0, 180),
        "Panel ask: " + (primary.panelAsk || "What is the legal error that requires remand?"),
      ],
      full: primary,
      tip: "Three bullets only. No matching their volume. Clarity is the weapon.",
    };
  }

  function buildIssueIPacket() {
    const iss = APPEAL_ISSUE_BANK.find(function (i) { return i.id === "I"; });
    const iss2 = APPEAL_ISSUE_BANK.find(function (i) { return i.id === "II" && !i.doNotFile; });
    const crumbs = [
      "JTMC ¶¶ I, J, K — Petitioner designated primary beneficiary on three properties (stipulated).",
      "Exhibit 48 — recorded 2010 beneficiary deeds naming Petitioner as grantee-beneficiary.",
      "Order 12/4/2025 Finding 52 ORIGINAL — named Respondent (and son) as grantee-beneficiary; omitted Petitioner.",
      "Rule 59 Order 4/21/2026 12:32 PM — GRANTS in part; corrects Finding 52 (and 51); labels clerical/minor; no amendment of judgment; no Hogsett re-application.",
      "Relief baseline — marital estate / designations as of Petition filing date October 27, 2024.",
    ];
    const packet = {
      title: "Issue I Packet — PRESERVED PATH ONLY (no Finding 83 issue)",
      issue: iss ? iss.whether : "",
      companion: iss2 ? iss2.whether : "",
      standard: iss ? iss.standard : "",
      breadcrumbs: crumbs,
      relief: "Reverse December 4, 2025 dismissal with prejudice; remand for Hogsett totality on corrected findings; restore/value designations and estate as of October 27, 2024 filing date.",
      doNot: [
        "Do NOT file Finding 83 as an issue (not raised in case or Rule 59).",
        "Do NOT invent cites, paraphrase facts into existence, or gap-fill.",
        "Do NOT delete/edit/move Google Drive source-of-truth files.",
        "Do NOT let CBA/OARC presentation rewrite the appeal brief (wall off presentation; share case facts only).",
      ],
      threePoint: "Every sentence in the brief must pass: (1) law pin, (2) fact + breadcrumb, (3) no invention.",
      generatedAt: new Date().toISOString(),
    };
    const text = [
      packet.title,
      "",
      "ISSUE (Whether…)",
      packet.issue,
      "",
      "COMPANION FRAME (Rule 59 admission / no reweigh)",
      packet.companion,
      "",
      "STANDARD OF REVIEW",
      packet.standard,
      "",
      "FIVE BREADCRUMBS (map 100% to source — fill page/¶/line before filing)",
      packet.breadcrumbs.map(function (c, i) { return (i + 1) + ". " + c + " [PAGE/¶/LINE: CITE NEEDED]"; }).join("\n"),
      "",
      "RELIEF",
      packet.relief,
      "",
      "DO NOT",
      packet.doNot.map(function (d) { return "- " + d; }).join("\n"),
      "",
      "THREE-POINT TEST",
      packet.threePoint,
      "",
      "Generated: " + packet.generatedAt,
      "Not legal advice — process packet for Opening Brief drafting.",
    ].join("\n");
    return { packet: packet, text: text };
  }

  function confirmQueryIntent(rawQuestion) {
    const q = (rawQuestion || "").trim();
    // Light translation to appellate-check form WITHOUT changing user's facts
    let translated = q;
    if (q && !/^whether\b/i.test(q) && /finding\s*52|rule\s*59|hogsett|beneficiary/i.test(q)) {
      translated = "User is asking (plain): " + q +
        "\n\nAppellate framing check (for confirmation only — does NOT replace their question unless they approve): " +
        "Whether the trial court's treatment of Finding 52 / Rule 59 / Hogsett duty answers: " + q;
    }
    const risks = [];
    if (/finding\s*83/i.test(q)) {
      risks.push("Question mentions Finding 83. Reminder: F83 was not raised in case/Rule 59 — do not convert this into an unpreserved appeal issue.");
    }
    if (q.length > 800) risks.push("Long question — consider one issue per send to save budget.");
    return {
      original: q,
      framingCheck: translated,
      risks: risks,
      promptToUser: "Is this what you want to ask? Edit if wrong. The system will NOT change your facts — only confirm intent before spend.",
    };
  }


  const NOTEBOOKLM_GUIDE = {
    title: "Connect exports to Google NotebookLM (second-stage review)",
    look: "In the PWA you will see: Export → Drive folder checklist → NotebookLM steps → optional 'Paste insight as note'. The PWA does not embed NotebookLM inside the page (Google does not allow a full in-app NotebookLM takeover). It is a guided bridge.",
    steps: [
      "In Prep Studio or Query, export Issue I packet / kept results / notes (download).",
      "Upload those export files into your designated Google Drive folder (exports only — never overwrite source-of-truth).",
      "Open notebooklm.google.com → New notebook → Add sources → Drive → select the export files (or paste text).",
      "Ask NotebookLM clarifying questions on the export corpus only.",
      "Copy useful clarifications back into the PWA as a Note (Pending). Do not treat NotebookLM output as a court cite unless it matches a pinned source document.",
    ],
    limits: [
      "NotebookLM is for clarity/granularity on exports — not a second source of truth.",
      "Never upload secrets/API keys.",
      "Always re-pin facts to JTMC / orders / exhibits before filing language.",
    ],
  };

  // Hash levels for case data integrity (browser-capable)
  // L1 inventory · L2 text content · L3 optional binary · L4 export package

  // ─── Exhibit E temporary access policy (Drive SoT: 0 ALL Case Files) ───
  // Folder: 15c2CZNiSnBoD-y5okO3hZbN5DRQKW36n
  // Unreadable PERA packet is BLOCKED. Temporary OCR-work PDF is the only access path.
  const DRIVE_SOT = {
    folderId: "15c2CZNiSnBoD-y5okO3hZbN5DRQKW36n",
    folderName: "0 ALL Case Files",
    folderUrl: "https://drive.google.com/drive/folders/15c2CZNiSnBoD-y5okO3hZbN5DRQKW36n",
  };

  const FILE_ACCESS_POLICY = {
    blockedExact: [
      "2024DR31793_3_2025-10-29_Exhibit_E___Trial_Hearing___PERA_Records_6895589450463645624.pdf",
    ],
    // substring markers that identify the blocked binary (unique id tail)
    blockedMarkers: [
      "6895589450463645624",
      "Exhibit_E___Trial_Hearing___PERA_Records_6895589450463645624",
    ],
    // active temporary replacement for all vault/query/review access
    activeReplacement: {
      fileName: "2024DR31793_3_2025-10-29_Exhibit_E_Trial_Hearing_PERA_Records_Needs MORE OCR.pdf",
      markers: [
        "Needs MORE OCR",
        "PERA_Records_Needs",
        "Exhibit_E_Trial_Hearing_PERA_Records_Needs",
      ],
      note: "Temporary fix for Exhibit E PERA records — use this file only until full OCR is complete. Do not open the blocked 6895589450463645624 binary.",
    },
    // must be included in migration / inventory from Drive SoT
    migrateMustInclude: [
      {
        fileName: "Jul 29 Exhibit E List for OCR Work",
        markers: ["Jul 29 Exhibit E List for OCR", "Exhibit E List for OCR Work"],
        role: "Checklist of Exhibit E pieces still needing OCR work",
        statusHint: "migrate_required",
      },
      {
        fileName: "2024DR31793_3_2025-10-29_Exhibit_E_Trial_Hearing_PERA_Records_Needs MORE OCR.pdf",
        markers: ["Needs MORE OCR"],
        role: "Active temporary Exhibit E PERA access file",
        statusHint: "active_ocr_work",
      },
    ],
  };

  function normFileKey(name) {
    return String(name || "")
      .toLowerCase()
      .replace(/[\s_]+/g, " ")
      .replace(/\.pdf$/i, "")
      .trim();
  }

  function isBlockedExhibitEFile(fileName, id) {
    const raw = String(fileName || "") + " " + String(id || "");
    const low = raw.toLowerCase();
    if (FILE_ACCESS_POLICY.blockedExact.some(function (x) {
      return low.indexOf(x.toLowerCase()) >= 0;
    })) return true;
    return FILE_ACCESS_POLICY.blockedMarkers.some(function (m) {
      return low.indexOf(String(m).toLowerCase()) >= 0;
    });
  }

  function isActiveExhibitEReplacement(fileName, id) {
    const raw = String(fileName || "") + " " + String(id || "");
    const low = raw.toLowerCase();
    return FILE_ACCESS_POLICY.activeReplacement.markers.some(function (m) {
      return low.indexOf(String(m).toLowerCase()) >= 0;
    });
  }

  /**
   * Apply access policy to one vault doc.
   * - Blocked unreadable PERA packet → rewritten to active Needs MORE OCR stand-in (or dropped if only a block stub)
   * - Never surfaces drive open to blocked binary
   */
  function applyVaultFilePolicy(doc) {
    if (!doc) return null;
    const out = Object.assign({}, doc);
    const name = out.fileName || out.id || "";
    const id = out.id || "";

    // Keep explicit BLOCKED notice rows (education only — not the binary)
    if (/^blocked/i.test(String(name).trim()) || out.status === "blocked") {
      out.accessPolicy = "BLOCKED_NOTICE";
      out.doNotOpenOriginal = true;
      if (out.driveUrl && String(out.driveUrl).indexOf("6895589450463645624") >= 0) {
        out.driveUrl = DRIVE_SOT.folderUrl;
      }
      return out;
    }

    if (isBlockedExhibitEFile(name, id)) {
      // Do not allow access to the unreadable binary — rewrite as pointer to active OCR-work file
      out._blockedOriginal = name;
      out.fileName = FILE_ACCESS_POLICY.activeReplacement.fileName;
      out.status = "redirected_to_ocr_work";
      out.accessPolicy = "BLOCKED_ORIGINAL→ACTIVE_OCR_WORK";
      out.policyNote = FILE_ACCESS_POLICY.activeReplacement.note;
      // Strip any link that might open the blocked file
      if (out.driveUrl && String(out.driveUrl).indexOf("6895589450463645624") >= 0) {
        out.driveUrl = DRIVE_SOT.folderUrl;
      }
      out.text = (out.text && String(out.text).trim())
        ? ("[ACCESS REDIRECT] Original unreadable Exhibit E PERA binary is blocked. Use temporary OCR-work file instead.\n\n" + out.text)
        : ("[ACCESS REDIRECT] The file " +
            FILE_ACCESS_POLICY.blockedExact[0] +
            " is blocked (unreadable OCR). All read/query access is redirected to: " +
            FILE_ACCESS_POLICY.activeReplacement.fileName +
            ". See also: Jul 29 Exhibit E List for OCR Work. Drive SoT folder: " +
            DRIVE_SOT.folderName + ".");
      out.doNotOpenOriginal = true;
    }

    if (isActiveExhibitEReplacement(out.fileName, out.id)) {
      out.accessPolicy = out.accessPolicy || "ACTIVE_OCR_WORK";
      out.policyNote = FILE_ACCESS_POLICY.activeReplacement.note;
      if (!out.status || out.status === "no_text_extracted") {
        // keep status but flag
        out.ocrWorkFlag = true;
      }
    }

    // Tag OCR list file
    if (/jul 29 exhibit e list for ocr/i.test(String(out.fileName || "") + " " + String(out.id || ""))) {
      out.accessPolicy = "OCR_WORK_LIST";
      out.policyNote = "Lists Exhibit E files still needing OCR. Migrate 100% from Drive SoT.";
      out.migrateRequired = true;
    }

    return out;
  }

  function applyVaultFilePolicyToList(docs) {
    docs = docs || [];
    const mapped = [];
    const seenActive = {};
    docs.forEach(function (d) {
      const x = applyVaultFilePolicy(d);
      if (!x) return;
      // de-dupe multiple blocked originals collapsing onto same active name
      const key = normFileKey(x.fileName);
      if (x.doNotOpenOriginal || x.accessPolicy === "BLOCKED_ORIGINAL→ACTIVE_OCR_WORK") {
        if (seenActive[key]) {
          // merge text notes
          if (x.text && seenActive[key].text && seenActive[key].text.indexOf(x.text.slice(0, 80)) < 0) {
            seenActive[key].text += "\n\n" + x.text;
          }
          return;
        }
        seenActive[key] = x;
      }
      mapped.push(x);
    });
    return mapped;
  }

  /** Seeds / expected migration rows for Exhibit E temporary fix */
  function exhibitEPolicySeeds() {
    const folder = DRIVE_SOT.folderUrl;
    return [
      {
        id: "seed_exhibit_e_ocr_list",
        fileName: "Jul 29 Exhibit E List for OCR Work",
        driveUrl: folder,
        status: "migrate_required",
        accessPolicy: "OCR_WORK_LIST",
        text:
          "MIGRATION REQUIRED from Google Drive source-of-truth folder: 0 ALL Case Files (" +
          DRIVE_SOT.folderId +
          "). This list names Exhibit E pieces that still need OCR work. " +
          "When Apps Script regenerates the Drive inventory spreadsheet, confirm this file is present and migrated to Firestore caseText. " +
          "Use it as the checklist; do not invent page text that is not yet OCR'd.",
      },
      {
        id: "seed_exhibit_e_needs_more_ocr",
        fileName: "2024DR31793_3_2025-10-29_Exhibit_E_Trial_Hearing_PERA_Records_Needs MORE OCR.pdf",
        driveUrl: folder,
        status: "active_ocr_work",
        accessPolicy: "ACTIVE_OCR_WORK",
        text:
          "ACTIVE TEMPORARY Exhibit E / Trial Hearing / PERA Records access file. " +
          "Replaces all read/write/query access to the unreadable binary " +
          "2024DR31793_3_2025-10-29_Exhibit_E___Trial_Hearing___PERA_Records_6895589450463645624.pdf " +
          "(BLOCKED — do not open or cite as complete). " +
          "This temporary file still needs more OCR in places; see Jul 29 Exhibit E List for OCR Work for remaining gaps. " +
          "Source folder: 0 ALL Case Files.",
      },
      {
        id: "seed_exhibit_e_blocked_notice",
        fileName: "BLOCKED — Exhibit E PERA binary 6895589450463645624 (do not access)",
        driveUrl: folder,
        status: "blocked",
        accessPolicy: "BLOCKED",
        text:
          "DO NOT ACCESS: 2024DR31793_3_2025-10-29_Exhibit_E___Trial_Hearing___PERA_Records_6895589450463645624.pdf. " +
          "Unreadable / broken OCR. All PWA query, review, and open actions are redirected to " +
          "2024DR31793_3_2025-10-29_Exhibit_E_Trial_Hearing_PERA_Records_Needs MORE OCR.pdf. " +
          "Original remains in Drive SoT for preservation only — never use as working text until re-OCR replaces it deliberately.",
      },
    ];
  }

  function mergePolicySeedsIntoDocs(docs) {
    docs = applyVaultFilePolicyToList(docs || []);
    const seeds = exhibitEPolicySeeds();
    const keys = {};
    docs.forEach(function (d) {
      keys[normFileKey(d.fileName)] = true;
      keys[normFileKey(d.id)] = true;
    });
    seeds.forEach(function (s) {
      const k = normFileKey(s.fileName);
      if (!keys[k] && !keys[normFileKey(s.id)]) {
        docs.push(s);
        keys[k] = true;
      }
    });
    // Ensure blocked raw name never remains queryable under original filename
    return applyVaultFilePolicyToList(docs);
  }


  const HASH_LEVELS = [
    {
      level: 1,
      name: "Inventory / presence",
      plain: "Is every Drive file represented in Firestore caseText?",
      how: "Name/id match + status + driveUrl present",
      strength: "Catches missing migration; does not prove text matches the PDF.",
    },
    {
      level: 2,
      name: "Captured-text fingerprint (SHA-256)",
      plain: "Hash of the text stored in the vault for that file.",
      how: "SHA-256 over normalized UTF-8 text (trim + collapse whitespace optional).",
      strength: "Detects silent edits to vault text; re-OCR changes the hash (expected).",
    },
    {
      level: 3,
      name: "Source-file binary fingerprint",
      plain: "Hash of the original bytes in Google Drive (PDF/image).",
      how: "Usually computed outside pure browser (Apps Script / Drive API download) and stored as expectedSha256 on the caseText doc or in a manifest.",
      strength: "Proves source-of-truth file was not swapped; PWA should never recompute by rewriting originals.",
    },
    {
      level: 4,
      name: "Export / package seal",
      plain: "Hash of an Issue I packet or weekly export bundle.",
      how: "SHA-256 of exported JSON/text; store beside the export in Drive.",
      strength: "Proves NotebookLM / brief draft inputs were not altered after export.",
    },
  ];

  function normalizeTextForHash(text) {
    return String(text || "")
      .replace(/^\uFEFF/, "")
      .replace(/\r\n/g, "\n")
      .replace(/[ \t]+\n/g, "\n")
      .trim();
  }

  async function sha256Hex(str) {
    const data = new TextEncoder().encode(String(str || ""));
    if (typeof crypto !== "undefined" && crypto.subtle) {
      const buf = await crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(buf))
        .map(function (b) { return b.toString(16).padStart(2, "0"); })
        .join("");
    }
    // tiny fallback (not crypto-strong) — mark as weak
    let h = 2166136261;
    for (let i = 0; i < data.length; i++) {
      h ^= data[i];
      h = Math.imul(h, 16777619);
    }
    return "weak_" + (h >>> 0).toString(16);
  }

  async function fingerprintVaultDoc(doc) {
    const text = normalizeTextForHash(doc.text || "");
    const textSha = text.length ? await sha256Hex(text) : null;
    const metaStr = [
      doc.id || "",
      doc.fileName || "",
      doc.driveUrl || "",
      doc.status || "",
      text.length,
    ].join("|");
    const metaSha = await sha256Hex(metaStr);
    return {
      id: doc.id,
      fileName: doc.fileName || doc.id,
      driveUrl: doc.driveUrl || null,
      status: doc.status || "",
      textChars: text.length,
      textSha256: textSha,
      metaSha256: metaSha,
      hasBinarySha: !!(doc.sourceSha256 || doc.binarySha256 || doc.fileSha256),
      sourceSha256: doc.sourceSha256 || doc.binarySha256 || doc.fileSha256 || null,
    };
  }

  async function integrityReportFromVault(docs, driveManifest, expectedHashes) {
    // docs: vault caseText
    // driveManifest: [{name, id, url, sourceSha256?}]
    // expectedHashes: [{fileName, textSha256?, sourceSha256?}] optional owner manifest
    docs = docs || [];
    driveManifest = driveManifest || [];
    expectedHashes = expectedHashes || [];

    const fps = [];
    for (let i = 0; i < docs.length; i++) {
      fps.push(await fingerprintVaultDoc(docs[i]));
    }

    const byName = {};
    fps.forEach(function (f) {
      byName[(f.fileName || "").toLowerCase()] = f;
    });

    const missingText = fps.filter(function (f) { return !f.textChars || f.textChars < 20; });
    const missingDrive = fps.filter(function (f) { return !f.driveUrl; });
    const withBinaryPin = fps.filter(function (f) { return f.hasBinarySha; });

    const manifestOnly = [];
    const matched = [];
    driveManifest.forEach(function (m) {
      const n = (m.name || "").toLowerCase();
      if (byName[n]) matched.push(m.name);
      else manifestOnly.push(m.name);
    });

    // Level 2/3 compare against expected hash manifest
    const hashMismatches = [];
    const hashMatches = [];
    const hashMissingExpected = [];
    expectedHashes.forEach(function (exp) {
      const f = byName[(exp.fileName || exp.name || "").toLowerCase()];
      if (!f) {
        hashMissingExpected.push(exp.fileName || exp.name);
        return;
      }
      if (exp.textSha256 && f.textSha256) {
        if (exp.textSha256.toLowerCase() === f.textSha256.toLowerCase()) {
          hashMatches.push({ file: f.fileName, layer: "text" });
        } else {
          hashMismatches.push({
            file: f.fileName,
            layer: "text",
            expected: exp.textSha256,
            actual: f.textSha256,
          });
        }
      }
      if (exp.sourceSha256) {
        if (!f.sourceSha256) {
          hashMismatches.push({
            file: f.fileName,
            layer: "source-binary",
            expected: exp.sourceSha256,
            actual: null,
            note: "Vault has no sourceSha256 field yet — add after Drive binary hash job.",
          });
        } else if (exp.sourceSha256.toLowerCase() === f.sourceSha256.toLowerCase()) {
          hashMatches.push({ file: f.fileName, layer: "source-binary" });
        } else {
          hashMismatches.push({
            file: f.fileName,
            layer: "source-binary",
            expected: exp.sourceSha256,
            actual: f.sourceSha256,
            note: "CRITICAL: source file fingerprint differs — investigate before relying on this file.",
          });
        }
      }
    });

    const coverage = docs.length ? Math.round(((docs.length - missingText.length) / docs.length) * 100) : 0;

    // Duplicate text hashes (possible copy/paste migration error)
    const textHashMap = {};
    fps.forEach(function (f) {
      if (!f.textSha256) return;
      if (!textHashMap[f.textSha256]) textHashMap[f.textSha256] = [];
      textHashMap[f.textSha256].push(f.fileName);
    });
    const duplicateTexts = Object.keys(textHashMap)
      .filter(function (h) { return textHashMap[h].length > 1; })
      .map(function (h) { return { sha256: h, files: textHashMap[h] }; });

    return {
      levels: HASH_LEVELS,
      vaultCount: docs.length,
      withText: docs.length - missingText.length,
      missingTextCount: missingText.length,
      missingDriveLinkCount: missingDrive.length,
      coveragePct: coverage,
      binaryPinsPresent: withBinaryPin.length,
      manifestMatched: matched.length,
      manifestOnlyInDrive: manifestOnly.slice(0, 50),
      sampleMissingText: missingText.slice(0, 25).map(function (d) { return d.fileName; }),
      fingerprints: fps,
      hashMatches: hashMatches,
      hashMismatches: hashMismatches,
      hashMissingExpected: hashMissingExpected,
      duplicateTexts: duplicateTexts.slice(0, 20),
      verdict: hashMismatches.length
        ? "Hash mismatch — do not treat vault as sealed until investigated"
        : (coverage >= 100 && missingDrive.length === 0
          ? "L1 inventory complete; L2 text fingerprints generated — seal with L3 binary hashes when ready"
          : "Migration incomplete — finish text capture; keep originals untouched"),
      tip: "Use L1 to finish migration, L2 to freeze vault text, L3 (Drive binary) for source-of-truth seal, L4 to seal exports for NotebookLM/brief packets. Never hash by modifying originals.",
      howToGetL3: [
        "Option A: Google Apps Script in the Drive folder — for each file compute Utilities.computeDigest(SHA_256) and write a CSV: name,sourceSha256.",
        "Option B: Local machine one-time: sha256sum on downloaded copies, then paste manifest into Owner Tools (do not replace Drive originals).",
        "Option C: Cloud Function on upload to caseText with file bytes hash field sourceSha256.",
      ],
    };
  }


  function buildIntegrityNLReport(rep) {
    rep = rep || {};
    const lines = [];
    lines.push("Integrity check results (plain English)");
    lines.push("");
    lines.push("What we checked: L1 inventory (is every file present?), L2 text fingerprints (did captured text change?), optional L3 binary hashes (is the original Drive file the same bytes?), L4 export seals (did a downloaded packet change?).");
    lines.push("");
    lines.push("Overall: " + (rep.verdict || "No report"));
    lines.push("Vault documents: " + (rep.vaultCount || 0) + ". With usable text: " + (rep.withText || 0) + " (" + (rep.coveragePct || 0) + "% coverage).");
    lines.push("Missing or thin text: " + (rep.missingTextCount || 0) + ". Missing Drive links: " + (rep.missingDriveLinkCount || 0) + ".");
    lines.push("L3 binary pins already stored on vault docs: " + (rep.binaryPinsPresent || 0) + ".");
    if (rep.hashMatches && rep.hashMatches.length) lines.push("Hash matches: " + rep.hashMatches.length + " (good — fingerprints agree).");
    if (rep.hashMismatches && rep.hashMismatches.length) lines.push("Hash mismatches: " + rep.hashMismatches.length + " (investigate before relying on those files).");
    if (rep.duplicateTexts && rep.duplicateTexts.length) lines.push("Duplicate text fingerprints across different files: " + rep.duplicateTexts.length + " (possible copy/paste migration mix-up).");
    lines.push("");
    lines.push("SHA-256 note: collision risk in practice is negligible for case files. Digital signatures (optional next layer) mean a private key signs the hash so others can verify you sealed it.");
    return lines.join("\n");
  }

  function integrityCorrectiveActions(rep) {
    const actions = [];
    if (!rep) {
      return [{ step: 1, title: "Run the check", detail: "Use Owner Tools → Request data integrity check.", help: "prep:owner" }];
    }
    let n = 1;
    if ((rep.missingTextCount || 0) > 0) {
      actions.push({
        step: n++,
        title: "Fill missing or thin text",
        detail: "Open Files Review. For each listed file, open Drive (view only), OCR or carefully describe, Save. Do not edit the original Drive file.",
        help: "tab:files",
        sample: (rep.sampleMissingText || []).slice(0, 8),
      });
    }
    if ((rep.missingDriveLinkCount || 0) > 0) {
      actions.push({
        step: n++,
        title: "Add missing Drive links on vault rows",
        detail: "Each caseText doc should carry driveUrl pointing at the source file. Fix in your migration sheet or Firestore field — PWA does not rewrite Drive originals.",
        help: "prep:owner",
      });
    }
    if (rep.manifestOnlyInDrive && rep.manifestOnlyInDrive.length) {
      actions.push({
        step: n++,
        title: "Migrate Drive files not yet in the vault",
        detail: "These names appear in your Drive inventory but not in Firestore: capture text 100% accurately into caseText.",
        help: "tab:files",
        sample: rep.manifestOnlyInDrive.slice(0, 10),
      });
    }
    if (rep.hashMismatches && rep.hashMismatches.length) {
      actions.push({
        step: n++,
        title: "Investigate hash mismatches",
        detail: "Text or source fingerprint does not match the expected seal. Re-open the source, re-verify OCR, update vault only if the new text is correct, then re-export fingerprints.",
        help: "prep:owner",
        sample: rep.hashMismatches.slice(0, 5).map(function (m) { return m.file + " (" + m.layer + ")"; }),
      });
    }
    if (rep.duplicateTexts && rep.duplicateTexts.length) {
      actions.push({
        step: n++,
        title: "Resolve duplicate text fingerprints",
        detail: "Two different file names share the same captured text. Confirm you did not paste the wrong OCR into the wrong row.",
        help: "tab:files",
      });
    }
    if ((rep.binaryPinsPresent || 0) === 0) {
      actions.push({
        step: n++,
        title: "Optional: add L3 binary hashes when folder is stable",
        detail: "Use Apps Script or sha256sum on copies to create sourceSha256 values; paste as expected-hash JSON. Never replace originals.",
        help: "prep:owner",
      });
    }
    if (!actions.length) {
      actions.push({
        step: 1,
        title: "No corrective action required from this run",
        detail: "Export fingerprints (L2) and keep a sealed copy in your Drive export folder. Re-run after any OCR work.",
        help: "prep:owner",
      });
    }
    actions.push({
      step: n++,
      title: "Export integrity files for your records",
      detail: "Download fingerprints JSON + full report + plain-English report. Store in the designated export folder (not source-of-truth).",
      help: "prep:owner",
    });
    return actions;
  }

  const META_PREMORTEM = [
    { id: "m1", severity: "fatal", title: "Transcript pins still incomplete", fix: "Locate hearing transcript pages for insurance-cancel and 'may deserve something'; add to vault with page/line." },
    { id: "m2", severity: "fatal", title: "Exhibit E OCR incomplete", fix: "Chunk OCR playbook; Files Review until integrity L1 text coverage includes E." },
    { id: "m3", severity: "high", title: "L3 binary hashes not sealed", fix: "When folder stable, generate sourceSha256 manifest; paste into integrity expected hashes." },
    { id: "m4", severity: "high", title: "Mobile/voice is Stephanie's primary path", fix: "Keep touch targets large; confirm-before-send; free Toolbox first; her own API keys." },
    { id: "m5", severity: "high", title: "Unpreserved F83 creep", fix: "Final draft review before any filing language; DO NOT FILE banner stays." },
    { id: "m6", severity: "medium", title: "CBA/OARC steals Opening Brief oxygen", fix: "Wall off presentation; share facts only; calendar Opening Brief first." },
    { id: "m7", severity: "medium", title: "Budget spike during phases", fix: "Stephanie 85% warn / 95% block; free tools; daily caps." },
    { id: "m8", severity: "medium", title: "Export without seal", fix: "Always use L4 seal on Issue I packet / weekly export before NotebookLM." },
    { id: "m9", severity: "low", title: "No external deadline SMS", fix: "Optional later; until then use C.A.R. Deadlines tab + calendar export." },
    { id: "m10", severity: "high", title: "Drive API auto-sync not built", fix: "Manual migration + integrity remains source of truth until optional sync job." },
  ];

  function sha256CodeSnippet() {
    return [
      "// Browser SHA-256 (same idea as PWA L2 fingerprints)",
      "async function sha256Hex(str) {",
      "  const data = new TextEncoder().encode(str);",
      "  const buf = await crypto.subtle.digest('SHA-256', data);",
      "  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,'0')).join('');",
      "}",
      "// Example:",
      "// const digest = await sha256Hex('Finding 52 text...');",
      "// console.log(digest);",
    ].join("\\n");
  }


  async function sealExportText(text, label) {
    const sha = await sha256Hex(normalizeTextForHash(text));
    return {
      label: label || "export",
      level: 4,
      sha256: sha,
      chars: (text || "").length,
      sealedAt: new Date().toISOString(),
      note: "Store this hash next to the export file in Drive. Re-hash later to prove the package was not altered.",
    };
  }

  const OCR_EXHIBIT_E_PLAYBOOK = {
    title: "Exhibit E / heavy OCR — practical fix path",
    whyHard: "Large scans, mixed handwriting, stamps, and multi-column layouts break single-pass OCR. One giant file multiplies failure.",
    easyPath: [
      "Keep the original Exhibit E file untouched in Drive (source of truth).",
      "Split into page ranges (e.g. E-001–020, 021–040) as derivative PDFs/images in an /OCR_work/ export subfolder — never replace the original.",
      "OCR each chunk (Drive 'Open with' Docs, Adobe, or free OCR). Save plain text beside each chunk.",
      "In PWA Files Needing Review: paste verified text or a careful plain-English description → status manually_described / text present.",
      "For unreadable stamps/handwriting: mark CITE NEEDED + describe what is visible; do not invent words.",
      "Integrity panel: re-run until Exhibit E chunks show text coverage.",
    ],
    pwaHelp: "Files Needing Review + offline seed merge already support gap fill without deleting Drive files. Owner integrity report lists missing text names.",
  };

  const ARCHITECTURE_REC = [
    { area: "Concept", rec: "A courtroom-ready process tutor: law first, facts pinned, budgets protected, sister-safe helper mode." },
    { area: "Intent", rec: "Give a determined pro se person a fair shot: informed, calm, preserved issues only, form-perfect enough to be heard." },
    { area: "Purpose", rec: "Translate heart into C.A.R./Hogsett-shaped work product without pretending to be counsel." },
    { area: "Structure", rec: "Lanes (Appeal/CBA/OARC/Whole) → tabs → Prep Studio tools → gated Query. Owner tools walled." },
    { area: "Look", rec: "Navy/gold authority, large touch targets, plain language, progress that encourages not shames." },
    { area: "Navigation", rec: "Large Home; sticky mode badge; free-first path for helper; Issue Lab as appeal spine." },
    { area: "Input", rec: "Voice + short text; confirm intent; never silent rewrite; section mics." },
    { area: "Output", rec: "Packets, breadcrumbs, ranked preserved issues, Keep/export, NotebookLM bridge on exports." },
    { area: "Architecture", rec: "Drive source of truth → Firestore caseText → PWA tutor layer → exports. Offline-first cache. Dual accounts." },
    { area: "Guarding facts", rec: "Three-point test, preservation firewall, integrity reports, no source mutation." },
    { area: "Cheering on", rec: "Supportive Help Buddy, training ladder, concrete next steps when flooded." },
  ];


  const F52_WALKTHROUGH = {
    title: "Finding 52 — wrong, admitted, preserved: why it can stand on appeal",
    steps: [
      { t: "The trial fact conflict", d: "Original Finding 52 said each revocable beneficiary deed designated Respondent (and son). JTMC ¶¶ I–K and Exhibit 48 show Petitioner as primary grantee-beneficiary. Those are not small footnotes — they are estate-planning facts Hogsett cares about." },
      { t: "Hogsett duty (nuance)", d: "Hogsett requires a real totality analysis. Material identified factors — including estate-planning/beneficiary designations — must be weighed. The duty is to apply the framework, not to wave a 'minor' label over a 0%→100% primacy inversion." },
      { t: "Rule 59 standard (nuance)", d: "Rule 59 is the post-trial tool to correct findings/judgment. A grant-in-part is the court admitting those findings needed fixing. The legal fight is what must happen next: if the corrected facts feed Hogsett, the framework must be re-applied — not skipped." },
      { t: "What the court did", d: "4/21/2026 Rule 59 order granted in part, corrected Findings 51 and 52, called them clerical/minor, and left dismissal with prejudice without Hogsett re-application." },
      { t: "Why appellate courts can reach this", d: "Preserved path only: JTMC + Ex. 48 + original F52 + Rule 59 admission + no re-application. Frame as failure to apply mandatory legal framework (de novo), not 'please like me more on the facts.'" },
      { t: "What stays out", d: "Finding 83 was not raised in the case or Rule 59 — do not file it as your issue. Existence in the order ≠ preservation." },
      { t: "Confirm understanding", d: "Wrong F52 + Rule 59 fix + no Hogsett re-run = your core. Heart matters; Hogsett + pins carry the room." },
    ],
  };


  const STEPHANIE_GUIDE = [
    { step: 1, title: "You are in Stephanie mode", body: "This is your helper workspace. You do not need to switch identities. Focus on organizing, notes, and short questions." },
    { step: 2, title: "Home → The Appeal (or Whole Case)", body: "Big Home button returns to the doors. Appeal lane for appeal work. Stephanie's World for your links and notes." },
    { step: 3, title: "Start with free tools", body: "Prep Studio → Issue Lab, Breadcrumbs, Invert, Spar Foundation. Learn without spending AI." },
    { step: 4, title: "Query only when you need the vault", body: "One short plain-English question. Example: \"What did Rule 59 say about Finding 52?\"" },
    { step: 5, title: "Check the friendly usage meter before Send", body: "The meter helps the case stay affordable for everyone. Yellow means slow down. If Send pauses, switch to free tools or try again later." },
    { step: 6, title: "Confirm your question, then Send", body: "Tap confirm so the question is what you meant. That saves confusion — not a test, a safety net." },
    { step: 7, title: "Read · Keep only gold", body: "Keep answers you will actually use. Capture the rest as a short note in your own words." },
    { step: 8, title: "Notes in Stephanie's World", body: "Your notes help the team. Keep them clear and kind to future-you." },
    { step: 9, title: "When energy spikes", body: "Totally human. Park on one free drill or one note, then rest. Come back sharp." },
    { step: 10, title: "If something looks broken", body: "Use the error popup (More info lists who can fix what). For Query, save your own API keys in Toolbox/Query. Leave a note for Deanna only if Owner tools are needed." },
  ];

  const DEANNA_OWNER_GUIDE = [
    { step: 1, title: "Owner unlock", body: "Only you can open Owner mode (PIN). Stephanie never sees a Deanna switch." },
    { step: 2, title: "Budgets", body: "You set/reset counters. Stephanie hard-stops at 95% without surveillance language — meters read as team affordability." },
    { step: 3, title: "API keys", body: "Owner-only. Stephanie queries only if a key already exists on device." },
    { step: 4, title: "Integrity + migration", body: "Run Drive ↔ Firestore integrity checks; export reports; never alter source-of-truth files from the PWA." },
    { step: 5, title: "NotebookLM bridge", body: "Export packets to Drive → add to NotebookLM notebook → optional paste insights back as notes (not as source truth)." },
    { step: 6, title: "OCR Exhibit E", body: "Use staged OCR + manual_describe for hard pages; mark status in caseText; keep original file untouched." },
    { step: 7, title: "Final draft gate", body: "Three-point test + preservation (no F83 issue) before anything is treated as filing language." },
  ];

  const ALL_RECOMMENDATIONS = [
    { n: 1, title: "Install the PWA on your phone", purpose: "Hallway access + offline shell.", intent: "Reliability under stress; work without hunting tabs." },
    { n: 2, title: "Export to designated Google Drive folder", purpose: "Kept queries, notes, Issue I packet → Drive; optional NotebookLM second-stage review of exported text (not a substitute for source-of-truth files).", intent: "Minimize repeat tokens; freeer granularity review on exports only." },
    { n: 3, title: "Sunday export ritual", purpose: "Weekly JSON/text dump of kept work to Drive.", intent: "Survive phone wipe; create NotebookLM-friendly corpus from exports." },
    { n: 4, title: "Legal + vault caching (offline-first)", purpose: "IndexedDB vault cache; prefer free Prep tools; AI last.", intent: "Cut Firestore reads and AI spend." },
    { n: 5, title: "Invert + gate + confirm before send", purpose: "Confirm the question is what you mean; translate framing for check only; never silently change the query.", intent: "Stop rabbit holes; save money and confusion." },
    { n: 6, title: "Breadcrumb budget + three-point test", purpose: "Ten perfect cited sentences; law pin + fact pin + no invention.", intent: "Forensic accuracy; never synthesize/hallucinate." },
    { n: 7, title: "Brief is the meal; oral is gravy", purpose: "C.A.R. 28 structure with simple natural-language help.", intent: "Useful guidance, not a reference dump." },
    { n: 8, title: "Wall off CBA/OARC presentation; share case facts", purpose: "Separate presentation tracks; never let fee/OARC rewrite appeal issues.", intent: "Protect Opening Brief oxygen; still share underlying case truth." },
    { n: 9, title: "NEVER touch source-of-truth files", purpose: "No delete/edit/move/modify of Drive originals, images, or vault source.", intent: "Integrity of the case record." },
    { n: 10, title: "When flooded: short reset + one suggested next step", purpose: "Suggest export, one oral drill, or one breadcrumb — never edicts; shorter than a long break if focus drops.", intent: "Stay in the fight without freezing." },
    { n: 11, title: "Stephanie block at 95% (warn 85%)", purpose: "Hard stop before burn; free tools remain.", intent: "Phase spikes cannot empty the war chest." },
    { n: 12, title: "Preservation firewall (no unraised F83 issue)", purpose: "Final draft review rejects Finding 83 as appeal issue — not raised in case/Rule 59.", intent: "Avoid waiver/nonpreservation landmines." },
    { n: 13, title: "One-tap Issue I packet export", purpose: "Issue + standard + 5 breadcrumbs + relief + do-not list.", intent: "Finish-line speed without AI." },
    { n: 14, title: "Baffle mode (3 bullets)", purpose: "Strip opposing jargon to swipe / lever / panel ask.", intent: "Clarity under intimidation." },
    { n: 15, title: "Trust/retainer financial hygiene (CBA/OARC)", purpose: "Track scope, notice, and fund handling issues separately from appeal issues; never invent balances.", intent: "Forensic money claims only with documents." },
    { n: 16, title: "Training ladder before AI polish", purpose: "Foundation→Legendary offline.", intent: "Skill up; spend down." },
    { n: 17, title: "One question per send + smaller Stephanie context", purpose: "Short prompts; fewer docs.", intent: "Token efficiency." },
    { n: 18, title: "Keep only gold; discard exploration", purpose: "Device + cognitive budget.", intent: "Max value per stored result." },
    { n: 19, title: "No API keys on Stephanie account", purpose: "Owner holds keys.", intent: "Security + spend control." },
    { n: 20, title: "NotebookLM (or similar) on exports only", purpose: "Second-stage clarity review of exported packets — never as license to alter Drive source-of-truth.", intent: "Cheap granularity without burning primary vault." },
  ];


  global.EvichGuide = {
    TONE,
    AUTHORITIES,
    RANK_CRITERIA,
    PREMORTEM,
    INVERSIONS,
    CAR28_SECTIONS,
    CASE_MILESTONES,
    ORAL_ARGUMENT,
    TRAINING_LEVELS,
    SPAR_PROMPTS,
    ORAL_LEVELS,
    loadTrainingState,
    saveTrainingState,
    scoreAgainstTarget,
    recordTrainingAttempt,
    trainingSummary,
    getSparPromptsForLevel,
    getOralForLevel,
    invertPromptsForLevel,
    levelMeta,
    ACCOUNTS,
    getActiveAccount,
    getActiveAccountId,
    setActiveAccountId,
    budgetSnapshot,
    estimateQueryCost,
    gateQuery,
    commitQueryUsage,
    commitDriveOpen,
    commitKeepBytes,
    resetBudget,
    loadBudgetStore,
    STEPHANIE_GUIDE,
    ALL_RECOMMENDATIONS,
    threePointAccuracyTest,
    finalDraftReview,
    baffleMode,
    buildIssueIPacket,
    confirmQueryIntent,
    F52_WALKTHROUGH,
    DEANNA_OWNER_GUIDE,
    OWNER_GITHUB_DEFAULT,
    loadOwnerGithub,
    loadNotebookLmLink,
    saveNotebookLmLink,
    loadDriveFolders,
    saveDriveFolders,
    EMAIL_TRACK_DEFAULTS,
    GMAIL_APPS_SCRIPT_PLAYBOOK,
    PREMORTEM_FIX_PLAN,
    DRIVE_SOT,
    FILE_ACCESS_POLICY,
    applyVaultFilePolicy,
    applyVaultFilePolicyToList,
    mergePolicySeedsIntoDocs,
    exhibitEPolicySeeds,
    isBlockedExhibitEFile,
    saveOwnerGithub,
    ROLLOUT_CHECKLIST,
    NOTEBOOKLM_AS_QUERY,
    PUNCHLIST_STATUS,
    FREE_TOOLBOX,
    HARM_LEXICON,
    analyzeVaultForDec4,
    DEC4_ANALYSIS_SEED,
    ERROR_CATALOG,
    classifyError,
    describeError,
    NOTEBOOKLM_GUIDE,
    integrityReportFromVault,
    HASH_LEVELS,
    sha256Hex,
    fingerprintVaultDoc,
    sealExportText,
    buildIntegrityNLReport,
    integrityCorrectiveActions,
    META_PREMORTEM,
    sha256CodeSnippet,
    normalizeTextForHash,
    OCR_EXHIBIT_E_PLAYBOOK,
    ARCHITECTURE_REC,
    openDb,
    idbPut,
    idbGet,
    idbGetAll,
    idbDelete,
    byteSize,
    formatBytes,
    deviceStorageReport,
    verifyAuthorities,
    rankArgument,
    riskReward,
    invertArgument,
    exploreDeadlines,
    validateBreadcrumb,
    helpBuddyAdvise,
    buildAppellateSystemPrompt,
    buildVaultIndex,
    searchVault,
    citationBreadcrumbTemplate,
    extractCitationCandidates,
    recommendations,
    formatDateNice,
    daysUntil,
    APPEAL_ISSUE_BANK,
    rankIssuesForBrief,
    wordByWordDrill,
    cascadeMap,
  };
})(typeof window !== "undefined" ? window : globalThis);
