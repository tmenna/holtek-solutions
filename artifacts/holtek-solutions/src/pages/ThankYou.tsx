import { useLocation } from "wouter";

export default function ThankYou() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          You have successfully signed in to Holtek Solutions LLC. We appreciate
          your trust in our IT services.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
