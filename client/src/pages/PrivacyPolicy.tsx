import Layout from "@/components/Layout";

// This component will be used for AdSense placements
const AdPlaceholder = ({ position }: { position: 'top' | 'bottom' }) => {
  return (
    <div className={`ad-placeholder ad-${position} border border-dashed border-muted-foreground/30 rounded-md bg-background/50 p-3 flex items-center justify-center h-full min-h-[90px] text-center text-muted-foreground text-sm`}>
      <p>Ad Space - {position}</p>
    </div>
  );
};

export default function PrivacyPolicy() {
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <Layout>
      <div className="bg-primary/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-muted-foreground">
              How we collect, use, and protect your information
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
              
              <h2>1. Introduction</h2>
              <p>
                Welcome to JSONFormatters.online. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2>2. What Data We Collect</h2>
              <p>
                We collect minimal personal data to provide and improve our services. The types of data we may collect include:
              </p>
              <ul>
                <li><strong>Usage Data:</strong> Information on how you use our website, including your browser type, operating system, time spent on pages, and other diagnostic data.</li>
                <li><strong>Cookies Data:</strong> Small files stored on your device that help us provide features and understand how you use our site.</li>
                <li><strong>Contact Information:</strong> If you contact us via our contact form, we collect your name, email address, and any message content you provide.</li>
              </ul>
              <p>
                <strong>Important Note About Your JSON Data:</strong> All JSON processing happens entirely in your browser. We do not collect, store, or have access to any JSON data you input into our tools. Your data never leaves your computer when using our formatting and transformation features.
              </p>
              
              <h2>3. How We Use Your Data</h2>
              <p>We use the collected data for various purposes:</p>
              <ul>
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
              
              <h2>4. Google AdSense & Analytics</h2>
              <p>
                We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website or other websites.
              </p>
              <p>
                Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" className="text-primary hover:underline">Google Ads Settings</a>.
              </p>
              <p>
                We also use Google Analytics to help us understand how our users use the Site. Google Analytics uses cookies to collect usage information for our site. You can opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>
              
              <h2>5. Data Security</h2>
              <p>
                We take the security of your data seriously. We implement appropriate technical and organizational measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.
              </p>
              <p>
                However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
              
              <h2>6. Third-Party Services</h2>
              <p>
                Our website contains links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
              
              <h2>7. Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
              
              <h2>8. Cookies Policy</h2>
              <p>
                Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
              </p>
              <p>
                This Service does not use these "cookies" explicitly. However, the app may use third-party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
              </p>
              
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to <a href="/contact" className="text-primary hover:underline">contact us</a>.
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