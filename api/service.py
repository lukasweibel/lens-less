from flask import Flask, request
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='./../frontend/public', static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/data', methods=['POST'])
def postData():
    data = request.json
    print(data)
    return {"received_data": data}, 200

if __name__ == '__main__':
    app.run(debug=True, port=80)
