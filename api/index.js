import app from "../server.js";

// Vercel serverless function handler
export default (req, res) => {
  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Pass the request to the Express app
  return app(req, res);
};

// Export for Vercel
export const config = {
  api: {
    bodyParser: false,
  },
};
