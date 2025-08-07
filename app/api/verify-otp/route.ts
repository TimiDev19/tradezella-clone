// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const res = await fetch('http://194.163.45.247:3000/api/auth/verify-otp', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(body),
//   });

//   const data = await res.json().catch(() => ({}));
//   return NextResponse.json(data, { status: res.status });
// }


// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const { phone, otp } = await req.json();

//     const backendRes = await fetch('http://194.163.45.247:3000/api/auth/verify-otp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ phone, otp }),
//     });

//     // If your backend doesn't return JSON, prevent crash
//     let data = {};
//     try {
//       data = await backendRes.json();
//     } catch (jsonError) {
//       console.warn('Backend returned no JSON. Skipping JSON parsing.');
//     }

//     return NextResponse.json(data, { status: backendRes.status });
//   } catch (error) {
//     console.error('❌ Error in /api/verify-otp route:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


// app/api/verify-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { phone, otp } = await req.json();

    const backendRes = await fetch('http://194.163.45.247:3000/api/auth/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, otp }),
    });

    let data = {};
    try {
      data = await backendRes.json();
    } catch {
      // If backend doesn't return JSON, skip parsing
    }

    return NextResponse.json(data, { status: backendRes.status });
  } catch (error) {
    console.error('❌ /api/verify-otp error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
