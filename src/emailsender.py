import boto3
import json

ses = boto3.client('ses')

def lambda_handler(event, context):
    try:
        # Parse the incoming event JSON
        event_body = json.loads(event['body'])

        # Extract information from the event
        email = event_body['email']
        name = event_body['name']
        phone = event_body['phone']
        bodtext = event_body['bodtext']

        # Create the email subject and body
        subject = "Thank you for contacting me"
        body = f"""
            <html>
            <body>
            <p>Hello {name}!</p>
            <p>Thank you for contacting me.</p>
            <p>I'm included on the to line of this email, so if there's something more you need to tell me, just hit reply all!</p>
            <p>Let me just make sure I got all of your information correct:</p>
            <ul>
                <li>Your email address is: {email}</li>
                <li>Your name is: {name}</li>
                <li>Your phone number is: {phone}</li>
                <li>You wrote:<br>{bodtext}</li>
            </ul>
            <p>Again, I'll get back to you shortly - thank you again for contacting me!</p>
            <p>Best regards,<br>Edward "Ted" McCormick</p>
            </body>
            </html>
        """

        # Send the email
        response = ses.send_email(
            Source="postmaster@mccormickhub.com",  # Replace with your verified email
            Destination={
                'ToAddresses': [email],
            },
            Message={
                'Subject': {'Data': subject},
                'Body': {'Html': {'Data': body}},
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps('Email sent successfully'),
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error: {str(e)}'),
        }
