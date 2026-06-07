import {
  FiMonitor, FiPrinter, FiMaximize, FiBox, FiTag, FiCpu,
  FiShield, FiTool, FiWifi, FiVideo, FiCode, FiSettings,
  FiStar, FiCheck, FiUsers, FiHardDrive, FiHeadphones,
  FiCoffee, FiShoppingBag, FiShoppingCart, FiHeart, FiTruck,
  FiZap, FiSmartphone, FiAward, FiClock
} from 'react-icons/fi';

export const siteConfig = {
  phone: '+974 7476 1025',
  phone2: '+974 3088 3425',
  email: 'helpdesk@afis.qa',
  whatsapp: '97474761025',
  hours: 'Mon - Sat 9:00 AM - 6:00 PM',
  currency: 'QAR',
  address: 'Al Asmakh St, Doha, Qatar'
};

export const categories = [
  { id: 1, name: 'POS Systems', icon: 'FiMonitor', slug: 'pos-systems' },
  { id: 2, name: 'Receipt Printers', icon: 'FiPrinter', slug: 'receipt-printers' },
  { id: 3, name: 'Thermal Printers', icon: 'FiPrinter', slug: 'thermal-printers' },
  { id: 4, name: 'Barcode Scanners', icon: 'FiMaximize', slug: 'barcode-scanners' },
  { id: 5, name: 'Cash Drawers', icon: 'FiBox', slug: 'cash-drawers' },
  { id: 6, name: 'Label Printers', icon: 'FiTag', slug: 'label-printers' },
];

export const featuredProducts = [
  {
    id: 1,
    name: 'SUNMI T2 Pro POS Terminal',
    description: '15.6" Touch Screen, Android POS',
    price: '2,500',
    image: null,
    rating: 4.8,
    reviews: 45,
    badge: 'Best Seller',
    brand: 'SUNMI'
  },
  {
    id: 2,
    name: 'EPSON TM-T82X',
    description: 'Thermal Receipt Printer',
    price: '850',
    image: null,
    rating: 4.6,
    reviews: 38,
    badge: null,
    brand: 'EPSON'
  },
  {
    id: 3,
    name: 'Honeywell Voyager 1470g',
    description: '2D/1D Barcode Scanner',
    price: '450',
    image: null,
    rating: 4.7,
    reviews: 52,
    badge: 'Popular',
    brand: 'Honeywell'
  },
  {
    id: 4,
    name: 'POSIFLEX CR4100',
    description: 'Heavy Duty Cash Drawer',
    price: '350',
    image: null,
    rating: 4.5,
    reviews: 29,
    badge: null,
    brand: 'POSIFLEX'
  },
  {
    id: 5,
    name: 'Zebra ZD220',
    description: 'Desktop Label Printer',
    price: '1,100',
    image: null,
    rating: 4.7,
    reviews: 41,
    badge: null,
    brand: 'Zebra'
  },
];

export const brands = [
  { id: 1, name: 'EPSON' },
  { id: 2, name: 'ZEBRA' },
  { id: 3, name: 'HONEYWELL' },
  { id: 4, name: 'SUNMI' },
  { id: 5, name: 'HP' },
  { id: 6, name: 'DELL' },
  { id: 7, name: 'LENOVO' },
  { id: 8, name: 'POSIFLEX' },
];

export const clients = [
  { id: 1, name: 'Outback steak house' },
  { id: 2, name: "BO'S Coffee" },
  { id: 3, name: "Benji's" },
  { id: 4, name: 'Lebanese bakery' },
  { id: 5, name: 'Burger barn' },
  { id: 6, name: 'Dairy queen' },
  { id: 7, name: 'LE MIU cafe' },
];

export const whyChooseUsFeatures = [
  { icon: 'FiCheck', text: 'Genuine Products' },
  { icon: 'FiAward', text: 'Best Price Guarantee' },
  { icon: 'FiTool', text: 'Professional Installation' },
  { icon: 'FiUsers', text: 'Free Training & Support' },
  { icon: 'FiShield', text: '1 Year Warranty' },
  { icon: 'FiHeadphones', text: '24/7 Technical Support' },
];

export const statistics = [
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 2000, suffix: '+', label: 'Devices Installed' },
  { value: 24, suffix: '/7', label: 'Support Available' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

export const totemFeatures = [
  'Sales & Billing',
  'Inventory Management',
  'Kitchen Order Tickets',
  'Multi Branch Management',
  'Reports & Analytics',
  'Customer Loyalty',
  'Purchase & Suppliers',
  'Labor & Role Management',
  'Expense Management',
  'Mobile Dashboard',
  'And Much More...',
];

export const industries = [
  { id: 1, name: 'Restaurants', icon: 'FiCoffee' },
  { id: 2, name: 'Coffee Shops', icon: 'FiCoffee' },
  { id: 3, name: 'Retail Stores', icon: 'FiShoppingBag' },
  { id: 4, name: 'Supermarkets', icon: 'FiShoppingCart' },
  { id: 5, name: 'Pharmacies', icon: 'FiHeart' },
  { id: 6, name: 'Electronics', icon: 'FiCpu' },
  { id: 7, name: 'Fashion Stores', icon: 'FiTag' },
  { id: 8, name: 'Garages', icon: 'FiTruck' },
];

export const services = [
  {
    id: 1,
    title: 'POS Installation',
    description: 'Complete installation and configuration of POS hardware and software for your business.',
    icon: 'FiMonitor'
  },
  {
    id: 2,
    title: 'Network Setup',
    description: 'LAN, WIFI, VPN and network configuration for your business.',
    icon: 'FiWifi'
  },
  {
    id: 3,
    title: 'IT Support',
    description: 'Remote and onsite technical support whenever you need it.',
    icon: 'FiHeadphones'
  },
  {
    id: 4,
    title: 'CCTV Solutions',
    description: 'High quality CCTV cameras and security surveillance systems.',
    icon: 'FiVideo'
  },
  {
    id: 5,
    title: 'Software Solutions',
    description: 'Custom software solutions for your business needs.',
    icon: 'FiCode'
  },
  {
    id: 6,
    title: 'Maintenance',
    description: 'Regular maintenance and system health checkups.',
    icon: 'FiSettings'
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al-Thani',
    company: 'Golden Fork Restaurant',
    review: 'Excellent POS system and amazing service! The team installed everything perfectly and the training was thorough. Highly recommended for any restaurant.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sara Mohammed',
    company: 'Style Fashion Store',
    review: 'We switched to their retail POS and it transformed our business. Inventory tracking is now seamless and the reports are very insightful.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Khalid Rahman',
    company: 'QuickMart Supermarket',
    review: 'Professional team, quality hardware, and reliable after-sales support. They set up our entire network and POS system across 3 branches.',
    rating: 5,
  },
];

export const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Products',
    path: '/products',
    submenu: [
      { name: 'POS Systems', path: '/products?category=pos-systems' },
      { name: 'Receipt Printers', path: '/products?category=receipt-printers' },
      { name: 'Barcode Scanners', path: '/products?category=barcode-scanners' },
      { name: 'Cash Drawers', path: '/products?category=cash-drawers' },
      { name: 'Label Printers', path: '/products?category=label-printers' },
      { name: 'Accessories', path: '/products?category=accessories' },
    ]
  },
  { name: 'Software', path: '/software' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];
