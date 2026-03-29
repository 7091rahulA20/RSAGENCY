"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type BrandFormData = {
  name: string;
  company: string;
  email: string;
  budget: string;
  message: string;
};

const budgetRanges = [
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
];

const BrandForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BrandFormData>();

  const onSubmit = async (data: BrandFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "Brand Inquiry" }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Full Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors"
            placeholder="John Smith"
          />
          {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Company Name</label>
          <input
            {...register("company", { required: "Company is required" })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors"
            placeholder="Vertex Corp"
          />
          {errors.company && <p className="text-red-400 text-xs">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Company Email</label>
          <input
            {...register("email", { 
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
            })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors"
            placeholder="john@vertex.com"
          />
          {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Budget Range</label>
          <select
            {...register("budget", { required: "Please select a budget range" })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors appearance-none"
          >
            <option value="" className="bg-navy">Select a range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-navy">{range}</option>
            ))}
          </select>
          {errors.budget && <p className="text-red-400 text-xs">{errors.budget.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/80">Tell us about your campaign goals</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors resize-none"
          placeholder="We want to launch a new collection..."
        />
        {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
      </div>

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full bg-cyan text-navy py-4 rounded-xl font-bold hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Sending...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>

      {status === "success" && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl flex items-center gap-3">
          <CheckCircle2 size={20} />
          <p className="text-sm">Inquiry submitted! Our team will contact you shortly.</p>
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl flex items-center gap-3">
          <AlertCircle size={20} />
          <p className="text-sm">Something went wrong. Please try again later.</p>
        </div>
      )}
    </form>
  );
};

export default BrandForm;
