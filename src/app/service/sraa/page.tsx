import HomeScreen from "@/screens/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prosfinity | Security Risk Assessment And Audit",
  description: "Security Risk Assessment And Audit",
  // other metadata
};

export default function Home() {
  return <HomeScreen />;
}
