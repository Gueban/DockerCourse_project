from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS
import hashlib

'''import sys
sys.path.append('/run/secrets/gueban-secret')
import secret'''

import secret

server = Flask(__name__)
CORS(server)

server.config['MYSQL_HOST'] = secret.keys['Mysql']['HOST']
server.config['MYSQL_PORT'] = secret.keys['Mysql']['PORT']
server.config['MYSQL_USER'] = secret.keys['Mysql']['USER']
server.config['MYSQL_PASSWORD'] = secret.keys['Mysql']['PASSWORD']
server.config['MYSQL_DB'] = secret.keys['Mysql']['DB']

mysql = MySQL(server)

#----------------HEALTH CHECK------------
@server.route('/', methods=["GET"])
def ping():
    return jsonify({'message' : "Hi! I'm listening Opus by Eric Prydz and I'm ready to work!"})

#--------------ADD TO MYSQL-------------
@server.route('/sql', methods=['POST'])
def addSql():
    email = request.json['email']
    name = request.json['name']
    password = hashlib.md5(request.json['password'].encode()).hexdigest()
    curs = mysql.connection.cursor()
    curs.execute("INSERT INTO Person (name, email, password) VALUES (%s, %s, %s);", (name, email, password))
    mysql.connection.commit()
    curs.close
    return jsonify({'message': 'User successfully created.'})

if __name__ == '__main__':
    server.run(debug=True, host='0.0.0.0', port=2800)