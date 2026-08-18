"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { contactFormCopy } from "@/data/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().min(8, "Enter a valid phone number"),
  subject: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const fields = contactFormCopy.fields;

  async function onSubmit() {
    // Stubbed submit handler — swap for a real API route (email/Sanity) later.
    await new Promise((resolve) => setTimeout(resolve, 900));
    toast.success(contactFormCopy.successMessage);
    reset();
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-foreground">{contactFormCopy.heading}</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">{contactFormCopy.description}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">{fields.name.label}</Label>
            <Input
              id="name"
              className="mt-2 h-11"
              placeholder={fields.name.placeholder}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">{fields.phone.label}</Label>
            <Input
              id="phone"
              type="tel"
              className="mt-2 h-11"
              placeholder={fields.phone.placeholder}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email">{fields.email.label}</Label>
          <Input
            id="email"
            type="email"
            className="mt-2 h-11"
            placeholder={fields.email.placeholder}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="subject">{fields.subject.label}</Label>
          <select
            id="subject"
            defaultValue=""
            className={cn(
              "mt-2 h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              errors.subject && "border-destructive"
            )}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          >
            <option value="" disabled>
              {fields.subject.placeholder}
            </option>
            {contactFormCopy.subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs text-destructive">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="message">{fields.message.label}</Label>
          <Textarea
            id="message"
            rows={5}
            className="mt-2"
            placeholder={fields.message.placeholder}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-destructive">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-12 w-full px-6 text-base sm:w-auto"
        >
          {isSubmitting ? contactFormCopy.submittingLabel : contactFormCopy.submitLabel}
        </Button>
      </form>
    </div>
  );
}
