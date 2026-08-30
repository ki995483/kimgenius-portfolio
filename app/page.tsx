import Link from "next/link";
import XYZCore from "./components/XYZCore";

export default function Home() {
  return (
    <main className="xyz-page">
      <section className="xyz-hero">
        <div className="xyz-hero-content">
          <p className="xyz-eyebrow">XYZ</p>

          <h1>
            Welcome to the
            <br />
            beginning
          </h1>

          <p className="xyz-description">
            A new core. A new direction. A new beginning.
          </p>

          <Link href="/portfolio" className="xyz-button">
            ENTER XYZ
          </Link>
        </div>

        <div className="xyz-hero-mark">
          <XYZCore size={420} priority />
        </div>
      </section>
    </main>
  );
}