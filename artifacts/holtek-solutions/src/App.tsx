import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import Login from "@/pages/Login";
import ThankYou from "@/pages/ThankYou";

function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <main className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6">
          Holtek Solutions LLC
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-10">
          Building smart IT solutions for small businesses to automate workflows and unlock growth.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 active:opacity-80 transition"
        >
          Sign In
        </button>
      </main>
    </div>
  );
}

function NotFound() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Page not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}
