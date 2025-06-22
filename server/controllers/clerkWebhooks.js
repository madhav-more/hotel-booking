import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // Create Svix webhook instance using your Clerk Webhook secret
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // ✅ Correct spelling: "headers" not "headres"
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // ✅ Verify the webhook
    const event = wh.verify(JSON.stringify(req.body), headers);

    // ✅ Destructure data and type correctly
    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address || '',
      username: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
      image: data.image_url || '',
    };

    // ✅ Handle different webhook types
    switch (type) {
      case "user.created":
        await User.create(userData);
        break;

      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData, { new: true });
        break;

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;

      default:
        console.log(`Unhandled webhook event type: ${type}`);
    }

    res.status(200).json({ success: true, message: "Webhook received and processed." });

  } catch (error) {
    console.error("Webhook Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
