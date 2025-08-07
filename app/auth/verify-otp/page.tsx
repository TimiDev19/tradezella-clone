// This is a Server Component
"use client"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the client component
const OtpForm = dynamic(() => import('@/app/auth/verify-otp/OtpForm'), {
  ssr: false, // ⛔️ disables server-side rendering for this component
});

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtpForm />
    </Suspense>
  );
}
