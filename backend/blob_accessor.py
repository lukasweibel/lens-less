import os
import random
from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv

load_dotenv()

azure_connection_string = os.getenv("AZURE_CONNECTION_STRING")

container_name = 'lens-less-pictures'

def upload_picture(data):
    random_number = random.randint(1000, 9999)
    while not check_number_for_availability(random_number):
        random_number = random.randint(1000, 9999)
        
    name = str(random_number) + ".png"
    print(name)
        
    try:
        blob_service_client = BlobServiceClient.from_connection_string(azure_connection_string)

        blob_client = blob_service_client.get_blob_client(container=container_name, blob=name)

        blob_client.upload_blob(data)

        print("Upload completed successfully.")
    
        return random_number

    except Exception as ex:
        print('Exception:')
        print(ex)

    
def load_picture(name):
    blob_service_client = BlobServiceClient.from_connection_string(azure_connection_string)

    blob_client = blob_service_client.get_blob_client(container=container_name, blob=name)

   #with open(destination_file_path, "wb") as download_file:
   #    download_file.write(blob_client.download_blob().readall())
    return blob_client.download_blob().readall()
    
def check_number_for_availability(number):
    try:
        # Create a blob service client to interact with the blob service
        blob_service_client = BlobServiceClient.from_connection_string(azure_connection_string)

        # Get a client to interact with the specified container
        container_client = blob_service_client.get_container_client(container_name)

        # List all blobs in the container and print their names
        print("Listing blobs in container:", container_name)
        blob_list = container_client.list_blobs()
        for blob in blob_list:
            if str(number) + ".png" == blob.name:
                return False

        return True 
            

    except Exception as ex:
        print('Exception:')
        print(ex)

    

if __name__ == "__main__":
    check_number_for_availability(210)
