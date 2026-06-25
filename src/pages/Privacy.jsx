import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SEO from "../components/SEO";
import PageSection from "../components/PageSection";
import Container from "../components/Container";

const sections = [
  {
    title: "Information We Collect",
    body: (
      <>
        <p>
          When you submit a consultation request through our website, we collect
          only the information you voluntarily provide via our contact form:
        </p>
        <ul>
          <li>
            <strong>Name</strong> — used to address you properly throughout our
            communication.
          </li>
          <li>
            <strong>Phone Number</strong> — used exclusively to contact you
            regarding your inquiry.
          </li>
          <li>
            <strong>Subject</strong> — used to understand the nature of your
            legal matter.
          </li>
          <li>
            <strong>Message</strong> — used to review the details you wish to
            share with our legal team.
          </li>
        </ul>
        <p>
          This information is collected solely for the purpose of responding to
          your inquiry. We do not collect any additional personal data beyond
          what you explicitly provide.
        </p>
      </>
    ),
  },
  {
    title: "Email Address Exclusion",
    body: (
      <>
        <p>
          Liberty Legal Service & Research Center does <strong>not</strong>{" "}
          collect, store, or request email addresses through this website.
        </p>
        <p>
          Our contact form has been intentionally designed without an email
          field. We believe phone-based communication offers a more direct,
          secure, and accessible channel for discussing legal matters with our
          team.
        </p>
        <p>
          If you wish to reach us via email, our office address is listed on our{" "}
          <a
            href="/contact"
            className="text-primary-600 underline underline-offset-2 hover:text-primary-700 transition-colors"
          >
            Contact page
          </a>{" "}
          for your reference.
        </p>
      </>
    ),
  },
  {
    title: "How Your Data Is Transferred",
    body: (
      <>
        <p>
          When you complete and submit our consultation form, your data is not
          saved or stored on any website server or database. Instead, the
          information you provide your name, phone number, subject, and message
          is transmitted in real time directly to our official WhatsApp channel.
        </p>
        <p>Here is how the workflow operates:</p>
        <ol>
          <li>
            You fill out the consultation form with your name, phone number,
            subject, and message.
          </li>
          <li>
            Upon submission, your browser opens WhatsApp with a pre-formatted
            message containing your details.
          </li>
          <li>
            No copy of your information is retained on our website's servers,
            logs, or databases.
          </li>
          <li>
            Our legal team receives your message through WhatsApp and will
            respond directly to your provided phone number.
          </li>
        </ol>
        <p>
          This approach ensures that your personal information remains between
          you and our legal team, with no intermediate storage layer.
        </p>
      </>
    ),
  },
  {
    title: "Data Security via WhatsApp",
    body: (
      <>
        <p>
          All information transferred through our WhatsApp integration is
          protected by WhatsApp's end-to-end encryption. This means only you and
          our legal team can read the messages you send. Neither WhatsApp nor
          any third party can access the content of your communications.
        </p>
        <p>
          We recommend reviewing{" "}
          <a
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 underline underline-offset-2 hover:text-primary-700 transition-colors"
          >
            WhatsApp's Privacy Policy
          </a>{" "}
          for further details on how your data is handled during transmission.
        </p>
        <p>
          While we take every reasonable precaution to protect your information,
          no method of electronic communication is completely secure. By using
          our services, you acknowledge and accept these inherent limitations.
        </p>
      </>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <>
        <p>
          You have the right to request access to, correction of, or deletion of
          any personal information you have shared with us. Since we do not
          maintain a database of submitted inquiries, any data you have sent via
          WhatsApp remains under your control through your WhatsApp account.
        </p>
        <p>
          If you have questions about how your information has been handled, or
          wish to discuss any privacy concern, please contact us directly using
          the information below.
        </p>
      </>
    ),
  },
  {
    title: "Contact Us",
    body: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data handling practices, please reach out to us:
        </p>
        <div className="mt-6 space-y-2">
          <p>
            <strong>Liberty Legal Service & Research Center</strong>
          </p>
          <p>Lalitpur, Nepal</p>
          <p>
            Phone:{" "}
            <a
              href="tel:+9779851227006"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700 transition-colors"
            >
              +977 9851227006
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:measmeerasms@gmail.com"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700 transition-colors"
            >
              measmeerasms@gmail.com
            </a>
          </p>
        </div>
      </>
    ),
  },
];

const Privacy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.fromTo(
        containerRef.current.querySelectorAll("[data-anim]"),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08 },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy | Liberty Legal Service & Research Center Nepal"
        description="Liberty Legal's privacy policy explains how we handle your data. We only collect your name and phone number via WhatsApp — no email, no server-side storage."
        canonical="https://libertylegal.vercel.app/privacy"
      />

      <PageSection variant="large" className="bg-[#F4F4F4] text-[#111111]">
        <Container className="max-w-4xl">
          <div ref={containerRef} className="space-y-6">
            {/* Header */}
            <div
              data-anim
              className="space-y-3 pb-8 border-b border-neutral-300"
            >
              <span className="text-xs md:text-sm font-medium tracking-wide text-neutral-500 uppercase font-primary">
                Policies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight font-secondary">
                Privacy Policy
              </h1>
              <p className="text-neutral-500 text-sm font-secondary">
                Last updated: June 2026
              </p>
            </div>

            {/* Intro */}
            <div
              data-anim
              className="text-lg md:text-xl leading-relaxed text-neutral-700 font-secondary"
            >
              <p>
                At Liberty Legal Service & Research Center, we take your privacy
                seriously. This policy describes the limited information we
                collect, how it is transferred, and your rights regarding your
                personal data.
              </p>
              <p className="mt-4">
                Our website has been designed with a privacy-first approach: we
                do not operate a database, we do not collect email addresses,
                and every inquiry submitted through our site is sent directly to
                our legal team via WhatsApp with no server-side retention.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section, index) => (
              <article
                key={index}
                data-anim
                className="pt-10 space-y-4 border-t border-neutral-300/60"
              >
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight font-secondary">
                  {section.title}
                </h2>
                <div className="text-neutral-700 leading-relaxed space-y-4 font-secondary [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_strong]:font-semibold [&_a]:font-medium text-base md:text-lg">
                  {section.body}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </PageSection>
    </>
  );
};

export default Privacy;
