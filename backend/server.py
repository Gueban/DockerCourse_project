from flask import Flask, jsonify, request
from flask_cors import CORS

server = Flask(__name__)
CORS(server)

@server.route('/', methods=["GET"])
def ping():
    return jsonify({'message' : "Hi! I'm listening Opus by Eric Prydz and I'm ready to work!"})

if __name__ == '__main__':
    server.run(debug=True, host='0.0.0.0', port=2800)