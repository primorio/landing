import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Euro, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { jobs, Job } from "@/lib/jobs";

interface JobCardProps {
    job: Job;
}

function JobCard({ job }: JobCardProps) {
    const getJobUrl = (jobId: string) => {
        switch (jobId) {
            case "werkstudent-dev":
                return "/jobs/werkstudent-dev";
            case "account-manager":
                return "/jobs/account-manager";
            default:
                return "/jobs";
        }
    };

    return (
        <Link href={getJobUrl(job.id)}>
            <Card className="p-6 hover:shadow-lg transition-shadow ">
                <div className="flex justify-between items-center">
                    {/* Job Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {job.type}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Euro className="w-4 h-4" />
                                    {job.salary}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {job.department}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700"
                    >
                        Details ansehen
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </Card>
        </Link>
    );
}

export default function JobListings() {
    return (
        <div className="flex flex-col gap-8">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}
