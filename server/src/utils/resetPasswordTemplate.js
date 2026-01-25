const resetPasswordTemplate = (name, resetLink) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Reset Your Password</title>
  </head>
  <body style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
    <table width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <table width="600" style="background:#ffffff; padding:20px; border-radius:8px;">
            <tr>
              <td align="center">
                <h2 style="color:#333;">Reset Your Password</h2>
              </td>
            </tr>

            <tr>
              <td>
                <p>Hi <strong>${name}</strong>,</p>

                <p>
                  We received a request to reset your password. Click the button
                  below to set a new password.
                </p>

                <div style="text-align:center; margin:30px 0;">
                  <a href="${resetLink}"
                     style="
                       background:#ef9815;
                       color:#ffffff;
                       padding:12px 24px;
                       text-decoration:none;
                       border-radius:5px;
                       font-weight:bold;
                       display:inline-block;
                     ">
                    Reset Password
                  </a>
                </div>

                <p>
                  This password reset link will expire in
                  <strong>10 minutes</strong>.
                </p>

                <p>
                  If you did not request a password reset, please ignore this
                  email. Your account will remain secure.
                </p>

                <p style="margin-top:30px;">
                  Regards,<br/>
                  <strong>GullyBits Team</strong>
                </p>
              </td>
            </tr>
          </table>

          <p style="font-size:12px; color:#999; margin-top:10px;">
            © ${new Date().getFullYear()} GullyBits. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};

module.exports = resetPasswordTemplate;
