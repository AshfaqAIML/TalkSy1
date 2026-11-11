import { db } from "@/lib/db";
import {
  buildSessionCookie,
  createSession,
  verifyPassword,
} from "@/lib/auth";
import { jsonError, readJson } from "@/lib/api-helpers";

interface LoginBody {
  email?: unknown;
  password?: unknown;
}

export async function POST(req: Request) {
  const body = await readJson<LoginBody>(req);
  if (!body) return jsonError("Invalid request body.");

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return jsonError("Email and password are required.", 422);
  }

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return jsonError("Incorrect email or password.", 401);
  }

  const { token, expiresAt } = await createSession(user.id);

  return new Response(
    JSON.stringify({ user: { id: user.id, email: user.email, name: user.name } }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "set-cookie": buildSessionCookie(token, expiresAt),
      },
    },
  );
}
