"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  const faqs = [
    {
      question: "How does Vidwize work?",
      answer:
        "Vidwize connects YouTubers with video editors. YouTubers can post projects, browse editor profiles, and assign work. Editors can showcase their skills, apply for projects, and submit completed work through our platform. Our system handles all communication, file transfers, and payments to ensure a smooth collaboration process.",
    },
    {
      question: "What are the benefits for YouTubers?",
      answer:
        "YouTubers benefit from access to a pool of vetted, professional editors, transparent pricing, secure collaboration tools, and the ability to scale their content production. Our platform also provides tools for feedback, revisions, and building long-term relationships with editors who understand your style and brand.",
    },
    {
      question: "What are the benefits for Editors?",
      answer:
        "Editors gain access to consistent work opportunities, fair compensation, the ability to showcase their skills, and the chance to build long-term relationships with content creators. Our platform also handles payments and contracts, allowing editors to focus on what they do best - editing great videos.",
    },
    {
      question: "How much does it cost to use Vidwize?",
      answer:
        "We offer different membership tiers for both YouTubers and Editors. Basic accounts are free, while premium tiers offer additional features and benefits. YouTubers pay editors directly through our platform based on agreed-upon rates. Vidwize charges a small service fee on transactions to maintain the platform and provide support.",
    },
    {
      question: "How are payments handled?",
      answer:
        "Payments are processed securely through our platform. YouTubers can fund their accounts and release payments upon approval of completed work. Editors receive payments directly to their linked accounts. We use industry-standard encryption and security measures to protect all financial transactions.",
    },
    {
      question: "What if I'm not satisfied with the editing work?",
      answer:
        "Our platform includes a revision process. If you're not satisfied with the initial submission, you can request revisions with specific feedback. If issues persist, our dispute resolution team can help mediate. We strive to ensure both parties are treated fairly and that the final product meets the agreed-upon requirements.",
    },
    {
      question: "Can I work with the same editor consistently?",
      answer:
        "We encourage building long-term relationships. You can add editors to your preferred list and assign work directly to them for future projects. Many successful collaborations on our platform have evolved into ongoing partnerships.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up for an account as either a YouTuber or an Editor. Complete your profile, and you'll be ready to start posting projects or browsing available work. Our onboarding process will guide you through the specific steps for your role.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
              Find answers to common questions about Vidwize
            </p>
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="px-4 py-5 sm:p-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full justify-between items-center text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    {openFaq === index ? (
                      <FaChevronUp className="h-5 w-5 text-red-600" />
                    ) : (
                      <FaChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="mt-4 text-base text-gray-500 dark:text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-gray-500 dark:text-gray-400">Still have questions?</p>
            <a href="#" className="mt-2 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500">
              Contact our support team
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FAQs
