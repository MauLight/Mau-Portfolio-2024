import antichrist from '@/assets/apps/1. The Antichrist.png'
import echoes from '@/assets/apps/2. Echoes.png'
import sin from '@/assets/apps/3. Sin.png'
import memory from '@/assets/apps/4. [NOT] a Memory.png'
import hope from '@/assets/apps/5. Hope.png'
import forbidden from '@/assets/apps/6. The Forbidden.png'
import speed from '@/assets/apps/7. Speed of Light.png'
import rebel from '@/assets/apps/8. Rebel Seraphim.png'
import hunger from '@/assets/apps/9. Hunger.png'
import them from '@/assets/apps/10. Them.png'
import { ScreenplayPosterProps } from './types'

const screenplayPosters = [
  {
    id: 'a1',
    title: 'The Antichrist',
    poster: antichrist
  },
  {
    id: 'b2',
    title: 'Echoes',
    poster: echoes
  },
  {
    id: 'c3',
    title: 'Sin',
    poster: sin
  },
  {
    id: 'd4',
    title: '[not] a memory',
    poster: memory
  },
  {
    id: 'e5',
    title: 'Hope',
    poster: hope
  },
  {
    id: 'f6',
    title: 'The Forbidden',
    poster: forbidden
  },
  {
    id: 'g7',
    title: 'Speed of Light',
    poster: speed
  },
  {
    id: 'h8',
    title: 'Rebel Seraphim',
    poster: rebel
  },
  {
    id: 'i9',
    title: 'Hunger',
    poster: hunger
  },
  {
    id: 'j10',
    title: 'Them',
    poster: them
  },
]

export const physicalProducts = [
  { id: "2d89a61f-faf4-47b2-b242-ea37bae92ae0", category: "Electronics", examples: "smartphones, laptops, accessories" },
  { id: "fc238a43-5a30-4360-bf5a-b3920a63fb9c", category: "Clothing & Apparel", examples: "fashion, footwear, accessories" },
  { id: "6a88df9b-94be-44fe-a497-04c4423c3e0c", category: "Home & Kitchen", examples: "furniture, appliances, decor" },
  { id: "be7cecee-7739-44be-b8cf-337b04a15fc0", category: "Beauty & Personal Care", examples: "cosmetics, skincare, haircare" },
  { id: "885bb856-8b6b-4b2e-9bf5-cc137a39d17c", category: "Health & Wellness", examples: "supplements, fitness gear, medical supplies" },
  { id: "4b539876-84f9-48ea-8d15-5a8a2d7b28d7", category: "Automotive & Accessories", examples: "car parts, tools, gadgets" },
  { id: "4d99bf42-cb02-49c8-b620-a366d53d8090", category: "Sports & Outdoor Gear", examples: "camping equipment, bicycles, gym gear" },
  { id: "b6c79956-97b3-4d94-af56-29380ce4695d", category: "Toys & Games", examples: "kids’ toys, puzzles, board games" },
  { id: "8dadba89-1754-404c-a11d-99a39924f660", category: "Books & Stationery", examples: "novels, textbooks, office supplies" },
  { id: "eadb8e8b-2ecb-48cd-b78c-3ecb533cb99e", category: "Pet Supplies", examples: "food, accessories, toys" }
]

export const digitalProducts = [
  { id: "bd766093-92bb-43ed-8afa-ffec1e99547a", category: "E-books & PDFs", examples: "guides, courses, tutorials" },
  { id: "3bb92d03-6fd4-4dcf-9a65-da87600875f4", category: "Software & Apps", examples: "SaaS, plugins, mobile apps" },
  { id: "ecc5eccb-514f-406c-bd11-006efe809358", category: "Digital Art & Graphics", examples: "templates, fonts, illustrations" },
  { id: "73114b80-b50c-47d7-a63a-f518ea910154", category: "Music & Audio", examples: "stock music, beats, sound effects" },
  { id: "b316f652-3e30-4a40-9500-42123b9c308c", category: "Photography & Stock Images", examples: "royalty-free images, mockups" },
  { id: "1d53c257-86ce-4cb0-9d0f-17c49a049c5b", category: "Online Courses & Educational Content", examples: "video tutorials, memberships" },
  { id: "a4f7d191-b218-4f5b-822b-5099639efb1c", category: "Website Themes & Templates", examples: "WordPress, HTML, UI kits" }
]

export const services = [
  { id: "7244ed39-f346-4756-8e85-5c689478a317", category: "Freelancing Services", examples: "web development, graphic design, writing" },
  { id: "c0a36749-628a-4bcb-b19f-5024091c2ead", category: "Consulting & Coaching", examples: "business, marketing, life coaching" },
  { id: "e99ccb42-87e4-4707-b876-0da836af49cd", category: "Legal & Financial Services", examples: "contracts, tax consulting" },
  { id: "5a0eca03-1f5e-4b2e-9f3d-31e1037409d9", category: "Marketing Services", examples: "SEO, ad campaigns, social media management" },
  { id: "eb93de43-98b1-4443-bce1-ab8278ad0136", category: "Virtual Assistance", examples: "admin support, customer service" }
]

export const handcraftedProducts = [
  { id: "a7ce9cdb-5947-43e3-9d12-0e83042de864", category: "Handmade Jewelry & Accessories", examples: "custom rings, bracelets, earrings" },
  { id: "2adb29c4-9bfd-4af6-927e-6c627104c5f4", category: "Custom Apparel & Print-on-Demand", examples: "t-shirts, hoodies, mugs" },
  { id: "61c15a4f-f8ba-41e2-ad03-9553f468c2a5", category: "Artwork & Crafts", examples: "paintings, pottery, sculptures" },
  { id: "2214c864-0b5c-4ac9-8011-5043117cef97", category: "Personalized Gifts", examples: "photo frames, engraved items, custom prints" }
]

export const subscriptionProducts = [
  { id: "5244796b-24b0-49e2-860a-3b7cc92ed4da", category: "Subscription Boxes", examples: "beauty, food, lifestyle" },
  { id: "a8f79eaa-a0a8-44c5-81c5-e5bbd812483e", category: "SaaS Subscriptions", examples: "productivity tools, business software" },
  { id: "612360f8-10dd-46c9-869e-1659ab2dfad6", category: "Membership Programs", examples: "exclusive content, private communities" }
]

export const fullSpectrumColors = [
  // Full Color Spectrum (Brighter Tones)
  "bg-[#FF0000]", // Red
  "bg-[#FF4000]", // Reddish-Orange
  "bg-[#FF7F00]", // Orange
  "bg-[#FFBF00]", // Yellow-Orange
  "bg-[#FFFF00]", // Yellow
  "bg-[#BFFF00]", // Yellow-Green
  "bg-[#7FFF00]", // Green
  "bg-[#40FF00]", // Greenish-Cyan
  "bg-[#00FF00]", // Green
  "bg-[#00FF40]", // Green-Cyan
  "bg-[#00FF7F]", // Cyan-Green
  "bg-[#00FFBF]", // Cyan
  "bg-[#00FFFF]", // Cyan
  "bg-[#00BFFF]", // Cyan-Blue
  "bg-[#007FFF]", // Blue
  "bg-[#0040FF]", // Deep Blue
  "bg-[#0000FF]", // Pure Blue
  "bg-[#4000FF]", // Blue-Magenta
  "bg-[#7F00FF]", // Magenta-Blue
  "bg-[#BF00FF]", // Magenta
  "bg-[#FF00FF]", // Pure Magenta
  "bg-[#FF00BF]", // Magenta-Red
  "bg-[#FF007F]", // Reddish-Magenta
  "bg-[#FF0040]", // Deep Red  

  // Grayscale Gradient
  "bg-[#000000]", // Black
  "bg-[#202020]", // Extra Dark Gray
  "bg-[#404040]", // Dark Gray
  "bg-[#606060]", // Medium Dark Gray
  "bg-[#808080]", // Medium Gray
  "bg-[#A0A0A0]", // Medium Light Gray
  "bg-[#C0C0C0]", // Light Gray
  "bg-[#E0E0E0]", // Very Light Gray
  "bg-[#FFFFFF]"  // White
];



export const randomAddedArrayBuilder = () => {
  const randomAddedArray: ScreenplayPosterProps[] = []
  const copyArray = [...screenplayPosters]
  copyArray.forEach((item) => {
    randomAddedArray.push({ ...item, sizeChance: Math.random(), shapeChance: Math.random() })
  })
  return randomAddedArray
}