import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
// const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
import { SESClient } from "@aws-sdk/client-ses";
// Set the AWS Region.
const REGION = "us-east-1";
// Create SES service object.
const sesClient = new SESClient({ region: REGION });
const input = { // SendEmailRequest
    FromEmailAddress: "postmaster@mccormickhub.com",
    Destination: { // Destination
        ToAddresses: [ // EmailAddressList
            "ted.mccormick@gmail.com",
        ],
    },
    Content: { // EmailContent
        Simple: { // Message
            Subject: { // Content
                Data: "Email received from ted.mccormickhub.com",
            },
            Body: { // Body
                Html: {
                    Data: "Hey look here's some HTML look at me wooooo!",
                },
            },
        },
    },

};
const command = new SendEmailCommand(input);
const response = await client.send(command);
// { // SendEmailResponse
//   MessageId: "STRING_VALUE",
// };