import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.2.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Handle browser preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    const {
      to,
      name,
      service,
      price,
      stylist,
      date,
      time,
      notes,
    } = await req.json();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0;padding:0;background:#f8f8f8;font-family:Arial,sans-serif;">

  <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #fbcfe8;">

    <!-- HEADER -->
    <div style="background:#1a1218;padding:40px 30px;text-align:center;">
      <p style="margin:0 0 10px 0;color:#f9a8d4;font-size:12px;letter-spacing:2px;text-transform:uppercase;">
        Appointment Confirmation
      </p>

      <h1 style="margin:0;color:#ffffff;font-weight:300;font-size:32px;">
        Booking Confirmed ✨
      </h1>
    </div>

    <!-- CONTENT -->
    <div style="padding:32px;">

      <p style="font-size:16px;color:#111827;margin-top:0;">
        Hi <strong>${name}</strong>,
      </p>

      <p style="font-size:15px;line-height:1.7;color:#6b7280;">
        Thank you for booking with us. Your appointment has been successfully confirmed.
      </p>

      <!-- BOOKING CARD -->
      <div
        style="
          background:#fdf2f8;
          border:1px solid #fbcfe8;
          border-radius:12px;
          padding:24px;
          margin-top:24px;
        "
      >
        <h2
          style="
            margin:0 0 20px 0;
            color:#db2777;
            font-size:20px;
          "
        >
          Booking Details
        </h2>

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          style="border-collapse:collapse;"
        >

          <tr>
            <td style="padding:10px 0;color:#6b7280;">
              Service
            </td>
            <td style="padding:10px 0;text-align:right;color:#111827;font-weight:600;">
              ${service}
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;color:#6b7280;">
              Price
            </td>
            <td style="padding:10px 0;text-align:right;color:#111827;font-weight:600;">
              ${price}
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;color:#6b7280;">
              Stylist
            </td>
            <td style="padding:10px 0;text-align:right;color:#111827;font-weight:600;">
              ${stylist}
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;color:#6b7280;">
              Date
            </td>
            <td style="padding:10px 0;text-align:right;color:#111827;font-weight:600;">
              ${date}
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;color:#6b7280;">
              Time
            </td>
            <td style="padding:10px 0;text-align:right;color:#111827;font-weight:600;">
              ${time}
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;color:#6b7280;">
              Name
            </td>
            <td style="padding:10px 0;text-align:right;color:#111827;font-weight:600;">
              ${name}
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;color:#6b7280;">
              Email
            </td>
            <td style="padding:10px 0;text-align:right;color:#111827;font-weight:600;">
              ${to}
            </td>
          </tr>

          ${
            notes
              ? `
          <tr>
            <td style="padding:10px 0;color:#6b7280;">
              Notes
            </td>
            <td style="padding:10px 0;text-align:right;color:#111827;font-weight:600;">
              ${notes}
            </td>
          </tr>
          `
              : ""
          }

        </table>
      </div>

      <!-- IMPORTANT INFO -->
      <div
        style="
          margin-top:24px;
          background:#ffffff;
          border-left:4px solid #db2777;
          padding:16px;
        "
      >
        <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;">
          Please arrive 10 minutes before your appointment time.
          If you need to reschedule or cancel, kindly contact us as soon as possible.
        </p>
      </div>

    </div>

    <!-- FOOTER -->
    <div
      style="
        background:#fdf2f8;
        border-top:1px solid #fbcfe8;
        padding:24px;
        text-align:center;
      "
    >
      <p
        style="
          margin:0;
          color:#be185d;
          font-size:14px;
          font-weight:500;
        "
      >
        We look forward to seeing you 💖
      </p>
    </div>

  </div>

</body>
</html>
`;

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: `Booking Confirmation - ${service}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);

      return new Response(
        JSON.stringify({
          success: false,
          error,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});