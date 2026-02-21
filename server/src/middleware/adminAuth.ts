import { Request, Response, NextFunction } from 'express';

// Load admin key from environment variable.
// In production, ADMIN_API_KEY MUST be set to a strong, unique secret.
// The fallback is for local development only.
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

if (!ADMIN_API_KEY) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('ADMIN_API_KEY environment variable must be set in production');
  }
  console.warn(
    '[adminAuth] WARNING: ADMIN_API_KEY is not set. Using insecure dev-only fallback. Set ADMIN_API_KEY for production.',
  );
}

const effectiveKey = ADMIN_API_KEY || 'admin-dev-key';

export function adminAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized: missing or invalid Authorization header' });
    return;
  }
  const token = authHeader.slice(7);
  if (token !== effectiveKey) {
    res.status(401).json({ message: 'Unauthorized: invalid admin token' });
    return;
  }
  next();
}
