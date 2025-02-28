"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Lock } from "lucide-react";

const donationAmounts = [
  { value: 5, label: "$5" },
  { value: 10, label: "$10" },
  { value: 25, label: "$25" },
  { value: 50, label: "$50" },
  { value: 100, label: "$100" },
];

const frequencies = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "annually", label: "Annually" },
];

export default function DonateForm() {
  const [donationType, setDonationType] = useState<"one-time" | "recurring">(
    "one-time"
  );
  const [selectedAmount, setSelectedAmount] = useState<number | "other">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [frequency, setFrequency] = useState("weekly");
  const [nextPaymentDate, setNextPaymentDate] = useState("");

  // Calculate next payment date when component mounts
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="space-y-8">
        {/* Donation Type */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Donate any amount</h2>
          <p className="mb-4">
            Or find out about our{" "}
            <Link
              href="/donor-clubs"
              className="text-secondary hover:underline"
            >
              Donor Clubs
            </Link>
            .
          </p>
          <div className="flex gap-2 mb-6">
            <Button
              variant={donationType === "one-time" ? "default" : "outline"}
              onClick={() => setDonationType("one-time")}
              className="flex-1"
            >
              One-time donation
            </Button>
            <Button
              variant={donationType === "recurring" ? "default" : "outline"}
              onClick={() => setDonationType("recurring")}
              className="flex-1"
            >
              Recurring donation
            </Button>
          </div>
        </div>

        {/* Recurring Options */}
        {donationType === "recurring" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Process my gift</Label>
              <Select defaultValue={frequency} onValueChange={setFrequency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  {frequencies.map((freq) => (
                    <SelectItem key={freq.value} value={freq.value}>
                      {freq.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nextPayment">Next payment on</Label>
              <Input
                type="text"
                id="nextPayment"
                value={nextPaymentDate || formattedDate}
                onChange={(e) => setNextPaymentDate(e.target.value)}
                placeholder="MM/DD/YYYY"
              />
              <p className="text-sm text-gray-500">Use the format MM/DD/YYYY</p>
              <p className="text-sm text-gray-500">
                Your first gift processes today. The next gift processes on{" "}
                {formattedDate}.
              </p>
            </div>
          </div>
        )}

        {/* Amount Selection */}
        <div className="grid grid-cols-6 gap-2">
          {donationAmounts.map(({ value, label }) => (
            <Button
              key={value}
              variant={selectedAmount === value ? "default" : "outline"}
              onClick={() => setSelectedAmount(value)}
              className="col-span-1"
            >
              {label}
            </Button>
          ))}
          <Button
            variant={selectedAmount === "other" ? "default" : "outline"}
            onClick={() => setSelectedAmount("other")}
            className="col-span-2"
          >
            Other amount
          </Button>
        </div>

        {selectedAmount === "other" && (
          <div className="space-y-2">
            <Label htmlFor="customAmount">Enter amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                $
              </span>
              <Input
                id="customAmount"
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        )}

        {/* Personal Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Your information</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <select
              id="country"
              className="w-full h-10 px-3 border rounded-md"
              defaultValue="US"
            >
              <option value="US">🇺🇸 United States</option>
              {/* Add other countries as needed */}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP code</Label>
              <Input id="zipCode" />
            </div>
          </div>
        </div>

        {/* Email Updates */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Would you like to hear from us?
          </h3>
          <p className="text-sm text-gray-600">
            We'd like to keep you updated on our campaigns, policies, appeals
            and opportunities to get involved - in addition to contact regarding
            donations. You can unsubscribe at any time.
          </p>
          <div className="flex gap-4">
            <Button
              variant={emailUpdates ? "default" : "outline"}
              onClick={() => setEmailUpdates(true)}
            >
              Yes
            </Button>
            <Button
              variant={!emailUpdates ? "default" : "outline"}
              onClick={() => setEmailUpdates(false)}
            >
              No
            </Button>
          </div>
        </div>

        {/* Privacy Policy */}
        <p className="text-sm text-gray-600">
          To learn how we collect and use your information, please read our{" "}
          <Link
            href="/privacy-policy"
            className="text-secondary hover:underline"
          >
            privacy policy
          </Link>
          .
        </p>

        {/* Payment Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Payment</h3>
          <Button className="w-full h-12 bg-primary hover:bg-primary/90">
            <Lock className="w-4 h-4 mr-2" />
            Give securely
          </Button>
        </div>
      </div>
    </div>
  );
}
