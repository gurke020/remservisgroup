const FORMSPREE_URL = "https://formspree.io/f/mjgaqljl";

export async function submitFormspree(data: FormData): Promise<void> {
  const res = await fetch(FORMSPREE_URL, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error("Formspree error");
}
