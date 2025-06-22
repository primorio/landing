import { Metadata } from "next";
import { notFound } from "next/navigation";
import JobDetailPage from "@/components/JobDetailPage";
import { getJobById } from "@/lib/jobs";
import PageViewTracker from "@/components/tracking/PageViewTracker";

export const metadata: Metadata = {
    title: "Werkstudent - Softwareentwickler (m/w/d) - Primorio",
    description:
        "Werkstudent Position als Softwareentwickler bei Primorio. Flexible Arbeitszeiten, Remote-First und mentoring durch erfahrene Entwickler.",
};

export default function WerkstudentDevPage() {
    const job = getJobById("werkstudent-dev");

    if (!job) {
        notFound();
    }

    return (
        <div>
            <PageViewTracker pageName="Job Detail - Werkstudent Dev" />
            <JobDetailPage job={job} />
        </div>
    );
}
