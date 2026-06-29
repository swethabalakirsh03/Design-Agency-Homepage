"use client";

import { motion, type Variants } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../cards/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 radial-glow pointer-events-none opacity-30" />

            <Container className="relative z-10">
                <SectionTitle
                    title="Our Core Capabilities"
                    subtitle="We deliver end-to-end design and technology products that empower brands to disrupt markets."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={cardVariants}>
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}