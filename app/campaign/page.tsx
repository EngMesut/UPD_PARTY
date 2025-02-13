import Campaign from "@/components/Campaign"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Green Party Campaign",
  description:
    "Join our mission to create sustainable change and build a more environmentally conscious nation for all.",
}

export default function CampaignPage() {
  return <Campaign />
}

