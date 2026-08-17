import crypto from "crypto";

const ESEWA_SECRET_KEY = process.env.ESEWA_SECRET_KEY || "8gBm/:&EnhH.1/q"; // Demo secret key
const DEFAULT_CLIENT_URL = "http://localhost:5173";

function createEsewaSignature(fields) {
  const signedPayload = fields.signed_field_names
    .split(",")
    .map((fieldName) => `${fieldName}=${fields[fieldName]}`)
    .join(",");

  return crypto.createHmac("sha256", ESEWA_SECRET_KEY).update(signedPayload).digest("base64");
}

export async function getEsewaConfig(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const amount = url.searchParams.get("amount") || "0";
  const transactionUuid = `AURAAR-${Date.now()}`;
  const clientUrl = process.env.CLIENT_URL || request.headers.origin || DEFAULT_CLIENT_URL;

  const fields = {
    amount: Number(amount).toFixed(2),
    tax_amount: "0.00",
    total_amount: Number(amount).toFixed(2),
    transaction_uuid: transactionUuid,
    product_code: "EPAYTEST",
    product_service_charge: "0.00",
    product_delivery_charge: "0.00",
    success_url: `${clientUrl}/checkout/success`,
    failure_url: `${clientUrl}/checkout/failure`,
    signed_field_names: "total_amount,transaction_uuid,product_code"
  };

  fields.signature = createEsewaSignature(fields);

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ formUrl: "https://rc-epay.esewa.com.np/api/epay/main/v2/form", fields }));
}
