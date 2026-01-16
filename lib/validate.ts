export function Validate(email: string, password: string): string | null {
  if (!email || !password) return "Email and password are required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format";
  if (password.length < 6) return "Password must be at least 6 characters";
  return null;
}
