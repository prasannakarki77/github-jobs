"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Posting } from "@prisma/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CalendarIcon, Loader2 } from "lucide-react";
import CustomTinyEditor from "./CustomTinyEditor";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useToast } from "../ui/use-toast";
import axios from "axios";
interface JobPostingFormProps {
  isEdit?: boolean;
  post?: Posting;
}

const JobPostingForm: React.FC<JobPostingFormProps> = ({ isEdit, post }) => {
  const [description, set_description] = useState<string>(
    post?.description || ""
  );
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
    expiresAt: z.date(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      description: post?.description || "",
      location: post?.location || "",
      duration: post?.duration || "",
    },
  });

  const {
    handleSubmit,
    control,
    register,
    setValue,
    reset,
    trigger,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    setValue("description", description);
    if (description !== "") {
      trigger("description");
    }
  }, [description]);

  const { toast } = useToast();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await axios.post("/api/posts", data);
      toast({
        variant: "default",
        title: "Jop Posted  Successful",
        description: "You can now sign in to GitHub jobs.",
      });
      reset();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.response.data.message ?? "Posting Failed",
        description: "Please try again!",
      });
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="md:grid md:grid-cols-2 gap-6">
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Job Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="full-time">Full time</SelectItem>
                      <SelectItem value="part-time">Part Time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expiresAt"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-[0.8]">
                  <FormLabel className="mt-2">Deadline</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomTinyEditor
                    {...field}
                    content={description}
                    setContent={set_description}
                    {...register("description")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default JobPostingForm;
