"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  route: string;
}

const servicesData: Record<string, ServiceData> = {
  accounting: {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    subtitle: "Keep your financials precise and compliant.",
    description: "Our expert bookkeeping and accounting professionals bring deep industry knowledge to ensure your financial records are not just accurate, but strategically optimized. From daily transaction recording to complex financial reporting, we handle the full spectrum of accounting needs with meticulous attention to detail. Our team stays current with the latest tax regulations and compliance requirements, ensuring your business remains audit-ready while maximizing available deductions and credits.\n\nWe go beyond basic bookkeeping by providing actionable financial insights that drive better business decisions. Our professionals integrate seamlessly with your existing systems, whether you use QuickBooks, Xero, SAP, or custom ERP solutions. With real-time financial dashboards, monthly reconciliations, and proactive cash flow management, we transform your financial data into a powerful tool for growth and strategic planning.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    route: "/services/accounting-bookkeeping"
  },
  construction: {
    id: "construction",
    title: "Construction Estimating & Project Support",
    subtitle: "Win more profitable bids with detailed estimates.",
    description: "Our construction estimating specialists combine decades of field experience with cutting-edge software to deliver the most accurate takeoffs and estimates in the industry. Within 24-48 hours, you'll receive comprehensive material quantities, labor calculations, and cost projections that account for regional pricing variations, seasonal factors, and current market conditions. Our estimators are proficient in all major platforms including PlanSwift, Bluebeam, and On-Screen Takeoff, ensuring compatibility with your existing workflows.\n\nBeyond initial estimates, we provide ongoing project support throughout the construction lifecycle. This includes change order documentation, value engineering recommendations, and bid comparison analysis that helps you identify the most profitable opportunities. Our team has successfully estimated projects ranging from residential renovations to multi-million dollar commercial developments, giving you the confidence to bid competitively while protecting your margins. With our detailed scope reviews and constructability assessments, you'll catch potential issues before they become costly problems.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
    route: "/services/construction-estimating"
  },
  technology: {
    id: "technology",
    title: "Technology Staffing & IT Support",
    subtitle: "Power your innovation with top-tier tech talent.",
    description: "Access a global network of vetted technology professionals who are experts in the latest frameworks, languages, and methodologies. Our developers, engineers, and IT specialists bring expertise in everything from legacy system maintenance to cutting-edge AI/ML implementations. Whether you need full-stack developers proficient in React and Node.js, DevOps engineers skilled in Kubernetes and AWS, or specialized talent in blockchain, IoT, or cybersecurity, we match you with professionals who hit the ground running. Each candidate undergoes rigorous technical assessments and cultural fit evaluations to ensure seamless integration with your team.\n\nOur IT support services extend beyond staffing to include comprehensive technical assistance, system administration, and infrastructure management. We provide 24/7 monitoring, helpdesk support, and proactive maintenance that keeps your systems running at peak performance. From managing cloud migrations to implementing robust security protocols, our team becomes an extension of your IT department. With flexible engagement models ranging from project-based assignments to dedicated long-term teams, we scale our support to match your evolving technology needs while significantly reducing your operational costs.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    route: "/services/technology-staffing"
  },
  marketing: {
    id: "marketing",
    title: "Digital Marketing & Creative Services",
    subtitle: "Amplify your brand's voice and reach.",
    description: "Transform your digital presence with our comprehensive marketing team that combines creative excellence with data-driven strategies. Our marketers, designers, and content creators work collaboratively to develop campaigns that resonate with your target audience across all digital channels. From SEO-optimized content creation and social media management to PPC campaigns and email marketing automation, we handle every aspect of your digital marketing ecosystem. Our creative team produces compelling visual content, including video production, infographics, and interactive web experiences that capture attention and drive engagement.\n\nWhat sets us apart is our analytical approach to creative marketing. Every campaign is backed by thorough market research, competitor analysis, and continuous A/B testing to optimize performance. We leverage advanced analytics tools to track ROI across all channels, providing transparent reporting that demonstrates the impact of every marketing dollar spent. Our team stays ahead of algorithm changes, platform updates, and emerging trends to ensure your brand maintains a competitive edge. Whether you're launching a new product, entering new markets, or rebuilding your brand identity, we deliver measurable results that accelerate your business growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    route: "/services/digital-marketing"
  },
  administrative: {
    id: "administrative",
    title: "Administrative & Virtual Assistants",
    subtitle: "Streamline operations with reliable virtual support.",
    description: "Our highly trained virtual assistants become invaluable members of your team, handling everything from routine administrative tasks to complex project coordination. Each assistant is carefully matched to your industry and specific needs, bringing relevant experience in calendar management, travel coordination, document preparation, and database management. They're proficient in all major productivity suites including Microsoft Office, Google Workspace, and specialized tools like Slack, Asana, and Monday.com. Our VAs undergo continuous training to stay current with the latest productivity tools and best practices, ensuring they bring efficiency improvements to every task they handle.\n\nBeyond basic administrative support, our virtual assistants excel at research, data entry, customer correspondence, and even light bookkeeping tasks. They can manage your CRM, coordinate with vendors, prepare presentations, and handle confidential information with the utmost discretion. With coverage across multiple time zones, we ensure your administrative needs are met whenever they arise. Our flexible staffing model allows you to scale support up or down based on seasonal demands or project requirements, providing cost-effective solutions that free you to focus on strategic initiatives while maintaining operational excellence.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
    route: "/services/administrative-assistants"
  },
  customerService: {
    id: "customerService",
    title: "Customer Service & Call Center Staffing",
    subtitle: "Build loyalty with exceptional customer care.",
    description: "Elevate your customer experience with our professionally trained support teams who understand that every interaction shapes your brand reputation. Our customer service representatives undergo intensive training in communication skills, conflict resolution, and product knowledge specific to your industry. They handle multi-channel support including phone, email, chat, and social media with consistent professionalism and empathy. With native and near-native English speakers, plus multilingual options available, we ensure clear communication that builds trust and resolves issues efficiently. Our agents are equipped with the latest CRM tools and trained in your specific protocols to provide seamless, personalized service.\n\nWe go beyond traditional call center metrics to focus on customer satisfaction and first-call resolution rates. Our quality assurance program includes regular monitoring, coaching, and feedback loops that continuously improve service delivery. Whether you need overflow support during peak seasons, 24/7 coverage, or a complete outsourced customer service solution, we scale to meet your needs. Our teams are experienced in technical support, order processing, billing inquiries, and retention strategies. With detailed analytics and reporting, you'll have full visibility into customer interactions, satisfaction scores, and opportunities for service enhancement.",
    image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=800",
    route: "/services/customer-service"
  },
  recruitment: {
    id: "recruitment",
    title: "Recruitment & HR Management",
    subtitle: "Build a world-class team, faster.",
    description: "Transform your hiring process with our comprehensive recruitment services that combine advanced sourcing techniques with deep industry expertise. Our recruitment specialists leverage AI-powered tools, extensive professional networks, and targeted headhunting strategies to identify candidates who not only meet your technical requirements but align with your company culture. We handle the entire recruitment lifecycle - from crafting compelling job descriptions and managing job board postings to conducting initial screenings and coordinating interviews. Our rigorous vetting process includes skills assessments, background checks, and reference verifications, ensuring only the most qualified candidates reach your desk.\n\nBeyond recruitment, we provide full-spectrum HR management services that help you build and maintain a thriving workforce. This includes onboarding program development, performance management systems, compensation benchmarking, and employee engagement initiatives. Our HR professionals stay current with employment law changes and compliance requirements, protecting your organization from costly violations. We also offer HR analytics and reporting that provide insights into turnover rates, time-to-hire metrics, and workforce planning opportunities. Whether you're a startup building your first team or an enterprise optimizing your talent acquisition strategy, we deliver scalable solutions that reduce hiring costs while improving quality of hire.",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800",
    route: "/services/recruitment-hr"
  },
  legal: {
    id: "legal",
    title: "Legal & Compliance Support",
    subtitle: "Navigate complexity with expert legal support.",
    description: "Access experienced paralegals and compliance specialists who understand the intricate legal landscape of modern business. Our legal support professionals are trained in contract management, regulatory compliance, intellectual property procedures, and litigation support. They excel at document preparation, legal research, and maintaining organized case files that keep your legal matters moving efficiently. Working under the supervision of your legal counsel, our team handles time-consuming tasks like discovery document review, deposition summaries, and filing preparations, allowing your attorneys to focus on strategy and client advocacy. We're proficient in legal technology platforms including Westlaw, LexisNexis, and various e-discovery tools.\n\nOur compliance specialists help you navigate the complex web of industry regulations, from GDPR and CCPA for data privacy to SOX compliance for financial reporting. We develop and maintain compliance calendars, conduct risk assessments, and create audit-ready documentation systems. Our team stays current with regulatory changes across multiple jurisdictions, providing proactive updates and recommendations to keep your business compliant. Whether you're dealing with employment law, environmental regulations, or industry-specific requirements, we provide the detailed support needed to minimize legal risks while maintaining operational efficiency. Our flexible engagement models allow you to scale legal support based on project demands without the overhead of full-time staff.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    route: "/services/legal-compliance"
  },
  healthcare: {
    id: "healthcare",
    title: "Healthcare & Medical Office Staffing",
    subtitle: "Ensure your practice runs smoothly and efficiently.",
    description: "Optimize your healthcare operations with our specialized medical administrative professionals who understand the unique demands of the healthcare industry. Our staff brings expertise in medical billing and coding (including ICD-10, CPT, and HCPCS), insurance verification, prior authorizations, and claims processing. They're trained in HIPAA compliance and maintain the highest standards of patient data confidentiality. From managing electronic health records (EHR) systems like Epic, Cerner, and Athenahealth to coordinating patient scheduling and follow-ups, our team ensures your practice runs efficiently while maintaining excellent patient care standards.\n\nWe provide comprehensive support that extends beyond basic administrative tasks to include patient intake coordination, medical records management, and telehealth support services. Our professionals handle insurance communications, manage denial appeals, and optimize revenue cycle management to improve your practice's financial health. With experience across various specialties including primary care, specialists, dental, and mental health practices, we understand the specific workflows and requirements of different medical settings. Our flexible staffing solutions help you manage patient volume fluctuations, cover staff absences, and scale operations as your practice grows, all while reducing administrative costs and improving patient satisfaction scores.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    route: "/services/healthcare-staffing"
  },
  realEstate: {
    id: "realEstate",
    title: "Real Estate & Property Management Support",
    subtitle: "Manage your properties with expert support.",
    description: "Streamline your real estate operations with our comprehensive property management support services designed for brokers, property managers, and real estate investors. Our specialists handle everything from listing management and MLS updates to tenant screening and lease administration. They're proficient in industry-standard software including Yardi, AppFolio, Buildium, and various CRM platforms. Our team manages property marketing across multiple channels, coordinates showings, processes applications, and handles the extensive documentation required for real estate transactions. With expertise in both residential and commercial properties, we adapt our services to match your portfolio's specific needs.\n\nBeyond transactional support, we provide ongoing property management assistance including rent collection, maintenance coordination, vendor management, and financial reporting. Our team handles tenant communications, manages work orders, and ensures compliance with local housing regulations and fair housing laws. We also support real estate investment analysis, market research, and comparative market analyses (CMAs) that inform better investment decisions. Whether you're managing a handful of rental properties or a large commercial portfolio, our scalable solutions reduce operational overhead while improving tenant satisfaction and maximizing property performance. With 24/7 availability for emergency coordination, we ensure your properties are always properly managed.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    route: "/services/real-estate-support"
  },
  ecommerce: {
    id: "ecommerce",
    title: "eCommerce & Retail Operations",
    subtitle: "Scale your retail operations seamlessly.",
    description: "Accelerate your eCommerce growth with our comprehensive retail operations support that covers every aspect of online selling. Our specialists manage product listings across multiple platforms including Amazon, eBay, Shopify, and WooCommerce, optimizing titles, descriptions, and keywords for maximum visibility. We handle inventory management, order processing, and fulfillment coordination to ensure smooth operations even during peak selling periods. Our team is experienced in marketplace compliance, managing seller metrics, and resolving platform-specific issues that could impact your seller standing. From product photography coordination to managing customer reviews and feedback, we help maintain a strong online presence that drives sales.\n\nOur eCommerce support extends to advanced operations including dynamic pricing strategies, competitor analysis, and multi-channel inventory synchronization. We manage customer inquiries, process returns and refunds, and handle the complex logistics of international shipping and customs documentation. Our team provides detailed analytics on sales performance, conversion rates, and customer behavior patterns that inform strategic decisions. Whether you're launching new products, expanding to new marketplaces, or scaling existing operations, we provide the operational backbone that allows you to focus on product development and business growth. With experience across B2C and B2B eCommerce models, we bring best practices that improve efficiency, reduce operational costs, and enhance customer satisfaction.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    route: "/services/ecommerce-retail"
  }
};


const OurServices = () => {
  const [activeService, setActiveService] = useState<string>("accounting");
  const currentService = servicesData[activeService];

  return (
   <div className="bg-stone-100 p-4 md:p-10 lg:p-20 flex flex-col tracking-tighter">
  <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-26">
    {/* Left Sidebar: Services List */}
    <div className="flex flex-col lg:w-[35%]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-normal tracking-tighter">
        Comprehensive Solutions Across Industries
      </h2>
      <p className="text-stone-600 mb-8 text-lg mt-4 font-light">
        What sets Jotsi apart is our flexibility and unwavering commitment to quality. Whether you're a startup building your first team or an established enterprise seeking specialized expertise, we offer tailored HR solutions across a wide range of industries.
      </p>
      <div className="flex flex-col gap-3">
        {Object.keys(servicesData).map((key) => {
          const service = servicesData[key];
          return (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center justify-between text-left text-lg md:text-xl font-normal border-b-2 pb-3 transition-all duration-300 ${
                activeService === service.id
                  ? "text-black border-yellow-400"
                  : "text-stone-400 border-stone-200 hover:text-stone-600 hover:border-stone-300"
              }`}
            >
              <span>{service.title}</span>
              <span
                className={`text-2xl md:text-3xl font-light transition-transform duration-300 ${
                  activeService === service.id ? "rotate-45 text-yellow-500" : ""
                }`}
              >
                +
              </span>
            </button>
          );
        })}
      </div>
    </div>

    {/* Right Side: Service Details */}
    <div className="flex flex-col lg:w-[65%] gap-6 mt-10 lg:mt-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
            <Image
              src={currentService.image}
              alt={currentService.title}
              width={800}
              height={400}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold">
            {currentService.subtitle}
          </h3>
          <div className="text-stone-600 font-light text-lg space-y-4">
            {currentService.description
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          <div className="w-fit">
            <Button className="text-md">
              <span className="hidden md:inline">
                Learn More About Our {currentService.title}
              </span>
              <span className="md:hidden">Learn More</span>
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</div>

  );
};

export default OurServices;