import { PricingPlan } from './types';

export const plans: PricingPlan[] = [
  {
    name: "Startup Plan",
    price: "₹5,999/-",
    originalPrice: "₹8,000",
    description: "Best for Startup's",
    features: [
      "4 Page Modern Website",
      "Dynamic Website",
      "Domain Configuration",
      "Hosting Configuration",
      "2 Business Emails",
      "100% Mobile Friendly",
      "Website Admin Panel",
      "SEC Ready Website",
      "Free SSL Certificate"
    ],
    icon: "Rocket",
    color: "bg-gray-50"
  },
  {
    name: "Classic Plan",
    price: "₹9,999/-",
    originalPrice: "₹13,000",
    description: "Best for Small/Medium Business",
    popular: true,
    features: [
      "8 Page Modern Website",
      "Dynamic Website",
      "Domain Configuration",
      "Hosting Configuration",
      "3 Business Emails",
      "100% Mobile Friendly",
      "Website Admin Panel",
      "Google Search Console",
      "Payment Integration"
    ],
    icon: "Zap",
    color: "bg-white"
  },
  {
    name: "Premium Plan",
    price: "₹11,999/-",
    originalPrice: "₹15,000",
    description: "Best for Enterprises",
    features: [
      "12 Page Modern Website",
      "Dynamic Website",
      "Domain Configuration",
      "Hosting Configuration",
      "5 Business Emails",
      "100% Mobile Friendly",
      "Website Admin Panel",
      "Woocommerce Functions",
      "Premium Design"
    ],
    icon: "Crown",
    color: "bg-gray-50"
  },
  {
    name: "Custom Plan",
    price: "???",
    description: "Best for Custom Website",
    features: [
      "Pages: As Per Requirement",
      "Unlimited Categories",
      "Custom UI/UX Design",
      "Advanced Functionality",
      "Dedicated Support",
      "Scalable Architecture",
      "Full API Access",
      "Custom Integrations",
      "Priority Maintenance"
    ],
    icon: "Settings",
    color: "bg-white"
  }
];
