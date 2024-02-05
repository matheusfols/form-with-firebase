import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId: string = process.env.NEXT_PUBLIC_GTM || '';

  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleTagManager gtmId={gtmId} />
    </html>
  );
}
