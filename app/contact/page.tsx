"use client"

import ContactForm from "@/components/contact/ContactForm"
import InfoCard from "@/components/contact/InfoCard"

export default function contact() {

    return(
        <div className="flex justify-between items-center h-screen">
            <InfoCard/>
            <ContactForm/>
        </div>
    )
}