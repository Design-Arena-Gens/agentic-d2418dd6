import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GM Pine Tree Plantation - Business Plan',
  description: 'Comprehensive business plan for genetically modified pine tree plantation with financial projections and analysis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
