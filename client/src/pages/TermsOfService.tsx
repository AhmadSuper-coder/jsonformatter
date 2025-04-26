import Layout from "@/components/Layout";

// This component will be used for AdSense placements
const AdPlaceholder = ({ position }: { position: 'top' | 'bottom' }) => {
  return (
    <div className={`ad-placeholder ad-${position} border border-dashed border-muted-foreground/30 rounded-md bg-background/50 p-3 flex items-center justify-center h-full min-h-[90px] text-center text-muted-foreground text-sm`}>
      <p>Ad Space - {position}</p>
    </div>
  );
};

export default function TermsOfService() {
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <Layout>
      <div className="bg-primary/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Terms of Service
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-muted-foreground">
              Please read these terms carefully before using our service
            </p>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder position="top" />
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using JSONFormatters.online ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <h2>2. Description of Service</h2>
              <p>
                JSONFormatters.online provides web-based tools for formatting, validating, comparing, transforming, and analyzing JSON data. The service is provided "as is" and on an "as available" basis without any representation or warranty, whether express, implied, or statutory.
              </p>
              
              <h2>3. Use of Service</h2>
              <p>You agree to use the Service only for purposes permitted by:</p>
              <ul>
                <li>These Terms of Service</li>
                <li>Any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions</li>
              </ul>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service to transmit any material that contains viruses, trojan horses, worms, or any other malicious or harmful programs</li>
                <li>Attempt to gain unauthorized access to any portion or feature of the Service, or any other systems or networks connected to the Service</li>
                <li>Use any robot, spider, site search/retrieval application, or other automated device, process, or means to access, retrieve, scrape, or index any portion of the Service</li>
                <li>Use the Service in a manner that could disable, overburden, damage, or impair the Service or interfere with any other party's use of the Service</li>
              </ul>
              
              <h2>4. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of JSONFormatters.online and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of JSONFormatters.online.
              </p>
              
              <h2>5. User Data</h2>
              <p>
                All JSON processing happens entirely in your browser. We do not collect, store, or have access to any JSON data you input into our tools. Your data never leaves your computer when using our formatting and transformation features.
              </p>
              <p>
                However, if you choose to contact us through our contact form, the information you provide (such as your name, email address, and message content) will be processed as described in our Privacy Policy.
              </p>
              
              <h2>6. Third-Party Links</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by JSONFormatters.online.
              </p>
              <p>
                JSONFormatters.online has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that JSONFormatters.online shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
              
              <h2>7. Advertisements</h2>
              <p>
                We use Google AdSense to display advertisements on our website. These advertisements are clearly marked and are provided by third parties. We are not responsible for the content of these advertisements or for any products or services offered through them.
              </p>
              <p>
                By using the Service, you agree to view these advertisements as part of the experience. If you use an ad blocker, some functionality of the site may be affected.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall JSONFormatters.online, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
              
              <h2>9. Termination</h2>
              <p>
                We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </p>
              
              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
              
              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="py-4 mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdPlaceholder position="bottom" />
          </div>
        </div>
      </div>
    </Layout>
  );
}