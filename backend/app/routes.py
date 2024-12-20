from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        'message': 'Hello from Flask!',
        'status': 'success'
    }
    return jsonify(data)

@app.route('/api/data', methods=['POST'])
def post_data():
    content = request.json
    return jsonify({'received': content, 'status': 'success'}), 201

if __name__ == '__main__':
    app.run(debug=True)