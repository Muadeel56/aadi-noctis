"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const inputClasses =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm " +
  "placeholder:text-muted-foreground/60 transition-colors " +
  "outline-none focus-visible:border-accent/50 focus-visible:ring-2 focus-visible:ring-ring/40";

/**
 * Backend-free contact form: submitting opens the visitor's mail client
 * with the message pre-filled. Matches the static export — no server.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailSubject = subject || `Hello from ${name || "your website"}`;
    const body = name ? `${message}\n\n— ${name}` : message;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Name
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Subject
          </span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's this about?"
            className={inputClasses}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Message
        </span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the project, the role, or the idea…"
          rows={6}
          className={`${inputClasses} resize-y`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" className="min-h-11 px-6">
          Send message
          <Send className="size-4" aria-hidden />
        </Button>
        <p className="text-xs text-muted-foreground">
          Opens your mail app — no forms-as-a-service, no tracking.
        </p>
      </div>
    </form>
  );
}
