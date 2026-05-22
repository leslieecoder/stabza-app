type FormStatusToastProps = {
  status: "loading" | "success" | "error";
  message: string;
  className?: string;
};

const statusStyles: Record<FormStatusToastProps["status"], string> = {
  loading: "border-violet-200 bg-violet-50 text-violet-800",
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  error: "border-rose-200 bg-rose-50 text-rose-800",
};

export function FormStatusToast({ status, message, className = "" }: FormStatusToastProps) {
  const icon =
    status === "loading" ? (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4.5 w-4.5 animate-spin" fill="none">
        <path d="M12 3a9 9 0 1 0 9 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ) : status === "success" ? (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
        <path d="m5 12 4.2 4.2L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ) : (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
        <path d="M12 8v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="16.5" r="1" fill="currentColor" />
        <path d="M10.3 3.8 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );

  return (
    <div
      role={status === "error" ? "alert" : "status"}
      aria-live="polite"
      className={`flex items-start gap-3 rounded-[1.25rem] border px-4 py-3 text-sm font-medium shadow-[0_10px_24px_rgba(15,23,42,0.06)] ${statusStyles[status]} ${className}`.trim()}
    >
      <span className="mt-0.5 shrink-0">{icon}</span>
      <p>{message}</p>
    </div>
  );
}