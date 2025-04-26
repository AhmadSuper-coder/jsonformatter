import Layout from "@/components/Layout";

// This component will be used for AdSense placements
const AdPlaceholder = ({ position }: { position: 'top' | 'bottom' }) => {
  return (
    <div className={`ad-placeholder ad-${position} border border-dashed border-muted-foreground/30 rounded-md bg-background/50 p-3 flex items-center justify-center h-full min-h-[90px] text-center text-muted-foreground text-sm`}>
      <p>Ad Space - {position}</p>
    </div>
  );
};

export default function AboutUs() {
  return (
    <Layout>
      <div className="bg-primary/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              About Us
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-muted-foreground">
              Learn more about JSONFormatters.online and our mission
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
              <h2>Our Story</h2>
              <p>
                JSONFormatters.online was founded in 2023 by a team of passionate developers who were tired of struggling with complex, ad-heavy, or limited JSON tools. We understand the daily challenges developers face when working with JSON data, and we wanted to create a solution that is both powerful and user-friendly.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide the best JSON formatting and transformation tools available online, completely free and with a focus on user experience. We believe that developer tools should be:
              </p>
              <ul>
                <li><strong>Simple and intuitive</strong> - No steep learning curve or complicated interfaces</li>
                <li><strong>Fast and reliable</strong> - Process your data quickly without delays or errors</li>
                <li><strong>Privacy-focused</strong> - All processing happens in your browser, so your data never leaves your computer</li>
                <li><strong>Accessible to everyone</strong> - Available on any device with a web browser, with no sign-up required</li>
              </ul>
              
              <h2>Our Tools</h2>
              <p>
                We offer a comprehensive suite of JSON tools designed to make developers' lives easier:
              </p>
              <ul>
                <li><strong>Pretty Print</strong> - Format your JSON with proper indentation and syntax highlighting</li>
                <li><strong>Minify</strong> - Compress JSON by removing whitespace for production use</li>
                <li><strong>Validate</strong> - Check if your JSON is valid with detailed error messages</li>
                <li><strong>Compare</strong> - See the differences between two JSON objects</li>
                <li><strong>JSON to CSV</strong> - Convert JSON arrays to CSV format for spreadsheet applications</li>
              </ul>
              
              <h2>The Team</h2>
              <p>
                Our team consists of experienced web developers, UX designers, and quality assurance specialists who are committed to creating and maintaining the best JSON tools available online. We constantly monitor user feedback and industry trends to ensure that our tools remain at the cutting edge of web development.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                We value your feedback and suggestions! If you have any questions, comments, or ideas for new features, please don't hesitate to <a href="/contact" className="text-primary hover:text-primary/90">contact us</a>. We're always looking for ways to improve our tools and make them more useful for developers around the world.
              </p>
              
              <h2>Support Us</h2>
              <p>
                JSONFormatters.online is a free service, but it still costs money to maintain and improve. If you find our tools useful, you can support us by:
              </p>
              <ul>
                <li>Sharing our site with your colleagues and friends</li>
                <li>Giving us feedback on how we can improve</li>
                <li>Disabling ad blockers on our site (we only use non-intrusive ads)</li>
              </ul>
              
              <p>
                Thank you for choosing JSONFormatters.online for your JSON processing needs. We're committed to providing you with the best possible experience, and we look forward to serving you for years to come.
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