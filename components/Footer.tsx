"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  
  const paymentMethods = [
    {
      name: "Discover",
      img: "/discover.png",
      alt: "Discover Card"
    },
    {
      name: "MasterCard",
      img: "/mastercard.png",
      alt: "MasterCard"
    },
    {
      name: "Visa",
      img: "/visa.png",
      alt: "Visa"
    },
    {
      name: "American Express",
      img: "/american.png",
      alt: "American Express"
    }
  ]
  const member = [
    {
      img: "/iata.png",
      alt: "Discover Card"
    },
    {
      img: "/cruise-lines-international.png",
      alt: "MasterCard"
    },
    {
      img: "/pci-compliance.png",
      alt: "Visa"
    },
    {
      img: "/american-society.png",
      alt: "American Express"
    }
  ]
  return (
    <footer className="bg-[#0a1128] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Travelers Reviews Section */}
          <motion.div >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              FROM OUR TRAVELERS
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary"></span>
            </h3>
            <div className="space-y-4">
              <img
                src="/trust-pilot.png"
                alt="BBB Accredited Business"
                className="h-16 object-contain"
              />
              <img
                src="/accredited-business.png"
                alt="BBB Accredited Business"
                className="h-16 object-contain"
              />
            </div>
          </motion.div>

          {/* Quick Links Column 1 */}
          <motion.div  transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              QUICK LINKS
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "About",
                "Contact",
                "Blog",
                "Privacy Policy",
                "Post Ticketing Fee",
                "Cookie Policy",
                "Our Service Fees",
                "Testimonials",
                "Disclaimer"
              ].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="text-secondary">•</span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column 2 */}
          <motion.div  transition={{ delay: 0.2 }}>
            <div className="lg:mt-12">
              <ul className="space-y-3 text-sm">
                {[
                  "Business Class",
                  "First Class",
                  "Domestic Flight",
                  "International Flight",
                  "Group Flight",
                  "Red Eye Flight",
                  "Cancellation Policy",
                  "Terms and Conditions",
                  "ClubMiles"
                ].map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                    >
                      <span className="text-secondary">•</span>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div  transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              INFINITY TRAVELS
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary"></span>
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed">
                  17875 Von Karman Ave, Suite 150 & 250, Irvine, California,
                  92614, United States of America
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="mailto:info@theinfinitytravel.com"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  info@theinfinitytravel.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="tel:1-760-999-7119"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  1-760-999-7119
                </a>
              </div>
              <div className="flex gap-3 pt-2">
                {[
                  { Icon: Facebook, color: "hover:bg-blue-600" },
                  { Icon: Instagram, color: "hover:bg-pink-600" },
                  { Icon: Linkedin, color: "hover:bg-blue-700" },
                  { Icon: Youtube, color: "hover:bg-red-600" }
                ].map(({ Icon, color }, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center ${color} transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Offering Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700"
          
        >
          <h3 className="text-lg font-bold mb-6 relative inline-block">
            PRODUCT OFFERING
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary"></span>
          </h3>
          <div className="flex flex-wrap gap-6 text-sm">
            {[
              "Top Destinations",
              "Top Routes",
              "Cruise Lines",
              "Deals",
              "Taxes & Fees"
            ].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
              >
                <span className="text-secondary">•</span>
                {item}
              </motion.a>
            ))}
          </div>
          <div className="mt-6 text-start sm:text-right">
            <p className="text-sm">
              <span className="text-gray-400">
                SELLER OF TRAVEL REGISTRATION #:
              </span>
              <span className="text-secondary font-semibold ml-2">
                2146223-50
              </span>
            </p>
          </div>
        </motion.div>

        {/* Payment & Membership Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700"
          
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-6">Payment Accepted</h3>
              <div className="flex gap-4 flex-wrap items-center">
              {paymentMethods.map((method, index) => (
                  <img
                    key={index}
                    src={method.img}
                    alt={method.alt}
                    className="h-10  rounded px-2 object-contain"
                    title={method.name}
                  />
                ))}
              </div>

            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Member</h3>
              <div className="flex gap-4 flex-wrap items-center">
                 {member.map((member, index) => (
                  <img
                    key={index}
                    src={member.img}
                    alt={member.alt}
                    className="h-10  rounded px-2 object-contain"
                    
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legal Text */}
        <motion.div
          className="mt-8 text-xs text-gray-400 leading-relaxed"
          
        >
          <p className="mb-4">
            <a
              href="https://www.theinfinitytravel.com"
              className="text-sky-400 hover:underline"
            >
              www.theinfinitytravel.com
            </a>
            , operated by Infinity Web Solutions LLC (EIN: 82-160816), is a
            premier travel brand. We are an IATA certified company (Number:
            05-7 1127 4) located at 1876 Harvest Cir, Tustin, CA 92780-4589.
            We ensure that our flight services meet the highest standards
            through IATA certification. Our additional services like hotels
            and cruises are sourced from the leading suppliers in the
            industry. By using our services, you agree to our{" "}
            <a href="#" className="text-sky-400 hover:underline">
              www.theinfinitytravel.com
            </a>{" "}
            (Infinity Travels)'s{" "}
            <a href="#" className="text-sky-400 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-sky-400 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
          <p>
            Please note that all transactions are subject to{" "}
            <a href="#" className="text-sky-400 hover:underline">
              our Service Fees
            </a>{" "}
            and{" "}
            <a href="#" className="text-sky-400 hover:underline">
              Post Ticketing Fees
            </a>
            . For more details, make sure to check insights from our{" "}
            <a href="#" className="text-sky-400 hover:underline">
              Cookie Policy
            </a>
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="bg-[#050817] py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/new-travel-logo.png"
              alt="Infinity Travels"
              className="h-10"
            />
          </div>
          <p className="text-xs text-gray-400 text-center md:text-right">
            © Copyright {currentYear}{" "}
            <a href="#" className="text-sky-400 hover:underline">
              Infinity Web Solutions LLC
            </a>{" "}
            |{" "}
            <a href="#" className="text-sky-400 hover:underline">
              DBA - Infinity Travels
            </a>
            . All Rights Reserved
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
