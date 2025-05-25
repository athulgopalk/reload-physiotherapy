import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw new Error("Failed to send email: " + error.text);
  }
};
