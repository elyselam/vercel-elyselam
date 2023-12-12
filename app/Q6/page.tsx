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

export default function Q6() {
  return (
    <div style={emailStyle}>
      <p>Hello customer_first_name,</p>
      <br />
      <p>
        I understand that you would like to ensure your project is not indexed by search engines. To solve this problem, the <code>
          <a href="https://vercel.com/docs/edge-network/headers#x-robots-tag" style={linkStyle}>x-robots-tag</a>
        </code> is provided, which allows you to specify if you want your site to be visible on search engines. This tag is to be set as an HTTP header from requests made to the website. Vercel Preview Deployments are not indexed by search engines by default because the <code>X-Robots-Tag</code> HTTP header is set to <code>noindex</code>. If you are using a Custom Domain that is assigned to a non-Production Branch, however, the header <code>X-Robots-Tag: noindex</code> will not be set.
      </p>
      <br />
      <p>
        If you don&apos;t already have a <code>vercel.json</code> file, please add the following. If you already have a <code>vercel.json</code> file, ignore the outer braces, and just add the <code>headers</code> key inside your object.
      </p>
      <br />
      <p>
        If you are using a Custom Domain for your preview deployments and wish to override the default behavior of omitting <code>X-Robots-Tag: noindex</code>, you should first look to inject the response header using your framework&apos;s built-in methods. If you are not using a framework or your framework does not support injecting response headers, you may modify the Header object in your <code>vercel.json</code> file.
      </p>
      <br />
      <p>
        Please refer to this documentation for code samples{' '}
        <a href="https://vercel.com/docs/edge-network/headers#x-robots-tag" style={linkStyle}>
          [1]
        </a>.
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
