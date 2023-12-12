import React from 'react';

const emailStyle = {
  textAlign: 'left',
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
        We understand your frustrations and we are prioritizing your issue. I am happy to join a conference call if you are available. Please provide a few 30-minute time slots today and tomorrow that we can sync to resolve your issue.

      </p>
      <br />
        I cannot confirm of platform outages without further information from your end. We understand this is a difficult process and we welcome your feedback. I look forward to hearing from your.
      <p>
        
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
