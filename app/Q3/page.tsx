
export default function Q3() {
  return (
   
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Edge Functions uses Edge Runtime to deliver dynamic, personalized content with minimal cold starts, globally distributed by default and pricing is based on compute time. It is more performant and cost effective than Serverless Functions on average. Edge Runtime provides access to a subset of the most important browser APIs, meanwhile Serverless Functions give you access to all Node.js APIs.
It’s used for immediate interaction with data over network such as executing OAuth callbacks, responding to webhook requests and APIs that fails if request is not completed within a short time limit
Edge Functions is multi-regional, has no cold start, and can execute geographically near your users, or near your databases with low latency and accrue lower costs than Serverless Functions. If you need low latency and high bandwidth for your application, Edge Functions are a better option.

Serverless Function allows you to run code without managing your own infrastructure. If you need a more scalable solution with more out-of-the-box integrations, serverless functions might be the way to go.  Serverless functions are designed to be platform-agnostic and can easily integrate with a broader range of other technologies. Serverless Function is single-regioned and executes at that region first, while Edge Functions are executed close to the end-users across Vercel's global network.  Vercel supports several runtimes for Serverless Functions (Node.js, Go, Ruby, Python), while Edge Functions use the lightweight Edge Runtime and has limited access to a subset of the most important browser APIs. 


Edge Middleware provides code that executes before a request is processed on a site. It runs before the cache so it’s an effective way to provide personalized logic, rewrite, redirect, add headers and more before returning a response to statically generated content. Both Edge Functions and Edge Middleware run on Edge Runtime. You can use Edge functions instead of Serverless functions while you can use Edge middleware together with Serverless functions.
      </div>

  )
}