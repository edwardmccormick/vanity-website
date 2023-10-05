import json
import boto3

def lambda_handler(event, context):
    # Initialize DynamoDB client
    dynamodb = boto3.client('dynamodb')

    # Define the name of your DynamoDB table
    table_name = 'teds_blog_posts'

    # Scan the DynamoDB table to retrieve the most recent entries
    response = dynamodb.scan(
        TableName=table_name,
        Limit=5,
        ScanIndexForward=False,  # Sort in descending order
        Select='ALL_ATTRIBUTES'  # Return all attributes
    )

    # Extract and format the data from the response
    entries = []
    for item in response.get('Items', []):
        timestamp = item.get('Timestamp', {}).get('S', '')
        data = item.get('Data', {}).get('S', '')
        title = item.get('Title'), {}).get('S', '')
        entries.append({
            'Timestamp': timestamp,
            'Data': json.loads(data.Body)
            'Title': json.loads(data.Title)
        })

    return {
        'statusCode': 200,
        'body': json.dumps(entries)
    }
