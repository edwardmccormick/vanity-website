import json
import boto3

def lambda_handler(event, context):
    # Define the required passcode
    required_passcode = "YourRequiredPasscode"  # Replace with your actual passcode

    # Parse the input JSON from the event
    request_body = json.loads(event['body'])
    request_title = json.loads(event['title'])

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
        'Body': {'S': json.dumps(request_body.body)}
        'Title': {'S': json.dumps(request_body.title)}
    }

    # Put the item into DynamoDB
    dynamodb.put_item(TableName=table_name, Item=item)

    return {
        'statusCode': 200,
        'body': json.dumps('Data saved to DynamoDB successfully!')
    }
