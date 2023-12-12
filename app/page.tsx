import Link from 'next/link';
import Header from './Header';

const listItemStyle = {
  margin: '20px 0',
  textAlign: 'left', 
  
  color: '#008080',
};

export default function Home() {
  return (
    <div>
      <Header />
    
    
    
    <ul>
      <li style={listItemStyle}>
        <Link href="/Q1">
          <div>
            <strong>1)</strong> Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?
          </div>
        </Link>
      </li>

      <li style={listItemStyle}>
        <Link href="/Q2">
          <div>
            <strong>2)</strong> How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.
          </div>
        </Link>
      </li>

      <li style={listItemStyle}>
        <Link href="/Q3">
          <div>
            <strong>3)</strong> When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
          </div>
        </Link>
      </li>

      <li style={listItemStyle}>
        <Link href="/Q4">
          <div>
            <strong>4)</strong> A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision-making process.
          </div>
        </Link>
      </li>

      <li style={listItemStyle}>
        <Link href="/Q5">
          <div>
            <strong>5)</strong> Imagine that the customer from Question 4 responds with the following email. “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions.”
          </div>
        </Link>
      </li>

      <li style={listItemStyle}>
        <Link href="/Q6">
          <div>
            <strong>6)</strong> A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision-making process.
          </div>
        </Link>
        </li>
        <li style={listItemStyle}>
        <Link href="/Q7">
          <div>
            <strong>7)</strong> How could we improve or alter this familiarization exercise?
          </div>
        </Link>
      </li>
      </ul>
      </div>
  );
}
