import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
// const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
import { SESClient } from "@aws-sdk/client-ses";
// Set the AWS Region.
const REGION = "us-east-1";
// Create SES service object.
const sesClient = new SESClient({ region: REGION });


const createSendEmailCommand = (toAddress, fromAddress, HTMLEmailBody, DataEmailBody, subject) => {
    return new SendEmailCommand({
        Destination: {
            /* required */
            CcAddresses: [
                /* more items */
            ],
            ToAddresses: [
                toAddress,
                /* more To-email addresses */
            ],
        },
        Message: {
            /* required */
            Body: {
                /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: HTMLEmailBody,
                },
                Text: {
                    Charset: "UTF-8",
                    Data: DataEmailBody,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject,
            },
        },
        Source: fromAddress,
        ReplyToAddresses: [
            /* more items */
        ],
    });
};

export const handler = async (event) => {
    console.log('event.body looks like: ',event.body)


    const body = new Buffer.from(event.body, 'base64').toString('binary')

    console.log('Did base 64 decode work? The original: ', event)
    console.log('The "decoded" version: ', body)

    const bodyDecoded = decodeURIComponent(body.replace(/\+/g, " ").replace(/\=/g,"\":\"").replace(/\&/g,"\",\""))
    console.log(bodyDecoded)
    const bodyJson = JSON.parse('{\"'+bodyDecoded+'\"}')

    console.log("The output from the JSON attempt is: \n", bodyJson)




    return  async () => {
        const sendEmailCommand = createSendEmailCommand(
            bodyJson.email,
            "tedmccormick@mccormickhub.com",
            bodyJson,
            "Nothing much for the Data Body",
            "This is a test of the contact-me-mail-forwarder"
        );

        try {
            return await sesClient.send(sendEmailCommand);
        } catch (e) {
            console.error("Failed to send email.");
            return e;
        }
    };




    // console.log('The bodtext variable looks like: ', body.bodtext)


    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Triggered the lambda named contact-me-forwarder. Look, you even got the new code! Great job! And look, now we\'re returning variables from the response too! Like this: ' + body),
    // };
    // return response;
};
