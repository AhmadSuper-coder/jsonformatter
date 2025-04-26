import Layout from "@/components/Layout";

// This component will be used for AdSense placements
const AdPlaceholder = ({ position }: { position: 'top' | 'bottom' }) => {
  return (
    <div className={`ad-placeholder ad-${position} border border-dashed border-muted-foreground/30 rounded-md bg-background/50 p-3 flex items-center justify-center h-full min-h-[90px] text-center text-muted-foreground text-sm`}>
      <p>Ad Space - {position}</p>
    </div>
  );
};

export default function Disclaimer() {
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <Layout>
      <div className="bg-primary/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Disclaimer
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-muted-foreground">
              Important information about using our service
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
              
              <h2>General Disclaimer</h2>
              <p>
                The information provided by JSONFormatters.online ("we," "us," or "our") on https://jsonformatters.online (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
              </p>
              <p>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
              
              <h2>External Links Disclaimer</h2>
              <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
              </p>
              <p>
                We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
              </p>
              
              <h2>Professional Disclaimer</h2>
              <p>
                The Site cannot and does not contain legal, financial, or technical advice. The legal, financial, and technical information is provided for general informational and educational purposes only and is not a substitute for professional advice.
              </p>
              <p>
                Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal, financial, or technical advice. The use or reliance of any information contained on the Site is solely at your own risk.
              </p>
              
              <h2>Affiliates Disclaimer</h2>
              <p>
                The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links.
              </p>
              <p>
                We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn advertising fees by linking to Amazon.com and affiliated websites.
              </p>
              
              <h2>Testimonials Disclaimer</h2>
              <p>
                The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.
              </p>
              
              <h2>Data Processing Disclaimer</h2>
              <p>
                All JSON processing happens entirely in your browser. We do not collect, store, or have access to any JSON data you input into our tools. Your data never leaves your computer when using our formatting and transformation features.
              </p>
              <p>
                However, we cannot guarantee that our tools will process your data correctly in all circumstances. You should always verify the output of our tools before using it in any critical application.
              </p>
              
              <h2>Errors and Omissions Disclaimer</h2>
              <p>
                While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, JSONFormatters.online is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is," with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.
              </p>
              
              <h2>Fair Use Disclaimer</h2>
              <p>
                This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of legal, technological, and internet-related issues, etc. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law.
              </p>
              <p>
                If you wish to use copyrighted material from this site for purposes of your own that go beyond "fair use", you must obtain permission from the copyright owner.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
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