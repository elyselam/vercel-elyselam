import React from 'react';

const emailStyle = {
  textAlign: 'left' as const,
  margin: '50px auto',
  maxWidth: '600px',
  fontSize: '16px',
  lineHeight: '1.5',
 
};

const linkStyle = {
  color: '#008080', 
  textDecoration: 'underline',
};

export default function Q5() {
  return (
    <div style={emailStyle}>
      <p>Hello customer_first_name,</p>
      <br />
      <p>
        I am sorry to hear about the frustration you have experienced. and we are prioritizing your issue. Are you using relative paths or wildcards? What have you tried and please attach documentations you have reviewed so we can attempt to reproduce the issue on our end.
        I cannot confirm of platform outages without further information from your end. We understand this is a difficult process and we welcome your feedback.

      </p>
      <br />
      <p>
        
 
        I am happy to join a conference call if you are available. While I cannot troubleshoot live during the call, having a more detailed conversation will allow me to better understand the problem and provide more targeted assistance. Could you please suggest a few time slots that work for you, and we can coordinate a call to explore the issue together?
      </p>
      <br />
      <p>Best Regards,</p>
      <p>Elyse</p>
      <p>Vercel Support</p>
     <p>
         Working Hours: 9:00AM - 5:00PM PST     
      </p>
    </div>
  );
}
