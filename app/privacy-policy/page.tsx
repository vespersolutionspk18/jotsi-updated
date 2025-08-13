import React from 'react'
import Header from '@/components/Header'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white p-4 md:p-7">
        <Header />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-normal tracking-tighter mb-8">
          Privacy Policy
        </h1>
        
        <div className="text-stone-600 space-y-6 leading-relaxed">
          <section>
            <p className="text-sm text-stone-500 mb-6">Effective Date: January 1, 2024</p>
            
            <p>
              At Jotsi, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-normal text-black mb-2 mt-4">Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Register for our services</li>
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Apply for employment opportunities</li>
            </ul>
            
            <p className="mt-3">This information may include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name and job title</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Billing address</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Access times and dates</li>
              <li>Pages viewed</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information and updates</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send marketing and promotional communications (with your consent)</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Protect against fraudulent or illegal activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information in 
              the following situations:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="mt-3">
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was 
              collected, including to satisfy legal, accounting, or reporting requirements. The retention period varies 
              depending on the type of information and the purpose for which it was collected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Your Privacy Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
              do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
              content of these third-party sites. We encourage you to review the privacy policies of any third-party sites 
              you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children under 18. If you become aware that a child has provided us with personal information, 
              please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on servers located outside of your state, province, 
              country, or other governmental jurisdiction. We take appropriate measures to ensure that personal information 
              is processed in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top. You are advised to review this 
              Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Jotsi</strong></p>
              <p>Email: privacy@jotsi.com</p>
              <p>Phone: 1-800-JOTSI-00</p>
              <p>Address: 123 Business Ave, Suite 100, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage