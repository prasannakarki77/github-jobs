import { Posting } from "@prisma/client";
import * as z from "zod";
interface JobPostingFormProps {
  isEdit?: boolean;
  jobPosting?: Posting;
}

const JobPostingForm: React.FC<JobPostingFormProps> = ({
  isEdit,
  jobPosting,
}) => {
  const formSchema = z.object({
    title: z.string().min(4, {
      message: "Title must be at least 4 characters long",
    }),
    description: z.string().min(10, {
      message: "Description must be at least 10 characters long",
    }),
    location: z.string().min(1, {
      message: "Location is required",
    }),
    duration: z.string().min(1, {
      message: "Duration must be specified",
    }),
    salary: z.number(),
  });
  return <div>JobPostingForm</div>;
};

export default JobPostingForm;
