"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type InfluencerFormData = {
  name: string;
  email: string;
  handle: string;
  followers: string;
  category: string;
  portfolio?: string;
  message?: string;
};

const categories = [
  "Lifestyle & Travel",
  "Fashion & Beauty",
  "Tech & Gaming",
  "Fitness & Wellness",
  "Food & Drink",
  "Business & Finance",
  "Entertainment",
];

const InfluencerForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InfluencerFormData>();

  const onSubmit = async (data: InfluencerFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "Influencer Registration" }),
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
            placeholder="Sarah Jenkins"
          />
          {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Email Address</label>
          <input
            {...register("email", { 
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
            })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors"
            placeholder="sarah@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Instagram/TikTok Handle</label>
          <input
            {...register("handle", { required: "Social handle is required" })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors"
            placeholder="@sarahstyle"
          />
          {errors.handle && <p className="text-red-400 text-xs">{errors.handle.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Follower Count</label>
          <input
            {...register("followers", { required: "Follower count is required" })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors"
            placeholder="e.g. 50k"
          />
          {errors.followers && <p className="text-red-400 text-xs">{errors.followers.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Category/Niche</label>
          <select
            {...register("category", { required: "Please select a category" })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors appearance-none"
          >
            <option value="" className="bg-navy">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-navy">{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-400 text-xs">{errors.category.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Portfolio Link (Optional)</label>
          <input
            {...register("portfolio")}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors"
            placeholder="https://behance.net/..."
          />
        </div>
      </div>

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full bg-cyan text-navy py-4 rounded-xl font-bold hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Registering...
          </>
        ) : (
          "Join the Roster"
        )}
      </button>

      {status === "success" && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl flex items-center gap-3">
          <CheckCircle2 size={20} />
          <p className="text-sm">Registration successful! We will review your profile shortly.</p>
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

export default InfluencerForm;
