import { Metadata } from "next";
import { notFound } from "next/navigation";
import JobDetailPage from "@/components/JobDetailPage";
import { getJobById } from "@/lib/jobs";
import PageViewTracker from "@/components/tracking/PageViewTracker";

export const metadata: Metadata = {
    title: "Account Manager - Vertrieb - Primorio",
    description:
        "Account Manager Position im Vertrieb bei Primorio. Attraktives Gehalt, Firmenwagen und Weiterbildungsbudget in der Immobilienwirtschaft.",
};

export default function AccountManagerPage() {
    const job = getJobById("account-manager");

    if (!job) {
        notFound();
    }

    return (
        <div>
            <PageViewTracker pageName="Job Detail - Account Manager" />
            <JobDetailPage job={job} />
        </div>
    );
}
