import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 marble-veined">
      <div className="text-center max-w-md">
        <p className="label-sm" style={{ color: "var(--gold)" }}>404</p>
        <h1
          className="font-display mt-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.05 }}
        >
          The piece you&apos;re looking for
          <br />
          <span className="italic text-gold">isn&apos;t here.</span>
        </h1>
        <p className="mt-5">
          It may have moved, or never quite made it to the floor. Browse the rest of the collection instead.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 label-sm"
          style={{
            border: "1px solid var(--ink)",
            color: "var(--ink)",
            padding: "14px 32px",
            borderRadius: "999px",
          }}
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
