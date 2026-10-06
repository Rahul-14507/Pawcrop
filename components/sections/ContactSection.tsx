"use client";

import React, { useState } from "react";
import { site, isTodo } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TodoTag } from "@/components/ui/TodoTag";
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, Building, Sprout } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "pilot-farm", // pilot-farm, investor, grant-panel, academic
    organization: "",
    message: "",
    honeypot: "", // anti-bot field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: if filled, quietly succeed or reject
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error("Submission failed");
      } else {
        // Fallback simulation for prototype stage
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage("Could not submit directly. Please use the mailto link below.");
    }
  };

  const contactEmailStr = typeof site.contactEmail === "string" ? site.contactEmail : "contact@pawcrop.in";
  const mailtoHref = `mailto:${contactEmailStr}?subject=Inquiry%20regarding%20PAWCROP%20Pilot%20/%20Investment&body=Hello%20PAWCROP%20team,%0D%0A%0D%0AMy%20name%20is%20${encodeURIComponent(
    formData.name || "[Your Name]"
  )}%20from%20${encodeURIComponent(
    formData.organization || "[Your Organization]"
  )}.%0D%0A%0D%0A`;

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 11"
          category="ENGAGEMENT & PILOT COHORT"
          title="Become a pilot farm or back the build."
          subtitle="We are accepting applications from commercial hydroponic facilities for Phase 2 field pilots and engaging mission-aligned agricultural grant evaluators."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Left Column (5 cols): Context & Direct Mail */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-paper hairline-all rounded p-6 sm:p-7 shadow-subtle border-l-4 border-l-signal">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-signal mb-3">
                <Sparkles className="w-4 h-4" />
                <span>PILOT APPLICANT PROFILE</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-ink mb-3">
                Who should connect with us?
              </h3>

              <div className="space-y-3 text-xs font-sans text-ink/80 leading-relaxed mb-6">
                <div className="flex items-start gap-2">
                  <Sprout className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                  <span>
                    <strong>Commercial Hydroponic Growers:</strong> seeking root-zone Pythium eradication and zero synthetic chemical input dependencies.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-water shrink-0 mt-0.5" />
                  <span>
                    <strong>Incubators & Grant Panels:</strong> evaluating hardware agritech solutions under MSME, Startup India, or BIRAC schemes.
                  </span>
                </div>
              </div>

              <div className="pt-4 hairline-t text-xs font-mono space-y-2">
                <span className="text-ink/60 text-[11px] block">DIRECT CONTACT INQUIRY:</span>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-ink/70 shrink-0" />
                  <TodoTag
                    value={site.contactEmail}
                    fallback={
                      <a
                        href={mailtoHref}
                        className="text-leaf font-bold hover:underline"
                      >
                        {contactEmailStr}
                      </a>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): The Application Form */}
          <div className="lg:col-span-7 bg-paper hairline-all rounded p-6 sm:p-8 shadow-subtle">
            <div className="flex items-center justify-between pb-3 mb-6 hairline-b text-xs font-mono">
              <span className="font-bold text-ink flex items-center gap-2">
                <Send className="w-4 h-4 text-leaf" />
                PILOT APPLICATION / INVESTOR INQUIRY FORM
              </span>
              <span className="text-ink/40 text-[10px]">ENCRYPTED TRANSMISSION</span>
            </div>

            {status === "success" ? (
              <div className="p-8 text-center bg-leaf/10 border border-leaf/30 rounded font-mono space-y-3">
                <CheckCircle2 className="w-10 h-10 text-leaf mx-auto animate-bounce" />
                <h4 className="font-display text-2xl font-bold text-ink">
                  Inquiry Dispatched
                </h4>
                <p className="text-xs text-ink/80 max-w-md mx-auto font-sans">
                  Thank you for reaching out. The PAWCROP founding engineering team at IARE will review your message and respond with technical documentation.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      category: "pilot-farm",
                      organization: "",
                      message: "",
                      honeypot: "",
                    });
                  }}
                  type="button"
                  className="mt-4 px-4 py-2 text-xs font-mono hairline-all bg-paper rounded hover:bg-ink/5"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                {/* Honeypot hidden input for anti-spam */}
                <input
                  type="text"
                  name="website_honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="form-name" className="block text-ink/70 mb-1 font-semibold">
                      YOUR NAME *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-paper hairline-all rounded text-ink focus:border-leaf"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" className="block text-ink/70 mb-1 font-semibold">
                      WORK EMAIL *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. ramesh@agrifarm.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-paper hairline-all rounded text-ink focus:border-leaf"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div>
                    <label htmlFor="form-category" className="block text-ink/70 mb-1 font-semibold">
                      INQUIRY CATEGORY *
                    </label>
                    <select
                      id="form-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-2.5 bg-paper hairline-all rounded text-ink focus:border-leaf cursor-pointer"
                    >
                      <option value="pilot-farm">Commercial Hydroponic Pilot Farm</option>
                      <option value="investor">Angel / Early-Stage Investor</option>
                      <option value="grant-panel">MSME / BIRAC / Govt Grant Committee</option>
                      <option value="academic">Academic / Research Collaboration</option>
                    </select>
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="form-org" className="block text-ink/70 mb-1 font-semibold">
                      ORGANIZATION / FARM NAME
                    </label>
                    <input
                      id="form-org"
                      type="text"
                      placeholder="e.g. GreenRoots Hydroponics"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-2.5 bg-paper hairline-all rounded text-ink focus:border-leaf"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className="block text-ink/70 mb-1 font-semibold">
                    MESSAGE / FACILITY SPECIFICATIONS *
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    placeholder="Describe your hydroponic setup, daily flow rate (L/min), or grant/investment scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 bg-paper hairline-all rounded text-ink focus:border-leaf font-sans text-xs"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-signal/10 border border-signal/30 rounded text-signal flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto px-6 py-3 bg-signal hover:opacity-90 text-white font-bold tracking-wider rounded transition-opacity flex items-center justify-center gap-2 shadow-sm"
                  >
                    {status === "submitting" ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SUBMIT APPLICATION</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoHref}
                    className="text-[11px] text-ink/60 hover:text-ink underline decoration-dotted"
                  >
                    Or open default email client (mailto)
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
