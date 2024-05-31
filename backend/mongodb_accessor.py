import os
import json
from pymongo import MongoClient
from dotenv import load_dotenv
from datetime import datetime
from bson import ObjectId
from pymongo import DESCENDING

load_dotenv()

uri = os.getenv("MONGODB_URI")

client = MongoClient(uri)
    
db = client['mdm']
    
collection = db['iot-lens-less']


class CustomJSONEncoder(json.JSONEncoder):
    """ Custom JSON Encoder that handles non-serializable types. """
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        elif isinstance(obj, ObjectId):
            return str(obj)
        return super().default(obj)

def add_entry_to_db(prompt, picture_id, original_data):
    document = {
        'created': datetime.now(),
        'prompt': prompt,
        'pictureId': picture_id,
        'originalData': original_data
    }
    collection.insert_one(document)
    print("Entry added to database.")
    
def get_entry_by_picture_id(picture_id):
    query = {"pictureId": int(picture_id)}
    document = collection.find_one(query)
    return document

def get_all_entries():
    documents = collection.find({}).sort('created', DESCENDING)
    documents_list = list(documents)
    return json.dumps(documents_list, cls=CustomJSONEncoder)