import { Validate } from "@/lib/validate";

export async function POST(_req: Request) {
  const { email, password } = await _req.json();
  const err = Validate(email, password);
  if (err != null) {
    return Response.json({ error: err }, { status: 400 });
  }

  return Response.json({ data: { token: "fake token" } });
}
