import Navigation from "./_components/navigation/Navigation";
import Background from "./_components/background/Background";
import Console from "./_components/console-log/Console";
import SecureRedirect from "./_components/redirect/SecureRedirect";
import "./globals.css";

export const metadata = {
  title: "Lucas Mace | Full Stack Web Developer",
  description:
    "Lucas Mace is a web developer with an expanding focus on Page Speed and Performance, SEO, Accessibility and Reusable code.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <SecureRedirect />
      <html lang="en">
        <body>
          <Background />
          <header>
            <h1>Lucas Mace</h1>
            <h2>Full Stack Web Developer</h2>
          </header>
          <main className="mainGrid">
            <div className="gridSpacer"></div>
            {children}
          </main>
          <Navigation />
          <Console />
        </body>
      </html>
    </>
  );
}
