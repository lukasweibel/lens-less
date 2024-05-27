import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

uri = os.getenv("MONGODB_URI")

client = MongoClient(uri)
    
db = client['mdm']
    
collection = db['iot-lens-less']


def add_entry_to_db(prompt):
    document = {
        'prompt': prompt
    }

    collection.insert_one(document)
    print("Entry added to database.")

def get_all_entries():
    documents = collection.find({})
    documents_list = list(documents)
    cleaned_data = [{k: v for k, v in d.items() if k != '_id'} for d in documents_list]
    return cleaned_data



    