import json
import boto3
import time

def lambda_handler(event, context):
    # Define the required passcode
    required_passcode = "YourRequiredPasscode"  # Replace with your actual passcode

    # Parse the input JSON from the event
    request_body = json.loads(event['body'])

    # Check if the passcode matches the required passcode
    if 'passcode' not in request_body or request_body['passcode'] != required_passcode:
        return {
            'statusCode': 401,
            'body': json.dumps('Unauthorized: Invalid passcode')
        }

    # Initialize DynamoDB client
    dynamodb = boto3.client('dynamodb')

    # Define the name of your DynamoDB table
    table_name = 'teds_blog_posts'

    # Create a timestamp for the entry (you may use a different method for timestamping)
    timestamp = str(time.time())

    # Prepare the item to be put into DynamoDB
    item = {
        'Timestamp': {'S': timestamp},
        'Title': {'S': request_body.get('Title', '')},
        'Body': {'S': request_body.get('Body', '')}
    }

    # Put the item into DynamoDB
    dynamodb.put_item(TableName=table_name, Item=item)

    # Return the response with 'Title', 'Body', and 'Timestamp'
    response = {
        'Title': request_body.get('Title', ''),
        'Body': request_body.get('Body', ''),
        'Timestamp': timestamp
    }

    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
