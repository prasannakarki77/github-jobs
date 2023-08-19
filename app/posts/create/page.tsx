import JobPostingForm from "@/components/forms/JobPostingForm";
import { Separator } from "@/components/ui/separator";

const CreateJobPosting = () => {
  return (
    <div className="container my-5  max-w-5xl">
      <h1 className="text-2xl font-bold my-3">Add Job Posting</h1>
      <Separator className="my-4" />
      <JobPostingForm />
    </div>
  );
};

export default CreateJobPosting;
