"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { FiMail, FiMapPin, FiPhone, FiCheck } from "react-icons/fi";

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function Contact() {
    const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = (): boolean => {
        const tempErrors: FormErrors = {};
        if (!form.name.trim()) {
            tempErrors.name = "Name is required.";
        }
        if (!form.email.trim()) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            tempErrors.email = "Please enter a valid email address.";
        }
        if (!form.message.trim()) {
            tempErrors.message = "Message cannot be empty.";
        } else if (form.message.trim().length < 10) {
            tempErrors.message = "Message must be at least 10 characters long.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        // Clear errors in real-time as user types
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setShowSuccess(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Subtle glow behind the section */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 radial-glow pointer-events-none opacity-20" />

            <Container className="relative z-10">
                <SectionTitle
                    title="Let's build together"
                    subtitle="Have an ambitious project in mind? We'd love to chat. Reach out and tell us more."
                />

                <div className="grid gap-12 lg:grid-cols-5 items-start">
                    {/* Left Column: Contact info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="rounded-xl border border-border bg-card p-6 flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                                <FiMail size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                                    Email Us
                                </h4>
                                <a
                                    href="mailto:hello@void.studio"
                                    className="text-base text-muted hover:text-accent transition-colors"
                                >
                                    hello@void.studio
                                </a>
                            </div>
                        </div>

                        <div className="rounded-xl border border-border bg-card p-6 flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                                <FiPhone size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                                    Call Us
                                </h4>
                                <a
                                    href="tel:+15550199"
                                    className="text-base text-muted hover:text-accent transition-colors"
                                >
                                    +1 (555) 0199
                                </a>
                            </div>
                        </div>

                        <div className="rounded-xl border border-border bg-card p-6 flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                                <FiMapPin size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                                    Visit Us
                                </h4>
                                <p className="text-base text-muted">
                                    84 Art District, Suite 500
                                    <br />
                                    San Francisco, CA 94103
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                                    >
                                        Your Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                                    >
                                        Project Details
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project goals, timelines, and scope..."
                                        value={form.message}
                                        onChange={handleChange}
                                        error={errors.message}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    slanted={true}
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto px-8 py-3.5"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Success Overlay Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/90 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative"
                        >
                            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                                <FiCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                Inquiry Received!
                            </h3>
                            <p className="text-muted text-sm mb-6 leading-relaxed">
                                Thank you for reaching out to VOID.STUDIO. We have received your details and our design lead will contact you within 24 hours.
                            </p>
                            <Button
                                variant="primary"
                                slanted={true}
                                onClick={() => setShowSuccess(false)}
                                className="w-full"
                            >
                                Close Window
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
