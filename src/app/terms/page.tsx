import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export const metadata = { title: "Terms of Service — Yanegi" };

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#0d1224", minHeight: "100vh", paddingTop: 62 }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "60px 28px 100px" }}>

          <Link href="/" style={{ color: "#8ab0ff", fontSize: 14, textDecoration: "none", display: "inline-block", marginBottom: 36 }}>
            ← Back to Yanegi
          </Link>

          {/* TOC */}
          <div style={{ background: "#121933", border: "1px solid #29345f", borderRadius: 12, padding: "20px 24px", marginBottom: 52 }}>
            <p style={{ color: "#8ab0ff", fontSize: 13, fontFamily: "'DM Sans', sans-serif", margin: "0 0 10px", fontWeight: 600 }}>DOCUMENTS ON THIS PAGE</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
              {[
                ["Terms of Service", "#tos"],
                ["Community Guidelines", "#community"],
                ["Safety & Reporting", "#safety"],
                ["Account & Data Deletion", "#deletion"],
                ["Disclaimer", "#disclaimer"],
                ["Refund Policy", "#refund"],
              ].map(([label, href]) => (
                <a key={href} href={href} style={{ color: "#8ab0ff", fontSize: 14, fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── TERMS OF SERVICE ── */}
          <Section id="tos" title="Terms of Service" date="April 5, 2026">
            <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and Yanegi ("Platform," "we," "us," or "our") governing your access to and use of the Yanegi mobile application, launched in April 2026. By creating an account or using any part of the Platform, you confirm that you have read, understood, and agree to be bound by these Terms.</p>
            <H2>Acceptance of Terms</H2>
            <p>By downloading, installing, registering, or using the Yanegi application, you agree to these Terms in full. If you disagree with any part of these Terms, you must immediately stop using the Platform and delete your account. We reserve the right to modify these Terms at any time. We will provide notice of material changes at least 15 days before they take effect. Your continued use of the Platform after that date constitutes acceptance.</p>
            <H2>Eligibility</H2>
            <Ul items={[
              "You must be of legal age to enter into a binding contract under the laws of India (Indian Contract Act, 1872).",
              "By registering, you confirm that you meet all eligibility requirements applicable in your jurisdiction.",
              "You must have the authority and legal capacity to agree to these Terms.",
              "If we discover that a user does not meet eligibility requirements, we reserve the right to terminate the account.",
            ]} />
            <H2>Nature of the Platform — Intermediary Status</H2>
            <p>Yanegi is a technology platform and intermediary as defined under the Information Technology Act, 2000 and the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. Yanegi facilitates event discovery, event hosting by any user, and communication between users.</p>
            <Ul items={[
              "Yanegi does not organize, plan, manage, or supervise any events listed on the Platform.",
              "Yanegi does not verify, endorse, or guarantee the accuracy, legality, safety, or authenticity of any event, user, or content.",
              "All events are entirely created, managed, and conducted by users acting independently.",
              "Any registered user may create and host events on the Platform.",
            ]} />
            <p>Yanegi is not responsible for any incident, injury, loss, damage, dispute, or legal violation arising from real-world events organized through the Platform. Users participate in events entirely at their own risk.</p>
            <H2>User Accounts</H2>
            <Ul items={[
              "You are responsible for maintaining the confidentiality of your account credentials.",
              "You are solely responsible for all activity that occurs under your account.",
              "You must provide accurate, current, and complete information during registration.",
              "You may not share, transfer, or sell your account to any other person.",
              "One user may hold only one active account.",
            ]} />
            <p>Notify us immediately at <a href="mailto:supportyanegi@gmail.com" style={{ color: "#8ab0ff" }}>supportyanegi@gmail.com</a> if you suspect unauthorized access to your account.</p>
            <H2>Event Hosting — Rights and Responsibilities</H2>
            <H3>Any User Can Host</H3>
            <p>Any registered user on Yanegi may create and host events. As a host, you are solely responsible for the planning, organization, safety, and conduct of your event; ensuring your event complies with all applicable laws; providing accurate event information; and taking reasonable steps to ensure the safety of attendees.</p>
            <H3>Prohibited Events</H3>
            <Ul items={[
              "Events involving or promoting illegal drugs or controlled substances",
              "Events involving prostitution, sexual solicitation, or any form of trafficking",
              "Events promoting violence, terrorism, or extremist ideology",
              "Events designed to facilitate fraud, scams, or financial exploitation",
              "Events targeting or intended to harm specific individuals or groups",
              "Events with false, misleading, or deceptive descriptions",
              "Events that violate any applicable law",
            ]} />
            <H2>User Conduct</H2>
            <Ul items={[
              "You will not use the Platform for any unlawful purpose.",
              "You will not harass, threaten, intimidate, stalk, or abuse any other user.",
              "You will not impersonate any person or entity.",
              "You will not post content that is defamatory, obscene, hateful, or otherwise objectionable.",
              "You will not upload or distribute malware or harmful code.",
              "You will not attempt unauthorized access to any part of the Platform.",
              "You will not engage in spamming, commercial solicitation, or unsolicited promotions.",
            ]} />
            <H2>User-Generated Content</H2>
            <p>You retain ownership of all content you post on the Platform ("User Content"). By posting User Content, you grant Yanegi a non-exclusive, royalty-free, worldwide, sublicensable license to use, display, reproduce, and distribute such content solely for the purpose of operating and improving the Platform.</p>
            <p>Yanegi is not responsible for User Content posted by users. The posting user bears full legal responsibility for their content.</p>
            <H2>Limitation of Liability</H2>
            <p>To the maximum extent permitted by applicable Indian law: Yanegi shall not be liable for any injury, death, property damage, financial loss, or any other harm arising from real-world events organized through the Platform. Yanegi's total aggregate liability for any claim shall not exceed INR 1,000 or the amount you paid to Yanegi in the 3 months preceding the claim, whichever is higher.</p>
            <H2>Indemnification</H2>
            <p>You agree to indemnify and hold harmless Yanegi, its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or related to: your use of the Platform, events you host or attend, content you post, or your violation of these Terms.</p>
            <H2>Governing Law and Dispute Resolution</H2>
            <p>These Terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in India. Before initiating legal proceedings, contact us at <a href="mailto:supportyanegi@gmail.com" style={{ color: "#8ab0ff" }}>supportyanegi@gmail.com</a> to attempt informal resolution within 30 days.</p>
          </Section>

          {/* ── COMMUNITY GUIDELINES ── */}
          <Section id="community" title="Community Guidelines" date="April 5, 2026">
            <p>These Community Guidelines ensure that Yanegi remains a safe, inclusive, and authentic platform for everyone. Violations may result in content removal, account suspension, or permanent banning.</p>
            <H2>Event Creation Rules</H2>
            <H3>What Makes a Good Event</H3>
            <Ul items={["Clear, accurate title and description","Real, accessible event location truthfully stated","Accurate dates, times, and capacity limits","Upfront disclosure of any entry fee or participation cost","Clear communication of the intended audience and nature of the event"]} />
            <H3>Prohibited Events</H3>
            <Ul items={["Events involving or encouraging illegal drugs or controlled substances","Events promoting sexual solicitation, prostitution, or human trafficking","Events glorifying or facilitating violence, terrorism, or extremist ideologies","Events designed to scam, defraud, or exploit attendees","Events intentionally fake, misleading, or designed to lure people under false pretenses","Events violating local laws regarding public gatherings, fire safety, or venue licensing"]} />
            <H2>Chat and Messaging Rules</H2>
            <Ul items={["No harassment, threats, bullying, or intimidation","No hate speech, slurs, or discriminatory language","No sexual solicitation or unsolicited explicit content","No spam, repetitive messages, or commercial solicitation","No sharing of another user's personal information without their consent (doxxing)","No links to malware, phishing sites, or illegal content","No coordination or planning of illegal activity","No impersonation of other users or official figures"]} />
            <H2>Authenticity and Honesty</H2>
            <Ul items={["Use a consistent identity. Impersonation of others is strictly prohibited.","Profile photos must be genuine and not use images of others without consent.","Do not create fake events or misleading attendee information.","Do not engage in coordinated inauthentic behavior."]} />
            <H2>Consequences for Violations</H2>
            <Ul items={["Minor Violations: Warning issued, content removed or edited.","Moderate Violations (e.g., repeated offences, harassment): Temporary suspension (3–30 days), event removal, restrictions on hosting privileges.","Severe Violations (e.g., illegal events, serious harassment, fraud): Immediate permanent ban, reporting to law enforcement."]} />
            <p>Appeals: contact <a href="mailto:supportyanegi@gmail.com" style={{ color: "#8ab0ff" }}>supportyanegi@gmail.com</a> within 14 days. Reviewed within 14 business days.</p>
          </Section>

          {/* ── SAFETY & REPORTING ── */}
          <Section id="safety" title="Safety & Reporting Policy" date="April 5, 2026">
            <H2>How to Report</H2>
            <Ul items={["Navigate to the event listing or user profile you wish to report.","Tap the three-dot menu or flag icon.","Select \"Report\" and choose a reason from the list.","Add additional details or evidence (screenshots, description).","Submit your report."]} />
            <p>You may also report by email at <a href="mailto:supportyanegi@gmail.com" style={{ color: "#8ab0ff" }}>supportyanegi@gmail.com</a>.</p>
            <H2>What You Can Report</H2>
            <Ul items={["Fake, misleading, or dangerous events","Events promoting illegal activities","Harassment, threats, or abusive messages","Users who do not meet eligibility requirements","Impersonation or identity fraud","Non-consensual sharing of images or personal data","Scams or financial fraud"]} />
            <H2>Response Timelines</H2>
            <Ul items={["Urgent threats (physical danger, violence): Within 1 hour (24/7)","Serious violations (illegal events, severe harassment): Within 24 hours","Standard violations (spam, misleading events): Within 72 hours","Low-severity concerns: Within 7 days"]} />
            <H2>Emergency Situations</H2>
            <p>If you or someone else is in immediate physical danger, call emergency services FIRST. Police: 100 | Ambulance: 108. Do not wait for a response from Yanegi.</p>
            <H2>Personal Safety Tips</H2>
            <H3>Before the Event</H3>
            <Ul items={["Research the event — review the host's profile, number of attendees, and description.","Check if the event location is a known public space.","Tell a trusted friend or family member where you are going.","Share your location with a trusted contact using your phone's location-sharing feature."]} />
            <H3>During the Event</H3>
            <Ul items={["Meet in public places, especially for your first time at a new event.","Keep your phone charged and accessible.","Trust your instincts — if something feels wrong, leave immediately."]} />
            <H3>After the Event</H3>
            <Ul items={["Report any concerning behavior using the in-app report function.","If you experienced or witnessed a crime, file an FIR with your local police station."]} />
          </Section>

          {/* ── ACCOUNT & DATA DELETION ── */}
          <Section id="deletion" title="Account & Data Deletion Policy" date="April 5, 2026">
            <H2>How to Delete Your Account</H2>
            <Ul items={["Open the Yanegi app and go to your Profile.","Tap \"Settings\" (gear icon).","Select \"Account\" and then \"Delete Account.\"","Read the information about what will be deleted.","Confirm your decision by entering your password and tapping \"Permanently Delete.\""]} />
            <p>Alternatively, email <a href="mailto:supportyanegi@gmail.com" style={{ color: "#8ab0ff" }}>supportyanegi@gmail.com</a> from your registered email address. We will process your request within 30 days. Account deletion is permanent and irreversible.</p>
            <H2>What Gets Deleted</H2>
            <Ul items={["Your profile information (name, bio, photo, email, phone number)","Events you created (listings removed from the Platform)","Your attendance and participation records","Your chat messages","Your saved locations and location history","Your app preferences and settings"]} />
            <H2>What May Be Retained</H2>
            <Ul items={["Records of events where a legal complaint or law enforcement request is pending (up to 5 years)","Moderation records: Reports and enforcement actions (up to 5 years)","Transaction records: Retained up to 7 years for tax and financial compliance","Law enforcement hold: Retained until the legal obligation is resolved","Anonymised or aggregated data that cannot be linked back to you"]} />
          </Section>

          {/* ── DISCLAIMER ── */}
          <Section id="disclaimer" title="Disclaimer" date="April 5, 2026">
            <H2>Platform as Intermediary</H2>
            <p>Yanegi is an online technology platform that enables users to create, discover, and join events. Yanegi acts solely as an intermediary between event hosts and event attendees. Yanegi does not organize, operate, manage, oversee, or participate in any event listed on the Platform.</p>
            <H2>No Guarantee of Safety</H2>
            <p>Yanegi makes no representation, warranty, or guarantee of any kind regarding the safety of events listed on the Platform. Real-world events involve inherent and unpredictable risks including:</p>
            <Ul items={["Physical injury or death","Sexual assault or harassment","Robbery, theft, or other crimes","Property damage","Health and medical emergencies","Psychological harm"]} />
            <p>Users who attend events do so entirely at their own risk.</p>
            <H2>No Guarantee of Accuracy or Authenticity</H2>
            <p>Yanegi does not verify or validate the accuracy, completeness, or authenticity of event descriptions, user profiles, identities, photos, or any claims made by users. Users are responsible for independently verifying the legitimacy and suitability of any event they choose to attend.</p>
            <H2>Limitation of Liability</H2>
            <p>To the fullest extent permitted by applicable Indian law, Yanegi, its founders, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in connection with your use of the Platform, attendance at events, or interactions with other users.</p>
          </Section>

          {/* ── REFUND POLICY ── */}
          <Section id="refund" title="Refund Policy" date="April 5, 2026">
            <p>This Refund Policy will apply only when Yanegi introduces paid event features or in-app purchases. Until payment functionality is launched, this policy is published for transparency and advance notice.</p>
            <H2>Event Ticket Refunds</H2>
            <H3>Cancelled Events</H3>
            <p>If an event host cancels a paid event, all attendees who paid an entry fee will receive a full refund within 7–10 business days, processed to the original payment method.</p>
            <H3>Attendee-Initiated Cancellations</H3>
            <Ul items={["More than 48 hours before event: Full refund minus a platform processing fee of up to 5%","24–48 hours before event: 50% refund","Less than 24 hours before event: No refund, unless the event is cancelled by the host"]} />
            <H3>Events Removed by Yanegi</H3>
            <p>If Yanegi removes an event for violating our Terms or Community Guidelines, all attendees who paid an entry fee are entitled to a full refund.</p>
            <H2>Subscription Refunds</H2>
            <Ul items={["Monthly subscriptions: Refunds will not be issued for partially used subscription periods, except in cases of technical error or duplicate charge.","Annual subscriptions: A pro-rated refund may be issued for unused months if you cancel within 14 days of purchase."]} />
            <H2>Non-Refundable Items</H2>
            <Ul items={["Platform processing fees on completed transactions","Subscriptions cancelled after the refund window","Virtual items or boosts already applied or consumed","Transactions where fraud or policy violation is reasonably suspected"]} />
          </Section>

          <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid #1e2d52", color: "#4a5a80", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
            App launched: April 2026 · <a href="mailto:supportyanegi@gmail.com" style={{ color: "#4a5a80" }}>supportyanegi@gmail.com</a>
          </div>
        </div>
      </main>
    </>
  );
}

function Section({ id, title, date, children }: { id: string; title: string; date: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 72 }}>
      <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#eaf0ff", letterSpacing: "-1px", marginBottom: 6 }}>
        {title}
      </h1>
      <p style={{ color: "#8ab0ff", fontSize: 13, marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
        Effective Date: {date} · Last Updated: {date}
      </p>
      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#c8d8f0", lineHeight: 1.8, fontSize: 15 }}>
        {children}
      </div>
    </section>
  );
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: "#eaf0ff", marginTop: 36, marginBottom: 10, paddingTop: 18, borderTop: "1px solid #1e2d52" }}>{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: "#c8d8f0", marginTop: 20, marginBottom: 8 }}>{children}</h3>;
}
function Ul({ items }: { items: string[] }) {
  return <ul style={{ margin: "8px 0 16px 22px", padding: 0 }}>{items.map((t, i) => <li key={i} style={{ marginBottom: 6 }}>{t}</li>)}</ul>;
}
