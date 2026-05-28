import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export const metadata = { title: "Privacy Policy — Yanegi" };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#0d1224", minHeight: "100vh", paddingTop: 62 }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "60px 28px 100px" }}>

          {/* Back link */}
          <Link href="/" style={{ color: "#8ab0ff", fontSize: 14, textDecoration: "none", display: "inline-block", marginBottom: 36 }}>
            ← Back to Yanegi
          </Link>

          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: "#eaf0ff", letterSpacing: "-1px", marginBottom: 6 }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#8ab0ff", fontSize: 14, marginBottom: 48 }}>
            Effective Date: April 5, 2026 &nbsp;·&nbsp; Last Updated: April 5, 2026
          </p>

          <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#c8d8f0", lineHeight: 1.8, fontSize: 15 }}>

            <p>This Privacy Policy explains how Yanegi ("we," "our," or "us") collects, uses, stores, shares, and protects your personal data when you use the Yanegi mobile application (launched April 2026) and related services (collectively, the "Platform"). This Policy complies with the Digital Personal Data Protection Act, 2023 ("DPDP Act") of India and reflects global best practices including GDPR-aligned standards.</p>
            <p>By accessing or using Yanegi, you consent to the collection and use of your information as described in this Policy. If you do not agree, please do not use the Platform.</p>

            <H2>Information We Collect</H2>

            <H3>1. Personal Information</H3>
            <p>When you register and use Yanegi, we collect:</p>
            <Ul items={["Full name and display username","Email address and phone number","Date of birth (to verify you meet our minimum age requirement)","Profile photograph and bio","Gender (optional, self-declared)"]} />

            <H3>2. Location Data</H3>
            <p>Location data is classified as sensitive personal data under the DPDP Act, 2023. We collect it only with your explicit consent and for defined purposes.</p>
            <Ul items={["Precise GPS location (collected in real-time when you use the Discover Nearby Events feature)","Approximate location derived from IP address (used for general region-based event recommendations)","Saved locations (e.g., home city or preferred areas, if you choose to set them)"]} />

            <H3>3. Event Data</H3>
            <Ul items={["Events you create: title, description, date, time, location, photos, and tags","Events you join or express interest in","Your attendance history and event participation records"]} />

            <H3>4. Chat and Communication Data</H3>
            <Ul items={["Messages sent and received in event-specific group chats","Reports submitted against other users or events"]} />

            <H3>5. Device and Technical Data</H3>
            <Ul items={["Device type, operating system, and version","App version and unique device identifiers","IP address, network type, crash logs, and performance data"]} />

            <H3>6. Usage Data</H3>
            <Ul items={["Features you interact with and how you navigate the Platform","Search queries entered within the app","Timestamps of logins, event interactions, and in-app actions"]} />

            <H3>7. Payment Data (Future Feature)</H3>
            <p>If payment features are introduced, processing will be handled by certified third-party payment gateways (e.g., Razorpay, Stripe). Yanegi will not store full card details. We will only retain transaction reference IDs and amounts for our records.</p>

            <H2>Purpose of Data Collection</H2>
            <p>We collect and process your personal data solely for the following purposes:</p>
            <Ul items={[
              "Account Creation and Authentication: To create, manage, and secure your Yanegi account.",
              "Age Verification: To ensure all users meet the minimum age requirement under applicable law.",
              "Event Discovery and Hosting: To show you nearby events, allow any user to create and host events, and manage event participation.",
              "Location-Based Services: To display relevant events near your location. Location data is processed only when you actively use location-dependent features.",
              "In-App Communications: To enable event group chats between users.",
              "Safety and Trust: To investigate reports of abuse, illegal content, or policy violations, and to enforce our Community Guidelines.",
              "Platform Improvement: To analyze usage patterns, fix bugs, and improve app performance.",
              "Legal Compliance: To comply with applicable Indian laws, court orders, and regulatory requirements including the DPDP Act, 2023.",
              "Customer Support: To respond to your queries, complaints, or requests.",
            ]} />
            <p>We do not sell, rent, or trade your personal data to third parties for their marketing or commercial purposes.</p>

            <H2>Legal Basis for Processing (DPDP Act Compliance)</H2>
            <p>Under the Digital Personal Data Protection Act, 2023, we process your personal data on the following grounds:</p>
            <Ul items={[
              "Consent: For collection of location data, optional profile information, and communications.",
              "Contractual Necessity: To provide the services you have signed up for.",
              "Legitimate Interest: For fraud prevention, platform safety, and internal analytics.",
              "Legal Obligation: To comply with requests from law enforcement or government authorities as required by law.",
            ]} />

            <H2>Sharing of Personal Data</H2>
            <H3>1. With Other Users</H3>
            <Ul items={[
              "Your display name and profile photo are visible to other users.",
              "Events you host are publicly visible to all users within the Platform.",
              "Messages sent in event chats are visible to all participants of that event.",
              "Your exact location is never shared with other users. Only the general area of events you host is visible.",
            ]} />
            <H3>2. With Third-Party Service Providers</H3>
            <Ul items={[
              "Mapping Services (e.g., Google Maps API): To display event locations and nearby events.",
              "Analytics Providers (e.g., Firebase Analytics): To understand app usage patterns. Data is anonymised where possible.",
              "Cloud Infrastructure (e.g., AWS, Google Cloud): To host and store app data securely.",
              "Payment Gateway (future): A certified PCI-DSS compliant payment processor.",
              "Customer Support Tools: To manage support tickets.",
            ]} />
            <H3>3. With Law Enforcement and Authorities</H3>
            <p>We may disclose your personal data to government authorities or courts where required by law, including under the DPDP Act, 2023, and the Information Technology Act, 2000.</p>

            <H2>Data Retention</H2>
            <Ul items={[
              "Active Account Data: Retained for as long as your account is active.",
              "Event Data: Retained for 2 years after event conclusion, then deleted or anonymised.",
              "Chat Messages: Retained for 1 year from the date of the message, then permanently deleted.",
              "Location Data: Real-time location is not stored persistently.",
              "Deleted Account Data: Personal data deleted within 30 days of account deletion, except where legally required.",
              "Safety Records: Reports, bans, and moderation decisions may be retained for up to 5 years to prevent policy evasion.",
              "Transaction Records: Retained for up to 7 years for financial and tax compliance.",
            ]} />

            <H2>Your Rights Under the DPDP Act, 2023</H2>
            <p>As a Data Principal, you have the following rights:</p>
            <Ul items={[
              "Right to Access: Request a copy of the personal data we hold about you.",
              "Right to Correction: Request correction of inaccurate or incomplete personal data.",
              "Right to Erasure: Request deletion of your personal data, subject to legal retention obligations.",
              "Right to Grievance Redressal: Raise a complaint regarding the processing of your personal data.",
              "Right to Withdraw Consent: Withdraw previously given consent for data processing at any time.",
              "Right to Nominate: Nominate another individual to exercise your rights on your behalf.",
            ]} />
            <p>To exercise your rights, contact us at: <a href="mailto:supportyanegi@gmail.com" style={{ color: "#8ab0ff" }}>supportyanegi@gmail.com</a>. We will respond within 30 days.</p>

            <H2>Security Practices</H2>
            <Ul items={[
              "All data transmissions are encrypted using TLS (Transport Layer Security) protocols.",
              "Sensitive data is stored in encrypted form using AES-256 or equivalent encryption.",
              "Access to personal data is restricted to authorized personnel on a need-to-know basis.",
              "We conduct periodic security audits and vulnerability assessments.",
              "In the event of a data breach, we will notify affected users and the Data Protection Board of India within prescribed timelines.",
            ]} />

            <H2>Minors' Privacy</H2>
            <p>Yanegi requires all users to meet the minimum age requirement. We do not knowingly collect personal data from individuals who do not meet this requirement. If we become aware that such a user has registered, we will immediately delete that account and associated data. Please report concerns to <a href="mailto:supportyanegi@gmail.com" style={{ color: "#8ab0ff" }}>supportyanegi@gmail.com</a>.</p>

            <H2>Changes to This Policy</H2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes through the app or via email at least 15 days before the changes take effect.</p>

            <H2>Contact and Grievance Officer</H2>
            <p>Email: <a href="mailto:supportyanegi@gmail.com" style={{ color: "#8ab0ff" }}>supportyanegi@gmail.com</a></p>
            <p>Response Time: Within 30 days of receipt.</p>
            <p>If you are not satisfied with our response, you may escalate your complaint to the Data Protection Board of India once operational under the DPDP Act, 2023.</p>

          </div>

          <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid #1e2d52", color: "#4a5a80", fontSize: 13 }}>
            App launched: April 2026 · supportyanegi@gmail.com
          </div>
        </div>
      </main>
    </>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: "#eaf0ff", marginTop: 44, marginBottom: 12, paddingTop: 20, borderTop: "1px solid #1e2d52" }}>{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: "#c8d8f0", marginTop: 24, marginBottom: 8 }}>{children}</h3>;
}
function Ul({ items }: { items: string[] }) {
  return <ul style={{ margin: "8px 0 16px 22px", padding: 0 }}>{items.map((t, i) => <li key={i} style={{ marginBottom: 6 }}>{t}</li>)}</ul>;
}
