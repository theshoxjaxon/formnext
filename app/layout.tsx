
import "./globals.css";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="bg-white text-slate-900 antialiased light"

    >
      <head />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
