/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { hashPassword, verifyPassword } from "@/lib/auth";

describe("password hashing (scrypt)", () => {
  it("hashes and verifies a password", () => {
    const hash = hashPassword("demo1234");
    expect(hash).toContain(":");
    expect(hash).not.toContain("demo1234");
    expect(verifyPassword("demo1234", hash)).toBe(true);
    expect(verifyPassword("wrong-password", hash)).toBe(false);
  });

  it("produces a different salt per call", () => {
    expect(hashPassword("same")).not.toBe(hashPassword("same"));
  });

  it("rejects malformed stored hashes", () => {
    expect(verifyPassword("x", "garbage")).toBe(false);
    expect(verifyPassword("x", "")).toBe(false);
  });
});
