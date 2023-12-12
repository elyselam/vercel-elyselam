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


export default function Q4() {
  return (
    <div style={emailStyle}>
          <p>Hello customer_first_name,</p>
          <br />
          <p>

        Thank you for contacting Vercel Support. I am Elyse, and I will be supporting you from the PST timezone.
          </p>
          <br />
      <p>
        I understand you would like to redirect the &quot;/blog&quot; path on your Vercel project to another website. Please correct me if I have not fully understood your request.
      </p>
      <br />
      <p>
        Please review the following documentation for more details{' '}
        <a href="https://vercel.com/docs/edge-network/redirects#configuration-redirects" style={linkStyle}>
          [1]
        </a>. With redirects on Vercel, you can define HTTP redirects in your application&apos;s configuration, regardless of the framework that you are using, including both dynamic and static redirects. Redirects are processed at the Edge across all regions.
          </p>
          <br />
      <p>
        “Configuration-based redirects can be defined in a framework-specific config file or in the vercel.json file, which is located in the root of your application. The vercel.json should contain a redirects field, which is an array of redirect rules.”
      </p>
      <p>
        Please review these redirect status codes to learn more about how they impact SEO{' '}
        <a href="https://vercel.com/docs/edge-network/redirects#redirect-status-codes" style={linkStyle}>
          [2]
        </a>.
          </p>
          <br />
      <p>
        Please reach out if you have further questions.
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