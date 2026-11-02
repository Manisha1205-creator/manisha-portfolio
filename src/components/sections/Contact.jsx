import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  MapPin, 
  PhoneCall, 
  AlertCircle,
  MessageSquare,
  Clock
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onShowToast) {
      onShowToast(`Email address copied to clipboard: ${personalInfo.email}`, 'info');
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate real asynchronous transmission with robust validation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast('Thank you! Your message has been received.', 'success');
      }

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#a855f7', '#38bdf8']
        });
      } catch (err) {}

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      if (onShowToast) {
        onShowToast('Something went wrong. Please reach out directly via email.', 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070b13]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in software development opportunities, project collaboration, or technical discussions? I would love to hear from you.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <h3 className="text-xl font-display font-bold text-white">Contact Information</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Prompt responses for roles, hackathons, and software projects
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                      Email Address
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    title="Copy email address"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Professional Social Links */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 flex items-center gap-3 text-slate-200 hover:text-white transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">GitHub</span>
                      <span className="text-[10px] text-slate-400 font-mono">Code repositories</span>
                    </div>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 flex items-center gap-3 text-slate-200 hover:text-white transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">LinkedIn</span>
                      <span className="text-[10px] text-slate-400 font-mono">Professional network</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability Note */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold font-mono">
                  <Clock className="w-4 h-4" />
                  <span>Availability Status</span>
                </div>
                <p className="text-xs leading-relaxed text-emerald-200">
                  Open to full-time entry-level software engineering positions, software developer internships, and student project mentorship.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/10 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-display font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Fill in the details below and I will get back to you promptly.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. I have received your note and will review it shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-slate-300 font-medium">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-slate-300 font-medium">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-slate-300 font-medium">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Development Opportunity / Project Query"
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500/60' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-slate-300 font-medium">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Note...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

