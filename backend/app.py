from flask import Flask, jsonify, request
from flask_cors import CORS

# pip install flask
# pip install flask-cors

app = Flask(__name__)
CORS(app)

list_pessoas = []

@app.route('/pessoas')
def pessoas():
    return jsonify({ "pessoas": list_pessoas })

@app.route('/pessoa/add', methods=['POST'])
def pessoaAdd():
    list_pessoas.append(request.json)
    return jsonify({ "pessoas": list_pessoas })

if __name__ == '__main__':
    app.run()