// lib/fonts.ts
import { Poppins } from "next/font/google"

// Define all font weights for Poppins from Thin (100) to Black (900)
export const poppinsThin = Poppins({
  weight: "100",
  subsets: ["latin"],
  variable: "--font-poppins-thin",
})

export const poppinsExtraLight = Poppins({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-poppins-extralight",
})

export const poppinsLight = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-poppins-light",
})

export const poppinsRegular = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins-regular",
})

export const poppinsMedium = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-poppins-medium",
})

export const poppinsSemiBold = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-poppins-semibold",
})

export const poppinsBold = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins-bold",
})

export const poppinsExtraBold = Poppins({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-poppins-extrabold",
})

export const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins-black",
})

// Combine all font weights for main usage
export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})