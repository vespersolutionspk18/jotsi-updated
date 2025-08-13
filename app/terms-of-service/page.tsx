import React from 'react'
import Header from '@/components/Header'

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white p-4 md:p-7">
        <Header />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-normal tracking-tighter mb-8">
          Terms of Service
        </h1>
        
        <div className="text-stone-600 space-y-6 leading-relaxed">
          <section>
            <p className="text-sm text-stone-500 mb-6">Effective Date: January 1, 2024</p>
            
            <p>
              Welcome to Jotsi. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. 
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to 
              these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Jotsi&apos;s services, you acknowledge that you have read, understood, and agree 
              to be bound by these Terms and all applicable laws and regulations. If you are using our services 
              on behalf of an organization, you represent and warrant that you have the authority to bind that 
              organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">2. Description of Services</h2>
            <p>
              Jotsi provides professional staffing and business support services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Virtual assistant services</li>
              <li>Accounting and bookkeeping support</li>
              <li>Technology staffing</li>
              <li>Digital marketing services</li>
              <li>Customer service support</li>
              <li>Administrative assistance</li>
              <li>Industry-specific staffing solutions</li>
            </ul>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time 
              without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-normal text-black mb-2">3.1 Account Creation</h3>
            <p>
              To access certain features of our services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">3.2 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account at any time for any reason, including 
              but not limited to violation of these Terms, fraudulent activity, or non-payment of fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">4. Service Agreements</h2>
            <h3 className="text-xl font-normal text-black mb-2">4.1 Engagement Terms</h3>
            <p>
              Specific services will be governed by separate engagement agreements or statements of work that 
              outline the scope, deliverables, timelines, and fees for each project.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">4.2 Service Quality</h3>
            <p>
              While we strive to provide high-quality services, we do not guarantee that our services will meet 
              all your requirements or be uninterrupted, timely, secure, or error-free. Services are provided 
              on an &quot;as is&quot; and &quot;as available&quot; basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">5. Payment Terms</h2>
            <h3 className="text-xl font-normal text-black mb-2">5.1 Fees</h3>
            <p>
              You agree to pay all fees associated with the services you purchase or use. Fees are non-refundable 
              unless otherwise stated in writing.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">5.2 Payment Methods</h3>
            <p>
              We accept various payment methods as specified on our website. You authorize us to charge your 
              selected payment method for all fees due.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">5.3 Late Payments</h3>
            <p>
              Late payments may incur interest at the rate of 1.5% per month or the maximum rate permitted by 
              law, whichever is lower. We reserve the right to suspend services for overdue accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">6. Intellectual Property</h2>
            <h3 className="text-xl font-normal text-black mb-2">6.1 Our Property</h3>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property 
              of Jotsi or its licensors and is protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">6.2 License to Use</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our website and 
              services for their intended purpose.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">6.3 Client Materials</h3>
            <p>
              You retain ownership of materials you provide to us. By providing materials, you grant us a license 
              to use them as necessary to perform our services.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">6.4 Work Product</h3>
            <p>
              Unless otherwise agreed in writing, work product created by our team for you becomes your property 
              upon full payment of all fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">7. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or confidential information 
              disclosed during the course of the service relationship. This obligation survives the termination 
              of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">8. Acceptable Use</h2>
            <p>You agree not to use our services to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious code</li>
              <li>Harass, abuse, or harm others</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">9. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-xl font-normal text-black mb-2">9.1 Disclaimer of Warranties</h3>
            <p>
              OUR SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
              NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">9.2 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, JOTSI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">9.3 Maximum Liability</h3>
            <p>
              Our total liability for any claim arising out of or relating to these Terms or our services shall 
              not exceed the amount paid by you to us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Jotsi, its officers, directors, employees, and 
              agents from any claims, damages, losses, liabilities, and expenses (including attorney&apos;s fees) 
              arising out of or related to your use of our services, violation of these Terms, or violation of 
              any rights of another.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">11. Governing Law and Dispute Resolution</h2>
            <h3 className="text-xl font-normal text-black mb-2">11.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
              without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">11.2 Arbitration</h3>
            <p>
              Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration 
              in accordance with the Commercial Arbitration Rules of the American Arbitration Association.
            </p>

            <h3 className="text-xl font-normal text-black mb-2 mt-4">11.3 Class Action Waiver</h3>
            <p>
              You agree that any disputes will be resolved on an individual basis and waive your right to 
              participate in any class action or representative proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">12. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by 
              posting the updated Terms on our website and updating the &quot;Effective Date.&quot; Your continued use of 
              our services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be 
              limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain 
              in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">14. Entire Agreement</h2>
            <p>
              These Terms, together with any engagement agreements and our Privacy Policy, constitute the entire 
              agreement between you and Jotsi regarding our services and supersede all prior agreements and 
              understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal tracking-tight text-black mb-4">15. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Jotsi</strong></p>
              <p>Email: legal@jotsi.com</p>
              <p>Phone: 1-800-JOTSI-00</p>
              <p>Address: 123 Business Ave, Suite 100, New York, NY 10001</p>
            </div>
          </section>

          <section className="mt-12 p-6 bg-stone-50 rounded-lg">
            <p className="text-sm text-stone-500">
              By using Jotsi&apos;s services, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfServicePage