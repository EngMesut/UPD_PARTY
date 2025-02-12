"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { submitVolunteerForm } from "../lib/actions";

const volunteerActivities = [
  { id: "call", label: "Call voters" },
  { id: "canvass", label: "Canvass" },
  { id: "deliver", label: "Deliver leaflets" },
  { id: "display", label: "Display a poster" },
  { id: "pickup", label: "Pickup, drop and collect" },
  { id: "help", label: "Help/Vote" },
  { id: "social", label: "Use social media" },
  { id: "become", label: "Become a Member" },
  { id: "stand", label: "Stand as local Conservative" },
  { id: "ambassador", label: "Become a Digital Ambassador" },
];

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      await submitVolunteerForm(formData);
      // Handle success (e.g. show success message, reset form)
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fade-in-up">
      <div className="text-center mb-12 space-y-4">
        <p className="text-primary text-xl">
          This is a once-in-a-generation opportunity to renew our party, our
          thinking and our country. If we fail, we will be out of government for
          a decade or, potentially, forever.
        </p>
        <p className="text-primary text-lg">
          I will make being a Member mean something again. But we need to
          support our councillors. By the next General Election, Labour will
          have failed and we must be ready to win.
        </p>
        <p className="text-primary">
          So sign up here and let's start the renewal:
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-center mb-6">
          Volunteer for the renewal here
        </h2>

        <form action={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                required
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                required
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="postcode">Postcode</Label>
              <Input
                id="postcode"
                name="postcode"
                required
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="mobile">Mobile</Label>
              <Input id="mobile" name="mobile" type="tel" className="w-full" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>How can you help?</Label>
            {volunteerActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-2">
                <Checkbox
                  id={activity.id}
                  name="activities"
                  value={activity.id}
                />
                <Label htmlFor={activity.id}>{activity.label}</Label>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" name="newsletter" value="true" />
            <Label htmlFor="newsletter">
              I would also like to keep up-to-date on future campaigns that
              matter to me
            </Label>
          </div>

          <div className="text-sm text-gray-600">
            I sign up to volunteer for the Conservative Party and understand
            that the Conservative Party will use the information I provide to
            contact me about voluntary activities.
          </div>

          {/* Placeholder for reCAPTCHA */}
          <div className="flex justify-center">
            <div
              className="g-recaptcha"
              data-sitekey="your-recaptcha-site-key"
            ></div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-primary-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "VOLUNTEER"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            There will be an easy way to opt out of future messages with each
            one. For more information about how we use your data see your
            Privacy Notice.
          </p>
        </form>
      </div>
    </div>
  );
}
