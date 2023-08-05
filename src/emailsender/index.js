import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
// const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
import { SESClient } from "@aws-sdk/client-ses";

// Set the AWS Region.
const REGION = "us-east-1";
// Create SES service object.
const sesClient = new SESClient({ region: REGION });




export const handler = async (event) => {

    console.log("Event looks like: ", event)

    // console.log('event.body looks like: ',event.body)

    const bodyJson = event

    // console.log('event.isBase64Encoded looks like: ',event.isBase64Encoded)

    // if (!(event.isBase64Encoded == false)) {
    //     const body = new Buffer.from(event.body, 'base64').toString('binary')

    //     console.log('Did base 64 decode work? The original: ', event)
    //     console.log('The "decoded" version: ', body)

    //     const bodyDecoded = decodeURIComponent(body.replace(/\+/g, " ").replace(/\=/g,"\":\"").replace(/\&/g,"\",\""))
    //     console.log(bodyDecoded)
    //     bodyJson = JSON.parse('{\"'+bodyDecoded+'\"}')


    // }
    // else {
    //     console.log("Body not base64 encoded - using as plain text.")
    // bodyJson = JSON.parse(event)

    // }

    console.log("The output from the JSON attempt is: \n", bodyJson)

    console.log("Stringifying the bodyJson results in: \n", JSON.stringify(bodyJson))
    console.log("The email from the JSON (used as a to address) is: ", bodyJson.email)

    let emailBodyHtml = `Hello ${bodyJson.name}!<br>
    <br>
    Thank you for contacting me.<br>
    I'm included on the to line of this email, so if there's something more you need to tell me, just hit reply all!<br>
    Let me just make sure I got all of your information correct:<br>
    <ul>
    <li>Your email address is: ${bodyJson.email}</li>
    <li>Your name is: ${bodyJson.name}</li>
    <li>Your phone number is: ${bodyJson.phone}</li>
    <li>You wrote:<br>
    ${bodyJson.bodtext}<br></li>
    </ul>
    <br>
    <br>
    Again, I'll get back to you shortly - thank you again for contacting me!<br>
    <br>
    Best regards,<br>
    Edward "Ted" McCormick
    
    `

    console.log("The emailBodyHtml looks like: ",emailBodyHtml)

    const input = { // SendEmailRequest
        FromEmailAddress: "postmaster@mccormickhub.com",
        Destination: { // Destination
            ToAddresses: [ // EmailAddressList
                "ted.mccormick@gmail.com", bodyJson.email
            ],
        },
        Content: { // EmailContent
            Simple: { // Message
                Subject: { // Content
                    Data: "This is from the the emailsender lambda",
                },
                Body: { // Body
                    Html: {
                        Data: emailBodyHtml,
                    },
                },
            },
        },

    };

    const command = new SendEmailCommand(input);

    try {
        await sesClient.send(command)
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: "Thanks for contact me! And for checking your console to see this! I'll be back in touch with you shortly!"
        };
        return response
    } catch (e) {
        console.error("Failed to send email.");
        return e;
    }
};
